import { useEffect, useRef, useState } from "react";
import FinanceLetsTalkStyle from "./FinanceLetsTalk.style";
import letsTalkImg from "../../../assets/images/finance-index/lets-talk-img.svg";
import arrowRightIcon from "../../../assets/images/icons/features-arrow-right.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceLetsTalk = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      let x = sectionRef.current.offsetTop - window.innerHeight / 2;
      const imgHeight = imgRef.current.clientHeight;

      // Define the range for the animation
      const startScroll = x;
      const endScroll = x + window.innerHeight / 2; // Adjust based on desired scroll range

      // Calculate animation value
      let newAnimationValue =
        imgHeight - ((y - startScroll) / (endScroll - startScroll)) * imgHeight;

      // Clamp the value between imgHeight and 0
      newAnimationValue = Math.max(0, Math.min(imgHeight, newAnimationValue));

      // Apply the transform
      imgRef.current.style.transform = `translateY(${newAnimationValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FinanceLetsTalkStyle className="lets-talk-section" ref={sectionRef}>
      <ScrollAnimate delay={200}>
        <div className="container">
          <div className="lets-talk-content">
            <div className="row">
              <div className="col-md-6">
                <div className="lets-talk-text">
                  <h2>
                    We are building <br />
                    financial foundations
                  </h2>
                  <NavLink to={"/contact-us"} className="lets-talk-btn">
                    Let’s Talk
                    <img src={arrowRightIcon} alt="icon" />
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6">
                <div className="lets-talk-img" style={{ position: "relative" }}>
                  <img
                    src={letsTalkImg}
                    alt="img"
                    ref={imgRef}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </FinanceLetsTalkStyle>
  );
};

export default FinanceLetsTalk;
