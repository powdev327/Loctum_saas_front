import { useEffect } from "react";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import MetaverseStyle from "./Metaverse.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import blurLayerImg from "../../../assets/images/crypto-token/blur-layer.png";
import arrowRightImg from "../../../assets/images/defi/arrow-right.svg";
import objectImg from "../../../assets/images/defi/object.png";
import metavarseCardBgImg from "../../../assets/images/defi/metavarse-card-bg.jpg";
import metavarseCardBg3Img from "../../../assets/images/defi/metavarse-card-bg3.jpg";
import arrowRightYellowImg from "../../../assets/images/crypto-token/arrow-right-yellow.svg";
import metavarseImg2Img from "../../../assets/images/defi/metavarse-img2.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Metaverse = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <MetaverseStyle className="defi-metaverse-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <div className="defi-metaverse-card">
                <img src={blurLayerImg} alt="img" className="blur-shape" />
                <div className="row">
                  <div className="col-md-7">
                    <ScrollAnimate delay={200}>
                      <div className="card-left">
                        <div className="defi" data-splitting>
                          <span className="sub-title uppercase">Metaverse</span>
                          <h2 className="title">
                            Exploring the Future of Virtual Economies
                          </h2>
                        </div>

                        <div className="card-left-content">
                          <a href="#">
                            <img src={arrowRightImg} alt="icon" className="arrow" />
                          </a>
                          <div className="card-left-text">
                            <p>
                              In a free hour, when our power of choice is
                              untrammelled and when nothing prevents our being able
                              to do what we like best, every pleasure is to be
                              welcomed and every pain avoided.
                            </p>
                            <a
                              href="#"
                              className="metavarse-card-btn btn-hov-effect"
                            >
                              <span className="btn-inner">
                                <span className="btn-normal-text">Explore Now</span>
                                <span className="btn-hover-text">Explore Now</span>
                              </span>
                              <span className="round-shape" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>
                  <div className="col-md-5">
                    <div className="card-right">
                      <div className="metavarse-card-img">
                        <ScrollAnimate delay={300}>
                          <img src={objectImg} alt="img" />
                        </ScrollAnimate>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-8">
            <ScrollAnimate delay={250}>
              <div className="defi-metaverse-card2">
                <img
                  src={metavarseCardBgImg}
                  alt="img"
                  className="metavarse-card-bg2"
                />
                <div className="overlay">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="card2-text">
                        <h3 className="mb-4" data-splitting>
                          Cutting-Edge DeFi NFT Platform
                        </h3>
                        <p>
                          When our power of choice is untrammelled and when
                          nothing prevents
                        </p>
                        <a href="#">
                          Explore NFTs
                          <img src={arrowRightYellowImg} alt="icon" />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="card2-img">
                        <img src={metavarseImg2Img} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-4">
            <ScrollAnimate delay={300}>
              <div className="defi-metaverse-card3">
                <img
                  src={metavarseCardBg3Img}
                  alt="img"
                  className="metavarse-card-bg3"
                />
                <div className="overlay">
                  <h3 data-splitting>Liquidity Pools</h3>
                  <ul>
                    <li>Instant Settlement</li>
                    <li>Passive Income</li>
                    <li>Stable Returns</li>
                    <li>Continuous Liquidity</li>
                  </ul>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </MetaverseStyle>
  );
};

export default Metaverse;
