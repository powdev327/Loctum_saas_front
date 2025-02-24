import { useEffect, useRef } from "react";
import EcoSystemStyle from "./EcoSystem.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

import ecoLinePC from "../../../assets/images/defi/eco-lines.svg";
import ecoLineMobile from "../../../assets/images/defi/eco_line.png";
import globeImg from "../../../assets/images/defi/globe.png";
import cloud1Img from "../../../assets/images/defi/cloud1.svg";
import cloud2Img from "../../../assets/images/defi/cloud2.svg";
import cloud3Img from "../../../assets/images/defi/cloud3.svg";
import cloud4Img from "../../../assets/images/defi/cloud4.svg";
import arrowRightBlackImg from "../../../assets/images/crypto-token/arrow-right-black.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const EcoSystem = () => {
  const cloud3Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const globeRef = useRef(null);

  const handleScroll = () => {
    const y = window.scrollY;

    // Adjustments for cloud3
    const xCloud3 = cloud3Ref.current.getBoundingClientRect().top;
    let animationValueCloud3 = (y - xCloud3) / 40;

    // Adjustments for cloud2
    const xCloud2 = cloud2Ref.current.getBoundingClientRect().top;
    let animationValueCloud2 = (y - xCloud2) / 40;

    // Reverse the direction of both clouds
    animationValueCloud3 = -animationValueCloud3;
    2;

    // Adjustments for globe
    const xGlobe = globeRef.current.getBoundingClientRect().top;
    let animationValueGlobe = (y - xGlobe) / 9;

    cloud3Ref.current.style.transform = `translateX(${animationValueCloud3}px)`;
    cloud2Ref.current.style.transform = `translateX(${animationValueCloud2}px)`;
    globeRef.current.style.transform = `rotate(${animationValueGlobe}deg)`;
  };

  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <EcoSystemStyle className="ecosystem-section">
      <div className="container">
       <ScrollAnimate delay={200}>
       <div className="defi" data-splitting>
          <span className="sub-title">Ecosystem</span>
          <h2 className="title">Powerful DeFi</h2>
        </div>
       </ScrollAnimate>

        <ScrollAnimate delay={250}>
        <p>
          We use as filler text for layouts, non-readability is of great
          importance but because those who do not know how to pursue pleasure.
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain
        </p>
        <a className="defi-launchapp-btn btn-hov-effect dark">
          Launch App
          <img src={arrowRightBlackImg} alt="icon" />
          <span className="round-shape" />
        </a>
        </ScrollAnimate>
        <div className="ecosystem-text">
          <ScrollAnimate delay={300}>
          <ul>
            <li>
              Automated yield <br />
              farming
            </li>
            <li>
              Staking rewards <br />
              system
            </li>
            <li>
              Governance voting <br />
              system
            </li>
            <li>
              Liquidity pools
              <br />
              management
            </li>
            <li>
              Instant token
              <br />
              swaps
            </li>
          </ul>
          </ScrollAnimate>
        </div>
        <ScrollAnimate delay={300}>
        <div className="ecosystem-content">
          <div className="eco-line">
            <img src={ecoLinePC} alt="img" className="eco-line-pc" />
            <img src={ecoLineMobile} alt="img" className="eco-line-mobile" />
          </div>
          <div className="globe-img">
            <img src={globeImg} alt="img" className="globe" ref={globeRef} />
            <img src={cloud1Img} alt="img" className="cloud1" />
            <img src={cloud2Img} alt="img" className="cloud2" ref={cloud2Ref} />
            <img src={cloud3Img} alt="img" className="cloud3" ref={cloud3Ref} />
            <img src={cloud4Img} alt="img" className="cloud4" />
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </EcoSystemStyle>
  );
};

export default EcoSystem;
