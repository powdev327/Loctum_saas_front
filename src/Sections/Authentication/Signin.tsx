import AuthenticationStyleWrapper from "./Authentication.style";
import { GoArrowLeft } from "react-icons/go";
import LogoWhite from "../../assets/images/logo/q-logo.svg";
import LanguageSwitcher from "../../Components/LanguageSwitcher.jsx";
import GoogleIcon from "../../assets/images/auth-and-utility/google.svg";
import FacebookIcon from "../../assets/images/auth-and-utility/facebook.svg";
import {NavLink, useNavigate} from "react-router-dom";
import ScrollAnimate from "../../Components/ScrollAnimate";
import login from "../../services/auth/loginService.js";
import useLoginHook from "../../hooks/auth/useLoginHook.js";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Signin = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const {
    email,
    setEmail,
    password,
    setPassword,
    setLoading,
    userType,
    setUserType,
  } = useLoginHook();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await login({ email, password, user_type: userType });

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user_type", data.user_type || "");

      navigate(data.user_type === "client" ? "/dashboard" : "/analytics");
    } catch (err) {
      toast.error(err?.response?.data?.detail, {
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthenticationStyleWrapper>
      <div className={`auth-form-section ${userType === 'locum' ? 'professional-signup' : userType === 'client' ? 'institution-signup' : 'default-signup'}`}>
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
              onClick={() => navigate("/")}
            >
              <ScrollAnimate>
                <GoArrowLeft />
                <span className="back-link-text">{t('auth.goBack')}</span>
              </ScrollAnimate>
            </button>
          </div>
        </div>
        
        <div className="auth-content">
          <form onSubmit={handleSubmit}>
            <ScrollAnimate delay={200}>
              <h4 className="dm-sans">{t('auth.signInToAccount')}</h4>
            </ScrollAnimate>

          <ScrollAnimate delay={250}>
            <div className="form-group">
              <label>{t('auth.selectUserType')}</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="" disabled>{t('auth.chooseUserType')}</option>
                <option value="locum">{t('auth.healthcareProfessional')}</option>
                <option value="client">{t('auth.institution')}</option>
              </select>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={300}>
            <div className="form-group">
              <label>{t('auth.emailAddress')}</label>
              <input
                type="email"
                placeholder={t('auth.emailPlaceholder')}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={350}>
            <div className="form-group">
              <label>{t('auth.password')}</label>
              <input
                type="password"
                placeholder={t('auth.passwordPlaceholder')}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={400}>
            <div className="signin-button-container">
              <button
                type="submit"
                className="form-primary-btn-half"
                disabled={!userType}
              >
                {t('auth.signIn')}
              </button>
              <NavLink to="/forgot-password" className="auth-link">
                {t('auth.forgotPassword')}
              </NavLink>
            </div>
          </ScrollAnimate>

          <ScrollAnimate delay={450}>
            <p className="mt-3">
              {t('auth.dontHaveAccount')}{" "}
              <NavLink to="/sign-up">{t('auth.registerNow')}</NavLink>
            </p>
            <p className="mb-0">
              {t('auth.bySigningIn')}{" "}
              <NavLink to="/terms">{t('auth.terms')}</NavLink> &{" "}
              <NavLink to="/privacy-policy">{t('auth.privacyPolicy')}</NavLink>
            </p>
          </ScrollAnimate>
        </form>

        {/* Social Login Section */}
        <ScrollAnimate delay={500}>
          <div className="social-login-section">
            <div className="social-login-label">
              {t('auth.signInWith')}
            </div>
            <div className="social-buttons">
              <button className="social-btn">
                <img src={GoogleIcon} alt="Google" />
              </button>
              <button className="social-btn">
                <img src={FacebookIcon} alt="Facebook" />
              </button>
            </div>
          </div>
        </ScrollAnimate>
        </div>
      </div>
    </AuthenticationStyleWrapper>
  );
};

export default Signin;