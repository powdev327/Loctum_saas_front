import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import BusinessChooseStyle from "./BusinessChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import whyChoose1 from "../../../assets/images/business/why-choose1.png";
import whyChoose2 from "../../../assets/images/business/why-choose2.png";
import whyChoose3 from "../../../assets/images/business/why-choose3.png";
import whyChoose4 from "../../../assets/images/business/why-choose4.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessChoose = () => {
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
    pauseOnHover: false,
    pauseOnFocus: false,
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
    pauseOnHover: false,
    pauseOnFocus: false,
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
    <BusinessChooseStyle className="why-choose-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
            <SectionTitle
              title="Get amazing benefits"
              subtitle="Why Choose us"
              alignment="center"
              parentClass="z-index-3"
            />
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="why-choose-parent">
        <div className="overlay-left" />
        <div className="overlay-right" />
        <ScrollAnimate delay={200}>
        <div className="why-choose-container container">
          <div className="container">
            <div className="why-choose-tab">
              <Slider
                {...settingsNav}
                className="tab-buttons why-chose-slider-nav"
              >
                <button className="tab-btn">
                  <span>01.</span> <span className="text">Clean</span>
                  <span className="text2">Design</span>
                </button>
                <button className="tab-btn">
                  <span>02.</span> <span className="text">New</span>
                  <span className="text2">technology</span>
                </button>
                <button className="tab-btn">
                  <span>03.</span> <span className="text">High</span>
                  <span className="text2">Performance</span>
                </button>
                <button className="tab-btn">
                  <span>04.</span> <span className="text">Best</span>
                  <span className="text2">usability</span>
                </button>
              </Slider>
              <progress max={100} value={0} />
            </div>
          </div>

          <Slider {...settingsFor} className="convert-visitors-slider-for why-chose-slider">
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose1} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>No compromise with</h2>
                  <h2>quality design</h2>
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Share multiple screen at a time</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>High Quality screen</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No buffering</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose2} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>No compromise with</h2>
                  <h2>quality design</h2>
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Share multiple screen at a time</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>High Quality screen</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No buffering</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose3} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>No compromise with</h2>
                  <h2>quality design</h2>
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Share multiple screen at a time</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>High Quality screen</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No buffering</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="tab-body">
                <div className="tab-body-img">
                  <img src={whyChoose4} alt="img" />
                </div>
                <div className="tab-body-text">
                  <h2>No compromise with</h2>
                  <h2>quality design</h2>
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importance but because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves or
                    pursues or desires to obtain.
                  </p>
                  <ul className="list">
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>Share multiple screen at a time</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>High Quality screen</p>
                      </div>
                    </li>
                    <li>
                      <div className="list-item">
                        <span className="iconify" data-icon="bi:check-lg" />
                        <p>No buffering</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        </ScrollAnimate>
      </div>
    </BusinessChooseStyle>
  );
};

export default BusinessChoose;
