import NewsletterFeaturesStyle from "./NewsletterFeatures.style";
import TitleStyleWrapper from "./../../../Components/Title/Title.style";
import { featureData } from "../../../assets/data/NewsletterData/FeatureData";

import RightArrow from "../../../assets/images/icons/arrow-right-blue.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const NewsletterFeatures = () => {
  return (
    <NewsletterFeaturesStyle className="newsleter-features-secton">
      <div className="container">
        <TitleStyleWrapper>
          <ScrollAnimate delay={200}>
          <div className="section-title">
            <span className="sub-title">features</span>
            <h2 className="title">
              One Platform for <br />
              Sales, <span className="caveat">Marketing</span> &amp; automation
            </h2>
          </div>
          </ScrollAnimate>
        </TitleStyleWrapper>
        <div className="row">
          {featureData.map((feature, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <ScrollAnimate delay={feature.delay}>
              <div className="newsleter-features-card">
                <div className="newsleter-features-card-img">
                  <img src={feature.image} alt={`feature-img-${index}`} />
                </div>
                <div className="newsleter-features-card-text">
                  <h5 className="wt-700">{feature.title}</h5>
                  <p>{feature.description}</p>
                  <a href="#">
                    Learn more
                    <img src={RightArrow} alt="icon" />
                  </a>
                </div>
              </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </NewsletterFeaturesStyle>
  );
};

export default NewsletterFeatures;
