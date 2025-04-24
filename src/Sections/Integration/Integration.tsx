import IntegrationStyle from "./Integration.style";
import { integrationData } from "../../assets/data/integrationData";

import IntegrationBg from "../../assets/images/chatbot/integration-bg.svg";
import ArrowRightWhiteIcon from "../../assets/images/icons/arrow-right-white.svg";
import ScrollAnimate from "../../Components/ScrollAnimate";

const Integration = () => {
  return (
    <IntegrationStyle className="integration-element-section chatbot z-index-3">
      <div className="bg-shape">
        <img src={IntegrationBg} alt="img" className="bg-line" />
      </div>
      <div className="integrate-element-list">
        <ScrollAnimate delay={200}>
          {integrationData.map((integration, index) => (
            <div className="list-item" key={index}>
              <img src={integration.icon} alt={integration.alt} />
            </div>
          ))}
        </ScrollAnimate>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="integration-element-content">
              <ScrollAnimate delay={300}>
                <div className="integration-element-title">
                  <h4 className="dm-sans">Integration</h4>
                  <h2>Integrate with the tools</h2>
                  <h2>you already use</h2>
                </div>
              </ScrollAnimate>
              <ScrollAnimate delay={350}>
                <div className="integration-element-button">
                  <a href="#" className="explore-btn">
                    <span>Explore all Integrations</span>
                    <img src={ArrowRightWhiteIcon} alt="icon" />
                  </a>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </IntegrationStyle>
  );
};

export default Integration;
