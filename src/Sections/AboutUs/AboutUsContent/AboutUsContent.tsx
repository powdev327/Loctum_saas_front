import AboutUsContentStyle from "./AboutUsContent.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import CustomPieProgress from "./../../../Components/CustomPieProgress";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import Data from "../../../assets/data/about-us/aboutUs";

import AboutFeatureImg from "../../../assets/images/about-us/about-feature.png";
import ItemShape from "../../../assets/images/shape/item-shape.svg";
import Star4 from "../../../assets/images/shape/star-4.svg";
import Wave from "../../../assets/images/about-us/wave-shape.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

import Sustainability from "../../../assets/images/icons/sustainability.svg";
import Intelligence from "../../../assets/images/icons/intelligence.svg";

const AboutUsContent = () => {
  const { t } = useTranslation();
  
  // Get data from translations
  const Data = [
    {
      title: t('aboutUs.content.mission.title'),
      subtitle: t('aboutUs.content.mission.subtitle'),
      description: t('aboutUs.content.mission.description'),
      featerList: [
        {
          title: t('aboutUs.content.features.sustainability'),
          icon: Sustainability,
        },
        {
          title: t('aboutUs.content.features.intelligence'),
          icon: Intelligence,
        },
      ],
    },
    {
      title: t('aboutUs.content.vision.title'),
      subtitle: t('aboutUs.content.vision.subtitle'),
      description: t('aboutUs.content.vision.description'),
      featerList: [
        {
          title: t('aboutUs.content.features.sustainability'),
          icon: Sustainability,
        },
        {
          title: t('aboutUs.content.features.intelligence'),
          icon: Intelligence,
        },
      ],
    },
    {
      title: t('aboutUs.content.goal.title'),
      subtitle: t('aboutUs.content.goal.subtitle'),
      description: t('aboutUs.content.goal.description'),
      featerList: [
        {
          title: t('aboutUs.content.features.sustainability'),
          icon: Sustainability,
        },
        {
          title: t('aboutUs.content.features.intelligence'),
          icon: Intelligence,
        },
      ],
    },
  ];
  return (
    <AboutUsContentStyle className="about-feature-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <TitleStyleWrapper>
                <div className="section-title md-mb-40">
                  <span className="sub-title">{t('aboutUs.content.subtitle')}</span>
                  <h2 className="title">
                    {t('aboutUs.content.title1')} <span className="marketing-badge">{t('aboutUs.content.title2')}</span>
                  </h2>
                </div>
              </TitleStyleWrapper>
            </ScrollAnimate>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <ScrollAnimate>
              <div className="about-feature-tab">
                <Tabs>
                  <TabList>
                    {Data?.map((item, i) => (
                      <Tab key={i}>{item.title}</Tab>
                    ))}
                  </TabList>

                  {Data?.map((item, i) => (
                    <TabPanel key={i} className="about-feature-tab-content">
                      <h4>{item.subtitle}</h4>
                      <p style={{ whiteSpace: 'pre-line' }}>{item.description}</p>

                      <ul className="list">
                        {item.featerList?.map((feature, index) => (
                          <li key={index}>
                            <div className="list-item">
                              <img src={feature.icon} alt="icon" />
                              <p>{feature.title}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </TabPanel>
                  ))}
                </Tabs>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-5">
            <ScrollAnimate>
              <div className="about-feature-img">
                <img src={AboutFeatureImg} alt="about-feature-img" />
                <div className="overlay">
                  <div className="overlay">
                    <div className="overlay-item reduction-time">
                      <div className="reduction-time-top">
                        <h3>
                          <span className="counter" data-target={40}>
                            40
                          </span>
                          %
                        </h3>
                        <img src={Star4} alt="star" />
                      </div>
                      <p>{t('aboutUs.content.stats.reductionTime')}</p>
                    </div>
                    <div className="overlay-item success-rate">
                      <img className="rotate-icon" src={ItemShape} alt="icon" />
                      <div className="success-rate-content">
                        <div className="progress pie_progress">
                          <CustomPieProgress
                            Text={t('aboutUs.content.stats.successRate')}
                            TextColor="#444444"
                            Percentage={92}
                            ValueColor="#000000"
                            PathColor="#00CEC9"
                            TrailColor="rgba(0, 206, 201, 0.2)"
                          />
                          <p>{t('aboutUs.content.stats.successRate')}</p>
                        </div>
                      </div>
                    </div>
                    <div className="overlay-item wave-shape">
                      <img src={Wave} alt="shape" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </AboutUsContentStyle>
  );
};

export default AboutUsContent;
