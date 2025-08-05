import TermsAndPrivacy from "./TermsAndPrivacy";
import Data from "../../assets/data/privacyPolicy-multilingual";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const privacyData = Data[currentLanguage] || Data.en;
  
  return <TermsAndPrivacy title={t('pages.privacyPolicy.title')} data={privacyData} />;
};

export default PrivacyPolicy;
