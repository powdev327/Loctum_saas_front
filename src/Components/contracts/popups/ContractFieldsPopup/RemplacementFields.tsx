import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Switch from "../../../form/switch/Switch.tsx";
import MultiSelect from "../../../form/MultiSelect.tsx";
import Button from "../../../ui/button/Button.tsx";
import { useMemo } from "react";
import DropdownWithCheckbox from "../../../form/DropdownWithCheckbox.tsx";

interface RemplacementFieldsProps {
    formState: any;
    handleChange: <K extends keyof typeof formState>(field: K, value: typeof formState[K]) => void;
    submissionAttempted?: boolean;
    industry_type?: string;
    openWorkHoursPopup: () => void;
}

const pharmacySoftwareOptions = [
    "AssystRx", "Mentor", "PrioRx", "RxPro", "Ubik", "ReflexRx (XDRx)", "CGSI/Gesphar",
    "Syphac Option", "L’Ordonnance (Logipharm)", "Kroll", "Aucun", "Synmed (Dispill)",
    "Paratamax (Vial)", "Paratamax2 (Vial)", "Paratamini (Vial)", "CountAssist", "AccuCount",
    "EzCount", "Pacmed (Sachet)", "ScriptPro (Vial)", "Pharmaclik"
].map((name) => ({ value: name, text: name }));

const dentalSoftwareOptions = [
    "ABELdent", "ADSTR", "A MANAGEMENT", "AXXIUM X", "AXXIUM R", "AXXIUM R+", "TRACKER",
    "AD2000", "CADI OPTIMUM", "WINDENT", "DEXIS", "EXCELDENT", "X TRAC", "CONSULT PRO",
    "CURVE DMS", "DENTIMAX", "DIALOG", "DOMTRAK", "ENTERDENT", "ORYX DENTAL SOFTWARE",
    "POWER PRACTICE", "AXIUM", "DOVETAIL", "GOLD", "DENTRIX", "OMSVISION", "ORTHONOVO",
    "ENDOVISION", "DENTALVISION ENTREPRISE", "PERIOVISION", "IKLYK", "QUADRA DENTAL SOFTWARE",
    "LIVE DDM", "DENTONOVO", "MAXIMUS", "CLICK", "MAXIDENT", "PARADIGM", "MACPRACTICE DDS",
    "OPEN DENTAL SOFTWARE", "DENTALWARE", "EAGLESOFT", "CLEARDENT", "PROGIDENT", "DENTITEK",
    "SENSE", "TDO", "AUTOPIA", "PROGITEK", "AKITU ONE", "GID", "SIDEXIS", "VISION R"
].map((name) => ({ value: name, text: name }));


const getDateRange = (start: Date, end: Date) => {
    const range = [];
    const current = new Date(start);
    while (current <= end) {
        range.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }
    return range;
};

export const RemplacementFieldsComponent = ({
                                                formState,
                                                handleChange,
                                                submissionAttempted = false,
                                                industry_type = "Pharmacy",
                                                openWorkHoursPopup,
                                            }: RemplacementFieldsProps) => {
    const formatDateForInput = (date: Date | null) => {
        if (!date) return "";
        return date.toISOString().split("T")[0];
    };

    const parseDateFromInput = (dateString: string) => {
        if (!dateString) return null;
        return new Date(dateString);
    };

    const showDateRange = useMemo(() => {
        return formState.start_date && formState.end_date && formState.start_date <= formState.end_date;
    }, [formState.start_date, formState.end_date]);

    const activeDateRange = useMemo(() => {
        return showDateRange ? getDateRange(formState.start_date!, formState.end_date!) : [];
    }, [formState.start_date, formState.end_date, showDateRange]);

    return (
        <div className="mt-8 px-2">
            <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">Replacement Details</h5>

            <div className="lg:col-span-2 mt-0 mb-3">
                <Button onClick={openWorkHoursPopup} variant="outline" className="w-full">
                    Configure Daily Work Hours
                </Button>

                {showDateRange && (
                    <div className="mt-4">
                        <div className="bg-muted border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
                            <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-3">
                                Selected Active Dates
                            </h3>
                            <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                                {activeDateRange.map((dateObj, index) => {
                                    const dateKey = dateObj.toISOString().split("T")[0];
                                    const isEnabled = formState.daily_hours?.[dateKey]?.enabled ?? true;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-start gap-2 border-b border-gray-100 dark:border-gray-800 pb-2"
                                        >
                                            <div className={`w-2 h-2 mt-1 rounded-full ${isEnabled ? "bg-green-500" : "bg-red-400"}`} />
                                            <p
                                                className={`text-sm ${
                                                    isEnabled ? "text-gray-700 dark:text-white" : "text-gray-400 line-through"
                                                }`}
                                            >
                                                {dateObj.toLocaleDateString("fr-CA", {
                                                    weekday: "long",
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}{" "}
                                                {!isEnabled && <span className="text-xs">(Unavailable)</span>}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            <p className="mt-3 text-sm italic text-gray-500 dark:text-gray-400">
                                Total of{" "}
                                {
                                    activeDateRange.filter((dateObj) => {
                                        const dateKey = dateObj.toISOString().split("T")[0];
                                        return formState.daily_hours?.[dateKey]?.enabled ?? true;
                                    }).length
                                }{" "}
                                work day{activeDateRange.length > 1 ? "s" : ""}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <Label required>Mission Type</Label>
                    <Select
                        options={[
                            { value: "GENERAL", label: "General" },
                            { value: "SPECIALIZED", label: "Specialized" },
                        ]}
                        value={formState.mission_type || ""}
                        onChange={(value) => handleChange("mission_type", value)}
                    />
                </div>

                <div>
                    <Label required>Mission Objective</Label>
                    <Input
                        value={formState.mission_objective}
                        onChange={(e) => handleChange("mission_objective", e.target.value)}
                        placeholder="Enter mission objective"
                    />
                </div>

                <div>
                    <Label required>Desired Date</Label>
                    <Input
                        type="date"
                        value={formatDateForInput(formState.desired_date)}
                        onChange={(e) => handleChange("desired_date", parseDateFromInput(e.target.value))}
                    />
                </div>

                {/* Conditional for SPECIALIZED */}
                {formState.mission_type === "SPECIALIZED" && (
                    <>
                        <div>
                            <Label required>Type Label</Label>
                            <Input
                                value={formState.mission_type_label || ""}
                                onChange={(e) => handleChange("mission_type_label", e.target.value)}
                                placeholder="Enter mission type label"
                            />
                        </div>

                        <div>
                            <Label required>Specialty</Label>
                            <Input
                                value={formState.required_specialty || ""}
                                onChange={(e) => handleChange("required_specialty", e.target.value)}
                                placeholder="Enter required specialty"
                            />
                        </div>

                        <div>
                            <Label required>Estimated Duration</Label>
                            <Input
                                value={formState.estimated_duration || ""}
                                onChange={(e) => handleChange("estimated_duration", e.target.value)}
                                placeholder="e.g. 3 days, 1 week"
                            />
                        </div>

                        <div>
                            <Label>Material Room Required</Label>
                            <Switch
                                checked={formState.material_room_required || false}
                                onChange={(checked) => handleChange("material_room_required", checked)}
                            />
                        </div>

                        <div className="col-span-2">
                            <Label>Material Room Description</Label>
                            <textarea
                                className="w-full border rounded p-2"
                                rows={3}
                                value={formState.material_room_description || ""}
                                onChange={(e) => handleChange("material_room_description", e.target.value)}
                                placeholder="Describe required materials and room setup"
                            />
                        </div>
                    </>
                )}

                {/* Conditional for GENERAL */}
                {formState.mission_type === "GENERAL" && (
                    <>
                        <div>
                            <Label>Bonuses</Label>
                            <Switch
                                checked={formState.general_mission_bonuses || false}
                                onChange={(checked) => handleChange("general_mission_bonuses", checked)}
                            />
                        </div>

                        <div>
                            <Label>Fees</Label>
                            <Input
                                type="number"
                                value={formState.general_mission_fees || ""}
                                onChange={(e) =>
                                    handleChange("general_mission_fees", parseFloat(e.target.value))
                                }
                                placeholder="Enter mission fees"
                            />
                        </div>

                        <div>
                            <Label>Parking Available</Label>
                            <Switch
                                checked={formState.general_mission_parking || false}
                                onChange={(checked) => handleChange("general_mission_parking", checked)}
                            />
                        </div>

                        <div>
                            <Label>Languages</Label>
                            <MultiSelect
                                options={[
                                    { value: "francais", text: "Français" },
                                    { value: "anglais", text: "Anglais" },
                                    { value: "espagnol", text: "Espagnol" },
                                    { value: "arabe", text: "Arabe" },
                                    { value: "mandarin", text: "Mandarin" },
                                ]}
                                value={formState.general_mission_languages || []}
                                onChange={(values) => handleChange("general_mission_languages", values)}
                            />
                        </div>

                        <div>
                            <DropdownWithCheckbox
                                label="Software (Optional)"
                                options={
                                    formState.industry_type?.toLowerCase() === "pharmacy"
                                        ? pharmacySoftwareOptions
                                        : formState.industry_type?.toLowerCase() === "DentalClinic"
                                            ? dentalSoftwareOptions
                                            : []
                                }
                                selectedValues={formState.general_mission_software || []}
                                onChange={(values) => handleChange("general_mission_software", values)}
                                className="z-10"
                            />

                        </div>


                        <div>
                            <Label>Working Hours</Label>
                            <Input
                                value={formState.general_mission_working_hours || ""}
                                onChange={(e) =>
                                    handleChange("general_mission_working_hours", e.target.value)
                                }
                            />
                        </div>

                        <div>
                            <Label>Pause Included</Label>
                            <Switch
                                checked={formState.general_mission_pause_included || false}
                                onChange={(checked) => handleChange("general_mission_pause_included", checked)}
                            />
                        </div>

                        <div>
                            <Label>Proposed Hourly Rate</Label>
                            <Input
                                type="number"
                                value={formState.general_mission_proposed_hourly_rate}
                                onChange={(e) => handleChange("general_mission_proposed_hourly_rate", e.target.value)}
                            />

                        </div>

                        <div>
                            <Label>Required Experience</Label>

                            <Select
                                options={[
                                    { value: "Less_than_1_year", label: "Less than 1 year" },
                                    { value: "1-3_years", label: "1-3 years" },
                                    { value: "3-5_years", label: "3-5 years" },
                                    { value: "5-10_years", label: "5-10 years" },
                                    { value: "More_than_10_years", label: "More than 10 years" },
                                    { value: "Does_not_matter", label: "Does not matter" },
                                ]}
                                value={formState.general_mission_required_experience}
                                onChange={(value) => handleChange('general_mission_required_experience', value)}
                            />
                        </div>
                    </>
                )}


                <div className="col-span-2">
                    <Label>Attached Documents</Label>
                    <input
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.txt,.rtf,.xls,.xlsx,.ppt,.pptx"
                        onChange={(e) => {
                            const files = e.target.files;
                            if (files) {
                                handleChange("attached_documents", Array.from(files));
                            }
                        }}
                        className="block w-full text-sm text-gray-900 dark:text-white/90 file:mr-4 file:rounded file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100 dark:file:bg-brand-800 dark:file:text-white"
                    />
                </div>
            </div>
        </div>
    );
};
