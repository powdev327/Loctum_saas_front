import KeyPointsStyleWrapper from "./KeyPoints.style";
import { keyPointsData } from "../../../assets/data/CryptoTokenData/KeypointData";

import blurLayerImage from "../../../assets/images/crypto-token/blur-layer.png";
import dittedLineImage from "../../../assets/images/crypto-token/ditted_line.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const KeyPoints = () => {
  return (
    <KeyPointsStyleWrapper className="key-points-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <div className="row">
          {keyPointsData.map((keyPoint, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-5">
              <div className="key-points-card">
                <img src={blurLayerImage} alt="img" className="blur" />
                <img src={dittedLineImage} alt="img" className="doted-line" />
                <a href="#" className="card-tag">
                  {keyPoint.tag}
                </a>
                <h3 className="text-white quantico" data-splitting="">
                  {keyPoint.title}
                </h3>
                <p>{keyPoint.description}</p>
                <a href="#" className="card-link">
                  {keyPoint.linkText} <img src={keyPoint.linkIcon} alt="icon" />
                </a>
                <div className="card-img">
                  <img src={keyPoint.imgSrc} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollAnimate>
      </div>
    </KeyPointsStyleWrapper>
  );
};

export default KeyPoints;
