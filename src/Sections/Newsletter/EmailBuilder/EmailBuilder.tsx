import { useEffect, useRef, useState } from "react";
import EmailBuilderStyle from "./EmailBuilder.style";
import { emailItems } from "../../../assets/data/NewsletterData/EmailBuilderData";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import Slider from "react-slick";

const EmailBuilder = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManual, setIsManual] = useState(false); // Tracks if a manual click occurred

  useEffect(() => {
    const interval = setInterval(() => {
      // If manual click, wait for 5000 ms before resuming auto-cycling
      if (!isManual) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % emailItems.length);
      }
    }, 450000);

    return () => clearInterval(interval);
  }, [isManual]); // Dependency on isManual to control automatic cycling

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsManual(true); // Set to manual mode

    // Reset to automatic mode after 5000 ms
    setTimeout(() => {
      setIsManual(false);
    }, 10);
  };

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
    <EmailBuilderStyle className="powerful-email-section">
      <div className="container">
        <p className="title">Powerful E-mail Builder</p>
        <ScrollAnimate delay={300}>
          <div className="row g-4">
            <div className="col-md-6">
              <Slider
                {...settingsNav}
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                swipeToSlide={true}
                focusOnSelect={true}
                className="email-builder-slider-nav"
              >
                {emailItems.map((item, index) => (
                  <div key={index} className="email-collaps-item">
                    <div className="email-collaps-number">{item.number}</div>
                    <div className="email-collaps-text">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            <div className="col-md-6">
              <Slider
                {...settingsFor}
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                className="email-builder-slider-for"
              >
                {emailItems.map((item, index) => (
                  <div key={index} className="slider-item">
                    <img src={item.imgSrc} alt={`img-${index}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </EmailBuilderStyle>
  );
};

export default EmailBuilder;
