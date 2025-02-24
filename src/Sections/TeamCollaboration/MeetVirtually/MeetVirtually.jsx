import ScrollAnimate from "../../../Components/ScrollAnimate";
import TitleStyleWrapper from "../../../Components/Title/Title.style";

import graphBoxImage from "../../../assets/images/team-collaboration/graph-box.svg";
import MeetVirtuallyStyleWrapper from "./MeetVirtually.style";

const MeetVirtually = () => {
  return (
    <MeetVirtuallyStyleWrapper className="virtually-section">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-5">
            <ScrollAnimate delay={200}>
              <div className="virtually-img">
                <img src={graphBoxImage} alt="virtually-img" />
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="virtually-card">
              <ScrollAnimate delay={200}>
                <TitleStyleWrapper>
                  <div className="section-title">
                    <span className="sub-title">Meet virtually</span>
                    <h2 className="title mb-0">
                      Work from home <br />
                      With <span className="marketing-badge">virtual</span>{" "}
                      meeting
                    </h2>
                  </div>
                </TitleStyleWrapper>
              </ScrollAnimate>
              <ScrollAnimate delay={220}>
                <div className="virtually-content">
                  <h2>Team Collaboration</h2>
                  <p className="xl-mb-20">
                    We use as filler text for layouts, non-readability is of great
                    importancebut because those who do not know how to pursue
                    pleasure rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain.
                  </p>
                  <ul className="list">
                    <li className="wt-700">
                      <div className="list-item">
                        {/* <Icon className="iconify" icon={checkIcon} /> */}
                        <p>Share multiple screen at a time</p>
                      </div>
                    </li>
                    <li className="wt-700">
                      <div className="list-item">
                        {/* <Icon className="iconify" icon={checkIcon} /> */}
                        <p>High-Quality screen</p>
                      </div>
                    </li>
                    <li className="wt-700">
                      <div className="list-item">
                        {/* <Icon className="iconify" icon={checkIcon} /> */}
                        <p>No buffering</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </MeetVirtuallyStyleWrapper>
  );
};

export default MeetVirtually;
