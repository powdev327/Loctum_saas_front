import { useEffect, useState } from "react";
import SassTwoBannerStyle from "./SassTwoBanner.style";

import sassLandingBg from "../../../assets/images/sass2/sass-landing-bg.png";
import bannerImgShape1 from "../../../assets/images/sass2/banner-img-shape1.svg";
import bannerImgShape2 from "../../../assets/images/sass2/banner-img-shape2.svg";
import sassDashboardImg from "../../../assets/images/sass2/sass-dashboard-img.png";
import shape1 from "../../../assets/images/sass2/shape1.svg";
import shape2 from "../../../assets/images/sass2/shape2.svg";
import shape3 from "../../../assets/images/sass2/shape3.svg";
import shape4 from "../../../assets/images/sass2/shape4.svg";
import shape5 from "../../../assets/images/sass2/shape5.svg";
import RightArrow from "../../../assets/images/icons/arrow-right-white.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SassTwoBanner = () => {
  const animateBannerImg = (section, y, x, division, n) => {
    var cryptoBannerImg = document.querySelector(section);

    let animationValue = 1;
    animationValue = (n * (y - x)) / division;

    let animationStop = 100;

    if (animationValue < 0) {
      animationValue = 0;
    }

    if (animationValue > animationStop) {
      animationValue = animationStop;
    }

    cryptoBannerImg.style.setProperty(
      "transform",
      `translateY(${animationValue}px)`
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      var cryptoBannerSection = document.querySelector(
        ".sass-landing-hero-section"
      );

      const y = window.scrollY;
      const x = cryptoBannerSection.offsetTop;

      animateBannerImg(".sass-banner-img .banner-img", y, x, 4, 1);
      animateBannerImg(".sass-banner-img .shape2", y, x, 3, 1);
      animateBannerImg(".sass-landing-banner-shapes .shape1", y, x, 15, 1);
      animateBannerImg(".sass-landing-banner-shapes .shape5", y, x, 6, 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SassTwoBannerStyle className="sass-landing-hero-section">
      <div className="sass-landing-hero-bg">
        <div className="bg-inner">
          <img src={sassLandingBg} alt="img" />
          <div className="banner-shape-list">
            <div className="banner-shape" />
            <div className="banner-shape" />
            <div className="banner-shape" />
            <div className="banner-shape" />
            <div className="banner-shape" />
            <div className="banner-shape" />
          </div>
        </div>
      </div>
      <div className="sass-landing-hero-content container">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ScrollAnimate delay={200}>
              <div className="sass-banner-text">
                <h1>Smart Business Management</h1>
                <p>
                  Staco is the dedicated platform for human management that
                  helps to grow your startup business quickly
                </p>
                <div className="sass-banner-btn">
                  <NavLink to={"/sign-up"} className="sass-start-free-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Sign up Free</span>
                      <span className="btn-hover-text">Sign up Free</span>
                    </span>
                  </NavLink>
                  <a href="#" className="view-demo-btn">
                    View Demo
                    <img src={RightArrow} alt="icon" />
                  </a>
                </div>
                <ul className="hero-content-list">
                  <li>
                    <div className="list-item">
                      <span className="iconify" data-icon="bi:check-lg" />
                      <p className="mb-0">No cards required</p>
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <span className="iconify" data-icon="bi:check-lg" />
                      <p className="mb-0">30 day free trial</p>
                    </div>
                  </li>
                </ul>
              </div>
              </ScrollAnimate>
            </div>
            <div className="col-lg-6">
              <ScrollAnimate delay={250}>
              <div className="sass-banner-img">
                <img src={sassDashboardImg} alt="img" className="banner-img" />
                <img src={bannerImgShape1} alt="img" className="shape1" />
                <img src={bannerImgShape2} alt="img" className="shape2" />
              </div>
              </ScrollAnimate>
            </div>
          </div>
          <div className="sass-landing-banner-shapes">
            <img src={shape1} alt="shape" className="shape1" />
            <img src={shape2} alt="shape" className="shape2" />
            <img src={shape3} alt="shape" className="shape3" />
            <img src={shape4} alt="shape" className="shape4" />
            <img src={shape5} alt="shape" className="shape5" />
          </div>
        </div>
      </div>
    </SassTwoBannerStyle>
  );
};

export default SassTwoBanner;
