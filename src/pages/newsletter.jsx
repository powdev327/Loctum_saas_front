import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import NewsletterBanner from "../Sections/Banner/NewsletterBanner/NewsletterBanner";
import NewsletterBrand from "../Sections/Newsletter/NewsletterBrand/NewsletterBrand";
import EmailMarketing from "./../Sections/Newsletter/EmailMarketing/EmailMarketing";
import NewsletterFeatures from "../Sections/Newsletter/NewsletterFeatures/NewsletterFeatures";
import EmailBuilder from "../Sections/Newsletter/EmailBuilder/EmailBuilder";
import DevAPI from "../Sections/Newsletter/DevAPI/DevAPI";
import FeatureTeam from "../Sections/Newsletter/FeatureTeam/FeatureTeam";
import NewsletterTemplate from "../Sections/Newsletter/NewsletterTemplate/NewsletterTemplate";
import NewsletterTestimonial from "../Sections/Newsletter/NewsletterTestimonial/NewsletterTestimonial";
import NewsletterIntegration from "../Components/Integration/NewsletterIntegration";
import NewsletterFooter from "../Sections/Footer/NewsletterFooter";

const Newsletter = () => {
  return (
    <Layout pageTitle="QuickLocum - Newsletter">
      <div className="newsletter-bg">
        <Header variant={"newsletter"} />
        <NewsletterBanner />
        <NewsletterBrand />
        <EmailMarketing />
        <NewsletterFeatures />
        <EmailBuilder />
        <DevAPI />
        <FeatureTeam />
        <NewsletterTemplate />
        <NewsletterTestimonial />
        <NewsletterIntegration />
        <NewsletterFooter />
      </div>
    </Layout>
  );
};

export default Newsletter;
