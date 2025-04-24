import Countup from "react-countup-animate";

const DefiStatistic = () => {
  return (
    <div className="defi-statistic-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <div className="defi-statistic-card">
              <h2 className="number-diy">
                <Countup
                  number={289}
                  duration={1}
                  startDelay="ease-out"
                  endDelay="ease-in"
                  reverse={true}
                  className="data"
                />
                <span className="counter-text">M+</span>
              </h2>
              <p>Total supply</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="defi-statistic-card">
              <h2 className="number-diy">
                <Countup
                  number={563}
                  duration={1}
                  startDelay="ease-out"
                  endDelay="ease-in"
                  reverse={true}
                  className="data"
                />
                <span className="counter-text">K+</span>
              </h2>
              <p>Total Trades</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="defi-statistic-card">
              <h2 className="number-diy">
                <Countup
                  number={2.6}
                  duration={1}
                  startDelay="ease-out"
                  endDelay="ease-in"
                  reverse={true}
                  className="data"
                />
                <span className="counter-text">t+</span>
              </h2>
              <p>Trade Volume</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="defi-statistic-card">
              <h2 className="number-diy">
                <span className="counter-text">$</span>
                <Countup
                  number={940}
                  duration={1}
                  startDelay="ease-out"
                  endDelay="ease-in"
                  reverse={true}
                  className="data"
                />
                <span className="counter-text">m+</span>
              </h2>
              <p>Market cap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefiStatistic;
