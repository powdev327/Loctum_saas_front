import styled from "styled-components";

import CheckImg from "../../../assets/images/icons/check-green2.svg";

const SafePlatformStyle = styled.section`
  margin-top: -225px;
  position: relative;
  z-index: 0;
  padding-top: 182px;
  background: #101722;
  padding-bottom: 40px;

  .section-title {
    position: relative;
    z-index: 2;
  }
  .sidebar__inner {
    width: 100% !important;
  }
  .safe-platform-header {
    padding-top: 120px;
    /* width: 100%; */
  }
  .safe-platform-img {
    max-width: 770px;
    width: 100%;
    margin: auto;
    margin-top: -193px;
    position: relative;
    z-index: 0;
    &::after {
      content: "";
      background: linear-gradient(
        180deg,
        rgba(16, 23, 34, 0) 0%,
        rgba(16, 23, 34, 0.7) 68.23%,
        rgba(16, 23, 34, 0.927083) 99.99%,
        #101722 100%
      );
      position: absolute;
      width: 100%;
      height: 80%;
      bottom: 0px;
      left: 0px;
      z-index: 1;
    }
  }

  .safe-platform-content-section {
    position: relative;
    z-index: 1;
  }

  .safe-platform-content {
    max-width: 569px;
    margin-left: auto;
  }

  .safe-platform-text {
    margin-bottom: 90px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .safe-platform-icon {
      margin-right: 30px;
      margin-top: -8px;
      min-height: 50px;
      min-width: 50px;
      overflow: hidden;
      border-radius: 50%;
      position: relative;
      img {
        height: 100%;
        width: 100%;
        position: absolute;
      }
    }
    h4 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 23px;
    }
    p {
      color: ${({ theme }) => theme.colors.whiteColor}cc;
      margin-bottom: 20px;
    }
  }

  .safe-platform-right {
    .list {
      list-style-image: url(${CheckImg});
      li {
        color: ${({ theme }) => theme.colors.whiteColor};
        font-weight: 600;
      }
    }

    .tags {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 30px;
      a {
        background: ${({ theme }) => theme.colors.whiteColor}1a;
        border-radius: 20px;
        padding: 7px 15px;
        color: ${({ theme }) => theme.colors.whiteColor};
        img {
          margin-right: 9px;
        }
        &:nth-last-child(1) {
          text-transform: uppercase;
        }
      }
    }
    .chashback-list {
      li {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        margin-bottom: 26px;
        &:nth-last-child(1) {
          margin-bottom: 0px;
        }
        h4 {
          color: ${({ theme }) => theme.colors.whiteColor};
          margin-right: 25px;
          margin-bottom: 0px !important;
        }
        span {
          color: ${({ theme }) => theme.colors.whiteColor}cc;
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .safe-platform-header{
      .crypto2{
        &.title-green{
          max-width: 400px !important;
          position: relative;
          z-index: 11;
        }
      }
    }
    .safe-platform-content{
      padding-left: 70px;
    }
  }
  @media screen and (max-width: 991px) {
    .safe-platform-content{
      padding-left: 0px;
    }
    .sidebar__inner {
      position: relative !important;
      transform: none !important;
    }
    .safe-platform-sticky{
      position: relative !important; 
      transform: none !important;
      margin-bottom: -100px;
    }
    .safe-platform-text{
      margin-bottom: 40px;
    }
    .safe-platform-content{
      max-width: 100%;
    }
  }
  @media screen and (max-width: 767px) {
    .safe-platform-ball {
      min-height: 100%;
      padding: 50px 20px;
      h4 {
        font-size: 20px;
      }
    }
    .safe-platform-text {
      margin-bottom: 60px;
    }
  }
  @media screen and (max-width: 575px) {
    .safe-platform-ball {
      padding: 50px;
      transform: none !important;
      margin-bottom: 30px;
      min-height: auto;
    }
  }
  @media screen and (max-width: 480px) {
    .safe-platform-ball h4 {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 425px) {
    .safe-platform-content-section {
      margin-top: 50px;
    }
  }
  @media screen and (max-width: 374px) {
    .safe-platform-content-section {
      margin-top: 70px;
    }
  }
`;

export default SafePlatformStyle;
