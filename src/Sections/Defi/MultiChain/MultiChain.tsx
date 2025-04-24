import MultiChainStyle from "./MultiChain.style";
import {
  chainData,
  chainData2,
  chainData3,
  chainData4,
} from "../../../assets/data/DefiData/MultiChainData";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const MultiChain = () => {
  return (
    <MultiChainStyle className="multi-chain-section">
      <ScrollAnimate>
        <p>Supported Multi-Chain & Tokens</p>
        <div className="multi-chain-card">
          <div className="multi-chain-scroller-wrapper multi-chain-scroller-wrapper1">
            <div className="multi-chain-list multi-chain-list1 multi-chain-scroller multi-chain-scroller1">
              <ul className="multi-chain-slid-content">
                {chainData.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
              <ul className="multi-chain-slid-content">
                {chainData.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="multi-chain-scroller-wrapper multi-chain-scroller-wrapper2">
            <div className="multi-chain-list multi-chain-list2 multi-chain-scroller multi-chain-scroller2">
              <ul className="multi-chain-slid-content">
                {chainData2.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
              <ul className="multi-chain-slid-content">
                {chainData2.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="multi-chain-scroller-wrapper multi-chain-scroller-wrapper3">
            <div className="multi-chain-list multi-chain-list3 multi-chain-scroller multi-chain-scroller3">
              <ul className="multi-chain-slid-content">
                {chainData3.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
              <ul className="multi-chain-slid-content">
                {chainData3.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="multi-chain-scroller-wrapper multi-chain-scroller-wrapper4">
            <div className="multi-chain-list multi-chain-list4 multi-chain-scroller multi-chain-scroller4">
              <ul className="multi-chain-slid-content">
                {chainData4.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
              <ul className="multi-chain-slid-content">
                {chainData4.map((chain) => (
                  <li key={chain.id} className="multi-chain-slid-inner">
                    <div className="coin-img">
                      <img src={chain.imgSrc} alt="icon" />
                    </div>
                    <span>{chain.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </MultiChainStyle>
  );
};

export default MultiChain;
