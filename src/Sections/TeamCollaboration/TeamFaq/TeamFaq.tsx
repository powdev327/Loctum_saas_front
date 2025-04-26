import { useState } from "react";
import TeamFaqStyleWrapper from "./TeamFaq.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import {
  faqData,
  faqData2,
} from "../../../assets/data/TeamColaborationData/TeamFaqData";
import FaqIcon from "../../../assets/images/icons/faq-icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TeamFaq = () => {
  const [activeIndex1, setActiveIndex1] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleAccordion = (index, setIndex) => {
    if (setIndex === 1) {
      setActiveIndex1(activeIndex1 === index ? null : index);
    } else if (setIndex === 2) {
      setActiveIndex2(activeIndex2 === index ? null : index);
    }
  };

  return (
    <TeamFaqStyleWrapper className="faq-section v2">
      <div className="container">
        <div className="faq-seciton-header">
          <ScrollAnimate delay={200}>
            <TitleStyleWrapper>
              <div className="section-title mb-0">
                <span className="sub-title">Questions & answers</span>
                <h2 className="title">
                  Frequently <span className="marketing-badge">asked</span>
                  <br />
                  Questions
                </h2>
              </div>
            </TitleStyleWrapper>
          </ScrollAnimate>
          <div className="faq-header-right">
            <ScrollAnimate delay={200}>
              <img src={FaqIcon} alt="icon" />
            </ScrollAnimate>
          </div>
        </div>
        <ScrollAnimate delay={200}>
          <div className="row">
            <div className="col-md-6">
              <div className="accordion template-accordion" id="accordionExample">
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${activeIndex1 === index ? "" : "collapsed"
                          }`}
                        type="button"
                        onClick={() => toggleAccordion(index, 1)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse ${activeIndex1 === index ? "show" : "collapse"
                        }`}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-6">
              <div className="accordion template-accordion" id="accordionExample2">
                {faqData2.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2
                      className="accordion-header"
                      id={`heading${index + faqData.length}`}
                    >
                      <button
                        className={`accordion-button wt-800 ${activeIndex2 === index ? "" : "collapsed"
                          }`}
                        type="button"
                        onClick={() => toggleAccordion(index, 2)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse ${activeIndex2 === index ? "show" : "collapse"
                        }`}
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimate>
      </div>
    </TeamFaqStyleWrapper>
  );
};

export default TeamFaq;
