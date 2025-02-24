import { useEffect, useState } from "react";
import ChatbotCustomersSuportStyle from "./ChatbotCustomersSuport.style";
import { suportCardData } from "../../../assets/data/ChatbotData/ChatbotCustomersSuportData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ChatbotCustomersSuport = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cardImg = document.querySelector(".card-img");
      const cardImg2 = document.querySelector(".card-img2");

      const y = window.scrollY;
      let x = cardImg.offsetTop;
      x = x + 2200;

      let animationValue = (y - x) / 2;

      const animationStop = 100;

      if (animationValue < 0) {
        animationValue = 0;
      }

      if (animationValue > animationStop) {
        animationValue = animationStop;
      }

      cardImg.style.transform = `translateY(${animationValue}px)`;
      cardImg2.style.transform = `translateY(${animationValue}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ChatbotCustomersSuportStyle className="chatbot-customers-suport-sectoin z-index-3">
      <div className="container">
        <div className="row">
          {suportCardData.map((card, index) => (
            <div className={`col-md-6`} key={index}>
              <ScrollAnimate delay={card.delay}>
              <div className={`chatbot-customers-suport-card ${card.cardClassName}`}>
                <div className="card-title">{card.title}</div>
                <h3 className="card-subtitle text-white">{card.subtitle}</h3>
                <p className="card-pragraph">{card.paragraph}</p>
                <ul>
                  {card.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div
                  className={`card-img card-img${
                    index + 1
                  } chatbot-customer-suport-img`}
                >
                  <img src={card.imgUrl} alt="img" />
                </div>
              </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </ChatbotCustomersSuportStyle>
  );
};

export default ChatbotCustomersSuport;
