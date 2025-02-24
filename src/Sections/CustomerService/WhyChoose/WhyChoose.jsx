import WhyChoseStyleWrapper from "./WhyChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import chooseUsImg from "../../../assets/images/customer-service/choose-us-img.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const WhyChoose = () => {
  return (
    <WhyChoseStyleWrapper className="choose-us-section md-pb-50">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle 
            title="Get amazing benefits" 
            subtitle="Why Choose us"
            alignment="center"
          />
        </ScrollAnimate>
        <div className="choose-us-content">
          <div className="choose-us-text choose-us-text-left">
            <div className="contents-text text-left">
              <ScrollAnimate delay={200}>
                <h4>One Click Meetings</h4>
                <p>
                  There are many variations of passages of always available but
                  the majority human perception is tuned.
                </p>
              </ScrollAnimate>
            </div>
            <div className="contents-text text-left">
              <ScrollAnimate delay={220}>
                <h4>Business Meeting</h4>
                <p>
                  We use as filler text for layouts, non-readability is of great
                  importance: human perception is tuned to recognize
                </p>
              </ScrollAnimate>
            </div>
          </div>
          <div className="choose-us-img">
            <ScrollAnimate delay={250}>
              <span>
                <img src={chooseUsImg} alt="img" />
              </span>
            </ScrollAnimate>
          </div>
          <div className="choose-us-text choose-us-text-right">
            <div className="contents-text text-right">
              <ScrollAnimate delay={200}>
                <h4>Unlimited Screen</h4>
                <p>
                We use as filler text for layouts, non-readability is of great importancebut because those who do not know
                </p>
              </ScrollAnimate>
            </div>
            <div className="contents-text text-right">
              <ScrollAnimate delay={220}>
                <h4>File Sharing</h4>
                <p>
                Hou to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there
                </p>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </WhyChoseStyleWrapper>
  );
};

export default WhyChoose;
