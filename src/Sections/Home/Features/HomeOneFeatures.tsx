import FeaturesStyleWrapper from "./Features.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import { homeOneFeaturesData } from "../../../assets/data/HomeData/FeatureData";

import FrameImage from "../../../assets/images/main-demo/Frame.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

import Features1Image from "../../../assets/images/main-demo/features1.svg";
import Features2Image from "../../../assets/images/main-demo/features2.svg";
import Features3Image from "../../../assets/images/main-demo/features3.svg";

const HomeOneFeatures = () => {
  const { t } = useTranslation();
  
  // Get features data from translations
  const featuresData = [
    {
      animetiondelay: 250,
      cardclassName: "feature-card",
      icon: Features1Image,
      cardTitle: t('home.homeFeatures.feature1.title'),
      cardText: t('home.homeFeatures.feature1.text'),
    },
    {
      animetiondelay: 300,
      cardclassName: "feature-card active",
      icon: Features2Image,
      cardTitle: t('home.homeFeatures.feature2.title'),
      cardText: t('home.homeFeatures.feature2.text'),
    },
    {
      animetiondelay: 350,
      cardclassName: "feature-card",
      icon: Features3Image,
      cardTitle: t('home.homeFeatures.feature3.title'),
      cardText: t('home.homeFeatures.feature3.text'),
    },
  ];
  
  return (
    <FeaturesStyleWrapper className="feature-section md-pt-40 md-pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <SectionTitle
                subtitle={t('home.homeFeatures.subtitle')}
                title={t('home.homeFeatures.title')}
                parentClass="md-mb-0 text-center"
              />
            </ScrollAnimate>
          </div>
        </div>

        <div className="features-container">
          {featuresData?.map((info, i) => (
            <ScrollAnimate key={i} delay={info?.animetiondelay}>
              <div className={info?.cardclassName}>
                <div className="feature-card-icon">
                  <img src={info?.icon} alt="feature-img" />
                </div>
                <div className="feature-card-text">
                  <h5 className="wt-700">{info?.cardTitle}</h5>
                  <p>{info?.cardText}</p>
                </div>
              </div>
            </ScrollAnimate>
          ))}
        </div>

      </div>
    </FeaturesStyleWrapper>
  );
};

export default HomeOneFeatures;
