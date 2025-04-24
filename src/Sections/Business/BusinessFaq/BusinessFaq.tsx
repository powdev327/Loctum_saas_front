import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FaqBtn from "./../../../Components/FaqBtn/FaqBtn";
import BusinessFaqStyle from "./BusinessFaq.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import Data from "../../../assets/data/BusinessData/BusinessFaqData";

import { GoArrowRight } from "react-icons/go";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessFaq = () => {
  return (
    <BusinessFaqStyle>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Frequently asked Questions"
                subtitle="Question"
                alignment="center"
                titleMaxW="400px"
                titleMargin="auto"
              />
            </ScrollAnimate>
            <ScrollAnimate delay={270}>
              <div className="faq-section-4-tab">
                <Tabs defaultIndex={1}>
                  <TabList className="nav nav-tabs">
                    {Data?.map((item, i) => (
                      <Tab key={i} className="nav-link">
                        {item.title}
                      </Tab>
                    ))}
                  </TabList>

                  {Data?.map((item, i) => (
                    <TabPanel key={i} className="tab-content">
                      <div
                        className="accordion template-accordion"
                        id={`accordion${item.title}`}
                      >
                        {item.faqList?.map((accordionItem, acid) => (
                          <div key={acid} className="accordion-item">
                            <h2 className="accordion-header">
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${acid}`}
                                aria-expanded="true"
                                aria-controls={`collapse${acid}`}
                              >
                                {accordionItem.question}
                              </button>
                            </h2>
                            <div
                              id={`collapse${acid}`}
                              className="accordion-collapse collapse "
                              aria-labelledby={`heading${acid}`}
                              data-bs-parent={`#accordion${item.title}`}
                            >
                              <div className="accordion-body">
                                <p>{accordionItem.answer}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </ScrollAnimate>
            <ScrollAnimate delay={320}>
              <div className="faq-section-4-bottom">
                <h4>Don’t get Answer ?</h4>
                <p className="mb-0">We will answer you in less than 2 Hours !!</p>
                <a href="#" className="text-link">
                  <span>Leave us a Message</span>
                  <GoArrowRight />
                </a>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </BusinessFaqStyle>
  );
};

export default BusinessFaq;
