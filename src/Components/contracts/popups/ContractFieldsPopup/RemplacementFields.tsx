import Input from "../../../form/input/InputField.tsx";
import Label from "../../../form/Label.tsx";
import Select from "../../../form/Select.tsx";
import Checkbox from "../../../form/input/Checkbox.tsx";
import TextArea from "../../../form/input/TextArea.tsx";
import { useState, useEffect } from "react";
import Button from "../../../ui/button/Button.tsx";

export const RemplacementFieldsComponent = ({ 
    remplacementFields, 
    setRemplacementFields, 
    industry_type,
    contract_type,
    pharmacyIndustryFields,
    setPharmacyIndustryFields,
    dentalIndustryFields,
    setDentalIndustryFields,
    submissionAttempted = false,
    isInQuebec = false,
    institution = null,
    start_date = null,
    end_date = null,
    setIsWorkHoursPopupOpen = null,
    showPerDayWorkHours = false
}) => {
    const isPharmacy = industry_type === "pharmacy" || industry_type === "Pharmacy";
    const isDental = industry_type === "dental_clinic" || industry_type === "DentalClinic" || industry_type?.toLowerCase() === "dentalclinic";
    
    // Helper function to handle industry specific field updates
    const updateIndustryFields = (isGeneral) => {
        if (isPharmacy) {
            setPharmacyIndustryFields({
                ...pharmacyIndustryFields,
                mission_general: isGeneral,
                mission_special: !isGeneral
            });
        } else if (isDental) {
            setDentalIndustryFields({
                ...dentalIndustryFields,
                mission_general: isGeneral,
                mission_special: !isGeneral
            });
        }
    };
    
    // Check if general mission is selected
    const isMissionGeneral = isPharmacy ? 
        pharmacyIndustryFields?.mission_general : 
        isDental ? 
            dentalIndustryFields?.mission_general : 
            false;
    
    const isRemplacement = contract_type === "remplacement";
    
    const hasGeneralMission = isRemplacement && ((isPharmacy && pharmacyIndustryFields?.mission_general === true) || 
                             (isDental && dentalIndustryFields?.mission_general === true));
                             
    const hasSpecializedMission = isRemplacement && ((isPharmacy && pharmacyIndustryFields?.mission_special === true) || 
                                (isDental && dentalIndustryFields?.mission_special === true));
    
    // Initialize mission fields to false when component mounts
    useEffect(() => {
        // Only initialize if contract type is remplacement
        if (isRemplacement) {
            if (isPharmacy && typeof pharmacyIndustryFields?.mission_general === 'undefined') {
                setPharmacyIndustryFields(prev => ({
                    ...prev,
                    mission_general: false,
                    mission_special: false
                }));
            }
            
            if (isDental && typeof dentalIndustryFields?.mission_general === 'undefined') {
                setDentalIndustryFields(prev => ({
                    ...prev,
                    mission_general: false,
                    mission_special: false
                }));
            }
        }
    }, [isRemplacement, isPharmacy, isDental, pharmacyIndustryFields?.mission_general, dentalIndustryFields?.mission_general]);
    
    // Get address from institution if available
    useEffect(() => {
        if (institution && !remplacementFields.location) {
            const institutionAddress = `${institution.address || ''}, ${institution.city || ''}, ${institution.province || ''} ${institution.postal_code || ''}`;
            setRemplacementFields(prev => ({
                ...prev,
                location: institutionAddress.trim()
            }));
        }
    }, [institution]);
    
    return (
        <div className="space-y-5">
            {/* Type de remplacement */}
            <div>
                <Label>Type de remplacement</Label>
                <div className="flex space-x-6 mt-2">
                    <div>
                        <Checkbox 
                            label="Mission générale" 
                            checked={isPharmacy ? 
                                pharmacyIndustryFields?.mission_general || false : 
                                isDental ? 
                                    dentalIndustryFields?.mission_general || false : 
                                    false
                            }
                            onChange={(checked) => {
                                if (checked) {
                                    updateIndustryFields(true);
                                }
                            }}
                        />
                    </div>
                    <div>
                        <Checkbox 
                            label="Mission spécialisée" 
                            checked={isPharmacy ? 
                                pharmacyIndustryFields?.mission_special || false : 
                                isDental ? 
                                    dentalIndustryFields?.mission_special || false : 
                                    false
                            }
                            onChange={(checked) => {
                                if (checked) {
                                    updateIndustryFields(false);
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            
            {/* Show fields only when Mission Générale is selected */}
            {isMissionGeneral && (
                <>
                    {/* Hidden fields - still processed in the backend but not displayed */}
                    <div style={{ display: 'none' }}>
                        <Label>Mission Type</Label>
                        <Input
                            value={remplacementFields.mission_type || "Default Mission Type"}
                            onChange={(e) =>
                                setRemplacementFields({ ...remplacementFields, mission_type: e.target.value })
                            }
                        />
                    </div>
                    <div style={{ display: 'none' }}>
                        <Label>Required Specialty</Label>
                        <Input
                            value={remplacementFields.required_specialty || "Default Specialty"}
                            onChange={(e) =>
                                setRemplacementFields({ ...remplacementFields, required_specialty: e.target.value })
                            }
                        />
                    </div>
                    
                    {/* Poste recherché */}
                    <div>
                        <Label required>Poste recherché</Label>
                        {submissionAttempted && !remplacementFields.position_title && (
                            <span className="text-red-500 text-xs block mb-1">
                                Ce champ est obligatoire.
                            </span>
                        )}
                        <Select
                            options={isDental ? [
                                { value: "dentiste_generaliste", label: "Dentiste généraliste" },
                                { value: "hygieniste_dentaire", label: "Hygiéniste dentaire" },
                                { value: "assistant_dentaire", label: "Assistant dentaire" },
                                { value: "secretaire_dentaire", label: "Secrétaire dentaire" }
                            ] : isPharmacy ? [
                                { value: "pharmacien", label: "Pharmacien" },
                                { value: "assistant_technique", label: "Assistant technique" },
                                { value: "technicien", label: "Technicien" }
                            ] : []}
                            placeholder="Sélectionner un poste"
                            value={remplacementFields.position_title ? 
                                { value: remplacementFields.position_title, label: remplacementFields.position_title } : 
                                null
                            }
                            onChange={(option) => setRemplacementFields({
                                ...remplacementFields,
                                position_title: option?.value || ""
                            })}
                        />
                    </div>
                    
                    {/* Lieu du contrat */}
                    <div>
                        <Label required>Lieu du contrat</Label>
                        <div className="flex flex-col">
                            <Input
                                placeholder="Adresse complète"
                                value={remplacementFields.location || ""}
                                onChange={(e) => setRemplacementFields({
                                    ...remplacementFields,
                                    location: e.target.value
                                })}
                            />
                            <span className="text-xs text-gray-500 mt-1 block">
                                L'adresse est récupérée depuis le profil de l'institution
                            </span>
                        </div>
                    </div>
                    
                    {/* Dates de début et fin */}
                    <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                        <div>
                            <Label required>Date de début</Label>
                            {submissionAttempted && !remplacementFields.preferred_date && (
                                <span className="text-red-500 text-xs block mb-1">
                                    Ce champ est obligatoire. Veuillez sélectionner une date de début.
                                </span>
                            )}
                            <Input 
                                type="date" 
                                value={remplacementFields.preferred_date || ""} 
                                onChange={(e) => setRemplacementFields({
                                    ...remplacementFields,
                                    preferred_date: e.target.value
                                })} 
                            />
                        </div>
                        <div>
                            <Label required>Date de fin</Label>
                            {submissionAttempted && !remplacementFields.end_date && (
                                <span className="text-red-500 text-xs block mb-1">
                                    Ce champ est obligatoire. Veuillez sélectionner une date de fin.
                                </span>
                            )}
                            <Input 
                                type="date" 
                                value={remplacementFields.end_date || ""} 
                                onChange={(e) => setRemplacementFields({
                                    ...remplacementFields,
                                    end_date: e.target.value
                                })} 
                            />
                        </div>
                        
                        {/* Per-Day Work Hours section */}
                        {showPerDayWorkHours && remplacementFields.preferred_date && remplacementFields.end_date && (
                            <div className="lg:col-span-2 mt-0 mb-3">
                                <Button 
                                    onClick={() => setIsWorkHoursPopupOpen && setIsWorkHoursPopupOpen(true)}
                                    variant="outline"
                                    className="w-full"
                                >
                                    Configurer les horaires quotidiens
                                </Button>
                            </div>
                        )}
                    </div>
                    
                    {/* Horaires de travail */}
                    <div>
                        <Label required>Horaires de travail</Label>
                        <div className="flex items-center gap-3">
                            <Select
                                className="w-28"
                                options={[
                                    { value: "08:00", label: "8:00 AM" },
                                    { value: "08:30", label: "8:30 AM" },
                                    { value: "09:00", label: "9:00 AM" },
                                    { value: "09:30", label: "9:30 AM" }
                                ]}
                                placeholder="Début"
                                value={remplacementFields.working_hours_start ? 
                                    { value: remplacementFields.working_hours_start, label: remplacementFields.working_hours_start } : 
                                    null
                                }
                                onChange={(option) => setRemplacementFields({
                                    ...remplacementFields,
                                    working_hours_start: option?.value || ""
                                })}
                            />
                            <span>à</span>
                            <Select
                                className="w-28"
                                options={[
                                    { value: "16:00", label: "4:00 PM" },
                                    { value: "16:30", label: "4:30 PM" },
                                    { value: "17:00", label: "5:00 PM" },
                                    { value: "17:30", label: "5:30 PM" }
                                ]}
                                placeholder="Fin"
                                value={remplacementFields.working_hours_end ? 
                                    { value: remplacementFields.working_hours_end, label: remplacementFields.working_hours_end } : 
                                    null
                                }
                                onChange={(option) => setRemplacementFields({
                                    ...remplacementFields,
                                    working_hours_end: option?.value || ""
                                })}
                            />
                        </div>
                    </div>
                    
                    {/* Pause incluse */}
                    <div>
                        <Label>Pause incluse</Label>
                        <div className="flex items-center">
                            <Checkbox
                                label="Oui"
                                checked={remplacementFields.break_included || false}
                                onChange={(checked) => setRemplacementFields({
                                    ...remplacementFields,
                                    break_included: checked
                                })}
                            />
                        </div>
                        {remplacementFields.break_included && (
                            <div className="mt-2">
                                <Label>Durée (minutes)</Label>
                                <Input
                                    type="number"
                                    min="0"
                                    step="15"
                                    placeholder="30"
                                    value={remplacementFields.break_duration || ""}
                                    onChange={(e) => setRemplacementFields({
                                        ...remplacementFields,
                                        break_duration: e.target.value
                                    })}
                                />
                            </div>
                        )}
                    </div>
                    
                    {/* Niveau d'expérience requis */}
                    <div>
                        <Label required>Niveau d'expérience requis</Label>
                        <Select
                            options={[
                                { value: "moins_1_an", label: "Moins de 1 an" },
                                { value: "1_3_ans", label: "1 à 3 ans" },
                                { value: "3_5_ans", label: "3 à 5 ans" },
                                { value: "plus_5_ans", label: "Plus de 5 ans" }
                            ]}
                            placeholder="Sélectionner un niveau"
                            value={remplacementFields.required_experience ? 
                                { value: remplacementFields.required_experience, label: remplacementFields.required_experience } : 
                                null
                            }
                            onChange={(option) => setRemplacementFields({
                                ...remplacementFields,
                                required_experience: option?.value || ""
                            })}
                        />
                    </div>
                    
                    {/* Taux horaire proposé */}
                    <div>
                        <Label required>Taux horaire proposé</Label>
                        {submissionAttempted && !remplacementFields.proposed_rate && (
                            <span className="text-red-500 text-xs block mb-1">
                                Ce champ est obligatoire.
                            </span>
                        )}
                        <div className="flex items-center">
                            <Input
                                type="number"
                                placeholder="0.00"
                                value={remplacementFields.proposed_rate || ""}
                                onChange={(e) => setRemplacementFields({ 
                                    ...remplacementFields, 
                                    proposed_rate: e.target.value 
                                })}
                            />
                            <span className="ml-2">$CAD / hour + frais 3%</span>
                        </div>
                    </div>
                    
                    {/* Bonus / Primes */}
                    <div>
                        <Label>Bonus / Primes</Label>
                        <div className="flex items-center">
                            <Checkbox
                                label="Oui"
                                checked={remplacementFields.bonus_available || false}
                                onChange={(checked) => setRemplacementFields({
                                    ...remplacementFields,
                                    bonus_available: checked
                                })}
                            />
                        </div>
                    </div>
                    
                    {/* Parking */}
                    <div>
                        <Label>Parking</Label>
                        <div className="flex items-center">
                            <Checkbox
                                label="Parking disponible"
                                checked={remplacementFields.parking_available || false}
                                onChange={(checked) => setRemplacementFields({
                                    ...remplacementFields,
                                    parking_available: checked
                                })}
                            />
                        </div>
                    </div>
                    
                    {/* Langues */}
                    <div>
                        <Label>Langues</Label>
                        <Select
                            isMulti
                            options={
                                // Make sure we have an array before calling map
                                Array.isArray(institution?.languages) 
                                    ? institution.languages.map(lang => ({
                                        value: lang, 
                                        label: lang.charAt(0).toUpperCase() + lang.slice(1)
                                    }))
                                    : [
                                        { value: "francais", label: "Français" },
                                        { value: "anglais", label: "Anglais" },
                                        { value: "espagnol", label: "Espagnol" },
                                        { value: "arabe", label: "Arabe" },
                                        { value: "mandarin", label: "Mandarin" }
                                    ]
                            }
                            placeholder="Sélectionner les langues"
                            value={Array.isArray(remplacementFields.languages) 
                                ? remplacementFields.languages.map(lang => ({
                                    value: lang,
                                    label: lang.charAt(0).toUpperCase() + lang.slice(1)
                                }))
                                : []
                            }
                            onChange={(selectedOptions) => {
                                const options = Array.isArray(selectedOptions) ? selectedOptions : [];
                                setRemplacementFields({
                                    ...remplacementFields,
                                    languages: options.map(opt => opt.value)
                                });
                            }}
                        />
                        <span className="text-xs text-gray-500 mt-1 block">
                            Les langues principales sont récupérées depuis le profil de l'institution
                        </span>
                    </div>

                    {/* Logiciels */}
                    <div>
                        <Label>Logiciels</Label>
                        <Select
                            isMulti
                            options={
                                // Make sure software is an array
                                Array.isArray(institution?.software) 
                                    ? institution.software.map(sw => ({
                                        value: sw, 
                                        label: sw
                                    }))
                                    : (isDental ? [
                                        { value: "dentech", label: "DenTech" },
                                        { value: "dentalex", label: "DentAlex" },
                                        { value: "dentalpro", label: "DentalPro" },
                                        { value: "dentisoft", label: "DentiSoft" }
                                    ] : isPharmacy ? [
                                        { value: "pharmapro", label: "PharmaPro" },
                                        { value: "rxsolutions", label: "RxSolutions" },
                                        { value: "pharmagest", label: "Pharmagest" },
                                        { value: "pharmalog", label: "PharmaLog" }
                                    ] : [])
                            }
                            placeholder="Sélectionner les logiciels"
                            value={Array.isArray(remplacementFields.softwares) 
                                ? remplacementFields.softwares.map(software => ({
                                    value: software,
                                    label: software
                                }))
                                : []
                            }
                            onChange={(selectedOptions) => {
                                const options = Array.isArray(selectedOptions) ? selectedOptions : [];
                                setRemplacementFields({
                                    ...remplacementFields,
                                    softwares: options.map(opt => opt.value)
                                });
                            }}
                        />
                        <span className="text-xs text-gray-500 mt-1 block">
                            Les logiciels disponibles sont ceux configurés dans le profil de l'institution
                        </span>
                    </div>
                    
                    {/* Description détaillée des tâches */}
                    <div>
                        <Label required>Description détaillée des tâches</Label>
                        <TextArea
                            placeholder="Décrire les tâches à accomplir..."
                            value={remplacementFields.mission_objective || ""}
                            onChange={(e) => {
                                // Using a more defensive approach to handle the event
                                const value = e && typeof e === 'object' && 'target' in e ? e.target.value : e;
                                setRemplacementFields({ 
                                    ...remplacementFields, 
                                    mission_objective: value || ""
                                });
                            }}
                            rows={5}
                        />
                    </div>
                    
                    {/* Informations additionnelles */}
                    <div>
                        <Label>Informations additionnelles</Label>
                        <TextArea
                            placeholder="Code vestimentaire, informations supplémentaires..."
                            value={remplacementFields.additional_information || ""}
                            onChange={(e) => {
                                // Using a more defensive approach to handle the event
                                const value = e && typeof e === 'object' && 'target' in e ? e.target.value : e;
                                setRemplacementFields({
                                    ...remplacementFields,
                                    additional_information: value || ""
                                });
                            }}
                        />
                    </div>
                    
                    {/* Documents joints */}
                    <div>
                        <Label>Documents joints</Label>
                        <input
                            type="file"
                            multiple
                            accept=".pdf,.doc,.docx,.txt,.rtf,.xls,.xlsx,.ppt,.pptx"
                            onChange={(e) => {
                                const files = e.target.files;
                                if (files) {
                                    const fileArray = Array.from(files);
                                    setRemplacementFields((prev) => ({
                                        ...prev,
                                        attached_documents: fileArray,
                                    }));
                                }
                            }}
                            className="block w-full text-sm text-gray-900 dark:text-white/90 file:mr-4 file:rounded file:border-0 file:bg-brand-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-brand-700 hover:file:bg-brand-100 dark:file:bg-brand-800 dark:file:text-white"
                        />
                    </div>
                </>
            )}
        </div>
    );
};
