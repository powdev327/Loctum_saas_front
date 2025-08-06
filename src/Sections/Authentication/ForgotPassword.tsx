import { NavLink, useNavigate } from "react-router-dom";
import AuthenticationStyleWrapper from "./Authentication.style";
import AuthFormWrapper from "./AuthFormWrapper";
import AuthRightSection from "./AuthRightSection";
import ScrollAnimate from "../../Components/ScrollAnimate";
import useForgotPassword from "../../hooks/auth/useForgotPasswordHook.js";
import {requestReset} from "../../services/auth/forgotPasswordService.js";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const { t } = useTranslation();
  const {
    email,
    setEmail,
    showMessage,
    setShowMessage,
    isSubmitting,
    setIsSubmitting,
    resetState,
  } = useForgotPassword();
  const navigate = useNavigate();

  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    setShowMessage(false);
    setIsSubmitting(true);

    try {
      await requestReset(email);
      toast.success(t('auth.emailSentCheckInbox'), {
        duration: 4000,
      })
      setIsSubmitting(false);
      setEmail("");
    } catch (err) {
      toast.error(err?.response?.data?.detail);
      setIsSubmitting(false);
    }
  };

  return (
    <AuthenticationStyleWrapper>
      <AuthFormWrapper>
        <ScrollAnimate>
          <h2>{t('auth.hiThere')}</h2>
          <h4 className="dm-sans">{t('auth.resetLinkWillBeSent')}</h4>
        </ScrollAnimate>

        <form onSubmit={handleForgotPasswordSubmit}>
          <ScrollAnimate>
            <div className="form-group">
              <label>{t('auth.emailAddress')}</label>
              <input
                value={email}
                required
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('auth.emailPlaceholder')}
              />
            </div>
          </ScrollAnimate>


          <ScrollAnimate>
            <button
              type="submit"
              className={`form-primary-btn ${
                isSubmitting ? "bg-gray-400 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting} // Disables button when submitting
            >
              {isSubmitting ? t('auth.processing') : t('auth.sendResetMail')}
            </button>
          </ScrollAnimate>

          {/* ✅ Success Message (Appears under the button) */}
          {showMessage && (
            <ScrollAnimate>
              <p className="text-green-600 text-sm mt-3">
                {t('auth.emailSentCheckInbox')}
              </p>
            </ScrollAnimate>
          )}

          <ScrollAnimate>
            <p className="mt-5">
              {t('auth.rememberPassword')}&nbsp;
              <NavLink to="/sign-in">{t('auth.loginNow')}</NavLink>
            </p>
          </ScrollAnimate>
        </form>
      </AuthFormWrapper>

      <AuthRightSection />
    </AuthenticationStyleWrapper>
  );
};

export default ForgotPassword;
