import { useEffect } from "react";
import CryptoBallsStyle from "./CryptoBalls.style";
import tickIcon from "../../../assets/images/crypto2/card-tick.svg";
import moneyImg from "../../../assets/images/crypto2/money-change.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CryptoBalls = () => {
  const animateBall = (section, y, x, n) => {
    const cryptoBannerImg = document.querySelector(section);

    let animationValue = 1;
    animationValue = (n * (y - x)) / 8;

    let animationStop = 100;

    if (animationValue < 0) {
      animationValue > 0;
    }

    if (animationValue > animationStop) {
      animationValue = animationStop;
    }

    cryptoBannerImg.style.setProperty(
      "transform",
      `translateY(${animationValue}px)`
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const ballSection = document.querySelector(".safe-platform-ball-section");
      const y = window.scrollY;
      const x = ballSection.offsetTop;

      animateBall(".safe-platform-ball1", y, x, -1);
      animateBall(".safe-platform-ball2", y, x, 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <CryptoBallsStyle className="safe-platform-ball-section">
      <div className="container">
        <div className="safe-platform-ball-content">
          <div className="row">
            <div className="col-sm-6">
              <ScrollAnimate delay={200}>
              <div className="safe-platform-ball safe-platform-ball1">
                <span>
                  <img src={tickIcon} alt="icon" />
                </span>
                <h4>
                  Buy crypto with <br />
                  Credit card
                </h4>
                <p>
                  Cases are perfectly simple and easy to distinguish. In a free
                  hour, when our power of choice
                </p>
              </div>
              </ScrollAnimate>
            </div>
            <div className="col-sm-6">
              <ScrollAnimate delay={300}>
              <div className="safe-platform-ball safe-platform-ball2 mb-0">
                <span>
                  <img src={moneyImg} alt="icon" />
                </span>
                <h4>
                  Get best exchange
                  <br />
                  Rate ever
                </h4>
                <p>
                  In a free hour, when our power of choice is untrammelled and
                  when nothing prevents our being able
                </p>
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </CryptoBallsStyle>
  );
};

export default CryptoBalls;
