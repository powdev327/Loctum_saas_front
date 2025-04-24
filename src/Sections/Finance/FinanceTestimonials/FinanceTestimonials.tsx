import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import FinanceTestimonialsStyle from "./FinanceTestimonials.style";

import quoteBgImg from "../../../assets/images/finance-index/customers-quote-bg.svg";
import quoteIcon from "../../../assets/images/finance-index/quote.svg";
import bohemianManImg from "../../../assets/images/finance-index/bohemian-man.png";
import quoteImg2 from "../../../assets/images/finance-index/quote-img2.png";
import quoteImg3 from "../../../assets/images/finance-index/quote-img3.png";
import quoteImg4 from "../../../assets/images/finance-index/quote-img4.png";
import quoteImg5 from "../../../assets/images/finance-index/quote-img5.png";
import arrowRightIcon from "../../../assets/images/icons/features-arrow-right.svg";
import brand1Logo from "../../../assets/images/brands/1.png";
import brand2Logo from "../../../assets/images/brands/2.png";
import brand3Logo from "../../../assets/images/brands/3.png";
import brand4Logo from "../../../assets/images/brands/4.png";
import brand6Logo from "../../../assets/images/brands/6.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceTestimonials = () => {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 5,
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
    <FinanceTestimonialsStyle className="customers-quote-section">
      <ScrollAnimate delay={200}>
      <div className="container">
        <div className="customers-quote-card">
          <div className="customers-quote-bg">
            <img src={quoteBgImg} alt="quote background" />
          </div>
          <div className="quote-icon">
            <img src={quoteIcon} alt="quote icon" />
          </div>
          <div className="slider-quote-for">
            <Slider {...settingsFor} ref={sliderForRef} className="slider-for">
              <div>
                <div className="customers-quote-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="customers-quote-img">
                        <span className="quote-customers-img">
                          <img src={bohemianManImg} alt="bohemian man" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="customers-quote-text">
                        <p>
                          I must explain to you how all this mistaken. Tdea of
                          denouncing pleasure and praising pain was born and I
                          will give you a complete account. 😍
                        </p>
                        <div className="quote-customer-name">
                          <span className="name">Roe Smith</span>
                          <span className="duration">
                            Director, Growth Marketing
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="customers-quote-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="customers-quote-img">
                        <span className="quote-customers-img">
                          <img src={quoteImg2} alt="quote img 2" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="customers-quote-text">
                        <p>
                          We use as filler text for layouts, non-readability is
                          of great importance but because those who do not know
                          how to pleasure rationally encounter consequences that
                          are pleasure rationally encounter ❤️ ❤️
                        </p>
                        <div className="quote-customer-name">
                          <span className="name">Aurthoe De,</span>
                          <span className="duration">CEO - Dorid Co</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="customers-quote-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="customers-quote-img">
                        <span className="quote-customers-img">
                          <img src={quoteImg3} alt="quote img 3" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="customers-quote-text">
                        <p>
                          Making this the first true 😍 generator on the
                          Internet. It uses a dictionary of over words, combined
                          with a handful of model sentence structures, to
                          generate 👏👏
                        </p>
                        <div className="quote-customer-name">
                          <span className="name">Dennis Lail</span>
                          <span className="duration">Marketer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="customers-quote-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="customers-quote-img">
                        <span className="quote-customers-img">
                          <img src={quoteImg4} alt="quote img 4" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="customers-quote-text">
                        <p>
                          Very denounce with righteous indignation and dislike
                          men who are so beguiled and demoralized by the charms
                          of pleasure of the moment, combined with a handfulso
                          blinded by desire encounter 🥰 🤜 🤛
                        </p>
                        <div className="quote-customer-name">
                          <span className="name">Peter Leo,</span>
                          <span className="duration">CTO - Criston</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="customers-quote-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="customers-quote-img">
                        <span className="quote-customers-img">
                          <img src={quoteImg5} alt="quote img 5" />
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="customers-quote-text">
                        <p>
                          Making this the first true 😍 generator on the
                          Internet. It uses a dictionary of over words, combined
                          with a handful of model sentence structures, to
                          generate 👏👏
                        </p>
                        <div className="quote-customer-name">
                          <span className="name">Dennis Lail</span>
                          <span className="duration">Marketer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className="customers-quote-card-footer">
            <div className="slider-quote-nav">
              <Slider
                {...settingsNav}
                ref={sliderNavRef}
                className="slider-nav"
              >
                <div className="slide-item">
                  <img src={brand1Logo} alt="brand logo 1" />
                </div>
                <div className="slide-item">
                  <img src={brand2Logo} alt="brand logo 2" />
                </div>
                <div className="slide-item">
                  <img src={brand3Logo} alt="brand logo 3" />
                </div>
                <div className="slide-item">
                  <img src={brand4Logo} alt="brand logo 4" />
                </div>
                <div className="slide-item">
                  <img src={brand6Logo} alt="brand logo 6" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      </ScrollAnimate>
    </FinanceTestimonialsStyle>
  );
};

export default FinanceTestimonials;
