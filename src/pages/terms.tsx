import Layout from "../Layout";
import FooterTwo from "../Sections/Footer/FooterTwo";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import TermsSection from "../Sections/TermsAndPrivacy/Terms";
import Header from "../Sections/Header/Header";

const Terms = () => {
  return (
    <Layout pageTitle="QuickLocum - Terms">
      <Header variant={"main-header"} />
      <TermsSection />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default Terms;
