import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CorporateBanner from "../Sections/Banner/CorporateBanner/CorporateBanner";
import AboutCompany from "./../Sections/Corporate/AboutCompany/AboutCompany";
import CorporateValues from "../Sections/Corporate/CorporateValues/CorporateValues";
import CorporateHowWork from "../Sections/Corporate/CorporateHowWork/CorporateHowWork";
import CorporateBrandSlider from "../Sections/Corporate/CorporateBrandSlider/CorporateBrandSlider";
import Consultation from "../Sections/Corporate/Consultation/Consultation";
import CorporateTestimonials from "../Sections/Corporate/CorporateTestiminials/CorporateTestiminials";
import CorporateFooterTop from "../Sections/Corporate/CorporateFooterTop/CorporateFooterTop";
import FooterSeven from "../Sections/Footer/FooterSeven";
import BestService from "../Sections/Corporate/BestService/BestService";

const Corporate = () => {
  return (
    <Layout pageTitle={"QuickLocum - Corporate"} scrollVariant={"corporate"}>
      <Header variant={"corporate"} />
      <CorporateBanner />
      <BestService />
      <AboutCompany />
      <CorporateHowWork />
      <CorporateValues />
      <CorporateTestimonials />
      <CorporateBrandSlider />
      <Consultation />
      <CorporateFooterTop />
      <FooterSeven />
    </Layout>
  );
};

export default Corporate;
