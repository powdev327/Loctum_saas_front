import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CryptoTokenBanner from "../Sections/Banner/CryptoTokenBanner/CryptoTokenBanner";
import TokenBannerVideo from "../Sections/CryptoToken/TokenBannerVideo/TokenBannerVideo";
import KeyPoints from "../Sections/CryptoToken/KeyPoints/KeyPoints";
import TokenFeatures from "../Sections/CryptoToken/TokenFeatures/TokenFeatures";
import TokenTag from "../Sections/CryptoToken/TokenTag/TokenTag";
import TokenPartners from "../Sections/CryptoToken/TokenPartners/TokenPartners";
import ScrollText from "../Sections/CryptoToken/ScrollText/ScrollText";
import Tokenomics from "../Sections/CryptoToken/Tokenomics/Tokenomics";
import LatestNews from "../Sections/CryptoToken/LatestNews/LatestNews";
import Documents from "../Sections/CryptoToken/Documents/Documents";
import TokenSocial from "../Sections/CryptoToken/TokenSocial/TokenSocial";
import CryptoTokenFooter from "../Sections/Footer/CryptoTokenFooter";

const CryptoToken = () => {
  return (
    <Layout pageTitle={"QuickLocum - Crypto Token"} scrollVariant={"crypto-token"}>
      <div className="crypto-token-body">
        <Header variant={"crypto-token"} />
        <CryptoTokenBanner />
        <TokenBannerVideo />
        <KeyPoints />
        <TokenFeatures />
        <TokenTag />
        <TokenPartners />
        <ScrollText />
        <Tokenomics />
        <LatestNews />
        <Documents />
        <TokenSocial />
        <CryptoTokenFooter />
      </div>
    </Layout>
  );
};

export default CryptoToken;
