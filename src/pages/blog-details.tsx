import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import StartBuildingComponent from "../Components/StartBuilding/StartBuildingComponent";
import FooterTwo from "../Sections/Footer/FooterTwo";
import BlogDetailsSection from "../Sections/Blog/BlogDetails/BlogDetails";

const BlogDetails = () => {
  return (
    <Layout pageTitle="QuickLocum - Blog Details">
      <div className="bg-gray">
        <Header variant="main-header" />
        <BlogDetailsSection />
        <StartBuildingComponent />
        <FooterTwo />
      </div>
    </Layout>
  );
};

export default BlogDetails;
