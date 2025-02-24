import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthFormWrapper from "./AuthFormWrapper";
import AuthRightSection from "./AuthRightSection";
import ScrollAnimate from "../../Components/ScrollAnimate";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Tracks button state
  const navigate = useNavigate();

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    setForgotPasswordError("");
    setShowMessage(false);
    setIsSubmitting(true); // Disable button

    try {
      const response = await fetch("http://127.0.0.1:8000/api/request-password-reset/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Failed to send reset email");
      }

      setShowMessage(true); // Show success message
      setEmail(""); // Clear input field

      // Redirect after 5 seconds
      setTimeout(() => {
        navigate("/sign-in");
      }, 5000);
    } catch (err) {
      setForgotPasswordError(err.message);
      setIsSubmitting(false); // Re-enable button on error
    }
  };

  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate>
          <h2>Hi there!</h2>
          <h4 className="dm-sans">Reset link will be sent to your email 📨</h4>
        </ScrollAnimate>

        <form onSubmit={handleForgotPasswordSubmit}>
          <ScrollAnimate>
            <div className="form-group">
              <label>Email address</label>
              <input
                value={email}
                required
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. example@mail.com"
              />
            </div>
          </ScrollAnimate>

          {/* 🔴 Error Message (if request fails) */}
          {forgotPasswordError && (
            <ScrollAnimate>
              <p className="text-red-500 text-sm">{forgotPasswordError}</p>
            </ScrollAnimate>
          )}

          <ScrollAnimate>
            <button
              type="submit"
              className={`form-primary-btn ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting} // Disables button when submitting
            >
              {isSubmitting ? "Processing..." : "Send me reset mail"}
            </button>
          </ScrollAnimate>

          {/* ✅ Success Message (Appears under the button) */}
          {showMessage && (
            <ScrollAnimate>
              <p className="text-green-600 text-sm mt-3">
                ✅ Email sent! Please check your inbox. Redirecting to login...
              </p>
            </ScrollAnimate>
          )}

          <ScrollAnimate>
            <p className="mt-5">
              Remember your password?&nbsp;
              <NavLink to="/sign-in">Log in now!</NavLink>
            </p>
          </ScrollAnimate>
        </form>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default ForgotPassword;
