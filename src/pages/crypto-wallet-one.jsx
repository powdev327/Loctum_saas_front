import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CryptoOneBanner from "../Sections/Banner/CryptoOneBanner/CryptoOneBanner";
import CryptoOneFeatures from "../Sections/CryptoWallet/CryptoOneFeatures/CryptoOneFeatures";
import ManageAsset from "../Sections/CryptoWallet/ManageAsset/ManageAsset";
import BlockchainDefi from "../Sections/CryptoWallet/BlockchainDefi/BlockchainDefi";
import CrossPlatform from "../Sections/CryptoWallet/CrossPlatform/CrossPlatform";
import SuperSecure from "../Sections/CryptoWallet/SuperSecure/SuperSecure";
import UserFeedback from "./../Sections/CryptoWallet/UserFeedback/UserFeedback";
import DownloadWallet from "./../Sections/CryptoWallet/DownloadWallet/DownloadWallet";
import CryptoWalletOneFooter from "../Sections/Footer/CryptoWalletOneFooter";

const CryptoWalletOne = () => {
  return (
    <Layout pageTitle={"QuickLocum - Crypto Wallet One"} scrollVariant={"crypto"}>
      <div className="crypto-wallet-body">
        <Header variant={"crypto"} />
        <CryptoOneBanner />
        <CryptoOneFeatures />
        <ManageAsset />
        <BlockchainDefi />
        <CrossPlatform />
        <SuperSecure />
        <UserFeedback />
        <DownloadWallet />
        <CryptoWalletOneFooter />
      </div>
    </Layout>
  );
};

export default CryptoWalletOne;
