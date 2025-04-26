import AccountingSectionStyle from "./AccountingSection.style";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import AccountingCol from "./AccountingCol";
import accountingImg from "../../../assets/images/accounting/accounting-img.png";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const AccountingContent = () => {
  return (
    <AccountingSectionStyle className="index8-accounting-section">
      <div className="container">
        <AccountingCol />
        <div className="index8-accounting">
          <div className="row">
            <div className="col-md-6">
              <ScrollAnimate delay={200}>
                <div className="index8-accounting-img">
                  <img src={accountingImg} alt="img" />
                </div>
              </ScrollAnimate>
            </div>
            <div className="col-md-6">
              <ScrollAnimate delay={300}>
                <div className="index8-accounting-content">
                  <SectionTitle
                    title="Secure your invoices with signature"
                    subtitle="Accounting"
                    parentClass="v8"
                    subtitleClass="green-color"
                  />
                  <div className="index8-accounting-text">
                    <p>
                      We use as filler text for layouts, non-readability is of
                      great importancebut because those who do not know how to
                      pursue pleasure rationally encounter consequences that are
                      extremely painful.
                    </p>
                    <ul className="check-list">
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Balance Sheet
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Safe and secure
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Accounts Payable
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Get paid faster
                      </li>
                      <li>
                        <span className="iconify" data-icon="bi:check-lg" />
                        Chart of Accounts
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollAnimate>
            </div>
          </div>
        </div>
      </div>
    </AccountingSectionStyle>
  );
};

export default AccountingContent;
