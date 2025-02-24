import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import FeatureTeamStyle from "./FeatureTeam.style";

import Img1 from "../../../assets/images/img/feature-team3.png";
import Img2 from "../../../assets/images/img/feature-team2.png";
import Img3 from "../../../assets/images/img/feature-team1.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FeatureTeam = () => {
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
  });

  useEffect(() => {
    setSettingsFor((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderNavRef.current,
    }));

    setSettingsNav((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderForRef.current,
    }));
  }, []);

  return (
    <FeatureTeamStyle className="feature-team-section newsletter">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <ScrollAnimate delay={200}>
            <Slider
              ref={sliderNavRef}
              {...settingsNav}
              className="feature-team-slider-nav"
            >
              <div className="slider-item">
                <div className="slider-progress">
                  <div className="progress-done" />
                </div>
                <img src={Img1} alt="slider-img-1" />
              </div>
              <div className="slider-item">
                <div className="slider-progress">
                  <div className="progress-done" />
                </div>
                <img src={Img2} alt="slider-img-2" />
              </div>
              <div className="slider-item">
                <div className="slider-progress">
                  <div className="progress-done" />
                </div>
                <img src={Img3} alt="slider-img-3" />
              </div>
            </Slider>
            </ScrollAnimate>
          </div>
          <div className="col-lg-5">
            <ScrollAnimate delay={200}>
            <Slider
              ref={sliderForRef}
              {...settingsFor}
              className="feature-team-slider-for"
            >
              <div className="slider-item">
                <h2>Manage team increase productivity</h2>
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importance but because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful nor again is there anyone.
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
              <div className="slider-item">
                <h2>Manage team increase productivity</h2>
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importance but because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful nor again is there anyone.
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
              <div className="slider-item">
                <h2>Manage team increase productivity</h2>
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importance but because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful nor again is there anyone.
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
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </FeatureTeamStyle>
  );
};

export default FeatureTeam;
