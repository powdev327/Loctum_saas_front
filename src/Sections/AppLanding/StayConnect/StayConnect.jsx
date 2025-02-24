import StayConnectStyle from "./StayConnect.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Importing images
import StayConnectRoundShape from "../../../assets/images/app/stay-connect-round-shape.png";
import StayConnectMashGrade from "../../../assets/images/app/stay-connect-mash-grade.png";
import PlayStoreIcon from "../../../assets/images/os-store/play_store.svg";
import AppStoreIcon from "../../../assets/images/os-store/app_store.svg";
import PlayStoreQRCode from "../../../assets/images/app/play-store-qr-code.png";
import AppStoreQRCode from "../../../assets/images/app/app-store-qr-code.png";
import StayConnectMockup from "../../../assets/images/app/stay-connect-mockup.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const StayConnect = () => {
  return (
    <StayConnectStyle>
      <section className="stay-connect-section">
        <div className="container">
          <div className="stay-connect-content">
            <div className="stay-connect-round-shape">
              <img src={StayConnectRoundShape} alt="icon" />
            </div>
            <img
              src={StayConnectMashGrade}
              alt="img"
              className="stay-connect-mash-grade"
            />
           <ScrollAnimate delay={200}>
           <SectionTitle
              title="Stay connect Anytime anywhere"
              titleClass="text-white"
              alignment="center"
            />
            <h5 className="dm-sans text-white">
              Startco Meet iOS and android app available now.
            </h5>
           </ScrollAnimate>

            <ScrollAnimate delay={250}>
            <div className="stay-connect-btns">
              <div className="row">
                <div className="col-sm-6">
                  <a href="https://play.google.com" target="_blank">
                    <img src={PlayStoreIcon} alt="playstore" />
                    <h5 className="dm-sans">
                      <span>Download on</span>
                      Google Play
                    </h5>
                  </a>
                  <div className="qr-code">
                    <div className="qr-code-img">
                      <img src={PlayStoreQRCode} alt="qu-code" />
                    </div>
                    <p className="text-white">43M+ Downloads</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <a href="https://www.apple.com/app-store" target="_blank">
                    <img src={AppStoreIcon} alt="appstore" />
                    <h5 className="dm-sans">
                      <span>Download on</span>
                      App Store
                    </h5>
                  </a>
                  <div className="qr-code">
                    <div className="qr-code-img">
                      <img src={AppStoreQRCode} alt="qu-code" />
                    </div>
                    <p className="text-white">25M+ Downloads</p>
                  </div>
                </div>
              </div>
            </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>
      <ScrollAnimate delay={300}>
      <div className="stay-connect-mobile-img">
        <img src={StayConnectMockup} alt="img" />
      </div>
      </ScrollAnimate>
    </StayConnectStyle>
  );
};

export default StayConnect;
