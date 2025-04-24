import { useEffect } from "react";
import DefiGetUpdatesStyle from "./DefiGetUpdates.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { updateData } from "../../../assets/data/DefiData/GetUpdateData";

import DotedLineImg from "../../../assets/images/defi/dotted_line.svg";
import FavImg from "../../../assets/images/logo/defi-fev-icon.svg";
import SmsTrakingImg from "../../../assets/images/icons/sms-tracking-green.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const DefiGetUpdates = () => {
  const handleMouseEnter = (event) => {
    const item = event.currentTarget;
    const roundItem = item.querySelector(".round-shape");

    item.classList.add("animate");

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    if (buttonY < 105) {
      roundItem.style.top = 0 + "px";
    } else if (buttonY > 30) {
      roundItem.style.top = 210 + "px";
    }

    roundItem.style.left = buttonX + "px";
    roundItem.style.width = "1px";
    roundItem.style.height = "1px";
  };

  const handleMouseLeave = (event) => {
    const item = event.currentTarget;
    const roundItem = item.querySelector(".round-shape");

    item.classList.remove("animate");

    let buttonX = event.offsetX;
    let buttonY = event.offsetY;

    if (buttonY < 105) {
      roundItem.style.top = 0 + "px";
    } else if (buttonY > 30) {
      roundItem.style.top = 210 + "px";
    }
    roundItem.style.left = buttonX + "px";
  };

  useEffect(() => {
    const btnHover = document.querySelectorAll(".btn-hov-effect");

    btnHover.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });
    
    return () => {
      btnHover.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <DefiGetUpdatesStyle className="defi-get-updates-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <div className="defi-get-updates-top">
          <img src={DotedLineImg} alt="img" className="dotted-line" />
          <a href="#" className="mb-5">
            <img src={FavImg} alt="img" />
          </a>
          <SectionTitle
            title="Stay connected Get Updates"
            alignment="center"
            titleMaxW="520px"
            titleMargin="auto"
            parentClass="defi"
          />
        </div>
        <form className="defi-get-updates-form">
          <input type="text" placeholder="Email address" />
          <button type="submit">
            <img src={SmsTrakingImg} alt="icon" />
          </button>
        </form>
        </ScrollAnimate>
        <div className="defi-get-update-content">
          <div className="row">
            {updateData.map((update, index) => (
              <div key={index} className="col-lg-3 col-sm-6">
                <ScrollAnimate delay={300}>
                <a href="#">
                  <div className="defi-get-update-card btn-hov-effect">
                    <h5 className="dm-sans">
                      <span>
                        <img src={update.iconSrc} alt="icon" />
                      </span>
                      {update.title}
                    </h5>
                    <p>{update.description}</p>
                    <span className="round-shape" />
                  </div>
                </a>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefiGetUpdatesStyle>
  );
};

export default DefiGetUpdates;
