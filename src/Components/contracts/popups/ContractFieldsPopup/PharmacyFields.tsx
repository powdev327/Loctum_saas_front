import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Switch from "../../../form/switch/Switch.tsx";

export const PharmacyFields = ({
                                   contract_type, pharmacyIndustryFields, setPharmacyIndustryFields,
                                   dateRange, showPerDayWorkHours, hourOptions, submissionAttempted = false
                               }) => (
    <div className="space-y-4 mt-4">
        
       
        
        <div>
            <Switch
                label="Bonus or Additional Compensation"
                checked={pharmacyIndustryFields.bonus_or_additional_compensation ?? false}
                onChange={(e) =>
                    setPharmacyIndustryFields({
                        ...pharmacyIndustryFields,
                        bonus_or_additional_compensation: e,
                        ...(contract_type === "affiliation" && { per_day_work_hours: null })
                    })
                }
            />
        </div>
        {/* Software field hidden but still processed in the backend */}
        <div style={{ display: 'none' }}>
            <Label>Software</Label>
            {submissionAttempted && (!pharmacyIndustryFields.software || pharmacyIndustryFields.software.length === 0 || (pharmacyIndustryFields.software.length === 1 && !pharmacyIndustryFields.software[0])) && (
                <span className="text-red-500 text-xs block mb-1">
                    Ce champ est obligatoire. Veuillez spécifier au moins un logiciel.
                </span>
            )}
            <Input
                type="text"
                placeholder="e.g. Kroll, Pharmasys"
                value={pharmacyIndustryFields.software ? pharmacyIndustryFields.software.join(", ") : "Default Software"}
                onChange={(e) =>
                    setPharmacyIndustryFields({
                        ...pharmacyIndustryFields,
                        software: e.target.value.split(",").map(val => val.trim()),
                        ...(contract_type === "affiliation" && { per_day_work_hours: null })
                    })
                }
            />
        </div>
        {showPerDayWorkHours && dateRange.length > 0 && (
            <div className="mt-4">
                <h5 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
                    Per-Day Work Hours
                </h5>
                <div className="grid grid-cols-1 gap-4">
                    {dateRange.map((date) => (
                        <div key={date} className="flex items-center gap-4">
                            <Label>{date}</Label>
                            <Select
                                options={hourOptions}
                                placeholder="Start"
                                value={hourOptions.find(opt => opt.value === (pharmacyIndustryFields.per_day_work_hours?.[date]?.split("-")[0] || ""))}
                                onChange={(option) => {
                                    const start = option ? option.value : "";
                                    const end = pharmacyIndustryFields.per_day_work_hours?.[date]?.split("-")[1] || "17:00";
                                    setPharmacyIndustryFields({
                                        ...pharmacyIndustryFields,
                                        per_day_work_hours: contract_type === "affiliation"
                                            ? null
                                            : {
                                                ...pharmacyIndustryFields.per_day_work_hours,
                                                [date]: `${start}-${end}`,
                                            },
                                    });
                                }}
                                disabled={contract_type === "affiliation"}
                                required={contract_type !== "affiliation"}
                            />
                            <Select
                                options={hourOptions}
                                placeholder="End"
                                value={hourOptions.find(opt => opt.value === (pharmacyIndustryFields.per_day_work_hours?.[date]?.split("-")[1] || ""))}
                                onChange={(option) => {
                                    const start = pharmacyIndustryFields.per_day_work_hours?.[date]?.split("-")[0] || "09:00";
                                    const end = option ? option.value : "";
                                    setPharmacyIndustryFields({
                                        ...pharmacyIndustryFields,
                                        per_day_work_hours: contract_type === "affiliation"
                                            ? null
                                            : {
                                                ...pharmacyIndustryFields.per_day_work_hours,
                                                [date]: `${start}-${end}`,
                                            },
                                    });
                                }}
                                disabled={contract_type === "affiliation"}
                                required={contract_type !== "affiliation"}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )}
        {!showPerDayWorkHours && contract_type === "remplacement" && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Per-day work hours are not available for date ranges of 10 days or more.
            </p>
        )}
    </div>
);