import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import AccountingBanner from "../Sections/Banner/AccountingBanner/AccountingBanner";
import AccBrandSlider from "../Sections/Accounting/AccBrandSlider/AccBrandSlider";
import AccFeatures from "../Sections/Accounting/AccFeatures/AccFeatures";
import Offering from "../Sections/Accounting/Offering/Offering";
import DesignSystem from "../Sections/Accounting/DesignSystem/DesignSystem";

const Accounting = () => {
  return (
    <Layout pageTitle={"QuickLocum - Accounting"} scrollVariant={"defi"}>
      <div className="body-container">
        <Header variant={"account"} />
        <AccountingBanner />
        <AccBrandSlider />
        <AccFeatures />
        <Offering />
        <DesignSystem />
      </div>
    </Layout>
  );
};

export default Accounting;
