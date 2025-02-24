import CryptoAssetStyle from "./CryptoAsset.style";
import assetsBgDots from "../../../assets/images/crypto2/assets-bg-dots.svg";
import coinsImage from "../../../assets/images/crypto2/coins.svg";
import blurImage from "../../../assets/images/crypto2/blur.png";
import { useEffect, useState } from "react";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CryptoAsset = () => {
  const headlines = ["2500+ Crypto Assets", "2500+ Crypto Assets"];

  const [visibleIndex, setVisibleIndex] = useState(0);
  const [animationValue, setAnimationValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <CryptoAssetStyle className="crypto-assets-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <div className="crypto-assets-box">
          <img src={assetsBgDots} alt="img" className="dots-bg" />
          <img src={coinsImage} alt="img" className="coin-bg" />
          <img src={blurImage} alt="img" className="blur-img" />
          <div className="cd-intro m-0">
            <h3 className="cd-headline slide mb-0">
              <span className="cd-words-wrapper">
                {headlines.map((headline, index) => (
                  <b
                    key={index}
                    className={
                      index === visibleIndex ? "is-visible" : "is-hidden"
                    }
                  >
                    {headline}
                  </b>
                ))}
              </span>
            </h3>
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </CryptoAssetStyle>
  );
};

export default CryptoAsset;
