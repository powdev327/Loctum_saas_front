import FinanceCardsStyle from "./FinanceCards.style";
import { cardsData } from "../../../assets/data/FinanceData/CardData";

import featuresArrowRightIcon from "../../../assets/images/icons/features-arrow-right.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const FinanceCards = () => {
  return (
    <FinanceCardsStyle className="index6-card-section">
      <div className="container">
        <div className="row">
          {cardsData.map((card, index) => (
            <div key={index} className="col-lg-4 col-sm-6">
              <ScrollAnimate delay={card.delay}>
                <div className="index6-card">
                  <div className="index6-card-icon">
                    <img src={card.iconSrc} alt="icon" />
                  </div>
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                  <a href="#">
                    <span className="btn-text">Learn more</span>
                    <div className="link-btn">
                      <div className="icon">
                        <img src={featuresArrowRightIcon} alt="icon" />
                      </div>
                    </div>
                  </a>
                </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </FinanceCardsStyle>
  );
};

export default FinanceCards;
