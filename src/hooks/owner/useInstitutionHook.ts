import { useState } from "react";

const useInstitutionForm = () => {
    const [businessLegalName, setBusinessLegalName] = useState<string>("");
    const [pharmacyOrClinicName, setPharmacyOrClinicName] = useState<string>("");
    const [typeOfContract, setTypeOfContract] = useState<string[]>([]);
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [province, setProvince] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [software, setSoftware] = useState<string[]>([]);
    const [languagesSpoken, setLanguagesSpoken] = useState<string[]>([]);
    const [servicesOffered, setServicesOffered] = useState<string[]>([]);
    const [logo, setLogo] = useState<File | null>(null);
    const [feesEnabled, setFeesEnabled] = useState<boolean>(false);

    const [typeOfPharmacy, setTypeOfPharmacy] = useState<string>("");
    const [pharmacyPhoneNumber, setPharmacyPhoneNumber] = useState<string>("");
    const [weekdayTrafficPatients, setWeekdayTrafficPatients] = useState<string>("");
    const [weekendTrafficPatients, setWeekendTrafficPatients] = useState<string>("");
    const [number_of_pharmacists, setNumber_of_pharmacists] = useState<string>("");
    const [number_of_assistants, setNumber_of_assistants] = useState<string>("");
    const [additional_information, setAdditional_information] = useState<string>("");
    const [typeOfClinic, setTypeOfClinic] = useState<string>("");
    const [clinicPhoneNumber, setClinicPhoneNumber] = useState<string>("");
    const [traffic_in_week, setTraffic_in_week] = useState<number>(0);
    const [chartingSystems, setChartingSystems] = useState<string[]>([]);
    const [ultrasonicTypes, setUltrasonicTypes] = useState<string[]>([]);
    const [radiographyTypes, setRadiographyTypes] = useState<string[]>([]);
    const [parkingOptions, setParkingOptions] = useState<string[]>([]);
    const [numberOfCurrentDentists, setNumberOfCurrentDentists] = useState<string>("");
    const [numberOfCurrentHygienists, setNumberOfCurrentHygienists] = useState<string>("");
    const [additionalInfoBeforeHiring, setAdditionalInfoBeforeHiring] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<string | null>(null);
    const [institutionsList, setInstitutionsList] = useState<Array<{ id: number; data?: any }>>([{ id: Date.now() }]);

    const resetForm = () => {
        setBusinessLegalName("");
        setPharmacyOrClinicName("");
        setTypeOfContract([]);
        setAddress("");
        setCity("");
        setProvince("");
        setPostalCode("");
        setSoftware([]);
        setLanguagesSpoken([]);
        setServicesOffered([]);
        setLogo(null);
        setNumber_of_pharmacists('')
        setNumber_of_assistants('')
        setAdditional_information('')
        setTypeOfPharmacy("");
        setPharmacyPhoneNumber("");
        setWeekdayTrafficPatients("");
        setWeekendTrafficPatients("");
        setFeesEnabled(false);

        setTypeOfClinic("");
        setClinicPhoneNumber("");
        setChartingSystems([]);
        setUltrasonicTypes([]);
        setRadiographyTypes([]);
        setParkingOptions([]);
        setNumberOfCurrentDentists("");
        setTraffic_in_week(0)
        setNumberOfCurrentHygienists("");
        setAdditionalInfoBeforeHiring(false);
        setPhoneError(null);
    };

    return {

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
        traffic_in_week, setTraffic_in_week,
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

        number_of_pharmacists, setNumber_of_pharmacists,
        number_of_assistants, setNumber_of_assistants,
        additional_information, setAdditional_information,
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
    };
};

export default useInstitutionForm;