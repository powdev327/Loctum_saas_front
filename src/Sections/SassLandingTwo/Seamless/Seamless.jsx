import { useEffect, useRef, useState } from "react";
import SeamlessStyle from "./Seamless.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { cardData } from "../../../assets/data/SassTwoData/SeamlessData";

import seamlessShape from "../../../assets/images/sass2/seamless-shape.svg";
import arrowRightWhite from "../../../assets/images/icons/arrow-right-white.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Seamless = () => {
  const updateAnimationValue = (element, y, x, divisionFactor) => {
    const seamlessShapeImg = document.querySelector(element);

    let animationValue = 10;
    animationValue = (-1 * (y - x)) / divisionFactor;

    seamlessShapeImg.style.setProperty(
      "transform",
      `translateY(${animationValue}px)`
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const seamlessSection = document.querySelector(
        ".seamless-solutions-section"
      );
      const x = seamlessSection.offsetTop;
      const y = window.scrollY;

      // Update animation values for different elements
      updateAnimationValue(".seamless-shape", y, x, 12);
      updateAnimationValue(".seamless-card .seamless-card1", y, x, 6);
      updateAnimationValue(".seamless-card .seamless-card2", y, x, 6);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SeamlessStyle className="seamless-solutions-section">
      <div className="container">
        <img src={seamlessShape} alt="shape" className="seamless-shape" />
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Unlock the Full Potential of Your Business with Staco"
            subtitle="Seamless Solutions"
            titleMaxW="700px"
            parentClass="sass"
          />
        </ScrollAnimate>
        <div className="seamless-card-section">
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-md-6" key={index}>
                <ScrollAnimate delay={card.delay}>
                  <div className={`seamless-card ${card.cardClass}`}>
                    <span>
                      <img src={card.iconSrc} alt="icon" />
                    </span>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <a href={card.demoLink}>
                      Try Demo
                      <img src={arrowRightWhite} alt="icon" />
                    </a>
                    <img
                      src={card.bgImageSrc}
                      alt="img"
                      className={`card-bg ${card.cardClass}`}
                    />
                  </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SeamlessStyle>
  );
};

export default Seamless;
