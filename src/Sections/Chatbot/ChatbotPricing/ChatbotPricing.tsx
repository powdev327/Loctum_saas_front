import { useState } from "react";
import ChatbotPricingStyle from "./ChatbotPricing.style";
import arrowRightWhiteIcon from "../../../assets/images/icons/arrow-right-white.svg";
import {
  pricingDataYearly,
  pricingDataMonthly,
} from "../../../assets/data/ChatbotData/ChatbotPriceData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ChatbotPricing = () => {
  const [isToggle, setisToggle] = useState(false);

  const togglePricingSection = () => {
    setisToggle(!isToggle);
  };

  return (
    <ChatbotPricingStyle className="chatbot-best-pricing-section z-index-3">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            subtitle="Best Pricing"
            title="Choose your best deal"
            alignment="center"
          />

          <div className="best-pricing-selector chatbot-pricing-card-btn">
            <form action="/" method="post" onClick={togglePricingSection}>
              <button type="button" className="best-pricing-monthly-btn">
                Monthly
              </button>
              <input
                type="checkbox"
                name="best-pricing-selector"
                id="best-pricing-selector"
              />
              <button type="button" className="best-pricing-yearly-btn">
                Yearly <span>(20% Off)</span>
              </button>
            </form>
          </div>
        </ScrollAnimate>

        {isToggle ? (
          <>
            <div className="best-pricing-monthly">
              <div className="row">
                {pricingDataMonthly.map((item, index) => (
                  <div key={index} className={`col-lg-4 col-md-6 mb-5`}>
                    <ScrollAnimate delay={item.delay}>
                      <div className={`chatbot-best-pricing-card chatbot-best-pricing-card${index + 1}`}>
                        <div className="card-header">
                          <p>{item.shortDescription}</p>
                          <img src={arrowRightWhiteIcon} alt="icon" />
                        </div>
                        <div className="card-body">
                          <div className="pricing-icon">
                            <img src={item.pricingIcon} alt="icon" />
                          </div>
                          <h3>{item.type}</h3>
                          <h3>
                            ${item.price}
                            <span>/month</span>
                          </h3>
                          <p>{item.description}</p>
                          <a href="#" className="chatbot-best-pricing-card-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">Start Free</span>
                              <span className="btn-hover-text">Start Free</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </ScrollAnimate>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="best-pricing-yearly">
              <div className="row">
                {pricingDataYearly.map((item, index) => (
                  <div key={index} className={`col-lg-4 col-md-6 mb-5`}>
                    <div
                      className={`chatbot-best-pricing-card chatbot-best-pricing-card${index + 1
                        }`}
                    >
                      <div className="card-header">
                        <p>{item.shortDescription}</p>
                        <img src={arrowRightWhiteIcon} alt="icon" />
                      </div>
                      <div className="card-body">
                        <div className="pricing-icon">
                          <img src={item.pricingIcon} alt="icon" />
                        </div>
                        <h3>{item.type}</h3>
                        <h3>
                          ${item.price}
                          <span>/year</span>
                        </h3>
                        <p>{item.description}</p>
                        <a href="#" className="chatbot-best-pricing-card-btn">
                          <span className="btn-inner">
                            <span className="btn-normal-text">Start Free</span>
                            <span className="btn-hover-text">Start Free</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </ChatbotPricingStyle>
  );
};

export default ChatbotPricing;
