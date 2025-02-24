import BusinessHowWorkStyle from "./BusinessHowWork.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { howWorksData } from "../../../assets/data/BusinessData/HowWorkData";

import arrowRightBlueIcon from "../../../assets/images/icons/arrow-right-blue.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
const BusinessHowWork = () => {
  return (
    <BusinessHowWorkStyle className="how-works-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Create. Select. Collaborate."
                subtitle="How it works"
              />
            </ScrollAnimate>
          </div>
        </div>
        <div className="row">
          {howWorksData?.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <ScrollAnimate delay={item.delay}>
                <div className={`how-works-card card-${item.id}`}>
                  <div className="how-works-card-icon">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className="how-works-card-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <a href="#">
                      <span>Learn more</span>
                      <img src={arrowRightBlueIcon} alt="icon" />
                    </a>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </BusinessHowWorkStyle>
  );
};

export default BusinessHowWork;
