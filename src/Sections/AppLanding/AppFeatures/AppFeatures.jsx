import AppFeaturesStyleWrapper from "./AppFeatures.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { AppFeatureData } from "../../../assets/data/app-data/AppFeatureData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AppFeatures = () => {
  return (
    <AppFeaturesStyleWrapper className="app-useful-features">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <SectionTitle
                title="Most useful features You must need"
                subtitle="Useful features"
                titleClass="text-white"
              />
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <ScrollAnimate delay={300}>
              <div className="app-useful-features-text">
                <p className="text-white pb-3">
                  We use as filler text for layouts, non-readability is of great
                  importance but because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful. Nor again is there anyone
                </p>
                <p className="text-white">
                  But those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful.
                </p>
              </div>
            </ScrollAnimate>
          </div>
        </div>
        <div className="app-useful-features-card-section">
          <div className="row">
            {AppFeatureData.map((feature) => (
              <div key={feature.id} className="col-lg-3 col-sm-6">
                <ScrollAnimate delay={feature.delay}>
                  <div className="app-useful-features-card">
                    <div className="card-content">
                      <div className="icon">
                        <img
                          src={feature.iconSrc}
                          alt={`feature-icon-${feature.id}`}
                        />
                      </div>
                      <h5 className="text-white wt-700">{feature.title}</h5>
                      <p className="text-white mb-0">{feature.description}</p>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppFeaturesStyleWrapper>
  );
};

export default AppFeatures;
