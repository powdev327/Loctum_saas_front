import { useState } from "react";

type ContractType = "placement" | "affiliation" | "remplacement";
type IndustryType = "Dental" | "Pharmacy";
type ContractStatus = "pending" | "active" | "completed" | "cancelled";

type PlacementContract = {
    desired_position:
        | "General_dentist"
        | "Specialist_dentist"
        | "Dental_hygienist"
        | "Dental_assistant"
        | "Dental_receptionist";
    specialties?: Array<"Orthodontics" | "Endodontics" | "Periodontics" | "Surgery" | "Other">;
    contract_location: string;
    start_date: string;
    experience_level:
        | "Less_than_1_year"
        | "1-3_years"
        | "3-5_years"
        | "5-10_years"
        | "More_than_10_years"
        | "Does_not_matter";
    compensation: "Hourly_rate" | "Fixed_salary" | "Percentage_of_production" | "Other";
    other_compensation?: string;
    benefits: Array<"In_kind" | "In_cash">;
    task_description: string;
    urgent_need?: boolean;
    bonus_or_incentives?: boolean;
    fees?: string;
    parking?: string;
    languages?: string[];
    softwares?: string[];
    additional_information?: string;
    attached_documents: File[];
};

type AffiliationContract = {
    establishment_name: string;
    position_sought: string;
    specialties: string[];
    affiliation_location: string;
    revenue_percentage: string;
    payment_conditions: string;
    software_used: string;
    required_languages: string;
    advantages: string;
    engagement_duration: string;
    objectives_or_quotas: string;
    attached_documents: File[];
    specific_clauses: string;
};

type RemplacementContract = {
    mission_type: string;
    required_specialty: string;
    mission_objective: string;
    estimated_duration: string;
    preferred_date: string;
    proposed_rate: string;
    equipment_or_operating_room?: string;
    attached_documents: File[];
};

type PharmacyIndustryFields = {
    daily_work_hours: string[];
    break_included: boolean;
    break_duration?: number;
    bonus_or_additional_compensation: boolean;
    software?: string[];
};

type DentalIndustryFields = {
    work_hours: string[];
    break_included?: boolean;
    break_duration?: number;
    bonus_or_premium?: boolean;
    software?: string[];
};


const useContractForm = () => {
    const [contract_type, setContractType] = useState<ContractType | string>("");
    const [industry_type, setIndustryType] = useState<IndustryType | string>("");
    const [status, setStatus] = useState<ContractStatus>("pending");

    const [position_title, setPositionTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [start_date, setStartDate] = useState<string>("");
    const [end_date, setEndDate] = useState<string>("");
    const [hourly_rate, setHourlyRate] = useState<number>(0);
    const [institution, setInstitution] = useState<string>("");
    const [feesEnabled, setFeesEnabled] = useState<boolean | null>(null);

    const [placementFields, setPlacementFields] = useState<PlacementContract>({
        desired_position: "",
        specialties: [],
        contract_location: "",
        start_date: "",
        experience_level: "",
        compensation: "",
        other_compensation: "",
        benefits: [],
        task_description: "",
        urgent_need: false,
        bonus_or_incentives: false,
        fees: "",
        parking: "",
        languages: [],
        softwares: [],
        additional_information: "",
        attached_documents: [],
    });

    const [affiliationFields, setAffiliationFields] = useState<AffiliationContract>({
        establishment_name: "",
        position_sought: "",
        specialties: [],
        affiliation_location: "",
        revenue_percentage: "",
        payment_conditions: "",
        software_used: "",
        required_languages: "",
        advantages: "",
        engagement_duration: "",
        objectives_or_quotas: "",
        attached_documents: [],
        specific_clauses: "",
    });

    const [remplacementFields, setRemplacementFields] = useState<RemplacementContract>({
        mission_type: "",
        required_specialty: "",
        mission_objective: "",
        estimated_duration: "",
        preferred_date: "",
        proposed_rate: "",
        equipment_or_operating_room: "",
        attached_documents: []
    });

    const [pharmacyIndustryFields, setPharmacyIndustryFields] = useState<PharmacyIndustryFields>({
        daily_work_hours: [],
        break_included: false,
        break_duration: undefined,
        bonus_or_additional_compensation: false,
        software: [],
    });

    const [dentalIndustryFields, setDentalIndustryFields] = useState<DentalIndustryFields>({
        work_hours: [],
        break_included: undefined,
        break_duration: undefined,
        bonus_or_premium: undefined,
        software: [],
    });


    return {
        contract_type,
        setContractType,
        industry_type,
        setIndustryType,
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
        remplacementFields,
        setRemplacementFields,
        feesEnabled,
        setFeesEnabled,
        pharmacyIndustryFields,
        setPharmacyIndustryFields,
        dentalIndustryFields,
        setDentalIndustryFields,
    };

};

export default useContractForm;
