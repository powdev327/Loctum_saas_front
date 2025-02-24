import StickyBox from "react-sticky-box";
import BusinessToolsStyleWrapper from "./BusinessTools.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import businessToolImgBg from "../../../assets/images/customer-service/business-tool-img-bg.png";
import businessToolImg1 from "../../../assets/images/customer-service/business-tool-img.png";
import businessToolImg2 from "../../../assets/images/customer-service/business-tool-img2.png";
import businessToolImg3 from "../../../assets/images/customer-service/business-tool-img3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessTools = () => {
  return (
    <BusinessToolsStyleWrapper className="business-tools-section">
      <div className="container">
        <div className="business-tools-row main-content row">
          <StickyBox offsetTop={20} offsetBottom={20}>
            <div className="sidebar">
              <div className="list-group sidebar__inner" id="list-example">
                <ScrollAnimate delay={200}>
                  <div className="business-tools-img-list">
                    <img
                      src={businessToolImgBg}
                      alt="img"
                      className="business-tools-img-bg"
                    />
                    <a
                      href="#section1"
                      className="business-tools-img list-group-item list-group-item-action"
                    >
                      <img src={businessToolImg1} alt="img" />
                    </a>
                    <a
                      href="#section2"
                      className="business-tools-img list-group-item list-group-item-action"
                    >
                      <img src={businessToolImg2} alt="img" />
                    </a>
                    <a
                      href="#section3"
                      className="business-tools-img list-group-item list-group-item-action"
                    >
                      <img src={businessToolImg3} alt="img" />
                    </a>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </StickyBox>
          <div className="business-tools-content-scrolspy-section">
            <div
              className="business-tools-content-scrolspy scrollspy-example"
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-offset={0}
              tabIndex={0}
            >
              <div className="business-tools-content" id="section1">
                <ScrollAnimate delay={200}>
                  <SectionTitle
                    title="Most useful features you must need"
                    subtitle="Business Tools"
                    titleMaxW="490px"
                    parentClass="section-title-left"
                  />
                </ScrollAnimate>
                {/* <ScrollAnimate delay={200}> */}
                  <div className="business-tools-text pt-0">
                    <h4>Optimized Support</h4>
                    <p>
                      We use as filler text for layouts, non-readability is of
                      great importancebut because those who do not know how to
                      pursue pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain.
                    </p>
                    <ul>
                      <li className="wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />
                        99% Survey Report
                      </li>
                      <li className="wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />
                        Trusted by teams
                      </li>
                      <li className="wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />
                        Self-Service
                      </li>
                    </ul>
                  </div>
                {/* </ScrollAnimate> */}
              </div>
              {/* <ScrollAnimate delay={200}> */}
                <div className="business-tools-content" id="section2">
                  <div className="business-tools-text">
                    <h4>Customer Relationship</h4>
                    <p>
                      Great importancebut because those who do not know how to
                      pursue pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain.
                    </p>
                    <div className="business-tools-btns">
                      <button className="wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />{" "}
                        Service managements
                      </button>
                      <button className="wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />{" "}
                        Contextual Support
                      </button>
                      <button className="wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />{" "}
                        Service managements
                      </button>
                    </div>
                  </div>
                </div>
              {/* </ScrollAnimate> */}
              {/* <ScrollAnimate delay={200}> */}
                <div className="business-tools-content" id="section3">
                  <div className="business-tools-text">
                    <h4>Customer Satisfaction</h4>
                    <p>
                      Readability is of great importancebut because those who do
                      not know how to pursue pleasure rationally encounter
                      consequences that are extremely painful is there anyone who
                      loves or pursues or desires to obtain.
                    </p>
                    <ul>
                      <li className="w-100 wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />
                        Share multiple screen at a time and get amazing experiance
                        in your team meeting
                      </li>
                      <li className="w-100 wt-700">
                        <span className="iconify" data-icon="bi:check-lg" />
                        No need third party plugins
                      </li>
                    </ul>
                  </div>
                </div>
              {/* </ScrollAnimate> */}
            </div>
          </div>
        </div>
      </div>
    </BusinessToolsStyleWrapper>
  );
};

export default BusinessTools;
