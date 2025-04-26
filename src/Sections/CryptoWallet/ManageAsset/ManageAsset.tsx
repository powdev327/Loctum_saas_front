import ManageAssetStyle from "./ManageAsset.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

import manageAssetImg from "../../../assets/images/crypto/manage-asset-img.png";
import arrowRightIcon from "../../../assets/images/crypto/arrow-right2.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const ManageAsset = () => {
  return (
    <ManageAssetStyle className="manage-asset-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ScrollAnimate delay={200}>
              <div className="manage-asset-left">
                <img src={manageAssetImg} alt="img" />
              </div>
            </ScrollAnimate>
          </div>
          <div className="col-md-6">
            <div className="manage-asset-right">
              <ScrollAnimate delay={250}>
                <SectionTitle
                  title="Build your crypto Portfolio"
                  subtitle="Manage Asset"
                  titleMaxW="400px"
                  titleMargin="0"
                  parentClass="crypto md-mb-0"
                />
              </ScrollAnimate>
              <ScrollAnimate delay={300}>
                <p className="mt-4 md-mt-0">
                  We use as filler text for layouts, non-readability is of great
                  importancebut because those who do not know how to pursue
                  pleasure rationally encounter consequences that are extremely
                  painful. Nor again is there anyone who loves or pursues or
                  desires to obtain. Nor again is there anyone who loves or
                  pursues or desires to obtain.
                </p>
                <a href="#">
                  Explore Crypto
                  <img src={arrowRightIcon} alt="icon" />
                </a>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </ManageAssetStyle>
  );
};

export default ManageAsset;
