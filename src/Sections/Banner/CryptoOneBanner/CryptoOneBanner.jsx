import { useEffect, useState } from "react";
import Slider from "react-slick";
import CryptoOneBannerStyle from "./CryptoOneBanner.style";

import BannerGraphicsImg from "../../../assets/images/crypto/banner-graphics.svg";
import MeshGradImg from "../../../assets/images/crypto/mesh-grad.png";
import ArrowRightIcon from "../../../assets/images/crypto/arrow-right.svg";
import WalletScreenImg from "../../../assets/images/crypto/wallet_screen.png";
import PhoneScreenWebp from "../../../assets/images/crypto/phone_screen.webp";
import { NavLink } from "react-router-dom";
import ScrollAnimate from './../../../Components/ScrollAnimate';

const CryptoOneBanner = () => {
  const [animationValue, setAnimationValue] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const bannerElements = document.querySelectorAll(
        ".mobile-img, .banner-grad"
      );

      bannerElements.forEach((cryptoBannerImg) => {
        const y = window.scrollY;
        let x = cryptoBannerImg.offsetTop;
        x = x - 400;

        let newAnimationValue = (y - x) / 6;

        const animationStop = 100;

        newAnimationValue = newAnimationValue < 0 ? 0 : newAnimationValue;
        newAnimationValue =
          newAnimationValue > animationStop ? animationStop : newAnimationValue;

        cryptoBannerImg.style.transform = `translateY(${newAnimationValue}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationValue]);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: false,
  };

  return (
    <CryptoOneBannerStyle className="crypto-wallet-hero-section">
      <div className="hero-overlay">
        <ScrollAnimate delay={300}>
          <img src={BannerGraphicsImg} alt="img" className="banner-vector" />
        </ScrollAnimate>
        <img src={MeshGradImg} alt="img" className="banner-grad" />
      </div>
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="crypto-hero-section-text">
            <div className="banner-animetion">
              <div className="new">New</div>
              <p>Polygon network NFTs added for mint</p>
              <span>
                <img src={ArrowRightIcon} alt="icon" />
              </span>
            </div>
            <h1>
              Metaverse web <span>3.0</span> crypto wallet
            </h1>
            <p className="banner-text">
              Staco is the dedicated platform for your crypto management to grow
              your blockchain assets quickly
            </p>
            <NavLink to={"/sign-up"} className="crypto-glow-btn">
              <span className="btn-inner">
                <span className="btn-normal-text">Get Start for Free</span>
                <span className="btn-hover-text">Get Start for Free</span>
              </span>
            </NavLink>
          </div>
        </ScrollAnimate>
        <ScrollAnimate delay={250}>
          <div className="crypto-hero-img">
            <div className="dhashboard-img">
              <img src={WalletScreenImg} alt="img" />
            </div>
            <div className="mobile-img">
              <Slider {...settings} className="mobile-slider">
                <div>
                  <img src={PhoneScreenWebp} alt="img" />
                </div>
                <div>
                  <img src={PhoneScreenWebp} alt="img" />
                </div>
                <div>
                  <img src={PhoneScreenWebp} alt="img" />
                </div>
              </Slider>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </CryptoOneBannerStyle>
  );
};

export default CryptoOneBanner;
