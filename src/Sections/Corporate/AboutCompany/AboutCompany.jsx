import { useEffect } from "react";
import AboutCompanyStyleWrapper from "./AboutCompany.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Venobox from "venobox/dist/venobox";

import aboutCompanyImg from "../../../assets/images/corporate/about_img.png";
import playIcon from "../../../assets/images/corporate/play-icon.svg";
import fastIcon from "../../../assets/images/corporate/fast.svg";
import safeIcon from "../../../assets/images/corporate/safe.svg";
import anytimeIcon from "../../../assets/images/corporate/anytime.svg";
import anywhereIcon from "../../../assets/images/corporate/anywhere.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AboutCompany = () => {
  useEffect(() => {
    new Venobox({
      selector: ".my-video-links",
    });
  }, []);

  return (
    <AboutCompanyStyleWrapper className="about-our-company-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ScrollAnimate delay={250}>
            <div className="about-company-left">
              <div className="about-company-inner">
                <div className="about-company-img">
                  <img src={aboutCompanyImg} alt="img" />
                </div>
                <a
                  className="my-video-links play-btn"
                  href="https://www.youtube.com/watch?v=QyhwSYhX09s"
                  data-autoplay="true"
                  data-vbtype="video"
                >
                  <img src={playIcon} alt="icon" />
                </a>
              </div>
            </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <div className="about-company-right">
             <ScrollAnimate delay={200}>
             <SectionTitle
                subtitle="Who we are"
                title="About our company"
                parentClass="corporate md-mb-0"
              />
             </ScrollAnimate>
              <ScrollAnimate delay={250}>
              <h3>Since 1998</h3>
              <p>
                We use as filler text for layouts, non-readability is of great
                importancebut because those who do not know how to pursue
                pleasure rationally encounter consequences that are extremely
                painful. Nor again is there anyone who loves or pursues or
                desires to obtain.
              </p>
              <p>
                when our power of choice is untrammelled and when nothing
                prevents our being able to do what we like best, every pleasure
                is to be welcomed and every pain avoided. But in certain
                circumstances
              </p>
              </ScrollAnimate>
              <ScrollAnimate delay={300}>
              <ul>
                <li>
                  <img src={fastIcon} alt="icon" />
                  <span>Fast</span>
                </li>
                <li>
                  <img src={safeIcon} alt="icon" />
                  <span>Secure</span>
                </li>
                <li>
                  <img src={anytimeIcon} alt="icon" />
                  <span>Anytime</span>
                </li>
                <li>
                  <img src={anywhereIcon} alt="icon" />
                  <span>Anywhere</span>
                </li>
              </ul>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </AboutCompanyStyleWrapper>
  );
};

export default AboutCompany;
