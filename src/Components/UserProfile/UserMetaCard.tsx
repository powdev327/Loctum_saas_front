// src/components/UserMetaCard.tsx
import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import RadioSm from "../form/input/RadioSm";
import useInstitutionForm from "../../hooks/owner/useInstitutionHook";
import { typeContractList } from "../../config/owner/typeContractList";
import MultiSelect from "../form/MultiSelect";
import { typePharmacyInstitutionList } from "../../config/owner/pharmacyInstitution/typePharmacyInstitutionList";
import Select from "../form/Select";
import { provincesList } from "../../config/owner/provincesList";
import { clinicServicesList } from "../../config/owner/clinicInstitution/clinicServicesList";
import { typeClinicInstitutionList } from "../../config/owner/clinicInstitution/typeClinicInstitutionList";
import { typeOfUltrasoundList } from "../../config/owner/clinicInstitution/typeOfUltrasoundList";
import { systemOdontogramList } from "../../config/owner/clinicInstitution/systemOdontogramList";
import { typeRadiographicList } from "../../config/owner/clinicInstitution/typeRadiographicList";
import { parkingList } from "../../config/owner/clinicInstitution/clinicParkingList";
import Switch from "../form/switch/Switch";
import { softwareList } from "../../config/owner/softwareList";
import { languagesList } from "../../config/owner/languagesList";
import toast from "react-hot-toast";

export default function UserMetaCard({ clientInfo, buildInstitutionPayload }) {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    institutionType,
    setInstitutionType,
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
    maxTravelExpense,
    setMaxTravelExpense,
    perDiemPerDay,
    setPerDiemPerDay,
    accommodationCostPerNight,
    setAccommodationCostPerNight,
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
  } = useInstitutionForm();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>, type: "pharmacy" | "clinic") => {
    const value = e.target.value;
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
    if (!institutionType) errors.push("Institution type is required");
    if (!businessLegalName) errors.push("Business legal name is required");
    if (!pharmacyOrClinicName) errors.push("Institution name is required");
    if (!address) errors.push("Address is required");
    if (!city) errors.push("City is required");
    if (!province) errors.push("Province is required");
    if (!postalCode) errors.push("Postal code is required");

    if (institutionType === "pharmacy") {
      if (!typeOfPharmacy) errors.push("Type of pharmacy is required");
      const phoneRegex = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/;
      if (!pharmacyPhoneNumber || !phoneRegex.test(pharmacyPhoneNumber)) {
        errors.push("Invalid pharmacy phone number format. Use +1 555 555 5555");
      }
    } else if (institutionType === "dental_clinic") {
      if (!typeOfClinic) errors.push("Type of clinic is required");
      const phoneRegex = /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{4}$/;
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
      institution_type: institutionType,
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
      specific_fields: institutionType === "pharmacy"
          ? {
            type_of_pharmacy: typeOfPharmacy,
            pharmacy_phone_number: pharmacyPhoneNumber,
            weekday_traffic_patients: Number(weekdayTrafficPatients) || 0,
            weekend_traffic_patients: Number(weekendTrafficPatients) || 0,
            fees_enabled: feesEnabled,
            max_travel_expense: Number(maxTravelExpense) || 0,
            per_diem_per_day: Number(perDiemPerDay) || 0,
            accommodation_cost_per_night: Number(accommodationCostPerNight) || 0,
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
            additional_info_visible_before: additionalInfoBeforeHiring,
          },
    };

    setInstitutionsList((prev) => [...prev, { id: Date.now(), data: institutionData }]);
    toast.success('new institutions added successfully.');
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
      institution_type: institutionType,
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
      specific_fields: institutionType === "pharmacy"
          ? {
            type_of_pharmacy: typeOfPharmacy,
            pharmacy_phone_number: pharmacyPhoneNumber,
            weekday_traffic_patients: Number(weekdayTrafficPatients) || 0,
            weekend_traffic_patients: Number(weekendTrafficPatients) || 0,
            fees_enabled: feesEnabled,
            max_travel_expense: Number(maxTravelExpense) || 0,
            per_diem_per_day: Number(perDiemPerDay) || 0,
            accommodation_cost_per_night: Number(accommodationCostPerNight) || 0,
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
            additional_info_visible_before: additionalInfoBeforeHiring,
          },
    };

    const institutionsData = [...institutionsList.map((inst) => inst.data).filter(Boolean), currentInstitutionData];

    try {
      const formData = new FormData();
      institutionsData.forEach((inst, index) => {
        if (inst.logo) {
          formData.append(`upload_logo_${index}`, inst.logo);
        }
      });
      formData.append("institutions", JSON.stringify(institutionsData));

      await buildInstitutionPayload(formData);
      toast.success("Institutions saved successfully");
      setInstitutionsList([{ id: Date.now() }]);
      resetForm();
      closeModal();
    } catch (error) {
      console.error("Error saving institutions", error);
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

  return (
      <>
        <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
              <div className="w-20 h-20 overflow-hidden border border-gray-200 rounded-full dark:border-gray-800">
                <img src={`http://127.0.0.1:8000/${clientInfo?.logo_url ?? "/images/user/owner.jpg"}`} alt="user" />
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {clientInfo?.email}
                  </p>
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
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-lg font-medium text-gray-800 dark:text-white/90">Institution</h5>
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

                <div>
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">Institution Type</h5>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <RadioSm
                        id="pharmacy"
                        name="institution_type"
                        value="pharmacy"
                        checked={institutionType === "pharmacy"}
                        label="Pharmacy"
                        onChange={(value) => setInstitutionType(value)}
                    />
                    <RadioSm
                        id="dental_clinic"
                        name="institution_type"
                        value="dental_clinic"
                        checked={institutionType === "dental_clinic"}
                        label="Dental Clinic"
                        onChange={(value) => setInstitutionType(value)}
                    />
                  </div>
                </div>

                <div className="mt-7">
                  <h5 className="mb-5 text-lg font-medium text-gray-800 dark:text-white/90 lg:mb-6">Institution Data</h5>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                    <div className="col-span-2 lg:col-span-1">
                      <Label>Business Legal Name</Label>
                      <Input
                          type="text"
                          value={businessLegalName}
                          onChange={(e) => setBusinessLegalName(e.target.value)}
                          placeholder="Business Name..."
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>{institutionType === "pharmacy" ? "Name of Pharmacy" : "Name of Clinic"}</Label>
                      <Input
                          type="text"
                          placeholder={institutionType === "pharmacy" ? "Pharmacy Name..." : "Clinic Name..."}
                          value={pharmacyOrClinicName}
                          onChange={(e) => setPharmacyOrClinicName(e.target.value)}
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <div className="flex flex-col gap-2">
                        <MultiSelect
                            label="Select Contract Types"
                            options={typeContractList}
                            defaultSelected={typeOfContract}
                            onChange={(values) => setTypeOfContract(values)}
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
                              setLogo(null); // Clear logo if no file is selected
                            }
                          }}
                      />
                    </div>

                    <div className="col-span-2">
                      <Label>Address</Label>
                      <Input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Street Address..."
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>City</Label>
                      <Input
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="City..."
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>Province</Label>
                      <Select
                          options={provincesList}
                          placeholder="Select Option"
                          value={province}
                          onChange={(value) => setProvince(value)}
                          className="dark:bg-dark-900"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                      <Label>Postal Code</Label>
                      <Input
                          type="text"
                          value={postalCode}
                          onChange={(e) => setPostalCode(e.target.value)}
                          placeholder="Postal Code..."
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1 z-99999">
                      <MultiSelect
                          label="Software (Optional)"
                          options={softwareList}
                          defaultSelected={software}
                          onChange={(values) => setSoftware(values)}
                      />
                    </div>

                    <div className="col-span-2 z-9999">
                      <MultiSelect
                          label="Languages Spoken (Optional)"
                          options={languagesList}
                          defaultSelected={languagesSpoken}
                          onChange={(values) => setLanguagesSpoken(values)}
                      />
                    </div>

                    <div className="col-span-2 z-999">
                      <MultiSelect
                          label="Services Offered"
                          options={clinicServicesList}
                          defaultSelected={servicesOffered}
                          onChange={(values) => setServicesOffered(values)}
                      />
                    </div>

                    {institutionType === "pharmacy" ? (
                        <>
                          <div className="col-span-2 lg:col-span-1">
                            <Label>Type of Pharmacy</Label>
                            <Select
                                options={typePharmacyInstitutionList}
                                placeholder="Select Option"
                                value={typeOfPharmacy}
                                onChange={(value) => setTypeOfPharmacy(value)}
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
                            {phoneError && institutionType === "pharmacy" && (
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
                            <Switch
                                label="Fees Enabled (Yes/No)"
                                checked={feesEnabled}
                                onChange={(value) => setFeesEnabled(value)}
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Max Travel Expense</Label>
                            <Input
                                type="number"
                                value={maxTravelExpense}
                                onChange={(e) => setMaxTravelExpense(e.target.value)}
                                placeholder="e.g., 200"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Per Diem Per Day</Label>
                            <Input
                                type="number"
                                value={perDiemPerDay}
                                onChange={(e) => setPerDiemPerDay(e.target.value)}
                                placeholder="e.g., 50"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Accommodation Cost Per Night</Label>
                            <Input
                                type="number"
                                value={accommodationCostPerNight}
                                onChange={(e) => setAccommodationCostPerNight(e.target.value)}
                                placeholder="e.g., 150"
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
                                onChange={(value) => setTypeOfClinic(value)}
                                className="dark:bg-dark-900"
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <Label>Clinic Phone Number</Label>
                            <Input
                                type="text"
                                value={clinicPhoneNumber}
                                onChange={(e) => handlePhoneChange(e, "clinic")}
                                placeholder="e.g., +1 555 555 5555"
                                className={phoneError ? "border-red-500" : ""}
                            />
                            {phoneError && institutionType === "dental_clinic" && (
                                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                            )}
                          </div>

                          <div className="col-span-2 z-99 lg:col-span-1">
                            <MultiSelect
                                label="Charting Systems"
                                options={systemOdontogramList}
                                defaultSelected={chartingSystems}
                                onChange={(values) => setChartingSystems(values)}
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <MultiSelect
                                label="Ultrasonic Types"
                                options={typeOfUltrasoundList}
                                defaultSelected={ultrasonicTypes}
                                onChange={(values) => setUltrasonicTypes(values)}
                            />
                          </div>

                          <div className="col-span-2 lg:col-span-1">
                            <MultiSelect
                                label="Radiography Types"
                                options={typeRadiographicList}
                                defaultSelected={radiographyTypes}
                                onChange={(values) => setRadiographyTypes(values)}
                            />
                          </div>

                          <div className="col-span-2 z-9 lg:col-span-1">
                            <MultiSelect
                                label="Parking Options"
                                options={parkingList}
                                defaultSelected={parkingOptions}
                                onChange={(values) => setParkingOptions(values)}
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
                            <Switch
                                label="Additional Info Visible Before Hiring"
                                checked={additionalInfoBeforeHiring}
                                onChange={(value) => setAdditionalInfoBeforeHiring(value)}
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
              <Button size="sm" onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>
      </>
  );
}