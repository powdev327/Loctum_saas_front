import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthFormWrapper from "./AuthFormWrapper";
import AuthRightSection from "./AuthRightSection";
import ScrollAnimate from "../../Components/ScrollAnimate";
import useForgotPassword from "../../hooks/auth/useForgotPasswordHook.js";
import {requestReset} from "../../services/auth/forgotPasswordService.js";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const {
    email,
    setEmail,
    forgotPasswordError,
    setForgotPasswordError,
    showMessage,
    setShowMessage,
    isSubmitting,
    setIsSubmitting,
    resetState,
  } = useForgotPassword();
  const navigate = useNavigate();

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    setForgotPasswordError("");
    setShowMessage(false);
    setIsSubmitting(true);

    try {
      await requestReset(email);
      setShowMessage(true);
      setEmail("");
    } catch (err) {
      setForgotPasswordError('sending email failed');
      toast.error('try to enter your correct email');
      setIsSubmitting(false);
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
                ✅ Email sent! Please check your inbox ...
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
