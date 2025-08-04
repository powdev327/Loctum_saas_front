import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import ServiceList from "../Sections/OurServices/ServiceList/ServiceList";
import OurSkil from "../Sections/OurServices/OurSkil/OurSkil";
import CoreFeature from "../Sections/OurServices/CoreFeature/CoreFeature";
import { useTranslation } from "react-i18next";

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <Layout pageTitle="QuickLocum - Our Services">
      <Header variant="main-header" />
      <Breadcumbs title={t('pages.ourServices')} />
      <ServiceList />
      <OurSkil />
      <CoreFeature />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default OurServices;
