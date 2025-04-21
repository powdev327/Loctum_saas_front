import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import SayHello from "../Sections/ContactUs/SayHello/SayHello";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import ContactLocation from "../Sections/ContactUs/ContactLocation/ContactLocation";

const ContactUs = () => {
  return (
    <Layout pageTitle="QuickLocum - Contact Us">
      <Header variant="main-header" />
      <Breadcumbs title="Contact Us" />
      <SayHello />
      <ContactLocation />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default ContactUs;
