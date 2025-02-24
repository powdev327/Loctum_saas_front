import { useEffect, useState } from "react";
import { documentData } from "../../../assets/data/CryptoTokenData/CorporateDocumentData";
import DocumentsStyle from "./Documents.style";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

import arrowDownIcon from "../../../assets/images/crypto-token/arrow-down.svg";
import ScrollAnimate from "../../../Components/ScrollAnimate";

const Documents = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <DocumentsStyle className="documents-section">
      <div className="container">
        <ScrollAnimate delay={200}>
        <div className="documents-title">
          <h2 data-splitting>Documents</h2>
        </div>
        </ScrollAnimate>
      </div>
      <ScrollAnimate delay={300}>
      <div className="documents-content">
        {documentData.map((doc, index) => (
          <div key={index} className="doc-row-section">
            <div className="container">
              <div className="documents-row">
                <a href={doc.image} download="">
                  <h3 data-splitting>{doc.title}</h3>
                  <img src={doc.image} alt="img" className="doc-img" />
                  <div className="link">
                    <div className="link-inner">
                      <span>
                        <img src={arrowDownIcon} alt="icon" />
                      </span>
                      <span>
                        <img src={arrowDownIcon} alt="icon" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      </ScrollAnimate>
    </DocumentsStyle>
  );
};

export default Documents;
