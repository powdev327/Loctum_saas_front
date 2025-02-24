import { GoArrowLeft } from "react-icons/go";
import LogoDark from "../../assets/images/logo/q-logo-dark.svg";
import { NavLink, useNavigate } from "react-router-dom";
import ScrollAnimate from "../../Components/ScrollAnimate";

const AuthFormWrapper = ({ children, handleGoBack, step }) => {
  const navigate = useNavigate();

  return (
    <section className="auth-form-section">
      <div className="auth-page-header">
        <NavLink to="/" className="logo">
          <ScrollAnimate delay={200}>
            <img src={LogoDark} alt="logo" />
          </ScrollAnimate>
        </NavLink>
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
            Go Back
          </ScrollAnimate>
        </button>
      </div>
      <div className="auth-content">{children}</div>
    </section>
  );
};

export default AuthFormWrapper;
