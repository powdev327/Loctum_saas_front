import { useEffect } from "react";
import anime from "animejs";
import CryptoTokenBannerStyle from "./CryptoTokenBanner.style";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import Countup from "react-countup-animate";

import BannerBallImg from "../../../assets/images/crypto-token/banner-ball.png";
import MeshGradImg from "../../../assets/images/crypto-token/mesh-grad.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CryptoTokenBanner = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });

    anime({
      targets: "fadeInUp",
      translateY: [50, 0], // Move from 50px below to the original position
      scale: [0.9, 1], // Scale from 0.9 to 1
      opacity: [0, 1], // Fade in from opacity 0 to 1
      easing: "easeOutQuad", // Easing function
      duration: 1000, // Duration of 1000ms
      delay: 500, // Delay before animation starts
    });
  }, []);

  return (
    <CryptoTokenBannerStyle className="crypto-token-banner">
      <div className="crypto-token-banner-shape">
        <div className="ractangle" />
        <div className="ractangle" />
        <div className="ractangle" />
        <div className="ractangle" />
        <div className="ractangle" />
      </div>
      <div className="crypto-token-banner-inner">
        <div className="overlay">
          <div className="container">
            <ScrollAnimate delay={200}>
            <div className="crypto-token-banner-text">
              <h1 className="quantico fadeInUp" data-splitting>
                Unlocking New <br />
                Digital Horizons
              </h1>
              <p className="fadeInUp">
                Securing Your Investments in the Digital Age with Cutting-Edge
                Blockchain, Redefining Reality through Infinite of the Metaverse
              </p>
              <a
                href="#"
                className="crypto-token-banner-btn btn-hov-effect dark"
              >
                <span className="btn-inner">
                  <span className="btn-normal-text">Start Building</span>
                  <span className="btn-hover-text">Start Building</span>
                </span>
                <span className="round-shape" />
              </a>
            </div>
            </ScrollAnimate>
            <div className="crypto-token-banner-ball">
              <img src={BannerBallImg} alt="Banner Ball" loading="lazy" />
            </div>
            <div className="masd-grad">
              <img src={MeshGradImg} alt="Mesh Gradient" loading="lazy" />
            </div>
            <div className="crypto-token-banner-card-section">
              <div className="row">
                <div className="col-lg-7">
                  <div className="row">
                    <div className="col-sm-7">
                      <ScrollAnimate delay={200}>
                      <div className="crypto-banner-card">
                        <div className="banner-card-live">
                          <p>Transactions</p>
                          <div className="video__icon">
                            <div className="circle--outer" />
                            <div className="circle--inner" />
                          </div>
                        </div>

                        <h2 className="quantico number-diy">
                          <Countup
                            number={55695693}
                            duration={1}
                            startDelay="ease-out"
                            endDelay="ease-in"
                            reverse={true}
                            className="data"
                          />
                        </h2>
                      </div>
                      </ScrollAnimate>
                    </div>
                    <div className="col-sm-5">
                      <ScrollAnimate delay={220}>
                      <div className="crypto-banner-card">
                        <div className="banner-card-live">
                          <p>Market Cap </p>
                        </div>
                        <h2 className="quantico number-diy">
                          <Countup
                            number={5.03}
                            duration={1}
                            startDelay="ease-out"
                            endDelay="ease-in"
                            reverse={true}
                            className="data"
                          />
                          M+
                        </h2>
                      </div>
                      </ScrollAnimate>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                     <ScrollAnimate delay={250}>
                     <div className="crypto-banner-card2">
                        <div className="banner-card-live">
                          <p>Active account</p>
                        </div>
                        <h2 className="quantico number-diy">
                          <Countup
                            number={24}
                            duration={1}
                            startDelay="ease-out"
                            endDelay="ease-in"
                            reverse={true}
                            className="data"
                          />
                          M+
                        </h2>
                      </div>
                     </ScrollAnimate>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <ScrollAnimate delay={300}>
                      <div className="crypto-banner-card2 mb-0">
                        <div className="banner-card-live">
                          <p>% Staked</p>
                        </div>
                        <h2 className="quantico number-diy">
                          <Countup
                            number={49}
                            duration={1}
                            startDelay="ease-out"
                            endDelay="ease-in"
                            reverse={true}
                            className="data"
                          />
                          %
                        </h2>
                      </div>
                      </ScrollAnimate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-overlay" />
      </div>
    </CryptoTokenBannerStyle>
  );
};

export default CryptoTokenBanner;
