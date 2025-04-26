import { useState } from "react";
import CustomerComparePriceStyle from "./CustomerComparePrice.style";
import TitleWithBadge from "./../../../Components/Title/TitleWithBadge";
import {
  comparePriceListData,
  compareListData,
  bestPricingInfoLeftData,
} from "../../../assets/data/CustomerService/CustomerComparePrice";
import likeIcon from "../../../assets/images/icons/like_icon.svg";
import starIcon from "../../../assets/images/icons/star_icon.svg";
import emojiIcon from "../../../assets/images/icons/emoji_icon.svg";
import dislikeIcon from "../../../assets/images/icons/dis_like_icon.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const CustomerComparePrice = () => {
  const [selectedOption, setSelectedOption] = useState("professional");
  const [selectedPrice, setSelectedPrice] = useState(
    compareListData[selectedOption].price
  );

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    setSelectedPrice(compareListData[selectedOption].price);
  };

  return (
    <CustomerComparePriceStyle className="compare-price-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <TitleWithBadge
          subTitle="Compare Price"
          title="Giving you good value "
          title2="with "
          badge="best service"
          parentClass="section-title text-center"
        />
        </ScrollAnimate>
        <ScrollAnimate delay={225}>
        <div className="compare-price-content">
          <div className="compare-price-icons1">
            <img src={likeIcon} alt="img" />
          </div>
          <div className="compare-price-icons2">
            <img src={starIcon} alt="img" />
          </div>
          <div className="compare-price-icons3">
            <img src={emojiIcon} alt="img" />
          </div>
          <div className="compare-price-icons4">
            <img src={dislikeIcon} alt="img" />
          </div>
          <div className="compare-price-card">
            <div className="compare-price-dropdown">
              <form action="/" method="post">
                <select
                  name="select-compare-price"
                  id="select-compare-price"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="professional">Professional</option>
                  <option value="premium">Premium</option>
                  <option value="basic">Basic</option>
                </select>
              </form>
            </div>
            <h2 className="compare-price-title">
              <sup>$</sup>
              <strong>{selectedPrice}</strong>Per Year{" "}
              <span>(For 15 User)</span>
            </h2>
            <div className="compare-list">
              <ul>
                {compareListData[selectedOption].features.map(
                  (feature, index) => (
                    <li key={index}>{feature}</li>
                  )
                )}
              </ul>
            </div>
            <button className="bg-blue-btn">
              <span className="btn-inner">
                <span className="btn-normal-text">Start for Free</span>
                <span className="btn-hover-text">Start for Free</span>
              </span>
            </button>
          </div>
          <div className="vs">
            <h6>
              <span>vs</span>
            </h6>
          </div>
          <div className="compare-price-card pt-0 pb-0">
            <div className="compare-price-list">
              <ul>
                {comparePriceListData.map((item, index) => (
                  <li key={index}>
                    <span>
                      <img src={item.logo} alt="icon" />
                    </span>
                    <strong>{item.price}</strong> /Year for {item.user}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </ScrollAnimate>
        <ScrollAnimate delay={250}>
        <div className="row">
          <div className="col-md-12">
            <div className="best-pricing-info">
              <div className="best-pricing-info-left">
                <ul className="list">
                  {bestPricingInfoLeftData.map((item, index) => (
                    <li key={index}>
                      <div className="list-item">
                        <span className="iconify" data-icon={item.icon} />
                        <p>{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="best-pricing-info-right">
                <p>Want to see full pricing?</p>
                <a href="#" className="compare-plans-btn">
                  <span>Compare Plans</span>
                  <span className="icon">
                    <span
                      className="iconify"
                      data-icon="akar-icons:chevron-right"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </CustomerComparePriceStyle>
  );
};

export default CustomerComparePrice;
