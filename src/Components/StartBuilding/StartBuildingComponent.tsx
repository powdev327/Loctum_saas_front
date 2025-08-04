import StartBuildingStyleWrapper from "./StartBuilding.style";
import BuildingImg from "../../assets/images/about-us/building-img.svg";
import ScrollAnimate from "../ScrollAnimate";
import { useTranslation } from "react-i18next";

const StartBuildingComponent = () => {
  const { t } = useTranslation();
  
  return (
    <StartBuildingStyleWrapper>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-8">
            <div className="building-content">
              <ScrollAnimate delay={200}>
                <div className="section-title">
                  <h2 className="title">
                    {t('startBuilding.title')}
                  </h2>
                </div>
              </ScrollAnimate>
              <ScrollAnimate delay={200}>
                <a href="/sign-up" className="bg-blue-btn">
                  <span className="btn-inner">
                    <span className="btn-normal-text">{t('startBuilding.cta')}</span>
                    <span className="btn-hover-text">{t('startBuilding.cta')}</span>
                  </span>
                </a>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-5 col-md-4">
            <ScrollAnimate delay={200}>
            <div className="building-img">
              <img src={BuildingImg} alt="building-img" />
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </StartBuildingStyleWrapper>
  );
};

export default StartBuildingComponent;
