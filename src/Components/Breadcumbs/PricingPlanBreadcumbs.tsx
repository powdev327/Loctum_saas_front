import BreadcumbsStyle from "./Breadcumbs.style";

import ShapeImg1 from "../../assets/images/shape/breadcrumb-shape1.svg";
import ShapeImg2 from "../../assets/images/shape/breadcrumb-shape2.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PricingPlanBreadcumbs = () => {
  const { t } = useTranslation();
  
  return (
    <BreadcumbsStyle className="breadcrumb-section pricing-plan-breadcrumb-section">
      <div className="bg-shape">
        <div className="shape-img img-1">
          <img src={ShapeImg1} alt="shape" />
        </div>
        <div className="shape-img img-2">
          <img src={ShapeImg2} alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="breadcrumb-content">
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb breadcrumb-list">
                  <li className="breadcrumb-item">
                    <NavLink to="/">{t('header.home')}</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {t('pages.pricingPlans')}
                  </li>
                </ul>
              </nav>
              <div className="breadcrumb-sec">
                <h1 className="breadcrumb-title">{t('pages.pricingPlans')}</h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="pricing-plan-breadcrumb-right">
              <div className="best-pricing-selector">
                <form action="/" method="post">
                  <button type="button" className="best-pricing-monthly-btn">
                    {t('pricing.monthly')}
                  </button>
                  <input
                    type="checkbox"
                    name="best-pricing-selector"
                    id="best-pricing-selector"
                  />
                  <button type="button" className="best-pricing-yearly-btn">
                    {t('pricing.yearly')} <span>({t('pricing.discount')})</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BreadcumbsStyle>
  );
};

export default PricingPlanBreadcumbs;
