import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Switch from "../../../form/switch/Switch.tsx";

export const DentalFields = ({
                                 contract_type, dentalIndustryFields, setDentalIndustryFields,
                                 dateRange, showPerDayWorkHours, hourOptions
                             }) => (
    <div className="space-y-4 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
                <Label>Work Hours (Default Start)</Label>
                <Select
                    options={hourOptions}
                    placeholder="Select start time"
                    value={hourOptions.find(opt => opt.value === (dentalIndustryFields.work_hours[0]?.split("-")[0] || ""))}
                    onChange={(option) => {
                        const start = option ? option.value : "";
                        const end = dentalIndustryFields.work_hours[0]?.split("-")[1] || "16:00";
                        setDentalIndustryFields({
                            ...dentalIndustryFields,
                            work_hours: [`${start}-${end}`],
                            ...(contract_type === "affiliation" && { per_day_work_hours: null })
                        });
                    }}
                    disabled={contract_type === "affiliation"}
                    required={contract_type !== "affiliation"}
                />
            </div>
            <div>
                <Label>Work Hours (Default End)</Label>
                <Select
                    options={hourOptions}
                    placeholder="Select end time"
                    value={hourOptions.find(opt => opt.value === (dentalIndustryFields.work_hours[0]?.split("-")[1] || ""))}
                    onChange={(option) => {
                        const start = dentalIndustryFields.work_hours[0]?.split("-")[0] || "08:00";
                        const end = option ? option.value : "";
                        setDentalIndustryFields({
                            ...dentalIndustryFields,
                            work_hours: [`${start}-${end}`],
                            ...(contract_type === "affiliation" && { per_day_work_hours: null })
                        });
                    }}
                    disabled={contract_type === "affiliation"}
                    required={contract_type !== "affiliation"}
                />
            </div>
        </div>
        <div>
            <Switch
                label="Break Included"
                checked={dentalIndustryFields.break_included ?? false}
                onChange={(e) =>
                    setDentalIndustryFields({
                        ...dentalIndustryFields,
                        break_included: e,
                        ...(contract_type === "affiliation" && { per_day_work_hours: null })
                    })
                }
                required
            />
        </div>
        <div>
            <Label>Break Duration (minutes)</Label>
            <Input
                type="number"
                value={dentalIndustryFields.break_duration ?? ""}
                onChange={(e) =>
                    setDentalIndustryFields({
                        ...dentalIndustryFields,
                        break_duration: Number(e.target.value) || undefined,
                        ...(contract_type === "affiliation" && { per_day_work_hours: null })
                    })
                }
                required
            />
        </div>
        <div>
            <Switch
                label="Bonus or Premium"
                checked={dentalIndustryFields.bonus_or_premium ?? false}
                onChange={(e) =>
                    setDentalIndustryFields({
                        ...dentalIndustryFields,
                        bonus_or_premium: e,
                        ...(contract_type === "affiliation" && { per_day_work_hours: null })
                    })
                }
                required
            />
        </div>
        <div>
            <Label>Software</Label>
            <Input
                type="text"
                placeholder="e.g. Dentrix, AbelDent"
                value={dentalIndustryFields.software.join(", ")}
                onChange={(e) =>
                    setDentalIndustryFields({
                        ...dentalIndustryFields,
                        software: e.target.value.split(",").map(val => val.trim()),
                        ...(contract_type === "affiliation" && { per_day_work_hours: null })
                    })
                }
                required
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
                                value={hourOptions.find(opt => opt.value === (dentalIndustryFields.per_day_work_hours?.[date]?.split("-")[0] || ""))}
                                onChange={(option) => {
                                    const start = option ? option.value : "";
                                    const end = dentalIndustryFields.per_day_work_hours?.[date]?.split("-")[1] || "16:00";
                                    setDentalIndustryFields({
                                        ...dentalIndustryFields,
                                        per_day_work_hours: contract_type === "affiliation"
                                            ? null
                                            : {
                                                ...dentalIndustryFields.per_day_work_hours,
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
                                value={hourOptions.find(opt => opt.value === (dentalIndustryFields.per_day_work_hours?.[date]?.split("-")[1] || ""))}
                                onChange={(option) => {
                                    const start = dentalIndustryFields.per_day_work_hours?.[date]?.split("-")[0] || "08:00";
                                    const end = option ? option.value : "";
                                    setDentalIndustryFields({
                                        ...dentalIndustryFields,
                                        per_day_work_hours: contract_type === "affiliation"
                                            ? null
                                            : {
                                                ...dentalIndustryFields.per_day_work_hours,
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
