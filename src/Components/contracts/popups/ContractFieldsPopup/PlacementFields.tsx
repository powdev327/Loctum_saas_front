import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Switch from "../../../form/switch/Switch.tsx";
import MultiSelect from "../../../form/MultiSelect.tsx";

interface PlacementFieldsProps {
    formState: {
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
        detailed_tasks?: string;
        additional_information?: string;
        attached_documents?: File[];
    };
    handleChange: <K extends keyof typeof formState>(
        field: K,
        value: typeof formState[K]
    ) => void;
    submissionAttempted?: boolean;
    feesEnabled?: boolean;
    industry_type?: string;
}

export const PlacementFieldsComponent = ({
                                             formState,
                                             handleChange,
                                             submissionAttempted = false,
                                             feesEnabled = false,
                                             industry_type = "Pharmacy"
                                         }: PlacementFieldsProps) => {
    const positionOptions = industry_type === "Pharmacy"
        ? [
            { value: "Pharmacien", label: "Pharmacien" },
            { value: "Assistant_technique", label: "Assistant Technique" },
            { value: "Pharmacist_manager", label: "Pharmacist Manager" },
        ]
        : [
            { value: "General_dentist", label: "General Dentist" },
            { value: "Specialist_dentist", label: "Specialist Dentist" },
            { value: "Dental_hygienist", label: "Dental Hygienist" },
            { value: "Dental_assistant", label: "Dental Assistant" },
            { value: "Dental_receptionist", label: "Dental Receptionist" },
        ];

    return (
        <div className="mt-8 px-2">
            <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                Placement Details
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                        value={formState.speciality ? [formState.speciality] : []}
                        onChange={(values) => handleChange('speciality', values[0] || '')}
                    />
                </div>

                <div>
                    <Label required>Experience Level</Label>
                    {submissionAttempted && !formState.required_experience && (
                        <span className="text-red-500 text-xs block mb-1">
                            This field is required.
                        </span>
                    )}
                    <Select
                        options={[
                            { value: "Less_than_1_year", label: "Less than 1 year" },
                            { value: "1-3_years", label: "1-3 years" },
                            { value: "3-5_years", label: "3-5 years" },
                            { value: "5-10_years", label: "5-10 years" },
                            { value: "More_than_10_years", label: "More than 10 years" },
                            { value: "Does_not_matter", label: "Does not matter" },
                        ]}
                        value={formState.required_experience || ""}
                        onChange={(value) => handleChange('required_experience', value)}
                    />
                </div>

                <div>
                    <Label>Compensation Type</Label>
                    <Select
                        options={[
                            { value: "Hourly_rate", label: "Hourly Rate" },
                            { value: "Fixed_salary", label: "Fixed Salary" },
                            { value: "Percentage_of_production", label: "Percentage of Production" },
                            { value: "Other", label: "Other" },
                        ]}
                        value={formState.remuneration?.split(',')[0] || ""}
                        onChange={(value) => {
                            const currentValue = formState.remuneration?.split(',')[1] || '';
                            handleChange('remuneration', value + (currentValue ? `, ${currentValue}` : ''));
                        }}
                    />
                </div>

                <div>
                    <Label>Compensation Amount</Label>
                    <Input
                        type="number"
                        value={formState.remuneration?.split(',')[1] || ""}
                        onChange={(e) => {
                            const currentType = formState.remuneration?.split(',')[0] || '';
                            handleChange('remuneration', currentType + (e.target.value ? `, ${e.target.value}` : ''));
                        }}
                    />
                </div>

                <div>
                    <Label>Benefits (select multiple)</Label>
                    <MultiSelect
                        options={[
                            { value: "In_kind", text: "In Kind" },
                            { value: "In_cash", text: "In Cash" },
                        ]}
                        value={formState.placement_benefits || []}
                        onChange={(values) => handleChange('placement_benefits', values)}
                    />
                </div>

                <div>
                    <Switch
                        label="Urgent Need"
                        checked={formState.urgent_need || false}
                        onChange={(checked) => handleChange('urgent_need', checked)}
                    />
                </div>

                <div>
                    <Switch
                        label="Bonus or Incentives"
                        checked={formState.placement_bonuses || false}
                        onChange={(checked) => handleChange('placement_bonuses', checked)}
                    />
                </div>

                {feesEnabled && (
                    <div>
                        <Label>Fees</Label>
                        <Input
                            type="number"
                            placeholder="Enter fees"
                            value={formState.fees?.[0]?.amount || ""}
                            onChange={(e) => handleChange('fees', [{ amount: parseFloat(e.target.value) }])}
                        />
                    </div>
                )}

                <div>
                    <Label>Parking Available</Label>
                    <Switch
                        checked={formState.parking_available || false}
                        onChange={(checked) => handleChange('parking_available', checked)}
                    />
                </div>

                <div>
                    <Label>Languages (select multiple)</Label>
                    <MultiSelect
                        options={[
                            { value: "francais", text: "Français" },
                            { value: "anglais", text: "Anglais" },
                            { value: "espagnol", text: "Espagnol" },
                            { value: "arabe", text: "Arabe" },
                            { value: "mandarin", text: "Mandarin" },
                        ]}
                        value={formState.placement_languages_required || []}
                        onChange={(values) => handleChange('placement_languages_required', values)}
                    />
                </div>

                <div>
                    <Label>Softwares (select multiple)</Label>
                    <MultiSelect
                        options={[
                            { value: "dentech", text: "DenTech" },
                            { value: "dentalex", text: "DentAlex" },
                            { value: "pharmapro", text: "PharmaPro" },
                            { value: "rxsolutions", text: "RxSolutions" },
                        ]}
                        value={formState.placement_software_required || []}
                        onChange={(values) => handleChange('placement_software_required', values)}
                    />
                </div>

                <div className="col-span-2">
                    <Label>Detailed Tasks</Label>
                    <textarea
                        className="w-full border rounded p-2"
                        rows={3}
                        value={formState.detailed_tasks || ""}
                        onChange={(e) => handleChange('detailed_tasks', e.target.value)}
                    />
                </div>

                <div className="col-span-2">
                    <Label>Additional Information</Label>
                    <textarea
                        className="w-full border rounded p-2"
                        rows={3}
                        value={formState.additional_information || ""}
                        onChange={(e) => handleChange('additional_information', e.target.value)}
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
                                handleChange('attached_documents', Array.from(files));
                            }
                        }}
                        className="block w-full text-sm text-gray-900 dark:text-white/90 file:mr-4 file:rounded file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100 dark:file:bg-brand-800 dark:file:text-white"
                    />
                </div>
            </div>
        </div>
    );
};