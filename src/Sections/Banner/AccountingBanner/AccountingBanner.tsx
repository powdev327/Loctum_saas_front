import AccountingBannerStyle from "./AccountingBanner.style";
import { NavLink } from "react-router-dom";

import BannerVideo from "../../../assets/videos/h8-video.mp4";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AccountingBanner = () => {
  return (
    <AccountingBannerStyle className="v8banner-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="v8banner-text">
            <h1 className="title">Accounting Software for Your Business</h1>
            <p>
              Staco is the dedicated platform for human management that helps to
              grow your startup business quickly
            </p>
            <NavLink to={"/sign-up"} className="banner-btn-v8">
              <span className="btn-inner">
                <span className="btn-normal-text">Get Start for Free</span>
                <span className="btn-hover-text">Get Start for Free</span>
              </span>
            </NavLink>
          </div>
        </ScrollAnimate>
      </div>
      <div className="v8banner-video">
        <video loop autoPlay playsInline muted>
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div>
    </AccountingBannerStyle>
  );
};

export default AccountingBanner;
