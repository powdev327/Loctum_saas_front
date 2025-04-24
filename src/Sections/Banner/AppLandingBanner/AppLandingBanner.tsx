import { useEffect, useState } from "react";
import AppBannerStyleWrapper from "./AppBanner.style";

import BannerImg from "../../../assets/images/app/banner-mockup.png";
import BannerShape1 from "../../../assets/images/app/app-banner-shape1.svg";
import BannerShape2 from "../../../assets/images/app/app-banner-shape2.svg";
import RightIcon from "../../../assets/images/icons/icon-right.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppLandingBanner = () => {
  const headlines = [
    "New payment method for Android",
    "Hoogle integration added",
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [animationValue, setAnimationValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerImg = document.querySelector(".app-landing-banner-img img");
      const y = window.scrollY;
      let x = bannerImg.offsetTop;
      x = x - window.innerHeight + bannerImg.clientHeight;

      const newAnimationValue = Math.max(0, Math.min((y - x) / 4, 100));
      setAnimationValue(newAnimationValue);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBannerStyleWrapper className="hero-section2 app-landing-hero-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content app-hero-content hero-content2">
              <ScrollAnimate delay={200}>
              <div className="hero-content2-text app-banner-text">
                <div className="app-banner-text-effect">
                  <a className="cd-intro m-0">
                    <p className="cd-headline slide mb-0">
                      <span className="badge wt-700">New</span>
                      <span className="cd-words-wrapper dm-sans">
                        {headlines.map((headline, index) => (
                          <b
                            key={index}
                            className={
                              index === visibleIndex
                                ? "is-visible"
                                : "is-hidden"
                            }
                          >
                            {headline} <img src={RightIcon} alt=">" />
                          </b>
                        ))}
                      </span>
                    </p>
                  </a>
                </div>
                <h1 className="banner-title">
                  #1 &nbsp;App landing for your business
                </h1>
                <p>
                  Staco is the dedicated platform for human management that
                  helps to grow your startup business quickly
                </p>
              </div>
              <div className="hero-content-button mt-5 mb-30">
                <button className="bg-blue-btn">
                  <span className="btn-inner">
                    <span className="btn-normal-text">Download free</span>
                    <span className="btn-hover-text">Download free</span>
                  </span>
                </button>
              </div>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-6">
           <ScrollAnimate delay={300}>
           <div className="app-landing-banner-img">
              <img
                src={BannerImg}
                alt="img"
                style={{ transform: `translateY(${animationValue}px)` }}
              />
            </div>
           </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="app-banner-shape1">
        <img src={BannerShape1} alt="img" />
      </div>
      <div className="app-banner-shape2">
        <img src={BannerShape2} alt="img" />
      </div>
    </AppBannerStyleWrapper>
  );
};

export default AppLandingBanner;
