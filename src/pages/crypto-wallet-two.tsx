import CryptoTwoBanner from "../Sections/Banner/CryptoTwoBanner/CryptoTwoBanner";
import CryptoAsset from "../Sections/CryptoWalletTwo/CryptoAsset/CryptoAsset";
import CrossNetwork from "../Sections/CryptoWalletTwo/CrossNetwork/CrossNetwork";
import Benefites from "../Sections/CryptoWalletTwo/Benefites/Benefites";
import CryptoBalls from "../Sections/CryptoWalletTwo/CryptoBalls/CryptoBalls";
import SafePlatform from "../Sections/CryptoWalletTwo/SafePlatform/SafePlatform";
import ConnectDapps from "../Sections/CryptoWalletTwo/ConnectDapps/ConnectDapps";
import DownloadWalletTwo from "./../Sections/CryptoWalletTwo/DownloadWalletTwo/DownloadWalletTwo";
import CryptoPartners from "../Sections/CryptoWalletTwo/CryptoPartners/CryptoPartners";
import CryptoSupport from "../Sections/CryptoWalletTwo/CryptoSupport/CryptoSupport";
import CryptoWalletTwoFooter from "../Sections/Footer/CryptoWalletTwoFooter";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";

const CryptoWalletTwo = () => {
  return (
    <Layout pageTitle={"QuickLocum - Crypto Wallet Two"} scrollVariant={"crypto2"}>
      <Header variant={"crypto2"} />
      <CryptoTwoBanner />
      <CryptoAsset />
      <CrossNetwork />
      <Benefites />
      <CryptoBalls />
      <SafePlatform />
      <ConnectDapps />
      <DownloadWalletTwo />
      <CryptoPartners />
      <CryptoSupport />
      <CryptoWalletTwoFooter />
    </Layout>
  );
};

export default CryptoWalletTwo;
