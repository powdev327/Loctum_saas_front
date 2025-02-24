import styled from "styled-components";

const ConvertVisitorsStyle = styled.div`
  padding-top: 84px;
  .star-free-btn {
    border: 2px solid rgba(0, 149, 255, 0.3);
    border-radius: 50px;
    padding: 17px 52px;
    transition: 0.3s;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    svg {
      margin-left: 10px;
      transition: 0.3s;
      font-size: 24px;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      svg {
        transform: rotate(-45deg);
      }
    }
  }

  .app-convert-visitors-nav {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 100%;

    .slick-track {
      display: flex;
      flex-direction: column;
      transform: none !important;
    }

    .slick-slide {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;

      &.slick-current {
        color: ${({ theme }) => theme.colors.primary};
        background: transparent;
        &::before {
          content: "";
          height: 54px;
          width: 4px;
          background: #e6e6e6;
          border-radius: 2px;
          position: absolute;
          left: 0px;
          top: 8px;
        }
        &::after {
          content: "";
          height: 0%;
          width: 4px;
          background: ${({ theme }) => theme.colors.primary};
          border-radius: 2px;
          position: absolute;
          left: 0px;
          top: 8px;
          animation: progressHeight 4.5s linear infinite;
        }
        .nav-item .tab-btn {
          &::before {
            background: ${({ theme }) => theme.colors.primary};
          }
        }
      }

      .nav-item {
        padding-top: 19px;
        padding-bottom: 19px;
        position: relative;
        border: none;
        padding-left: 38px;
        max-width: max-content !important;
        width: 100% !important;

        .tab-btn {
          font-weight: 700;
          line-height: 24px;
          text-transform: uppercase;
          span {
            white-space: nowrap;
          }
          &::before {
            content: "";
            height: 8px;
            width: 8px;
            background: #e6e6e6;
            border-radius: 50%;
            position: absolute;
            left: 15px;
            top: 30px;
          }
        }
      }
    }
  }

  .convert-visitors-slider-right {
    padding-top: 76px;
    .lead-generation-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      p {
        margin-bottom: 0;
      }
    }

    .slider-item {
      display: flex !important;
    }

    .slider-item-left {
      flex: 0 0 auto;
      width: 400px;
    }

    .convert-visitors-text {
      &.one,
      &.four {
        padding-top: 10%;
      }
      .section-title {
        margin-bottom: 35px;
      }
      ul {
        list-style: url(/src/assets/images/icons/list-check.svg);
        margin-left: -10px;
        li {
          font-size: 16px;
          font-weight: 600;
          line-height: 220%;
        }
      }
    }
  }

  .protect-data-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    .protect-data-content {
      display: flex;
      align-items: center;
      gap: 14px;
      .protect-data-img {
        min-height: 50px;
        min-width: 50px;
        max-height: 50px;
        max-width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors.whiteColor};
        border: 1px solid rgba(0, 149, 255, 0.3);
        border-radius: 10px;
      }
      .protect-data-text {
        max-width: 140px;
        p {
          color: ${({ theme }) => theme.colors.title};
          margin-bottom: 0px;
        }
      }
    }
  }

  @keyframes progressHeight {
    from {
      height: 0%;
    }

    to {
      height: 100%;
    }
  }

  @keyframes progressWidth {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  @media screen and (max-width: 991px) {
    .app-convert-visitors-nav {
      justify-content: flex-start;
      margin-bottom: 60px;

      .slick-track {
        flex-direction: row;
      }

      .slick-slide {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        &.slick-current {
          &::before {
            width: 100%;
            height: 4px;
          }

          &::after {
            width: 0%;
            height: 4px;
            animation: progressWidth 4.5s linear infinite;
          }
        }

        .nav-item {
          padding-left: 38px;

          .tab-btn {
            span {
              white-space: normal;
            }
            &::before {
              left: 15px;
            }
          }
        }
      }
    }

    .convert-visitors-slider-right {
      .slider-item-left {
        flex: 0 0 auto;
        width: 300px;
      }
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
        gap: 20px;
        p {
          margin-bottom: 4px !important;
        }
        &:nth-last-child(1) {
          padding-bottom: 40px;
        }
      }
    }
    .protect-data-section {
      .protect-data-content {
        .protect-data-text p {
          margin-bottom: 0px !important;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 60px;
    .convert-visitors-text {
      padding-bottom: 50px;
    }

    .app-convert-visitors-nav {
      justify-content: flex-start;
      margin-bottom: 60px;

      .slick-slider {
        width: 100%;
      }

      .slick-track {
        flex-direction: row;
        flex-wrap: no-wrap;
        justify-content: space-between;
      }

      .slick-slide {
        width: 23% !important;

        &::before {
          content: "";
          width: 100%;
          height: 4px;
          background: #e6e6e6;
          border-radius: 2px;
          position: absolute;
          left: 0px;
          top: 8px;
        }

        &.slick-current {
          &::before {
            width: 100%;
            height: 4px;
          }

          &::after {
            width: 0%;
            height: 4px;
            animation: progressWidth 4.5s linear infinite;
          }
        }

        .nav-item {
          width: 100%;
          padding: 0px;
          background-color: green;

          .tab-btn {
            span {
              display: none;
            }
            &::before {
              display: none;
            }
          }
        }
      }
    }

    .convert-visitors-slider-right {
      .slider-item {
        flex-direction: column;
      }

      .slider-item-left {
        flex: 0 0 auto;
        width: 200px;
      }
    }

    .convert-visitors-slider-right {
      padding-top: 120px;
      &.app {
        padding-top: 0px;
      }
      .lead-generation-list {
        &:nth-last-child(1) {
          padding-bottom: 0px;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    /*-- app landing page start --*/
    .app-convert-visitors-nav {
      top: -440px;
    }
    .convert-visitors-slider-right {
      padding-top: 120px;
      margin-top: 0px;
      &.app {
        padding-top: 0px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .app-convert-visitors-nav {
      top: -480px;
    }
  }
`;

export default ConvertVisitorsStyle;
