import AppScreenI from "../../images/app/app_screen_i.png";
import AppScreenII from "../../images/app/app_screen_ii.png";
import AppScreenIII from "../../images/app/app_screen_iii.png";
import AppScreenIV from "../../images/app/app_screen_iv.png";
import LinkBox from "../../images/app/link-box-icon.svg";
import ShareIcon from "../../images/app/share-icon.svg";

const Data = [
  {
    id: 1,
    imgSrc: AppScreenI,
    number: 'one',
    navTitle: "Multi-Connect",
    title: "Connect multiple devices",
    description:
      "We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pursue pleasure We use as filler text for layouts, non-readability is of great importance",
    buttonText: "Start Free",
    iconify: "akar-icons:arrow-right",
  },
  {
    id: 2,
    imgSrc: AppScreenII,
    number: 'two',
    navTitle: "Super Fast",
    title: "Fast and stable connection",
    description:
      "We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pursue pleasure We use as filler text for layouts, non-readability is of great importance",
    stats: [
      { percentage: "34%", label: "Faster Connection" },
      { percentage: "2.8X", label: "Stable" },
    ],
  },
  {
    id: 3,
    imgSrc: AppScreenIII,
    number: 'three',
    navTitle: "Multiple devices",
    title: "Secure and private access",
    description:
      "Non-readability is of great importance but because those who do not know how to pursue pleasure We use as filler text for layouts, non-readability who do not know how is of great importance but because those who do not know how to pursue pleasure rationally customer relationship",
    features: [
      "Engage Customers",
      "24/7 support response",
      "Workflows and productivity",
    ],
  },
  {
    id: 4,
    imgSrc: AppScreenIV,
    number: 'four',
    navTitle: "Stable Connection",
    title: "Protect Your Data from Hackers",
    description:
      "Pleasure use as filler text for layouts, non-readability who do not know how is of great importance but because those who do not know how to pursue pleasure rationally.",
    protectData: [
      { imgSrc: LinkBox, text: "Responsibility and Sustainability" },
      { imgSrc: ShareIcon, text: "Competitive Intelligence" },
    ],
  },
];

export default Data;
