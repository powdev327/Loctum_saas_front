import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import SassHeaderTop from "../Sections/SassLanding/SassHeaderTop/SassHeaderTop";
import SassOneBanner from "../Sections/Banner/SassOneBanner/SassOneBanner";
import SassWhyChoseUs from "../Sections/SassLanding/SassWhyChoseUs/SassWhyChoseUs";
import ParallaxComponent from "../Components/Peralax/ParallaxComponent";
import PowerfullTemplate from "../Sections/SassLanding/PowerfullTemplate/PowerfullTemplate";
import PricingTable from "../Sections/SassLanding/PricingTable/PricingTable";
import HappyCustomers from "../Sections/SassLanding/HappyCustomers/HappyCustomers";
import FooterOne from "../Sections/Footer/FooterOne";

const SassLanding = () => {
  return (
    <Layout pageTitle={"QuickLocum - Sass Landing"}>
      <SassHeaderTop />
      <Header variant="v5" />
      <SassOneBanner />
      <SassWhyChoseUs />
      <PowerfullTemplate />
      <ParallaxComponent />
      <PricingTable />
      <HappyCustomers />
      <FooterOne />
    </Layout>
  );
};

export default SassLanding;
