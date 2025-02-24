import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import BusinessBanner from "../Sections/Banner/BusinessBanner/BusinessBanner";
import BusinessHowWork from "../Sections/Business/BusinessHowWork/BusinessHowWork";
import BusinessChoose from "../Sections/Business/BusinessChoose/BusinessChoose";
import BusinessRating from "../Sections/Business/BusinessRating/BusinessRating";
import BusinessTestimonials from "../Sections/Business/BusinessTestimonials/BusinessTestimonials";
import BusinessFaq from "../Sections/Business/BusinessFaq/BusinessFaq";
import StartBuilding from "../Sections/Business/StartBuilding/StartBuilding";
import BusinessFooter from "../Sections/Footer/BusinessFooter";

const Business = () => {
  return (
    <Layout pageTitle="QuickLocum - Business">
      <Header variant="v4" />
      <BusinessBanner />
      <BusinessHowWork />
      <BusinessChoose />
      <BusinessRating />
      <BusinessTestimonials />
      <BusinessFaq />
      <StartBuilding />
      <BusinessFooter />
    </Layout>
  );
};

export default Business;
