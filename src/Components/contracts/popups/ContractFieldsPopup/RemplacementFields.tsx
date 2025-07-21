import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Switch from "../../../form/switch/Switch.tsx";
import MultiSelect from "../../../form/MultiSelect.tsx";
import { useState } from "react";
import { DatePicker } from "../../../form/DatePicker";
import Button from "../../../ui/button/Button.tsx"; // Assuming you have a DatePicker component

interface RemplacementFieldsProps {
    formState: {
        mission_type?: "GENERAL" | "SPECIALIZED";
        working_hours?: string;
        pause_included?: boolean;
        proposed_hourly_rate?: string;
        general_mission_bonuses?: boolean;
        general_mission_fees?: any[];
        general_mission_parking?: boolean;
        general_mission_languages?: string[];
        general_mission_software?: string[];
        mission_type_label?: string;
        required_specialty?: string;
        mission_objective?: string;
        desired_date?: Date | null;
        estimated_duration?: string;
        proposed_rate?: string;
        material_room_required?: boolean;
        material_room_description?: string;
        daily_hours?: Record<string, { enabled: boolean; start_time: string; end_time: string }>;
        attached_documents?: File[];
    };
    handleChange: <K extends keyof typeof formState>(
        field: K,
        value: typeof formState[K]
    ) => void;
    submissionAttempted?: boolean;
    industry_type?: string;
    openWorkHoursPopup: () => void;
}

export const RemplacementFieldsComponent = ({
                                                formState,
                                                handleChange,
                                                submissionAttempted = false,
                                                industry_type = "Pharmacy",
                                                openWorkHoursPopup
                                            }: RemplacementFieldsProps) => {
    const formatDateForInput = (date: Date | null) => {
        if (!date) return '';
        return date.toISOString().split('T')[0];
    };

    const parseDateFromInput = (dateString: string) => {
        if (!dateString) return null;
        return new Date(dateString);
    };

    return (
        <div className="mt-8 px-2">
            <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                Replacement Details
            </h5>


            <div className=" lg:col-span-2 mt-0 mb-3">
                <Button
                    onClick={openWorkHoursPopup}
                    variant="outline"
                    className="w-full"
                >
                    Configure Daily Work Hours
                </Button>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <Label required>Mission Type</Label>

                    {submissionAttempted && !formState.mission_type && (
                        <span className="text-red-500 text-xs block mb-1">
      This field is required.
    </span>
                    )}

                    <Select
                        options={[
                            { value: "GENERAL", label: "General" },
                            { value: "SPECIALIZED", label: "Specialized" },
                        ]}
                        value={formState.mission_type || ""}
                        onChange={(value) => handleChange(
                            'mission_type',
                            value as "GENERAL" | "SPECIALIZED" | ""
                        )}
                    />
                </div>


                <div>
                    <Label required>Mission Objective</Label>

                    {submissionAttempted && !formState.mission_objective && (
                        <span className="text-red-500 text-xs block mb-1">
      This field is required.
    </span>
                    )}

                    <Input
                        value={formState.mission_objective}
                        onChange={(e) => handleChange('mission_objective', e.target.value)}
                        placeholder="Enter mission objective"
                    />
                </div>


                <div>
                    <Label required>Desired Date</Label>
                    {submissionAttempted && !formState.desired_date && (
                        <span className="text-red-500 text-xs block mb-1">
                            This field is required.
                        </span>
                    )}
                    <Input
                        type="date"
                        value={formatDateForInput(formState.desired_date)}
                        onChange={(e) => handleChange('desired_date', parseDateFromInput(e.target.value))}
                    />
                </div>

                <div>
                    <Label required>Proposed Hourly Rate</Label>
                    {submissionAttempted && !formState.proposed_hourly_rate && (
                        <span className="text-red-500 text-xs block mb-1">
                            This field is required.
                        </span>
                    )}
                    <Input
                        type="number"
                        value={formState.proposed_hourly_rate || ""}
                        onChange={(e) => handleChange('proposed_hourly_rate', e.target.value)}
                        placeholder="Enter proposed rate"
                    />
                </div>

                <div>
                    <Label>Pause Included</Label>
                    <Switch
                        checked={formState.pause_included || false}
                        onChange={(checked) => handleChange('pause_included', checked)}
                    />
                </div>

                {formState.mission_type === "SPECIALIZED" && (
                    <>
                        <div>
                            <Label required>Mission Type Label</Label>
                            {submissionAttempted && !formState.mission_type_label && (
                                <span className="text-red-500 text-xs block mb-1">
                                    This field is required.
                                </span>
                            )}
                            <Input
                                value={formState.mission_type_label || ""}
                                onChange={(e) => handleChange('mission_type_label', e.target.value)}
                                placeholder="Enter mission type label"
                            />
                        </div>

                        <div>
                            <Label required>Required Specialty</Label>
                            {submissionAttempted && !formState.required_specialty && (
                                <span className="text-red-500 text-xs block mb-1">
                                    This field is required.
                                </span>
                            )}
                            <Input
                                value={formState.required_specialty || ""}
                                onChange={(e) => handleChange('required_specialty', e.target.value)}
                                placeholder="Enter required specialty"
                            />
                        </div>

                        <div>
                            <Label required>Estimated Duration</Label>
                            {submissionAttempted && !formState.estimated_duration && (
                                <span className="text-red-500 text-xs block mb-1">
                                    This field is required.
                                </span>
                            )}
                            <Input
                                value={formState.estimated_duration || ""}
                                onChange={(e) => handleChange('estimated_duration', e.target.value)}
                                placeholder="Enter estimated duration"
                            />
                        </div>

                        <div>
                            <Label>Material Room Required</Label>
                            <Switch
                                checked={formState.material_room_required || false}
                                onChange={(checked) => handleChange('material_room_required', checked)}
                            />
                        </div>

                        <div className="col-span-2">
                            <Label>Material Room Description</Label>
                            <textarea
                                className="w-full border rounded p-2"
                                rows={3}
                                value={formState.material_room_description || ""}
                                onChange={(e) => handleChange('material_room_description', e.target.value)}
                                placeholder="Enter material room description"
                            />
                        </div>
                    </>
                )}

                <div>
                    <Label>Bonuses</Label>
                    <Switch
                        checked={formState.general_mission_bonuses || false}
                        onChange={(checked) => handleChange('general_mission_bonuses', checked)}
                    />
                </div>

                <div>
                    <Label>Fees</Label>
                    <Input
                        type="number"
                        value={formState.general_mission_fees?.[0]?.amount || ""}
                        onChange={(e) => handleChange(
                            'general_mission_fees',
                            [{ amount: parseFloat(e.target.value) }]
                        )}
                        placeholder="Enter fees"
                    />
                </div>

                <div>
                    <Label>Parking Available</Label>
                    <Switch
                        checked={formState.general_mission_parking || false}
                        onChange={(checked) => handleChange('general_mission_parking', checked)}
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
                        value={formState.general_mission_languages || []}
                        onChange={(values) => handleChange('general_mission_languages', values)}
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
                        value={formState.general_mission_software || []}
                        onChange={(values) => handleChange('general_mission_software', values)}
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