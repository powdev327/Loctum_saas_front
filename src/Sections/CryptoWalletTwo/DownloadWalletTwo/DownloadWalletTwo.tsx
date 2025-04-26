import DownloadWalletTwoStyle from "./DownloadWalletTwo.style";
import { downloadOptions } from "../../../assets/data/CryptoWalletTwo/DownloadWalletData";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DownloadWalletTwo = () => {
  return (
    <DownloadWalletTwoStyle className="crypto2-download-wallet-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <SectionTitle
          title="Get your wallet now"
          subtitle="Download Wallet"
          alignment="center"
          parentClass="crypto2"
        />
        </ScrollAnimate>
        <ScrollAnimate delay={300}>
        <div className="download-wallet-list">
          <ul>
            {downloadOptions.map((option) => (
              <li key={option.id}>
                <a href="#">
                  <span>
                    <img src={option.icon} alt="icon" />
                  </span>
                  <h6>{option.platform}</h6>
                  <p>{option.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        </ScrollAnimate>
      </div>
    </DownloadWalletTwoStyle>
  );
};

export default DownloadWalletTwo;
