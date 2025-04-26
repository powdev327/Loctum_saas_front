import PricingFAQStyle from "./PricingFAQ.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import FaqBtn from "./../../../Components/FaqBtn/FaqBtn";
import FaqIcon from "../../../assets/images/icons/faq-icon.svg";
import {
  faqDataLeft,
  faqDataRight,
} from "../../../assets/data/PricingPlanData/PricingFaqData";
import { useState } from "react";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const PricingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const toggleAccordionRight = (index) => {
    if (activeIndexRight === index) {
      setActiveIndexRight(null);
    } else {
      setActiveIndexRight(index);
    }
  };

  return (
    <PricingFAQStyle className="faq-seciton pricing-plan-faq-seciton">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="faq-section-header">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <div className="section-title mb-0 md-mb-30">
                    <span className="sub-title">Questions & answers</span>
                    <h2 className="title mb-0">
                      Frequently
                      <span className="marketing-badge">asked</span>
                      <br />
                      Questions
                    </h2>
                  </div>
                </TitleStyleWrapper>
              </ScrollAnimate>
              <div className="faq-header-right">
                <ScrollAnimate delay={250}>
                  <img src={FaqIcon} alt="icon" />
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="accordion template-accordion" id="accordionExample">
                {faqDataLeft.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${activeIndex === index ? "" : "collapsed"
                          }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse ${activeIndex === index ? "show" : "collapse"
                        }`}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={350}>
              <div className="accordion template-accordion" id="accordionExample">
                {faqDataRight.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${activeIndexRight === index ? "" : "collapsed"
                          }`}
                        type="button"
                        onClick={() => toggleAccordionRight(index)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse ${activeIndexRight === index ? "show" : "collapse"
                        }`}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          </div>

          {/* <div className="col-md-6">
            {faqDataLeft.map((info, i) => {
              return <FaqBtn data={info} index={i} key={i} />;
            })}
          </div>
          <div className="col-md-6">
            {faqDataRight.map((info, i) => {
              return <FaqBtn data={info} key={i} />;
            })}
          </div> */}
        </div>
      </div>
    </PricingFAQStyle>
  );
};

export default PricingFAQ;
