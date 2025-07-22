import { useState } from "react";

// Enums
export type ContractType = "PLACEMENT" | "AFFILIATION" | "REMPLACEMENT";
export type IndustryType = "DentalClinic" | "pharmacy";
export type ContractStatus = "PENDING" | "ACTIVE" | "COMPLETED" | "CANCELLED";
export type ReplacementMissionType = "GENERAL" | "SPECIALIZED";

// DTO Interface
export interface ContractDTO {
    // Core Contract fields
    contract_id?: string;
    institution_id?: string;
    contract_type: ContractType;
    industry_type: IndustryType;
    start_date: string;
    end_date: string;
    description: string;
    position_title: string;
    contract_location: string;
    status: ContractStatus;
    created_at?: string;
    detailed_tasks?: string;
    additional_information?: string;
    documents_joint?: string;

    // Affiliation Contract fields
    name_establishment?: string;
    percentage_generated?: string;
    percentage_payment_conditions?: string;
    affiliation_software_required?: string[];
    affiliation_languages_required?: string[];
    benefits?: string[];
    duration_commitment?: string;
    objectives_or_quotas?: string;

    // Placement Contract fields
    remuneration?: string;
    placement_benefits?: string[];
    speciality?: string;
    urgent_need?: boolean;
    placement_bonuses?: boolean;
    fees?: any[];
    parking_available?: boolean;
    placement_languages_required?: string[];
    placement_software_required?: string[];
    required_experience?: string;

    // Replacement Contract fields
    mission_type?: ReplacementMissionType;

    // Replacement General Mission fields
    general_mission_bonuses?: boolean;
    general_mission_fees?: any[];
    general_mission_parking?: boolean;
    general_mission_languages?: string[];
    general_mission_software?: string[];
    general_mission_working_hours?: string;
    general_mission_pause_included?: boolean;
    general_mission_proposed_hourly_rate?: string;
    general_mission_required_experience?: string

    // Replacement Specialized Mission fields
    mission_type_label?: string;
    required_specialty?: string;
    mission_objective?: string;
    desired_date?: string;
    estimated_duration?: string;
    proposed_rate?: string;
    material_room_required?: boolean;
    material_room_description?: string;
}

interface ContractFormState extends Omit<ContractDTO, 'start_date' | 'end_date' | 'desired_date'> {
    start_date: Date | null;
    end_date: Date | null;
    desired_date?: Date | null;
    daily_hours?: Record<string, { enabled: boolean; start_time: string; end_time: string }>;
    attached_documents?: File[];
}

const useContractForm = (initialContract: Partial<ContractDTO> | null = null) => {
    const parseDate = (date?: string) => (date ? new Date(date) : null);

    const [formState, setFormState] = useState<ContractFormState>({
        contract_id: initialContract?.contract_id,
        institution_id: initialContract?.institution_id || "",
        contract_type: initialContract?.contract_type || "PLACEMENT",
        industry_type: initialContract?.industry_type || "pharmacy",
        start_date: parseDate(initialContract?.start_date),
        end_date: parseDate(initialContract?.end_date),
        description: initialContract?.description || "",
        position_title: initialContract?.position_title || "",
        contract_location: initialContract?.contract_location || "",
        status: initialContract?.status || "PENDING",
        created_at: initialContract?.created_at,
        detailed_tasks: initialContract?.detailed_tasks,
        additional_information: initialContract?.additional_information,
        documents_joint: initialContract?.documents_joint,

        // Affiliation Contract fields
        name_establishment: initialContract?.name_establishment,
        percentage_generated: initialContract?.percentage_generated,
        percentage_payment_conditions: initialContract?.percentage_payment_conditions,
        affiliation_software_required: initialContract?.affiliation_software_required,
        affiliation_languages_required: initialContract?.affiliation_languages_required,
        benefits: initialContract?.benefits,
        duration_commitment: initialContract?.duration_commitment,
        objectives_or_quotas: initialContract?.objectives_or_quotas,

        // Placement Contract fields
        remuneration: initialContract?.remuneration,
        placement_benefits: initialContract?.placement_benefits,
        speciality: initialContract?.speciality,
        urgent_need: initialContract?.urgent_need,
        placement_bonuses: initialContract?.placement_bonuses,
        fees: initialContract?.fees,
        parking_available: initialContract?.parking_available,
        placement_languages_required: initialContract?.placement_languages_required,
        placement_software_required: initialContract?.placement_software_required,
        required_experience: initialContract?.required_experience,

        // Replacement Contract fields
        mission_type: initialContract?.mission_type,

        // Replacement General Mission fields
        general_mission_bonuses: initialContract?.general_mission_bonuses ?? false,
        general_mission_fees: initialContract?.general_mission_fees ?? [],
        general_mission_parking: initialContract?.general_mission_parking ?? false,
        general_mission_languages: initialContract?.general_mission_languages ?? [],
        general_mission_software: initialContract?.general_mission_software ?? [],
        general_mission_working_hours: initialContract?.general_mission_working_hours ?? "",
        general_mission_pause_included: initialContract?.general_mission_pause_included ?? false,
        general_mission_proposed_hourly_rate: initialContract?.general_mission_proposed_hourly_rate ?? "",
        general_mission_required_experience: initialContract?.general_mission_required_experience ?? "",


        // Replacement Specialized Mission fields
        mission_type_label: initialContract?.mission_type_label,
        required_specialty: initialContract?.required_specialty,
        mission_objective: initialContract?.mission_objective,
        desired_date: parseDate(initialContract?.desired_date),
        estimated_duration: initialContract?.estimated_duration,
        proposed_rate: initialContract?.proposed_rate,
        material_room_required: initialContract?.material_room_required,
        material_room_description: initialContract?.material_room_description,

        attached_documents: initialContract?.documents_joint
            ? initialContract.documents_joint.split(',').map(name => new File([], name))
            : [],
        daily_hours: {}
    });

    const generateDateRange = (start: Date | null, end: Date | null): string[] => {
        if (!start || !end || start > end) return [];
        const dates = [];
        const current = new Date(start);
        while (current <= end) {
            dates.push(current.toISOString().split("T")[0]);
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };

    const updateWorkHours = (start: Date | null, end: Date | null) => {
        const dates = generateDateRange(start, end);
        const defaultHours = formState.industry_type === "pharmacy" ? "09:00-17:00" : "08:00-16:00";
        setFormState(prev => ({
            ...prev,
            working_hours: dates.length ? defaultHours : "",
            daily_hours: Object.fromEntries(
                dates.map(date => [date, {
                    enabled: true,
                    start_time: defaultHours.split("-")[0],
                    end_time: defaultHours.split("-")[1],
                }])
            )
        }));
    };

    const handleChange = <K extends keyof ContractFormState>(field: K, value: ContractFormState[K]) => {
        setFormState(prev => {
            const next = { ...prev, [field]: value };
            if (field === "start_date" || field === "end_date") {
                updateWorkHours(
                    field === "start_date" ? (value as Date | null) : next.start_date,
                    field === "end_date" ? (value as Date | null) : next.end_date
                );
            }
            return next;
        });
    };

    const getContractData = (): ContractDTO => {
        const format = (date: Date | null) => date?.toISOString() || "";
        return {
            ...formState,
            start_date: format(formState.start_date),
            end_date: format(formState.end_date),
            desired_date: formState.desired_date ? format(formState.desired_date) : undefined,
            documents_joint: formState.attached_documents?.map(f => f.name).join(',') || undefined,
            daily_hours: undefined,
            attached_documents: undefined
        } as ContractDTO;
    };

    return {
        formState,
        handleChange,
        getContractData,
    };
};

export default useContractForm;
