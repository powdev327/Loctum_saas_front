import Input from "../../../form/input/InputField";
import Label from "../../../form/Label";
import Select from "../../../form/Select.tsx";
import { useEffect } from "react";

interface BaseFieldsProps {
    formState: {
        description: string;
        position_title: string;
        contract_location: string;
        start_date: Date | null;
        end_date: Date | null;
        industry_type: string;
        specialist_titles?: string[];
        contract_type: string;
    };
    handleChange: <K extends keyof typeof formState>(
        field: K,
        value: typeof formState[K]
    ) => void;
    submissionAttempted?: boolean;
    industryOptions: Array<{ value: string; label: string }>;
    selectedInstitution: {
        institution_type: string;
        province: string;
    } | null;
    contractType: string;
}

const pharmacyOptionsInQuebec = [
    { label: "ATP", value: "ATP" },
    { label: "Stagiaire", value: "Stagiaire" },
    { label: "Pharmacien", value: "Pharmacien" },
];

const pharmacyOptionsOutsideQuebec = [
    { label: "Assistant", value: "Assistant" },
    { label: "Technicien", value: "Technicien" },
    { label: "Stagiaire", value: "Stagiaire" },
    { label: "Pharmacien", value: "Pharmacien" },
];

const dentalOptions = [
    { label: "Dentiste généraliste", value: "Dentiste généraliste" },
    { label: "Dentiste spécialiste", value: "Dentiste spécialiste" },
    { label: "Hygiéniste dentaire", value: "Hygiéniste dentaire" },
    { label: "Assistant dentaire", value: "Assistant dentaire" },
    { label: "Secrétaire dentaire", value: "Secrétaire dentaire" },
];

const specialistOptions = [
    { label: "Orthodontiste", value: "Orthodontiste" },
    { label: "Endodontiste", value: "Endodontiste" },
    { label: "Parodontiste", value: "Parodontiste" },
    { label: "Chirurgien maxillo-facial", value: "Chirurgien maxillo-facial" },
];

const provinceMap: { [key: string]: string } = {
    bc: "british columbia",
    qc: "quebec",
    on: "ontario",
    // Add other province codes as needed
};

export const BaseFields = ({
                               formState,
                               handleChange,
                               submissionAttempted = false,
                               industryOptions,
                               selectedInstitution,
                               contractType,
                           }: BaseFieldsProps) => {

    const isReplacement = ["REPLACEMENT", "REMPLACEMENT"].includes(contractType.toUpperCase());
    const institutionType = selectedInstitution?.institution_type?.toLowerCase() || "";
    const province = provinceMap[selectedInstitution?.province?.toLowerCase()] || selectedInstitution?.province?.toLowerCase() || "";



    let positionOptions: Array<{ label: string; value: string }> = [];
    if (institutionType === "pharmacy") {
        positionOptions = province.includes("quebec") ? pharmacyOptionsInQuebec : pharmacyOptionsOutsideQuebec;
    } else if (institutionType === "dental" || institutionType === "dental_clinic") {
        positionOptions = dentalOptions;
    }


    const formatDateForInput = (date: Date | null) => {
        if (!date) return "";
        return date.toISOString().split("T")[0];
    };

    const parseDateFromInput = (dateString: string) => {
        if (!dateString) return null;
        return new Date(dateString);
    };

    return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 px-2">
            <div className="col-span-2">
                <Label required>Detailed Task Description</Label>
                {submissionAttempted && !formState.description && (
                    <span className="text-red-500 text-xs block mb-1">
                        This field is required. Please provide a detailed description.
                    </span>
                )}
                <Input
                    value={formState.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Detail the tasks to be performed"
                />
            </div>

            <div>
                <Label required>Position Title</Label>
                {submissionAttempted && !formState.position_title && (
                    <span className="text-red-500 text-xs block mb-1">This field is required.</span>
                )}
                {isReplacement && positionOptions.length > 0 ? (
                    <Select
                        className="w-full"
                        options={positionOptions}
                        value={formState.position_title || ""}
                        onChange={(value) => {
                            console.log("Selected position_title:", value);
                            handleChange("position_title", value);
                        }}
                        placeholder="Select position title"
                    />

                ) : (
                    <>
                        {isReplacement && (
                            <span className="text-red-500 text-xs block mb-1">
                                No position options available. Please select a valid institution.
                            </span>
                        )}
                        <Input
                            value={formState.position_title}
                            onChange={(e) => {
                                console.log("Entered position_title:", e.target.value);
                                handleChange("position_title", e.target.value);
                            }}
                            placeholder="Enter the position title"
                        />
                    </>
                )}

                {isReplacement &&
                    (institutionType === "dental" || institutionType === "dental_clinic") &&
                    formState.position_title === "Dentiste spécialiste" && (
                        <div className="mt-2">
                            <Label required>Spécialités du dentiste</Label>
                            <Select
                                className="w-full"
                                options={specialistOptions}
                                isMulti
                                value={specialistOptions.filter((opt) =>
                                    formState.specialist_titles?.includes(opt.value)
                                )}
                                onChange={(options) => {
                                    const selectedValues = options.map((opt) => opt.value);
                                    console.log("Selected specialist_titles:", selectedValues);
                                    handleChange("specialist_titles", selectedValues);
                                }}
                                placeholder="Select specialties"
                            />
                        </div>
                    )}
            </div>

            <div>
                <Label required>Contract Location</Label>
                {submissionAttempted && !formState.contract_location && (
                    <span className="text-red-500 text-xs block mb-1">This field is required.</span>
                )}
                <Input
                    value={formState.contract_location}
                    onChange={(e) => handleChange("contract_location", e.target.value)}
                    placeholder="Enter the contract location"
                />
            </div>

            <div>
                <Label required>Start Date</Label>
                {submissionAttempted && !formState.start_date && (
                    <span className="text-red-500 text-xs block mb-1">This field is required.</span>
                )}
                <Input
                    type="date"
                    value={formatDateForInput(formState.start_date)}
                    onChange={(e) => handleChange("start_date", parseDateFromInput(e.target.value))}
                />
            </div>

            <div>
                <Label required>End Date</Label>
                {submissionAttempted && !formState.end_date && (
                    <span className="text-red-500 text-xs block mb-1">This field is required.</span>
                )}
                <Input
                    type="date"
                    value={formatDateForInput(formState.end_date)}
                    onChange={(e) => handleChange("end_date", parseDateFromInput(e.target.value))}
                />
            </div>

            <div className="hidden">
                <Label>Industry Type</Label>
                <Select
                    options={industryOptions}
                    placeholder="Select industry"
                    value={industryOptions.find((opt) => opt.value === formState.industry_type)}
                    onChange={(option) => handleChange("industry_type", option?.value || "")}
                />
            </div>
        </div>
    );
};