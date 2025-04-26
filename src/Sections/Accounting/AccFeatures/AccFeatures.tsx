import AccFeaturesStyle from "./AccFeatures.style";
import { featuresData } from "../../../assets/data/accounting/accountingData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import GreenArrow from "../../../assets/images/icons/features-green-arrow-right.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AccFeatures = () => {
  return (
    <AccFeaturesStyle className="index6-card-section index8-card-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
            <SectionTitle
              subtitle="Features"
              parentClass="section-title-left v8 md-mb-0"
              subtitleClass="green-color"
            />
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={250}>
            <SectionTitle
              title="Easy to Use Invoicing and Accounting Software"
              parentClass="section-title-left v8"
            />
            <p className="v8-card-section-text">
              We use as filler text for layouts, non-readability is of great
              importance, but because those who do not know how to pursue
              pleasure rationally encounter consequences that are extremely
              painful.
            </p>
            </ScrollAnimate>
          </div>
        </div>
        <div className="row">
          {featuresData?.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-5">
              <ScrollAnimate delay={feature.delay}>
              <div className="index6-card index8-card">
                <div className="index6-card-icon">
                  <img src={feature.iconSrc} alt="icon" />
                </div>
                <div>
                  <div className="index8-card-text">
                    <h5>{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                  <a href="#">
                    <span className="btn-text">Learn more</span>
                    <div className="icon">
                      <img src={GreenArrow} alt="icon" />
                    </div>
                  </a>
                </div>
              </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </AccFeaturesStyle>
  );
};

export default AccFeatures;
