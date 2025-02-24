import SafePlatformStyle from "./SafePlatform.style";
import StickyBox from "react-sticky-box";

import cryptoDashboardImg from "../../../assets/images/crypto2/crypto2-dashboard-img.png";
import platformIcon4 from "../../../assets/images/crypto2/platform-icon4.svg";
import platformIcon3 from "../../../assets/images/crypto2/platform-icon3.svg";
import platformIcon2 from "../../../assets/images/crypto2/platform-icon2.svg";
import platformIcon1 from "../../../assets/images/crypto2/platform-icon1.svg";
import checkGreenIcon from "../../../assets/images/icons/check-green2.svg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const SafePlatform = () => {
  return (
    <SafePlatformStyle className="safe-platform-section">
      <div className="container">
        <StickyBox offsetTop={20} offsetBottom={20} className="safe-platform-sticky">
          <div className="safe-platform-header">
            <div className="container">
              <ScrollAnimate delay={200}>
              <SectionTitle
                title="Most useful features You must need"
                subtitle="Safe platform"
                titleMaxW="450px"
                parentClass="crypto2 title-green"
                titleClass="text-white"
              />
              </ScrollAnimate>
              <div className="safe-platform-img">
                <img src={cryptoDashboardImg} alt="img" />
              </div>
            </div>
          </div>
        </StickyBox>

        <div className="safe-platform-content-section">
          <div className="container">
            <div className="safe-platform-content">
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon4} alt="icon" />
                </div>
                <ScrollAnimate delay={200}>
                <div className="safe-platform-right">
                  <h4>Best Privacy</h4>
                  <p>
                    That they cannot foresee the pain and trouble that are bound
                    to ensue; and equal blame belongs to those who fail in their
                    duty through weakness of will.
                  </p>
                  <ul className="list">
                    <li>Profile Consultation</li>
                    <li>No-risk business idea</li>
                  </ul>
                </div>
                </ScrollAnimate>
              </div>
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon3} alt="icon" />
                </div>
                <ScrollAnimate delay={220}>
                <div className="safe-platform-right">
                  <h4>Super fast transaction</h4>
                  <p>
                    Many desktop publishing packages and web page editors now
                    use Lorem Ipsum as their default model text, and a search
                    for 'lorem ipsum' will uncover many web sites still in their
                    infancy. Various versions have evolved over the years
                  </p>
                  <div className="tags">
                    <a href="#">
                      <img src={checkGreenIcon} alt="icon" />
                      Multi-currency support
                    </a>
                    <a href="#">
                      <img src={checkGreenIcon} alt="icon" />
                      GST &amp; VAT
                    </a>
                  </div>
                </div>
                </ScrollAnimate>
              </div>
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon2} alt="icon" />
                </div>
                <ScrollAnimate delay={250}>
                <div className="safe-platform-right">
                  <h4>Up to 5% Cashback</h4>
                  <p>
                    These cases are perfectly simple and easy to distinguish. In
                    a free hour, when our power of choice is untrammelled and
                    when nothing prevents our being able to do what we like
                    best.
                  </p>
                  <ul className="chashback-list">
                    <li>
                      <h4>34%</h4>
                      <span>Increase customer</span>
                    </li>
                    <li>
                      <h4>2.8X</h4>
                      <span>User base growth</span>
                    </li>
                  </ul>
                </div>
                </ScrollAnimate>
              </div>
              <div className="safe-platform-text">
                <div className="safe-platform-icon">
                  <img src={platformIcon1} alt="icon" />
                </div>
                <ScrollAnimate delay={300}>
                <div className="safe-platform-right">
                  <h4>Global Payment</h4>
                  <p className="mb-0">
                    Equal blame belongs to those who fail in their duty through
                    weakness of will, which is the same as saying through
                    shrinking from toil and pain. That they cannot foresee the
                    pain and trouble that are bound to ensue; and equal blame
                    belongs.
                  </p>
                </div>
                </ScrollAnimate>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SafePlatformStyle>
  );
};

export default SafePlatform;
