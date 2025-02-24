import { useState } from "react";
import AppWhyChooseStyle from "./AppWhyChoose.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import MirroringScreenIcon from "../../../assets/images/app/mirroring-screen.svg";
import CalendarIcon from "../../../assets/images/app/calendar.svg";
import GhostIcon from "../../../assets/images/app/ghost.svg";
import FavoriteChartIcon from "../../../assets/images/app/favorite-chart.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppWhyChoose = () => {
  const [activeTitle, setActiveTitle] = useState(0);

  const titles = [
    "Grow your business with world #1 App",
    "Lorem ipsum, dolor sit amet adipisicing",
    "Lorem ipsum consectetur dolores sed",
    "Voluptatem impedit dolor incidunt?",
    "Lorem ipsum dolor sit amet.",
  ];

  const chooseCards = [
    {
      delay: 200,
      iconSrc: MirroringScreenIcon,
      title: "Fast Performance",
      description:
        "All this mistaken idea of denouncing pleasure and praising pain was",
    },
    {
      delay: 250,
      iconSrc: CalendarIcon,
      title: "Optimized Pages",
      description:
        "All this mistaken idea of denouncing pleasure and praising pain was",
    },
    {
      delay: 300,
      iconSrc: GhostIcon,
      title: "Best Customer",
      description:
        "All this mistaken idea of denouncing pleasure and praising pain was",
    },
    {
      delay: 350,
      iconSrc: FavoriteChartIcon,
      title: "Usability Testing",
      description:
        "All this mistaken idea of denouncing pleasure and praising pain was",
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveTitle(index);
  };

  const handleMouseLeave = () => {
    setActiveTitle(0);
  };

  return (
    <AppWhyChooseStyle className="app-chose-us-section">
      <div className="container">
        <ScrollAnimate delay={200}>
          <SectionTitle
            subtitle="Why Choose us"
            alignment="center"
            parentClass="mb-0"
          />
        </ScrollAnimate>

        <div className="app-chose-us-content">
          <div className="col-md-12">
            {titles.map((title, index) => (
              <h2
                key={index}
                className={`app-chose-title ${index === activeTitle ? "active" : ""
                  }`}
              >
                {title}
              </h2>
            ))}
          </div>

          <div className="row">
            {chooseCards.map((card, index) => (
              <div
                key={index}
                className={`col-lg-3 col-sm-6 app-chose-us-card app-chose-us-card${index + 1
                  }`}
                onMouseEnter={() => handleMouseEnter(index + 1)}
                onMouseLeave={handleMouseLeave}
              >
                <ScrollAnimate delay={card.delay}>
                  <div className="app-chose-card">
                    <div className="app-chose-icon">
                      <img src={card.iconSrc} alt="icon" />
                    </div>
                    <h6>{card.title}</h6>
                    <p>{card.description}</p>
                  </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppWhyChooseStyle>
  );
};

export default AppWhyChoose;
