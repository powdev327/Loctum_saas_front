import { NavLink } from "react-router-dom";
import CorporateBannerStyle from "./CorporateBanner.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CorporateBanner = () => {
  return (
    <CorporateBannerStyle className="coroprate-banner-section">
      <div className="overlay">
        <ScrollAnimate delay={200}>
        <div className="corporate-banner-text">
          <h4 className="text-white text-center">We are Staco</h4>
          <h1 className="text-white text-center">
            Design. Code <br />
            Branding
          </h1>
          <p className="text-white text-center">
            Staco is the dedicated platform for human management that helps to
            grow your startup business quickly
          </p>
          <NavLink to={"/sign-up"} className="corporate-banner-btn">
            <span className="btn-inner">
              <span className="btn-normal-text">Get Start for Free</span>
              <span className="btn-hover-text">Get Start for Free</span>
            </span>
          </NavLink>
        </div>
        </ScrollAnimate>
      </div>
    </CorporateBannerStyle>
  );
};

export default CorporateBanner;
