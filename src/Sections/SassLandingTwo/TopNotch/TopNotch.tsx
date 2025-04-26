import TopNotchStyle from "./TopNotch.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { topNotchData } from "../../../assets/data/SassTwoData/TopnotchData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TopNotch = () => {
  return (
    <TopNotchStyle className="top-notch-features-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="Enjoy the wide range of features and functions"
          subtitle="top-notch features"
          alignment="center"
          titleMaxW="700px"
          titleMargin="auto"
          parentClass="sass"
        />
        </ScrollAnimate>
        <div className="top-notch-features-content">
          <div className="row">
            {topNotchData.map((feature, index) => (
              <div key={index} className="col-lg-3 col-sm-6 mb-0 lg-mb-5">
                <ScrollAnimate delay={feature.delay}>
                  <div className="top-notch-card">
                    <span>
                      <img src={feature.icon} alt="" />
                    </span>
                    <h5 className="wt-700">{feature.title}</h5>
                    <p>{feature.description}</p>
                  </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TopNotchStyle>
  );
};

export default TopNotch;
