import Star1 from "../../images/shape/pricing-star1.svg";
import Star2 from "../../images/shape/pricing-star2.svg";
import Star3 from "../../images/shape/pricing-star3.svg";

export const pricingPlans = [
  {
    id: "free",
    delay: 200,
    title: "Free",
    tagDisplay: "none",
    icon: Star1,
    description: "Create your first call for free",
    actionTitle: "Start for Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "$0",
        features: [
          "Unlimited meeting",
          "Up to 100 Attendees",
          "40 minute limit",
          "3 whiteboards",
          "Group chat & file sharing",
        ],
      },
      yearly: {
        price: "$0",
        features: [
          "Unlimited meeting",
          "Up to 100 Attendees",
          "40 minute limit",
          "3 whiteboards",
          "Group chat & file sharing",
        ],
      },
    },
  },
  {
    id: "meeting",
    delay: 250,
    title: "Meeting",
    tagDisplay: "block",
    icon: Star2,
    description: "Team in a growing company",
    actionTitle: "Start for Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "$9",

        features: [
          "Unlimited meeting",
          "Up to 100 Attendees",
          "40-minute limit",
          "3 whiteboards",
          "Group chat & file sharing",
        ],
      },
      yearly: {
        price: "$108",
        features: [
          "Unlimited meeting",
          "Up to 200 Attendees",
          "No time limit",
          "5 whiteboards",
          "Advanced group chat & file sharing",
        ],
      },
    },
  },
  {
    id: "business",
    delay: 300,
    title: "Business",
    tagDisplay: "none",
    icon: Star3,
    description: "Big company choose this",
    actionTitle: "Start for Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "$25",
        features: [
          "Unlimited meeting",
          "Up to 300 Attendees",
          "60-minute limit",
          "10 whiteboards",
          "Custom branding",
        ],
      },
      yearly: {
        price: "$300",
        features: [
          "Unlimited meeting",
          "Up to 500 Attendees",
          "No time limit",
          "Unlimited whiteboards",
          "Custom branding",
        ],
      },
    },
  },
];
