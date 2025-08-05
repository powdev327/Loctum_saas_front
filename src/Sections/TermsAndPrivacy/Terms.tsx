import TermsAndPrivacy from "./TermsAndPrivacy";
import Data from "../../assets/data/terms-multilingual";
import ScrollAnimate from "../../Components/ScrollAnimate";
import { useTranslation } from "react-i18next";

const Terms = () => {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'en';
    const termsData = Data[currentLanguage] || Data.en;

    return (
        <TermsAndPrivacy title={t('pages.terms.title')} data={termsData}>
            <ScrollAnimate delay={200}>
                <p>
                    {t('pages.terms.welcome')} <strong>QuickLocum</strong>. {t('pages.terms.welcomeDescription')}
                </p>
            </ScrollAnimate>

            <ScrollAnimate delay={250}>
                <p>
                    {t('pages.terms.agreement')}
                </p>
            </ScrollAnimate>

        </TermsAndPrivacy>
    );
};

export default Terms;