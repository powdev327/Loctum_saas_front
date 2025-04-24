import React from 'react'
import FooterStyleWrapper from './Footer.style'

const PortfolioFooter = () => {
    return (
            <FooterStyleWrapper>
                {/* V7 Footer Scetion Start */}
                <footer className="v7-footer-area">
                    <div className="footer-section-v7">
                        <img
                            src="../images/portfolio/mesh-grad.png"
                            alt="img"
                            className="footer-section-mash-gard"
                        />
                        <div className="footer-section-grain-texture">
                            <img src="../images/portfolio/grain-texture.png" alt="img" />
                        </div>
                        <div className="container">
                            <div className="footer-v7-content">
                                <div className="footer-v7-text">
                                    <h2>
                                        Start building a <br />
                                        high-performing Website
                                    </h2>
                                    <a className="leav-msg-btn bg-blue-btn">
                                        <span className="btn-inner">
                                            <span className="btn-normal-text">Leave a Message</span>
                                            <span className="btn-hover-text">Leave a Message</span>
                                        </span>
                                    </a>
                                </div>
                                <div className="v7footer-contact-card">
                                    <div className="v7footer-card-text text-left">
                                        <p>Mail Us</p>
                                        <h6>support@yourmail.com</h6>
                                    </div>
                                    <div className="v7footer-card-text text-center">
                                        <p>Call Us</p>
                                        <h6>+1 850-263-0000</h6>
                                    </div>
                                    <div className="v7footer-card-text text-right">
                                        <p>Follow Us</p>
                                        <ul className="social-link">
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="../images/icons/facebook.svg"
                                                        alt="social-icon"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="../images/icons/twitter.svg"
                                                        alt="social-icon"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="../images/icons/pinterest.svg"
                                                        alt="social-icon"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="../images/icons/instagram.svg"
                                                        alt="social-icon"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <img
                                                        src="../images/icons/dribbble.svg"
                                                        alt="social-icon"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="v7-main-footer">
                                    <p className="copyright-text mb-0">
                                        Copyright <a href="/">Staco 2023,</a> All right reserved
                                    </p>
                                    <a href="#" className="back-to-top-btn">
                                        <div className="icon">
                                            <span
                                                className="iconify"
                                                data-icon="akar-icons:chevron-right"
                                            />
                                        </div>
                                    </a>
                                    <ul className="privacy-menu">
                                        <li>
                                            <a href="/terms">Terms and conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Cookies</a>
                                        </li>
                                        <li>
                                            <a href="/privacy-policy">Privacy policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* V7 Footer Scetion End */}
            </FooterStyleWrapper>
    )
}

export default PortfolioFooter