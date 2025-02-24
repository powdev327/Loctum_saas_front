import AppLandingBanner from "../Sections/Banner/AppLandingBanner/AppLandingBanner";
import AppFeatures from "../Sections/AppLanding/AppFeatures/AppFeatures";
import ConvertVisitors from "../Sections/AppLanding/ConvertVisitors/ConvertVisitors";
import AppWhyChoose from "../Sections/AppLanding/AppWhyChoose/AppWhyChoose";
import AppTestimonial from "../Sections/AppLanding/AppTestimonial/AppTestimonial";
import AppBenefits from "../Sections/AppLanding/AppBenefits/AppBenefits";
import StayConnect from "../Sections/AppLanding/StayConnect/StayConnect";
import AppFaq from "../Sections/AppLanding/AppFaq/AppFaq";
import FooterSix from "../Sections/Footer/FooterSix";
import Layout from "../Layout";
import Header from "../Sections/Header/Header";

const AppLanding = () => {
  return (
    <Layout pageTitle={"QuickLocum - App Landing"}>
      <div className="v7body-section">
        <Header variant={"app"} />
        <AppLandingBanner />
        <AppFeatures />
        <ConvertVisitors />
        <AppWhyChoose />
        <AppTestimonial />
        <AppBenefits />
        <StayConnect />
        <AppFaq />
      </div>
      <FooterSix />
    </Layout>
  );
};

export default AppLanding;
