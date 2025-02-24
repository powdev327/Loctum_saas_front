import Layout from "../Layout";
import PortfolioBanner from "../Sections/Banner/PortfolioBanner/PortfolioBanner";
import PortfolioGallery from "../Sections/PortfolioGallery/PortfolioGallery";
import FooterSix from "../Sections/Footer/FooterSix";
import Header from "../Sections/Header/Header";

const Portfolio = () => {
  return (
    <Layout pageTitle={"QuickLocum - Portfolio"}>
      <div className="v7body-section">
        <Header variant={"portfolio"} />
        <PortfolioBanner />
        <PortfolioGallery />
      </div>
      <FooterSix />
    </Layout>
  );
};

export default Portfolio;
