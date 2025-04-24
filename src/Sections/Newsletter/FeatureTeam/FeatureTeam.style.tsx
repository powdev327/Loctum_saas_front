import styled from "styled-components";

import ArrowImg from "../../../assets/images/icons/arrow-right-white.svg";

const FeatureTeamStyle = styled.section`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.whiteColor};

  .feature-team-slider-nav {
    .slick-list {
      padding: 0 !important;
    }

    .slick-track {
      width: 100% !important;
      transform: translate3d(0px, 0px, 0px) !important;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 20px;
      //flex-wrap: wrap;
      .slick-slide {
        width: 4%;
        transition: 0.3s;
        &.slick-current {
          width: 92% !important;
          .slider-item {
            &::before,
            &::after {
              opacity: 0;
            }
          }
          .slider-progress {
            opacity: 1;

            .progress-done {
              animation: featureTeamProgress 6.2s infinite linear;
            }
          }
        }
      }
    }

    .slider-item {
      cursor: pointer;
      height: 460px;
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      transition: 0.3s;

      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0.7) 100%
        );
        transition: 0.3s;
      }

      &::after {
        position: absolute;
        content: url(${ArrowImg});
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        transition: 0.3s;
        opacity: 1;
      }

      .slider-progress {
        position: absolute;
        overflow: hidden;
        content: "";
        bottom: 30px;
        left: 20px;
        width: calc(100% - 40px);
        height: 8px;
        background: ${({ theme }) => theme.colors.whiteColor}33;
        border-radius: 4px;
        opacity: 0;
        transition: 0.3s;

        .progress-done {
          position: absolute;
          top: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background: ${({ theme }) => theme.colors.whiteColor}80;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        transition: 0.3s;
      }
    }
  }

  @keyframes featureTeamProgress {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }

  .feature-team-slider-for {
    .slider-item {
      h2 {
        margin-bottom: 40px;
        font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: ${({ theme }) => theme.colors.title};
      }

      ul {
        padding: 0;
        margin: 0;
        margin-top: 30px;
        max-width: 354px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: space-between;
        flex-wrap: wrap;
        list-style: none;
        li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          font-size: 15px;
          line-height: 26px;
          color: ${({ theme }) => theme.colors.title};

          svg {
            font-size: 20px;
            color: ${({ theme }) => theme.colors.iconColor2};
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .feature-team-slider-nav .slick-track {
      gap: 15px;
    }
    .feature-team-slider-for .slider-item h2 {
      font-size: 32px;
      line-height: 44px;
    }
    .feature-team-slider-for {
      .slider-item {
        h2 {
          margin-top: 35px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0px;

    .feature-team-slider-for .slider-item ul {
      gap: 15px;
    }
  }

  @media screen and (max-width: 374px) {
    .feature-team-slider-for .slider-item h2 {
      font-size: 30px;
      line-height: 42px;
    }
  }
`;

export default FeatureTeamStyle;
