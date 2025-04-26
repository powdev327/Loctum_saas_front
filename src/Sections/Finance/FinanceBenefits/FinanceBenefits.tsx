import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import FinanceBenefitsStyle from "./FinanceBenefits.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CustomPieProgress from "./../../../Components/CustomPieProgress";

import ShapeImg from "../../../assets/images/shape/item-shape.svg";
import benefitsImg2 from "../../../assets/images/finance-index/benefits-img2.png";
import benefitsChart1 from "../../../assets/images/finance-index/benefits-chart1.png";
import benefitsImg3 from "../../../assets/images/finance-index/benefits-img3.png";
import benefitsImg from "../../../assets/images/finance-index/benefits-img.png";
import benefitsChart3 from "../../../assets/images/finance-index/benefits-chart3.png";
import benefitsImg4 from "../../../assets/images/finance-index/benefits-img4.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceBenefits = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
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
    autoplaySpeed: 5000,
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
    <FinanceBenefitsStyle className="benefits-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Most useful features You must need"
            subtitle="Benefits"
            titleMaxW="480px"
            subtitleClass="green-color"
            parentClass="v6 text-center"
            titleMargin="auto"
          />
        </ScrollAnimate>
        <div className="benefits-content">
          <div className="row">
            <div className="col-md-6">
              <ScrollAnimate delay={250}>
                <div className="benefits-left-section slider-benefits-for">
                  <Slider {...settingsFor} className="slider-benefits-for">
                    <div className="benefits-img-bg">
                      <div className="benefits-img-tag benefits-img-tag1">
                        ESG
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        Crypto
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Private investment
                      </div>
                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg2} alt="img" />
                        <div className="overlay">
                          <div className="overlay-item success-rate">
                            <img
                              className="rotate-icon"
                              src={ShapeImg}
                              alt="icon"
                            />
                            <div className="success-rate-content">
                              <div className="progress pie_progress">
                                <CustomPieProgress
                                  Text="Success rate"
                                  TextColor="#444444"
                                  Percentage={92}
                                  ValueColor="#000000"
                                  PathColor="#00CEC9"
                                  TrailColor="rgba(0, 206, 201, 0.2)"
                                />
                                <p>Success rate</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="benefits-img-bg benefits-img-bg2">
                      <div className="benefits-img-tag benefits-img-tag1">
                        Crypto Trade
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        Investment Committee
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Planning
                      </div>
                      <div className="benefits-img-chart">
                        <img src={benefitsChart1} alt="" />
                      </div>
                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg3} alt="img" />
                      </div>
                    </div>
                    <div className="benefits-img-bg benefits-img-bg3">
                      <div className="benefits-img-tag benefits-img-tag1">
                        Riskalyze
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        Crypto Trade
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Private Enquity
                      </div>
                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg} alt="img" />
                      </div>
                    </div>
                    <div className="benefits-img-bg benefits-img-bg4">
                      <div className="benefits-img-tag benefits-img-tag1">
                        High Net Worth
                      </div>
                      <div className="benefits-img-tag benefits-img-tag2">
                        Riskalyze
                      </div>
                      <div className="benefits-img-tag benefits-img-tag3">
                        Private Enquity
                      </div>
                      <div className="benefits-img-chart">
                        <img src={benefitsChart3} alt="" />
                      </div>
                      <div className="about-feature-img benefits-img">
                        <img src={benefitsImg4} alt="img" />
                      </div>
                    </div>
                  </Slider>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-md-6">
              <ScrollAnimate delay={300}>
                <div className="benefits-faq">
                  <Slider {...settingsNav} className="slider-benefits-nav">
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Financial advisor program
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          We use as filler text for layouts, non-readability is of
                          great importance but because those who do not know how
                          to pursue pleasure rationally encounter consequences
                          that are extremely painful. Nor again is there anyone
                        </p>
                      </div>
                    </div>
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Business growth
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          We use as filler text for layouts, non-readability is of
                          great before importance but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences.
                        </p>
                      </div>
                    </div>
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">Marketing plan</button>
                      <div className="benefits-nav-content">
                        <p>
                          We use as filler text for layouts, non-readability is of
                          great before importance but because those who do not
                          know how to pursue pleasure rationally encounter
                          consequences.
                        </p>
                      </div>
                    </div>
                    <div className="benefits-slider-nav">
                      <button className="benefits-nav-btn">
                        Ethical finance guide
                      </button>
                      <div className="benefits-nav-content">
                        <p>
                          We use as filler text for layouts, non-readability is of
                          great importance but because those who do not know how
                          to pursue pleasure rationally encounter consequences
                          that are extremely painful. Nor again is there anyone
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </FinanceBenefitsStyle>
  );
};

export default FinanceBenefits;
