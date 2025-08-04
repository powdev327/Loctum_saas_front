import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import BusinessChooseStyle from "./BusinessChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useTranslation } from "react-i18next";

import whyChoose1 from "../../../assets/images/business/why-choose1.png";
import whyChoose2 from "../../../assets/images/business/why-choose2.png";
import whyChoose3 from "../../../assets/images/business/why-choose3.png";
import whyChoose4 from "../../../assets/images/business/why-choose4.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const BusinessChoose = () => {
  const { t } = useTranslation();
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  // Create tab content data using translations
  const tabsData = [
    {
      image: whyChoose1,
      title: t('home.whyChoose.tab1.title'),
      description: t('home.whyChoose.tab1.description'),
      features: t('home.whyChoose.tab1.features', { returnObjects: true })
    },
    {
      image: whyChoose2,
      title: t('home.whyChoose.tab2.title'),
      description: t('home.whyChoose.tab2.description'),
      features: t('home.whyChoose.tab2.features', { returnObjects: true })
    },
    {
      image: whyChoose3,
      title: t('home.whyChoose.tab3.title'),
      description: t('home.whyChoose.tab3.description'),
      features: t('home.whyChoose.tab3.features', { returnObjects: true })
    },
    {
      image: whyChoose4,
      title: t('home.whyChoose.tab4.title'),
      description: t('home.whyChoose.tab4.description'),
      features: t('home.whyChoose.tab4.features', { returnObjects: true })
    }
  ];

  const [settingsFor, setSettingsFor] = useState({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    infinite: true,
    asNavFor: sliderNavRef.current,
    ref: sliderForRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  const [settingsNav, setSettingsNav] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: sliderForRef.current,
    dots: false,
    autoplay: true,
    autoplaySpeed: 6000,
    centerMode: false,
    focusOnSelect: true,
    ref: sliderNavRef,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  useEffect(() => {
    setSettingsFor((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderNavRef.current,
    }));
    setSettingsNav((prevSettings) => ({
      ...prevSettings,
      asNavFor: sliderForRef.current,
    }));
  }, []);

  return (
    <BusinessChooseStyle className="why-choose-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
            <SectionTitle
              title={t('home.features.title')}
              subtitle={t('home.features.subtitle')}
              alignment="center"
              parentClass="z-index-3"
            />
            </ScrollAnimate>
          </div>
        </div>
      </div>
      <div className="why-choose-parent">
        <div className="overlay-left" />
        <div className="overlay-right" />
        <ScrollAnimate delay={200}>
        <div className="why-choose-container container">
          <div className="container">
            <div className="why-choose-tab">
              <Slider
                {...settingsNav}
                className="tab-buttons why-chose-slider-nav"
              >
                <button className="tab-btn">
                  <span>01.</span> <span className="text">{t('home.whyChoose.tab1.text1')}</span>
                  <span className="text2">{t('home.whyChoose.tab1.text2')}</span>
                </button>
                <button className="tab-btn">
                  <span>02.</span> <span className="text">{t('home.whyChoose.tab2.text1')}</span>
                  <span className="text2">{t('home.whyChoose.tab2.text2')}</span>
                </button>
                <button className="tab-btn">
                  <span>03.</span> <span className="text">{t('home.whyChoose.tab3.text1')}</span>
                  <span className="text2">{t('home.whyChoose.tab3.text2')}</span>
                </button>
                <button className="tab-btn">
                  <span>04.</span> <span className="text">{t('home.whyChoose.tab4.text1')}</span>
                  <span className="text2">{t('home.whyChoose.tab4.text2')}</span>
                </button>
              </Slider>
              <progress max={100} value={0} />
            </div>
          </div>

          <Slider {...settingsFor} className="convert-visitors-slider-for why-chose-slider">
            {tabsData.map((tab, index) => (
              <div key={index} className="section">
                <div className="tab-body">
                  <div className="tab-body-img">
                    <img src={tab.image} alt="img" />
                  </div>
                  <div className="tab-body-text">
                    <h2>{tab.title}</h2>
                    <p>{tab.description}</p>
                    <ul className="list">
                      {tab.features && tab.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>
                          <div className="list-item">
                            <span className="iconify" data-icon="bi:check-lg" />
                            <p>{feature}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </ScrollAnimate>
      </div>
    </BusinessChooseStyle>
  );
};

export default BusinessChoose;
