import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "./../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "./../Sections/Footer/FooterTwo";
import ParallaxComponent from "../Components/Peralax/ParallaxComponent";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import PeopleUsing from "../Sections/AboutUs/PeopleUsing/PeopleUsing";
import AboutUsContent from "../Sections/AboutUs/AboutUsContent/AboutUsContent";
import Team from "../Sections/Team/Team";
import TestimonialsOne from "../Sections/Testimonials/TestimonialsOne";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle="QuickLocum - About us">
      <Header variant="main-header" />
      <Breadcumbs title={t('aboutUs.pageTitle')} />
      <PeopleUsing />
      <ParallaxComponent />
      <AboutUsContent />
      <TestimonialsOne />
      {/*<Team />*/}
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default AboutUs;
