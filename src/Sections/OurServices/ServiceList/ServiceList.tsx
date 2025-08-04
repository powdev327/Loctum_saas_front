import ServiceListStyle from "./ServiceList.style";
import ScrollAnimate from "../../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const ServiceList = () => {
  const { t } = useTranslation();

  const serviceItems = [
    {
      delay: 200,
      serviceKey: 'service1'
    },
    {
      delay: 250,
      serviceKey: 'service2'
    },
    {
      delay: 300,
      serviceKey: 'service3'
    },
    {
      delay: 350,
      serviceKey: 'service4'
    }
  ];

  return (
    <ServiceListStyle className="service-section">
      <div className="container">
        <div className="row">
          {serviceItems.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-6">
              <ScrollAnimate delay={item.delay}>
              <div className={`service-content item-${index + 1}`}>
                <div className="service-content-title">
                  <h3>{t(`services.serviceList.${item.serviceKey}.title`)}</h3>
                  <h2>{t(`services.serviceList.${item.serviceKey}.subtitle1`)}</h2>
                  <h2>{t(`services.serviceList.${item.serviceKey}.subtitle2`)}</h2>
                </div>
                <ul className="service-content-list">
                  {t(`services.serviceList.${item.serviceKey}.contentList`, { returnObjects: true }).map((content, contentIndex) => (
                    <li key={contentIndex}>{content}</li>
                  ))}
                </ul>
              </div>
              </ScrollAnimate>
            </div>
          ))}
        </div>
      </div>
    </ServiceListStyle>
  );
};

export default ServiceList;
