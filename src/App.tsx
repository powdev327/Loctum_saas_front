import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CustomerService from "./pages/customer-service";
import TeamCollaboration from "./pages/team-collaboration";
import SassLanding from "./pages/sass-landing";
import Corporate from "./pages/corporate";
import AppLanding from "./pages/app-landing";
import CryptoWalletOne from "./pages/crypto-wallet-one";
import CryptoWalletTwo from "./pages/crypto-wallet-two";
import CryptoToken from "./pages/crypto-token";
import Newsletter from "./pages/newsletter";
import SassLandingTwo from "./pages/sass-landing-two";
import DefiLanding from "./pages/defi-landing";
import Chatbot from "./pages/chatbot";
import Business from "./pages/business";
import Finance from "./pages/finance";
import Accounting from "./pages/accounting";
import Portfolio from "./pages/portfolio";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgot-password";
import ResetPassword from "./pages/reset-password";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy-policy";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-details";
import AboutUs from "./pages/about-us";
import OurServices from "./pages/our-services";
import ContactUs from "./pages/ContactUs";
import PricingPlan from "./pages/pricing-plan";
import Error from "./pages/Error";
import ScrollToTop from "./ScrollToTop";
import AppLayout from "./layout/AppLayout";
import Ecommerce from "./pages/Dashboard/Ecommerce";
import Analytics from "./pages/Dashboard/Analytics.tsx";
import Marketing from "./pages/Dashboard/Marketing";
import Crm from "./pages/Dashboard/Crm.tsx";
import Stocks from "./pages/Dashboard/Stocks.tsx";
import Saas from "./pages/Dashboard/Saas.tsx";
import UserProfiles from "./pages/UserProfiles.tsx";
import Carousel from "./pages/UiElements/Carousel";
import Maintenance from "./pages/OtherPage/Maintenance";
import FiveZeroZero from "./pages/OtherPage/FiveZeroZero";
import FiveZeroThree from "./pages/OtherPage/FiveZeroThree";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Pagination from "./pages/UiElements/Pagination";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import ButtonsGroup from "./pages/UiElements/ButtonsGroup";
import Notifications from "./pages/UiElements/Notifications";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import PieChart from "./pages/Charts/PieChart";
import Invoices from "./pages/Invoices";
import ComingSoon from "./pages/OtherPage/ComingSoon";
import FileManager from "./pages/FileManager";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import DataTables from "./pages/Tables/DataTables";
import PricingTables from "./pages/PricingTables";
import Faqs from "./pages/Faqs";
import Chats from "./pages/Chat/Chats";
import FormElements from "./pages/Forms/FormElements";
import FormLayout from "./pages/Forms/FormLayout";
import Blank from "./pages/Blank";
import EmailInbox from "./pages/Email/EmailInbox";
import EmailDetails from "./pages/Email/EmailDetails";
import TaskKanban from "./pages/Task/TaskKanban";
import BreadCrumb from "./pages/UiElements/BreadCrumb";
import Cards from "./pages/UiElements/Cards";
import Dropdowns from "./pages/UiElements/Dropdowns";
import Links from "./pages/UiElements/Links";
import Lists from "./pages/UiElements/Lists";
import Popovers from "./pages/UiElements/Popovers";
import Progressbar from "./pages/UiElements/Progressbar";
import Ribbons from "./pages/UiElements/Ribbons";
import Spinners from "./pages/UiElements/Spinners";
import Tabs from "./pages/UiElements/Tabs";
import Tooltips from "./pages/UiElements/Tooltips";
import Modals from "./pages/UiElements/Modals";
import TaskList from "./pages/Task/TaskList";
import {ProtectedRoute} from "./helpers/ProtectedRouter.tsx";

const App = () => {
  return (
      <>
        <ScrollToTop />
        <Routes>
          <Route element={<ProtectedRoute role="client"><AppLayout /></ProtectedRoute>}>
            <Route path="/dashboard" element={<Ecommerce />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/stocks" element={<Stocks />} />
            <Route path="/saas" element={<Saas />} />

            {/* Other Pages */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/invoice" element={<Invoices />} />
            <Route path="/faq" element={<Faqs />} />
            <Route path="/pricing-tables" element={<PricingTables />} />
            <Route path="/blank" element={<Blank />} />

            {/* Forms */}
            <Route path="/form-elements" element={<FormElements />} />
            <Route path="/form-layout" element={<FormLayout />} />

            {/* Applications */}
            <Route path="/chat" element={<Chats />} />
            <Route path="/task-list" element={<TaskList />} />
            <Route path="/task-kanban" element={<TaskKanban />} />
            <Route path="/file-manager" element={<FileManager />} />

            {/* Email */}
            <Route path="/inbox" element={<EmailInbox />} />
            <Route path="/inbox-details" element={<EmailDetails />} />

            {/* Tables */}
            <Route path="/basic-tables" element={<BasicTables />} />
            <Route path="/data-tables" element={<DataTables />} />

            {/* UI Elements */}
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/avatars" element={<Avatars />} />
            <Route path="/badge" element={<Badges />} />
            <Route path="/breadcrumb" element={<BreadCrumb />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/buttons-group" element={<ButtonsGroup />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/dropdowns" element={<Dropdowns />} />
            <Route path="/images" element={<Images />} />
            <Route path="/links" element={<Links />} />
            <Route path="/list" element={<Lists />} />
            <Route path="/modals" element={<Modals />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/pagination" element={<Pagination />} />
            <Route path="/popovers" element={<Popovers />} />
            <Route path="/progress-bar" element={<Progressbar />} />
            <Route path="/ribbons" element={<Ribbons />} />
            <Route path="/spinners" element={<Spinners />} />
            <Route path="/tabs" element={<Tabs />} />
            <Route path="/tooltips" element={<Tooltips />} />
            <Route path="/videos" element={<Videos />} />

            {/* Charts */}
            <Route path="/line-chart" element={<LineChart />} />
            <Route path="/bar-chart" element={<BarChart />} />
            <Route path="/pie-chart" element={<PieChart />} />
          </Route>


          <Route path="/" element={<Home />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="/team-collaboration" element={<TeamCollaboration />} />
          <Route path="/sass-landing" element={<SassLanding />} />
          <Route path="/sass-landing-two" element={<SassLandingTwo />} />
          <Route path="/app-landing" element={<AppLanding />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/crypto-wallet-one" element={<CryptoWalletOne />} />
          <Route path="/crypto-wallet-two" element={<CryptoWalletTwo />} />
          <Route path="/crypto-token" element={<CryptoToken />} />
          <Route path="/defi-landing" element={<DefiLanding />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/business" element={<Business />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/accounting" element={<Accounting />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/pricing-plan" element={<PricingPlan />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </>
  );
};

export default App;