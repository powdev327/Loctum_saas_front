import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import FinanceChooseStyle from "./FinanceChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import featureTeam1Img from "../../../assets/images/img/feature-team1.png";
import featureTeam2Img from "../../../assets/images/img/feature-team2.png";
import featureTeam3Img from "../../../assets/images/img/feature-team3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceChoose = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    ref: sliderForRef,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
  });

  useEffect(() => {
    if (sliderForRef.current && sliderNavRef.current) {
      setSettingsFor((prevSettings) => ({
        ...prevSettings,
        asNavFor: sliderNavRef.current,
      }));

      setSettingsNav((prevSettings) => ({
        ...prevSettings,
        asNavFor: sliderForRef.current,
      }));
    }
  }, []);

  return (
    <FinanceChooseStyle className="feature-team-section v6">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
            <div className="feature-team-slider-for">
              <Slider {...settingsFor} className="slider-for">
                {/* First Slide */}
                <div className="slider-item">
                  <SectionTitle
                    title="Discover business Opportunities"
                    subtitle="Why Choose Us"
                    titleColor="green-color"
                    parentClass="section-title v6"
                  />
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful nor again is there anyone.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Profile Consultation
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Asset management
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      No-risk business idea
                    </li>
                  </ul>
                </div>
                {/* Second Slide */}
                <div className="slider-item">
                  <SectionTitle
                    title="Manage team increase productivity"
                    subtitle="Why Choose Us"
                    titleColor="green-color"
                  />
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful nor again is there anyone.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      99% Survey Report
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Trusted by teams
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Self-Service
                    </li>
                  </ul>
                </div>
                {/* Third Slide */}
                <div className="slider-item">
                  <SectionTitle
                    title="Manage team increase productivity"
                    subtitle="Why Choose Us"
                    titleColor="green-color"
                  />
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful nor again is there anyone.
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      99% Survey Report
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Trusted by teams
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Self-Service
                    </li>
                  </ul>
                </div>
              </Slider>
            </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6">
            <ScrollAnimate delay={300}>
            <div className="feature-team-slider-nav">
              <Slider {...settingsNav} className="slider-nav">
                {/* First Slide */}
                <div className="slider-item">
                  <div className="slider-progress">
                    <div className="progress-done" />
                  </div>
                  <img src={featureTeam1Img} alt="slider-img" />
                </div>
                {/* Second Slide */}
                <div className="slider-item">
                  <div className="slider-progress">
                    <div className="progress-done" />
                  </div>
                  <img src={featureTeam2Img} alt="slider-img" />
                </div>
                {/* Third Slide */}
                <div className="slider-item">
                  <div className="slider-progress">
                    <div className="progress-done" />
                  </div>
                  <img src={featureTeam3Img} alt="slider-img" />
                </div>
              </Slider>
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </FinanceChooseStyle>
  );
};

export default FinanceChoose;
