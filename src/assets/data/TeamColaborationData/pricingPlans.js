import Star1 from "../../images/shape/pricing-star1.svg";
import Star2 from "../../images/shape/pricing-star2.svg";
import Star3 from "../../images/shape/pricing-star3.svg";
import Star4 from "../../images/shape/pricing-star4.svg";

export const pricingPlans = [
  {
    id: "free",
    delay: 200,
    title: "Free",
    tagDisplay: "none",
    icon: Star1,
    description: "Create your first call for free",
    actionTitle: "Start Free",
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
          "Screen Sharing",
          "Chats and channels",
          "5 GB File Sharing",
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
          "Screen Sharing",
          "Chats and channels",
          "5 GB File Sharing",
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
    actionTitle: "Start Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "$9",
        features: [
          "Unlimited meeting",
          "Up to 500 Attendees",
          "3 Hours limit",
          "10 whiteboards",
          "Group chat & file sharing",
          "Screen Sharing",
          "Chats and channels",
          "10 GB File Sharing",
        ],
      },
      yearly: {
        price: "$108",
        features: [
          "Unlimited meeting",
          "Up to 500 Attendees",
          "3 Hours limit",
          "10 whiteboards",
          "Group chat & file sharing",
          "Screen Sharing",
          "Chats and channels",
          "10 GB File Sharing",
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
    actionTitle: "Start Free",
    actionLink: "#",
    plans: {
      monthly: {
        price: "$25",
        features: [
          "Unlimited meeting",
          "Up to 1000 Attendees",
          "No limit",
          "50 whiteboards",
          "Group chat & file sharing",
          "Screen Sharing",
          "Chats and channels",
          "50 GB File Sharing",
        ],
      },
      yearly: {
        price: "$300",
        features: [
          "Unlimited meeting",
          "Up to 1000 Attendees",
          "No limit",
          "50 whiteboards",
          "Group chat & file sharing",
          "Screen Sharing",
          "Chats and channels",
          "50 GB File Sharing",
        ],
      },
    },
  },
  {
    id: "custom",
    delay: 300,
    title: "Custom",
    tagDisplay: "none",
    icon: Star4,
    description: "We are available for custom plans",
    actionTitle: "Contact us",
    actionLink: "#",
    plans: {
      monthly: {
        features: [
          "Unlimited meeting",
          "Up to 5000+ Attendees",
          "No limit",
          "100+ whiteboards",
          "Group chat & file sharing",
          "Screen Sharing",
          "Chats and channels",
          "Unlimited File Sharing",
        ],
      },
      yearly: {
        features: [
          "Unlimited meeting",
          "Up to 5000+ Attendees",
          "No limit",
          "100+ whiteboards",
          "Group chat & file sharing",
          "Screen Sharing",
          "Chats and channels",
          "Unlimited File Sharing",
        ],
      },
    },
  },
];
