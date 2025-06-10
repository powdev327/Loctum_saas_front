import { useState } from "react";

type ContractType = "PLACEMENT" | "AFFILIATION" | "REMPLACEMENT";
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

type DailyWorkHours = { [date: string]: string };

type PharmacyIndustryFields = {
    daily_work_hours: string[];
    break_included: boolean;
    break_duration?: number;
    bonus_or_additional_compensation: boolean;
    software?: string[];
    per_day_work_hours: DailyWorkHours;
};

type DentalIndustryFields = {
    work_hours: string[];
    break_included?: boolean;
    break_duration?: number;
    bonus_or_premium?: boolean;
    software?: string[];
    per_day_work_hours: DailyWorkHours;
};

const useContractForm = (initialContract: any = null) => {
    const [contract_type, setContractType] = useState<ContractType | string>(
        initialContract?.contract_type?.toLowerCase() || ""
    );
    const [industry_type, setIndustryType] = useState<IndustryType | string>(
        initialContract?.industry_type === "dental_clinic" ? "dental_clinic" : initialContract?.industry_type || ""
    );
    const [status, setStatus] = useState<ContractStatus>(
        initialContract?.status || "pending"
    );

    const [position_title, setPositionTitle] = useState<string>(
        initialContract?.position_title || ""
    );
    const [description, setDescription] = useState<string>(
        initialContract?.description || ""
    );
    const [start_date, setStartDate] = useState<string>(
        initialContract?.start_date || ""
    );
    const [end_date, setEndDate] = useState<string>(
        initialContract?.end_date || ""
    );
    const [hourly_rate, setHourlyRate] = useState<number>(
        initialContract?.hourly_rate || 0
    );
    const [institution, setInstitution] = useState<string>(
        initialContract?.institution_id || ""
    );
    const [feesEnabled, setFeesEnabled] = useState<boolean | null>(null);

    const [placementFields, setPlacementFields] = useState<PlacementContract>({
        desired_position: initialContract?.specific_contract_fields?.desired_position || "",
        specialties: initialContract?.specific_contract_fields?.specialties || [],
        contract_location: initialContract?.specific_contract_fields?.contract_location || "",
        start_date: initialContract?.specific_contract_fields?.start_date || initialContract?.start_date || "",
        experience_level: initialContract?.specific_contract_fields?.experience_level || "",
        compensation: initialContract?.specific_contract_fields?.compensation || "",
        other_compensation: initialContract?.specific_contract_fields?.other_compensation || "",
        benefits: initialContract?.specific_contract_fields?.benefits || [],
        task_description: initialContract?.specific_contract_fields?.task_description || "",
        urgent_need: initialContract?.specific_contract_fields?.urgent_need || false,
        bonus_or_incentives: initialContract?.specific_contract_fields?.bonus_or_incentives || false,
        fees: initialContract?.specific_contract_fields?.fees || "",
        parking: initialContract?.specific_contract_fields?.parking || "",
        languages: initialContract?.specific_contract_fields?.languages || [],
        softwares: initialContract?.specific_contract_fields?.softwares || [],
        additional_information: initialContract?.specific_contract_fields?.additional_information || "",
        attached_documents: [],
    });

    const [affiliationFields, setAffiliationFields] = useState<AffiliationContract>({
        establishment_name: initialContract?.specific_contract_fields?.establishment_name|| "",
        position_sought: initialContract?.specific_contract_fields?.position_sought || "",
        specialties: initialContract?.specific_contract_fields?.specialties || [],
        affiliation_location: initialContract?.specific_contract_fields?.affiliation_location || "",
        revenue_percentage: initialContract?.specific_contract_fields?.revenue_percentage || "",
        payment_conditions: initialContract?.specific_contract_fields?.payment_conditions || "",
        software_used: initialContract?.specific_contract_fields?.software_used || "",
        required_languages: initialContract?.specific_contract_fields?.required_languages || "",
        advantages: initialContract?.specific_contract_fields?.advantages || "",
        engagement_duration: initialContract?.specific_contract_fields?.engagement_duration || "",
        objectives_or_quotas: initialContract?.specific_contract_fields?.objectives_or_quotas || "",
        attached_documents: initialContract?.specific_contract_fields?.attached_documents || "",
        specific_clauses: initialContract?.specific_contract_fields?.specific_clauses || "",
    });

    const [remplacementFields, setRemplacementFields] = useState<RemplacementContract>({
        mission_type: initialContract?.specific_contract_fields?.mission_type || "",
        required_specialty: initialContract?.specific_contract_fields?.required_specialty || "",
        mission_objective: initialContract?.specific_contract_fields?.mission_objective || "",
        estimated_duration: initialContract?.specific_contract_fields?.estimated_duration || "",
        preferred_date: initialContract?.specific_contract_fields?.preferred_date || "",
        proposed_rate: initialContract?.specific_contract_fields?.proposed_rate || "",
        equipment_or_operating_room:initialContract?.specific_contract_fields?.equipment_or_operating_room || "",
        attached_documents: initialContract?.specific_contract_fields?.attached_documents || [],
    });

    const [pharmacyIndustryFields, setPharmacyIndustryFields] = useState<PharmacyIndustryFields>({
        daily_work_hours: initialContract?.specific_industry_fields?.daily_work_hours || [],
        break_included: initialContract?.specific_industry_fields?.break_included || false,
        break_duration: initialContract?.specific_industry_fields?.break_duration || undefined,
        bonus_or_additional_compensation: initialContract?.specific_industry_fields?.bonus_or_premium || false,
        software: initialContract?.specific_industry_fields?.software || [],
        per_day_work_hours: initialContract?.specific_industry_fields?.per_day_work_hours || {},
    });

    const [dentalIndustryFields, setDentalIndustryFields] = useState<DentalIndustryFields>({
        work_hours: initialContract?.specific_industry_fields?.work_hours || [],
        break_included: initialContract?.specific_industry_fields?.break_included || undefined,
        break_duration: initialContract?.specific_industry_fields?.break_duration || undefined,
        bonus_or_premium: initialContract?.specific_industry_fields?.bonus_or_premium || undefined,
        software: initialContract?.specific_industry_fields?.software || [],
        per_day_work_hours: initialContract?.specific_industry_fields?.per_day_work_hours || {},
    });


    const generateDateRange = (start: string, end: string): string[] => {
        if (!start || !end) return [];
        const startDate = new Date(start);
        const endDate = new Date(end);
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || startDate > endDate) return [];

        const dates = [];
        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            dates.push(currentDate.toISOString().split("T")[0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };


    const initializeWorkHours = (dates: string[], defaultHours: string = "08:00-16:00") => {
        const newWorkHours: DailyWorkHours = {};
        dates.forEach((date) => {
            newWorkHours[date] = defaultHours;
        });
        return newWorkHours;
    };


    const updateWorkHours = (newStart: string, newEnd: string) => {
        const dates = generateDateRange(newStart, newEnd);
        const defaultHours = industry_type === "pharmacy"
            ? pharmacyIndustryFields.daily_work_hours[0] || "09:00-17:00"
            : dentalIndustryFields.work_hours[0] || "08:00-16:00";

        if (industry_type === "pharmacy") {
            setPharmacyIndustryFields((prev) => ({
                ...prev,
                per_day_work_hours: initializeWorkHours(dates, defaultHours),
            }));
        } else if (industry_type === "dental_clinic") {
            setDentalIndustryFields((prev) => ({
                ...prev,
                per_day_work_hours: initializeWorkHours(dates, defaultHours),
            }));
        }
    };

  const handleStartDateChange = (value: string) => {
        setStartDate(value);
        updateWorkHours(value, end_date);
    };

    const handleEndDateChange = (value: string) => {
        setEndDate(value);
        updateWorkHours(start_date, value);
    };

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
        setStartDate: handleStartDateChange,
        end_date,
        setEndDate: handleEndDateChange,
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
        generateDateRange,
    };
};

export default useContractForm;