import styled from "styled-components";

import PlusImg from "../../../assets/images/icons/accordion-plus.png";
import MinusImg from "../../../assets/images/icons/accordion-minus.png";

const PricingFAQStyle = styled.section`
  padding: 92px 0 140px 0;
  &.pricing-plan-faq-seciton {
    background: ${({ theme }) => theme.colors.whiteColor};
    padding: 132px 0 140px 0;
  }

  .faq-section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 50px;
    .faq-section-title {
      margin-bottom: 0px;
    }
  }

  .accordion-item {
    border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    border-radius: 15px;
    margin-top: 20px;
    &:first-child {
      border-top-left-radius: 15px !important;
      border-top-right-radius: 15px !important;
    }
    &:last-child {
      border-bottom-left-radius: 15px !important;
      border-bottom-right-radius: 15px !important;
    }

    &.collapsed {
      box-shadow: 0px 10px 15px ${({ theme }) => theme.colors.blackColor}14;
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

  @media screen and (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 80px;
    &.v2 {
      padding-top: 72px;
    }
    &.pricing-plan-faq-seciton {
      padding: 70px 0px 80px;
    }

    .section-title .title {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
  @media screen and (max-width: 767px) {
    &.v2 {
      padding: 70px 0 60px 0;
    }

    .faq-section-header {
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export default PricingFAQStyle;
