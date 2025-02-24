import styled from "styled-components";

import DropdownToggleImg from "../../../assets/images/icons/dropdown-toggle.svg";
import CheckGreenImg from "../../../assets/images/icons/check-green.svg";

const CustomerComparePriceStyle = styled.section`
  position: relative;
  z-index: 2;
  .compare-price-content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    max-width: 770px;
    width: 100%;
    margin: auto;
    margin-bottom: 50px;
    position: relative;
    & .vs {
      background: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 11;
      & h6 {
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        & span {
          position: relative;
          z-index: 1;
        }
        &:after {
          content: "";
          background: ${({ theme }) => theme.colors.whiteColor};
          position: absolute;
          height: 82px;
          width: 40px;
          z-index: 0;
        }
      }
    }
    .compare-price-card {
      background: ${({ theme }) => theme.colors.whiteColor};
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-radius: 10px;
      padding: 40px;
      max-width: 365px;
      width: 100%;
      margin: auto;
      min-height: 525px;
      position: relative;
      .compare-price-card-icon {
        position: absolute;
        right: 27px;
        top: 27px;
        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
    .compare-price-dropdown {
      width: 170px;
      height: 50px;
      position: relative;
      background: ${({ theme }) => theme.colors.bgDropdown};
      border-radius: 5px;
      margin-bottom: 25px;
      
      &::after {
        position: absolute;
        content: "";
        right: 15px;
        top: 22px;
        width: 15px;
        height: 15px;
        background-image: url(${DropdownToggleImg});
        background-repeat: no-repeat;
      }

      & select {
        font-size: 18px;
        font-weight: 700;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.title};
        width: 100%;
        border: none;
        outline: none;
        appearance: none;
        background: transparent;
        padding: 12px 14px;

        & option {
          font-family: ${({ theme }) => theme.fonts.dmSans};
          font-size: 18px;
          font-weight: 700;
          line-height: 26px;
          color: ${({ theme }) => theme.colors.title};
        }
      }
    }
    & h5 {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 700;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 33px;
    }
    & h2 {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 500;
      line-height: 26px;
      & sup {
        font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        font-size: 18px;
        font-weight: 600;
        line-height: 26px;
        top: -15px;
      }
      & strong {
        font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        font-size: 36px;
        font-weight: 700;
        line-height: 26px;
        margin-right: 7px;
      }

      & span {
        font-size: 18px;
        font-weight: 400;
        line-height: 26px;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
    & .compare-list {
      margin-top: 26px;
      margin-bottom: 30px;
      & ul {
        padding: 0;
        list-style: none;
        margin: 0;
        & li {
          padding: 0 0 8px;
          &:last-child {
            padding-bottom: 0;
          }
          &:before {
            content: url(${CheckGreenImg});
            margin-right: 11px;
          }
        }
      }
    }
    & .compare-price-list {
      & ul {
        padding: 0;
        list-style: none;
        margin: 0;
        & li {
          font-size: 16px;
          font-weight: 500;
          line-height: 26px;
          padding: 16px 0px;
          height: 106px;
          border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          &:nth-last-child(1) {
            border-bottom: none;
          }
          & strong {
            color: ${({ theme }) => theme.colors.title};
          }
          & span {
            margin-right: 10px;
          }
        }
      }
    }

    .compare-price-icons1 {
      position: absolute;
      left: -180px;
      animation: jumpingDown 4.5s infinite;
    }
    .compare-price-icons2 {
      position: absolute;
      position: absolute;
      left: -25px;
      top: 30%;
      z-index: 1;
    }
    .compare-price-icons3 {
      position: absolute;
      right: -200px;
      z-index: 1;
      animation: jumpingUp 5s infinite;
    }
    .compare-price-icons4 {
      position: absolute;
      right: -80px;
      top: 20%;
    }
  }

  .premium-price,
  .professional-price {
    display: none;
  }
  .best-pricing-info {
    margin-top: 40px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 35px;
    padding: 15px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    .list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
      .list-item {
        display: flex;
        align-items: center;
        gap: 10px;
        svg {
          font-size: 18px;
          color: ${({ theme }) => theme.colors.textColor};
        }
        p {
          margin-bottom: 0;
          font-weight: 700;
        }
      }
    }
    &-right {
      display: flex;
      align-items: center;
      gap: 27px;
      flex-wrap: wrap;
      p {
        margin-bottom: 0;
        font-weight: 700;
      }
    }
  }
  .compare-plans-btn {
    display: flex;
    align-items: center;
    gap: 13px;
    transition: 0.3s;
    font-weight: 800;
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
    .icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary}4d;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      svg {
        font-size: 16px;
        transition: 0.3s;
      }
    }
    &:hover {
      .icon {
        background-color: ${({ theme }) => theme.colors.primary};
        svg {
          color: ${({ theme }) => theme.colors.whiteColor};
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .compare-price-content {
      .compare-price-icons3 {
        right: -37px;
        height: 80px;
        width: 80px;
      }

      .compare-price-icons1 {
        left: -66px;
        height: 60px;
        width: 60px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .compare-price-content {
      & .compare-price-card {
        padding: 40px 28px;
      }

      & .compare-price-list {
        & ul li {
          font-size: 15px;
        }
      }
    }
    .compare-price-content {
      & .compare-price-card {
        padding: 40px 28px;
      }
    }
    .compare-price-content {
      .compare-price-icons1,
      .compare-price-icons2,
      .compare-price-icons3,
      .compare-price-icons4 {
        display: none;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .compare-price-content {
      flex-direction: column;

      & .vs h6:after {
        height: 40px;
        width: 82px;
      }
    }
    .compare-price-content {
      flex-direction: column;
      margin-bottom: 40px;
      gap: 30px;

      & .vs h6:after {
        height: 40px;
        width: 82px;
      }
    }
    .best-pricing-info {
      padding: 30px;
    }
    .best-pricing-info {
      gap: 10px;

      .list {
        gap: 10px;
      }

      &-right {
        gap: 20px;

        a {
          gap: 10px;
          font-weight: 800;
        }
      }
    }
  }
`;

export default CustomerComparePriceStyle;
