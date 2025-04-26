import { useRef } from "react";
import BenefitesStyleWrapper from "./Benefites.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import arrowRightBlue from "../../../assets/images/crypto2/arrow-right-blue.svg";
import arrowRightGreen from "../../../assets/images/crypto2/arrow-right-green.svg";
import walletImg1 from "../../../assets/images/crypto2/wallet_img_1.png";
import walletImg2 from "../../../assets/images/crypto2/wallet_img_2.png";
import walletImg3 from "../../../assets/images/crypto2/wallet_img_3.png";
import walletImg4 from "../../../assets/images/crypto2/wallet_img_4.png";
import weavImg from "../../../assets/images/crypto2/weav.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Benefites = () => {
  const weavImgRef = useRef(null);

  return (
    <BenefitesStyleWrapper className="crypto2-benifits-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            title="Multi Coin Wallets Management"
            subtitle="Benefits"
            alignment="center"
            titleMaxW="420px"
            titleMargin="auto"
            parentClass="crypto2"
          />
        </ScrollAnimate>
        <div className="crypto2-benifits-content">
          <div className="row">
            <div className="col-lg-6">
              <ScrollAnimate delay={250}>
                <div className="crypto2-benifits-card crypto2-benifits-card1">
                  <h5 className="dm-sans wt-700">DeFi Wallet</h5>
                  <h3>Decentralized finance Manage easily</h3>
                  <p>
                    We use as filler text for layouts, non-readability is of great
                    importance but because those who do not know how to pursue
                    pleasure rationally
                  </p>
                  <a href="#">
                    Get your wallet
                    <img src={arrowRightBlue} alt="icon" />
                  </a>
                  <div className="benifits-card-img-section row">
                    <div className="col-sm-6">
                      <div className="benifits-card-img benifits-card-img1">
                        <img src={walletImg1} alt="img" className="card-img" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="benifits-card-img benifits-card-img2">
                        <img src={walletImg2} alt="img" className="card-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-lg-6">
              <ScrollAnimate delay={300}>
                <div className="crypto2-benifits-card crypto2-benifits-card2">
                  <h5 className="dm-sans wt-700">DeFi Wallet</h5>
                  <h3>Decentralized finance Manage easily</h3>
                  <p>
                    We use as filler text for layouts, non-readability is of great
                    importance but because those who do not know how to pursue
                    pleasure rationally
                  </p>
                  <a href="#">
                    Get your wallet
                    <img src={arrowRightGreen} alt="icon" />
                  </a>
                  <div className="benifits-card-img-section row" ref={weavImgRef}>
                    <img
                      src={weavImg}
                      alt="img"
                      className="weav-img"
                    />
                    <div className="col-sm-5">
                      <div className="benifits-card-img benifits-card-img3">
                        <img src={walletImg3} alt="img" className="card-img" />
                      </div>
                    </div>
                    <div className="col-sm-7">
                      <div className="benifits-card-img benifits-card-img4">
                        <img src={walletImg4} alt="img" className="card-img" />
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-md-12">
              <ScrollAnimate delay={270}>
                <div className="metaverse-card">
                  <div className="overlay">
                    <h5 className="dm-sans wt-700">Metaverse</h5>
                    <h3>
                      Keep connected <br />
                      with Web 3.0 wallet
                    </h3>
                    <p>
                      That they cannot foresee the pain and trouble that are bound
                      to ensue; and equal blame belongs to those who fail in their
                      duty through weakness of will, which is the same as saying.
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </BenefitesStyleWrapper>
  );
};

export default Benefites;
