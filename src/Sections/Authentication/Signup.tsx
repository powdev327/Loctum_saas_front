import React, {useEffect} from "react";
import { useNavigate, NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthRightSection from "./AuthRightSection";
import AuthFormWrapper from "./AuthFormWrapper";
import ScrollAnimate from "../../Components/ScrollAnimate";
import GoogleIcon from "../../assets/images/auth-and-utility/google.svg";
import FacebookIcon from "../../assets/images/auth-and-utility/facebook.svg";
import useSignupForm from "../../hooks/auth/useSignUpHook.js";
import {resendOtp, signup, verifyOtp} from "../../services/auth/signupService.js";
import OtpModal from "./OtpModal.jsx";
import {industries, professionalRoles} from "../../config/locum/industryList.js";
import {businessList} from "../../config/owner/businessList.js";
import {institutionListType, clinicSpecialties as clinicSpecialtyOptions, pharmacyTypes} from "../../config/owner/institutionList.js";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const {
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
      userEmail, setUserEmail,
      setOtpLoading,
      resendLoading, setResendLoading,
  } = useSignupForm();

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSpecialtyChange = (specialty) => {
    setClinicSpecialties(prev => {
      if (prev.includes(specialty)) {
        return prev.filter(s => s !== specialty);
      } else {
        return [...prev, specialty];
      }
    });
  };

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setStep(2);
  };

  const handleGoBack = () => {
    setStep(1);
    setUserType("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    const trimmedEmail = email?.trim() || "";
    const trimmedPassword = password?.trim() || "";

    if (password !== passwordRetyping) {
      toast.error("Passwords do not match")
      setLoading(false);
      return;
    }

    const formData = {
      user_type: userType,
      full_name: fullName,
      email: trimmedEmail,
      password: trimmedPassword,
      recaptcha_token: recaptchaToken,
      ...(userType === "locum" && { 
        industry_type: industryType === 'Other' ? customIndustryType : industryType,
        professional_role: professionalRole
      }),
      ...(userType === "client" && {
        institution_name: institutionName,
        client_type: clientType,
        ...(clientType === "Private Clinic/Practice" && { clinic_specialties: clinicSpecialties }),
        ...(clientType === "Pharmacy" && { pharmacy_type: pharmacyType }),
      }),
    };
    if (
        !trimmedEmail ||
        !trimmedPassword ||
        !passwordRetyping ||
        !fullName ||
        !userType ||
        (userType === "locum" && !industryType) ||
        (userType === "locum" && !professionalRole) ||
        (userType === "client" && !institutionName) ||
        (userType === "client" && !clientType) ||
        (userType === "client" && clientType === "Private Clinic/Practice" && clinicSpecialties.length === 0) ||
        (userType === "client" && clientType === "Pharmacy" && !pharmacyType) ||
        (industryType === 'Other' && !customIndustryType)
    ) {
      toast.error("All fields are required")
      setLoading(false);
      return;
    }

    try {
      const { message } = await signup(formData);
      if (message) {
        setUserEmail(trimmedEmail);
        setShowOtpModal(true);
        localStorage.setItem("pendingOtpVerification", "true");
        localStorage.setItem("pendingEmail", trimmedEmail);
        setStep(2);
      }
    } catch (error) {
      const message = error?.response?.data?.detail || "Signup failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false)
      recaptchaRef?.current?.reset?.();
    }
  };

  const handleOtpVerification = async (otp) => {
    setOtpLoading(true);
    try {
      const res = await verifyOtp(userEmail, otp);
      if (res.message) {
        localStorage.removeItem("pendingOtpVerification");
        localStorage.removeItem("pendingEmail");
        setShowOtpModal(false);
        navigate('/sign-in');
        return true;
      }
    } catch (error) {
      toast.error(error?.response?.data?.detail);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);
    try {
      await resendOtp(userEmail);
      toast.success("A new OTP has been sent to your email.");
    } catch (error) {
      toast.error(error?.response?.data?.detail);
    } finally {
      setResendLoading(false);
    }
  };

  const handleCloseOtpModal = () => {
    localStorage.removeItem("pendingOtpVerification");
    localStorage.removeItem("pendingEmail");
    setShowOtpModal(false);
  };


  useEffect(() => {
    const shouldShowOtp = localStorage.getItem("pendingOtpVerification");
    const savedEmail = localStorage.getItem("pendingEmail");

    if (shouldShowOtp === "true" && savedEmail) {
      setUserEmail(savedEmail);
      setShowOtpModal(true);
    }
  }, []);

  return (
      <>
      <AuthenticationStyleWrapper>
        <AuthFormWrapper handleGoBack={handleGoBack} step={step}>
          <ScrollAnimate delay={200}>
            <h2>Hi there!</h2>
            <h4 className="dm-sans">Get started with your free account 🎯</h4>
          </ScrollAnimate>

          {step === 1 ? (
              <div className="space-y-4">
                <ScrollAnimate delay={250}>
                  <button
                      className="secondary-btn"
                      onClick={() => handleUserTypeSelection("locum")}
                  >
                    Sign up as a Healthcare Professional
                  </button>
                </ScrollAnimate>
                <ScrollAnimate delay={300}>
                  <button
                      className="secondary-btn"
                      onClick={() => handleUserTypeSelection("client")}
                  >
                    Sign up as a Manager/Owner
                  </button>
                </ScrollAnimate>
              </div>
          ) : (
              <form onSubmit={handleSubmit}>
                <ScrollAnimate delay={350}>
                  <button className="secondary-btn">
                    <img src={GoogleIcon} alt="icon" /> Sign up with Google
                  </button>
                </ScrollAnimate>
                <ScrollAnimate delay={400}>
                  <button className="secondary-btn">
                    <img src={FacebookIcon} alt="icon" /> Sign up with Facebook
                  </button>
                </ScrollAnimate>

                <ScrollAnimate delay={450}>
                  <div className="or-section"><p className="mb-0">or</p></div>
                </ScrollAnimate>

                <ScrollAnimate delay={500}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        placeholder="e.g. John Doe"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </ScrollAnimate>

                <ScrollAnimate delay={500}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                        type="email"
                        placeholder="e.g. example@mail.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </ScrollAnimate>

                <ScrollAnimate delay={550}>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        required
                        minLength="8"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </ScrollAnimate>

                <ScrollAnimate delay={550}>
                  <div className="form-group">
                    <label>Retyping Password</label>
                    <input
                        type="password"
                        placeholder="********"
                        required
                        minLength="8"
                        value={passwordRetyping}
                        onChange={(e) => setPasswordRetyping(e.target.value)}
                    />
                  </div>
                </ScrollAnimate>

                {userType === "locum" && (
                    <>
                    <ScrollAnimate delay={620}>
                      <div className="form-group">
                        <label>Professional Industry / Sector</label>
                        <select
                            value={industryType}
                            onChange={(e) => {
                              setIndustryType(e.target.value);
                              setProfessionalRole(""); // Reset role when industry changes
                            }}
                            required
                        >
                          <option value="" disabled>Choose one industry from:</option>
                          {industries.map((industry) => (
                              <option key={industry} value={industry}>
                                {industry}
                              </option>
                          ))}
                        </select>
                      </div>
                    </ScrollAnimate>

                    {industryType && (
                        <ScrollAnimate delay={640}>
                          <div className="form-group">
                            <label>Professional Role / Type</label>
                            <select
                                value={professionalRole}
                                onChange={(e) => setProfessionalRole(e.target.value)}
                                required
                            >
                              <option value="" disabled>Select your professional role</option>
                              {professionalRoles[industryType]?.map((role) => (
                                  <option key={role} value={role}>
                                    {role}
                                  </option>
                              ))}
                            </select>
                          </div>
                        </ScrollAnimate>
                    )}

                    {industryType === 'Other' && (
                        <ScrollAnimate delay={620}>
                          <div className="form-group">
                            <label>Specific Industry</label>
                            <input
                                type="text"
                                value={customIndustryType}
                                onChange={(e) => setCustomIndustryType(e.target.value)}
                                placeholder="Enter institution type"
                                required
                            />
                          </div>
                        </ScrollAnimate>
                   )}
                    </>
                )}

                {userType === "client" && (
                    <>
                      <ScrollAnimate delay={600}>
                        <div className="form-group">
                          <label>Institution / Company Name</label>
                          <input
                              type="text"
                              placeholder="e.g. ABC Medical Clinic"
                              required
                              value={institutionName}
                              onChange={(e) => setInstitutionName(e.target.value)}
                          />
                        </div>
                      </ScrollAnimate>

                      <ScrollAnimate delay={620}>
                        <div className="form-group">
                          <label>Client Type</label>
                          <select
                              value={clientType}
                              onChange={(e) => {
                                setClientType(e.target.value);
                                setClinicSpecialties([]); // Reset specialties when type changes
                                setPharmacyType(""); // Reset pharmacy type when type changes
                              }}
                              required
                          >
                            <option value="" disabled>Choose one of:</option>
                            {institutionListType.map((type) => (
                                <option key={type} value={type}>
                                  {type}
                                </option>
                            ))}
                          </select>
                        </div>
                      </ScrollAnimate>

                      {clientType === "Private Clinic/Practice" && (
                          <ScrollAnimate delay={640}>
                            <div className="form-group">
                              <label>Specialty (Multi-Select)</label>
                              <div className="mt-2 space-y-3">
                                {clinicSpecialtyOptions.map((specialty) => (
                                    <label key={specialty} className="flex items-center cursor-pointer">
                                      <input
                                          type="checkbox"
                                          checked={clinicSpecialties.includes(specialty)}
                                          onChange={() => handleSpecialtyChange(specialty)}
                                          className="mr-3 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                      />
                                      <span className="text-sm text-gray-700">{specialty}</span>
                                    </label>
                                ))}
                              </div>
                              {clinicSpecialties.length > 0 && (
                                <div className="mt-2 text-sm text-blue-600">
                                  Selected: {clinicSpecialties.join(', ')}
                                </div>
                              )}
                            </div>
                          </ScrollAnimate>
                      )}

                      {clientType === "Pharmacy" && (
                          <ScrollAnimate delay={640}>
                            <div className="form-group">
                              <label>Pharmacy Type</label>
                              <select
                                  value={pharmacyType}
                                  onChange={(e) => setPharmacyType(e.target.value)}
                                  required
                              >
                                <option value="" disabled>Select pharmacy type</option>
                                {pharmacyTypes.map((type) => (
                                    <option key={type} value={type}>
                                      {type}
                                    </option>
                                ))}
                              </select>
                            </div>
                          </ScrollAnimate>
                      )}
                    </>
                )}


                <ScrollAnimate delay={680}>
                  <div className="flex justify-center">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lc9tc0qAAAAABOJlCLavpJkc264lfgpmCK3TEkt"
                        onChange={handleRecaptchaChange}
                    />
                  </div>
                </ScrollAnimate>

                <ScrollAnimate delay={720}>
                  {error && <p className="text-red-500">{error}</p>}
                  <button
                      type="submit"
                      className={`form-primary-btn ${loading ? "bg-gray-400 cursor-not-allowed" : ""}`}
                      disabled={loading}
                  >
                    {loading ? "Processing..." : "Sign Up"}
                  </button>
                </ScrollAnimate>

              </form>
          )}

          <ScrollAnimate delay={770}>
            <p className="mt-5">
              Already have an account? <NavLink to="/sign-in">Log in now!</NavLink>
            </p>
            <p className="mb-0">
              By signing up, you agree to our <NavLink to="/terms">Terms</NavLink> &{" "}
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>.
            </p>
          </ScrollAnimate>
        </AuthFormWrapper>

        <AuthRightSection />

      </AuthenticationStyleWrapper>
        {showOtpModal && (
            <OtpModal
                email={userEmail}
                isOpen={showOtpModal}
                onClose={handleCloseOtpModal}
                onVerify={handleOtpVerification}
                onResend={handleResendOtp}
                resendLoading={resendLoading}
            />
        )}
      </>
  );
};

export default Signup;
