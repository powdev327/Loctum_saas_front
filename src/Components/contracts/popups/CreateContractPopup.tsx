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

// Update this function to handle non-array inputs and ensure remplacement is always available
const processContractTypes = (contractTypes) => {
  console.log("Processing contract types:", contractTypes);
  
  // Define our default contract types that should always be available
  const defaultContractTypes = [
    { value: "placement", label: "Placement" },
    { value: "affiliation", label: "Affiliation" },
    { value: "remplacement", label: "Remplacement" }
  ];
  
  // Handle case when contractTypes is not an array
  if (!contractTypes || !Array.isArray(contractTypes)) {
    console.warn("Expected array for contractTypes but got:", contractTypes);
    // Return default values that include all contract types
    return defaultContractTypes;
  }
  
  // If array is empty, add all contract types
  if (contractTypes.length === 0) {
    console.log("Contract types array is empty, adding all types");
    return defaultContractTypes;
  }
  
  // Check if we need to convert strings to objects
  if (contractTypes.length > 0 && typeof contractTypes[0] === 'string') {
    console.log("Contract types are strings, converting to objects");
    // Make sure 'remplacement' is included
    if (!contractTypes.includes('remplacement')) {
      console.log("Adding 'remplacement' to contract types");
      contractTypes.push('remplacement');
    }
    
    return contractTypes.map(type => ({
      value: type,
      label: type.charAt(0).toUpperCase() + type.slice(1)
    }));
  }
  
  // Process the contract types as needed when it is an array of objects
  const processed = contractTypes.map(type => ({
    value: type.id || type.value || type,
    label: type.name || type.label || (typeof type === 'string' ? type : '')
  }));
  
  // Make sure 'remplacement' is included in the processed array
  const hasRemplacement = processed.some(type => type.value === 'remplacement');
  if (!hasRemplacement) {
    console.log("Adding 'remplacement' option to contract types");
    processed.push({ value: 'remplacement', label: 'Remplacement' });
  }
  
  return processed;
};

export function CreateContractPopup({ isOpen, closeModal }) {
    const { institutions, client_id } = useClient();
    const { storeContract } = useContract();
    const {
        contract_type, setContractType,
        status, setStatus,
        position_title, setPositionTitle,
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

    // Add this useEffect near the top of your component with your other effects
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

    const handleSubmit = async () => {
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
            (!remplacementFields.mission_type ||
                !remplacementFields.required_specialty ||
                !remplacementFields.mission_objective ||
                !remplacementFields.estimated_duration ||
                !remplacementFields.preferred_date ||
                !remplacementFields.proposed_rate)
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
            position_title: position_title || "",
            description: description || "",
            start_date: start_date || "",
            end_date: end_date || "",
            hourly_rate: hourly_rate || 0,
        };

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
                specific_contract_fields: {
                    mission_type: remplacementFields.mission_type || "",
                    required_specialty: remplacementFields.required_specialty || "",
                    mission_objective: remplacementFields.mission_objective || "",
                    estimated_duration: remplacementFields.estimated_duration || "",
                    preferred_date: remplacementFields.preferred_date || "",
                    proposed_rate: remplacementFields.proposed_rate || "",
                    equipment_or_operating_room: remplacementFields.equipment_or_operating_room || "",
                    attached_documents: [],
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
                                <Select
                                    options={institutions.map((inst) => {
                                        console.log("Institution:", inst.institution_name);
                                        console.log("Raw type_of_contract from API:", inst.type_of_contract);
                                        // Force include "remplacement" for all institutions for now
                                        const typeOfContract = inst.type_of_contract || [];
                                        // Add "remplacement" if it's not already there
                                        if (!typeOfContract.includes("remplacement")) {
                                            typeOfContract.push("remplacement");
                                        }
                                        console.log("Modified type_of_contract:", typeOfContract);
                                        return {
                                            label: inst.institution_name,
                                            value: inst.institution_id,
                                            type_of_contract: processContractTypes(typeOfContract),
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
                                <div className="grid grid-cols-3 gap-3 mt-2">
                                    {contractOptions.map((option) => {
                                        // Get contract types from institution
                                        const availableTypes = institution && institution.type_of_contract ? institution.type_of_contract : [];
                                        
                                        // Log the option and available types
                                        console.log(`Contract option ${option.value}, institution:`, institution);
                                        console.log(`Available types for ${option.value}:`, availableTypes);
                                        
                                        // For debugging, never disable remplacement
                                        let isDisabled = false;
                                        
                                        // For non-remplacement options, check if they should be disabled
                                        if (option.value !== 'remplacement' && institution && availableTypes.length > 0) {
                                            isDisabled = !availableTypes.includes(option.value);
                                        }
                                        
                                        console.log(`Option ${option.value} disabled:`, isDisabled);
                                        
                                        return (
                                            <Radio
                                                key={option.value}
                                                id={`contract-type-${option.value}`}
                                                name="contract_type"
                                                value={option.value}
                                                label={option.label}
                                                checked={contract_type === option.value}
                                                onChange={(value) => {
                                                    console.log(`Setting contract_type to: ${value}`);
                                                    setContractType(value);
                                                }}
                                                disabled={isDisabled}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            {/* Replace pharmacy mission type checkboxes with: */}
                            {console.log("Pharmacy checkbox visibility check - industry_type:", industry_type, "contract_type:", contract_type)}
                            {(() => {
                                const isPharmacy = industry_type === "pharmacy" || 
                                                 industry_type === "Pharmacy";
                                console.log("Is pharmacy?", isPharmacy);
                                return (isPharmacy && contract_type === "remplacement");
                            })() && (
                                <div className="mb-5 px-2">
                                    <Label>Mission Type</Label>
                                    <div className="flex space-x-8 items-center mt-2">
                                        <div>
                                            <Checkbox 
                                                label="Mission Général" 
                                                checked={pharmacyIndustryFields.mission_general || false}
                                                onChange={(checked) => {
                                                    if (checked) {
                                                        // If checking general, uncheck special
                                                        setPharmacyIndustryFields({
                                                            ...pharmacyIndustryFields,
                                                            mission_general: checked,
                                                            mission_special: false
                                                        });
                                                    } else {
                                                        setPharmacyIndustryFields({
                                                            ...pharmacyIndustryFields,
                                                            mission_general: checked
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <Checkbox 
                                                label="Mission Spécialisé" 
                                                checked={pharmacyIndustryFields.mission_special || false}
                                                onChange={(checked) => {
                                                    if (checked) {
                                                        // If checking special, uncheck general
                                                        setPharmacyIndustryFields({
                                                            ...pharmacyIndustryFields,
                                                            mission_special: checked,
                                                            mission_general: false
                                                        });
                                                    } else {
                                                        setPharmacyIndustryFields({
                                                            ...pharmacyIndustryFields,
                                                            mission_special: checked
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Add Mission General Fields section here */}
                            {console.log("Pharmacy Mission General Fields check:", industry_type, contract_type, "mission_general:", pharmacyIndustryFields.mission_general)}
                            {(() => {
                                const isPharmacy = industry_type === "pharmacy" || 
                                                 industry_type === "Pharmacy";
                                const shouldShowMissionGeneral = isPharmacy && 
                                                              contract_type === "remplacement" && 
                                                              pharmacyIndustryFields.mission_general;
                                console.log("Should show pharmacy mission general fields?", shouldShowMissionGeneral);
                                return shouldShowMissionGeneral;
                            })() && (
                                <div className="mb-5 px-2">
                                    <div className="space-y-4 border p-4 rounded-lg">
                                        <h3 className="text-lg font-medium">Mission General Fields</h3>
                                        
                                        {/* Position Type dropdown */}
                                        <div>
                                            <Label required>Position Type</Label>
                                            <Select
                                                options={isInQuebec ? 
                                                    [
                                                        { value: "ATP", label: "ATP" },
                                                        { value: "Stagiaire", label: "Stagiaire" },
                                                        { value: "Pharmacien", label: "Pharmacien" }
                                                    ] : 
                                                    [
                                                        { value: "Assistant", label: "Assistant" },
                                                        { value: "Technicien", label: "Technicien" },
                                                        { value: "Stagiaire", label: "Stagiaire" },
                                                        { value: "Pharmacien", label: "Pharmacien" }
                                                    ]
                                                }
                                                placeholder="Select position type"
                                                value={{ value: pharmacyIndustryFields.position_type, label: pharmacyIndustryFields.position_type }}
                                                onChange={(option) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    position_type: option?.value
                                                })}
                                                required
                                            />
                                        </div>
                                        
                                        {/* Working Hours field */}
                                        <div>
                                            <Label required>Working Hours</Label>
                                            <div className="flex items-center gap-2">
                                                <Input
                                                    type="time"
                                                    className="w-[100px]"
                                                    value={pharmacyIndustryFields.working_hours?.split('-')[0] || "09:00"}
                                                    onChange={(e) => {
                                                        const start = e.target.value;
                                                        const end = pharmacyIndustryFields.working_hours?.split('-')[1] || "17:00";
                                                        setPharmacyIndustryFields({
                                                            ...pharmacyIndustryFields,
                                                            working_hours: `${start}-${end}`
                                                        });
                                                    }}
                                                    required
                                                />
                                                <span>to</span>
                                                <Input
                                                    type="time"
                                                    className="w-[100px]"
                                                    value={pharmacyIndustryFields.working_hours?.split('-')[1] || "17:00"}
                                                    onChange={(e) => {
                                                        const start = pharmacyIndustryFields.working_hours?.split('-')[0] || "09:00";
                                                        const end = e.target.value;
                                                        setPharmacyIndustryFields({
                                                            ...pharmacyIndustryFields,
                                                            working_hours: `${start}-${end}`
                                                        });
                                                    }}
                                                    required
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
                                                value={{ value: pharmacyIndustryFields.required_experience, label: pharmacyIndustryFields.required_experience }}
                                                onChange={(option) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    required_experience: option?.value
                                                })}
                                                required
                                            />
                                        </div>
                                        
                                        {/* Break Included */}
                                        <div>
                                            <Checkbox
                                                label="Break Included"
                                                checked={pharmacyIndustryFields.break_included || false}
                                                onChange={(checked) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    break_included: checked
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Break Duration - only shown if break is included */}
                                        {pharmacyIndustryFields.break_included && (
                                            <div>
                                                <Label>Break Duration (minutes)</Label>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    step="15"
                                                    placeholder="e.g., 30"
                                                    value={pharmacyIndustryFields.break_duration || ""}
                                                    onChange={(e) => setPharmacyIndustryFields({
                                                        ...pharmacyIndustryFields,
                                                        break_duration: e.target.value ? Number(e.target.value) : ""
                                                    })}
                                                />
                                            </div>
                                        )}
                                        
                                        {/* Bonuses */}
                                        <div>
                                            <Checkbox
                                                label="Bonuses Available"
                                                checked={pharmacyIndustryFields.bonuses || false}
                                                onChange={(checked) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    bonuses: checked
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Software Required */}
                                        <div>
                                            <Label>Software Required</Label>
                                            <Select
                                              options={industry_type === "pharmacy" ?
                                                [
                                                  { value: "Ubik", label: "Ubik" },
                                                  { value: "AssystRx", label: "AssystRx" },
                                                  { value: "Kroll", label: "Kroll" },
                                                  { value: "Fillware", label: "Fillware" },
                                                  { value: "Genesis", label: "Genesis" }
                                                ] :
                                                [
                                                  { value: "Dentrix", label: "Dentrix" },
                                                  { value: "Dentaide", label: "Dentaide" },
                                                  { value: "LogiDent", label: "LogiDent" },
                                                  { value: "Progident", label: "Progident" },
                                                  { value: "Maxident", label: "Maxident" }
                                                ]
                                              }
                                              isMulti
                                              placeholder="Select required software"
                                              value={industry_type === "pharmacy"
                                                ? (pharmacyIndustryFields.software_required || []).map(sw => ({ value: sw, label: sw }))
                                                : (dentalIndustryFields.software_required || []).map(sw => ({ value: sw, label: sw }))
                                              }
                                              onChange={(options) => {
                                                if (industry_type === "pharmacy") {
                                                  setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    software_required: options ? options.map(option => option.value) : []
                                                  });
                                                } else {
                                                  setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    software_required: options ? options.map(option => option.value) : []
                                                  });
                                                }
                                              }}
                                            />
                                        </div>
                                        
                                        {/* Detailed Tasks */}
                                        <div>
                                            <Label>Detailed Tasks</Label>
                                            <TextArea
                                                placeholder="Describe the detailed tasks..."
                                                value={pharmacyIndustryFields.detailed_tasks || ""}
                                                onChange={(e) => {
                                                    // Handle both string value and event object
                                                    const value = typeof e === 'object' && e !== null && 'target' in e 
                                                      ? e.target.value 
                                                      : e;
                                                      
                                                    setPharmacyIndustryFields({
                                                        ...pharmacyIndustryFields,
                                                        detailed_tasks: value || ""
                                                    });
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Additional Information */}
                                        <div>
                                            <Label>Additional Information</Label>
                                            <TextArea
                                                placeholder="Any additional information..."
                                                value={pharmacyIndustryFields.additional_information || ""}
                                                onChange={(e) => {
                                                    // Handle both string value and event object
                                                    const value = typeof e === 'object' && e !== null && 'target' in e 
                                                      ? e.target.value 
                                                      : e;
                                                      
                                                    setPharmacyIndustryFields({
                                                        ...pharmacyIndustryFields,
                                                        additional_information: value || ""
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Add Mission Type Checkboxes for dental industry */}
                            {console.log("Dental checkbox visibility check - industry_type:", industry_type, "contract_type:", contract_type)}
                            {/* Check for both dental_clinic and DentalClinic */}
                            {(() => {
                                const isDentalClinic = industry_type === "dental_clinic" || 
                                                     industry_type === "DentalClinic" || 
                                                     industry_type?.toLowerCase() === "dentalclinic";
                                console.log("Is dental clinic?", isDentalClinic);
                                return (isDentalClinic && contract_type === "remplacement");
                            })() && (
                                <div className="mb-5 px-2">
                                    <Label>Mission Type</Label>
                                    <div className="flex space-x-8 items-center mt-2">
                                        <div>
                                            <Checkbox 
                                                label="Mission Général" 
                                                checked={dentalIndustryFields.mission_general || false}
                                                onChange={(checked) => {
                                                    if (checked) {
                                                        // If checking general, uncheck special
                                                        setDentalIndustryFields({
                                                            ...dentalIndustryFields,
                                                            mission_general: checked,
                                                            mission_special: false
                                                        });
                                                    } else {
                                                        setDentalIndustryFields({
                                                            ...dentalIndustryFields,
                                                            mission_general: checked
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <Checkbox 
                                                label="Mission Spécialisé" 
                                                checked={dentalIndustryFields.mission_special || false}
                                                onChange={(checked) => {
                                                    if (checked) {
                                                        // If checking special, uncheck general
                                                        setDentalIndustryFields({
                                                            ...dentalIndustryFields,
                                                            mission_special: checked,
                                                            mission_general: false
                                                        });
                                                    } else {
                                                        setDentalIndustryFields({
                                                            ...dentalIndustryFields,
                                                            mission_special: checked
                                                        });
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Add Mission General Fields section for dental */}
                            {console.log("Dental Mission General Fields check:", industry_type, contract_type, "mission_general:", dentalIndustryFields.mission_general)}
                            {(() => {
                                const isDentalClinic = industry_type === "dental_clinic" || 
                                                    industry_type === "DentalClinic" || 
                                                    industry_type?.toLowerCase() === "dentalclinic";
                                const shouldShowMissionGeneral = isDentalClinic && 
                                                              contract_type === "remplacement" && 
                                                              dentalIndustryFields.mission_general;
                                console.log("Should show dental mission general fields?", shouldShowMissionGeneral);
                                return shouldShowMissionGeneral;
                            })() && (
                                <div className="mb-5 px-2">
                                    <div className="space-y-4 border p-4 rounded-lg">
                                        <h3 className="text-lg font-medium">Mission General Fields</h3>
                                        
                                        {/* Position Type dropdown */}
                                        <div>
                                            <Label required>Position Type</Label>
                                            <Select
                                                options={[
                                                    { value: "dentiste_generaliste", label: "Dentiste généraliste" },
                                                    { value: "dentiste_specialiste", label: "Dentiste spécialiste" },
                                                    { value: "hygieniste_dentaire", label: "Hygiéniste dentaire" },
                                                    { value: "assistant_dentaire", label: "Assistant dentaire" },
                                                    { value: "secretaire_dentaire", label: "Secrétaire dentaire" }
                                                ]}
                                                placeholder="Select position type"
                                                value={dentalIndustryFields.position_type ? {
                                                    value: dentalIndustryFields.position_type,
                                                    label: dentalIndustryFields.position_type === "dentiste_generaliste" ? "Dentiste généraliste" :
                                                          dentalIndustryFields.position_type === "dentiste_specialiste" ? "Dentiste spécialiste" :
                                                          dentalIndustryFields.position_type === "hygieniste_dentaire" ? "Hygiéniste dentaire" :
                                                          dentalIndustryFields.position_type === "assistant_dentaire" ? "Assistant dentaire" :
                                                          dentalIndustryFields.position_type === "secretaire_dentaire" ? "Secrétaire dentaire" : ""
                                                } : null}
                                                onChange={(option) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    position_type: option?.value,
                                                    specialties: option?.value !== "dentiste_specialiste" ? [] : dentalIndustryFields.specialties
                                                })}
                                                required
                                            />
                                        </div>
                                        
                                        {/* Specialties Multi-Select */}
                                        {dentalIndustryFields.position_type === "dentiste_specialiste" && (
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
                                            <div className="flex items-center gap-2">
                                                <Select
                                                    className="w-36"
                                                    options={hourOptions}
                                                    placeholder="Start Time"
                                                    value={hourOptions.find(opt => 
                                                        opt.value === (dentalIndustryFields.working_hours?.split('-')[0] || "09:00")
                                                    )}
                                                    onChange={(option) => {
                                                        const start = option?.value || "09:00";
                                                        const end = dentalIndustryFields.working_hours?.split('-')[1] || "17:00";
                                                        setDentalIndustryFields({
                                                            ...dentalIndustryFields,
                                                            working_hours: `${start}-${end}`
                                                        });
                                                    }}
                                                    required
                                                />
                                                <span>to</span>
                                                <Select
                                                    className="w-36"
                                                    options={hourOptions}
                                                    placeholder="End Time"
                                                    value={hourOptions.find(opt => 
                                                        opt.value === (dentalIndustryFields.working_hours?.split('-')[1] || "17:00")
                                                    )}
                                                    onChange={(option) => {
                                                        const start = dentalIndustryFields.working_hours?.split('-')[0] || "09:00";
                                                        const end = option?.value || "17:00";
                                                        setDentalIndustryFields({
                                                            ...dentalIndustryFields,
                                                            working_hours: `${start}-${end}`
                                                        });
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Break Included */}
                                        <div>
                                            <Checkbox
                                                label="Break Included"
                                                checked={dentalIndustryFields.break_included || false}
                                                onChange={(checked) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    break_included: checked
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Break Duration - only shown if break is included */}
                                        {dentalIndustryFields.break_included && (
                                            <div>
                                                <Label>Break Duration (minutes)</Label>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    step="15"
                                                    placeholder="e.g., 30"
                                                    value={dentalIndustryFields.break_duration || ""}
                                                    onChange={(e) => setDentalIndustryFields({
                                                        ...dentalIndustryFields,
                                                        break_duration: e.target.value ? Number(e.target.value) : ""
                                                    })}
                                                />
                                            </div>
                                        )}
                                        
                                        {/* Required Experience */}
                                        <div>
                                            <Label required>Required Experience</Label>
                                            <Select
                                                options={[
                                                    { value: "New Graduate", label: "New Graduate" },
                                                    { value: "1-3 years", label: "1-3 years" },
                                                    { value: "4-6 years", label: "4-6 years" },
                                                    { value: "7+ years", label: "7+ years" }
                                                ]}
                                                placeholder="Select required experience"
                                                value={{ value: dentalIndustryFields.required_experience, label: dentalIndustryFields.required_experience }}
                                                onChange={(option) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    required_experience: option?.value
                                                })}
                                                required
                                            />
                                        </div>
                                        
                                        {/* Bonuses */}
                                        <div>
                                            <Checkbox
                                                label="Bonuses Available"
                                                checked={dentalIndustryFields.bonuses || false}
                                                onChange={(checked) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    bonuses: checked
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Fees - Show only if institution has fees enabled */}
                                        {institution?.fees_enabled && (
                                            <div>
                                                <Label>Fees</Label>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    step="1"
                                                    placeholder="e.g., 100"
                                                    value={dentalIndustryFields.fees || ""}
                                                    onChange={(e) => setDentalIndustryFields({
                                                        ...dentalIndustryFields,
                                                        fees: e.target.value
                                                    })}
                                                />
                                            </div>
                                        )}
                                        
                                        {/* Parking Available - The unique field for dental clinics */}
                                        <div>
                                            <Checkbox
                                                label="Parking Available"
                                                checked={dentalIndustryFields.parking_available || false}
                                                onChange={(checked) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    parking_available: checked
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Software Required */}
                                        <div>
                                            <Label>Software Required</Label>
                                            <Select
                                              options={industry_type === "pharmacy" ?
                                                [
                                                  { value: "Ubik", label: "Ubik" },
                                                  { value: "AssystRx", label: "AssystRx" },
                                                  { value: "Kroll", label: "Kroll" },
                                                  { value: "Fillware", label: "Fillware" },
                                                  { value: "Genesis", label: "Genesis" }
                                                ] :
                                                [
                                                  { value: "Dentrix", label: "Dentrix" },
                                                  { value: "Dentaide", label: "Dentaide" },
                                                  { value: "LogiDent", label: "LogiDent" },
                                                  { value: "Progident", label: "Progident" },
                                                  { value: "Maxident", label: "Maxident" }
                                                ]
                                              }
                                              isMulti
                                              placeholder="Select required software"
                                              value={industry_type === "pharmacy"
                                                ? (pharmacyIndustryFields.software_required || []).map(sw => ({ value: sw, label: sw }))
                                                : (dentalIndustryFields.software_required || []).map(sw => ({ value: sw, label: sw }))
                                              }
                                              onChange={(options) => {
                                                if (industry_type === "pharmacy") {
                                                  setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    software_required: options ? options.map(option => option.value) : []
                                                  });
                                                } else {
                                                  setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    software_required: options ? options.map(option => option.value) : []
                                                  });
                                                }
                                              }}
                                            />
                                        </div>
                                        
                                        {/* Institution Address - Non-modifiable */}
                                        <div>
                                            <Label>Institution Address</Label>
                                            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                                                {institution ? (
                                                    <>
                                                        <p>{institutions.find(inst => inst.institution_id === institution.value)?.address || "No address found"}</p>
                                                        <p>
                                                            {institutions.find(inst => inst.institution_id === institution.value)?.city || ""}, 
                                                            {institutions.find(inst => inst.institution_id === institution.value)?.province || ""}
                                                        </p>
                                                    </>
                                                ) : (
                                                    "No institution selected"
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">Address is pulled from institution profile</p>
                                        </div>
                                        
                                        {/* Detailed Tasks */}
                                        <div>
                                            <Label>Detailed Tasks</Label>
                                            <TextArea
                                                placeholder="Describe the detailed tasks..."
                                                value={dentalIndustryFields.detailed_tasks || ""}
                                                onChange={(e) => {
                                                    // Handle both string value and event object
                                                    const value = typeof e === 'object' && e !== null && 'target' in e 
                                                      ? e.target.value 
                                                      : e;
                                                      
                                                    setDentalIndustryFields({
                                                        ...dentalIndustryFields,
                                                        detailed_tasks: value || ""
                                                    });
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Additional Information */}
                                        <div>
                                            <Label>Additional Information</Label>
                                            <TextArea
                                                placeholder="Any additional information..."
                                                value={dentalIndustryFields.additional_information || ""}
                                                onChange={(e) => {
                                                    // Handle both string value and event object
                                                    const value = typeof e === 'object' && e !== null && 'target' in e 
                                                      ? e.target.value 
                                                      : e;
                                                      
                                                    setDentalIndustryFields({
                                                        ...dentalIndustryFields,
                                                        additional_information: value || ""
                                                    });
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                            {/* Add Specialized Mission Fields section for dental */}
                            {industry_type === "dental_clinic" && contract_type === "remplacement" && dentalIndustryFields.mission_special && (
                                <div className="mb-5 px-2">
                                    <div className="space-y-4 border p-4 rounded-lg">
                                        <h3 className="text-lg font-medium">Mission Spécialisée</h3>
                                        
                                        {/* Type de mission dropdown */}
                                        <div>
                                            <Label required>Type de mission</Label>
                                            <Select
                                                options={[
                                                    { value: "chirurgicale", label: "Chirurgicale" },
                                                    { value: "evaluation_complexe", label: "Évaluation complexe" },
                                                    { value: "implant", label: "Pose d'implant" },
                                                    { value: "endodontie", label: "Traitement endodontique" },
                                                    { value: "orthodontie", label: "Orthodontie" },
                                                    { value: "prothese", label: "Prothèse dentaire" },
                                                    { value: "autre", label: "Autre" }
                                                ]}
                                                placeholder="Sélectionner le type de mission"
                                                value={{ 
                                                    value: dentalIndustryFields.specialized_mission_type || "", 
                                                    label: dentalIndustryFields.specialized_mission_type || "" 
                                                }}
                                                onChange={(option) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    specialized_mission_type: option?.value
                                                })}
                                                required
                                            />
                                        </div>
                                        
                                        {/* Spécialité requise */}
                                        <div>
                                            <Label required>Spécialité requise</Label>
                                            <Input
                                                type="text"
                                                placeholder="Ex: Orthodontie, Implantologie, etc."
                                                value={dentalIndustryFields.required_specialty || ""}
                                                onChange={(e) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    required_specialty: e.target.value
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Objectif de la mission */}
                                        <div>
                                            <Label required>Objectif de la mission / acte requis</Label>
                                            <TextArea
                                                placeholder="Décrivez l'objectif de la mission..."
                                                value={dentalIndustryFields.mission_objective || ""}
                                                onChange={(valueOrEvent) => {
                                                    const value = typeof valueOrEvent === 'object' && valueOrEvent?.target 
                                                        ? valueOrEvent.target.value 
                                                        : valueOrEvent;
                                                    setDentalIndustryFields({
                                                        ...dentalIndustryFields,
                                                        mission_objective: value
                                                    });
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Durée estimée */}
                                        <div>
                                            <Label required>Durée estimée (heures)</Label>
                                            <Input
                                                type="number"
                                                min="1"
                                                step="1"
                                                placeholder="Ex: 4"
                                                value={dentalIndustryFields.estimated_duration || ""}
                                                onChange={(e) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    estimated_duration: e.target.value
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Taux proposé */}
                                        <div>
                                            <Label required>Taux proposé</Label>
                                            <div className="flex items-center">
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    step="1"
                                                    placeholder="Ex: 150"
                                                    value={dentalIndustryFields.proposed_rate || ""}
                                                    onChange={(e) => setDentalIndustryFields({
                                                        ...dentalIndustryFields,
                                                        proposed_rate: e.target.value
                                                    })}
                                                />
                                                <span className="ml-2">$ / heure</span>
                                            </div>
                                        </div>
                                        
                                        {/* Matériel / Salle */}
                                        <div>
                                            <Label>Matériel / Salle</Label>
                                            <Select
                                                options={[
                                                    { value: "oui", label: "Oui" },
                                                    { value: "non", label: "Non" }
                                                ]}
                                                placeholder="Est-ce que du matériel ou une salle spécifique est requis?"
                                                value={{ 
                                                    value: dentalIndustryFields.equipment_required ? "oui" : "non", 
                                                    label: dentalIndustryFields.equipment_required ? "Oui" : "Non" 
                                                }}
                                                onChange={(option) => setDentalIndustryFields({
                                                    ...dentalIndustryFields,
                                                    equipment_required: option?.value === "oui"
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Equipment description field - only shown if equipment is required */}
                                        {dentalIndustryFields.equipment_required && (
                                            <div>
                                                <Label>Description du matériel / salle</Label>
                                                <TextArea
                                                    placeholder="Décrivez le matériel ou la salle nécessaire..."
                                                    value={dentalIndustryFields.equipment_description || ""}
                                                    onChange={(valueOrEvent) => {
                                                        const value = typeof valueOrEvent === 'object' && valueOrEvent?.target 
                                                            ? valueOrEvent.target.value 
                                                            : valueOrEvent;
                                                        setDentalIndustryFields({
                                                            ...dentalIndustryFields,
                                                            equipment_description: value
                                                        });
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* Add Specialized Mission Fields section for pharmacy */}
                            {industry_type === "pharmacy" && contract_type === "remplacement" && pharmacyIndustryFields.mission_special && (
                                <div className="mb-5 px-2">
                                    <div className="space-y-4 border p-4 rounded-lg">
                                        <h3 className="text-lg font-medium">Mission Spécialisée</h3>
                                        
                                        {/* Type de mission dropdown - Pharmacy specific options */}
                                        <div>
                                            <Label required>Type de mission</Label>
                                            <Select
                                                options={[
                                                    { value: "preparation_specialisee", label: "Préparation spécialisée" },
                                                    { value: "consultation_specialisee", label: "Consultation spécialisée" },
                                                    { value: "service_clinique", label: "Service clinique" },
                                                    { value: "gestion_medicaments", label: "Gestion des médicaments contrôlés" },
                                                    { value: "vaccination", label: "Campagne de vaccination" },
                                                    { value: "autre", label: "Autre" }
                                                ]}
                                                placeholder="Sélectionner le type de mission"
                                                value={{ 
                                                    value: pharmacyIndustryFields.specialized_mission_type || "", 
                                                    label: pharmacyIndustryFields.specialized_mission_type || "" 
                                                }}
                                                onChange={(option) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    specialized_mission_type: option?.value
                                                })}
                                                required
                                            />
                                        </div>
                                        
                                        {/* Spécialité requise */}
                                        <div>
                                            <Label required>Spécialité requise</Label>
                                            <Input
                                                type="text"
                                                placeholder="Ex: Oncologie, Gériatrie, etc."
                                                value={pharmacyIndustryFields.required_specialty || ""}
                                                onChange={(e) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    required_specialty: e.target.value
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Objectif de la mission */}
                                        <div>
                                            <Label required>Objectif de la mission / acte requis</Label>
                                            <TextArea
                                                placeholder="Décrivez l'objectif de la mission..."
                                                value={pharmacyIndustryFields.mission_objective || ""}
                                                onChange={(valueOrEvent) => {
                                                    const value = typeof valueOrEvent === 'object' && valueOrEvent?.target 
                                                        ? valueOrEvent.target.value 
                                                        : valueOrEvent;
                                                    setPharmacyIndustryFields({
                                                        ...pharmacyIndustryFields,
                                                        mission_objective: value
                                                    });
                                                }}
                                            />
                                        </div>
                                        
                                        {/* Durée estimée */}
                                        <div>
                                            <Label required>Durée estimée (heures)</Label>
                                            <Input
                                                type="number"
                                                min="1"
                                                step="1"
                                                placeholder="Ex: 4"
                                                value={pharmacyIndustryFields.estimated_duration || ""}
                                                onChange={(e) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    estimated_duration: e.target.value
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Taux proposé */}
                                        <div>
                                            <Label required>Taux proposé</Label>
                                            <div className="flex items-center">
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    step="1"
                                                    placeholder="Ex: 150"
                                                    value={pharmacyIndustryFields.proposed_rate || ""}
                                                    onChange={(e) => setPharmacyIndustryFields({
                                                        ...pharmacyIndustryFields,
                                                        proposed_rate: e.target.value
                                                    })}
                                                />
                                                <span className="ml-2">$ / heure</span>
                                            </div>
                                        </div>
                                        
                                        {/* Matériel / Salle */}
                                        <div>
                                            <Label>Matériel / Salle</Label>
                                            <Select
                                                options={[
                                                    { value: "oui", label: "Oui" },
                                                    { value: "non", label: "Non" }
                                                ]}
                                                placeholder="Est-ce que du matériel ou une salle spécifique est requis?"
                                                value={{ 
                                                    value: pharmacyIndustryFields.equipment_required ? "oui" : "non", 
                                                    label: pharmacyIndustryFields.equipment_required ? "Oui" : "Non" 
                                                }}
                                                onChange={(option) => setPharmacyIndustryFields({
                                                    ...pharmacyIndustryFields,
                                                    equipment_required: option?.value === "oui"
                                                })}
                                            />
                                        </div>
                                        
                                        {/* Equipment description field - only shown if equipment is required */}
                                        {pharmacyIndustryFields.equipment_required && (
                                            <div>
                                                <Label>Description du matériel / salle</Label>
                                                <TextArea
                                                    placeholder="Décrivez le matériel ou la salle nécessaire..."
                                                    value={pharmacyIndustryFields.equipment_description || ""}
                                                    onChange={(valueOrEvent) => {
                                                        const value = typeof valueOrEvent === 'object' && valueOrEvent?.target 
                                                            ? valueOrEvent.target.value 
                                                            : valueOrEvent;
                                                        setPharmacyIndustryFields({
                                                            ...pharmacyIndustryFields,
                                                            equipment_description: value
                                                        });
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            {/* Placement Fields for BOTH Pharmacy AND Dental Clinic */}
                            {contract_type === "placement" && (industry_type === "pharmacy" || industry_type === "dental_clinic") && (
                              <div className="mb-5 px-2">
                                <div className="space-y-4 border p-4 rounded-lg">
                                  <h3 className="text-lg font-medium">Placement Details</h3>
                                  
                                  {/* Position Type dropdown - different options based on industry */}
                                  <div>
                                    <Label required>Position Type</Label>
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
                                    <div className="flex items-center gap-2">
                                      <Input
                                        type="time"
                                        className="w-[100px]"
                                        value={
                                          industry_type === "pharmacy"
                                            ? pharmacyIndustryFields.working_hours?.split('-')[0] || "09:00"
                                            : dentalIndustryFields.working_hours?.split('-')[0] || "09:00"
                                        }
                                        onChange={(e) => {
                                          const start = e.target.value;
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
                                        required
                                      />
                                      <span>to</span>
                                      <Input
                                        type="time"
                                        className="w-[100px]"
                                        value={
                                          industry_type === "pharmacy"
                                            ? pharmacyIndustryFields.working_hours?.split('-')[1] || "17:00"
                                            : dentalIndustryFields.working_hours?.split('-')[1] || "17:00"
                                        }
                                        onChange={(e) => {
                                          const start = industry_type === "pharmacy"
                                            ? pharmacyIndustryFields.working_hours?.split('-')[0] || "09:00"
                                            : dentalIndustryFields.working_hours?.split('-')[0] || "09:00";
                                          const end = e.target.value;
                                          
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
                                        required
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
                                  
                                  {/* Break Included */}
                                  <div>
                                    <Checkbox
                                      label="Break Included"
                                      checked={industry_type === "pharmacy" 
                                        ? pharmacyIndustryFields.break_included || false 
                                        : dentalIndustryFields.break_included || false}
                                      onChange={(checked) => {
                                        if (industry_type === "pharmacy") {
                                          setPharmacyIndustryFields({
                                            ...pharmacyIndustryFields,
                                            break_included: checked
                                          });
                                        } else {
                                          setDentalIndustryFields({
                                            ...dentalIndustryFields,
                                            break_included: checked
                                          });
                                        }
                                      }}
                                    />
                                  </div>
                                  
                                  {/* Break Duration - only shown if break is included */}
                                  {((industry_type === "pharmacy" && pharmacyIndustryFields.break_included) || 
                                    (industry_type === "dental_clinic" && dentalIndustryFields.break_included)) && (
                                    <div>
                                      <Label>Break Duration (minutes)</Label>
                                      <Input
                                        type="number"
                                        min="0"
                                        step="15"
                                        placeholder="e.g., 30"
                                        value={industry_type === "pharmacy" 
                                          ? pharmacyIndustryFields.break_duration || "" 
                                          : dentalIndustryFields.break_duration || ""}
                                        onChange={(e) => {
                                          if (industry_type === "pharmacy") {
                                            setPharmacyIndustryFields({
                                              ...pharmacyIndustryFields,
                                              break_duration: e.target.value ? Number(e.target.value) : ""
                                            });
                                          } else {
                                            setDentalIndustryFields({
                                              ...dentalIndustryFields,
                                              break_duration: e.target.value ? Number(e.target.value) : ""
                                            });
                                          }
                                        }}
                                      />
                                    </div>
                                  )}
                                  
                                  {/* Bonuses */}
                                  <div>
                                    <Checkbox
                                      label="Bonuses Available"
                                      checked={industry_type === "pharmacy" 
                                        ? pharmacyIndustryFields.bonuses || false 
                                        : dentalIndustryFields.bonuses || false}
                                      onChange={(checked) => {
                                        if (industry_type === "pharmacy") {
                                          setPharmacyIndustryFields({
                                            ...pharmacyIndustryFields,
                                            bonuses: checked
                                          });
                                        } else {
                                          setDentalIndustryFields({
                                            ...dentalIndustryFields,
                                            bonuses: checked
                                          });
                                        }
                                      }}
                                    />
                                  </div>
                                  
                                  {/* Software Required - Different options for each industry */}
                                  <div>
                                    <Label>Software Required</Label>
                                    <Select
                                      options={industry_type === "pharmacy" ?
                                        [
                                          { value: "Ubik", label: "Ubik" },
                                          { value: "AssystRx", label: "AssystRx" },
                                          { value: "Kroll", label: "Kroll" },
                                          { value: "Fillware", label: "Fillware" },
                                          { value: "Genesis", label: "Genesis" }
                                        ] :
                                        [
                                          { value: "Dentrix", label: "Dentrix" },
                                          { value: "Dentaide", label: "Dentaide" },
                                          { value: "LogiDent", label: "LogiDent" },
                                          { value: "Progident", label: "Progident" },
                                          { value: "Maxident", label: "Maxident" }
                                        ]
                                      }
                                      isMulti
                                      placeholder="Select required software"
                                      value={industry_type === "pharmacy"
                                        ? (pharmacyIndustryFields.software_required || []).map(sw => ({ value: sw, label: sw }))
                                        : (dentalIndustryFields.software_required || []).map(sw => ({ value: sw, label: sw }))
                                      }
                                      onChange={(options) => {
                                        if (industry_type === "pharmacy") {
                                          setPharmacyIndustryFields({
                                            ...pharmacyIndustryFields,
                                            software_required: options ? options.map(option => option.value) : []
                                          });
                                        } else {
                                          setDentalIndustryFields({
                                            ...dentalIndustryFields,
                                            software_required: options ? options.map(option => option.value) : []
                                          });
                                        }
                                      }}
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
                            <BaseFields
                                position_title={position_title}
                                setPositionTitle={setPositionTitle}
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
                                
                                // New props for per-day work hours
                                contract_type={contract_type}
                                setIsWorkHoursPopupOpen={setIsWorkHoursPopupOpen}
                                showPerDayWorkHours={start_date && end_date ? 
                                  (new Date(end_date) - new Date(start_date)) / (1000 * 60 * 60 * 24) <= 10 : false}
                                
                                // Add these missing props
                                pharmacyIndustryFields={pharmacyIndustryFields}
                                setPharmacyIndustryFields={setPharmacyIndustryFields}
                                dentalIndustryFields={dentalIndustryFields}
                                setDentalIndustryFields={setDentalIndustryFields}
                            />
                            {showPerDayWorkHours && (
                                <div className="mt-4 px-2">
                                  <Button 
                                    size="sm" 
                                    variant="primary"
                                    onClick={() => setIsWorkHoursPopupOpen(true)}
                                    className="w-full md:w-auto"
                                  >
                                    Set Daily Work Hours
                                  </Button>
                                </div>
                            )}
                            {/* Modify these two component renderings to prevent duplication */}
                            {industry_type === "pharmacy" && contract_type !== "placement" && (
                                <PharmacyFields
                                    contract_type={contract_type}
                                    pharmacyIndustryFields={pharmacyIndustryFields}
                                    setPharmacyIndustryFields={setPharmacyIndustryFields}
                                    dateRange={generateDateRange(start_date, end_date)}
                                    showPerDayWorkHours={generateDateRange(start_date, end_date).length <= 10}
                                    hourOptions={hourOptions}
                                    institution_id={institution}
                                    isWorkHoursPopupOpen={isWorkHoursPopupOpen}
                                    setIsWorkHoursPopupOpen={setIsWorkHoursPopupOpen}
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
                                    isWorkHoursPopupOpen={isWorkHoursPopupOpen}
                                    setIsWorkHoursPopup={setIsWorkHoursPopupOpen}
                                />
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
                            {contract_type === "remplacement" && remplacementFields && (
                                <RemplacementFieldsComponent
                                    remplacementFields={remplacementFields}
                                    setRemplacementFields={setRemplacementFields}
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
                              <Input
                                type="time"
                                className="w-[100px]"
                                value={
                                  industry_type === "pharmacy"
                                    ? pharmacyIndustryFields.daily_hours?.[date]?.start_time || "09:00"
                                    : dentalIndustryFields.daily_hours?.[date]?.start_time || "09:00"
                                }
                                onChange={(e) => {
                                  const updatedHours = industry_type === "pharmacy"
                                    ? { ...(pharmacyIndustryFields.daily_hours || {}) }
                                    : { ...(dentalIndustryFields.daily_hours || {}) };
                                    
                                  updatedHours[date] = updatedHours[date] || { enabled: true };
                                  updatedHours[date].start_time = e.target.value;
                                  
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
                              <Input
                                type="time"
                                className="w-[100px]"
                                value={
                                  industry_type === "pharmacy"
                                    ? pharmacyIndustryFields.daily_hours?.[date]?.end_time || "17:00"
                                    : dentalIndustryFields.daily_hours?.[date]?.end_time || "17:00"
                                }
                                onChange={(e) => {
                                  const updatedHours = industry_type === "pharmacy"
                                    ? { ...(pharmacyIndustryFields.daily_hours || {}) }
                                    : { ...(dentalIndustryFields.daily_hours || {}) };
                                    
                                  updatedHours[date] = updatedHours[date] || { enabled: true };
                                  updatedHours[date].end_time = e.target.value;
                                  
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