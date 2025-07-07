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
        <div className="col-span-2">
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
        </div>
        
        {/* Contract Date Range - Obligatoire */}
        <div>
            <Label required>Date de début</Label>
            {submissionAttempted && !start_date && (
                <span className="text-red-500 text-xs block mb-1">
                    Ce champ est obligatoire. Veuillez sélectionner une date de début.
                </span>
            )}
            <Input 
                type="date" 
                value={start_date} 
                onChange={(e) => setStartDate(e.target.value)} 
            />
        </div>
        <div>
            <Label required>Date de fin</Label>
            {submissionAttempted && !end_date && (
                <span className="text-red-500 text-xs block mb-1">
                    Ce champ est obligatoire. Veuillez sélectionner une date de fin.
                </span>
            )}
            <Input 
                type="date" 
                value={end_date} 
                onChange={(e) => setEndDate(e.target.value)} 
            />
        </div>
        
        {/* Per-Day Work Hours button - for schedule configuration */}
        {(industry_type === "pharmacy" || industry_type === "dental_clinic") && 
         contract_type === "remplacement" && 
         showPerDayWorkHours && start_date && end_date && (
            <div className="lg:col-span-2 mt-0 mb-3">
                <Button 
                    onClick={() => setIsWorkHoursPopupOpen(true)}
                    variant="outline"
                    className="w-full"
                >
                    Configurer les horaires quotidiens
                </Button>
            </div>
        )}
        
        {/* Taux horaire proposé - Obligatoire */}
        <div>
            <Label required>Taux horaire proposé</Label>
            {submissionAttempted && (!hourly_rate && hourly_rate !== 0) && (
                <span className="text-red-500 text-xs block mb-1">
                    Ce champ est obligatoire. Veuillez spécifier un taux horaire.
                </span>
            )}
            <div className="flex items-center">
                <Input
                    type="number"
                    value={hourly_rate}
                    onChange={(e) => setHourlyRate(parseFloat(e.target.value) || 0)}
                />
                <span className="ml-2 text-xs text-gray-500">+ frais 3%</span>
            </div>
        </div>
        
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
