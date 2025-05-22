import {Modal} from "../../ui/modal";
import Label from "../../form/Label.tsx";
import Input from "../../form/input/InputField.tsx";
import MultiSelect from "../../form/MultiSelect.tsx";
import {typeContractList} from "../../../config/owner/typeContractList.ts";
import Select from "../../form/Select.tsx";
import {provincesList} from "../../../config/owner/provincesList.ts";
import {softwareList} from "../../../config/owner/softwareList.ts";
import {languagesList} from "../../../config/owner/languagesList.ts";
import {clinicServicesList} from "../../../config/owner/clinicInstitution/clinicServicesList.ts";
import Switch from "../../form/switch/Switch.tsx";
import {typePharmacyInstitutionList} from "../../../config/owner/pharmacyInstitution/typePharmacyInstitutionList.ts";
import {typeClinicInstitutionList} from "../../../config/owner/clinicInstitution/typeClinicInstitutionList.ts";
import {systemOdontogramList} from "../../../config/owner/clinicInstitution/systemOdontogramList.ts";
import {typeOfUltrasoundList} from "../../../config/owner/clinicInstitution/typeOfUltrasoundList.ts";
import {typeRadiographicList} from "../../../config/owner/clinicInstitution/typeRadiographicList.ts";
import {parkingList} from "../../../config/owner/clinicInstitution/clinicParkingList.ts";
import Button from "../../ui/button/Button.tsx";
import useInstitutionForm from "../../../hooks/owner/useInstitutionHook.ts";
import toast from "react-hot-toast";
import {useClient} from "../../../context/owner/ClientContext.tsx";
import {useEffect, useState} from "react";

export function ClientInstitutionUpdate({ isOpen, closeModal, institution }) {
    const {updateInstitution} = useClient();
    const [institutionsObj, setInstitutionsObj] = useState(null);


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
        phoneError,setPhoneError,
        number_of_pharmacists, setNumber_of_pharmacists,
        number_of_assistants, setNumber_of_assistants,
        additional_information, setAdditional_information,
        traffic_in_week, setTraffic_in_week,
        resetForm
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
    }

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
        resetForm()

        const errors = validateForm();
        if (errors.length > 0) {
            errors.forEach((error) => toast.error(error));
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
                    traffic_in_week: traffic_in_week,
                    additional_info_visible_before: additionalInfoBeforeHiring,
                },
        };

        try {
            const formData = new FormData();
            if (logo instanceof File) {
                formData.append("logo", logo);
            }
            formData.append("institution", JSON.stringify(currentInstitutionData));

            await updateInstitution(institution?.id, formData, closeModal);
            setInstitutionsObj(currentInstitutionData);
        } catch (error) {
            console.error("Error saving institutions:", error);
            toast.error(`Failed to save institution: ${error?.response?.data?.detail || "Unknown error"}`);
        }
    };



    return(
        <Modal isOpen={isOpen} onClose={closeModal} className="max-w-[700px] m-4">
            <div className="relative w-full p-4 overflow-y-auto bg-white no-scrollbar rounded-3xl dark:bg-gray-900 lg:p-11">
                <div className="custom-scrollbar h-[500px] overflow-y-auto px-2 pb-3">
                    <div  className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-center mb-4">

                            <h5 className="text-lg font-medium text-gray-800 dark:text-white/90">Update {institution?.name}</h5>

                        </div>

                        <div className="mt-7">
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
                                    <Label>{institution?.institution_type === "pharmacy" ? "Name of Pharmacy" : "Name of Clinic"}</Label>
                                    <Input
                                        type="text"
                                        placeholder={institution?.institution_type === "pharmacy" ? "Pharmacy Name..." : "Clinic Name..."}
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
                                                setLogo(null);
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

                                <div className="col-span-2 flex justify-between">
                                    <Switch
                                        label="Fees Enabled (Yes/No)"
                                        checked={feesEnabled}
                                        onChange={(value) => setFeesEnabled(value)}
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
                                            {phoneError && institution?.institution_type === "pharmacy" && (
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

                                        <div className="col-span-2 ">
                                            <Label>Additional Information (Optional)</Label>
                                            <Input
                                                type="text"
                                                value={additional_information}
                                                onChange={(e) => setAdditional_information(e.target.value)}
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
                                            {phoneError && institution?.institution_type === "dental_clinic" && (
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

                    <Button size="sm" variant="outline" onClick={closeModal}>
                        Close
                    </Button>
                    <Button size="sm" onClick={handleSave}>
                        Save Changes
                    </Button>
                </div>
            </div>
        </Modal>


    )
}