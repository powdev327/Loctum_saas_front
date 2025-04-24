import { useEffect, useRef, useState } from "react";
import TitleStyleWrapper from "./../../../Components/Title/Title.style";
import PowerfullTemplateStyle from "./PowerfullTemplate.style";

import templateImg1 from "../../../assets/images/sass1/template-img1.png";
import templateImg2 from "../../../assets/images/sass1/template-img2.png";
import templateImg3 from "../../../assets/images/sass1/template-img3.png";
import monitorIcon from "../../../assets/images/icons/monitor_icon.svg";
import messageIcon from "../../../assets/images/icons/message_icon.svg";
import documentIcon from "../../../assets/images/icons/document_icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

function PowerfullTemplate() {
  const [activeNumber, setActiveNumber] = useState(0);
  const powerfullTemplateContentRef = useRef(null);
  const timelineProgressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      updateProgress();
    };

    const handleResize = () => {
      updateProgress();
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateProgress = () => {
    const timelineProgress = timelineProgressRef.current;
    const powerfullTemplateContent = powerfullTemplateContentRef.current;
    const sectionTop = powerfullTemplateContent.getBoundingClientRect().top;
    const sectionHeight = powerfullTemplateContent.clientHeight;
    const windowHeight = window.innerHeight;

    const progress = Math.max(
      0,
      Math.min(1, (windowHeight - sectionTop) / (sectionHeight + windowHeight))
    );

    timelineProgress.style.height = `${progress * 100}%`;

    // Update active number based on progress thresholds
    if (progress >= 0 && progress < 0.33) {
      setActiveNumber(1);
    } else if (progress >= 0.33 && progress < 0.66) {
      setActiveNumber(2);
    } else if (progress >= 0.66) {
      setActiveNumber(3);
    }
  };

  return (
    <PowerfullTemplateStyle className="powerfull-template-section">
      <div className="container">
        <TitleStyleWrapper>
          <div className="section-title md-mb-0 text-center">
           <ScrollAnimate delay={200}>
           <h2>
              The most powerful SaaS <br />
              template ever
            </h2>
            <h6 className="mb-0">
              1000+ Big & Small business trusted us from 25 years
            </h6>
           </ScrollAnimate>
          </div>
        </TitleStyleWrapper>

        {/* Powerfull Template Content */}
        <div
          className="powerfull-template-content"
          ref={powerfullTemplateContentRef}
        >
          <div className="timeline-innerline">
            <div className="timeline-progress" ref={timelineProgressRef}></div>
          </div>

          {/* Powerfull Template Rows */}
          <div className="powerfull-template-row">
          <div
              className={`powerfull-template-number ${
                activeNumber >= 1 ? "active" : ""
              }`}
            >
              1
            </div>
            <div className="row">
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                <div className="powerfull-template-img powerfull-template-img-left">
                  <img src={templateImg1} alt="img" />
                </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                <div className="powerfull-template-text powerfull-template-text-right">
                  <h4>Simple and clean layout</h4>
                  <p>
                    We use as filler text for layouts, non-readability is of
                    great importancebut because those who do not know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> Share
                      multiple screen at a time
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> High
                      Quality screen
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> No
                      buffering
                    </li>
                  </ul>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
          <div className="powerfull-template-row">
          <div
              className={`powerfull-template-number ${
                activeNumber >= 2 ? "active" : ""
              }`}
            >
              2
            </div>
            <div className="row flex-row-reverse">
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                <div className="powerfull-template-img powerfull-template-img-right">
                  <img src={templateImg2} alt="img" />
                </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                <div className="powerfull-template-text powerfull-template-text-left">
                  <h4>Extensible and powerful</h4>
                  <h6>
                    We use as filler text for layouts, non-readability is of
                    great importancebut because those
                  </h6>
                  <p>
                    Because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone
                  </p>
                  <ol>
                    <li>
                      <span>
                        <img src={monitorIcon} alt="icon" />
                      </span>
                      Teamwork Webinar
                    </li>
                    <li>
                      <span>
                        <img src={messageIcon} alt="icon" />
                      </span>
                      Chat &amp; Channel
                    </li>
                    <li>
                      <span>
                        <img src={documentIcon} alt="icon" />
                      </span>
                      Whiteboards
                    </li>
                  </ol>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
          <div className="powerfull-template-row">
          <div
              className={`powerfull-template-number ${
                activeNumber >= 3 ? "active" : ""
              }`}
            >
              3
            </div>
            <div className="row">
              <div className="col-md-6">
                <ScrollAnimate delay={200}>
                <div className="powerfull-template-img powerfull-template-img-left pb-0">
                  <img src={templateImg3} alt="img" />
                </div>
                </ScrollAnimate>
              </div>
              <div className="col-md-6">
                <ScrollAnimate delay={300}>
                <div className="powerfull-template-text powerfull-template-text-right">
                  <h4>Create Beautiful Websites</h4>
                  <p>
                    Rationally encounter consequences that are extremely
                    painful. Nor again is there anyone not know how to pursue
                    pleasure rationally encounter consequences
                  </p>
                  <ul>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" />
                      Share multiple screen at a time
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> High
                      Quality screen plugins
                    </li>
                    <li>
                      <span className="iconify" data-icon="bi:check-lg" /> No
                      buffering
                    </li>
                  </ul>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PowerfullTemplateStyle>
  );
}

export default PowerfullTemplate;
