import AccStartFreeStyle from "./AccStartFree.style";
import testimonialImg from "../../../assets/images/accounting/footer-testimonial-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AccStartFree = () => {
  return (
    <AccStartFreeStyle className="footer-testimonial-section v8">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <ScrollAnimate delay={200}>
            <div className="footer-testimonial-left v8">
              <h4>
                I must explain to you how all this mistaken. Tdea of denouncing
                pleasure and praising
              </h4>
              <form>
                <input type="email" placeholder="Email address" />
                <button>Start for free</button>
              </form>
              <ul className="check-list">
                <li>
                  <span className="iconify" data-icon="bi:check-lg" />
                  Free 14-day trial
                </li>
                <li>
                  <span className="iconify" data-icon="bi:check-lg" />
                  No credit card required
                </li>
              </ul>
            </div>
            </ScrollAnimate>
          </div>
          <div className="col-lg-6 col-md-5 position-relative">
            <div className="footer-testimonial-right">
              <div className="footer-testimonial-img">
                <ScrollAnimate delay={250}>
                <img src={testimonialImg} alt="img" />
                </ScrollAnimate>
              </div>
              <div className="footer-testimonial-right-text">
                <h5>Robert Carlo</h5>
                <p>Marketing Expert, Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AccStartFreeStyle>
  );
};

export default AccStartFree;
