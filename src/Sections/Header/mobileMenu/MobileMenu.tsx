import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleSubmenuOpen = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
    setOpenChildSubMenuIndex(null);
  };

  const handleSubmenuChildOpen = (index) => {
    setOpenChildSubMenuIndex(openChildSubMenuIndex === index ? null : index);
  };

  // Function to close the offcanvas menu
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById('offcanvasStaco');
    if (offcanvasElement) {
      // Method 1: Try to use Bootstrap's offcanvas API
      if (window.bootstrap && window.bootstrap.Offcanvas) {
        const offcanvasInstance = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
        if (offcanvasInstance) {
          offcanvasInstance.hide();
          return;
        }
      }
      
      // Method 2: Try to trigger Bootstrap's data-bs-dismiss
      const closeButton = offcanvasElement.querySelector('[data-bs-dismiss="offcanvas"]');
      if (closeButton) {
        closeButton.click();
        return;
      }
      
      // Method 3: Fallback - manually remove Bootstrap classes and clean up
      offcanvasElement.classList.remove('show');
      offcanvasElement.classList.add('hiding');
      
      // Remove backdrop
      const backdrop = document.querySelector('.offcanvas-backdrop');
      if (backdrop) {
        backdrop.classList.add('fade');
        setTimeout(() => backdrop.remove(), 150);
      }
      
      // Clean up body classes and styles
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      
      // Complete the hiding animation
      setTimeout(() => {
        offcanvasElement.classList.remove('hiding');
      }, 300);
    }
  };

  // Handle navigation with menu close
  const handleNavigation = (path) => {
    closeOffcanvas();
    // Small delay to ensure smooth transition
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  // Initialize Bootstrap offcanvas when component mounts
  useEffect(() => {
    const offcanvasElement = document.getElementById('offcanvasStaco');
    if (offcanvasElement && window.bootstrap && window.bootstrap.Offcanvas) {
      // Initialize Bootstrap offcanvas if not already initialized
      if (!window.bootstrap.Offcanvas.getInstance(offcanvasElement)) {
        new window.bootstrap.Offcanvas(offcanvasElement);
      }
    }
  }, []);

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
            <NavLink 
              to="/" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/');
              }}
            >
              {t('header.home')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about-us" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/about-us');
              }}
            >
              {t('header.about')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/our-services" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/our-services');
              }}
            >
              {t('header.services')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact-us" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/contact-us');
              }}
            >
              {t('header.contact')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/sign-in" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/sign-in');
              }}
            >
              {t('header.login')}
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/sign-up" 
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('/sign-up');
              }}
            >
              {t('header.signup')}
            </NavLink>
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
