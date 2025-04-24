import PricingPlanCardsStyle from "./PricingPlanCards.style";
import { pricingPlansData } from "../../../assets/data/PricingPlanData/PricingPlanData";

import rightArrow from "../../../assets/images/icons/pricing-arrow-right.svg";
import pricingPlanImg from "../../../assets/images/img/pricing-plan-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const PricingPlanCards = () => {
  return (
    <PricingPlanCardsStyle className="pricing-plan-section">
      <div className="container">
        {/* pricing plans */}
        <ScrollAnimate delay={200}>
          <div className="row">
            {pricingPlansData.map((plan, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 mb-5 ${plan.type.toLowerCase()}-card`}
              >
                <div className={`pricing-plan-card ${plan.type.toLowerCase()}-card`}>
                  <div className={`pricing-plan-card-header ${plan.type.toLowerCase()}`}>
                    <h6>
                      {plan.type}
                      {plan.type === "Growth" && <span>Popular 💎</span>}
                    </h6>
                    <p>{plan.description}</p>
                    <h3>
                      {plan.price}
                      {plan.price !== "It's free" && <span>/month</span>}
                    </h3>
                    <p>{plan.trial}</p>
                  </div>
                  <button
                    className={`pricing-plan-show-btn pricing-plan-show-btn${index + 1
                      }`}
                  >
                    View plan features
                  </button>
                  <div className="best-pricing-card-body">
                    <button className={`best-pricing-btn ${plan.btnClass}`}>
                      {plan.btnText}
                      <span className="icon">
                        <img src={rightArrow} alt="icon" />
                      </span>
                    </button>
                    <ul className="list">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimate>

        {/* pricing plan card */}
        <ScrollAnimate delay={300}>
          <div className="row">
            <div className="col-lg-12 col-md-6 mb-5">
              <div className="pricing-plan-card enterprise-card">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="pricing-plan-card-content">
                      <div className="pricing-plan-card-header enterprise ✨">
                        <h6>Enterprise ✨</h6>
                        <p>Custom Plan for your big Business</p>
                        <h3>
                          Starting at $999 <span>/month</span>
                        </h3>
                        <p>Try 7 days free, Cancel anytime</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <button className="pricing-plan-show-btn pricing-plan-show-btn4">
                      View plan features
                    </button>
                    <div className="pricing-plan-card-content">
                      <div className="best-pricing-card-body m-0">
                        <ul className="list m-0">
                          <li className="list-item">
                            All from <b>Groth</b> &amp; <b>Business Plan</b>
                          </li>
                          <li className="list-item">Unlimited Attendees</li>
                          <li className="list-item">No time limit</li>
                          <li className="list-item">100+ whiteboards</li>
                          <li className="list-item">Unlimited storage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="pricing-plan-card-content right">
                      <button className="best-pricing-btn">
                        Lets Talk
                        <span className="icon">
                          <img src={rightArrow} alt="icon" />
                        </span>
                      </button>
                      <div className="pricing-plan-img">
                        <img src={pricingPlanImg} alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </PricingPlanCardsStyle>
  );
};

export default PricingPlanCards;
