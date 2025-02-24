import BusinessBannerStyle from "./BusinessBanner.style";

import HeroImg from "../../../assets/images/business/hero-img-4.png";
import CurveLineImg from "../../../assets/images/business/curve-line.png";
import StarsImg from "../../../assets/images/business/stars.svg";
import WaveShapeImg from "../../../assets/images/business/wave-shape.svg";
import ChartImg from "../../../assets/images/business/chart.svg";
import StatusShapeImg from "../../../assets/images/business/status-shape.svg";
import CustomPieProgress from "../../../Components/CustomPieProgress";
import { NavLink } from "react-router-dom";
import ScrollAnimate from './../../../Components/ScrollAnimate';

const BusinessBanner = () => {
  return (
    <BusinessBannerStyle className="hero-section-4">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <ScrollAnimate delay={200}>
              <div className="hero-section-4-content">
                <div className="hero-content-text">
                  <h1 className="title max-width-570">
                    Successful Businesses are keenly{" "}
                    <span className="marketing-badge v2">focused</span>
                  </h1>
                  <p>
                    Staco is the dedicated platform for human management that
                    helps to grow your startup business quickly
                  </p>
                </div>
                <div className="hero-content-button v4 mb-30">
                  <NavLink href="/sign-up" className="bg-blue-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">Get Start for Free</span>
                      <span className="btn-hover-text">Get Start for Free</span>
                    </span>
                  </NavLink>
                </div>
                <ul className="hero-content-list v4">
                  <li>
                    <div className="list-item">
                      <span className="iconify" data-icon="bi:check-lg" />
                      <p>No cards required</p>
                    </div>
                  </li>
                  <li>
                    <div className="list-item">
                      <span className="iconify" data-icon="bi:check-lg" />
                      <p>30 day free trial</p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-5">
            <ScrollAnimate delay={300}>
              <div className="hero-section-4-img">
                <img src={HeroImg} alt="hero-img" />
                <div className="overlay">
                  <div className="overlay-item item-1">
                    <img src={CurveLineImg} alt="img" />
                  </div>
                  <div className="overlay-item item-2">
                    <img src={StarsImg} alt="img" />
                  </div>
                  <div className="overlay-item item-3">
                    <img src={WaveShapeImg} alt="img" />
                  </div>
                  <div className="overlay-item chart">
                    <img src={ChartImg} alt="chart" />
                  </div>
                  <div className="overlay-item status">
                    <img src={StatusShapeImg} alt="bg-shape" />
                    <div className="progress pie_progress">
                      <CustomPieProgress
                        Text="Success rate"
                        TextColor="#444444"
                        Percentage={85}
                        ValueColor="#000000"
                        PathColor="#00CEC9"
                        TrailColor="rgba(0, 206, 201, 0.2)"
                      />
                      <p>Success rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </BusinessBannerStyle>
  );
};

export default BusinessBanner;
