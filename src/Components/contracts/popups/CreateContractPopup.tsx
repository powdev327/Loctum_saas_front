import Button from "../../ui/button/Button.tsx";
import {AffiliationFieldsComponent} from "./ContractFieldsPopup/AffiliationFields.tsx";
import {RemplacementFieldsComponent} from "./ContractFieldsPopup/RemplacementFields.tsx";
import {PlacementFieldsComponent} from "./ContractFieldsPopup/PlacementFields.tsx";
import {PharmacyFields} from "./ContractFieldsPopup/PharmacyFields.tsx";
import {BaseFields} from "./ContractFieldsPopup/BaseFields.tsx";
import Radio from "../../form/input/Radio.tsx";
import Label from "../../form/Label.tsx";
import Select from "../../form/Select.tsx";
import {Modal} from "../../ui/modal";
import toast from "react-hot-toast";
import useContractForm from "../../../hooks/owner/contract/useContractHook.ts";
import {useClient} from "../../../context/owner/ClientContext.tsx";
import {useContract} from "../../../context/owner/ContractContext.tsx";
import {DentalFields} from "./ContractFieldsPopup/DentalFields.tsx";
import Checkbox from "../../form/input/Checkbox";
import Input from "../../form/input/InputField";
import TextArea from "../../form/input/TextArea.tsx";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext"; 

const generateDateRange = (startDate: string, endDate: string): string[] => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dateArray = [];
  
  const currentDate = new Date(start);
  while (currentDate <= end) {
    dateArray.push(new Date(currentDate).toISOString().split('T')[0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dateArray;
};

// Update this function in CreateContractPopup.tsx
const processContractTypes = (contractTypes) => {
  if (!contractTypes || !Array.isArray(contractTypes) || contractTypes.length === 0) {
    // Default to all contract types if none specified
    return ["placement", "affiliation", "remplacement"];
  }
  
  // Make all types lowercase for consistent comparison
  return contractTypes.map(type => {
    if (typeof type === 'string') {
      return type.toLowerCase();
    } else if (typeof type === 'object') {
      return (type.value || type.id || "").toLowerCase();
    }
    return "";
  }).filter(Boolean);
};

// Helper function to generate position title based on industry type and contract type
const generatePositionTitle = (industryType, contractType, specificFields) => {
    let title = "";
    
    // Base on industry type
    if (industryType === "pharmacy") {
        // Use the position_type from pharmacy fields if available
        if (specificFields && specificFields.position_type) {
            title = specificFields.position_type;
        } else {
            title = "Pharmacien";  // Default for pharmacy
        }
    } else if (industryType === "dental_clinic") {
        // Use the position_type from dental fields if available
        if (specificFields && specificFields.position_type) {
            title = specificFields.position_type;
        } else {
            title = "Dentiste";  // Default for dental
        }
    }
    
    // Append contract type to make it more specific
    if (contractType) {
        title += ` - ${contractType.charAt(0).toUpperCase() + contractType.slice(1)}`;
    }
    
    return title || "Position Title";  // Fallback if nothing else works
};

export function CreateContractPopup({ isOpen, closeModal }) {
    const { institutions, client_id } = useClient();
    const { storeContract } = useContract();
    const { user } = useAuth(); // Add this line to get the user object
    const [submissionAttempted, setSubmissionAttempted] = useState(false);
    const {
        contract_type, setContractType,
        status, setStatus,
        // position_title removed as per requirements
        description, setDescription,
        start_date, setStartDate,
        end_date, setEndDate,
        hourly_rate, setHourlyRate,
        institution, setInstitution,
        placementFields, setPlacementFields,
        affiliationFields, setAffiliationFields,
        feesEnabled, setFeesEnabled,
        industry_type, setIndustryType,
        remplacementFields, setRemplacementFields,
        pharmacyIndustryFields, setPharmacyIndustryFields,
        dentalIndustryFields, setDentalIndustryFields,
        generateDateRange,
    } = useContractForm();

    const [isInQuebec, setIsInQuebec] = useState(false);
    const [isWorkHoursPopupOpen, setIsWorkHoursPopupOpen] = useState(false);

    useEffect(() => {
        if (institution) {
            // Get the raw institution object
            const foundInstitution = institutions.find(inst => 
                inst.institution_id === institution.value
            );
            
            if (foundInstitution) {
                const isQuebec = 
                    (foundInstitution.province && ['quebec', 'qc', 'québec'].includes(foundInstitution.province.toLowerCase())) ||
                    (foundInstitution.city && ['quebec', 'québec', 'montréal', 'montreal'].includes(foundInstitution.city.toLowerCase()));
                
                setIsInQuebec(isQuebec);
            }
        }
    }, [institution, institutions]);

    // Add this useEffect near the top of your component with your other effects
    useEffect(() => {
        if (contract_type === "placement") {
          if (industry_type === "pharmacy") {
            setPharmacyIndustryFields(prev => ({
              ...prev,
              position_type: prev.position_type || "Pharmacien",
              working_hours: "09:00-17:00", // Set a default value for working_hours
              required_experience: prev.required_experience || "Any"
            }));
          } else if (industry_type === "dental_clinic") {
            setDentalIndustryFields(prev => ({
              ...prev,
              position_type: prev.position_type || "dentiste_generaliste",
              working_hours: "09:00-17:00", // Set a default value for working_hours
              required_experience: prev.required_experience || "Any"
            }));
          }
        }
    }, [contract_type, industry_type]);

    useEffect(() => {
      // Initialize default values when placement is selected
      if (contract_type === "placement") {
        if (industry_type === "pharmacy") {
          setPharmacyIndustryFields(prev => ({
            ...prev,
            position_type: prev.position_type || "Pharmacien",
            working_hours: "09:00-17:00", // Set a default value for working_hours
            required_experience: prev.required_experience || "Any"
          }));
        } else if (industry_type === "dental_clinic") {
          setDentalIndustryFields(prev => ({
            ...prev,
            position_type: prev.position_type || "dentiste_generaliste",
            working_hours: "09:00-17:00", // Set a default value for working_hours
            required_experience: prev.required_experience || "Any"
          }));
        }
      }
    }, [contract_type, industry_type]);

    // Add a new useEffect to set a default position_title for Mission spécialisée
    useEffect(() => {
      if (contract_type === "remplacement") {
        // Check if mission_special is true in the industry fields
        const isMissionSpecial = 
          (industry_type === "pharmacy" && pharmacyIndustryFields?.mission_special) ||
          (industry_type === "dental_clinic" && dentalIndustryFields?.mission_special);
        
        if (isMissionSpecial && !remplacementFields.position_title) {
          // Set a default position title for specialized missions
          setRemplacementFields(prev => ({
            ...prev,
            position_title: `Spécialiste - ${industry_type === "pharmacy" ? "Pharmacie" : "Dentaire"}`
          }));
        }
      }
    }, [
      contract_type, 
      industry_type, 
      pharmacyIndustryFields?.mission_special, 
      dentalIndustryFields?.mission_special,
      remplacementFields.position_title
    ]);

    const handleSubmit = async () => {
        console.log("Starting form submission");
        console.log("Current remplacementFields:", remplacementFields);
        
        // Check required fields
        const missingFields = [];
        if (!remplacementFields.mission_objective) missingFields.push("mission_objective");
        if (!remplacementFields.position_title) missingFields.push("position_title");  // This is causing your error
        if (!remplacementFields.preferred_date) missingFields.push("preferred_date");
        if (!remplacementFields.end_date) missingFields.push("end_date");
        if (!remplacementFields.proposed_rate) missingFields.push("proposed_rate");
        
        if (missingFields.length > 0) {
            console.error("Missing required fields:", missingFields);
            setSubmissionAttempted(true);
            return;
        }

        // Set submission attempted to true to trigger validation warnings
        setSubmissionAttempted(true);
        
        if (!institution?.value || !contract_type) {
            toast.error("Missing required fields institution_id or contract_type");
            return;
        }
        if (
            contract_type === "placement" &&
            (!placementFields.desired_position || !placementFields.experience_level || !placementFields.compensation)
        ) {
            toast.error("Missing required placement fields");
            return;
        }
        if (
            contract_type === "affiliation" &&
            (!affiliationFields.establishment_name || !affiliationFields.position_sought)
        ) {
            toast.error("Missing required affiliation fields");
            return;
        }
        if (
            contract_type === "remplacement" &&
            (
                // We don't check mission_type, required_specialty, and estimated_duration
                !remplacementFields.mission_objective ||
                !remplacementFields.preferred_date ||
                !remplacementFields.proposed_rate
            )
        ) {
            toast.error("Missing required remplacement fields");
            return;
        }

        const formData = new FormData();
        const baseContract = {
            client_id,
            institution_id: institution.value,
            contract_type: contract_type.toUpperCase(),
            industry: industry_type,
            status: status || "PENDING",
            // Position title is required by the backend but removed from UI as per requirements
            // Adding a default value based on industry type and contract type
            position_title: generatePositionTitle(industry_type, contract_type, 
                industry_type === "pharmacy" ? pharmacyIndustryFields : dentalIndustryFields),
            description: description || "",
            start_date: start_date || "",
            end_date: end_date || "",
            hourly_rate: hourly_rate || 0,
        };

        // Modify the baseContract object when contract_type is "remplacement"
        if (contract_type === "remplacement") {
            // Use the remplacement dates for the main contract dates
            baseContract.start_date = remplacementFields.preferred_date || "";
            baseContract.end_date = remplacementFields.end_date || "";
            
            // Use the proposed_rate for hourly_rate if not set
            if (!hourly_rate && remplacementFields.proposed_rate) {
                baseContract.hourly_rate = parseFloat(remplacementFields.proposed_rate) || 0;
            }
            
            // Set a default description if empty
            if (!baseContract.description && remplacementFields.mission_objective) {
                baseContract.description = remplacementFields.mission_objective;
            }
        }

        // Before sending the data, convert empty strings to appropriate values
        if (!baseContract.start_date) {
            baseContract.start_date = remplacementFields.preferred_date || new Date().toISOString().split('T')[0];
        }

        if (!baseContract.end_date) {
            // If we have a start_date, set end_date to at least the same day
            baseContract.end_date = baseContract.start_date || new Date().toISOString().split('T')[0];
        }

        // Make sure description is never empty (it's non-nullable in the database)
        if (!baseContract.description) {
            baseContract.description = "Contract created on " + new Date().toLocaleDateString();
        }

        let specific_industry_fields = {};
        if (industry_type === "pharmacy") {
            if (!pharmacyIndustryFields || Object.keys(pharmacyIndustryFields).length === 0) {
                throw new Error("Pharmacy industry fields are required but missing.");
            }
            specific_industry_fields = pharmacyIndustryFields;
        } else if (industry_type === "dental_clinic") {
            if (!dentalIndustryFields || Object.keys(dentalIndustryFields).length === 0) {
                throw new Error("Dental industry fields are required but missing.");
            }
            specific_industry_fields = dentalIndustryFields;
        }

        let contractData;
        if (contract_type === "placement") {
            contractData = {
                ...baseContract,
                specific_contract_fields: {
                    desired_position: placementFields.desired_position || "",
                    specialties: placementFields.specialties || [],
                    contract_location: placementFields.contract_location || "",
                    start_date: placementFields.start_date || start_date || "",
                    experience_level: placementFields.experience_level || "",
                    compensation: placementFields.compensation || "",
                    other_compensation: placementFields.other_compensation || "",
                    benefits: placementFields.benefits || [],
                    task_description: placementFields.task_description || "",
                    urgent_need: placementFields.urgent_need ?? false,
                    bonus_or_incentives: placementFields.bonus_or_incentives ?? false,
                    fees: feesEnabled ? placementFields.fees || "" : "",
                    parking: placementFields.parking || "",
                    languages: placementFields.languages || [],
                    softwares: placementFields.softwares || [],
                    additional_information: placementFields.additional_information || "",
                    attached_documents: [],
                },
                specific_industry_fields,
            };
        } else if (contract_type === "affiliation") {
            contractData = {
                ...baseContract,
                specific_contract_fields: {
                    establishment_name: affiliationFields.establishment_name || "",
                    position_sought: affiliationFields.position_sought || "",
                    affiliation_location: affiliationFields.affiliation_location || "",
                    specialties: affiliationFields.specialties || [],
                    revenue_percentage: affiliationFields.revenue_percentage || "",
                    payment_conditions: affiliationFields.payment_conditions || "",
                    software_used: affiliationFields.software_used || "",
                    required_languages: affiliationFields.required_languages || "",
                    advantages: affiliationFields.advantages || "",
                    engagement_duration: affiliationFields.engagement_duration || "",
                    objectives_or_quotas: affiliationFields.objectives_or_quotas || "",
                    specific_clauses: affiliationFields.specific_clauses || "",
                    attached_documents: [],
                },
                specific_industry_fields,
            };
        } else if (contract_type === "remplacement") {
            contractData = {
                ...baseContract,
                // Map frontend fields to backend fields here!
                languages_required: remplacementFields.languages || [],
                software_required: remplacementFields.softwares || [],
                detailed_tasks: remplacementFields.mission_objective || "",
                additional_information: remplacementFields.additional_information || "",
                parking_available: remplacementFields.parking_available ?? null,
                bonuses: remplacementFields.bonus_available ?? null,
                required_experience: remplacementFields.required_experience || "",
                working_hours: (remplacementFields.working_hours_start && remplacementFields.working_hours_end)
                    ? `${remplacementFields.working_hours_start}-${remplacementFields.working_hours_end}`
                    : "",
                specific_contract_fields: {
                    mission_type: remplacementFields.mission_type || "",
                    required_specialty: remplacementFields.required_specialty || "",
                    mission_objective: remplacementFields.mission_objective || "",
                    estimated_duration: remplacementFields.estimated_duration || "",
                    preferred_date: remplacementFields.preferred_date || "",
                    proposed_rate: remplacementFields.proposed_rate || "",
                    equipment_or_operating_room: remplacementFields.equipment_or_operating_room || "",
                    attached_documents: remplacementFields.attached_documents || [],
                },
                specific_industry_fields,
            };
        } else {
            contractData = {
                ...baseContract,
                specific_contract_fields: {
                    attached_documents: [],
                },
                specific_industry_fields,
            };
        }

        console.log("Payload to backend:", contractData);

        formData.append("contract_data", JSON.stringify(contractData));

        const files =
            contract_type === "placement"
                ? placementFields.attached_documents
                : contract_type === "affiliation"
                    ? affiliationFields.attached_documents
                    : contract_type === "remplacement"
                        ? remplacementFields.attached_documents
                        : [];

        if (files) {
            files.forEach((file) => {
                formData.append("attached_documents", file);
            });
        }

        try {
            await storeContract(formData);
            closeModal();
        } catch (error) {
            toast.error("Failed to submit contract.");
        }
    };

    const contractOptions = [
        { value: "placement", label: "Placement" },
        { value: "affiliation", label: "Affiliation" },
        { value: "remplacement", label: "Remplacement" },
    ];

    const institutionToIndustryMap = {
        dental_clinic: "dental_clinic",
        pharmacy: "pharmacy",
    };

    const options = Object.entries(institutionToIndustryMap).map(([key, label]) => ({
        value: key,
        label,
    }));

    const dateRange = generateDateRange(start_date, end_date);
    const daysInRange = start_date && end_date ? 
      Math.ceil((new Date(end_date) - new Date(start_date)) / (1000 * 60 * 60 * 24)) + 1 : 0;
    const showPerDayWorkHours = daysInRange > 0 && daysInRange <= 10;

    const hourOptions = Array.from({ length: 48 }, (_, i) => {
        const hours24 = Math.floor(i / 2);
        const minutes = i % 2 === 0 ? "00" : "30";
        const period = hours24 >= 12 ? "PM" : "AM";
        let hours12 = hours24 % 12;
        hours12 = hours12 === 0 ? 12 : hours12;
        const time12 = `${hours12}:${minutes} ${period}`;
        const time24 = `${hours24.toString().padStart(2, "0")}:${minutes}`;
        return { value: time24, label: time12 };
    });

    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[900px] m-4">
                <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                    <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                        <div className="px-2 pr-14">
                            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                                Add Contract Details
                            </h4>
                            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                                All contract details will be fully disclosed to healthcare professionals.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <div className="col-span-2 mb-5">
                                <Label>Institution</Label>
                                {submissionAttempted && !institution && (
                                    <span className="text-red-500 text-xs block mb-1">
                                        Ce champ est obligatoire. Veuillez sélectionner une institution.
                                    </span>
                                )}
                                <Select
                                    options={institutions.map((inst) => {
                                        // Get the original type_of_contract without modification
                                        const typeOfContract = Array.isArray(inst.type_of_contract) ? [...inst.type_of_contract] : [];
                                        
                                        return {
                                            label: inst.institution_name,
                                            value: inst.institution_id,
                                            type_of_contract: typeOfContract, // Use the original array without processing
                                            institution_type: inst.institution_type,
                                            fees_enabled: inst.fees_enabled,
                                        };
                                    })}
                                    placeholder="Select institution"
                                    value={institution}
                                    onChange={(selectedOption) => {
                                        console.log("Selected institution:", selectedOption);
                                        console.log("Institution type:", selectedOption.institution_type);
                                        console.log("Contract types from institution:", selectedOption.type_of_contract);
                                        
                                        setInstitution(selectedOption);
                                        
                                        setFeesEnabled(selectedOption.fees_enabled);
                                        if (selectedOption.institution_type) {
                                            console.log(`Institution type from API: ${selectedOption.institution_type}`);
                                            // Handle both "DentalClinic" and "dental_clinic" format
                                            const normalizedType = selectedOption.institution_type.toLowerCase() === "dentalclinic" ? 
                                                "dental_clinic" : selectedOption.institution_type;
                                            console.log(`Normalized industry_type: ${normalizedType}`);
                                            setIndustryType(normalizedType);
                                        }
                                    }}
                                />
                            </div>
                            <div className="mb-5">
                                <Label>Contract Type</Label>
                                {submissionAttempted && !contract_type && (
                                    <span className="text-red-500 text-xs block mb-1">
                                        Ce champ est obligatoire. Veuillez sélectionner un type de contrat.
                                    </span>
                                )}
                                <div className="grid grid-cols-3 gap-3 mt-2">
                                    {contractOptions.map((option) => {
                                        // For debugging - log raw contract types 
                                        console.log("Raw institution contract_type data:", institution?.type_of_contract);
                                        
                                        // Get properly processed contract types
                                        let availableTypes = [];
                                        
                                        if (institution) {
                                            // If type_of_contract is an array of strings
                                            if (Array.isArray(institution.type_of_contract) && 
                                                institution.type_of_contract.length > 0) {
                                                // Convert all types to lowercase for case-insensitive comparison
                                                availableTypes = institution.type_of_contract.map(type => 
                                                    typeof type === 'string' ? type.toLowerCase() : 
                                                    typeof type === 'object' ? (type.value || type.id || "").toLowerCase() : ""
                                                );
                                            }
                                        }
                                        
                                        // Check if this option should be enabled
                                        // An option is enabled if it exists in the availableTypes array (case insensitive)
                                        const isEnabled = !institution || 
                                                         availableTypes.length === 0 || 
                                                         availableTypes.some(type => 
                                                             type.toLowerCase() === option.value.toLowerCase()
                                                         );
                                        
                                        console.log(`Contract type: ${option.value}, enabled: ${isEnabled}`);
                                        console.log(`Available types:`, JSON.stringify(availableTypes));
                                        
                                        return (
                                            <Radio
                                                key={option.value}
                                                id={`contract-type-${option.value}`}
                                                name="contract_type"
                                                value={option.value}
                                                label={option.label}
                                                checked={contract_type === option.value}
                                                onChange={(value) => {
                                                    setContractType(value);
                                                    
                                                    // Set default values for hidden fields when selecting "remplacement"
                                                    if (value === "remplacement") {
                                                        setRemplacementFields(prev => ({
                                                            ...prev,
                                                            mission_type: prev.mission_type || "Default Mission Type",
                                                            required_specialty: prev.required_specialty || "Default Specialty"
                                                        }));
                                                    }
                                                }}
                                                disabled={!isEnabled}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            
                            {/* Remplacement Fields Component */}
                            {contract_type === "remplacement" && remplacementFields && (
                                <div className="mb-5 px-2">
                                    <div className="space-y-4 border p-4 rounded-lg">
                                        <h3 className="text-lg font-medium">Remplacement Details</h3>
                                        
                                        {/* Add this new section for mission spécialisée */}
                                        
                                        
                                        <RemplacementFieldsComponent
                                            remplacementFields={remplacementFields}
                                            setRemplacementFields={setRemplacementFields}
                                            industry_type={industry_type}
                                            contract_type={contract_type}
                                            pharmacyIndustryFields={pharmacyIndustryFields}
                                            setPharmacyIndustryFields={setPharmacyIndustryFields}
                                            dentalIndustryFields={dentalIndustryFields}
                                            setDentalIndustryFields={setDentalIndustryFields}
                                            submissionAttempted={submissionAttempted}
                                            isInQuebec={isInQuebec}
                                            institution={institutions.find(inst => inst.institution_id === institution?.value)}
                                            start_date={start_date}
                                            end_date={end_date}
                                            setIsWorkHoursPopupOpen={setIsWorkHoursPopupOpen}
                                            showPerDayWorkHours={showPerDayWorkHours}
                                        />
                                    </div>
                                </div>
                            )}

                            <BaseFields
                                description={description}
                                setDescription={setDescription}
                                start_date={start_date}
                                setStartDate={setStartDate}
                                end_date={end_date}
                                setEndDate={setEndDate}
                                hourly_rate={hourly_rate}
                                setHourlyRate={setHourlyRate}
                                industry_type={industry_type}
                                setIndustryType={setIndustryType}
                                options={options}
                                contract_type={contract_type}
                                setIsWorkHoursPopupOpen={setIsWorkHoursPopupOpen}
                                showPerDayWorkHours={start_date && end_date ? 
                                  Math.ceil((new Date(end_date).getTime() - new Date(start_date).getTime()) / (1000 * 60 * 60 * 24)) <= 10 : false}
                                pharmacyIndustryFields={pharmacyIndustryFields}
                                setPharmacyIndustryFields={setPharmacyIndustryFields}
                                dentalIndustryFields={dentalIndustryFields}
                                setDentalIndustryFields={setDentalIndustryFields}
                                submissionAttempted={submissionAttempted}
                            />
                            
                            {industry_type === "pharmacy" && contract_type !== "placement" && (
                                <PharmacyFields
                                    contract_type={contract_type}
                                    pharmacyIndustryFields={pharmacyIndustryFields}
                                    setPharmacyIndustryFields={setPharmacyIndustryFields}
                                    dateRange={generateDateRange(start_date, end_date)}
                                    showPerDayWorkHours={generateDateRange(start_date, end_date).length <= 10}
                                    hourOptions={hourOptions}
                                    submissionAttempted={submissionAttempted}
                                    institution_id={institution}
                                    isWorkHoursPopupOpen={isWorkHoursPopupOpen}
                                    setIsWorkHoursPopup={setIsWorkHoursPopupOpen}
                                />
                            )}

                            {industry_type === "dental_clinic" && contract_type !== "placement" && (
                                <DentalFields
                                    contract_type={contract_type}
                                    dentalIndustryFields={dentalIndustryFields}
                                    setDentalIndustryFields={setDentalIndustryFields}
                                    dateRange={generateDateRange(start_date, end_date)}
                                    showPerDayWorkHours={generateDateRange(start_date, end_date).length <= 10}
                                    hourOptions={hourOptions}
                                    submissionAttempted={submissionAttempted}
                                    isWorkHoursPopupOpen={isWorkHoursPopupOpen}
                                    setIsWorkHoursPopup={setIsWorkHoursPopupOpen}
                                />
                            )}
                            
                            {/* Placement Fields for BOTH Pharmacy AND Dental Clinic */}
                            {contract_type === "placement" && (industry_type === "pharmacy" || industry_type === "dental_clinic") && (
                              <div className="mb-5 px-2">
                                <div className="space-y-4 border p-4 rounded-lg">
                                  <h3 className="text-lg font-medium">Placement Details</h3>
                                  
                                  {/* Position Type dropdown - different options based on industry */}
                                  <div>
                                    <Label required>Poste recherché</Label>
                                    <Select
                                      options={industry_type === "pharmacy" ? 
                                        [
                                          { value: "ATP", label: "ATP" },
                                          { value: "Stagiaire", label: "Stagiaire" },
                                          { value: "Pharmacien", label: "Pharmacien" },
                                          { value: "Assistant", label: "Assistant" },
                                          { value: "Technicien", label: "Technicien" }
                                        ] : 
                                        [
                                          { value: "dentiste_generaliste", label: "Dentiste généraliste" },
                                          { value: "dentiste_specialiste", label: "Dentiste spécialiste" },
                                          { value: "hygieniste_dentaire", label: "Hygiéniste dentaire" },
                                          { value: "assistant_dentaire", label: "Assistant dentaire" },
                                          { value: "secretaire_dentaire", label: "Secrétaire dentaire" }
                                        ]
                                      }
                                      placeholder="Select position type"
                                      value={industry_type === "pharmacy" 
                                        ? { value: pharmacyIndustryFields.position_type, label: pharmacyIndustryFields.position_type }
                                        : { value: dentalIndustryFields.position_type, label: dentalIndustryFields.position_type }
                                      }
                                      onChange={(option) => {
                                        if (industry_type === "pharmacy") {
                                          setPharmacyIndustryFields({
                                            ...pharmacyIndustryFields,
                                            position_type: option?.value
                                          });
                                        } else {
                                          setDentalIndustryFields({
                                            ...dentalIndustryFields,
                                            position_type: option?.value,
                                            specialties: option?.value !== "dentiste_specialiste" ? [] : dentalIndustryFields.specialties
                                          });
                                        }
                                      }}
                                      required
                                    />
                                  </div>
                                  
                                  {/* Specialties Multi-Select - Only show for dental specialist */}
                                  {industry_type === "dental_clinic" && dentalIndustryFields.position_type === "dentiste_specialiste" && (
                                    <div>
                                      <Label required>Specialties</Label>
                                      <Select
                                        options={[
                                          { value: "orthodontie", label: "Orthodontie" },
                                          { value: "implantologie", label: "Implantologie" },
                                          { value: "chirurgie_buccale", label: "Chirurgie buccale" },
                                          { value: "parodontologie", label: "Parodontologie" },
                                          { value: "endodontie", label: "Endodontie" },
                                          { value: "pedodontie", label: "Pédodontie" },
                                          { value: "prosthodontie", label: "Prosthodontie" }
                                        ]}
                                        isMulti={true}
                                        placeholder="Select specialties"
                                        value={(dentalIndustryFields.specialties || []).map(s => ({
                                          value: s,
                                          label: s.charAt(0).toUpperCase() + s.slice(1).replace('_', ' ')
                                        }))}
                                        onChange={(options) => setDentalIndustryFields({
                                          ...dentalIndustryFields,
                                          specialties: options.map(opt => opt.value)
                                        })}
                                        required
                                      />
                                    </div>
                                  )}
                                  
                                  {/* Working Hours field */}
                                  <div>
                                    <Label required>Working Hours</Label>
                                    {((industry_type === "pharmacy" && 
                                       !pharmacyIndustryFields.working_hours) || 
                                      (industry_type === "dental_clinic" && 
                                       !dentalIndustryFields.working_hours)) && (
                                      <span className="text-red-500 text-xs block mb-1">
                                        Ce champ est obligatoire. Veuillez sélectionner les heures de travail.
                                      </span>
                                    )}
                                    <div className="flex items-center gap-2">
                                      <Select
                                        className="w-[130px]"
                                        options={hourOptions}
                                        placeholder="09:00"
                                        value={
                                          hourOptions.find(opt => opt.value === (
                                            industry_type === "pharmacy"
                                              ? pharmacyIndustryFields.working_hours?.split('-')[0] || "09:00"
                                              : dentalIndustryFields.working_hours?.split('-')[0] || "09:00"
                                          ))
                                        }
                                        onChange={(option) => {
                                          const start = option?.value || "09:00";
                                          const end = industry_type === "pharmacy"
                                            ? pharmacyIndustryFields.working_hours?.split('-')[1] || "17:00"
                                            : dentalIndustryFields.working_hours?.split('-')[1] || "17:00";
                                          
                                          if (industry_type === "pharmacy") {
                                            setPharmacyIndustryFields({
                                              ...pharmacyIndustryFields,
                                              working_hours: `${start}-${end}`
                                            });
                                          } else {
                                            setDentalIndustryFields({
                                              ...dentalIndustryFields,
                                              working_hours: `${start}-${end}`
                                            });
                                          }
                                        }}
                                      />
                                      <span>to</span>
                                      <Select
                                        className="w-[130px]"
                                        options={hourOptions}
                                        placeholder="17:00"
                                        value={
                                          hourOptions.find(opt => opt.value === (
                                            industry_type === "pharmacy"
                                              ? pharmacyIndustryFields.working_hours?.split('-')[1] || "17:00"
                                              : dentalIndustryFields.working_hours?.split('-')[1] || "17:00"
                                          ))
                                        }
                                        onChange={(option) => {
                                          const start = industry_type === "pharmacy"
                                            ? pharmacyIndustryFields.working_hours?.split('-')[0] || "09:00"
                                            : dentalIndustryFields.working_hours?.split('-')[0] || "09:00";
                                          const end = option?.value || "17:00";
                                          
                                          if (industry_type === "pharmacy") {
                                            setPharmacyIndustryFields({
                                              ...pharmacyIndustryFields,
                                              working_hours: `${start}-${end}`
                                            });
                                          } else {
                                            setDentalIndustryFields({
                                              ...dentalIndustryFields,
                                              working_hours: `${start}-${end}`
                                            });
                                          }
                                        }}
                                      />
                                    </div>
                                  </div>
                                  
                                  {/* Required Experience */}
                                  <div>
                                    <Label required>Required Experience</Label>
                                    <Select
                                      options={[
                                        { value: "New Graduate", label: "Moins de 1 an" },
                                        { value: "1-3 years", label: "1-3 ans" },
                                        { value: "4-6 years", label: "4-6 ans" },
                                        { value: "7+ years", label: "Plus de 7 ans" },
                                        { value: "Any", label: "Peu importe" }
                                      ]}
                                      placeholder="Sélectionner le niveau d'expérience"
                                      value={{ 
                                        value: industry_type === "pharmacy" 
                                          ? pharmacyIndustryFields.required_experience 
                                          : dentalIndustryFields.required_experience, 
                                        label: industry_type === "pharmacy" 
                                          ? pharmacyIndustryFields.required_experience 
                                          : dentalIndustryFields.required_experience 
                                      }}
                                      onChange={(option) => {
                                        if (industry_type === "pharmacy") {
                                          setPharmacyIndustryFields({
                                            ...pharmacyIndustryFields,
                                            required_experience: option?.value
                                          });
                                        } else {
                                          setDentalIndustryFields({
                                            ...dentalIndustryFields,
                                            required_experience: option?.value
                                          });
                                        }
                                      }}
                                      required
                                    />
                                  </div>
                                  
                                  
                                  {/* Detailed Tasks */}
                                  <div>
                                    <Label>Detailed Tasks</Label>
                                    <TextArea
                                      placeholder="Describe the detailed tasks..."
                                      value={industry_type === "pharmacy" 
                                        ? pharmacyIndustryFields.detailed_tasks || ""
                                        : dentalIndustryFields.detailed_tasks || ""}
                                      onChange={(e) => {
                                        // Handle both string value and event object
                                        const value = typeof e === 'object' && e !== null && 'target' in e 
                                          ? e.target.value 
                                          : e;
                                          
                                        if (industry_type === "pharmacy") {
                                          setPharmacyIndustryFields({
                                            ...pharmacyIndustryFields,
                                            detailed_tasks: value || ""
                                          });
                                        } else {
                                          setDentalIndustryFields({
                                            ...dentalIndustryFields,
                                            detailed_tasks: value || ""
                                          });
                                        }
                                      }}
                                    />
                                  </div>
                                  
                                  {/* Additional Information */}
                                  <div>
                                    <Label>Additional Information</Label>
                                    <TextArea
                                      placeholder="Any additional information..."
                                      value={industry_type === "pharmacy" 
                                        ? pharmacyIndustryFields.additional_information || ""
                                        : dentalIndustryFields.additional_information || ""}
                                      onChange={(e) => {
                                        // Handle both string value and event object
                                        const value = typeof e === 'object' && e !== null && 'target' in e 
                                          ? e.target.value 
                                          : e;
                                          
                                        if (industry_type === "pharmacy") {
                                          setPharmacyIndustryFields({
                                            ...pharmacyIndustryFields,
                                            additional_information: value || ""
                                          });
                                        } else {
                                          setDentalIndustryFields({
                                            ...dentalIndustryFields,
                                            additional_information: value || ""
                                          });
                                        }
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {contract_type === "placement" && placementFields && 
                            !(industry_type === "pharmacy" || industry_type === "dental_clinic") && (
                                <PlacementFieldsComponent
                                    placementFields={placementFields}
                                    setPlacementFields={setPlacementFields}
                                    feesEnabled={feesEnabled}
                                />
                            )}
                            
                            {contract_type === "affiliation" && affiliationFields && (
                                <AffiliationFieldsComponent
                                    affiliationFields={affiliationFields}
                                    setAffiliationFields={setAffiliationFields}
                                />
                            )}

                            <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                                <Button size="sm" variant="outline" onClick={closeModal}>
                                    Close
                                </Button>
                                <Button size="sm" onClick={handleSubmit}>
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            
            {/* Work Hours Popup Modal */}
            {isWorkHoursPopupOpen && showPerDayWorkHours && (
              <Modal isOpen={true} onClose={() => setIsWorkHoursPopupOpen(false)} className="max-w-lg">
                <div className="p-6 bg-white rounded-lg dark:bg-gray-800">
                  <h3 className="mb-4 text-lg font-medium">Set Daily Work Hours</h3>
                  <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                    {generateDateRange(start_date, end_date).map(date => {
                      const formattedDate = new Date(date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      });
                      
                      // Initialize industry fields object
                      const industryFields = industry_type === "pharmacy" 
                        ? pharmacyIndustryFields 
                        : dentalIndustryFields;
                      
                      // Get or set default enabled state (default to true)
                      const isEnabled = industryFields.daily_hours?.[date]?.enabled !== false;
                      
                      return (
                        <div key={date} className="p-3 border rounded-md">
                          <div className="flex items-center mb-2">
                            <Checkbox 
                              label={formattedDate}
                              checked={isEnabled}
                              onChange={(checked) => {
                                if (industry_type === "pharmacy") {
                                  const updatedHours = { ...(pharmacyIndustryFields.daily_hours || {}) };
                                  updatedHours[date] = updatedHours[date] || {};
                                  updatedHours[date].enabled = checked;
                                  
                                  setPharmacyIndustryFields({
                                    ...pharmacyIndustryFields,
                                    daily_hours: updatedHours
                                  });
                                } else {
                                  const updatedHours = { ...(dentalIndustryFields.daily_hours || {}) };
                                  updatedHours[date] = updatedHours[date] || {};
                                  updatedHours[date].enabled = checked;
                                  
                                  setDentalIndustryFields({
                                    ...dentalIndustryFields,
                                    daily_hours: updatedHours
                                  });
                                }
                              }}
                            />
                          </div>
                          
                          {isEnabled && (
                            <div className="flex items-center gap-2 ml-6 mt-2">
                              <Select
                                className="w-[130px]"
                                options={hourOptions}
                                placeholder="09:00"
                                value={
                                  hourOptions.find(opt => opt.value === (
                                    industry_type === "pharmacy"
                                      ? pharmacyIndustryFields.daily_hours?.[date]?.start_time || "09:00"
                                      : dentalIndustryFields.daily_hours?.[date]?.start_time || "09:00"
                                  ))
                                }
                                onChange={(option) => {
                                  const updatedHours = industry_type === "pharmacy"
                                    ? { ...(pharmacyIndustryFields.daily_hours || {}) }
                                    : { ...(dentalIndustryFields.daily_hours || {}) };
                                    
                                  updatedHours[date] = updatedHours[date] || { enabled: true };
                                  updatedHours[date].start_time = option?.value || "09:00";
                                  
                                  if (industry_type === "pharmacy") {
                                    setPharmacyIndustryFields({
                                      ...pharmacyIndustryFields,
                                      daily_hours: updatedHours
                                    });
                                  } else {
                                    setDentalIndustryFields({
                                      ...dentalIndustryFields,
                                      daily_hours: updatedHours
                                    });
                                  }
                                }}
                              />
                              <span>to</span>
                              <Select
                                className="w-[130px]"
                                options={hourOptions}
                                placeholder="17:00"
                                value={
                                  hourOptions.find(opt => opt.value === (
                                    industry_type === "pharmacy"
                                      ? pharmacyIndustryFields.daily_hours?.[date]?.end_time || "17:00"
                                      : dentalIndustryFields.daily_hours?.[date]?.end_time || "17:00"
                                  ))
                                }
                                onChange={(option) => {
                                  const updatedHours = industry_type === "pharmacy"
                                    ? { ...(pharmacyIndustryFields.daily_hours || {}) }
                                    : { ...(dentalIndustryFields.daily_hours || {}) };
                                    
                                  updatedHours[date] = updatedHours[date] || { enabled: true };
                                  updatedHours[date].end_time = option?.value || "17:00";
                                  
                                  if (industry_type === "pharmacy") {
                                    setPharmacyIndustryFields({
                                      ...pharmacyIndustryFields,
                                      daily_hours: updatedHours
                                    });
                                  } else {
                                    setDentalIndustryFields({
                                      ...dentalIndustryFields,
                                      daily_hours: updatedHours
                                    });
                                  }
                                }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-end mt-4">
                    <Button size="sm" onClick={() => setIsWorkHoursPopupOpen(false)}>Done</Button>
                  </div>
                </div>
              </Modal>
            )}
        </>
    );
}