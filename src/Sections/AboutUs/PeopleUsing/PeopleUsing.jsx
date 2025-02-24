import PeopleUsingStyle from "./PeopleUsing.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { avatarImages } from "../../../assets/data/about-us/aboutData";
import { GoArrowRight } from "react-icons/go";
import CustomerImg from "../../../assets/images/about-us/customer-img.svg";
import PlusIcon from "../../../assets/images/icons/plus-blue.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const PeopleUsing = () => {
  return (
    <PeopleUsingStyle>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="customer-img">
              <ScrollAnimate delay={200}><img src={CustomerImg} alt="customer-img" /></ScrollAnimate>
            </div>
          </div>
          <div className="col-lg-7">
            <ScrollAnimate delay={250}>
              <div className="customer-content">
                <ul className="users-list">
                  {avatarImages.map((avatar, index) => (
                    <li key={index}>
                      <a href="#">
                        <img src={avatar} alt={`user-img-${index}`} />
                      </a>
                    </li>
                  ))}
                  <li>
                    <button>
                      <img src={PlusIcon} alt="add-user" />
                    </button>
                  </li>
                </ul>
                <div className="customer-content-text">
                  <TitleStyleWrapper>
                    <div className="section-title">
                      <h2 className="title mb-0">
                        People using
                        <span className="marketing-badge">QuickLocum</span> with full
                        satisfaction
                      </h2>
                    </div>
                  </TitleStyleWrapper>
                  <p>
                    We use as filler text for layouts, non-readability is of great
                    importancebut because those who do not know how to pursue
                    pleasure.
                  </p>
                  <p>
                    Consequences that are extremely painful. Nor again is there
                    anyone who loves or pursues or desires to obtain. know how to
                    pursue pleasure rationally encounter consequences that are
                    extremely painful. Nor again is there anyone who loves.
                  </p>
                  <a href="#" className="text-link">
                    <span>View Case Studies</span>
                    <GoArrowRight />
                  </a>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </div>
    </PeopleUsingStyle>
  );
};

export default PeopleUsing;
