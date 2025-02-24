import Layout from "../Layout";
import Header from "../Sections/Header/Header";
import ChatbotBanner from "../Sections/Banner/ChatbotBanner/ChatbotBanner";
import ConvertVisitors from "../Sections/Chatbot/ConvertVisitors/ConvertVisitors";
import ChatbotChoose from "../Sections/Chatbot/ChatbotChoose/ChatbotChoose";
import ChatbotCustomersSuport from "../Sections/Chatbot/ChatbotCustomersSuport/ChatbotCustomersSuport";
import Integration from "../Sections/Integration/Integration";
import ChatbotPricing from "../Sections/Chatbot/ChatbotPricing/ChatbotPricing";
import ChatbotTestimonials from "../Sections/Chatbot/ChatbotTestimonials/ChatbotTestimonials";
import Badge from "../Components/Badge/Badge";
import ChatbotFooter from "../Sections/Footer/ChatbotFooter";

const Chatbot = () => {
  return (
    <Layout pageTitle={"QuickLocum - Chatbot"}>
      <Header variant={"chatbot"} />
      <ChatbotBanner />
      <ConvertVisitors />
      <ChatbotChoose />
      <ChatbotCustomersSuport />
      <Integration />
      <ChatbotPricing />
      <ChatbotTestimonials />
      <ChatbotFooter />
    </Layout>
  );
};

export default Chatbot;
