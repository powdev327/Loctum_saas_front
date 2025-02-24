import ConsultationStyleWrapper from "./Consultation.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import outgoingCallImage from "../../../assets/images/corporate/call-outgoing-big.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Consultation = () => {
  return (
    <ConsultationStyleWrapper className="consultation-section">
      <div className="container">
        <ScrollAnimate>
        <div className="consultation-card">
          <div className="row">
            <div className="col-md-6">
              <div className="consultation-left">
                <ScrollAnimate delay={200}>
                <SectionTitle
                  title="Consultation"
                  subtitle="Request A free"
                  parentClass="corporate md-mb-0"
                  subtitleClass="text-white"
                  titleClass="text-white"
                />
                </ScrollAnimate>
                <div className="consultation-img">
                  <ScrollAnimate delay={230}>
                  <img src={outgoingCallImage} alt="Outgoing Call" />
                  </ScrollAnimate>
                </div>
                <ScrollAnimate delay={250}>
                <div className="consultation-text">
                  <p className="text-white wt-700 uppercase">
                    Contact us for immediate
                  </p>
                  <h5 className="text-white wt-700">+ 22 698 698 3694</h5>
                  <h5 className="text-white wt-700 mb-0">
                    <a href="mailto:someone@example.com">info@staco.com</a>
                  </h5>
                </div>
                </ScrollAnimate>
              </div>
            </div>
            <div className="col-md-6">
              <ScrollAnimate delay={300}>
              <div className="consultation-form">
                <form>
                  <label>Your Name *</label>
                  <input type="text" placeholder="e.g.  Roe Smith" />
                  <label>Phone Number</label>
                  <input type="text" placeholder="e.g.  +55 695 6965" />
                  <label>Subject</label>
                  <div className="consultation-dropdown">
                    <select>
                      <option value={1}>What are you looking for ?</option>
                      <option value={2}>Web Design</option>
                      <option value={3}>Web Development</option>
                      <option value={4}>Mobile Application</option>
                    </select>
                  </div>
                  <button className="consultation-btn">
                    <span className="btn-inner">
                      <span className="btn-normal-text">
                        Get Start for Free
                      </span>
                      <span className="btn-hover-text">Get Start for Free</span>
                    </span>
                  </button>
                </form>
              </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </ConsultationStyleWrapper>
  );
};

export default Consultation;
