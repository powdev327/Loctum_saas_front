import React from "react";
import { Modal } from "../../ui/modal";
import Label from "../../form/Label";
import Input from "../../form/input/InputField";
import useContractForm from "../../../hooks/owner/contract/useContractHook.ts";
import MultiSelect from "../../form/MultiSelect.tsx";
import Button from "../../ui/button/Button.tsx";
import Radio from "../../form/input/Radio.tsx";
import Switch from "../../form/switch/Switch.tsx";
import Select from "../../form/Select.tsx";
import { useClient } from "../../../context/owner/ClientContext.tsx";
import { useContract } from "../../../context/owner/ContractContext.tsx";
import toast from "react-hot-toast";

export function CreateContractPopup({ isOpen, closeModal }) {
    const { institutions, client_id } = useClient();
    const { storeContract } = useContract();
    const {
        contract_type,
        setContractType,
        status,
        setStatus,
        position_title,
        setPositionTitle,
        description,
        setDescription,
        start_date,
        setStartDate,
        end_date,
        setEndDate,
        hourly_rate,
        setHourlyRate,
        institution,
        setInstitution,
        placementFields,
        setPlacementFields,
        affiliationFields,
        setAffiliationFields,
        feesEnabled,
        setFeesEnabled,
        industry_type,
        setIndustryType,
        remplacementFields,
        setRemplacementFields,
        pharmacyIndustryFields,
        setPharmacyIndustryFields,
        dentalIndustryFields,
        setDentalIndustryFields,
    } = useContractForm();

    const handleSubmit = async () => {
        if (!institution?.value || !contract_type) {
            toast.error("Missing required fields institution_id, or contract_type");
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

        const specific_industry_fields =
            industry_type === "PHARMACY"
                ? pharmacyIndustryFields
                : industry_type === "DENTAL"
                    ? dentalIndustryFields
                    : {};

        let contractData;
        if (contract_type === "placement") {
            contractData = {
                ...baseContract,
                specific_contract_fields: {
                    desired_position: placementFields.desired_position,
                    specialties: placementFields.specialties || [],
                    contract_location: placementFields.contract_location || "",
                    start_date: placementFields.start_date || start_date,
                    experience_level: placementFields.experience_level,
                    compensation: placementFields.compensation,
                    other_compensation: placementFields.other_compensation || "",
                    benefits: placementFields.benefits || [],
                    task_description: placementFields.task_description || "",
                    urgent_need: placementFields.urgent_need || false,
                    bonus_or_incentives: placementFields.bonus_or_incentives || false,
                    fees: feesEnabled ? placementFields.fees : null,
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
                specific_fields: {
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
                specific_fields: {
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
                specific_fields: {
                    attached_documents: [],
                },
                specific_industry_fields,
            };
        }

        console.log("Contract data:", JSON.stringify(contractData, null, 2));
        formData.append("contract_data", JSON.stringify(contractData));

        const files =
            contract_type === "placement"
                ? placementFields.attached_documents
                : affiliationFields.attached_documents;

        if (files) {
            files.forEach((file) => {
                formData.append("attached_documents", file);
            });
        }

        try {
            await storeContract(formData);
            console.log("Contract submitted!");
            closeModal();
        } catch (error) {
            console.error("Submission error:", error);
        }
    };
    const contractOptions = [
        { value: "placement", label: "Placement" },
        { value: "affiliation", label: "Affiliation" },
        { value: "remplacement", label: "Remplacement" },
    ];

    const institutionToIndustryMap = {
        DENTAL: "Dental Clinic",
        PHARMACY: "Pharmacy",
    };

    const options = Object.entries(institutionToIndustryMap).map(([key, label]) => ({
        value: key,
        label,
    }));




    return (
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[900px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Add Contract Details
                        </h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Add details of Contract to keep your profile up-to-date.
                        </p>
                    </div>

                    <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
                        <div className="col-span-2 mb-5">
                            <Label>Institution</Label>
                            <Select
                                options={institutions.map((inst) => ({
                                    label: inst.institution_name,
                                    value: inst.institution_id,
                                    type_of_contract: inst.type_of_contract?.replace(/[{}]/g, ""),
                                    institution_type: inst.institution_type,
                                    fees_enabled: inst.fees_enabled,
                                }))}
                                placeholder="Select institution"
                                value={institution}
                                onChange={(selectedOption) => {
                                    setInstitution(selectedOption);
                                    if (selectedOption.type_of_contract) {
                                        setContractType(selectedOption.type_of_contract);
                                    }
                                    setFeesEnabled(selectedOption.fees_enabled);
                                }}
                            />
                        </div>

                        <div className="mb-5">
                            <Label>Contract Type</Label>
                            <div className="grid grid-cols-3 gap-3 mt-2">
                                {contractOptions.map((option) => {
                                    const isDisabled = institution && option.value !== institution.type_of_contract;
                                    return (
                                        <Radio
                                            key={option.value}
                                            id={`contract-type-${option.value}`}
                                            name="contract_type"
                                            value={option.value}
                                            label={option.label}
                                            checked={contract_type === option.value}
                                            onChange={(value) => setContractType(value)}
                                            disabled={isDisabled}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 px-2">
                            <div>
                                <Label>Position Title</Label>
                                <Input value={position_title} onChange={(e) => setPositionTitle(e.target.value)} />
                            </div>
                            <div>
                                <Label>Description</Label>
                                <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>

                            <div>
                                <Label>Start Date</Label>
                                <Input type="date" value={start_date} onChange={(e) => setStartDate(e.target.value)} />
                            </div>

                            <div>
                                <Label>End Date</Label>
                                <Input type="date" value={end_date} onChange={(e) => setEndDate(e.target.value)} />
                            </div>

                            <div>
                                <Label>Hourly Rate</Label>
                                <Input
                                    type="number"
                                    value={hourly_rate}
                                    onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
                                />
                            </div>

                            <div>
                                <Label>Industry Type</Label>
                                <Select
                                    options={options}
                                    placeholder="Select industry"
                                    value={options.find(opt => opt.value === industry_type) || null}
                                    onChange={(option) => setIndustryType(option?.value || "")}
                                />
                            </div>



                        </div>


                        {industry_type === "PHARMACY" && (
                            <div className="space-y-4 mt-4">
                                <div>
                                    <Label>Daily Work Hours</Label>
                                    <Input
                                        type="text"
                                        placeholder="e.g. 09:00-17:00"
                                        value={pharmacyIndustryFields.daily_work_hours.join(", ")}
                                        onChange={(e) =>
                                            setPharmacyIndustryFields({
                                                ...pharmacyIndustryFields,
                                                daily_work_hours: e.target.value.split(",").map(val => val.trim()),
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Break Included</Label>
                                    <input
                                        type="checkbox"
                                        checked={pharmacyIndustryFields.break_included}
                                        onChange={(e) =>
                                            setPharmacyIndustryFields({
                                                ...pharmacyIndustryFields,
                                                break_included: e.target.checked,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Break Duration (minutes)</Label>
                                    <Input
                                        type="number"
                                        value={pharmacyIndustryFields.break_duration ?? ""}
                                        onChange={(e) =>
                                            setPharmacyIndustryFields({
                                                ...pharmacyIndustryFields,
                                                break_duration: Number(e.target.value) || undefined,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Bonus or Additional Compensation</Label>
                                    <input
                                        type="checkbox"
                                        checked={pharmacyIndustryFields.bonus_or_additional_compensation}
                                        onChange={(e) =>
                                            setPharmacyIndustryFields({
                                                ...pharmacyIndustryFields,
                                                bonus_or_additional_compensation: e.target.checked,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Software</Label>
                                    <Input
                                        type="text"
                                        placeholder="e.g. Kroll, Pharmasys"
                                        value={pharmacyIndustryFields.software.join(", ")}
                                        onChange={(e) =>
                                            setPharmacyIndustryFields({
                                                ...pharmacyIndustryFields,
                                                software: e.target.value.split(",").map(val => val.trim()),
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        )}

                        {industry_type === "DENTAL" && (
                            <div className="space-y-4 mt-4">
                                <div>
                                    <Label>Work Hours</Label>
                                    <Input
                                        type="text"
                                        placeholder="e.g. 08:00-16:00"
                                        value={dentalIndustryFields.work_hours.join(", ")}
                                        onChange={(e) =>
                                            setDentalIndustryFields({
                                                ...dentalIndustryFields,
                                                work_hours: e.target.value.split(",").map(val => val.trim()),
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Break Included</Label>
                                    <input
                                        type="checkbox"
                                        checked={dentalIndustryFields.break_included ?? false}
                                        onChange={(e) =>
                                            setDentalIndustryFields({
                                                ...dentalIndustryFields,
                                                break_included: e.target.checked,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Break Duration (minutes)</Label>
                                    <Input
                                        type="number"
                                        value={dentalIndustryFields.break_duration ?? ""}
                                        onChange={(e) =>
                                            setDentalIndustryFields({
                                                ...dentalIndustryFields,
                                                break_duration: Number(e.target.value) || undefined,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Bonus or Premium</Label>
                                    <input
                                        type="checkbox"
                                        checked={dentalIndustryFields.bonus_or_premium ?? false}
                                        onChange={(e) =>
                                            setDentalIndustryFields({
                                                ...dentalIndustryFields,
                                                bonus_or_premium: e.target.checked,
                                            })
                                        }
                                    />
                                </div>

                                <div>
                                    <Label>Software</Label>
                                    <Input
                                        type="text"
                                        placeholder="e.g. Dentrix, AbelDent"
                                        value={dentalIndustryFields.software.join(", ")}
                                        onChange={(e) =>
                                            setDentalIndustryFields({
                                                ...dentalIndustryFields,
                                                software: e.target.value.split(",").map(val => val.trim()),
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        )}


                        {contract_type === "placement" && placementFields && (
                            <div className="mt-8 px-2">
                                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                                    Placement Details
                                </h5>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div>
                                        <Label>Desired Position</Label>
                                        <Select
                                            options={[
                                                { value: "General_dentist", label: "General Dentist" },
                                                { value: "Specialist_dentist", label: "Specialist Dentist" },
                                                { value: "Dental_hygienist", label: "Dental Hygienist" },
                                                { value: "Dental_assistant", label: "Dental Assistant" },
                                                { value: "Dental_receptionist", label: "Dental Receptionist" },
                                            ]}
                                            placeholder="Select desired position"
                                            value={placementFields.desired_position}
                                            onChange={(option) =>
                                                setPlacementFields({
                                                    ...placementFields,
                                                    desired_position: option ? option.value : "",
                                                })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Specialties (select multiple)</Label>
                                        <MultiSelect
                                            options={[
                                                { value: "Orthodontics", text: "Orthodontics" },
                                                { value: "Endodontics", text: "Endodontics" },
                                                { value: "Periodontics", text: "Periodontics" },
                                                { value: "Surgery", text: "Surgery" },
                                                { value: "Other", text: "Other" },
                                            ]}
                                            value={placementFields.specialties || []}
                                            onChange={(values) =>
                                                setPlacementFields({
                                                    ...placementFields,
                                                    specialties: values,
                                                })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Contract Location</Label>
                                        <Input
                                            value={placementFields.contract_location || ""}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, contract_location: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Start Date</Label>
                                        <Input
                                            type="date"
                                            value={placementFields.start_date || ""}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, start_date: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Experience Level</Label>
                                        <Select
                                            options={[
                                                { value: "Less_than_1_year", label: "Less than 1 year" },
                                                { value: "1-3_years", label: "1-3 years" },
                                                { value: "3-5_years", label: "3-5 years" },
                                                { value: "5-10_years", label: "5-10 years" },
                                                { value: "More_than_10_years", label: "More_than_10_years" },
                                                { value: "Does_not_matter", label: "Does not matter" },
                                            ]}
                                            value={placementFields.experience_level}
                                            onChange={(option) =>
                                                setPlacementFields({
                                                    ...placementFields,
                                                    experience_level: option ? option.value : "",
                                                })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Compensation</Label>
                                        <Select
                                            options={[
                                                { value: "Hourly_rate", label: "Hourly Rate" },
                                                { value: "Fixed_salary", label: "Fixed Salary" },
                                                { value: "Percentage_of_production", label: "Percentage of Production" },
                                                { value: "Other", label: "Other" },
                                            ]}
                                            value={placementFields.compensation}
                                            onChange={(option) =>
                                                setPlacementFields({
                                                    ...placementFields,
                                                    compensation: option ? option.value : "",
                                                })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Other Compensation</Label>
                                        <Input
                                            type='number'
                                            value={placementFields.other_compensation}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, other_compensation: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Benefits (select multiple)</Label>
                                        <MultiSelect
                                            options={[
                                                { value: "In_kind", text: "In Kind" },
                                                { value: "In_cash", text: "In Cash" },
                                            ]}
                                            value={placementFields.benefits || []}
                                            onChange={(values) =>
                                                setPlacementFields({
                                                    ...placementFields,
                                                    benefits: values,
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Task Description</Label>
                                        <Input
                                            value={placementFields.task_description || ""}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, task_description: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Switch
                                            label="Urgent Need"
                                            checked={placementFields.urgent_need || false}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, urgent_need: e })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Switch
                                            label="Bonus or Incentives"
                                            checked={placementFields.bonus_or_incentives || false}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, bonus_or_incentives: e })
                                            }
                                        />
                                    </div>

                                    {feesEnabled && (
                                        <div>
                                            <Label>Fees</Label>
                                            <Input
                                                type="number"
                                                placeholder="Enter fees"
                                                value={placementFields?.fees || ""}
                                                onChange={(e) =>
                                                    setPlacementFields({
                                                        ...placementFields,
                                                        fees: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <Label>Parking</Label>
                                        <Input
                                            value={placementFields.parking || ""}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, parking: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Languages (comma-separated)</Label>
                                        <Input
                                            value={placementFields.languages?.join(", ") || ""}
                                            onChange={(e) =>
                                                setPlacementFields({
                                                    ...placementFields,
                                                    languages: e.target.value.split(",").map((s) => s.trim()).filter(s => s),
                                                })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Softwares (comma-separated)</Label>
                                        <Input
                                            value={placementFields.softwares?.join(", ") || ""}
                                            onChange={(e) =>
                                                setPlacementFields({
                                                    ...placementFields,
                                                    softwares: e.target.value.split(",").map((s) => s.trim()).filter(s => s),
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Additional Information</Label>
                                        <textarea
                                            className="w-full border p-2"
                                            rows={3}
                                            value={placementFields.additional_information || ""}
                                            onChange={(e) =>
                                                setPlacementFields({ ...placementFields, additional_information: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Attached Documents</Label>
                                        <input
                                            type="file"
                                            multiple
                                            accept=".pdf,.doc,.docx,.txt,.rtf,.xls,.xlsx,.ppt,.pptx"
                                            onChange={(e) => {
                                                const files = e.target.files;
                                                if (files) {
                                                    const fileArray = Array.from(files);
                                                    setPlacementFields((prev) => ({
                                                        ...prev,
                                                        attached_documents: fileArray,
                                                    }));
                                                }
                                            }}
                                            className="block w-full text-sm text-gray-900 dark:text-white/90 file:mr-4 file:rounded file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100 dark:file:bg-brand-800 dark:file:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {contract_type === "affiliation" && affiliationFields && (
                            <div className="mt-8 px-2">
                                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                                    Affiliation Details
                                </h5>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div>
                                        <Label>Establishment Name</Label>
                                        <Input
                                            value={affiliationFields.establishment_name || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, establishment_name: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Position Sought</Label>
                                        <Input
                                            value={affiliationFields.position_sought || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, position_sought: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Affiliation Location</Label>
                                        <Input
                                            value={affiliationFields.affiliation_location || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, affiliation_location: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Specialties (select multiple)</Label>
                                        <MultiSelect
                                            options={[
                                                { value: "Orthodontics", text: "Orthodontics" },
                                                { value: "Endodontics", text: "Endodontics" },
                                                { value: "Periodontics", text: "Periodontics" },
                                                { value: "Surgery", text: "Surgery" },
                                                { value: "Other", text: "Other" },
                                            ]}
                                            value={affiliationFields.specialties || []}
                                            onChange={(values) =>
                                                setAffiliationFields({
                                                    ...affiliationFields,
                                                    specialties: values,
                                                })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Revenue Percentage</Label>
                                        <Input
                                            type="number"
                                            value={affiliationFields.revenue_percentage || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, revenue_percentage: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Payment Conditions</Label>
                                        <Input
                                            value={affiliationFields.payment_conditions || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, payment_conditions: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Software Used</Label>
                                        <Input
                                            value={affiliationFields.software_used || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, software_used: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Required Languages</Label>
                                        <Input
                                            value={affiliationFields.required_languages || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, required_languages: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Advantages</Label>
                                        <textarea
                                            className="w-full border rounded p-2"
                                            rows={3}
                                            value={affiliationFields.advantages || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, advantages: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Engagement Duration</Label>
                                        <Input
                                            value={affiliationFields.engagement_duration || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, engagement_duration: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Objectives or Quotas</Label>
                                        <Input
                                            value={affiliationFields.objectives_or_quotas || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, objectives_or_quotas: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Specific Clauses</Label>
                                        <textarea
                                            className="w-full border rounded p-2"
                                            rows={4}
                                            value={affiliationFields.specific_clauses || ""}
                                            onChange={(e) =>
                                                setAffiliationFields({ ...affiliationFields, specific_clauses: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Attached Documents</Label>
                                        <input
                                            type="file"
                                            multiple
                                            accept=".pdf,.doc,.docx,.txt,.rtf,.xls,.xlsx,.ppt,.pptx"
                                            onChange={(e) => {
                                                const files = e.target.files;
                                                if (files) {
                                                    const fileArray = Array.from(files);
                                                    setAffiliationFields((prev) => ({
                                                        ...prev,
                                                        attached_documents: fileArray,
                                                    }));
                                                }
                                            }}
                                            className="block w-full text-sm text-gray-900 dark:text-white/90 file:mr-4 file:rounded file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100 dark:file:bg-brand-800 dark:file:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}


                        {contract_type === "remplacement" && remplacementFields && (
                            <div className="mt-8 px-2">
                                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                                    Remplacement Details
                                </h5>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                                    <div>
                                        <Label>Mission Type</Label>
                                        <Input
                                            value={remplacementFields.mission_type || ""}
                                            onChange={(e) =>
                                                setRemplacementFields({ ...remplacementFields, mission_type: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Required Specialty</Label>
                                        <Input
                                            value={remplacementFields.required_specialty || ""}
                                            onChange={(e) =>
                                                setRemplacementFields({ ...remplacementFields, required_specialty: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Mission Objective</Label>
                                        <textarea
                                            className="w-full border rounded p-2"
                                            rows={3}
                                            value={remplacementFields.mission_objective || ""}
                                            onChange={(e) =>
                                                setRemplacementFields({ ...remplacementFields, mission_objective: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Estimated Duration</Label>
                                        <Input
                                            value={remplacementFields.estimated_duration || ""}
                                            onChange={(e) =>
                                                setRemplacementFields({ ...remplacementFields, estimated_duration: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Preferred Date</Label>
                                        <Input
                                            type="date"
                                            value={remplacementFields.preferred_date || ""}
                                            onChange={(e) =>
                                                setRemplacementFields({ ...remplacementFields, preferred_date: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div>
                                        <Label>Proposed Rate</Label>
                                        <Input
                                            type="number"
                                            value={remplacementFields.proposed_rate || ""}
                                            onChange={(e) =>
                                                setRemplacementFields({ ...remplacementFields, proposed_rate: e.target.value })
                                            }
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <Label>Equipment or Operating Room</Label>
                                        <textarea
                                            className="w-full border rounded p-2"
                                            rows={2}
                                            value={remplacementFields.equipment_or_operating_room || ""}
                                            onChange={(e) =>
                                                setRemplacementFields({ ...remplacementFields, equipment_or_operating_room: e.target.value })
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                            <Button size="sm" variant="outline" onClick={closeModal}>
                                Close
                            </Button>
                            <Button size="sm" onClick={handleSubmit}>
                                Save Changes
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}