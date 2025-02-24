import CryptoSupportStyle from "./CryptoSupport.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import {
  supportLinks,
  supportInnerCards,
} from "../../../assets/data/CryptoWalletTwo/CryptoSupport";

import dottedLineBgShape from "../../../assets/images/crypto2/dotted-line-bg-shape.svg";
import blurImage2 from "../../../assets/images/crypto2/blur2.png";
import arrowRightGreen from "../../../assets/images/crypto2/arrow-right-green.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CryptoSupport = () => {
  return (
    <CryptoSupportStyle className="support-section pb-0">
      <div className="container">
        <div className="support-card">
          <img src={dottedLineBgShape} alt="img" className="dot-bg" />
          <img src={blurImage2} alt="img" className="blur-img" />
          <div className="row">
            <div className="col-lg-7">
              <div className="support-card-left">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    title="Join our community Get support and updates"
                    subtitle="Support"
                    titleMaxW="540px"
                    parentClass="crypto2 title-green"
                    titleClass="text-white"
                  />
                </ScrollAnimate>
                <ScrollAnimate delay={250}>
                  <div className="support-list">
                    <ul>
                      {supportLinks.map((link, index) => (
                        <li key={index}>
                          <a href="#">
                            <img src={link.icon} alt="" />
                            <span>{link.text}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="support-card-right">
                {supportInnerCards.map((innerCard, index) => (
                  <ScrollAnimate>
                    <div
                    className={`support-inner-card support-inner-card${index + 1 }`}
                    key={index}
                  >
                    <h5 className="text-white wt-700">
                      <img src={innerCard.icon} alt="icon" />
                      {innerCard.title}
                    </h5>
                    <p>{innerCard.description}</p>
                    <a href="#">
                      Discover
                      <img src={arrowRightGreen} alt="icon" />
                    </a>
                  </div>
                  </ScrollAnimate>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CryptoSupportStyle>
  );
};

export default CryptoSupport;
