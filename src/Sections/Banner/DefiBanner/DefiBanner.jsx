import { useEffect } from "react";
import { useTypingHeadlines } from "use-typing-headlines";
import DefiBannerStyle from "./DefiBanner.style";
import MultiChain from "../../Defi/MultiChain/MultiChain";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import ScrollAnimate from './../../../Components/ScrollAnimate';

const DefiBanner = () => {
  const [defiHeadline] = useTypingHeadlines([
    "Liquidity",
    "Swap",
    "Bridge",
    "Farming",
  ]);

  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <DefiBannerStyle className="defi-banner-section">
      <div className="defi-banner-inner">
        <div className="overlay">
          <div className="container">
            <ScrollAnimate delay={200}>
            <div className="defi-banner-text">
              <h1 className="cd-headline clip is-full-width">
                <span data-splitting className="p-0">
                  Trading DeFi Web3
                </span>
                <br />
                <span className="cd-words-wrapper animation-text">
                  <b>&nbsp;{defiHeadline}&nbsp;</b>
                </span>
              </h1>
              <p data-splitting>
                Blockchain Trading on the Decentralized Web: An Introduction to
                Web 3.0 Exploring the Opportunities and Challenges
              </p>
              <a href="#" className="defi-banner-btn btn-hov-effect">
                <div className="defi-banner-btn-shape">
                  <div className="shape1" />
                  <div className="shape2" />
                  <div className="shape3" />
                </div>
                Trade Now
                <span className="round-shape" />
              </a>
            </div>
            </ScrollAnimate>
            {/* multi chain section */}
            <MultiChain />
          </div>
        </div>
      </div>
    </DefiBannerStyle>
  );
};

export default DefiBanner;
