import React from 'react';
import MailIcon from "../../assets/images/icons/mail.svg";
import CallIcon from "../../assets/images/icons/call.svg";
import FooterContractStyle from './FooterContract.style';

const FooterContractCard = () => {
  return (
    <FooterContractStyle className="footer-contract-card">
      <ul>
        <li><img src={MailIcon} alt="mail" /><a href="mailto:support@domain.com">support@domain.com</a></li>
        <li><img src={CallIcon} alt="call" /><a href="tel:+1 014 256 1447">+1 014 256 1447</a></li>
      </ul>
    </FooterContractStyle>
  );
};

export default FooterContractCard;
