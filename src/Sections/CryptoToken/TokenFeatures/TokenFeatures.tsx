import { useEffect } from "react";
import $ from "jquery";
import Splitting from "splitting";
import ScrollOut from "scroll-out";
import TokenFeaturesStyle from "./TokenFeatures.style";

import imageMeta from "../../../assets/images/crypto-token/image_meta.png";
import imageDigital from "../../../assets/images/crypto-token/image_digital.png";
import imageCommerce from "../../../assets/images/crypto-token/image_commerce.png";
import imageSocial from "../../../assets/images/crypto-token/image_social.png";
import menImg from "../../../assets/images/crypto-token/men-img.svg";
import settingIcon from "../../../assets/images/crypto-token/setting-icon.svg";
import arrowRightBlackIcon from "../../../assets/images/crypto-token/arrow-right-black.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TokenFeatures = () => {
  useEffect(() => {
    const moveImg = $(".move-img");
    if (moveImg.length) {
      $(document).on("mousemove", function (e) {
        $(".move-img").offset({
          left: e.pageX,
        });
      });
    }

    const docImg = $(".doc-img");
    if (docImg.length) {
      $(document).on("mousemove", function (e) {
        $(".doc-img").offset({
          left: e.pageX,
        });
      });
    }

    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <TokenFeaturesStyle className="crypto-token-features-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="text-with-img" data-splitting>
            <div className="text">
              <span>The</span>
            </div>
            <div className="text add-img">
              <span>Metaverse</span>
              <img
                // ref={moveImgRef}
                src={imageMeta}
                alt="img"
                className="move-img"
              />
            </div>
            <div className="text">
              <span>token</span>
            </div>
            <div className="text">
              <span>empowering</span>
            </div>
            <div className="text add-img">
              <span>digital</span>
              <img
                // ref={moveImgRef}
                src={imageDigital}
                alt="img"
                className="move-img"
              />
            </div>
            <div className="text">
              <span>ownership,</span>
            </div>
            <div className="text add-img">
              <span>commerce,</span>
              <img
                // ref={moveImgRef}
                src={imageCommerce}
                alt="img"
                className="move-img"
              />
            </div>
            <div className="text">
              <span>and</span>
            </div>
            <div className="text add-img">
              <span>social</span>
              <img
                // ref={moveImgRef}
                src={imageSocial}
                alt="img"
                className="move-img"
              />
            </div>
            <div className="text">
              <span>interactions</span>
            </div>
          </div>
        </ScrollAnimate>

        <div className="crypto-token-features-cards">
          <div className="stack">
            {/* Card 1 */}
            <div className="stack__card">
              <div className="card-bg">
                <div className="overlay">
                  <div className="row">
                    <div className="col-md-6">
                      <ScrollAnimate delay={200}>
                        <div className="title">
                          <h4 className="dm-sans wt-700" data-splitting="">
                            01 Super Gainers
                          </h4>
                        </div>
                      </ScrollAnimate>
                    </div>
                    <div className="col-md-6">
                      <div className="crypto-token-features-text">
                        <ScrollAnimate delay={200}>
                          <h2 data-splitting="">
                            Price went up <br />
                            205x so far
                          </h2>
                        </ScrollAnimate>
                        <ScrollAnimate delay={250}>
                          <p>
                            We use as filler text for layouts, non-readability is
                            of great importance but because those who do not know
                            how to pursue pleasure rationally encounter
                            consequences that are extremely painful. Nor again is
                            there anyone who loves or pursues
                          </p>
                        </ScrollAnimate>
                        <ScrollAnimate delay={250}>
                          <div className="super-gainers-info-section">
                            <div className="super-gainers-info">
                              <h3>
                                #<span className="count">16</span>
                              </h3>
                              <p>Market Rank</p>
                            </div>
                            <div className="super-gainers-info">
                              <h3>
                                <span className="count">25</span>B+
                              </h3>
                              <p>Locked Supply</p>
                            </div>

                          </div>
                        </ScrollAnimate>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="stack__card">
              <div className="card-bg">
                <div className="row">
                  <div className="col-md-6">
                    <ScrollAnimate delay={200}>
                      <div className="title">
                        <h4 className="dm-sans wt-700" data-splitting="">
                          02 artificial intelligence
                        </h4>
                      </div>
                    </ScrollAnimate>
                    <div className="crypto-token-features-img">
                      <ScrollAnimate delay={250}>
                        <div className="features-img-inner">
                          <img src={menImg} alt="img" />
                          <img
                            src={settingIcon}
                            alt="img"
                            className="setting-icon"
                          />
                        </div>
                      </ScrollAnimate>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="crypto-token-features-text">
                      <ScrollAnimate delay={200}>
                        <h2 data-splitting="">
                          Revolutionizing <br />
                          Blockchain AI
                        </h2>
                      </ScrollAnimate>
                      <ScrollAnimate delay={300}>
                        <p className="pb-4">
                          In a free hour, when our power of choice is untrammelled
                          and when nothing prevents our being able to do what we
                          like best, every pleasure is to be welcomed and every
                          pain avoided.
                        </p>
                        <p className="pt-3 pb-4 mb-4">
                          But in certain circumstances and owing to the claims of
                          duty or the obligations of business it will frequently
                          occur
                        </p>
                        <a href="#">
                          Discover AI
                          <img src={arrowRightBlackIcon} alt="icon" />
                        </a>
                      </ScrollAnimate>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="stack__card">
              <div className="card-bg">
                <div className="row">
                  <div className="col-md-6">
                    <ScrollAnimate delay={200}>
                      <div className="title">
                        <h4 className="dm-sans wt-700" data-splitting="">
                          03 Metaverse Token
                        </h4>
                      </div>
                    </ScrollAnimate>
                  </div>
                  <div className="col-md-6">
                    <div className="crypto-token-features-text">
                      <ScrollAnimate delay={250}>
                        <h2 data-splitting="">
                          Digital Universe <br />
                          Currency
                        </h2>
                      </ScrollAnimate>
                      <ScrollAnimate delay={300}>
                        <p>
                          Non-readability is of great importance but because those
                          who do not know how to pursue pleasure rationally
                          encounter consequences that are extremely painful
                        </p>
                        <ul>
                          <li>Interoperability</li>
                          <li>Scalability</li>
                          <li>Governance</li>
                          <li>Utility</li>
                        </ul>
                      </ScrollAnimate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TokenFeaturesStyle>
  );
};

export default TokenFeatures;
