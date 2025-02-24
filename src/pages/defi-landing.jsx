import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import DefiBanner from "../Sections/Banner/DefiBanner/DefiBanner";
import DefiSafePlatform from "../Sections/Defi/DefiSafePlatform/DefiSafePlatform";
import Metaverse from "../Sections/Defi/Metaverse/Metaverse";
import EcoSystem from "../Sections/Defi/EcoSystem/EcoSystem";
import DefiPartners from "../Sections/Defi/DefiPartners/DefiPartners";
import DefiBlog from "../Sections/Defi/DefiBlog/DefiBlog";
import DefiGetUpdates from "../Sections/Defi/DefiGetUpdates/DefiGetUpdates";
import DefiFooter from "../Sections/Footer/DefiFooter";

const DefiLanding = () => {
  return (
    <Layout pageTitle={"QuickLocum - Defi"} scrollVariant={"defi"}>
      <div className="defi-index-bg">
        <Header variant={"defi"} />
        <DefiBanner />
        <DefiSafePlatform />
        <Metaverse />
        <EcoSystem />
        <DefiPartners />
        <DefiBlog />
        <DefiGetUpdates />
        <DefiFooter />
      </div>
    </Layout>
  );
};

export default DefiLanding;
