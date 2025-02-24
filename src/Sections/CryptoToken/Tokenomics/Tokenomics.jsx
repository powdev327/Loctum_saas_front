import TokenomicsStyle from "./Tokenomics.style";
import {
  progressBars,
  tokenomicsList,
} from "../../../assets/data/CryptoTokenData/TokenomicsData";

import MashGard from "../../../assets/images/crypto-token/pink-mash-gard.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Tokenomics = () => {
  return (
    <TokenomicsStyle className="crypto-tokenomics-section">
      <div className="container">
        <div className="tokenomics-card">
          <div className="overlay">
            <img src={MashGard} alt="img" className="shape" />
            <ScrollAnimate delay={200}>
            <div className="tokenomics-content">
              <h2 data-splitting="">tokenomics</h2>
              <div className="tokenomics-progress-section">
                {progressBars.map((bar, index) => (
                  <div
                    key={index}
                    className={`tokenomics-progress ${bar.className}`}
                  >
                    <div className="tokenomics-progress-bg" />
                    <div className="tokenomics-progress-text">
                      <h3 className="quantico number-diy">
                        <span className={`data ${bar.dataClass}`} />%
                      </h3>
                      <p>{bar.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </ScrollAnimate>
          </div>
        </div>
        <div className="tokenomics-list">
          <ScrollAnimate delay={300}>
          <ul>
            {tokenomicsList.map((item, index) => (
              <li key={index}>
                <span>{item.label}</span>
                <h5>
                  {item.value}
                  {item.percentageChange && (
                    <span>{item.percentageChange}</span>
                  )}
                </h5>
              </li>
            ))}
          </ul>
          </ScrollAnimate>
        </div>
      </div>
    </TokenomicsStyle>
  );
};

export default Tokenomics;
