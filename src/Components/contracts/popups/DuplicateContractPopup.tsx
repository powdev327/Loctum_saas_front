import React from "react";
import { Modal } from "../../ui/modal";
import Label from "../../form/Label";
import useContractForm from "../../../hooks/owner/contract/useContractHook.ts";
import Button from "../../ui/button/Button.tsx";
import Radio from "../../form/input/Radio.tsx";
import Select from "../../form/Select.tsx";
import { useClient } from "../../../context/owner/ClientContext.tsx";
import { useContract } from "../../../context/owner/ContractContext.tsx";
import toast from "react-hot-toast";
import {BaseFields} from "./ContractFieldsPopup/BaseFields.tsx";

import {PlacementFieldsComponent} from "./ContractFieldsPopup/PlacementFields.tsx";
import {AffiliationFieldsComponent} from "./ContractFieldsPopup/AffiliationFields.tsx";
import {RemplacementFieldsComponent} from "./ContractFieldsPopup/RemplacementFields.tsx";

export function DuplicateContractPopup({ isOpen, closeModal, selectedContract, closeConfirmation }) {
    const { institutions, client_id } = useClient();
    const { storeContract } = useContract();
    const {
        contract_type, setContractType,
        status,
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
    } = useContractForm(selectedContract);

    const handleSubmit = async () => {
        if (!contract_type) {
            toast.error("Missing required fields contract_type");
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
            institution_id: institution,
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
            closeConfirmation()
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
    const showPerDayWorkHours = contract_type === "remplacement" && dateRange.length < 10;

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
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[900px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                    <div className="px-2 pr-14">
                        <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
                            Duplicate Contract Details
                        </h4>
                        <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 lg:mb-7">
                            Duplicate and modify contract details to create a new contract.
                        </p>
                    </div>
                    <div className="flex flex-col">
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
                                value={institutions
                                    .map((inst) => ({
                                        label: inst.institution_name,
                                        value: inst.institution_id,
                                        type_of_contract: inst.type_of_contract?.replace(/[{}]/g, ""),
                                        institution_type: inst.institution_type,
                                        fees_enabled: inst.fees_enabled,
                                    }))
                                    .find((opt) => opt.value === institution)}
                                onChange={(selectedOption) => {
                                    console.log("Selected institution_type:", selectedOption.institution_type);
                                    setInstitution(selectedOption?.value || "");
                                    if (selectedOption?.type_of_contract) {
                                        setContractType(selectedOption.type_of_contract);
                                    }
                                    setFeesEnabled(selectedOption?.fees_enabled || false);
                                    if (selectedOption?.institution_type) {
                                        setIndustryType(institutionToIndustryMap[selectedOption.institution_type] || "");
                                    }
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
                        />

                        {contract_type === "placement" && placementFields && (
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
    );
}