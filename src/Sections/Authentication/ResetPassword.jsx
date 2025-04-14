import { useNavigate, useSearchParams } from "react-router-dom";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthFormWrapper from "./AuthFormWrapper";
import AuthRightSection from "./AuthRightSection";
import ScrollAnimate from "../../Components/ScrollAnimate";
import useResetPassword from "../../hooks/auth/useResetPasswordHook.js";
import {requestResetPassword} from "../../services/auth/forgotPasswordService.js";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get('token');
  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    setError,
    buttonText,
    setButtonText,
    isSubmitting,
    setIsSubmitting,
    resetState,
  } = useResetPassword();

  const validatePasswords = () => {
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters long.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match ");
      return false;
    }
    return true;
  };


  const handleReset = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setButtonText("Processing...");

    if (!validatePasswords()) {
      setIsSubmitting(false);
      setButtonText("Reset Password");
      return;
    }

    try {
      await requestResetPassword(token, newPassword)
      setButtonText("✅ Password Reset Successfully! Redirecting...");
      toast.success("Password reset successfully!");
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } catch (err) {
      toast.error(error?.response?.data?.detail);
      setButtonText("Reset Password");
      setIsSubmitting(false);
    }
  };

  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate>
          <h2>Reset Your Password</h2>
          <h4 className="dm-sans">Enter a new password below 🔒</h4>
        </ScrollAnimate>

        <form onSubmit={handleReset}>
          <ScrollAnimate>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                required
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
              />
            </div>
          </ScrollAnimate>


          <ScrollAnimate>
            <button
              type="submit"
              className={`form-primary-btn ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              {buttonText}
            </button>
          </ScrollAnimate>
        </form>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default ResetPassword;
