import CorporateHowWorkStyle from "./CorporateHowWork.style";
import { CorporateHowWorkData } from "../../../assets/data/CorporateData/CorporateHowWorkData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CorporateHowWork = () => {
  return (
    <CorporateHowWorkStyle className="how-it-work-section">
      <div className="container">
        <div className="row">
          {CorporateHowWorkData.map((item, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <ScrollAnimate delay={item.delay}>
              <div className="how-it-work-content">
                <h2>{item.number}</h2>
                <div className="how-it-work-text">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </CorporateHowWorkStyle>
  );
};

export default CorporateHowWork;
