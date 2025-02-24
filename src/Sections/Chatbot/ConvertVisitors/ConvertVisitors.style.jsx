import styled from "styled-components";

import CheckImg from "../../../assets/images/icons/check.svg";

const ConvertVisitorsStyle = styled.section`
  padding-top: 93px;
  background: ${({ theme }) => theme.colors.whiteColor};
  .convert-visitors-slider-nav {
    margin-bottom: 34px;
  }
  .convert-visitors-img-section {
    max-width: 440px;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    position: relative;
    img {
      transform: translateY(40px);
    }
  }

  .convert-visitors-slider-nav-section {
    margin-bottom: -20px;
    .slick-list {
      padding: 0 !important;
      width: 100%;
    }

    .slick-track {
      width: 100% !important;
      transform: translate3d(0px, 0px, 0px) !important;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 58px;
    }
    .slick-slide {
      cursor: pointer;
      &.slick-current {
        opacity: 1;
        button {
          color: ${({ theme }) => theme.colors.primary};
          border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .convert-visitors-slider-nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 885px;
    width: 100%;
    list-style: none;
    padding: 0px;

    .slick-slide {
      max-width: max-content !important;
      width: 100% !important;
      button {
        color: ${({ theme }) => theme.colors.title};
        padding-bottom: 6px;
        border-bottom: 2px solid transparent;
        max-width: max-content !important;
        width: 102% !important;
        font-weight: 700;
        min-width: max-content;
        text-transform: uppercase;
        text-align: left;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
        }
      }
    }
  }

  .convert-visitors-slider-nav-section {
    .why-choose-tab {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      max-width: 885px;
      width: 100%;
      list-style: none;
      padding: 0px;

      .tab-buttons {
        max-width: max-content !important;
        width: 100% !important;
        flex-direction: column;
        align-items: flex-start;
        gap: 38px;

        button {
          color: ${({ theme }) => theme.colors.title};
          padding-bottom: 6px;
          border-bottom: 2px solid transparent;
          max-width: max-content !important;
          width: 100% !important;
          font-weight: 700;
          text-transform: uppercase;
          text-align: left;
          &:hover {
            color: ${({ theme }) => theme.colors.primary};
            border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }
  }

  .convert-visitors-slider-content {
    position: relative;
    .slick-dots {
      max-width: 440px;
      padding: 25px;
      width: 100%;
      margin: auto;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1%;
      background: transparent;
      border-radius: 0px 0px 30px 30px;
      height: 90px;
      left: 15px;
      bottom: 0px;
      transform: translateX(-15px);
      li {
        width: 22%;
        background: ${({ theme }) => theme.colors.whiteColor}33;
        border-radius: 1.5px;
        height: 3px;
        border-radius: 1.5px;
        overflow: hidden;
        button {
          &::before {
            display: none;
          }
        }
        &.slick-active {
          button {
            height: 3px;
            border-radius: 1.5px;
            width: 0%;
            background: ${({ theme }) => theme.colors.whiteColor};
            animation: lineProgress 4.5s linear infinite;
          }
        }
      }
    }
    .convert-visitors-slider-bg {
      position: absolute;
      bottom: 0px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 30px;
        overflow: hidden;
      }
    }
  }

  .convert-visitors-slider-right {
    overflow-x: hidden;
    padding-top: 76px;
    ul {
      list-style: none;
      padding-left: 0px;
      margin-top: 11px;
      li {
        color: ${({ theme }) => theme.colors.title};
        line-height: 36px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 30px;
        &::before {
          content: "";
          position: absolute;
          top: 10px;
          left: 0px;
          width: 16px;
          height: 16px;
          background-image: url(${CheckImg});
          background-repeat: no-repeat;
        }
      }
    }
  }

  .convert-visitors-progress-section {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 25px;
    margin-bottom: 15px;
    .convert-visitors-progress {
      border-radius: 15px;
      height: 60px;
      &.satisfaction {
        background: rgba(0, 149, 255, 0.5);
        max-width: 195px;
        width: 100%;
      }
      &.feedback {
        background: rgba(15, 82, 103, 0.5);
        max-width: 88px;
        width: 100%;
      }
    }
    .convert-visitors-progress-text {
      h3 {
        line-height: 24px;
        margin-bottom: 3px;
      }

      p {
        line-height: 24px;
      }
    }
  }
  .lead-generation-list {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 27px;
    margin-bottom: 26px;
    h4 {
      margin-bottom: 0px;
    }
    p {
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 991px) {
    .convert-visitors-slider-content {
      .slick-dots {
        left: 15px;
        bottom: auto;
        top: 46%;
      }
      .convert-visitors-slider-bg {
        bottom: auto;
        top: 20%;
        left: 0%;
      }
    }
    .convert-visitors-slider-right {
      padding-top: 25%;
    }
    .convert-visitors-slider-right {
      margin-top: 100px;
    }
    .convert-visitors-img-section {
      margin-right: auto;
    }
    .convert-visitors-slider-right {
      margin-top: 0px;
    }
    .convert-visitors-slider-right {
      padding-top: 120px;
      &.app {
        padding-top: 0px;
      }
      .section-title {
        h2 {
          font-size: 24px;
          margin-bottom: -20px;
        }
      }
      p {
        font-size: 13px;
        line-height: 20px;
        margin-bottom: 16px !important;
      }
      ul {
        li {
          font-size: 13px;
          line-height: 20px;
          margin-bottom: 15px;
        }
      }
      .convert-visitors-progress-section {
        .convert-visitors-progress-text {
          p {
            margin-bottom: 0px !important;
          }
        }
      }
      .lead-generation-list {
        p {
          margin-bottom: 4px !important;
        }
        &:nth-last-child(1) {
          padding-bottom: 40px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 70px;
    .convert-visitors-slider-nav-section {
      .slick-track {
        gap: 0px;
        flex-wrap: wrap;
        justify-content: center;
        .nav-item {
          max-width: 40% !important;
          text-align: left;
          margin-bottom: 20px;
        }
      }
    }
    .convert-visitors-slider-nav .slick-slide button {
      padding: 5px 15px !important;
    }
    .convert-visitors-slider-content {
      max-width: 500px;
      margin: auto;
      position: relative;
      .slick-dots {
        max-width: 500px;
        left: 3%;
        top: 45.2%;
      }
      .convert-visitors-slider-bg {
        top: 12%;
        max-width: 500px;
        left: 0%;
        width: 100%;
      }
    }
    .convert-visitors-slider-nav {
      padding-bottom: 0px;
    }
    .convert-visitors-slider-right {
      padding-top: 120px;
      .lead-generation-list {
        &:nth-last-child(1) {
          padding-bottom: 0px;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .convert-visitors-slider-right {
      &.app {
        padding-top: 0px;
      }
    }
    .convert-visitors-slider-content {
      .slick-dots {
        max-width: 100%;
        left: 0px;
        top: 43.2%;
      }
      .convert-visitors-slider-bg {
        top: 14%;
        max-width: inherit;
        left: -3.5%;
        width: 107%;
        img {
          min-height: 354px;
        }
      }
    }
    .convert-visitors-slider-right {
      padding-top: 120px;
      margin-top: 0px;
    }
    .convert-visitors-slider-nav-section {
      margin-left: 0px;
    }
    .convert-visitors-slider-nav-section {
      .slick-track {
        .nav-item {
          max-width: 50% !important;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .convert-visitors-slider-content {
      .slick-dots {
        max-width: 96%;
        left: 6px;
        top: 40.8%;
      }
    }
    .convert-visitors-slider-nav-section {
      .slick-track {
        .nav-item {
          button {
            font-size: 13px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 374px) {
    .convert-visitors-slider-nav-section {
      .slick-track {
        .nav-item {
          max-width: 100% !important;
          margin-bottom: 12px;
        }
      }
    }
  }
`;

export default ConvertVisitorsStyle;
