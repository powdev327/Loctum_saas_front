import styled from "styled-components";

import PlusImg from "../../../assets/images/icons/accordion-plus.png";
import MinusImg from "../../../assets/images/icons/accordion-minus.png";
import BgImg from "../../../assets/images/business/bg-question.svg";

const AppFaqStyleWrapper = styled.section`
  padding: 132px 0 135px 0;
  position: relative;
  z-index: 0;
  .faq-seciton {
    padding: 92px 0 140px 0;

    &.v2 {
      padding: 132px 0 70px 0;
    }
    &.pricing-plan-faq-seciton {
      background: ${({ theme }) => theme.colors.whiteColor};
      padding: 132px 0 140px 0;
    }

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 50px;
      .faq-section-title {
        margin-bottom: 0px;
      }
    }
  }

  .faq-section-title {
    margin-bottom: 98px;
    h3 {
      margin-bottom: 16px;
      text-transform: uppercase;
      font-size: 18px;
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: 0.2em;
    }
  }

  .leave-message {
    &1 {
      display: block;
    }
    &2 {
      display: none;
    }
    h2 {
      font-size: 18px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.blackColor};
    }
    h3 {
      color: ${({ theme }) => theme.colors.textColor};
    }
    .msg-btn {
      position: relative;
      .rotate-icon {
        transform: rotate(45deg);
        transition: 0.3s;
      }
      .icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  /*-- template-accordion style --*/
  .template-accordion {
    .accordion-item {
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-radius: 15px;
      &:not(:first-child) {
        margin-top: 20px;
      }
      &:first-child {
        border-top-left-radius: 15px !important;
        border-top-right-radius: 15px !important;
      }
      &:last-child {
        border-bottom-left-radius: 15px !important;
        border-bottom-right-radius: 15px !important;
      }
      &.collapsed {
        //  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);
      }
    }

    .accordion-header {
      border: 0 !important;
      border-radius: 15px !important;
      background-color: transparent;
    }

    .accordion-button {
      border-radius: 15px !important;
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-size: 18px;
      font-weight: 700;
      line-height: 24px;
      color: ${({ theme }) => theme.colors.title};
      padding: 18px 20px 20px 50px;
      position: relative;

      &::after {
        position: absolute;
        content: url(${PlusImg});
        top: 22px;
        left: 20px;
        width: 20px;
        height: 20px;
        border: 0 !important;
        background-image: none;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      &:not(.collapsed) {
        background-color: transparent;
        box-shadow: none;

        &::after {
          content: url(${MinusImg});
        }
      }

      &:focus {
        box-shadow: none;
      }
    }

    .accordion-collapse.show {
      border-radius: 15px;
      box-shadow: 0px 10px 15px ${({ theme }) => theme.colors.blackColor}14;
    }

    .accordion-body {
      padding: 0 20px 20px 50px;
    }
  }

  &::before {
    position: absolute;
    z-index: -1;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${BgImg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }
  &.app-faq-section {
    &::before {
      display: none;
    }
  }

  .faq-section-4-title {
    margin-bottom: 30px;
    text-align: center;
    h3 {
      margin-bottom: 16px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.primary};
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-size: 40px;
      font-weight: 700;
      line-height: 60px;
      color: ${({ theme }) => theme.colors.title};
    }
  }

  .faq-section-4-tab {
    padding-top: 30px;
    .nav.nav-tabs {
      border-bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .nav-link {
      background: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-radius: 26px;
      padding: 12px 28px;
      font-weight: 700;
      font-size: 15px;
      line-height: 24px;
      text-align: center;
      color: ${({ theme }) => theme.colors.blackColor};
      transition: 0.3s;
      &.active {
        border: 1px solid transparent;
        background-color: #e7f1fc;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .tab-content {
      margin-top: 50px;
    }
  }

  .faq-section-4-bottom {
    margin-top: 72px;
    text-align: center;

    h4 {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.blackColor};
    }

    h5 {
      font-size: 15px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.textColor};
    }

    .text-link {
      margin: 15px auto 0;
    }
  }

  /*-- faq-section end --*/

  @media screen and (max-width: 991px) {
    .faq-seciton.v2 {
      padding-top: 72px;
    }
    .template-accordion {
      .accordion-button {
        padding: 16px 0px;
        padding-left: 50px;
        &::after {
          top: 20px;
        }
        &:not(.collapsed) {
          padding-bottom: 10px;
        }
      }

      .accordion-body {
        p {
          font-size: 12px;
          line-height: 22px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .faq-seciton {
      padding-top: 40px;
      padding-bottom: 80px;
      &.pricing-plan-faq-seciton {
        padding: 70px 0px 80px;
      }
    }
    .leave-message {
      margin-bottom: 0px;
      text-align: center;
      &1 {
        display: none;
      }
      &2 {
        display: block;
        margin-top: 50px;
      }
      .text-link {
        margin: auto;
      }
    }

    .template-accordion {
      .accordion-button {
        font-size: 16px;
        line-height: 30px;
      }
    }

    .template-accordion .accordion-button::after {
      top: 24px;
    }

    .faq-section-4-title h2,
    .testimonial-section-4-title h2 {
      font-size: 32px;
      line-height: 45px;
    }

    padding: 70px 0;
  }
  @media screen and (max-width: 575px) {
    .faq-seciton {
      &.v2 {
        padding: 70px 0 60px 0;
      }

      &-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .faq-section-4-title {
      h3 {
        margin-bottom: 10px;
        @include textStyle(16px, 700, 26px);
      }

      h2 {
        @include textStyle(30px, 700, 50px);
      }
    }

    .template-accordion {
      .accordion-button {
        padding-left: 40px;
        &::after{
          left: 11px;
        }
      }
    }

    .faq-section-4-tab {
      .nav.nav-tabs {
        gap: 10px;
      }

      .nav-link {
        border-radius: 26px;
        padding: 10px 15px;
      }

      .tab-content {
        margin-top: 40px;
      }
    }

    .faq-section-4-bottom {
      margin-top: 40px;
      text-align: center;
    }
  }
  @media screen and (max-width: 374px) {
    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
  }
`;

export default AppFaqStyleWrapper;
