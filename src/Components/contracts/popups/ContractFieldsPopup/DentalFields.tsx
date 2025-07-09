import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Switch from "../../../form/switch/Switch.tsx";

export const DentalFields = ({
                                 contract_type, dentalIndustryFields, setDentalIndustryFields,
                                 dateRange, showPerDayWorkHours, hourOptions, submissionAttempted = false
                             }) => (
    <div className="space-y-4 mt-4">
        
       
        
        {/* Software field hidden but still processed in the backend */}
        <div style={{ display: 'none' }}>
            <Label>Software</Label>
            {submissionAttempted && (!dentalIndustryFields.software || dentalIndustryFields.software.length === 0 || (dentalIndustryFields.software.length === 1 && !dentalIndustryFields.software[0])) && (
                <span className="text-red-500 text-xs block mb-1">
                    Ce champ est obligatoire. Veuillez spécifier au moins un logiciel.
                </span>
            )}
            <Input
                type="text"
                placeholder="e.g. Dentrix, AbelDent"
                value={dentalIndustryFields.software ? dentalIndustryFields.software.join(", ") : "Default Software"}
                onChange={(e) =>
                    setDentalIndustryFields({
                        ...dentalIndustryFields,
                        software: e.target.value.split(",").map(val => val.trim()),
                        ...(contract_type === "affiliation" && { per_day_work_hours: null })
                    })
                }
            />
        </div>
        
    </div>
);
