import CryptoOneFeaturesStyle from "./CryptoOneFeatures.style";
import { featuresData } from "../../../assets/data/CryptoWallet/FeaturesData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CryptoOneFeatures = () => {
  return (
    <CryptoOneFeaturesStyle className="crypto-features-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="crypto-features-content">
            <div className="row">
              {featuresData.map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div
                    className={`crypto-features-text crypto-features-text${index + 1
                      }`}
                  >
                    <span>
                      <img src={feature.icon} alt="icon" />
                    </span>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </CryptoOneFeaturesStyle>
  );
};

export default CryptoOneFeatures;
