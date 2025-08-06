import { useNavigate, useSearchParams } from "react-router-dom";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthFormWrapper from "./AuthFormWrapper";
import AuthRightSection from "./AuthRightSection";
import ScrollAnimate from "../../Components/ScrollAnimate";
import useResetPassword from "../../hooks/auth/useResetPasswordHook.js";
import {requestResetPassword} from "../../services/auth/forgotPasswordService.js";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get('token');
  const { t } = useTranslation();
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
      setError(t('auth.passwordMinLength'));
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast.error(t('auth.passwordsDoNotMatch'));
      return false;
    }
    return true;
  };


  const handleReset = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setButtonText(t('auth.processing'));

    if (!validatePasswords()) {
      setIsSubmitting(false);
      setButtonText(t('auth.resetPassword'));
      return;
    }

    try {
      await requestResetPassword(token, newPassword)
      setButtonText(t('auth.passwordResetSuccess'));
      toast.success(t('auth.passwordResetSuccessMessage'));
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } catch (err) {
      toast.error(error?.response?.data?.detail);
      setButtonText(t('auth.resetPassword'));
      setIsSubmitting(false);
    }
  };

  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate>
          <h2>{t('auth.resetYourPassword')}</h2>
          <h4 className="dm-sans">{t('auth.enterNewPassword')}</h4>
        </ScrollAnimate>

        <form onSubmit={handleReset}>
          <ScrollAnimate>
            <div className="form-group">
              <label>{t('auth.newPassword')}</label>
              <input
                type="password"
                value={newPassword}
                required
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder={t('auth.enterNewPasswordPlaceholder')}
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate>
            <div className="form-group">
              <label>{t('auth.confirmNewPassword')}</label>
              <input
                type="password"
                value={confirmPassword}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t('auth.reenterNewPasswordPlaceholder')}
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
