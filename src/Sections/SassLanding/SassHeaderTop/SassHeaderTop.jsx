import SassTimer from "./SassTimer";
import SassHeaderTopStyle from "./SassHeaderTop.style";

import topArrowRightIcon from "../../../assets/images/icons/top-arrow-right.svg";

const SassHeaderTop = () => {
  return (
    <SassHeaderTopStyle className="header-top">
      <div className="container">
        <div className="header-top-content">
          <div className="header-top-left">
            <p>Limited time Special Offer 70% OFF</p>
          </div>
          <div className="header-top-timer">
            <SassTimer />
          </div>
          <a href="#" className="header-top-right">
            <p>Get the amazing offer</p>
            <img src={topArrowRightIcon} alt="icon" />
          </a>
        </div>
      </div>
    </SassHeaderTopStyle>
  );
};

export default SassHeaderTop;
