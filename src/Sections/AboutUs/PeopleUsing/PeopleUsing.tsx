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
                    QuickLocum Inc. est une plateforme digitale innovante dédiée à la mise en relation des professionnels de santé avec des établissements de santé, agences de recrutement et autres organisations ayant des besoins en placement, remplacement ou missions ponctuelles.
                  </p>
                  <p>
                    Contrairement aux agences de placement traditionnelles, QuickLocum offre une solution technologique moderne pour faciliter et optimiser les processus de recrutement dans les secteurs des soins dentaires, pharmaceutiques et infirmiers
                  </p>
                  {/*<a href="#" className="text-link">*/}
                  {/*  <span>View Case Studies</span>*/}
                  {/*  <GoArrowRight />*/}
                  {/*</a>*/}
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
