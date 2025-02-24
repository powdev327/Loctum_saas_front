import React, { useState, useRef } from "react";
import { useNavigate, NavLink  } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthRightSection from "./AuthRightSection";
import AuthFormWrapper from "./AuthFormWrapper";
import ScrollAnimate from "../../Components/ScrollAnimate";
import GoogleIcon from "../../assets/images/auth-and-utility/google.svg";
import FacebookIcon from "../../assets/images/auth-and-utility/facebook.svg";

const Signup = () => {
  const navigate = useNavigate();
  const recaptchaRef = useRef(null);

  // Multi-step signup state
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

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

    const formData = {
      user_type: userType,
      email: email.trim(),
      password: password.trim(),
      recaptcha_token: recaptchaToken,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Signup failed.");

      setUserEmail(email);
      setShowOtpModal(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      recaptchaRef.current.reset();
    }
  };

  const handleOtpVerification = async () => {
    setOtpError("");
    setOtpLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/verify-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, otp_code: otp }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "OTP verification failed.");

      setShowOtpModal(false);
      alert("Account verified successfully! You can now log in.");
      navigate("/sign-in");
    } catch (err) {
      setOtpError(err.message);
    } finally {
      setOtpLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setResendLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/resend-otp/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || "Failed to resend OTP");

      alert("A new OTP has been sent to your email.");
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper handleGoBack={() => {
         setStep(1);
         setUserType("");
      }} step={step}>
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
              <div className="or-section">
                <p className="mb-0">or</p>
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

            <ScrollAnimate delay={600}>
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6Lc9tc0qAAAAABOJlCLavpJkc264lfgpmCK3TEkt"
                  onChange={handleRecaptchaChange}
                />
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={650}>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className={`form-primary-btn ${
                  loading ? "bg-gray-400 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Processing..." : "Sign Up"}
              </button>
            </ScrollAnimate>
          </form>
        )}

        <ScrollAnimate delay={700}>
          <p className="mt-5">
            Already have an account?&nbsp;
            <NavLink to="/sign-in">Log in now!</NavLink>
          </p>
          <p className="mb-0">
            By signing up, you agree to our <NavLink to="/terms">Terms</NavLink>
            & <NavLink to="/privacy-policy">Privacy Policy.</NavLink>
          </p>
        </ScrollAnimate>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default Signup;
