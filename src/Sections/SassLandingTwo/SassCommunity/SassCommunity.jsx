import SassCommunityStyle from "./SassCommunity.style";

import leftObj from "../../../assets/images/sass2/left_obj.png";
import rightObj from "../../../assets/images/sass2/right_obj.png";
import profileUserImg from "../../../assets/images/sass2/profile-2user.svg";
import ScrollAnimate from './../../../Components/ScrollAnimate';

const SassCommunity = () => {
  return (
    <SassCommunityStyle className="community-section">
      <img src={leftObj} alt="img" className="obj-left" />
      <img src={rightObj} alt="img" className="obj-right" />
      <div className="container">
        <ScrollAnimate delay={200}>
        <div className="community-content">
          <div className="community-img">
            <img src={profileUserImg} alt="img" />
          </div>
          <h2>
            Join our 250+ Community <br />
            Let’s started
          </h2>
          <form>
            <input type="text" placeholder="Email address" />
            <input type="submit" defaultValue="Start for free" />
          </form>
          <ul>
            <li>Free 14-day trial</li>
            <li>No credit card required</li>
          </ul>
        </div>
        </ScrollAnimate>
      </div>
    </SassCommunityStyle>
  );
};

export default SassCommunity;
