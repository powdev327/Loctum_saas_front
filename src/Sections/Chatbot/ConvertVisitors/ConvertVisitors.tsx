import { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import ConvertVisitorsStyle from "./ConvertVisitors.style";

import appImage1 from "../../../assets/images/chatbot/app_1.png";
import appImage2 from "../../../assets/images/chatbot/app_2.png";
import appImage3 from "../../../assets/images/chatbot/app_3.png";
import appImage4 from "../../../assets/images/chatbot/app_4.png";
import sliderImageBg from "../../../assets/images/chatbot/slider-img-bg.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ConvertVisitors = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    autoplaySpeed: 4000,
    infinite: true,
    asNavFor: sliderNavRef.current,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <ConvertVisitorsStyle className="convert-visitors-section z-index-3">
      <ScrollAnimate delay={200}>
        <div className="container">
          <div className="convert-visitors-slider-nav-section">
            <Slider
              ref={sliderNavRef}
              {...settingsNav}
              className="convert-visitors-slider-nav"
            >
              <div className="nav-item">
                <button>Sales &amp; E-commerce</button>
              </div>
              <div className="nav-item">
                <button>Revenue Growth</button>
              </div>
              <div className="nav-item">
                <button>Customer Support</button>
              </div>
              <div className="nav-item">
                <button>Lead Generation</button>
              </div>
            </Slider>
          </div>
          <div className="convert-visitors-slider-content">
            <div className="convert-visitors-slider-bg">
              <img src={sliderImageBg} alt="img" />
            </div>
            <Slider
              ref={sliderForRef}
              {...settingsFor}
              className="convert-visitors-slider-for"
            >
              <div className="convert-visitors-slider-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="convert-visitors-img-section">
                      <img src={appImage1} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="convert-visitors-slider-right">
                      <div className="section-title mb-5">
                        <h2 className="title mb-0">E-commerce sale experience</h2>
                      </div>
                      <p className="mb-4 pb-3">
                        We use as filler text for layouts, non-readability is of
                        great importance but because those who do not know how to
                        pursue pleasure We use as filler text for layouts,
                        non-readability is of great importance
                      </p>
                      <p>
                        but because those who do not know how to pursue pleasure
                        rationally encounter consequences that are extremely
                        painful.
                      </p>
                      <a href="#" className="text-link mt-5 mb-3">
                        <span>Read Documentation</span>
                        <span
                          className="iconify"
                          data-icon="akar-icons:arrow-right"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="convert-visitors-slider-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="convert-visitors-img-section">
                      <img src={appImage2} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="convert-visitors-slider-right">
                      <div className="section-title mb-5">
                        <h2 className="title mb-0">
                          Convert Visitors to Customers
                        </h2>
                      </div>
                      <p className="mb-4 pb-3">
                        Know how to pursue pleasure We use as filler text for
                        layouts, non-readability is of great importance but
                        because those who do not know how to pursue pleasure
                        rationally encounter consequences
                      </p>
                      <div className="convert-visitors-progress-section">
                        <div className="convert-visitors-progress satisfaction" />
                        <div className="convert-visitors-progress-text">
                          <h3>95%</h3>
                          <p className="mb-0">Satisfaction</p>
                        </div>
                      </div>
                      <div className="convert-visitors-progress-section mb-0">
                        <div className="convert-visitors-progress feedback" />
                        <div className="convert-visitors-progress-text">
                          <h3>10%</h3>
                          <p className="mb-0">Feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="convert-visitors-slider-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="convert-visitors-img-section">
                      <img src={appImage3} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="convert-visitors-slider-right">
                      <div className="section-title mb-5">
                        <h2 className="title mb-0">
                          Support customers instantly
                        </h2>
                      </div>
                      <p className="mb-2">
                        Non-readability is of great importance but because those
                        who do not know how to pursue pleasure We use as filler
                        text for layouts, non-readability is of great importance
                        but because those who do not know how to pursue pleasure
                        rationally customer relationship
                      </p>
                      <ul>
                        <li>Engage Customers</li>
                        <li>24/7 support response</li>
                        <li>Workflows and productivity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="convert-visitors-slider-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="convert-visitors-img-section">
                      <img src={appImage4} alt="img" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="convert-visitors-slider-right">
                      <div className="section-title mb-5">
                        <h2 className="title mb-0">
                          Generate leads automatically
                        </h2>
                      </div>
                      <p className="pb-3">
                        We use as filler text for layouts, non-readability is of
                        great importance but because those who do not know how to
                        pursue pleasure We use as filler text for layouts,
                        non-readability is of great importance
                      </p>
                      <hr />
                      <div className="lead-generation-list pt-3 mt-4">
                        <h4>34%</h4>
                        <p>Increase customer</p>
                      </div>
                      <div className="lead-generation-list mb-0">
                        <h4>2.8X</h4>
                        <p>User base growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </ScrollAnimate>
    </ConvertVisitorsStyle>
  );
};

export default ConvertVisitors;
