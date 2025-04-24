import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import Breadcumbs from "../Components/Breadcumbs/Breadcumbs";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import BlogList from "../Sections/Blog/BlogList/BlogList";

const Blog = () => {
  return (
    <Layout pageTitle="QuickLocum - Blog">
      <div className="bg-gray">
        <Header variant="main-header" />
        <Breadcumbs title="Latest Blogs" />
        <BlogList />
        <StartBuildingComponent />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default Blog;
