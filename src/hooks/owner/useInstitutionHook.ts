import { useState } from "react";

const useInstitutionForm = () => {
    const [institutionType, setInstitutionType] = useState<string>("pharmacy");
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
    const [typeOfPharmacy, setTypeOfPharmacy] = useState<string>("");
    const [pharmacyPhoneNumber, setPharmacyPhoneNumber] = useState<string>("");
    const [weekdayTrafficPatients, setWeekdayTrafficPatients] = useState<string>("");
    const [weekendTrafficPatients, setWeekendTrafficPatients] = useState<string>("");
    const [feesEnabled, setFeesEnabled] = useState<boolean>(false);
    const [maxTravelExpense, setMaxTravelExpense] = useState<string>("");
    const [perDiemPerDay, setPerDiemPerDay] = useState<string>("");
    const [accommodationCostPerNight, setAccommodationCostPerNight] = useState<string>("");
    const [typeOfClinic, setTypeOfClinic] = useState<string>("");
    const [clinicPhoneNumber, setClinicPhoneNumber] = useState<string>("");
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
        setInstitutionType("pharmacy");
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
        setTypeOfPharmacy("");
        setPharmacyPhoneNumber("");
        setWeekdayTrafficPatients("");
        setWeekendTrafficPatients("");
        setFeesEnabled(false);
        setMaxTravelExpense("");
        setPerDiemPerDay("");
        setAccommodationCostPerNight("");
        setTypeOfClinic("");
        setClinicPhoneNumber("");
        setChartingSystems([]);
        setUltrasonicTypes([]);
        setRadiographyTypes([]);
        setParkingOptions([]);
        setNumberOfCurrentDentists("");
        setNumberOfCurrentHygienists("");
        setAdditionalInfoBeforeHiring(false);
        setPhoneError(null);
    };

    return {
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
    };
};

export default useInstitutionForm;