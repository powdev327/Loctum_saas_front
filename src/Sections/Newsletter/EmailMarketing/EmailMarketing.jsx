import EmailMarketingStyle from "./EmailMarketing.style";

import CrowdLogo from "../../../assets/images/sass1/crowd-logo.svg";
import TrustpilotLogo from "../../../assets/images/sass1/trustpilot-logo.svg";
import Badge1 from "../../../assets/images/chatbot/badge_1.svg";
import Badge2 from "../../../assets/images/chatbot/badge_2.svg";
import Badge4 from "../../../assets/images/chatbot/badge_4.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const EmailMarketing = () => {
  return (
    <EmailMarketingStyle className="leading-email-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="leading-email-card">
            <div className="row">
              <div className="col-lg-6">
                <ScrollAnimate delay={200}>
                  <div className="leading-email-left">
                    <h3>
                      Leading Email marketing platform in <span>2023</span>
                    </h3>
                    <ul>
                      <li>
                        <span>
                          <img src={CrowdLogo} alt="logo" />
                        </span>
                        4.6 / 5
                      </li>
                      <li>
                        <span>
                          <img src={TrustpilotLogo} alt="logo" />
                        </span>
                        4.4 / 5
                      </li>
                    </ul>
                  </div>
                </ScrollAnimate>
              </div>
              <div className="col-lg-6">
                <ScrollAnimate delay={300}>
                  <div className="leading-email-right">
                    <ul>
                      <li>
                        <img src={Badge1} alt="img" />
                      </li>
                      <li>
                        <img src={Badge2} alt="img" />
                      </li>
                      <li>
                        <img src={Badge4} alt="img" />
                      </li>
                    </ul>
                  </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </EmailMarketingStyle>
  );
};

export default EmailMarketing;
