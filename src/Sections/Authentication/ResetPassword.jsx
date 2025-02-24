import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthFormWrapper from "./AuthFormWrapper";
import AuthRightSection from "./AuthRightSection";
import ScrollAnimate from "../../Components/ScrollAnimate";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get('token'); // Get token from URL

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [buttonText, setButtonText] = useState("Reset Password");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePasswords = () => {
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleReset = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    setButtonText("Processing...");

    if (!validatePasswords()) {
      setIsSubmitting(false);
      setButtonText("Reset Password");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/reset-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, new_password: newPassword }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || "An error occurred while resetting password.");
      }

      setButtonText("✅ Password Reset Successfully! Redirecting...");

      // Redirect after 5 seconds
      setTimeout(() => {
        navigate("/sign-in");
      }, 5000);
    } catch (err) {
      setError(err.message);
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

          {/* 🔴 Error Message (if validation or API call fails) */}
          {error && (
            <ScrollAnimate>
              <p className="text-red-500 text-sm">{error}</p>
            </ScrollAnimate>
          )}

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
