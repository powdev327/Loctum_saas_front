import CustomerServiceBannerStyle from "./CustomerServiceBanner.style";

import heroImgMen1 from "../../../assets/images/customer-service/hero-img-men-1.png";
import heroImgMen2 from "../../../assets/images/customer-service/hero-img-men-2.png";
import likeIcon from "../../../assets/images/customer-service/like.png";
import checkCoinIcon from "../../../assets/images/customer-service/check-coin.png";
import index2HeroImg from "../../../assets/images/customer-service/index2-hero-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CustomerServiceBanner = () => {
  return (
    <CustomerServiceBannerStyle className="hero-section2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ScrollAnimate delay={250}>
              <div className="hero-content hero-content2">
                <div className="hero-content2-text">
                  <div className="new-hoogle">
                    <span>New</span>
                    <p className="mb-0 wt-700">Hoogle integration added</p>
                  </div>
                  <h1 className="banner-title">
                    Best <span className="hero-badge">customer</span> Service
                    software
                  </h1>
                  <ul>
                    <li className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" />
                      Ultimate control over teams and projects
                    </li>
                    <li className="wt-700">
                      <span className="iconify" data-icon="bi:check-lg" />
                      No per user fee &amp; simple fixed price
                    </li>
                  </ul>
                </div>
                <div className="hero-content-button mb-30">
                  <a href="/sign-up" className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Get Start for Free</span>
                      <span className="btn-hover-text">Get Start for Free</span>
                    </span>
                  </a>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="hero2-img">
                <div className="hero2-image1">
                  <img src={heroImgMen1} alt="img" />
                </div>
                <div className="hero2-image2">
                  <img src={heroImgMen2} alt="img" />
                </div>
                <div className="hero2-image3">
                  <img src={likeIcon} alt="img" />
                </div>
                <div className="hero2-image4">
                  <img src={checkCoinIcon} alt="img" />
                </div>
                <img src={index2HeroImg} alt="hero-img" />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </CustomerServiceBannerStyle>
  );
};

export default CustomerServiceBanner;
