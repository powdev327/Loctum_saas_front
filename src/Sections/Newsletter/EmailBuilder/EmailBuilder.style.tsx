import styled from "styled-components";

const EmailBuilderStyle = styled.section`
  padding-top: 132px;
  padding-bottom: 110px;
  background: ${({ theme }) => theme.colors.whiteColor};

  .title {
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 52px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.primary};
  }

  .powerful-email-wrapper {
    position: relative;
  }

  .email-builder-slider-nav {
    .slick-track {
      display: flex;
      flex-direction: column;
    }

    .slick-slide {
      width: 100% !important;

      &.slick-current {
        .email-collaps-item {
          padding-bottom: 0px;
          &::before,
          &::after {
            display: block;
          }
          .email-collaps-text {
            p {
              display: block;
              position: relative;
            }
          }
        }
      }
    }
  }

  .email-collaps-item {
    display: flex !important;
    align-items: flex-start;
    gap: 28px;
    position: relative;
    padding-bottom: 50px;
    transition: 0.3s;
    background: ${({ theme }) => theme.colors.whiteColor};

    &::before,
    &::after {
      position: absolute;
      content: "";
      top: 80px;
      left: 30px;
      width: 2px;
      display: none;
    }

    &::before {
      height: 100%;
      background: ${({ theme }) => theme.colors.blackColor}1a;
    }

    &::after {
      background: ${({ theme }) => theme.colors.primary};
      animation: progressHeight 7.6s linear infinite;
    }

    .email-collaps-number {
      background: ${({ theme }) => theme.colors.whiteColor};
      border: 2px solid ${({ theme }) => theme.colors.blackColor}1a;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-right: 8px;
      min-height: 70px;
      min-width: 70px;
      max-height: 70px;
      max-width: 70px;
      border-radius: 50%;
      font-size: 36px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.blackColor};
      font-family: ${({ theme }) => theme.fonts.caveat};
      position: relative;
      z-index: 1;
      &::after {
        content: "";
        height: 19px;
        width: 15px;
        position: absolute;
        bottom: -21px;
        background: ${({ theme }) => theme.colors.whiteColor};
      }
      &::before {
        content: "";
        height: 19px;
        width: 15px;
        position: absolute;
        top: -21px;
        background: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    .email-collaps-text {
      h3 {
        margin-top: 12px;
        margin-bottom: 0px;
      }
      p {
        padding-top: 21px;
        display: none;
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

  .powerful-email-left {
    .email-collaps-list {
      list-style: none;
      padding: 0px;
      position: relative;
      .timeline-innerline {
        left: 34px;
        top: 0px;
      }
    }
  }

  @keyframes emailBuilderAnimetion {
    0% {
      height: 3%;
    }
    100% {
      height: 85%;
    }
  }

  .email-builder-slider-for {
    background: linear-gradient(
      180deg,
      #d3e1ff 0%,
      #ecf1f8 45.85%,
      #ffeaef 100%
    );
    border-radius: 30px;
    padding: 50px 25px;
    max-width: 540px;
    margin-left: auto;

    .slider-item {
      margin-left: auto;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 30px;
      position: relative;
    }
  }

  .timeline-innerline {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.blackColor}1a;

    .timeline-progress {
      width: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (max-width: 1199px) {
    .email-collaps-item {
      gap: 20px;
      .email-collaps-text {
        h3 {
          font-size: 24px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .email-collaps-item {
      padding-bottom: 20px;
      gap: 20px;

      &::before,
      &::after {
        left: 22px;
      }

      .email-collaps-number {
        min-height: 50px;
        min-width: 50px;
        max-height: 50px;
        max-width: 50px;
        font-size: 26px;
      }

      .email-collaps-text {
        h3 {
          font-size: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 80px;
  }
`;

export default EmailBuilderStyle;
