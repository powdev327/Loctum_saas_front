import TokenTagStyle from "./TokenTag.style";
import { tagsData } from "../../../assets/data/CryptoTokenData/TokenTag";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const TokenTag = () => {
  return (
    <TokenTagStyle className="crypto-token-tag-section">
      <ScrollAnimate delay={200}>
      <div className="crypto-token-tag-inner">
        <div className="crypto-token-tag-list">
          {tagsData.map((tag, index) => (
            <a key={index} href="#" className={tag.className}>
              {tag.label}
            </a>
          ))}
        </div>
        <div className="crypto-token-tag-list">
          {tagsData.map((tag, index) => (
            <a key={index} href="#" className={tag.className}>
              {tag.label}
            </a>
          ))}
        </div>
      </div>
      </ScrollAnimate>
    </TokenTagStyle>
  );
};

export default TokenTag;
