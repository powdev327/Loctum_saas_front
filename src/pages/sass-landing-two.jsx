import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import SassTwoBanner from "../Sections/Banner/SassTwoBanner/SassTwoBanner";
import TopNotch from "../Sections/SassLandingTwo/TopNotch/TopNotch";
import SassTwoChoos from "../Sections/SassLandingTwo/SassTwoChoose/SassTwoChoos";
import BrandSlider from "./../Components/BrandSlider/BrandSlider";
import SassVideo from "../Sections/SassLandingTwo/SassVideo/SassVideo";
import Seamless from "../Sections/SassLandingTwo/Seamless/Seamless";
import SassCommunity from "../Sections/SassLandingTwo/SassCommunity/SassCommunity";
import SassTwoTestimonials from "../Sections/SassLandingTwo/SassTwoTestimonials/SassTwoTestimonials";
import Badge from "../Components/Badge/Badge";
import SassTwoFooter from "../Sections/Footer/SassTwoFooter";

const SassLandingTwo = () => {
  return (
    <Layout pageTitle={"QuickLocum - Sass Landing Two"} scrollVariant={"sass"}>
      <div className="sass-landing-body body-container">
        <Header variant={"sass"} />
        <SassTwoBanner />
        <TopNotch />
        <SassTwoChoos />
        <BrandSlider
          sliderClass="sass"
          titleClass="brands-section-title brands-section-title-index2"
        />
        <SassVideo />
        <Seamless />
        <SassCommunity />
        <SassTwoTestimonials />
        <Badge parentClass="chatbot-testmonial-badge pt-0" />
        <SassTwoFooter />
      </div>
    </Layout>
  );
};

export default SassLandingTwo;
