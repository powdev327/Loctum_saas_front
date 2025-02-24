import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import ConvertVisitorsStyle from "./ConvertVisitors.style";

import SliderData from "../../../assets/data/app-data/convertVisitorsSlider";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ConvertVisitors = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const settingsNav = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <ConvertVisitorsStyle className="app-convert-visitors-section">
      <div className="container">
        <ScrollAnimate>
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="app-convert-visitors-nav">
                <Slider
                  {...settingsNav}
                  asNavFor={nav1}
                  ref={(slider) => (sliderRef2 = slider)}
                  focusOnSelect={true}
                >
                  {SliderData?.map((item, i) => (
                    <div key={i} className="slider-item nav-item">
                      <button className="tab-btn">
                        <span> {item.navTitle}</span>
                      </button>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

            <div className="col-lg-9 col-md-12">
              <div className="convert-visitors-slider-right app">
                <Slider
                  {...settingsFor}
                  asNavFor={nav2}
                  ref={(slider) => (sliderRef1 = slider)}
                >
                  {SliderData?.map((item, i) => (
                    <div key={i} className="slider-item">
                      <div className="slider-item-left">
                        <div className="convert-visitors-img">
                          <img src={item.imgSrc} alt="img" />
                        </div>
                      </div>

                      <div className="slider-item-right">
                        <div className={`convert-visitors-text ${item.number}`}>
                          <div className="section-title">
                            <h2 className="title">{item.title}</h2>
                          </div>
                          <p className="mb-3 pb-5">{item.description}</p>

                          {item.stats && (
                            <>
                              <hr />
                              <div className="lead-generation-list pt-3 mt-4">
                                <h4>{item.stats[0].percentage}</h4>
                                <p>{item.stats[0].label}</p>
                              </div>
                              <div className="lead-generation-list mb-0">
                                <h4>{item.stats[1].percentage}</h4>
                                <p>{item.stats[1].label}</p>
                              </div>
                            </>
                          )}

                          {item.features && (
                            <ul>
                              {item.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                              ))}
                            </ul>
                          )}

                          {item.protectData && (
                            <div className="protect-data-section">
                              {item.protectData.map((data, index) => (
                                <div
                                  key={index}
                                  className="protect-data-content"
                                >
                                  <div className="protect-data-img">
                                    <img src={data.imgSrc} alt="icon" />
                                  </div>
                                  <div className="protect-data-text">
                                    <p>{data.text}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}

                          {item.buttonText && (
                            <a href="#" className="star-free-btn">
                              {item.buttonText}
                              <span
                                className="iconify"
                                data-icon={item.iconify}
                              ></span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </ConvertVisitorsStyle>
  );
};

export default ConvertVisitors;
