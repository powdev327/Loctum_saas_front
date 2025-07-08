import Input from "../../../form/input/InputField";
import Label from "../../../form/Label";
import Select from "../../../form/Select.tsx";
import Button from "../../../ui/button/Button.tsx";


export const BaseFields = ({
                        description, setDescription,
                        start_date, setStartDate,
                        end_date, setEndDate,
                        hourly_rate, setHourlyRate,
                        industry_type, setIndustryType,
                        options,
                        // Make sure to destructure contract_type here
                        contract_type,
                        setIsWorkHoursPopupOpen,
                        showPerDayWorkHours,
                        pharmacyIndustryFields,
                        setPharmacyIndustryFields,
                        dentalIndustryFields,
                        setDentalIndustryFields,
                        submissionAttempted = false
                    }) => {
  // Now you can use contract_type here
  
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2 px-2">
        {/* Description détaillée des tâches - Obligatoire */}
        {/*<div className="col-span-2">
            <Label required>Description détaillée des tâches</Label>
            {submissionAttempted && !description && (
                <span className="text-red-500 text-xs block mb-1">
                    Ce champ est obligatoire. Veuillez fournir une description détaillée.
                </span>
            )}
            <Input 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Détail des tâches à accomplir"
            />
        </div>*/}
        
        {/* Contract Date Range - Obligatoire */}
       
        
        
        

        
        {/* Industry Type - Hidden from users but needed for functionality */}
        <div className="hidden">
            <Label>Type d'industrie</Label>
            <Select
                options={options}
                placeholder="Sélectionner l'industrie"
                value={options.find((opt: any) => opt.value === industry_type)}
                onChange={(option) => setIndustryType(option?.value || "")}
            />
        </div>
    </div>
  );
};
