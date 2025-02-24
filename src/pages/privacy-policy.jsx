import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import PrivacyPolicySection from "../Sections/TermsAndPrivacy/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <Layout pageTitle="QuickLocum - Privacy Policy">
      <Header variant={"main-header"} />
      <PrivacyPolicySection />
      <StartBuildingComponent />
      <FooterTwo />
    </Layout>
  );
};

export default PrivacyPolicy;
