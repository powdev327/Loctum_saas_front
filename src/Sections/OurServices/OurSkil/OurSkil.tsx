import OurSkilStyle from "./OurSkil.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease"; // Update path accordingly

import skillsImg from "../../../assets/images/services/skills-img.svg";
import AnimatedProgressProvider from "./../../../Components/AnimatedProgressProvider";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const OurSkil = () => {
  const { t } = useTranslation();

  const skillsData = [
    { skillKey: "intelligentMatching", percentage: 92, color: "#00CEC9" },
    { skillKey: "missionManagement", percentage: 85, color: "#FEC458" },
    { skillKey: "userExperience", percentage: 90, color: "#0095FF" },
  ];
  return (
    <OurSkilStyle className="skills-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="skills-content">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <span className="sub-title">{t('services.skills.subtitle')}</span>
                  <h2 className="title">
                    {t('services.skills.title')}
                  </h2>
                  <p>
                    {t('services.skills.description')}
                  </p>

                </TitleStyleWrapper>
              </ScrollAnimate>
              <ScrollAnimate delay={250}>
                <div className="skills-status">
                  {skillsData?.map((skill, index) => (
                    <div key={index} className="skills-item">
                      <div className="progress-inner">
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={skill.percentage}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => (
                            <CircularProgressbar
                              value={value}
                              text={`${Math.round(value)}%`}
                              strokeWidth={5}
                              styles={buildStyles({
                                textColor: "#000",
                                pathColor: skill.color,
                                trailColor:
                                  "${({ theme }) => theme.colors.whiteColor}",
                              })}
                            />
                          )}
                        </AnimatedProgressProvider>
                      </div>
                      <p>{t(`services.skills.skillsList.${skill.skillKey}`)}</p>
                    </div>
                  ))}
                </div>
              </ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="skills-img">
              <ScrollAnimate delay={200}>
                <img src={skillsImg} alt="skills-img" />
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </OurSkilStyle>
  );
};

export default OurSkil;
