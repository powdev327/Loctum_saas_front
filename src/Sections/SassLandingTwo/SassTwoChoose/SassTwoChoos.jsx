import SassTwoChoosStyle from "./SassTwoChoos.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import centerBgImg from "../../../assets/images/sass2/center-bg.svg";
import choseUsImg from "../../../assets/images/sass2/chose-us-img.png";
import choseUsImg1 from "../../../assets/images/sass2/chose-us-img1.png";
import choseUsImg2 from "../../../assets/images/sass2/chose-us-img2.png";
import subtitleIcon from "../../../assets/images/icons/subtitle.svg";
import colorSwatchIcon from "../../../assets/images/icons/color-swatch.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SassTwoChoos = () => {
  return (
    <SassTwoChoosStyle className="sass-choose-us-section">
      <img src={centerBgImg} alt="img" className="choose-us-bg" />
      <div className="container sass-choose-us-container">
        <div
          className="row main-content"
          data-spy="scroll"
          data-target="#myScrollspy"
          data-offset={20}
        >
          <div className="col-md-6 sidebar">
            <div className="sidebar__inner" id="myScrollspy">
              <ScrollAnimate delay={200}>
              <div className="sass-choose-us-img">
                <img src={choseUsImg} alt="img" />
              </div>
              </ScrollAnimate>
              <ScrollAnimate delay={200}>
             <div className="chose-us-small-img mobile">
                <img src={choseUsImg1} alt="img" className="chose-us-img1" />
                <img src={choseUsImg2} alt="img" className="chose-us-img2" />
              </div>
             </ScrollAnimate>
            </div>
          </div>
          <div className="col-md-6">
            <div className="sass-choose-us-text">
              <ScrollAnimate delay={200}>
              <SectionTitle
                subtitle="Why Choose Us"
                title="Simplify your workflow Boost Growth"
                parentClass="sass"
              />
              </ScrollAnimate>

              <div className="sass-choose-us-content">
               <ScrollAnimate delay={225}>
               <p>
                  We use as filler text for layouts, non-readability is of great
                  importancebut because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful nor again is there anyone.
                </p>
               </ScrollAnimate>
                <ScrollAnimate delay={250}>
                <ul>
                  <li>
                    Share multiple screen at a time and get amazing experiance
                    in your team meeting
                  </li>
                  <li>No need third party plugins</li>
                  <li>Beautiful design and typography with effects</li>
                </ul>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6">
             <ScrollAnimate delay={200}>
             <div className="chose-us-small-img desktop">
                <img src={choseUsImg1} alt="img" className="chose-us-img1" />
                <img src={choseUsImg2} alt="img" className="chose-us-img2" />
              </div>
             </ScrollAnimate>
            </div>
            <div className="col-md-6">
              <div className="sass-choose-us-text">
                <div className="sass-choose-us-content">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-6">
                      <ScrollAnimate delay={200}>
                      <div className="sass-choose-us-bottom">
                        <span>
                          <img src={subtitleIcon} alt="icon" />
                        </span>
                        <h5 className="wt-700">
                          Used advanced <br />
                          technologies
                        </h5>
                        <p>
                          True generator on the Internet. It uses a dictionary
                          of over 200 Latin words, combined with a handful of
                          model sentence
                        </p>
                      </div>
                      </ScrollAnimate>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-6">
                      <ScrollAnimate delay={300}>
                      <div className="sass-choose-us-bottom">
                        <span>
                          <img src={colorSwatchIcon} alt="icon" />
                        </span>
                        <h5 className="wt-700">
                          Beautiful color
                          <br />
                          palette
                        </h5>
                        <p>
                          Making this the first true generator on the Internet.
                          It uses a dictionary of over 200 Latin words, combined
                          with a handful of model
                        </p>
                      </div>
                      </ScrollAnimate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SassTwoChoosStyle>
  );
};

export default SassTwoChoos;
