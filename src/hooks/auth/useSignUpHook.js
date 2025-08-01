import { useRef, useState } from "react";

const useSignupForm = () => {
    const recaptchaRef = useRef(null);

    const [step, setStep] = useState(1);
    const [userType, setUserType] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRetyping, setPasswordRetyping] = useState("");
    const [industryType, setIndustryType] = useState(""); // for locum
    const [professionalRole, setProfessionalRole] = useState(""); // for locum
    const [customIndustryType, setCustomIndustryType] = useState("");
    const [businessSector, setBusinessSector] = useState(""); // for client
    const [customInstitutionType, setCustomInstitutionType] = useState('');
    const [institutionType, setInstitutionType] = useState(""); // for client
    const [institutionName, setInstitutionName] = useState(""); // for client
    const [clientType, setClientType] = useState(""); // for client
    const [clinicSpecialties, setClinicSpecialties] = useState([]); // for private clinic
    const [pharmacyType, setPharmacyType] = useState(""); // for pharmacy
    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otp, setOtp] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [otpError, setOtpError] = useState("");
    const [otpLoading, setOtpLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);

    return {
        recaptchaRef,
        step, setStep,
        userType, setUserType,
        fullName, setFullName,
        email, setEmail,
        password, setPassword,
        passwordRetyping, setPasswordRetyping,
        industryType, setIndustryType,
        professionalRole, setProfessionalRole,
        customIndustryType, setCustomIndustryType,
        businessSector, setBusinessSector,
        customInstitutionType, setCustomInstitutionType,
        institutionType, setInstitutionType,
        institutionName, setInstitutionName,
        clientType, setClientType,
        clinicSpecialties, setClinicSpecialties,
        pharmacyType, setPharmacyType,
        recaptchaToken, setRecaptchaToken,
        error, setError,
        loading, setLoading,
        showOtpModal, setShowOtpModal,
        otp, setOtp,
        userEmail, setUserEmail,
        otpError, setOtpError,
        otpLoading, setOtpLoading,
        resendLoading, setResendLoading
    };
};

export default useSignupForm;
