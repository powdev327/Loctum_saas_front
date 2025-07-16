import { useState } from "react";

const useInstitutionForm = () => {
    const [businessLegalName, setBusinessLegalName] = useState("");
    const [institutionName, setInstitutionName] = useState("");
    const [typeOfContract, setTypeOfContract] = useState<string[]>([]);
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [software, setSoftware] = useState<string[]>([]);
    const [languages, setLanguages] = useState<string[]>([]);
    const [services, setServices] = useState<string[]>([]);
    const [uploadLogo, setUploadLogo] = useState<File | null>(null);
    const [feesEnabled, setFeesEnabled] = useState(false);
    const [typeOfPharmacy, setTypeOfPharmacy] = useState<string>("");
    const [pharmacyPhoneNumber, setPharmacyPhoneNumber] = useState("");
    const [weekdayTrafficPatients, setWeekdayTrafficPatients] = useState<number | null>(null);
    const [weekendTrafficPatients, setWeekendTrafficPatients] = useState<number | null>(null);
    const [numberOfPharmacists, setNumberOfPharmacists] = useState<number | null>(null);
    const [numberOfAssistants, setNumberOfAssistants] = useState<number | null>(null);
    const [additionalInformation, setAdditionalInformation] = useState("");
    const [typeOfClinic, setTypeOfClinic] = useState("");
    const [clinicPhoneNumber, setClinicPhoneNumber] = useState("");
    const [trafficInWeek, setTrafficInWeek] = useState<number | null>(null);
    const [chartingSystems, setChartingSystems] = useState<string[]>([]);
    const [ultrasonicTypes, setUltrasonicTypes] = useState<string[]>([]);
    const [radiographyTypes, setRadiographyTypes] = useState<string[]>([]);
    const [parkingOptions, setParkingOptions] = useState<string[]>([]);
    const [numberOfCurrentDentists, setNumberOfCurrentDentists] = useState<number | null>(null);
    const [numberOfCurrentHygienists, setNumberOfCurrentHygienists] = useState<number | null>(null);
    const [phoneError, setPhoneError] = useState<string | null>(null);
    const [institutionsList, setInstitutionsList] = useState<{ id: number; data?: any }[]>([{ id: Date.now() }]);

    const resetForm = () => {
        setBusinessLegalName("");
        setInstitutionName("");
        setTypeOfContract([]);
        setAddress("");
        setCity("");
        setProvince("");
        setPostalCode("");
        setSoftware([]);
        setLanguages([]);
        setServices([]);
        setUploadLogo(null);
        setFeesEnabled(false);
        setTypeOfPharmacy("");
        setPharmacyPhoneNumber("");
        setWeekdayTrafficPatients(null);
        setWeekendTrafficPatients(null);
        setNumberOfPharmacists(null);
        setNumberOfAssistants(null);
        setAdditionalInformation("");
        setTypeOfClinic("");
        setClinicPhoneNumber("");
        setTrafficInWeek(null);
        setChartingSystems([]);
        setUltrasonicTypes([]);
        setRadiographyTypes([]);
        setParkingOptions([]);
        setNumberOfCurrentDentists(null);
        setNumberOfCurrentHygienists(null);
        setPhoneError(null);
    };

    return {
        businessLegalName,
        setBusinessLegalName,
        institutionName,
        setInstitutionName,
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
        languages,
        setLanguages,
        services,
        setServices,
        uploadLogo,
        setUploadLogo,
        feesEnabled,
        setFeesEnabled,
        typeOfPharmacy,
        setTypeOfPharmacy,
        pharmacyPhoneNumber,
        setPharmacyPhoneNumber,
        weekdayTrafficPatients,
        setWeekdayTrafficPatients,
        weekendTrafficPatients,
        setWeekendTrafficPatients,
        numberOfPharmacists,
        setNumberOfPharmacists,
        numberOfAssistants,
        setNumberOfAssistants,
        additionalInformation,
        setAdditionalInformation,
        typeOfClinic,
        setTypeOfClinic,
        clinicPhoneNumber,
        setClinicPhoneNumber,
        trafficInWeek,
        setTrafficInWeek,
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
        phoneError,
        setPhoneError,
        institutionsList,
        setInstitutionsList,
        resetForm,
    };
};

export default useInstitutionForm;