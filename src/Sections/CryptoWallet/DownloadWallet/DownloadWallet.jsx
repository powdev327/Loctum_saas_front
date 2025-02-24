import DownloadWalletStyle from "./DownloadWallet.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import playStoreLogo from "../../../assets/images/crypto/play_store.svg";
import appStoreLogo from "../../../assets/images/crypto/app_store.svg";
import chromeLogo from "../../../assets/images/os-store/chrome_logo.png";
import firefoxLogo from "../../../assets/images/os-store/firefox_logo.png";
import bravoLogo from "../../../assets/images/os-store/bravo_logo.png";
import edgeLogo from "../../../assets/images/os-store/edge_logo.png";
import os1Logo from "../../../assets/images/os-store/os1.png";
import os4Logo from "../../../assets/images/os-store/os4.png";
import os2Logo from "../../../assets/images/os-store/os2.png";
import os3Logo from "../../../assets/images/os-store/os3.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DownloadWallet = () => {
  return (
    <DownloadWalletStyle className="download-wallet-section">
      <div className="download-wallet-overlay">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Stay connect Anytime anywhere"
                  subtitle="Download Wallet"
                  titleMaxW="90%"
                  parentClass="crypto md-mb-0"
                />
                <div className="download-wallet-btns">
                  <div className="row">
                    <div className="col-sm-6">
                      <a href="https://play.google.com" target="_blank">
                        <img src={playStoreLogo} alt="playstore" />
                        <h5 className="dm-sans">
                          <span>Download on</span>
                          Google Play
                        </h5>
                      </a>
                    </div>
                    <div className="col-sm-6">
                      <a href="https://www.apple.com/app-store" target="_blank">
                        <img src={appStoreLogo} alt="playstore" />
                        <h5 className="dm-sans">
                          <span>Download on</span>
                          App Store
                        </h5>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-md-6">
              <div className="row mt-4">
                <div className="col-sm-6">
                  <ScrollAnimate delay={250}>
                    <div className="os-btns">
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={chromeLogo} alt="icon" />
                        </span>
                      </button>
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={firefoxLogo} alt="icon" />
                        </span>
                      </button>
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={bravoLogo} alt="icon" />
                        </span>
                      </button>
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={edgeLogo} alt="icon" />
                        </span>
                      </button>
                    </div>
                  </ScrollAnimate>
                </div>
                <div className="col-sm-6">
                  <ScrollAnimate delay={300}>
                    <div className="os-btns">
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={os1Logo} alt="icon" />
                        </span>
                      </button>
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={os4Logo} alt="icon" />
                        </span>
                      </button>
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={os2Logo} alt="icon" />
                        </span>
                      </button>
                      <button className="os-btn">
                        <span className="os-btn-inner">
                          <img src={os3Logo} alt="icon" />
                        </span>
                      </button>
                    </div>
                  </ScrollAnimate>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DownloadWalletStyle>
  );
};

export default DownloadWallet;
