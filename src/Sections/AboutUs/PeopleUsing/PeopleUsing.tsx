import PeopleUsingStyle from "./PeopleUsing.style";
import TitleStyleWrapper from "../../../Components/Title/Title.style";
import { avatarImages } from "../../../assets/data/about-us/aboutData";
import { GoArrowRight } from "react-icons/go";
import CustomerImg from "../../../assets/images/about-us/customer-img.svg";
import PlusIcon from "../../../assets/images/icons/plus-blue.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const PeopleUsing = () => {
  const { t } = useTranslation();
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
                        {t('aboutUs.peopleUsing.title1')}
                        <span className="marketing-badge">{t('aboutUs.peopleUsing.brand')}</span> {t('aboutUs.peopleUsing.title2')}
                      </h2>
                    </div>
                  </TitleStyleWrapper>
                  <p>
                    {t('aboutUs.peopleUsing.description1')}
                  </p>
                  <p>
                    {t('aboutUs.peopleUsing.description2')}
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
