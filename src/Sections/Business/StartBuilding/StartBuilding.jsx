import StartBuildingStyle from "./StartBuilding.style";
import BuildingImg from "../../../assets/images/business/building-img-4.svg";
import { NavLink } from "react-router-dom";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const StartBuilding = () => {
  return (
    <StartBuildingStyle className="building-section-4">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-md-4">
            <ScrollAnimate delay={200}>
              <div className="building-img-4">
                <img src={BuildingImg} alt="building-img" />
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-md-8">
            <ScrollAnimate delay={300}>
              <div className="building-content-4">
                <div className="section-title mb-0">
                  <h2 className="title">
                    Start building a<br />
                    high-performing Website
                  </h2>
                </div>
                <NavLink to={"/sign-up"} className="template-btn primary-bg">
                  <span className="btn-inner">
                    <span className="btn-normal-text">Get Start for Free</span>
                    <span className="btn-hover-text">Get Start for Free</span>
                  </span>
                </NavLink>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </StartBuildingStyle>
  );
};

export default StartBuilding;
