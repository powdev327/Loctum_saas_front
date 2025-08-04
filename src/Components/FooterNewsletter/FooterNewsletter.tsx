import React from 'react';
import MailIcon from "../../assets/images/icons/mail.svg";
import CallIcon from "../../assets/images/icons/call.svg";
import FooterNewsletterStyle from './FooterNewsletter.style';
import { useTranslation } from 'react-i18next';

const FooterNewsletter = () => {
  const { t } = useTranslation();
  
  return (
    <FooterNewsletterStyle className="footer-newsletter-card">
      <h5>{t('footer.newsletter.title')}</h5>
      <form>
        <input type="email" placeholder={t('footer.newsletter.placeholder')} />
        <button type='submit'>{t('footer.newsletter.subscribe')}</button>
      </form>
    </FooterNewsletterStyle>
  );
};

export default FooterNewsletter;
