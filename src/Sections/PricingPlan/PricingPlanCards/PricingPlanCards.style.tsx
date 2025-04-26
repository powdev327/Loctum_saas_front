import styled from "styled-components";

const PricingPlanCardsStyle = styled.section`
  background: transparent;
  margin-top: -300px;
  position: relative;
  z-index: 2;
  padding-bottom: 100px;

  .pricing-plan-breadcrumb-right {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    margin-top: 90px;
    .best-pricing-selector form button {
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }

  .pricing-plan-card {
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 15px;
    padding: 46px 40px;
    position: relative;
    min-height: 100%;
    &::before {
      content: "";
      border-radius: 15px 15px 0px 0px;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 15px;
    }
    &.free-card {
      &::before {
        background: rgba(14, 195, 107, 0.3);
      }
    }
    &.growth-card {
      &::before {
        background: rgba(0, 206, 201, 0.3);
      }
    }
    &.business-card {
      &::before {
        background: rgba(249, 81, 140, 0.3);
      }
    }

    .best-pricing-card-body {
      .list {
        margin-top: 27px;
        padding: 0;
        list-style: none;

        li {
          position: relative;
          padding-left: 16px;
          padding-bottom: 6px;

          &::before {
            content: "";
            position: absolute;
            left: 0;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.blackColor}1f;
            top: 15px;
          }

          &:not(:first-child) {
            margin-top: 10px;
          }
        }
      }
    }

    &.active {
      .best-pricing-card-body {
        height: auto;
      }
      .pricing-plan-card-content.right {
        height: auto;
      }
    }
  }

  .pricing-plan-card-header {
    h6{
      font-weight: 800;
    }
    &.free {
      h6 {
        color: ${({ theme }) => theme.colors.iconColor2};
      }
    }
    &.growth {
      h6 {
        color: ${({ theme }) => theme.colors.heroimg1Bg};
      }
    }
    &.business {
      h6 {
        color: ${({ theme }) => theme.colors.badgeColor};
      }
    }
    &.enterprise {
      h6 {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    h6 {
      text-transform: uppercase;
      span {
        color: ${({ theme }) => theme.colors.title};
        margin-left: 18px;
      }
    }
    h3 {
      margin-top: 35px;
      span {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-size: 15px;
        font-weight: 500;
        line-height: 26px;
      }
    }
  }

  .pricing-plan-card-content {
    &.right {
      text-align: center;
      max-width: 220px;
      margin-left: auto;
      .pricing-plan-img {
        position: relative;
        bottom: -96px;
      }
    }
  }

  .pricing-plan-show-btn {
    color: ${({ theme }) => theme.colors.primary};
    width: 190px;
    text-align: left;
    padding-left: 36px;
    margin: 8px auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 20px;
    transition: 0.3s;
    display: none;
    position: relative;
    &:hover {
      color: ${({ theme }) => theme.colors.title};
      &::before {
        color: ${({ theme }) => theme.colors.title};
      }
    }
    &::before {
      content: "+";
      font-size: 20px;
      min-height: 24px;
      min-width: 26px;
      position: absolute;
      left: 0px;
      border-radius: 50%;
      color: ${({ theme }) => theme.colors.whiteColor};
      background: ${({ theme }) => theme.colors.primary};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
    }
    &.active {
      &::before {
        content: "-";
      }
    }
  }

  .best-pricing-btn {
    max-width: 100%;
    width: 100%;
    font-weight: 800;
    height: 60px;
    border: 1px solid ${({ theme }) => theme.colors.primary}4d;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    transition: 0.3s;
    position: relative;
    overflow: hidden;
    z-index: 0;
    .icon {
      transition: 0.3s;
      margin-left: 15px;
    }
    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50px;
      background-color: ${({ theme }) => theme.colors.primary};
      transform: translateX(-100%);
      transition: 0.3s;
    }
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.whiteColor};
      &::before {
        transform: translateX(0%);
      }
      .icon {
        transform: rotate(-45deg);
        filter: brightness(100) sepia(1) hue-rotate(-120deg) grayscale(100%)
          contrast(5);
      }
    }
    &.active {
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.whiteColor};
      background: ${({ theme }) => theme.colors.primary};
      .icon {
        transform: rotate(-45deg);
        filter: brightness(100) sepia(1) hue-rotate(-120deg) grayscale(100%)
          contrast(5);
      }
    }
  }

  @media screen and (max-width: 991px) {
    .pricing-plan-card {
      padding-bottom: 10px;
      padding-top: 25px;
    }
    .pricing-plan-card-content {
      &.right {
        margin-left: 0px;
        margin-right: auto;

        .pricing-plan-img {
          bottom: 0px;
          margin-top: 20px;
        }
      }
    }
    .pricing-plan-card-header h3 {
      font-size: 23px;
      margin-top: 5px;
    }
    .faq-seciton.pricing-plan-faq-seciton {
      padding: 70px 0px 80px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
    .pricing-plan-card {
      padding-bottom: 30px;
    }
    .pricing-plan-card-content.right {
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
    }
    .pricing-plan-breadcrumb-right {
      justify-content: flex-start;
      margin-top: 40px;
    }
  }
`;

export default PricingPlanCardsStyle;
