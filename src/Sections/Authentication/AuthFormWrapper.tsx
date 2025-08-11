import { GoArrowLeft } from "react-icons/go";
import LogoWhite from "../../assets/images/logo/q-logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import ScrollAnimate from "../../Components/ScrollAnimate";
import LanguageSwitcher from "../../Components/LanguageSwitcher.jsx";
import { useTranslation } from "react-i18next";

const AuthFormWrapper = ({ children, handleGoBack, step }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="auth-form-section">
      <div className="auth-page-header">
        <NavLink to="/" className="logo">
          <ScrollAnimate delay={200}>
            <img src={LogoWhite} alt="logo" />
          </ScrollAnimate>
        </NavLink>
        <div className="auth-header-actions">
          <div className="language-switcher-auth">
            <LanguageSwitcher />
          </div>
          <button
            type="button"
            className="back-link"
            onClick={() => {
              if (step > 1 && handleGoBack) {
                handleGoBack(); // Reset user type selection if in signup
              } else {
                navigate("/"); // Take user to Home if already at first step
              }
            }}
          >
            <ScrollAnimate>
              <GoArrowLeft />
              {t('auth.goBack')}
            </ScrollAnimate>
          </button>
        </div>
      </div>
      <div className="auth-content">{children}</div>
    </section>
  );
};

export default AuthFormWrapper;
