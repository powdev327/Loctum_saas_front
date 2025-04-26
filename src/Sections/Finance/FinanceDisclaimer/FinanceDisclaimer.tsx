import FinanceDisclaimerStyle from "./FinanceDisclaimer.style";

const FinanceDisclaimer = () => {
  return (
    <FinanceDisclaimerStyle className="disclaimer-section">
      <div className="container">
        <div className="disclaimer-text">
          <h6>Disclaimer:</h6>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
          <p className="mb-0">
            Making this the first true generator on the Internet. It uses a
            dictionary of over 200 Latin words, combined handful of model
            sentence structures, to generate which looks reasonable. The
            generated Lorem Ipsum is therefore always
          </p>
        </div>
      </div>
    </FinanceDisclaimerStyle>
  );
};

export default FinanceDisclaimer;
