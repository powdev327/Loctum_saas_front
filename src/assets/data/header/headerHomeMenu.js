const data = [
  {
    title: "Home",
    url: "#",
    hasMegaMenu: true,
  },
  {
    title: "Pages",
    url: "#",
    subMenus: [
      {
        title: "About Us",
        url: "/about-us",
      },
      {
        title: "Our Services",
        url: "/our-services",
      },
      {
        title: "Pricing Plan",
        url: "/pricing-plan",
      },
      {
        title: "Auth and Utility",
        url: "#",
        subMenuChilds: [
          {
            title: "Login",
            url: "/sign-in",
          },
          {
            title: "Sign Up",
            url: "/sign-up",
          },
          {
            title: "Reset Password",
            url: "/forgot-password",
          },
          {
            title: "Terms of Service",
            url: "/terms",
          },
          {
            title: "Privacy Policy",
            url: "/privacy-policy",
          },
        ],
      },
      {
        title: "Latest Blog",
        url: "/blog",
      },
      {
        title: "Blog Details",
        url: "/blog-details",
      },
      {
        title: "Contact Us",
        url: "/contact-us",
      },
    ],
  },
  {
    title: "Services",
    url: "/our-services",
  },
  {
    title: "Blogs",
    url: "/blog",
  },
  {
    title: "Contact Us",
    url: "/contact-us",
  },
];

export default data;
