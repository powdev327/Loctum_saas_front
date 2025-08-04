import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import BlogList from "../Sections/Blog/BlogList/BlogList";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();
  
  return (
    <Layout pageTitle="QuickLocum - Blog">
      <div className="bg-gray">
        <Header variant="main-header" />
        <Breadcumbs title={t('pages.blog')} />
        <BlogList />
        <StartBuildingComponent />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default Blog;
