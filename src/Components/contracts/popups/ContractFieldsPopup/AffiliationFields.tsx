import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import MultiSelect from "../../../form/MultiSelect.tsx";

interface AffiliationFieldsProps {
    formState: {
        name_establishment?: string;
        percentage_generated?: string;
        percentage_payment_conditions?: string;
        affiliation_software_required?: string[];
        affiliation_languages_required?: string[];
        benefits?: string[];
        duration_commitment?: string;
        objectives_or_quotas?: string;
        detailed_tasks?: string;
        additional_information?: string;
        attached_documents?: File[];
    };
    handleChange: <K extends keyof typeof formState>(
        field: K,
        value: typeof formState[K]
    ) => void;
    submissionAttempted?: boolean;
    industry_type?: string;
}

export const AffiliationFieldsComponent = ({
                                               formState,
                                               handleChange,
                                               submissionAttempted = false,
                                               industry_type = "Pharmacy"
                                           }: AffiliationFieldsProps) => {
    return (
        <div className="mt-8 px-2">
            <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                Affiliation Details
            </h5>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <Label required>Establishment Name</Label>
                    {submissionAttempted && !formState.name_establishment && (
                        <span className="text-red-500 text-xs block mb-1">
                            This field is required.
                        </span>
                    )}
                    <Input
                        value={formState.name_establishment || ""}
                        onChange={(e) => handleChange('name_establishment', e.target.value)}
                        placeholder="Enter establishment name"
                    />
                </div>

                <div>
                    <Label>Specialties</Label>
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
                    <Label>Revenue Percentage</Label>
                    <Input
                        type="number"
                        value={formState.percentage_generated || ""}
                        onChange={(e) => handleChange('percentage_generated', e.target.value)}
                        placeholder="Enter revenue percentage"
                    />
                </div>

                <div>
                    <Label>Payment Conditions</Label>
                    <Input
                        value={formState.percentage_payment_conditions || ""}
                        onChange={(e) => handleChange('percentage_payment_conditions', e.target.value)}
                        placeholder="Enter payment conditions"
                    />
                </div>

                <div>
                    <Label>Software Used (select multiple)</Label>
                    <MultiSelect
                        options={[
                            { value: "dentech", text: "DenTech" },
                            { value: "dentalex", text: "DentAlex" },
                            { value: "pharmapro", text: "PharmaPro" },
                            { value: "rxsolutions", text: "RxSolutions" },
                        ]}
                        value={formState.affiliation_software_required || []}
                        onChange={(values) => handleChange('affiliation_software_required', values)}
                    />
                </div>

                <div>
                    <Label>Languages Required (select multiple)</Label>
                    <MultiSelect
                        options={[
                            { value: "francais", text: "Français" },
                            { value: "anglais", text: "Anglais" },
                            { value: "espagnol", text: "Espagnol" },
                            { value: "arabe", text: "Arabe" },
                            { value: "mandarin", text: "Mandarin" },
                        ]}
                        value={formState.affiliation_languages_required || []}
                        onChange={(values) => handleChange('affiliation_languages_required', values)}
                    />
                </div>

                <div className="col-span-2">
                    <Label>Benefits</Label>
                    <MultiSelect
                        options={[
                            { value: "In_kind", text: "In Kind" },
                            { value: "In_cash", text: "In Cash" },
                        ]}
                        value={formState.benefits || []}
                        onChange={(values) => handleChange('benefits', values)}
                    />
                </div>

                <div>
                    <Label>Engagement Duration</Label>
                    <Input
                        value={formState.duration_commitment || ""}
                        onChange={(e) => handleChange('duration_commitment', e.target.value)}
                        placeholder="Enter engagement duration"
                    />
                </div>

                <div>
                    <Label>Objectives or Quotas</Label>
                    <Input
                        value={formState.objectives_or_quotas || ""}
                        onChange={(e) => handleChange('objectives_or_quotas', e.target.value)}
                        placeholder="Enter objectives or quotas"
                    />
                </div>

                <div className="col-span-2">
                    <Label>Additional Information</Label>
                    <textarea
                        className="w-full border rounded p-2"
                        rows={4}
                        value={formState.additional_information || ""}
                        onChange={(e) => handleChange('additional_information', e.target.value)}
                        placeholder="Enter additional information"
                    />
                </div>

                <div className="col-span-2">
                    <Label>Detailed Tasks</Label>
                    <textarea
                        className="w-full border rounded p-2"
                        rows={4}
                        value={formState.detailed_tasks || ""}
                        onChange={(e) => handleChange('detailed_tasks', e.target.value)}
                        placeholder="Enter detailed tasks"
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