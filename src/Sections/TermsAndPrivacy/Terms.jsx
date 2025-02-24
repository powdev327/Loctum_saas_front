import TermsAndPrivacy from "./TermsAndPrivacy";
import Data from "../../assets/data/terms";
import ScrollAnimate from "../../Components/ScrollAnimate";

const Terms = () => {
  return (
    <TermsAndPrivacy title="Terms of Service" data={Data}>
      <ScrollAnimate delay={200}>
      <p>
        Welcome to [Your Company] ("<b>us</b>", "<b>we</b>", or "<b>our</b>").
        These Terms of Service ("<b>Terms</b>") govern your use of our website
        (the "<b>Service</b>") and any related products or services provided by
        us. By using the Service, you agree to be bound by these Terms. Some
        parts of the Service are billed on a subscription basis ("
        <b>Subscription(s)</b>"). You will be billed in advance on a recurring
        subscription that you choose.
      </p>
      </ScrollAnimate>
      <ScrollAnimate delay={250}>
      <p>
        By accessing or using the Service you agree to be bound by these Terms.
        If you disagree with any part of the terms then you may not access the
        Service.
      </p>
      </ScrollAnimate>
    </TermsAndPrivacy>
  );
};

export default Terms;
