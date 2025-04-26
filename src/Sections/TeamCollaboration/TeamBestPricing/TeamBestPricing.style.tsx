import styled from "styled-components";

const TeamBestPricingStyleWrapper = styled.section`
  padding: 112px 0 120px 0;
  background: linear-gradient(90deg, #d3e1ff 0%, #ecf1f8 45.31%, #ffeaef 98.8%);
  border-radius: 50px;

  /*-- best-pricing-header style --*/
  .best-pricing-header {
    margin-bottom: 40px;
    text-align: center;
    h3 {
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
  }

  /*-- best-pricing-selector style --*/
  .best-pricing-selector {
    margin-bottom: 40px;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      button {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textColor};
        span {
          color: ${({ theme }) => theme.colors.heroimg1Bg};
        }
        &.active {
          color: ${({ theme }) => theme.colors.title};
        }
      }
      input[type="checkbox"] {
        appearance: none;
        width: 50px;
        height: 24px;
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-radius: 15px;
        background-color: ${({ theme }) => theme.colors.whiteColor};
        position: relative;
        cursor: pointer;
        transition: 0.3s;
        &::before {
          position: absolute;
          content: "";
          top: 4px;
          left: 5px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: ${({ theme }) => theme.colors.primary}80;
          transition: 0.3s;
        }
        &:checked {
          background-color: ${({ theme }) => theme.colors.primary};
          &::before {
            left: 28px;
            background-color: ${({ theme }) => theme.colors.whiteColor};
          }
        }
      }
    }
  }
  .best-pricing-grid {
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 30px;
    &.yearly {
      display: none;
    }
  }

  .best-pricing-card {
    width: 25%;
    padding: 38px;
    background-color: ${({ theme }) => theme.colors.whiteColor};
    position: relative;
    .best-pricing-card-header {
      h3 {
        margin-bottom: 0;
        line-height: 1;
        span {
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
    &:first-child {
      border-radius: 30px 0 0 30px;
    }

    &:last-child {
      border-radius: 0 30px 30px 0;
      border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-left: 0;
    }

    &.meeting {
      border-left: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-right: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      .start-free-btn {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.whiteColor};
        span{
          color: ${({ theme }) => theme.colors.whiteColor};
        }
      }
    }

    &.v2 {
      background-color: transparent;
    }

    .overlay {
      position: absolute;
      top: -20px;
      left: 0;
      width: 100%;
      height: 30px;
      border-radius: 10px 10px 0 0;
      background-color: ${({ theme }) => theme.colors.heroimg1Bg};
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 38px;
      p {
        font-size: 13px;
        font-weight: 700;
        line-height: 20px;
        color: ${({ theme }) => theme.colors.whiteColor};
        text-transform: uppercase;
      }
    }

    &-header {
      p {
        margin-bottom: 25px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    &-title {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        font-size: 30px;
        line-height: 30px;
      }
    }

    &-body {
      margin-top: 20px;
      .list {
        padding: 0;
        list-style: none;
        margin-top: 27px;
        li {
          color: ${({ theme }) => theme.colors.textColor};
          padding-left: 16px;
          padding-bottom: 6px;
          position: relative;

          &:not(:first-child) {
            margin-top: 10px;
          }

          &::before {
            position: absolute;
            content: "";
            top: 42%;
            left: 0;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.2);
          }
          /* &.v2 {
            &::before {
              background-color: #f9518c66;
            }
          } */
        }
      }
    }
  }

  .users-list {
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    li {
      &:not(:first-child) {
        margin-left: -4px;
        a img {
          border: 2px solid ${({ theme }) => theme.colors.borderColor2};
        }
      }
    }
    li a {
      width: 36px;
      height: 36px;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
    }
    li button {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary}4d;
      border: 2px solid ${({ theme }) => theme.colors.borderColor2};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      img {
        transition: 0.3s;
      }
      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        img {
          filter: brightness(0) invert(1);
        }
      }
    }
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
          font-weight: 600;
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
        font-weight: 600;
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
    .best-pricing-grid {
      flex-wrap: wrap;
    }
    .best-pricing-card {
      width: 50%;
    }
    .best-pricing-card {
      &:first-child {
        border-radius: 30px 0 0 0;
      }

      &:nth-child(3) {
        border-radius: 0 0 0 30px;
      }

      &:last-child {
        border-radius: 0 0 30px 0;
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-left: 0;
      }

      &.active {
        border-left: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-right: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 74px;
    padding-bottom: 80px;
  }
  @media screen and (max-width: 767px) {
    .best-pricing-info {
      padding: 30px;
    }
    .best-pricing-card {
      width: 100%;

      &:not(:first-child) {
        border-left: 0;
      }

      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      }
    }

    .best-pricing-card {
      &:first-child {
        border-radius: 30px 30px 0 0;
      }

      &:nth-child(3) {
        border-radius: 0 0 0 0;
      }

      &:last-child {
        border-radius: 0 0 30px 30px;
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-left: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      }
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
        }
      }
    }
    .best-pricing-card {
      padding: 30px;
      border-radius: 30px !important;
      margin-bottom: 20px;
      &:nth-child(1) {
        margin-bottom: 40px;
      }
      &:nth-last-child(1) {
        margin-bottom: 0px;
      }
    }
    .best-pricing-card-body {
      margin-top: 25px;
    }
  }
  @media screen and (max-width: 575px) {
    .best-pricing-header {
      h2 {
        font-size: 30px;
      }
    }
    .best-pricing-card-title h2 {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 480px) {
    .best-pricing-header {
      h2 {
        font-size: 24px;
      }
    }
  }
`;

export default TeamBestPricingStyleWrapper;
