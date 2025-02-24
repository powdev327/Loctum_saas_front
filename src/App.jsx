import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
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
    </BrowserRouter>
  );
};

export default App;
