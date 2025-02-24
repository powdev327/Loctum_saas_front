import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import UsefulFeatureStyleWrapper from "./UsefulFeature.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";

import usefulFeatureIcon from "../../../assets/images/icons/useful-feature-icon.svg";
import monitorIcon from "../../../assets/images/team-collaboration/monitor.svg";
import messageIcon from "../../../assets/images/team-collaboration/message.svg";
import documentIcon from "../../../assets/images/team-collaboration/document.svg";
import callApp1Image from "../../../assets/images/team-collaboration/call_app_1.png";
import callApp2Image from "../../../assets/images/team-collaboration/call_app_2.png";
import callApp3Image from "../../../assets/images/team-collaboration/call_app_3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const UsefulFeature = () => {
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
    slidesToShow: 4,
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
    <UsefulFeatureStyleWrapper className="useful-feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="useful-feature-header">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <div className="section-title mb-0">
                    <span className="sub-title">Features</span>
                    <h2 className="title mb-0">
                      Most useful{" "}
                      <span className="marketing-badge">features </span>
                      <br />
                      You must need
                    </h2>
                  </div>
                </TitleStyleWrapper>
              </ScrollAnimate>
              <div className="useful-feature-header-right">
                <ScrollAnimate delay={220}>
                  <img src={usefulFeatureIcon} alt="icon" />
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-12">
              <Slider
                {...settingsNav}
                ref={sliderNavRef}
                className="useful-feature-slider-nav slider-nav"
              >
                <div className="slider-item">
                  <p>Instant Join</p>
                </div>
                <div className="slider-item">
                  <p>Screen Sharing</p>
                </div>
                <div className="slider-item">
                  <p>Team Chat</p>
                </div>
                <div className="slider-item">
                  <p>HD Audio &amp; Video</p>
                </div>
              </Slider>
              <Slider
                {...settingsFor}
                ref={sliderForRef}
                className="useful-feature-slider-for slider-for"
              >
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>Instant Join</h2>
                      <p>
                        We use as filler text for layouts, non-readability is of
                        great importance but because those who do not know how to
                        pursue pleasure rationally encounter consequences that are
                        extremely painful. Nor again is there anyone who loves or
                        pursues or desires to obtain.
                      </p>
                    </div>
                    <ul className="list">
                      <li className="wt-700">
                        <div className="list-item">
                          <img src={monitorIcon} alt="icon" />
                          <p>Teamwork Webinar</p>
                        </div>
                      </li>
                      <li className="wt-700">
                        <div className="list-item">
                          <img src={messageIcon} alt="icon" />
                          <p>Chat &amp; Channel</p>
                        </div>
                      </li>
                      <li className="wt-700">
                        <div className="list-item">
                          <img src={documentIcon} alt="icon" />
                          <p>Whiteboards</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="slider-item-img">
                    <img src={callApp1Image} alt="useful-feature-img" />
                  </div>
                </div>
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>Screen Sharing</h2>
                      <p>
                        Readability is of great importance but because those who
                        do not know how to pursue pleasure rationally encounter
                        consequences that are extremely painful. Nor again is
                        there anyone.
                      </p>
                      <ol>
                        <li className="wt-700">
                          <span className="iconify" data-icon="bi:check-lg" />{" "}
                          Share multiple screens at a time and get amazing
                          experience in your team meeting
                        </li>
                        <li className="wt-700">
                          <span className="iconify" data-icon="bi:check-lg" /> No
                          need for third-party plugins
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="slider-item-img">
                    <img src={callApp2Image} alt="useful-feature-img" />
                  </div>
                </div>
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>Team Chat</h2>
                      <p>
                        Because those who do not know how to pursue pleasure
                        rationally encounter consequences that are extremely
                        painful.
                      </p>
                      <p>
                        Great importance but because those who do not know how to
                        pursue pleasure rationally encounter consequences that are
                        extremely painful. Nor again is there anyone.
                      </p>
                    </div>
                  </div>
                  <div className="slider-item-img">
                    <img src={callApp3Image} alt="useful-feature-img" />
                  </div>
                </div>
                <div className="slider-item">
                  <div className="slider-item-left">
                    <div className="slider-item-text">
                      <h2>HD Audio &amp; Video</h2>
                      <p>
                        Readability is of great importance but because those who
                        do not know how to pursue pleasure rationally encounter
                        consequences that are extremely painful. Nor again is
                        there anyone. Because those who do not know how to pursue
                        pleasure rationally encounter consequences that are
                        extremely painful.
                      </p>
                    </div>
                  </div>
                  <div className="slider-item-img">
                    <img src={callApp2Image} alt="useful-feature-img" />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </UsefulFeatureStyleWrapper>
  );
};

export default UsefulFeature;
