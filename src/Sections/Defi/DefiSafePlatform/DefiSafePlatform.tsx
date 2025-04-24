import { useEffect, useState } from "react";
import DefiSafePlatformStyle from "./DefiSafePlatform.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import DefiStatistic from "./DefiStatistic";
import { platformItems } from "../../../assets/data/DefiData/SafePlatformData";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

import galaxy1 from "../../../assets/images/defi/glaxy_1.png";
import galaxy2 from "../../../assets/images/defi/glaxy_2.png";
import rocket from "../../../assets/images/defi/rocket.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DefiSafePlatform = () => {
  const [animationValue, setAnimationValue] = useState(1);
  const [galaxyAnimationValue, setGalaxyAnimationValue] = useState(1);
  const [rocketAnimationValue, setRocketAnimationValue] = useState(1);

  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });

    const handleScroll = () => {
      const defiSafePlatformImg = document.querySelector(
        ".defi-safe-platform-content"
      );

      if (defiSafePlatformImg) {
        const y = window.scrollY;
        let x = defiSafePlatformImg.offsetTop;
        x = x + 400;

        let newAnimationValue = (y - x) / 4;

        const animationStop = 100;

        if (newAnimationValue < 0) {
          newAnimationValue = 0;
        }

        if (newAnimationValue > animationStop) {
          newAnimationValue = animationStop;
        }

        setAnimationValue(newAnimationValue);
      }

      // Galaxy Animation
      const galaxy = document.querySelector(".galaxy1");
      if (galaxy) {
        const y = window.scrollY;
        let x = galaxy.offsetTop;
        x = x + 400;

        let newAnimationValue = (y - x) / 6;

        const animationStop = 100;

        if (newAnimationValue < 0) {
          newAnimationValue = 0;
        }

        if (newAnimationValue > animationStop) {
          newAnimationValue = animationStop;
        }

        setGalaxyAnimationValue(newAnimationValue);
      }

      // Rocket Animation
      const rocket = document.querySelector(".rocket");
      if (rocket) {
        const y = window.scrollY;
        let x = rocket.offsetTop;
        x = x + 400;

        let newAnimationValue = (-1 * (y - x)) / 6;

        const animationStop = 100;

        if (newAnimationValue < 0) {
          newAnimationValue = 0;
        }

        if (newAnimationValue > animationStop) {
          newAnimationValue = animationStop;
        }

        setRocketAnimationValue(newAnimationValue);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationValue]);

  return (
    <DefiSafePlatformStyle className="defi-safe-platform-section">
      <div className="overlay">
        <div className="defi-safe-platform-shape">
          <img
            src={galaxy1}
            alt="img"
            className="galaxy1"
            style={{
              transform: `translateY(${galaxyAnimationValue}px)`,
            }}
          />
          <img src={galaxy2} alt="img" className="galaxy2" />
          <img
            src={rocket}
            alt="img"
            className="rocket"
            style={{
              transform: `translateY(${rocketAnimationValue}px)`,
            }}
          />
        </div>
        <DefiStatistic />
        <div className="defi-safe-platform-content-section">
          <div className="container">
            <TitleStyleWrapper>
              <div className="section-title defi">
                <span className="sub-title" data-splitting>
                  Safe platform
                </span>
                <h2 className="title">
                  <span data-splitting>Connecting DeFi to the</span> <br />
                  <span className="liniar">Web3.0 </span>
                  <span data-splitting>Ecosystem</span>
                </h2>
              </div>
            </TitleStyleWrapper>
            <div className="defi-safe-platform-content">
              <div className="row">
                {/* Use map to render each platform item dynamically */}
                {platformItems.map((item, index) => (
                  <div key={index} className="col-lg-4 col-sm-6">
                    <ScrollAnimate delay={item.delay}>
                      <div className="defi-safe-platform-content">
                        <div className="defi-safe-platform-img">
                          <img
                            src={item.icon}
                            alt="icon"
                            style={{
                              transform: `translateY(${animationValue}px)`,
                            }}
                          />
                        </div>
                        <div className="defi-safe-platform-text">
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefiSafePlatformStyle>
  );
};

export default DefiSafePlatform;
