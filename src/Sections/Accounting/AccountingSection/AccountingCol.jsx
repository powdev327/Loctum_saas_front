import React from 'react';
import { columnsData } from '../../../assets/data/accounting/accountingData';
import ScrollAnimate from '../../../Components/ScrollAnimate';

const AccountingCol = () => {
  return (
    <div className="index8-accounting-column-section">
      <div className="row custom-row">
        {columnsData.map((column, index) => (
          <div key={index} className="col-lg-3 col-sm-6 custom-column">
            <ScrollAnimate delay={column.delay}>
              <div className="index8-accounting-column-content">
                <div className="index8-accounting-colun-icon">
                  <img src={column.iconSrc} alt="icon" />
                </div>
                <h4>{column.title}</h4>
                <p>{column.description}</p>
              </div>
            </ScrollAnimate>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountingCol;
