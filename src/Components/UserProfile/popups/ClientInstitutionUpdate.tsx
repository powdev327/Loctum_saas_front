import { Modal } from "../../ui/modal";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import { typeContractList } from "../../../config/owner/typeContractList.ts";
import Select from "../../form/Select.tsx";
import { provincesList } from "../../../config/owner/provincesList.ts";
import { languagesList } from "../../../config/owner/languagesList.ts";
import { clinicServicesList } from "../../../config/owner/clinicInstitution/clinicServicesList.ts";
import Switch from "../../form/switch/Switch.tsx";
import { typePharmacyInstitutionList } from "../../../config/owner/pharmacyInstitution/typePharmacyInstitutionList.ts";
import { typeClinicInstitutionList } from "../../../config/owner/clinicInstitution/typeClinicInstitutionList.ts";
import { systemOdontogramList } from "../../../config/owner/clinicInstitution/systemOdontogramList.ts";
import { typeOfUltrasoundList } from "../../../config/owner/clinicInstitution/typeOfUltrasoundList.ts";
import { typeRadiographicList } from "../../../config/owner/clinicInstitution/typeRadiographicList.ts";
import { parkingList } from "../../../config/owner/clinicInstitution/clinicParkingList.ts";
import Button from "../../ui/button/Button.tsx";
import useInstitutionForm from "../../../hooks/owner/useInstitutionHook.ts";
import toast from "react-hot-toast";
import { useClient } from "../../../context/owner/ClientContext.tsx";
import { useEffect, useState, useRef } from "react";
import DropdownWithCheckbox from "../../form/DropdownWithCheckbox.tsx";
import { dentalSoftwareList, pharmacySoftwareList } from "../../../config/owner/softwareList.ts";
import provincesData from "@/data/canada-provinces-cities.json";

interface Option {
    value: string;
    label: string;
}

export function ClientInstitutionUpdate({ isOpen, closeModal, institution }) {
    const { updateInstitution } = useClient();
    const [institutionsObj, setInstitutionsObj] = useState(null);
    const isInitialMount = useRef(true);
    const [filteredCities, setFilteredCities] = useState([]);
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [isLoadingNeighborhoods, setIsLoadingNeighborhoods] = useState(false);
    const [neighborhoodError, setNeighborhoodError] = useState(null);
    const [showCustomAddressInput, setShowCustomAddressInput] = useState(false);
    const MAPBOX_TOKEN = "pk.eyJ1IjoiaGlqaWFuZ3RhbyIsImEiOiJjampxcjFnb3E2NTB5M3BvM253ZHV5YjhjIn0.WneUon5qFigfJRJ3oaZ3Ow";

    const {
        businessLegalName,
        setBusinessLegalName,
        pharmacyOrClinicName,
        setPharmacyOrClinicName,
        typeOfContract,
        setTypeOfContract,
        address,
        setAddress,
        city,
        setCity,
        province,
        setProvince,
        postalCode,
        setPostalCode,
        software,
        setSoftware,
        languagesSpoken,
        setLanguagesSpoken,
        servicesOffered,
        setServicesOffered,
        logo,
        setLogo,
        typeOfPharmacy,
        setTypeOfPharmacy,
        pharmacyPhoneNumber,
        setPharmacyPhoneNumber,
        weekdayTrafficPatients,
        setWeekdayTrafficPatients,
        weekendTrafficPatients,
        setWeekendTrafficPatients,
        feesEnabled,
        setFeesEnabled,
        typeOfClinic,
        setTypeOfClinic,
        clinicPhoneNumber,
        setClinicPhoneNumber,
        chartingSystems,
        setChartingSystems,
        ultrasonicTypes,
        setUltrasonicTypes,
        radiographyTypes,
        setRadiographyTypes,
        parkingOptions,
        setParkingOptions,
        numberOfCurrentDentists,
        setNumberOfCurrentDentists,
        numberOfCurrentHygienists,
        setNumberOfCurrentHygienists,
        additionalInfoBeforeHiring,
        setAdditionalInfoBeforeHiring,
        phoneError,
        setPhoneError,
        number_of_pharmacists,
        setNumber_of_pharmacists,
        number_of_assistants,
        setNumber_of_assistants,
        additional_information,
        setAdditional_information,
        traffic_in_week,
        setTraffic_in_week,
        resetForm,
    } = useInstitutionForm();

    // Map configuration lists to { value, label } format if they are arrays of strings
    const mapToOptions = (list: string[] | Option[]): Option[] => {
        return list.map(item =>
            typeof item === 'string' ? { value: item, label: item } : item
        );
    };

    const handleProvinceChange = (selectedProvince: string) => {
        setProvince(selectedProvince);
        const citiesForProvince = provincesData[selectedProvince] || [];
        setFilteredCities(citiesForProvince);
        setCity(""); // Reset city when province changes
        setAddress(""); // Reset address
        setNeighborhoods([]); // Reset neighborhoods
        setNeighborhoodError(null);
        setShowCustomAddressInput(false);
    };

    const handleCityChange = (selectedCity: string) => {
        setCity(selectedCity);
        setAddress(""); // Reset address when city changes
        setNeighborhoods([]); // Reset neighborhoods
        setNeighborhoodError(null);
        setShowCustomAddressInput(false);
    };

    const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        if (value === "other") {
            setShowCustomAddressInput(true);
            setAddress("");
        } else {
            setShowCustomAddressInput(false);
            setAddress(value);
        }
    };

    const fetchNeighborhoods = async (city: string, province: string) => {
        if (!city || !province) return;

        setIsLoadingNeighborhoods(true);
        setNeighborhoodError(null);

        try {
            const cityOption = {
                id: "city-default",
                name: city,
                fullAddress: `${city}, ${province}, Canada`,
                type: "city",
                isDefault: true,
            };

            setNeighborhoods([cityOption]);

            const searchQueries = [
                `${encodeURIComponent(city)}, ${encodeURIComponent(province)}, Canada`,
                `neighborhood in ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
                `district ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
                `area ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
                `community ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
                `suburb ${encodeURIComponent(city)}, ${encodeURIComponent(province)}`,
            ];

            const allNeighborhoods = [];
            const seenNames = new Set();

            const searchPromises = searchQueries.map(async (query) => {
                try {
                    const response = await fetch(
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?` +
                        `types=neighborhood,locality,district,place,address&` +
                        `country=CA&` +
                        `proximity=auto&` +
                        `limit=15&` +
                        `access_token=${MAPBOX_TOKEN}`
                    );

                    if (!response.ok) return [];

                    const data = await response.json();

                    return data.features
                        .filter((feature) => {
                            const isCanadian =
                                feature.properties?.country_code === "ca" || feature.place_name.toLowerCase().includes("canada");
                            const isRelevantType = feature.place_type.some((type) =>
                                ["neighborhood", "locality", "district", "place", "address"].includes(type)
                            );
                            const contextText = feature.context?.map((ctx) => ctx.text.toLowerCase()).join(" ") || "";
                            const placeNameLower = feature.place_name.toLowerCase();
                            const isInCorrectCity =
                                contextText.includes(city.toLowerCase()) || placeNameLower.includes(city.toLowerCase());
                            const isInCorrectProvince =
                                contextText.includes(province.toLowerCase()) || placeNameLower.includes(province.toLowerCase());
                            const isNotCityDuplicate = feature.text.toLowerCase() !== city.toLowerCase();

                            return isCanadian && isRelevantType && isInCorrectCity && isInCorrectProvince && isNotCityDuplicate;
                        })
                        .map((feature) => ({
                            id: feature.id,
                            name: feature.text,
                            fullAddress: feature.place_name,
                            coordinates: feature.center,
                            type: feature.place_type[0],
                            relevance: feature.relevance || 0,
                            bbox: feature.bbox,
                        }));
                } catch (error) {
                    console.warn(`Search failed for query: ${query}`, error);
                    return [];
                }
            });

            const searchResults = await Promise.all(searchPromises);

            searchResults.forEach((results) => {
                results.forEach((neighborhood) => {
                    const nameLower = neighborhood.name.toLowerCase();
                    if (!seenNames.has(nameLower)) {
                        seenNames.add(nameLower);
                        allNeighborhoods.push(neighborhood);
                    }
                });
            });

            const sortedNeighborhoods = allNeighborhoods.sort((a, b) => (b.relevance || 0) - (a.relevance || 0)).slice(0, 25);

            if (sortedNeighborhoods.length > 0) {
                setNeighborhoods([cityOption, ...sortedNeighborhoods]);
            } else {
                try {
                    const fallbackResponse = await fetch(
                        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json?` +
                        `country=CA&` +
                        `types=place,locality&` +
                        `limit=10&` +
                        `access_token=${MAPBOX_TOKEN}`
                    );

                    if (fallbackResponse.ok) {
                        const fallbackData = await fallbackResponse.json();
                        const fallbackOptions = fallbackData.features
                            .filter(
                                (feature) =>
                                    feature.place_name.toLowerCase().includes(province.toLowerCase()) &&
                                    feature.text.toLowerCase() !== city.toLowerCase()
                            )
                            .map((feature, index) => ({
                                id: `fallback-${index}`,
                                name: feature.text,
                                fullAddress: feature.place_name,
                                type: "locality",
                                relevance: feature.relevance || 0,
                            }));

                        if (fallbackOptions.length > 0) {
                            setNeighborhoods([cityOption, ...fallbackOptions]);
                        } else {
                            setNeighborhoods([cityOption]);
                            setNeighborhoodError("No specific neighborhoods found. You can use the city center option.");
                        }
                    }
                } catch (fallbackError) {
                    console.error("Fallback search failed:", fallbackError);
                    setNeighborhoods([cityOption]);
                    setNeighborhoodError("Unable to load neighborhood data. You can use the city center option.");
                }
            }
        } catch (error) {
            console.error("Error fetching neighborhoods:", error);
            setNeighborhoodError("Failed to load neighborhoods");
            setNeighborhoods([{ id: "city-error-fallback", name: city, fullAddress: `${city}, ${province}, Canada`, type: "city" }]);
        } finally {
            setIsLoadingNeighborhoods(false);
        }
    };

    useEffect(() => {
        // Ensure city and province are strings before proceeding
        if (typeof city === 'string' && typeof province === 'string' && city && province) {
            const timer = setTimeout(() => {
                fetchNeighborhoods(city, province);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setNeighborhoods([]);
        }
    }, [city, province]);

    useEffect(() => {
        if (isOpen && institution && isInitialMount.current) {
            console.log("Initializing form state with institution:", institution);
            setBusinessLegalName(institution.business_legal_name || "");
            setPharmacyOrClinicName(institution.institution_name || "");
            setTypeOfContract(institution.type_of_contract || []);
            setAddress(institution.address || "");
            setCity(institution.city || "");
            setProvince(institution.province || "");
            setPostalCode(institution.postal_code || "");
            setSoftware(institution.software || []);
            setLanguagesSpoken(institution.languages || []);
            setServicesOffered(institution.services || []);
            setFeesEnabled(institution.fees_enabled || false);

            if (institution.institution_type === "pharmacy") {
                setTypeOfPharmacy(institution.specific_fields?.type_of_pharmacy || "");
                setPharmacyPhoneNumber(institution.specific_fields?.pharmacy_phone_number || "");
                setWeekdayTrafficPatients(institution.specific_fields?.weekday_traffic_patients?.toString() || "");
                setWeekendTrafficPatients(institution.specific_fields?.weekend_traffic_patients?.toString() || "");
                setNumber_of_pharmacists(institution.specific_fields?.number_of_pharmacists?.toString() || "");
                setNumber_of_assistants(institution.specific_fields?.number_of_assistants?.toString() || "");
                setAdditional_information(institution.specific_fields?.additional_information || "");
            } else if (institution.institution_type === "dental_clinic") {
                setTypeOfClinic(institution.specific_fields?.type_of_clinic || "");
                setClinicPhoneNumber(institution.specific_fields?.clinic_phone_number || "");
                setChartingSystems(institution.specific_fields?.charting_systems || []);
                setUltrasonicTypes(institution.specific_fields?.ultrasonic_types || []);
                setRadiographyTypes(institution.specific_fields?.radiography_types || []);
                setParkingOptions(institution.specific_fields?.parking_options || []);
                setNumberOfCurrentDentists(institution.specific_fields?.number_of_current_dentists?.toString() || "");
                setNumberOfCurrentHygienists(institution.specific_fields?.number_of_current_hygienists?.toString() || "");
                setTraffic_in_week(institution.specific_fields?.traffic_in_week?.toString() || "0");
                setAdditionalInfoBeforeHiring(institution.specific_fields?.additional_info_visible_before || false);
            }
            isInitialMount.current = false;
        }

        return () => {
            if (!isOpen) {
                console.log("Resetting form state on modal close");
                resetForm();
                isInitialMount.current = true;
            }
        };
    }, [isOpen, institution, resetForm, setBusinessLegalName, setPharmacyOrClinicName, setTypeOfContract, setAddress, setCity, setProvince, setPostalCode, setSoftware, setLanguagesSpoken, setServicesOffered, setFeesEnabled, setTypeOfPharmacy, setPharmacyPhoneNumber, setWeekdayTrafficPatients, setWeekendTrafficPatients, setNumber_of_pharmacists, setNumber_of_assistants, setAdditional_information, setTypeOfClinic, setClinicPhoneNumber, setChartingSystems, setUltrasonicTypes, setRadiographyTypes, setParkingOptions, setNumberOfCurrentDentists, setNumberOfCurrentHygienists, setTraffic_in_week, setAdditionalInfoBeforeHiring]);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, type: "pharmacy" | "clinic") => {
        const value = e.target.value;
        console.log(`Updating phone number (${type}):`, value);
        if (type === "pharmacy") {
            setPharmacyPhoneNumber(value);
        } else {
            setClinicPhoneNumber(value);
        }

        const phoneRegex = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/;
        if (value && !phoneRegex.test(value)) {
            setPhoneError("Invalid phone number format. Use +1 555 555 5555");
        } else {
            setPhoneError(null);
        }
    };

    const validateForm = () => {
        const errors = [];
        if (!institution?.institution_type) errors.push("Institution type is required");
        if (!businessLegalName) errors.push("Business legal name is required");
        if (!pharmacyOrClinicName) errors.push("Institution name is required");
        if (!address) errors.push("Address is required");
        if (!city) errors.push("City is required");
        if (!province) errors.push("Province is required");
        if (!postalCode) errors.push("Postal code is required");

        if (institution?.institution_type === "pharmacy") {
            if (!typeOfPharmacy) errors.push("Type of pharmacy is required");
            const phoneRegex = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/;
            if (!pharmacyPhoneNumber || !phoneRegex.test(pharmacyPhoneNumber)) {
                errors.push("Invalid pharmacy phone number format. Use +1 555 555 5555");
            }
        } else if (institution?.institution_type === "dental_clinic") {
            if (!typeOfClinic) errors.push("Type of clinic is required");
            const phoneRegex = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/;
            if (!clinicPhoneNumber || !phoneRegex.test(clinicPhoneNumber)) {
                errors.push("Invalid clinic phone number format. Use +1 555 555 5555");
            }
        }

        return errors;
    };

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();

        const errors = validateForm();
        if (errors.length > 0) {
            errors.forEach((error) => toast.error(error));
            return;
        }

        if (!institution?.institution_id) {
            toast.error("Invalid institution ID. Please ensure a valid institution is selected.");
            return;
        }

        const currentInstitutionData = {
            institution_type: institution?.institution_type,
            business_legal_name: businessLegalName,
            institution_name: pharmacyOrClinicName,
            type_of_contract: typeOfContract,
            address,
            city,
            province,
            postal_code: postalCode,
            software,
            languages: languagesSpoken,
            services: servicesOffered,
            fees_enabled: feesEnabled,
            specific_fields: institution?.institution_type === "pharmacy"
                ? {
                    type_of_pharmacy: typeOfPharmacy,
                    pharmacy_phone_number: pharmacyPhoneNumber,
                    weekday_traffic_patients: Number(weekdayTrafficPatients) || 0,
                    weekend_traffic_patients: Number(weekendTrafficPatients) || 0,
                    number_of_pharmacists: Number(number_of_pharmacists) || 0,
                    number_of_assistants: Number(number_of_assistants) || 0,
                    additional_information: additional_information,
                }
                : {
                    type_of_clinic: typeOfClinic,
                    clinic_phone_number: clinicPhoneNumber,
                    charting_systems: chartingSystems,
                    ultrasonic_types: ultrasonicTypes,
                    radiography_types: radiographyTypes,
                    parking_options: parkingOptions,
                    number_of_current_dentists: Number(numberOfCurrentDentists) || 0,
                    number_of_current_hygienists: Number(numberOfCurrentHygienists) || 0,
                    traffic_in_week: Number(traffic_in_week) || 0,
                    additional_info_visible_before: additionalInfoBeforeHiring,
                },
        };

        try {
            console.log("Saving institution data:", currentInstitutionData);
            const formData = new FormData();
            if (logo instanceof File) {
                formData.append("upload_logo", logo);
            }
            formData.append("institution_type", currentInstitutionData.institution_type || "");
            formData.append("business_legal_name", currentInstitutionData.business_legal_name || "");
            formData.append("institution_name", currentInstitutionData.institution_name || "");
            formData.append("type_of_contract", JSON.stringify(currentInstitutionData.type_of_contract));
            formData.append("address", currentInstitutionData.address || "");
            formData.append("city", currentInstitutionData.city || "");
            formData.append("province", currentInstitutionData.province || "");
            formData.append("postal_code", currentInstitutionData.postal_code || "");
            formData.append("software", JSON.stringify(currentInstitutionData.software));
            formData.append("languages", JSON.stringify(currentInstitutionData.languages));
            formData.append("services", JSON.stringify(currentInstitutionData.services));
            formData.append("specific_fields", JSON.stringify(currentInstitutionData.specific_fields));
            formData.append("fees_enabled", String(currentInstitutionData.fees_enabled));

            await updateInstitution(institution.institution_id, formData, closeModal);
            setInstitutionsObj(currentInstitutionData);
            toast.success("Institution updated successfully");
        } catch (error) {
            console.log("Error saving institution:", error);
            toast.error(`Failed to save institution: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };
    console.log('ins', institution)


    return (
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                    <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">
                            <h5 className="text-lg font-medium text-gray-800 dark:text-white/90">Update {institution?.institution_name}</h5>
                        </div>

                        <div className="mt-7">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                                <div className="col-span-2 lg:col-span-1">
                                    <Label>Business Legal Name</Label>
                                    <Input
                                        type="text"
                                        value={businessLegalName}
                                        onChange={(e) => {
                                            console.log("Updating businessLegalName:", e.target.value);
                                            setBusinessLegalName(e.target.value);
                                        }}
                                        placeholder="Business Name..."
                                    />
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>{institution?.institution_type === "pharmacy" ? "Name of Pharmacy" : "Name of Clinic"}</Label>
                                    <Input
                                        type="text"
                                        placeholder={institution?.institution_type === "pharmacy" ? "Pharmacy Name..." : "Clinic Name..."}
                                        value={pharmacyOrClinicName}
                                        onChange={(e) => {
                                            console.log("Updating pharmacyOrClinicName:", e.target.value);
                                            setPharmacyOrClinicName(e.target.value);
                                        }}
                                    />
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <div className="flex flex-col gap-2">
                                        <DropdownWithCheckbox
                                            label="Select Contract Types"
                                            options={mapToOptions(typeContractList)}
                                            selectedValues={typeOfContract}
                                            onChange={(values) => {
                                                console.log("Updating typeOfContract:", values);
                                                setTypeOfContract(values);
                                            }}
                                            className="z-999"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>Upload Logo (Optional)</Label>
                                    <input
                                        className="h-11 cursor-pointer w-full rounded-lg border-gray-700 border appearance-none px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0"
                                        aria-describedby="file_input_help"
                                        id="file_input"
                                        type="file"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            console.log("Updating logo:", file);
                                            setLogo(file || null);
                                        }}
                                    />
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>Province <span className="text-red-500">*</span></Label>
                                    <Select
                                        options={Object.keys(provincesData).map((province) => ({
                                            value: province,
                                            label: province,
                                        }))}
                                        placeholder="Select Province"
                                        value={province}
                                        onChange={(option) => handleProvinceChange(option.value)}
                                        className="dark:bg-dark-900"
                                    />
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>City <span className="text-red-500">*</span></Label>
                                    <Select
                                        options={filteredCities.map((city) => ({
                                            value: city,
                                            label: city,
                                        }))}
                                        placeholder={province ? "Select City" : "Select Province First"}
                                        value={city}
                                        onChange={(option) => handleCityChange(option.value)}
                                        isDisabled={!province}
                                        className="dark:bg-dark-900"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <Label>
                                        Full Address / Neighborhood
                                        {isLoadingNeighborhoods && (
                                            <span className="ml-2 text-xs text-blue-500 animate-pulse">Loading neighborhoods...</span>
                                        )}
                                        {neighborhoods.length > 1 && !isLoadingNeighborhoods && (
                                            <span className="ml-2 text-xs text-green-600">{neighborhoods.length - 1} neighborhoods found</span>
                                        )}
                                    </Label>
                                    {!showCustomAddressInput ? (
                                        <div className="relative">
                                            <select
                                                className={`h-11 w-full rounded-lg border-gray-700 border px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30 ring-0 appearance-none ${
                                                    validateForm().includes("Address is required") && !address ? "border-red-500" : ""
                                                }`}
                                                value={address}
                                                onChange={handleAddressChange}
                                                disabled={!city}
                                            >
                                                <option value="">
                                                    {!city
                                                        ? "Select a city first"
                                                        : neighborhoods.length === 0
                                                            ? "Loading neighborhoods..."
                                                            : "Select a neighborhood or address"}
                                                </option>
                                                {neighborhoods.map((neighborhood, index) => (
                                                    <option key={neighborhood.id || index} value={neighborhood.fullAddress}>
                                                        {neighborhood.isDefault
                                                            ? `📍 ${neighborhood.name} (City Center)`
                                                            : neighborhood.isStatic
                                                                ? `🏘️ ${neighborhood.name}`
                                                                : `📍 ${neighborhood.name}`}
                                                    </option>
                                                ))}
                                                {city && <option value="other">✏️ Other (Enter custom address)</option>}
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                {isLoadingNeighborhoods ? (
                                                    <svg
                                                        className="w-4 h-4 text-blue-500 animate-spin"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                        />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <Input
                                            type="text"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            placeholder="Enter your full address"
                                            className={validateForm().includes("Address is required") && !address ? "border-red-500" : ""}
                                        />
                                    )}
                                    {neighborhoodError && (
                                        <div className="mt-1 text-sm text-yellow-600">⚠️ {neighborhoodError}</div>
                                    )}
                                    {city && neighborhoods.length > 0 && !showCustomAddressInput && (
                                        <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                            Select your specific neighborhood or use "{city} (City Center)" for general city
                                            location. Can't find yours? Select "Other" to enter manually.
                                        </div>
                                    )}
                                </div>

                                <div className="col-span-2 lg:col-span-1">
                                    <Label>Postal Code</Label>
                                    <Input
                                        type="text"
                                        value={postalCode}
                                        onChange={(e) => {
                                            console.log("Updating postalCode:", e.target.value);
                                            setPostalCode(e.target.value);
                                        }}
                                        placeholder="Postal Code..."
                                    />
                                </div>

                                <div className="col-span-2 lg:col-span-1 z-99999">
                                    <DropdownWithCheckbox
                                        label="Software (Optional)"
                                        options={businessLegalName === "pharmacy" ? pharmacySoftwareList : dentalSoftwareList}
                                        selectedValues={software}
                                        onChange={setSoftware}
                                        className="z-[99999]"
                                    />
                                </div>

                                <div className="col-span-2 z-9999">
                                    <DropdownWithCheckbox
                                        label="Languages Spoken (Optional)"
                                        options={mapToOptions(languagesList)}
                                        selectedValues={languagesSpoken}
                                        onChange={(values) => {
                                            console.log("Updating languagesSpoken:", values);
                                            setLanguagesSpoken(values);
                                        }}
                                        className="z-9999"
                                    />
                                </div>

                                <div className="col-span-2 z-999">
                                    <DropdownWithCheckbox
                                        label="Services Offered"
                                        options={mapToOptions(clinicServicesList)}
                                        selectedValues={servicesOffered}
                                        onChange={(values) => {
                                            console.log("Updating servicesOffered:", values);
                                            setServicesOffered(values);
                                        }}
                                        className="z-999"
                                    />
                                </div>

                                <div className="col-span-2 flex justify-between">
                                    <Switch
                                        label="Fees Enabled (Yes/No)"
                                        checked={feesEnabled}
                                        onChange={(value) => {
                                            console.log("Updating feesEnabled:", value);
                                            setFeesEnabled(value);
                                        }}
                                    />

                                    <div className="relative inline-block group">
                                        <button className="inline-flex px-4 py-3 text-sm font-medium">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                                            </svg>
                                        </button>
                                        <div className="invisible absolute z-999999 right-full top-1/2 mr-2.5 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                                            <div className="relative">
                                                <div className="whitespace-nowrap rounded-lg bg-white border shadow-sm px-3 py-2 text-xs font-medium text-black drop-shadow-4xl dark:bg-[#1E2634] dark:text-white">
                                                    If fees are enabled
                                                    the following contract fields<br />
                                                    must be filled:<br />
                                                    Max Travel Expense,
                                                    Per Diem Per Day, <br />
                                                    Accommodation Cost Per Night
                                                </div>
                                                <div className="absolute -right-1.5 top-1/2 h-3 w-4 -translate-y-1/2 rotate-45 bg-white dark:bg-[#1E2634]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {institution?.institution_type === "pharmacy" ? (
                                    <>
                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Type of Pharmacy</Label>
                                            <Select
                                                options={typePharmacyInstitutionList}
                                                placeholder="Select Option"
                                                value={typeOfPharmacy}
                                                onChange={(value) => {
                                                    console.log("Updating typeOfPharmacy:", value);
                                                    setTypeOfPharmacy(value);
                                                }}
                                                className="dark:bg-dark-900"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Pharmacy Phone Number</Label>
                                            <Input
                                                type="text"
                                                value={pharmacyPhoneNumber}
                                                onChange={(e) => handlePhoneChange(e, "pharmacy")}
                                                placeholder="e.g., +1 555 555 5555"
                                                className={phoneError ? "border-red-500" : ""}
                                            />
                                            {phoneError && institution?.institution_type === "pharmacy" && (
                                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                            )}
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Weekday Traffic Patients</Label>
                                            <Input
                                                type="number"
                                                value={weekdayTrafficPatients}
                                                onChange={(e) => {
                                                    console.log("Updating weekdayTrafficPatients:", e.target.value);
                                                    setWeekdayTrafficPatients(e.target.value);
                                                }}
                                                placeholder="e.g., 100"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Weekend Traffic Patients</Label>
                                            <Input
                                                type="number"
                                                value={weekendTrafficPatients}
                                                onChange={(e) => {
                                                    console.log("Updating weekendTrafficPatients:", e.target.value);
                                                    setWeekendTrafficPatients(e.target.value);
                                                }}
                                                placeholder="e.g., 50"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Number of Pharmacists</Label>
                                            <Input
                                                type="number"
                                                value={number_of_pharmacists}
                                                onChange={(e) => {
                                                    console.log("Updating number_of_pharmacists:", e.target.value);
                                                    setNumber_of_pharmacists(e.target.value);
                                                }}
                                                placeholder="e.g., 200"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Number of Assistants</Label>
                                            <Input
                                                type="number"
                                                value={number_of_assistants}
                                                onChange={(e) => {
                                                    console.log("Updating number_of_assistants:", e.target.value);
                                                    setNumber_of_assistants(e.target.value);
                                                }}
                                                placeholder="e.g., 50"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Label>Additional Information (Optional)</Label>
                                            <Input
                                                type="text"
                                                value={additional_information}
                                                onChange={(e) => {
                                                    console.log("Updating additional_information:", e.target.value);
                                                    setAdditional_information(e.target.value);
                                                }}
                                                placeholder="e.g., Additional Information"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Type of Clinic</Label>
                                            <Select
                                                options={typeClinicInstitutionList}
                                                placeholder="Select Option"
                                                value={typeOfClinic}
                                                onChange={(value) => {
                                                    console.log("Updating typeOfClinic:", value);
                                                    setTypeOfClinic(value);
                                                }}
                                                className="dark:bg-dark-900"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Clinic Phone Number</Label>
                                            <Input
                                                type="text"
                                                value={clinicPhoneNumber}
                                                onChange={(e) => handlePhoneChange(e, "clinic")}
                                                placeholder="e.g., +1 123 456 7890"
                                                className={phoneError ? "border-red-500" : ""}
                                            />
                                            {phoneError && institution?.institution_type === "dental_clinic" && (
                                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                                            )}
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <DropdownWithCheckbox
                                                label="Charting Systems"
                                                options={mapToOptions(systemOdontogramList)}
                                                selectedValues={chartingSystems}
                                                onChange={(values) => {
                                                    console.log("Updating chartingSystems:", values);
                                                    setChartingSystems(values);
                                                }}
                                                className="z-999"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <DropdownWithCheckbox
                                                label="Ultrasonic Types"
                                                options={mapToOptions(typeOfUltrasoundList)}
                                                selectedValues={ultrasonicTypes}
                                                onChange={(values) => {
                                                    console.log("Updating ultrasonicTypes:", values);
                                                    setUltrasonicTypes(values);
                                                }}
                                                className="z-999"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <DropdownWithCheckbox
                                                label="Radiography Types"
                                                options={mapToOptions(typeRadiographicList)}
                                                selectedValues={radiographyTypes}
                                                onChange={(values) => {
                                                    console.log("Updating radiographyTypes:", values);
                                                    setRadiographyTypes(values);
                                                }}
                                                className="z-999"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <DropdownWithCheckbox
                                                label="Parking Options"
                                                options={mapToOptions(parkingList)}
                                                selectedValues={parkingOptions}
                                                onChange={(values) => {
                                                    console.log("Updating parkingOptions:", values);
                                                    setParkingOptions(values);
                                                }}
                                                className="z-999"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Number of Current Dentists</Label>
                                            <Input
                                                type="number"
                                                value={numberOfCurrentDentists}
                                                onChange={(e) => {
                                                    console.log("Updating numberOfCurrentDentists:", e.target.value);
                                                    setNumberOfCurrentDentists(e.target.value);
                                                }}
                                                placeholder="e.g., 5"
                                            />
                                        </div>

                                        <div className="col-span-2 lg:col-span-1">
                                            <Label>Number of Current Hygienists</Label>
                                            <Input
                                                type="number"
                                                value={numberOfCurrentHygienists}
                                                onChange={(e) => {
                                                    console.log("Updating numberOfCurrentHygienists:", e.target.value);
                                                    setNumberOfCurrentHygienists(e.target.value);
                                                }}
                                                placeholder="e.g., 3"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <Switch
                                                label="Additional Info Visible Before Hiring"
                                                checked={additionalInfoBeforeHiring}
                                                onChange={(value) => {
                                                    console.log("Updating additionalInfoBeforeHiring:", value);
                                                    setAdditionalInfoBeforeHiring(value);
                                                }}
                                            />
                                        </div>

                                        <div className="col-span-1 lg:col-span-2">
                                            <Label>Traffic in Week</Label>
                                            <Input
                                                type="number"
                                                value={traffic_in_week}
                                                onChange={(e) => {
                                                    console.log("Updating traffic_in_week:", e.target.value);
                                                    setTraffic_in_week(e.target.value);
                                                }}
                                                placeholder="e.g., 3"
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3 px-2 mt-6 lg:justify-end">
                    <Button size="sm" variant="outline" onClick={closeModal}>
                        Close
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </Modal>
    );
}