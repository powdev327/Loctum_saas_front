import { useEffect } from "react";
import SassVideoStyle from "./SassVideo.style";

import videoShape1 from "../../../assets/images/sass2/video-shape1.svg";
import videoShape2 from "../../../assets/images/sass2/video-shape2.svg";
import videoShape3 from "../../../assets/images/sass2/video-shape3.svg";
import videoShape4 from "../../../assets/images/sass2/video-shape4.svg";
//import sassVideo from "../../../assets/videos/sass.mp4";
import sassVideo from "../../../assets/videos/login-signup video.mp4";


import ScrollAnimate from "../../../Components/ScrollAnimate";

const SassVideo = () => {
  const updateAnimationValue = (element, y, x, divisionFactor, n) => {
    const elementItem = document.querySelector(element);

    let animationValue = 10;
    animationValue = (n * (y - x)) / divisionFactor;

    let animationStop = 100;

    if (animationValue < 0) {
      animationValue = 0;
    }

    if (animationValue > animationStop) {
      animationValue = animationStop;
    }

    elementItem.style.setProperty(
      "transform",
      `translateY(${animationValue}px)`
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const seamlessSection = document.querySelector(".sass-video-section");
      const x = seamlessSection.offsetTop;
      const y = window.scrollY;

      // Update animation values
      updateAnimationValue(".sass-video-container .shape1", y, x, 15, 1);
      updateAnimationValue(".sass-video-container .shape4", y, x, 15, 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SassVideoStyle className="sass-video-section">
      <div className="container">
        <div className="sass-video-container">
         <ScrollAnimate delay={200}>
         <div className="video-card">
            <video loop autoPlay playsInline muted>
              <source src={sassVideo} type="video/mp4" />
            </video>
          </div>
         </ScrollAnimate>
          <img src={videoShape1} alt="shape" className="shape1" />
          <img src={videoShape2} alt="shape" className="shape2" />
          <img src={videoShape3} alt="shape" className="shape3" />
          <img src={videoShape4} alt="shape" className="shape4" />
        </div>
      </div>
    </SassVideoStyle>
  );
};

export default SassVideo;
