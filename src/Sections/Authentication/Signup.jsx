import React, { useState, useRef } from "react";
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

const Signup = () => {
  const navigate = useNavigate();
  const {
    recaptchaRef,
    step, setStep,
    userType, setUserType,
    fullName, setFullName,
    email, setEmail,
    password, setPassword,
    industryType, setIndustryType,
    businessSector, setBusinessSector,
    institutionType, setInstitutionType,
    recaptchaToken, setRecaptchaToken,
    error, setError,
    loading, setLoading,
    showOtpModal, setShowOtpModal,
    otp, setOtp,
    userEmail, setUserEmail,
    otpError, setOtpError,
    otpLoading, setOtpLoading,
    resendLoading, setResendLoading
  } = useSignupForm();

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
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
      setError("Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    const trimmedEmail = email?.trim() || "";
    const trimmedPassword = password?.trim() || "";

    const formData = {
      user_type: userType,
      full_name: fullName,
      email: trimmedEmail,
      password: trimmedPassword,
      recaptcha_token: recaptchaToken,
      ...(userType === "locum" && { industry_type: "healthcare" }),
      ...(userType === "client" && {
        business_sector: "pharmacy",
        institution_type: "private",
      }),
    };

    try {
      await signup(formData);
      setUserEmail(trimmedEmail);
      setShowOtpModal(true)
      setStep(2);
    } catch (error) {
      console.error("Signup error:", error);
      setError(error?.response?.data?.message || error.message || "Signup failed.");
    } finally {
      setLoading(false);
      recaptchaRef?.current?.reset?.();
    }
  };

  const handleOtpVerification = async () => {
    setOtpError("");
    setOtpLoading(true);

    try {
      const res = await verifyOtp({ email: userEmail, otp_code: otp });
      if (res.success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      setOtpError(error.message);
    } finally {
      setOtpLoading(false);
    }
  };


  const handleResendOtp = async () => {
    setResendLoading(true);

    try {
      await resendOtp(userEmail);
      alert("A new OTP has been sent to your email.");
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setResendLoading(false);
    }
  };

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
                    Sign up as an Owner/Manager
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

                {userType === "locum" && (
                    <ScrollAnimate delay={600}>
                      <div className="form-group">
                        <label>Industry Type</label>
                        <input
                            type="text"
                            placeholder="e.g. Nursing, Dental, etc."
                            required
                            value={industryType}
                            onChange={(e) => setIndustryType(e.target.value)}
                        />
                      </div>
                    </ScrollAnimate>
                )}

                {userType === "client" && (
                    <>
                      <ScrollAnimate delay={600}>
                        <div className="form-group">
                          <label>Business Sector</label>
                          <input
                              type="text"
                              placeholder="e.g. Hospital, Clinic, etc."
                              required
                              value={businessSector}
                              onChange={(e) => setBusinessSector(e.target.value)}
                          />
                        </div>
                      </ScrollAnimate>
                      <ScrollAnimate delay={620}>
                        <div className="form-group">
                          <label>Institution Type</label>
                          <input
                              type="text"
                              placeholder="e.g. Private, Public, etc."
                              required
                              value={institutionType}
                              onChange={(e) => setInstitutionType(e.target.value)}
                          />
                        </div>
                      </ScrollAnimate>
                    </>
                )}

                <ScrollAnimate delay={650}>
                  <div className="flex justify-center">
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lc9tc0qAAAAABOJlCLavpJkc264lfgpmCK3TEkt"
                        onChange={handleRecaptchaChange}
                    />
                  </div>
                </ScrollAnimate>

                <ScrollAnimate delay={700}>
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

          <ScrollAnimate delay={750}>
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
              <OtpModal email={userEmail} isOpen={showOtpModal} onClose={setShowOtpModal} onVerify={handleOtpVerification} />
        )}
      </>
  );
};

export default Signup;
