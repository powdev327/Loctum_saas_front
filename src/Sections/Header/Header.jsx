import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderStyleWrapper from "./Header.style";
import Data from "../../assets/data/header/headerHomeMenu";
import MegaMenu from "./MegaMenu";
import LanguageDropdown from "./dropdown/LanguageDropdown";
import MobileMenu from "./mobileMenu/MobileMenu";

//logo images
//import LogoImg1 from "../../assets/images/logo/logo.svg";
import LogoImg1 from "../../assets/images/logo/q-logo.svg";
//import LogoImg2 from "../../assets/images/logo/logo-dark.svg";
import LogoImg2 from "../../assets/images/logo/q-logo-dark.svg";
import LogoCorporateImg from "../../assets/images/logo/corporate-logo-dark.svg";
import LogoCryptoImg from "../../assets/images/logo/crypto-logo.svg";
import LogoCrypto2Img from "../../assets/images/logo/crypto2-logo.svg";
import LogoCryptoTokenImg from "../../assets/images/logo/crypto-token-logo.svg";
import LogoDefiImg from "../../assets/images/logo/defi-logo.svg";
import LogoFinanceImg from "../../assets/images/logo/finance-logo.svg";
import LogoFinanceDarkImg from "../../assets/images/logo/logo6-dark.png";
import LogoAccountImg from "../../assets/images/logo/logo-8.svg";

//others images
import CallImg from "../../assets/images/corporate/call-outgoing.svg";
import QrImg from "../../assets/images/crypto2/qr.svg";
import QrCodeImg1 from "../../assets/images/crypto2/code_1.png";
import QrCodeImg2 from "../../assets/images/crypto2/code_2.png";
import MenuImg from "../../assets/images/icons/menu.svg";

const Header = ({ variant, ...props }) => {
  // handle mobile menu
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMobileMenu = () => {
    const bodySection = document.body;

    if (isMobileMenu) {
      setIsAnimating(true);
      bodySection.classList.remove("nav-expanded");

      setTimeout(() => {
        setIsMobileMenu(false);
        setIsAnimating(false);
      }, 400);
    } else {
      setIsMobileMenu(true);
      bodySection.classList.add("nav-expanded");
    }
  };

  // handle sticky header
  const HeaderSectionRef = useRef(null);
  let lastScroll = 0;

  const handleScroll = () => {
    const bodySection = document.body;

    let currentScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    let diffScroll = currentScroll - lastScroll;

    if (diffScroll > 0 || currentScroll == 0) {
      HeaderSectionRef.current.classList.remove("sticky");
      bodySection.classList.remove("nav-expanded");
      setIsMobileMenu(false);
    } else {
      HeaderSectionRef.current.classList.add("sticky");
    }
    lastScroll = currentScroll;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HeaderStyleWrapper
        ref={HeaderSectionRef}
        className={`header-section ${variant} ${
          isMobileMenu ? "mobile-menu-opened" : ""
        }`}
        variant={variant}
        {...props}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="navbar navbar-expand-lg">
                <div className="container header-navbar-container">
                  {/* header logo area start */}
                  <NavLink className="navbar-brand header-logo" to={"/"}>
                    {variant != "corporate" &&
                      variant != "crypto" &&
                      variant != "crypto2" &&
                      variant != "crypto-token" &&
                      variant != "defi" &&
                      variant != "finance" &&
                      variant != "account" && (
                        <>
                          <img
                            src={LogoImg1}
                            alt="logo"
                            className="logo-light"
                          />
                          <img
                            src={LogoImg2}
                            alt="logo"
                            className="logo-dark"
                          />
                        </>
                      )}

                    {variant === "corporate" && (
                      <>
                        <img
                          src={LogoCorporateImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCorporateImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "crypto" && (
                      <>
                        <img
                          src={LogoCryptoImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCryptoImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "crypto2" && (
                      <>
                        <img
                          src={LogoCrypto2Img}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCrypto2Img}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "crypto-token" && (
                      <>
                        <img
                          src={LogoCryptoTokenImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoCryptoTokenImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "defi" && (
                      <>
                        <img
                          src={LogoDefiImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoDefiImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "finance" && (
                      <>
                        <img
                          src={LogoFinanceImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoFinanceDarkImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}

                    {variant === "account" && (
                      <>
                        <img
                          src={LogoAccountImg}
                          alt="logo"
                          className="logo-light"
                        />
                        <img
                          src={LogoAccountImg}
                          alt="logo"
                          className="logo-dark"
                        />
                      </>
                    )}
                  </NavLink>
                  {/* header logo area end */}

                  {/* menu toggler */}
                  {/* <button className="menu-toggler" onClick={handleMobileMenu}>
                    <img
                      src={`${isMobileMenu ? MenuCloseImg : MenuImg}`}
                      alt={`${isMobileMenu ? "close" : "menu"}`}
                    />
                  </button> */}

                  {/* menu toggler */}
                  <div className="menu-toggler">
                    {/* Button to toggle the Offcanvas */}
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasStaco"
                      aria-controls="offcanvasStaco"
                    >
                      <img src={MenuImg} alt="menu" />
                    </button>
                  </div>

                  <div className="collapse navbar-collapse header-navbar-content">
                    {/* main menu */}
                    <ul className="navbar-nav main-menu">
                      {Data?.map((menuItem, i) => (
                        <li
                          key={i}
                          className={
                            menuItem.hasMegaMenu
                              ? "nav-item home-nav"
                              : "nav-item"
                          }
                        >
                          <NavLink
                            className={` ${
                              menuItem.hasMegaMenu
                                ? "nav-link megaTablinks"
                                : "nav-link"
                            }  ${
                              menuItem.subMenus?.length > 0 ? "has-submenu" : ""
                            }`}
                            to={menuItem.url}
                          >
                            {menuItem.title}
                          </NavLink>

                          {/* megamenu */}
                          {menuItem?.hasMegaMenu && <MegaMenu />}

                          {menuItem.subMenus?.length > 0 && (
                            <div className="submenu-box">
                              <ul className="submenu">
                                {menuItem.subMenus?.map((subMenuItem, i) => {
                                  let hasSubMenuChild = false;
                                  if (subMenuItem.subMenuChilds?.length > 0) {
                                    hasSubMenuChild = true;
                                  }
                                  return (
                                    <li
                                      key={i}
                                      className={
                                        hasSubMenuChild
                                          ? "submenu-has-submenu"
                                          : ""
                                      }
                                    >
                                      <NavLink
                                        className="dropdown-item"
                                        to={subMenuItem.url}
                                      >
                                        {subMenuItem.title}
                                      </NavLink>

                                      {subMenuItem.subMenuChilds?.length >
                                        0 && (
                                        <div className="submenu-box2">
                                          <ul className="submenu submenu-submenu">
                                            {subMenuItem.subMenuChilds?.map(
                                              (subMenuChild, i) => (
                                                <li key={i}>
                                                  <NavLink
                                                    to={subMenuChild.url}
                                                  >
                                                    {subMenuChild.title}
                                                  </NavLink>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        </div>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* header extra */}
                    <ul className="header-extra">
                      {variant != "corporate" &&
                        variant != "crypto" &&
                        variant != "crypto-token" &&
                        variant != "crypto2" &&
                        variant != "defi" &&
                        variant != "newsletter" &&
                        variant != "portfolio" &&
                        variant != "finance" && (
                          <li>
                            <NavLink to="/sign-in" className={`${variant}`}>
                              Sign in
                            </NavLink>
                          </li>
                        )}

                      {variant === "v1" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-white-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Start free
                              </span>
                              <span className="btn-hover-text">Start free</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "chatbot" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-navy-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Free Trial
                              </span>
                              <span className="btn-hover-text">Free Trial</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "sass" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-white-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Sign up free
                              </span>
                              <span className="btn-hover-text">
                                Sign up free
                              </span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "crypto" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-white-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">Download</span>
                              <span className="btn-hover-text">Download</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "crypto-token" && (
                        <li>
                          <a
                            href="/sign-up"
                            className="bg-white-btn btn-hov-effect dark"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">Buy Token</span>
                              <span className="btn-hover-text">Buy Token</span>
                            </span>
                            <span className="round-shape"></span>
                          </a>
                        </li>
                      )}

                      {variant === "defi" && (
                        <li>
                          <a
                            href="/sign-up"
                            className="defi-header-btn btn-hov-effect dark"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">Open App</span>
                              <span className="btn-hover-text">Open App</span>
                            </span>
                            <span className="round-shape"></span>
                          </a>
                        </li>
                      )}

                      {variant === "app" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-skyblue-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">Download</span>
                              <span className="btn-hover-text">Download</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "v2" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-skyblue-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Start free
                              </span>
                              <span className="btn-hover-text">Start free</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "v3" && (
                        <li>
                          <NavLink to="/sign-up" className="start-meeting-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Start Meeting
                              </span>
                              <span className="btn-hover-text">
                                Start Meeting
                              </span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "v4" && (
                        <li>
                          <NavLink
                            to="/sign-up"
                            className="template-btn talk-btn"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "v5" && (
                        <li>
                          <NavLink to="/sign-up" className="bg-pink-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "account" && (
                        <li>
                          <NavLink to="/contact-us" className="bg-green-btn">
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "portfolio" && (
                        <li>
                          <NavLink
                            to="/contact-us"
                            className="header-outline-btn"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Let's Talk
                              </span>
                              <span className="btn-hover-text">Let's Talk</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "main-header" && (
                        <li>
                          <NavLink
                            to="/sign-up"
                            className="template-btn primary-bg"
                          >
                            <span className="btn-inner">
                              <span className="btn-normal-text">
                                Start free
                              </span>
                              <span className="btn-hover-text">Start free</span>
                            </span>
                          </NavLink>
                        </li>
                      )}

                      {variant === "crypto2" && (
                        <>
                          <li>
                            <div className="qr-code-btn relative">
                              <button className="view-qr">
                                <img src={QrImg} alt="icon" />
                              </button>
                              <div className="qr-code-box">
                                <div className="scan-qr text-right">
                                  <img src={QrCodeImg1} alt="img" />
                                </div>
                                <div className="scan-qr">
                                  <img src={QrCodeImg2} alt="img" />
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <NavLink to="/sign-up" className="crypto2-blue-btn">
                              <span className="btn-inner">
                                <span className="btn-normal-text">
                                  Get Wallet
                                </span>
                                <span className="btn-hover-text">
                                  Get Wallet
                                </span>
                              </span>
                            </NavLink>
                          </li>
                        </>
                      )}

                      {(variant === "corporate" ||
                        variant === "newsletter" ||
                        variant === "finance") && (
                        <>
                          {variant === "corporate" && (
                            <li className="header-phn-number">
                              <a href="#">
                                <img src={CallImg} alt="icon" />{" "}
                                <span className="ml-12">+ 66 0852 369 358</span>
                              </a>
                            </li>
                          )}

                          <li>
                            <LanguageDropdown variant={variant} />
                          </li>

                          {variant === "newsletter" && (
                            <>
                              <li>
                                <NavLink to="/sign-in" className={`${variant}`}>
                                  Sign in
                                </NavLink>
                              </li>
                              <li>
                                <a
                                  href="/sign-up"
                                  className="template-btn primary-bg"
                                >
                                  <span className="btn-inner">
                                    <span className="btn-normal-text">
                                      Sign up free
                                    </span>
                                    <span className="btn-hover-text">
                                      Sign up free
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </>
                          )}

                          {variant === "corporate" && (
                            <li>
                              <NavLink
                                to="/contact-us"
                                className="btn-light-green"
                              >
                                <span className="btn-inner">
                                  <span className="btn-normal-text">
                                    Contact Us
                                  </span>
                                  <span className="btn-hover-text">
                                    Contact Us
                                  </span>
                                </span>
                              </NavLink>
                            </li>
                          )}

                          {variant === "finance" && (
                            <>
                              <li>
                                <NavLink to="/sign-in" className={`${variant}`}>
                                  Sign in
                                </NavLink>
                              </li>
                              <li>
                                <NavLink to="/sign-up" className="bg-olive-btn">
                                  <span className="btn-inner">
                                    <span className="btn-normal-text">
                                      Start free
                                    </span>
                                    <span className="btn-hover-text">
                                      Start free
                                    </span>
                                  </span>
                                </NavLink>
                              </li>
                            </>
                          )}
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </HeaderStyleWrapper>

      {/* mobile menu */}
      <MobileMenu />
    </>
  );
};

export default Header;
