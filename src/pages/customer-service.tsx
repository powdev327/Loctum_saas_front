import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import CustomerServiceBanner from "../Sections/Banner/CustomerServiceBanner/CustomerServiceBanner";
import BrandSlider from "./../Components/BrandSlider/BrandSlider";
import BusinessTolls from "../Sections/CustomerService/BusinessTools/BusinessTools";
import CustomerFeatures from "../Sections/CustomerService/CustomerFeatures/CustomerFeatures";
import ParallaxComponent from "../Components/Peralax/ParallaxComponent";
import WhyChoose from "../Sections/CustomerService/WhyChoose/WhyChoose";
import CustomerComparePrice from "../Sections/CustomerService/CustomerComparePrice/CustomerComparePrice";
import Integration from "../Components/Integration/Integration";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";

const CustomerService = () => {
  return (
    <Layout pageTitle="QuickLocum - Customer Service">
      <Header variant="v2" />
      <CustomerServiceBanner />
      <BrandSlider
        titleClass={"brands-section-title brands-section-title-index2"}
      />
      <CustomerFeatures />
      <BusinessTolls />
      <ParallaxComponent />
      <WhyChoose />
      <CustomerComparePrice />
      <Integration />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default CustomerService;
