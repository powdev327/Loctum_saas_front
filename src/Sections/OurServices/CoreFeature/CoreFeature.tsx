import CoreFeatureStyle from "./CoreFeature.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";

// Import images
import icon1 from '../../../assets/images/services/1.svg';
import icon2 from '../../../assets/images/services/2.svg';
import icon3 from '../../../assets/images/services/3.svg';
import icon4 from '../../../assets/images/services/4.svg';

import layoutIcon from "../../../assets/images/icons/layout.svg";
import shapeLayoutIcon from "../../../assets/images/icons/shape-layout.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const CoreFeature = () => {
  const { t } = useTranslation();

  const coreFeatures = [
    {
      iconSrc: icon1,
      featureKey: "feature1",
      delay: 100,
    },
    {
      iconSrc: icon2,
      featureKey: "feature2",
      delay: 150,
    },
    {
      iconSrc: icon3,
      featureKey: "feature3",
      delay: 200,
    },
    {
      iconSrc: icon4,
      featureKey: "feature4",
      delay: 250,
    },
  ];

  const coreFeatureRef = useRef(null);
  const rotateIconRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!coreFeatureRef.current || !rotateIconRef.current) return;

      const y = window.scrollY;
      const x = coreFeatureRef.current.offsetTop - 200;
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
    <CoreFeatureStyle className="core-feature-section" ref={coreFeatureRef}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="core-feature-content">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <span className="sub-title">{t('services.coreFeatures.subtitle')}</span>
                  <h2 className="title xl-mb-40 md-mb-20">
                    {t('services.coreFeatures.title')}
                    <br />
                    {t('services.coreFeatures.titleLine2')}
                  </h2>
                  <p>
                    {t('services.coreFeatures.description')}
                  </p>

                </TitleStyleWrapper>
              </ScrollAnimate>
              <ScrollAnimate delay={250}>
                <div className="core-feature-actions">
                  {/*<a href="#" className="text-link">*/}
                  {/*  <span>View Case Studies</span>*/}
                  {/*  <span*/}
                  {/*    className="iconify"*/}
                  {/*    data-icon="akar-icons:arrow-right"*/}
                  {/*  />*/}
                  {/*</a>*/}
                  <a href="#" className="rotate-icon-btn">
                    <img
                      className="rotate-icon"
                      src={shapeLayoutIcon}
                      alt="layout-icon"
                      ref={rotateIconRef}
                    />
                    <span className="icon">
                      <img src={layoutIcon} alt="shape-layout-icon" />
                    </span>
                  </a>
                </div>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              {coreFeatures.map((feature, index) => (
                <div key={index} className="col-md-6">
                  <ScrollAnimate delay={feature.delay}>
                    <div className="core-feature-item">
                      <div className="core-feature-item-icon">
                        <img src={feature.iconSrc} alt="core-feature-icon" />
                      </div>
                      <div className="core-feature-item-text">
                        <h5>{t(`services.coreFeatures.features.${feature.featureKey}.title`)}</h5>
                        <p>{t(`services.coreFeatures.features.${feature.featureKey}.description`)}</p>
                      </div>
                    </div>
                  </ScrollAnimate>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CoreFeatureStyle>
  );
};

export default CoreFeature;
