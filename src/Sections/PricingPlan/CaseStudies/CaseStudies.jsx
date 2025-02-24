import CaseStudiesStyle from "./CaseStudies.style";
import {
  caseStudiesData,
  caseStudiesData2,
} from "../../../assets/data/PricingPlanData/CaseStudieData";

import ShapeMsgImg from "../../../assets/images/icons/shape-msg.svg";
import SmsTrackingImg from "../../../assets/images/icons/sms-tracking.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useEffect, useRef } from "react";

const CaseStudies = () => {

   const caseStudiesRef = useRef(null);
    const rotateIconRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!caseStudiesRef.current || !rotateIconRef.current) return;
  
        const y = window.scrollY;
        const x = caseStudiesRef.current.offsetTop - 200;
        let animationValue = (y - x) / 4;
        const animationStop = 45;
        animationValue = Math.max(0, Math.min(animationValue, animationStop));
        rotateIconRef.current.style.transform =
          y > x
            ? `rotate(-${animationValue}deg)`
            : `rotate(${animationValue}deg)`;
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <CaseStudiesStyle className="m-0" ref={caseStudiesRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <div className="case-studies-left">
                <h2>
                  50,000 + <br />
                  Small and big Business Trusted us 😍
                </h2>

                <a href="#" className="text-link mb-4">
                  <span>View Case Studies</span>
                  <span className="iconify" data-icon="akar-icons:arrow-right" />
                </a>

                <a href="#" className="msg-btn rotate-icon-btn">
                  <img
                    className="rotate-icon"
                    src={ShapeMsgImg}
                    alt="mail-us"
                    // style={{ transform: "rotate(-45deg)" }}
                    ref={rotateIconRef}
                  />
                  <span className="icon">
                    <img src={SmsTrackingImg} alt="msg" />
                  </span>
                </a>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="case-studies-right">
                <div className="case-studies-brands">
                  <div className="case-studies-item">
                    <ul className="slide-top">
                      {caseStudiesData.map((caseStudy, index) => (
                        <li key={index}>
                          <a href={caseStudy.link}>
                            <img src={caseStudy.image} alt="brands" />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <ul className="slide-top">
                      {caseStudiesData.map((caseStudy, index) => (
                        <li key={index}>
                          <a href={caseStudy.link}>
                            <img src={caseStudy.image} alt="brands" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="case-studies-item">
                    <ul className="slide-bottom">
                      {caseStudiesData2.map((caseStudy, index) => (
                        <li key={index}>
                          <a href={caseStudy.link}>
                            <img src={caseStudy.image} alt="brands" />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <ul className="slide-bottom">
                      {caseStudiesData2.map((caseStudy, index) => (
                        <li key={index}>
                          <a href={caseStudy.link}>
                            <img src={caseStudy.image} alt="brands" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </CaseStudiesStyle>
  );
};

export default CaseStudies;
