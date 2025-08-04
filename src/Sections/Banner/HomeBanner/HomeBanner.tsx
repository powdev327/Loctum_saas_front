import HomeBannerStyle from "./HomeBanner.style";
import { FaCheck } from "react-icons/fa6";

import bannerShape1 from "../../../assets/images/main-demo/banner-shape1.png";
import bannerShape2 from "../../../assets/images/main-demo/banner-shape2.png";
import bannerShape3 from "../../../assets/images/main-demo/banner-shape3.png";
import getDemoSvg from "../../../assets/images/main-demo/get-demo.svg";
import arrowRightSvg from "../../../assets/images/icons/arrow-right.svg";
//import heroImg from "../../../assets/images/main-demo/hero-img.png";
import heroImg from "../../../assets/images/main-demo/hands_shake.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const HomeBanner = () => {
    const { t } = useTranslation();
  return (
    <HomeBannerStyle className="hero-section">
      <div className="bg-shape">
        <div className="shape-img img-1">
          <ScrollAnimate delay={250}><img src={bannerShape1} alt="shape1" /></ScrollAnimate>
        </div>
        <div className="shape-img img-2">
          <ScrollAnimate delay={220}><img src={bannerShape2} alt="shape2" /></ScrollAnimate>
        </div>
        <div className="shape-img img-3">
          <ScrollAnimate delay={240}><img src={bannerShape3} alt="shape3" /></ScrollAnimate>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            <div className="hero-content">
              <div className="hero-content-text">
                <ScrollAnimate>
                  <h1 className="uig-banner-title white-color">
                    <span style={{ whiteSpace: "nowrap" }}>
                      <span className="title-part-1">{t("home.banner.title1")}</span>{" "}
                      <span className="hero-badge">{t("home.banner.titleBadge")}</span>
                    </span>
                    <br />
                    <span className="title-part-2">{t("home.banner.title2")}</span>
                  </h1>


                </ScrollAnimate>

                <ScrollAnimate delay={200}>
                  <p>
                    {t("home.banner.description")}
                  </p>
                </ScrollAnimate>
              </div>
              <div className="hero-content-button mb-30">
                <ScrollAnimate delay={250}>
                  <a href="/sign-up" className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">{t("home.banner.cta")}</span>
                      <span className="btn-hover-text">{t("home.banner.cta")}</span>
                    </span>
                  </a>
                </ScrollAnimate>
              </div>
              <ScrollAnimate delay={300}>
                <ul className="hero-content-list">
                  <li>
                    <div className="list-item">
                      <FaCheck />
                      <p className="wt-700">{t("home.banner.feature1")}</p>
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <FaCheck />
                      <p className="wt-700">{t("home.banner.feature2")}</p>
                    </div>
                  </li>
                </ul>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <ScrollAnimate>
              <div className="hero-img">
                <div className="overlay">
                  <a href="#" className="get-demo-btn">
                    <img src={getDemoSvg} alt="get-demo" />
                    <span className="icon">
                      <img src={arrowRightSvg} alt="icon" />
                    </span>
                  </a>
                </div>
                <img src={heroImg} alt="hero-img" />
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </HomeBannerStyle>
  );
};

export default HomeBanner;
