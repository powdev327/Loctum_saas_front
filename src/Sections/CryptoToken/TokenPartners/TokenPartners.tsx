import { useEffect, useRef } from "react";
import TokenPartnersStyle from "./TokenPartners.style";
import { partnerData } from "../../../assets/data/CryptoTokenData/TokenPartnersData";

import greenShadowImg from "../../../assets/images/crypto-token/green-shadow.png";
import roundCircleImg from "../../../assets/images/crypto-token/round-circle.png";
import arrowRightYellowIcon from "../../../assets/images/crypto-token/arrow-right-yellow.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TokenPartners = () => {
  const handleMouseEnter = (event) => {
    const item = event.currentTarget;
    const roundItem = item.querySelector(".round");

    item.classList.add("animate");

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    if (buttonY < 105) {
      roundItem.style.top = 0 + "px";
    } else if (buttonY > 30) {
      roundItem.style.top = 210 + "px";
    }

    roundItem.style.left = buttonX + "px";
    roundItem.style.width = "1px";
    roundItem.style.height = "1px";
  };

  const handleMouseLeave = (event) => {
    const item = event.currentTarget;
    const roundItem = item.querySelector(".round");

    item.classList.remove("animate");

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    if (buttonY < 105) {
      roundItem.style.top = 0 + "px";
    } else if (buttonY > 30) {
      roundItem.style.top = 210 + "px";
    }

    roundItem.style.left = buttonX + "px";
  };

  useEffect(() => {
    const partnersLogo = document.querySelectorAll(".partners-logo");

    partnersLogo.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      partnersLogo.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <TokenPartnersStyle className="crypto-token-partners">
      <div className="container">
        <ScrollAnimate delay={200}>
        <h2 className="partners-title" data-splitting="">
          Meet the Partners and <br />
          collaborators
        </h2>
        </ScrollAnimate>
        <div className="green-shape">
          <img src={greenShadowImg} alt="img" />
        </div>
        <ScrollAnimate delay={250}>
        <div className="partners-list">
          <ul>
            {partnerData.map((partner) => (
              <li key={partner.id}>
                <div className="partners-logo">
                  <img src={partner.logoSrc} alt="logo" />
                  <div className="btn-outline">
                    <img src={roundCircleImg} alt="img" />
                  </div>
                  <span className="round" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        </ScrollAnimate>
        <div>
          <a className="become-investor-btn btn-hov-effect">
            <span>Become an Investor</span>
            <img src={arrowRightYellowIcon} alt="icon" />
            <span className="round-shape" />
          </a>
        </div>
      </div>
    </TokenPartnersStyle>
  );
};

export default TokenPartners;
