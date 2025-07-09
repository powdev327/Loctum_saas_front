import { useModal } from "../../../hooks/useModal.ts";
import { Modal } from "../../ui/modal";
import Button from "../../ui/button/Button.tsx";
import Input from "../../form/input/InputField.tsx";
import Label from "../../form/Label.tsx";
import useInstitutionForm from "../../../hooks/owner/useInstitutionHook.ts";
import { typeContractList } from "../../../config/owner/typeContractList.ts";
import Select from "../../form/Select.tsx";
import { typePharmacyInstitutionList } from "../../../config/owner/pharmacyInstitution/typePharmacyInstitutionList.ts";
import { clinicServicesList } from "../../../config/owner/clinicInstitution/clinicServicesList.ts";
import { typeClinicInstitutionList } from "../../../config/owner/clinicInstitution/typeClinicInstitutionList.ts";
import { typeOfUltrasoundList } from "../../../config/owner/clinicInstitution/typeOfUltrasoundList.ts";
import { systemOdontogramList } from "../../../config/owner/clinicInstitution/systemOdontogramList.ts";
import { typeRadiographicList } from "../../../config/owner/clinicInstitution/typeRadiographicList.ts";
import { parkingList } from "../../../config/owner/clinicInstitution/clinicParkingList.ts";
import Switch from "../../form/switch/Switch.tsx";
import { dentalSoftwareList, pharmacySoftwareList } from "../../../config/owner/softwareList.ts";
import { languagesList } from "../../../config/owner/languagesList.ts";
import toast from "react-hot-toast";
import DropdownWithCheckbox from "../../form/DropdownWithCheckbox.tsx";
import { useEffect, useState } from "react";
import provincesData from "@/data/canada-provinces-cities.json"

export default function UserMetaCard({ clientInfo, buildInstitutionPayload }) {
  const { isOpen, openModal, closeModal } = useModal();
  const [filteredCities, setFilteredCities] = useState([]);
  const [neighborhoods, setNeighborhoods] = useState([]);
  const [isLoadingNeighborhoods, setIsLoadingNeighborhoods] = useState(false);
  const [neighborhoodError, setNeighborhoodError] = useState(null);
  const [showCustomAddressInput, setShowCustomAddressInput] = useState(false);

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
    institutionsList,
    setInstitutionsList,
    resetForm,
    number_of_pharmacists,
    setNumber_of_pharmacists,
    number_of_assistants,
    setNumber_of_assistants,
    additional_information,
    setAdditional_information,
    traffic_in_week,
    setTraffic_in_week,
  } = useInstitutionForm();

  const MAPBOX_TOKEN = "pk.eyJ1IjoiaGlqaWFuZ3RhbyIsImEiOiJjampxcjFnb3E2NTB5M3BvM253ZHV5YjhjIn0.WneUon5qFigfJRJ3oaZ3Ow";

  const handleProvinceChange = (selectedProvince) => {
    setProvince(selectedProvince);
    const citiesForProvince = provincesData[selectedProvince] || [];
    setFilteredCities(citiesForProvince);
    setCity("");
    setAddress("");
    setNeighborhoods([]);
    setNeighborhoodError(null);
    setShowCustomAddressInput(false);
  };

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity);
    setAddress("");
    setNeighborhoods([]);
    setNeighborhoodError(null);
    setShowCustomAddressInput(false);
  };

  const handleAddressChange = (e) => {
    const value = e.target.value;
    if (value === "other") {
      setShowCustomAddressInput(true);
      setAddress("");
    } else {
      setShowCustomAddressInput(false);
      setAddress(value);
    }
  };

  const fetchNeighborhoods = async (city, province) => {
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
    if (city && province) {
      const timer = setTimeout(() => {
        fetchNeighborhoods(city, province);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setNeighborhoods([]);
    }
  }, [city, province]);

  const phoneRegex = /^\+1[\s-]?(\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$/;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, type: "pharmacy" | "clinic") => {
    const value = e.target.value;
    const cleaned = value.replace(/[\s-()]/g, "");

    if (type === "pharmacy") {
      setPharmacyPhoneNumber(value);
    } else {
      setClinicPhoneNumber(value);
    }

    if (value && !phoneRegex.test(value)) {
      setPhoneError("Invalid phone number format. Use +1 555 555 5555");
    } else {
      setPhoneError(null);
    }
  };

  const validateForm = () => {
    const errors = [];
    if (!clientInfo?.business_sector) errors.push("Institution type is required");
    if (!businessLegalName) errors.push("Business legal name is required");
    if (!pharmacyOrClinicName) errors.push("Institution name is required");
    if (!address) errors.push("Address is required");
    if (!city) errors.push("City is required");
    if (!province) errors.push("Province is required");
    if (!postalCode) errors.push("Postal code is required");

    if (clientInfo?.business_sector === "pharmacy") {
      if (!typeOfPharmacy) errors.push("Type of pharmacy is required");
      if (!pharmacyPhoneNumber || !phoneRegex.test(pharmacyPhoneNumber)) {
        errors.push("Invalid pharmacy phone number format. Use +1 555 555 5555");
      }
    } else if (clientInfo?.business_sector === "dental_clinic") {
      if (!typeOfClinic) errors.push("Type of clinic is required");
      if (!clinicPhoneNumber || !phoneRegex.test(clinicPhoneNumber)) {
        errors.push("Invalid clinic phone number format. Use +1 555 555 5555");
      }
    }

    return errors;
  };

  const handleAddInstitution = () => {
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    const institutionData = {
      institution_type: clientInfo?.business_sector,
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
      logo,
      fees_enabled: feesEnabled,
      specific_fields:
          clientInfo?.business_sector === "pharmacy"
              ? {
                type_of_pharmacy: typeOfPharmacy,
                pharmacy_phone_number: pharmacyPhoneNumber,
                weekday_traffic_patients: Number(weekdayTrafficPatients) || 0,
                weekend_traffic_patients: Number(weekendTrafficPatients) || 0,
                number_of_pharmacists: Number(number_of_pharmacists) || 0,
                number_of_assistants: Number(number_of_assistants) || 0,
                additional_information,
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
                traffic_in_week,
                additional_info_visible_before: additionalInfoBeforeHiring,
              },
    };

    setInstitutionsList((prev) => [...prev, { id: Date.now(), data: institutionData }]);
    toast.success("New institution added successfully.");
    resetForm();
  };

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();

    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    const currentInstitutionData = {
      institution_type: clientInfo?.business_sector,
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
      specific_fields:
          clientInfo?.business_sector === "pharmacy"
              ? {
                type_of_pharmacy: typeOfPharmacy,
                pharmacy_phone_number: pharmacyPhoneNumber,
                weekday_traffic_patients: Number(weekdayTrafficPatients) || 0,
                weekend_traffic_patients: Number(weekendTrafficPatients) || 0,
                number_of_pharmacists: Number(number_of_pharmacists) || 0,
                number_of_assistants: Number(number_of_assistants) || 0,
                additional_information,
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
                traffic_in_week,
                additional_info_visible_before: additionalInfoBeforeHiring,
              },
    };

    const institutionsData = [
      ...institutionsList.map((inst) => inst.data).filter(Boolean),
      currentInstitutionData,
    ];

    try {
      const formData = new FormData();
      institutionsData.forEach((inst, index) => {
        const institutionLogo = index === institutionsData.length - 1 ? logo : inst.logo;
        if (institutionLogo) {
          formData.append(`upload_logo_${index}`, institutionLogo);
        }
      });
      formData.append("institutions", JSON.stringify(institutionsData));
      await buildInstitutionPayload(formData);
      toast.success("Institutions saved successfully");
      setInstitutionsList([{ id: Date.now() }]);
      resetForm();
      closeModal();
    } catch (error) {
      console.error("Error saving institutions:", error);
      toast.error(`Failed to save institutions: ${error.response?.data?.detail || "Unknown error"}`);
    }
  };

  const removeInstitution = (id) => {
    if (institutionsList.length > 1) {
      setInstitutionsList(institutionsList.filter((item) => item.id !== id));
    } else {
      toast.error("You must have at least one institution");
    }
  };

  const isFormValid = validateForm().length === 0;

  return (
      <>
        <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
              <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
                <img
                    src={clientInfo?.logo_url ? `http://127.0.0.1:8000/${clientInfo.logo_url}` : "/images/user/owner.png"}
                    alt="user"
                />
              </div>
              <div className="order-3 xl:order-2">
                <h4 className="mb-2 text-lg font-semibold text-center text-gray-800 dark:text-white/90 xl:text-left">
                  {clientInfo?.institution_name}
                </h4>
                <div className="flex flex-col items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {clientInfo?.phone_number || "null"}
                  </p>
                  <div className="hidden h-3.5 w-px bg-gray-300 dark:bg-gray-700 xl:block"></div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{clientInfo?.email}</p>
                </div>
              </div>
            </div>
            <button
                onClick={openModal}
                className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200 lg:inline-flex lg:w-44"
            >
              Add Institution
            </button>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
          <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
            <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
              <div key={institutionsList.length} className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between px-4 items-center mb-4">
                  <h5 className="text-lg font-medium text-gray-800 dark:text-white/90">
                    {clientInfo?.business_sector === "pharmacy"
                        ? "Add new Pharmacy"
                        : clientInfo?.business_sector === "DentalClinic"
                            ? "Add new Clinic"
                            : "Add new Institution"}
                  </h5>
                  {clientInfo?.business_sector.replace("_", " ")}
                  {institutionsList.length > 1 && (
                      <button
                          type="button"
                          onClick={() => removeInstitution(institutionsList[institutionsList.length - 1].id)}
                          className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                  )}
                </div>

                <div className="mt-7">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div className="col-span-2 lg:col-span-1">
                      <Label>Business Legal Name <span className="text-red-500">*</span></Label>
                      <Input
                          type="text"
                          value={businessLegalName}
                          onChange={(e) => setBusinessLegalName(e.target.value)}
                          placeholder="Business Name..."
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>
                        {clientInfo?.business_sector === "pharmacy" ? "Name of Pharmacy" : "Name of Clinic"}{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Input
                          type="text"
                          placeholder={clientInfo?.business_sector === "pharmacy" ? "Pharmacy Name..." : "Clinic Name..."}
                          value={pharmacyOrClinicName}
                          onChange={(e) => setPharmacyOrClinicName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <div className="flex flex-col gap-2">
                        <DropdownWithCheckbox
                            label="Select Contract Types *"
                            options={typeContractList}
                            selectedValues={typeOfContract}
                            onChange={setTypeOfContract}
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
                            if (e.target.files?.[0]) {
                              setLogo(e.target.files[0]);
                            } else {
                              setLogo(null);
                            }
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
                      <Label>Postal Code <span className="text-red-500">*</span></Label>
                      <Input
                          type="text"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          placeholder="Postal Code..."
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <DropdownWithCheckbox
                          label="Software (Optional)"
                          options={clientInfo?.business_sector === "pharmacy" ? pharmacySoftwareList : dentalSoftwareList}
                          selectedValues={software}
                          onChange={setSoftware}
                          className="z-[99999]"
                      />
                    </div>

                    <div className="col-span-2 z-9999">
                      <DropdownWithCheckbox
                          label="Languages Spoken (Optional)"
                          options={languagesList}
                          selectedValues={languagesSpoken}
                          onChange={setLanguagesSpoken}
                      />
                    </div>

                    {clientInfo?.business_sector === "DentalClinic" && (
                        <div className="col-span-2 z-999">
                          <DropdownWithCheckbox
                              label="Services Offered *"
                              options={clinicServicesList}
                              selectedValues={servicesOffered}
                              onChange={setServicesOffered}
                          />
                        </div>
                    )}

                    <div className="col-span-2 flex justify-between">
                      <Switch
                          label="Fees Enabled (Yes/No) *"
                          checked={feesEnabled}
                          onChange={(value) => setFeesEnabled(value)}
                      />
                      <div className="relative inline-block group">
                        <button className="inline-flex px-4 py-3 text-sm font-medium">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="20"
                              height="20"
                              viewBox="0 0 50 50"
                          >
                            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
                          </svg>
                        </button>
                        <div className="invisible absolute z-999999 right-full top-1/2 mr-2.5 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:visible group-hover:opacity-100">
                          <div className="relative">
                            <div className="whitespace-nowrap rounded-lg bg-white border shadow-sm px-3 py-2 text-xs font-medium text-black drop-shadow-4xl dark:bg-[#1E2634] dark:text-white">
                              If fees are enabled
                              the following contract fields
                              <br />
                              must be filled:
                              <br />
                              Max Travel Expense,
                              Per Diem Per Day, <br />
                              Accommodation Cost Per Night
                            </div>
                            <div className="absolute -right-1.5 top-1/2 h-3 w-4 -translate-y-1/2 rotate-45 bg-white dark:bg-[#1E2634]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {clientInfo?.business_sector === "pharmacy" ? (
                        <>
                          <div className="col-span-2 lg:col-span-1">
                            <Label>Type of Pharmacy <span className="text-red-500">*</span></Label>
                            <Select
                                options={typePharmacyInstitutionList}
                                placeholder="Select Option"
                                value={typeOfPharmacy}
                                onChange={(option) => setTypeOfPharmacy(option.value)}
                                className="dark:bg-dark-900"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Pharmacy Phone Number <span className="text-red-500">*</span></Label>
                            <Input
                                type="text"
                                value={pharmacyPhoneNumber}
                                onChange={(e) => handlePhoneChange(e, "pharmacy")}
                                placeholder="e.g., +1 555 555 5555"
                                className={phoneError ? "border-red-500" : ""}
                            />
                            {phoneError && clientInfo?.business_sector === "pharmacy" && (
                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                            )}
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Weekday Traffic Patients</Label>
                            <Input
                                type="number"
                                value={weekdayTrafficPatients}
                                onChange={(e) => setWeekdayTrafficPatients(e.target.value)}
                                placeholder="e.g., 100"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Weekend Traffic Patients</Label>
                            <Input
                                type="number"
                                value={weekendTrafficPatients}
                                onChange={(e) => setWeekendTrafficPatients(e.target.value)}
                                placeholder="e.g., 50"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Number of Pharmacists</Label>
                            <Input
                                type="number"
                                value={number_of_pharmacists}
                                onChange={(e) => setNumber_of_pharmacists(e.target.value)}
                                placeholder="e.g., 200"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Number of Assistants</Label>
                            <Input
                                type="number"
                                value={number_of_assistants}
                                onChange={(e) => setNumber_of_assistants(e.target.value)}
                                placeholder="e.g., 50"
                            />
                          </div>

                          <div className="col-span-2">
                            <Label>Additional Information (Optional)</Label>
                            <textarea
                                rows={4}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30"
                                placeholder="e.g., Additional Information"
                                value={additional_information}
                                onChange={(e) => setAdditional_information(e.target.value)}
                            />
                          </div>
                        </>
                    ) : (
                        <>
                          <div className="col-span-2 lg:col-span-1">
                            <Label>Type of Clinic <span className="text-red-500">*</span></Label>
                            <Select
                                options={typeClinicInstitutionList}
                                placeholder="Select Option"
                                value={typeOfClinic}
                                onChange={(option) => setTypeOfClinic(option.value)}
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Clinic Phone Number <span className="text-red-500">*</span></Label>
                            <Input
                                type="text"
                                value={clinicPhoneNumber}
                                onChange={(e) => handlePhoneChange(e, "clinic")}
                                placeholder="e.g., +1 555 555 5555"
                                className={phoneError ? "border-red-500" : ""}
                            />
                            {phoneError && clientInfo?.business_sector === "dental_clinic" && (
                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                            )}
                          </div>

                          <div className="col-span-2 z-99 lg:col-span-1">
                            <DropdownWithCheckbox
                                label="Charting Systems"
                                options={systemOdontogramList}
                                selectedValues={chartingSystems}
                                onChange={setChartingSystems}
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <DropdownWithCheckbox
                                label="Ultrasonic Types"
                                options={typeOfUltrasoundList}
                                selectedValues={ultrasonicTypes}
                                onChange={setUltrasonicTypes}
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <DropdownWithCheckbox
                                label="Radiography Types"
                                options={typeRadiographicList}
                                selectedValues={radiographyTypes}
                                onChange={setRadiographyTypes}
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <DropdownWithCheckbox
                                label="Parking Options"
                                options={parkingList}
                                selectedValues={parkingOptions}
                                onChange={setParkingOptions}
                                className="z-[9]"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Number of Current Dentists</Label>
                            <Input
                                type="number"
                                value={numberOfCurrentDentists}
                                onChange={(e) => setNumberOfCurrentDentists(e.target.value)}
                                placeholder="e.g., 5"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Number of Current Hygienists</Label>
                            <Input
                                type="number"
                                value={numberOfCurrentHygienists}
                                onChange={(e) => setNumberOfCurrentHygienists(e.target.value)}
                                placeholder="e.g., 3"
                            />
                          </div>

                          <div className="col-span-2">
                            <Label>Additional Information (Optional)</Label>
                            <textarea
                                rows={4}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm shadow-theme-xs placeholder:text-gray-400 focus:outline-hidden dark:bg-gray-900 dark:text-gray-500/90 dark:placeholder:text-white/30"
                                placeholder="e.g., Additional Information"
                                value={additional_information}
                                onChange={(e) => setAdditional_information(e.target.value)}
                            />
                          </div>

                          <div className="col-span-1 lg:col-span-2">
                            <Label>Traffic in Week</Label>
                            <Input
                                type="number"
                                value={traffic_in_week}
                                onChange={(e) => setTraffic_in_week(e.target.value)}
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
              <button
                  type="button"
                  onClick={handleAddInstitution}
                  className="flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-theme-xs hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
              >
                + Add Another Institution
              </button>
              <Button size="sm" variant="outline" onClick={closeModal}>
                Close
              </Button>
              <Button size="sm" onClick={handleSave} disabled={!isFormValid}>
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>
      </>
  );
}