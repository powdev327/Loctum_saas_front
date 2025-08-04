import { useEffect, useRef, useState } from "react";
import HomeFaqStyleWrapper from "./FaqHome.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { GoArrowRight } from "react-icons/go";
// import { faqData } from "../../../assets/data/HomeData/FaqData";

import ShapeMsgImage from "../../../assets/images/icons/shape-msg.svg";
import SmsTrackingImage from "../../../assets/images/icons/sms-tracking.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const FaqHome = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  // Get FAQ data from translations
  const faqData = t('home.faq.items', { returnObjects: true }) || [];

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const faqSectionRef = useRef(null);
  const rotateIconRef = useRef(null);
  const rotateIconRef2 = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        !faqSectionRef.current ||
        !rotateIconRef.current ||
        !rotateIconRef2.current
      )
        return;

      const y = window.scrollY;
      const x = faqSectionRef.current.offsetTop - 200;
      let animationValue = (y - x) / 4;
      const animationStop = 45;
      animationValue = Math.max(0, Math.min(animationValue, animationStop));
      rotateIconRef.current.style.transform =
        y > x
          ? `rotate(-${animationValue}deg)`
          : `rotate(${animationValue}deg)`;

      const x2 = faqSectionRef.current.offsetTop + 400;
      let animationValue2 = (y - x2) / 4;
      animationValue2 = Math.max(0, Math.min(animationValue2, animationStop));
      rotateIconRef2.current.style.transform =
        y > x
          ? `rotate(-${animationValue2}deg)`
          : `rotate(${animationValue2}deg)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HomeFaqStyleWrapper ref={faqSectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TitleStyleWrapper>
              <ScrollAnimate delay={200}>
                <div className="section-title md-mb-50">
                  <span className="sub-title">{t('home.faq.subtitle')}</span>
                  <h2 className="title">
                    {t('home.faq.title1')} <span className="marketing-badge">{t('home.faq.title2')} </span>
                    <br />
                    {t('home.faq.title3')}
                  </h2>
                </div>
              </ScrollAnimate>
            </TitleStyleWrapper>
            <ScrollAnimate delay={250}>
              <div className="leave-message leave-message1">
                <div className="mb-20">
                  <h2>{t('home.faq.noAnswer')}</h2>
                  <p>{t('home.faq.responseTime')}</p>
                </div>
                <div className="mb-30">
                  <a href="#" className="text-link">
                    <span>{t('home.faq.leaveMessage')}</span>
                    <GoArrowRight />
                  </a>
                </div>
                <a href="#" className="msg-btn rotate-icon-btn">
                  <img
                    className="rotate-icon"
                    src={ShapeMsgImage}
                    alt="mail-us"
                    ref={rotateIconRef}
                  />
                  <span className="icon">
                    <img src={SmsTrackingImage} alt="msg" />
                  </span>
                </a>
              </div>
            </ScrollAnimate>
          </div>

          <div className="col-md-6">
            <div className="accordion template-accordion" id="accordionExample">
              <ScrollAnimate delay={250}>
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button
                        className={`accordion-button wt-800 ${
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
              </ScrollAnimate>
            </div>
          </div>
          <div className="leave-message leave-message2">
            <div className="mb-20">
              <h2>{t('home.faq.noAnswer')}</h2>
              <h3>{t('home.faq.responseTime')}</h3>
            </div>
            <div className="mb-30">
              <a href="#" className="text-link">
                <span>{t('home.faq.leaveMessage')}</span>
                <GoArrowRight />
              </a>
            </div>
            <a href="#" className="msg-btn rotate-icon-btn">
              <img
                className="rotate-icon"
                src={ShapeMsgImage}
                alt="mail-us"
                ref={rotateIconRef2}
              />
              <span className="icon">
                <img src={SmsTrackingImage} alt="msg" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </HomeFaqStyleWrapper>
  );
};

export default FaqHome;
