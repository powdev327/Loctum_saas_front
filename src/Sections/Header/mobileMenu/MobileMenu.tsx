import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Data from "../../../assets/data/header/mobileMenu";
import MobileMenuStyleWrapper from "./Menu.style";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../../Components/LanguageSwitcher.jsx";

//logo images
import LogoImg2 from "../../../assets/images/logo/q-logo-dark.svg";

const MobileMenu = () => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const [openChildSubMenuIndex, setOpenChildSubMenuIndex] = useState(null);
  const { t } = useTranslation();

  const handleSubmenuOpen = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    setOpenChildSubMenuIndex(null);
  };

  const handleSubmenuChildOpen = (index) => {
    setOpenChildSubMenuIndex(openChildSubMenuIndex === index ? null : index);
  };

  return (
    <MobileMenuStyleWrapper
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="offcanvasStaco"
      aria-labelledby="offcanvasStacoLabel"
    >
      <div className="offcanvas-header">
        <NavLink className="navbar-brand header-logo" to="/">
          <img src={LogoImg2} alt="logo" />
        </NavLink>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body offcanvasStaco-body">
        <ul className="nav-menu">
          <li>
            <NavLink to="/" data-bs-dismiss="offcanvas">{t('header.home')}</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" data-bs-dismiss="offcanvas">{t('header.about')}</NavLink>
          </li>
          <li>
            <NavLink to="/our-services" data-bs-dismiss="offcanvas">{t('header.services')}</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" data-bs-dismiss="offcanvas">{t('header.contact')}</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in" data-bs-dismiss="offcanvas">{t('header.login')}</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" data-bs-dismiss="offcanvas">{t('header.signup')}</NavLink>
          </li>
          <li className="language-switcher-mobile">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </MobileMenuStyleWrapper>
  );
};

export default MobileMenu;
