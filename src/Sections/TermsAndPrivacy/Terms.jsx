import TermsAndPrivacy from "./TermsAndPrivacy";
import Data from "../../assets/data/terms";
import ScrollAnimate from "../../Components/ScrollAnimate";

const Terms = () => {
    return (
        <TermsAndPrivacy title="Terms of Service" data={Data}>
            <ScrollAnimate delay={200}>
                <p>
                    Bienvenue sur <strong>QuickLocum</strong>. En accédant à notre plateforme ou en l'utilisant, vous acceptez de vous conformer aux présentes Conditions d’Utilisation. Ces conditions s'appliquent à tous les utilisateurs, visiteurs et autres personnes qui accèdent au service ou l’utilisent.
                </p>
            </ScrollAnimate>

            <ScrollAnimate delay={250}>
                <p>
                    Si vous n'acceptez pas une partie de ces conditions, vous ne pouvez pas utiliser nos services. Veuillez les lire attentivement avant de continuer. Certaines fonctionnalités peuvent nécessiter un abonnement payant, facturé à l’avance sur une base récurrente.
                </p>
            </ScrollAnimate>

        </TermsAndPrivacy>
    );
};

export default Terms;
