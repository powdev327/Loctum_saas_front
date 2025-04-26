import { useState } from "react";
import { Icon } from "@iconify/react";
import AppFaqStyleWrapper from "./AppFaq.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { AppFaqData } from "../../../assets/data/app-data/AppFaqData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppFaq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <AppFaqStyleWrapper className="faq-section-4 app-faq-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 off-set-lg-2">
            <ScrollAnimate delay={200}>
            <SectionTitle
              title="Frequently asked Questions"
              subtitle="Questions & Answers"
              alignment="center"
              titleMaxW="400px"
              titleMargin="auto"
            />
            </ScrollAnimate>
            <ScrollAnimate delay={250}>
            <div className="faq-section-4-tab">
              <div className="accordion template-accordion" id="accordionExample">
                {AppFaqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button ${
                          activeIndex === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleAccordion(index)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${index}`}
                      className={`accordion-collapse ${
                        activeIndex === index ? "show" : "collapse"
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
            </ScrollAnimate>
            <ScrollAnimate delay={300}>
            <div className="faq-section-4-bottom">
              <h4>Don’t get Answer ?</h4>
              <p className="mb-0">We will answer you in less than 2 Hours !!</p>
              <a href="#" className="text-link">
                <span>Leave us a Message</span>
                <Icon className="iconify" icon="majesticons:arrow-right" />
              </a>
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </AppFaqStyleWrapper>
  );
};

export default AppFaq;
