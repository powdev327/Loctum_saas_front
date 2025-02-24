import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import PricingPlanBreadcumbs from "../Components/Breadcumbs/PricingPlanBreadcumbs";
import PricingPlanCards from "../Sections/PricingPlan/PricingPlanCards/PricingPlanCards";
import CaseStudies from "../Sections/PricingPlan/CaseStudies/CaseStudies";
import PricingFAQ from "../Sections/PricingPlan/PricingFAQ/PricingFAQ";
import ComparePlan from "../Sections/PricingPlan/ComparePlan/ComparePlan";
import Layout from "../Layout";

const PricingPlan = () => {
  return (
    <Layout pageTitle="QuickLocum - Pricing Plan">
      <div className="bg-gray">
        <Header variant="main-header" />
        <PricingPlanBreadcumbs />
        <PricingPlanCards />
        <ComparePlan />
        <CaseStudies />
        <PricingFAQ />
        <StartBuildingComponent />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default PricingPlan;
