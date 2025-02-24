import BlockchainDefiStyle from "./BlockchainDefi.style";

import graphImg from "../../../assets/images/crypto/grapg.svg";
import blurImg from "../../../assets/images/crypto/blur-img.png";
import blockchainIcon from "../../../assets/images/crypto/blockchain.svg";
import codeBg from "../../../assets/images/crypto/code.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BlockchainDefi = () => {
  return (
    <BlockchainDefiStyle className="blockchain-defi-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-lg-7 mb-5">
              <div className="blockchain-defi-card defi-card">
                <h3>
                  Create your portfolio Earn <span>10x</span> ⬆️
                </h3>
                <p>
                  Great importance but because, combined with a handful of model
                  sentence structures, Nor again is there anyone who loves or
                  pursues
                </p>
                <div className="graph-img">
                  <img src={graphImg} alt="img" />
                </div>
                <img src={blurImg} alt="img" className="blur" />
              </div>
            </div>
            <div className="col-lg-5 mb-5">
              <div className="blockchain-defi-card blockchain-card">
                <div className="blockchain">
                  <img src={blockchainIcon} alt="icon" />
                </div>
                <h3>Best DeFi wallet</h3>
                <p>
                  Model sentence structures, Nor again is there anyone who loves
                  or pursues
                </p>
                <img src={codeBg} alt="img" className="code-bg" />
                <img src={blurImg} alt="img" className="blur" />
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </BlockchainDefiStyle>
  );
};

export default BlockchainDefi;
