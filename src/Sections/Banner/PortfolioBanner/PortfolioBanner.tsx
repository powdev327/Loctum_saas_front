import Slider from "react-slick";
import PortfolioBannerStyle from "./PortfolioBanner.style";

import BannerImg from "../../../assets/images/portfolio/v7banner-img.svg";
import ScrollAnimate from './../../../Components/ScrollAnimate';

const PortfolioBanner = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <PortfolioBannerStyle className="hero-section-v6">
      <div className="container">
        <div className="v7hero-section-text">
          <ScrollAnimate delay={200}>
            <Slider
              {...sliderSettings}
              className="banner-text banner-text-slider"
            >
              <h2 className="one">Design.</h2>
              <h2 className="two">Product.</h2>
              <h2 className="three">Brands.</h2>
            </Slider>

            <p>
              I must explain to you how all this mistaken. The idea of denouncing
              pleasure and praising pain was born
            </p>
            <div className="v6hero-section-btns">
              <a href="#" className="case-studies-btn bg-blue-btn">
                <span className="btn-inner">
                  <span className="btn-normal-text">Our Case Studies</span>
                  <span className="btn-hover-text">Our Case Studies</span>
                </span>
              </a>
              <a href="/contact-us" className="contact-btn">
                <span className="btn-inner">
                  <span className="btn-normal-text">Contact Us</span>
                  <span className="btn-hover-text">Contact Us</span>
                </span>
              </a>
            </div>
          </ScrollAnimate>
        </div>
      </div>
      <div className="v6hero-img">
        <ScrollAnimate delay={300}>
          <img src={BannerImg} alt="banner-img" />
        </ScrollAnimate>
      </div>
    </PortfolioBannerStyle>
  );
};

export default PortfolioBanner;
