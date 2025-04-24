import TokenSocialStyle from "./TokenSocial.style";
import { socialLinks } from "../../../assets/data/CryptoTokenData/TokenSocial";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TokenSocial = () => {
  return (
    <TokenSocialStyle className="crypto-token-social">
      <div className="container">
        <ScrollAnimate delay={200}>
          <div className="crypto-social-list">
            {socialLinks.map((socialLink, index) => (
              <div key={index} className="crypto-social-link">
                <a href={socialLink.url} target="_blank">
                  <div className="crypto-social-btn">
                    <span className="crypto-social-icon">
                      <img src={socialLink.icon} alt="icon" />
                      <img src={socialLink.icon} alt="icon" />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </ScrollAnimate>
      </div>
    </TokenSocialStyle>
  );
};

export default TokenSocial;
