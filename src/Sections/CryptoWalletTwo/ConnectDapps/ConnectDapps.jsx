import ConnectDappsStyle from "./ConnectDapps.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import coinIconsImg from "../../../assets/images/crypto2/coin_icons.svg";
import arrowRightBlueImg from "../../../assets/images/crypto2/arrow-right-blue.svg";
import mockupImg from "../../../assets/images/crypto2/mockup.png";
import dottedLineImg from "../../../assets/images/crypto2/dotted_line.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ConnectDapps = () => {
  return (
    <ConnectDappsStyle className="connect-dapps-section">
      <img src={dottedLineImg} alt="img" className="connect-dapps-doted-img" />
      <div className="container">
        <div className="connect-dapps-content">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="Simple &amp; Powerful Crypto Wallet for dApps"
          subtitle="Connect Dapps"
          alignment="center"
          titleMaxW="570px"
          titleMargin="auto"
          parentClass="crypto2"
        />
        </ScrollAnimate>
        <ScrollAnimate delay={250}>
        <div className="connect-dapps-text">
          <p>
            We use as filler text for layouts, non-readability is of great
            importance but because those who do not know how to pursue pleasure.
            Nor again is there anyone who loves or pursues or desires to obtain
            pain of itself, because it is pain
          </p>
          <a href="#">
            Connect Your dApp <img src={arrowRightBlueImg} alt="icon" />
          </a>
        </div>
        </ScrollAnimate>
        </div>
        <div className="connect-dapps-img">
          <ScrollAnimate delay={300}>
          <img src={coinIconsImg} alt="img" className="coin-img" />
          <img src={mockupImg} alt="img" className="mocup-img" />
          </ScrollAnimate>
        </div>
      </div>
    </ConnectDappsStyle>
  );
};

export default ConnectDapps;
