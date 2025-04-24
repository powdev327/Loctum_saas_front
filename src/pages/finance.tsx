import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import FinanceBanner from "../Sections/Banner/FinanceBanner/FinanceBanner";
import FinanceCards from "../Sections/Finance/FinanceCards/FinanceCards";
import FinanceBenefits from "../Sections/Finance/FinanceBenefits/FinanceBenefits";
import FinanceLetsTalk from "../Sections/Finance/FinanceLetsTalk/FinanceLetsTalk";
import ParallaxComponent from "./../Components/Peralax/ParallaxComponent";
import FinanceChoose from "../Sections/Finance/FinanceChoose/FinanceChoose";
import FinanceTestimonials from "../Sections/Finance/FinanceTestimonials/FinanceTestimonials";
import FinanceBlog from "../Sections/Finance/FinanceBlog/FinanceBlog";
import FinanceFooter from "../Sections/Footer/FinanceFooter";
import FinanceDisclaimer from "../Sections/Finance/FinanceDisclaimer/FinanceDisclaimer";

const Finance = () => {
  return (
    <Layout pageTitle={"QuickLocum - Finance"} scrollVariant={"defi"}>
      <div className="finance-top-section">
        <Header variant={"finance"} />
        <FinanceBanner />
        <FinanceCards />
        <FinanceBenefits />
        <FinanceLetsTalk />
        <ParallaxComponent parallaxTextClass="v6" />
        <FinanceChoose />
      </div>
      <div className="h6-bottom-section">
        <FinanceTestimonials />
        <FinanceBlog />
        <FinanceFooter />
      </div>
      <FinanceDisclaimer />
    </Layout>
  );
};

export default Finance;
