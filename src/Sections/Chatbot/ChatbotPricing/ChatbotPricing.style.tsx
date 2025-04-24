import styled from "styled-components";

const ChatbotPricingStyle = styled.section`
  padding-top: 132px;
  padding-bottom: 70px;
  background: ${({ theme }) => theme.colors.chatbotGray};
  .chatbot-best-pricing-card {
    min-height: 100%;
    border-radius: 30px;
    padding: 33px 40px 40px 40px;
    &:hover {
      .card-header {
        img {
          transform: rotate(-45deg);
        }
      }
    }
    &1 {
      background: ${({ theme }) => theme.colors.whiteColor};
      .card-header {
        p {
          color: ${({ theme }) => theme.colors.title};
          max-width: 175px;
          width: 100%;
          font-weight: 600;
        }
        img {
          filter: brightness(0%);
          transition: 0.4s;
        }
      }
      .card-body {
        h3 {
          span {
            color: ${({ theme }) => theme.colors.textColor};
          }
        }

        .chatbot-best-pricing-card-btn {
          border: 2px solid rgba(0, 149, 255, 0.3);
          border-radius: 50px;
          color: ${({ theme }) => theme.colors.primary};
          span {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }

    &2 {
      background: #032368;
      .card-header {
        p {
          color: ${({ theme }) => theme.colors.whiteColor};
          max-width: 219px;
          width: 100%;
          font-weight: 600;
        }
        img {
          transition: 0.4s;
        }
      }
      .card-body {
        h3 {
          color: ${({ theme }) => theme.colors.whiteColor};
          span {
            color: ${({ theme }) => theme.colors.whiteColor};
          }
        }
        p {
          color: ${({ theme }) => theme.colors.whiteColor};
        }

        .chatbot-best-pricing-card-btn {
          border: 2px solid rgba(0, 149, 255, 0.3);
          border-radius: 50px;
          background: ${({ theme }) => theme.colors.whiteColor};
          border: 2px solid transparent;
          span {
            color: ${({ theme }) => theme.colors.blackColor};
          }
        }
      }
    }

    &3 {
      background: #ede4db;
      .card-header {
        p {
          color: ${({ theme }) => theme.colors.title};
          max-width: 232px;
          width: 100%;
          font-weight: 600;
        }
        img {
          filter: brightness(0%);
          transition: 0.4s;
        }
      }
      .card-body {
        h3 {
          span {
            color: ${({ theme }) => theme.colors.textColor};
          }
        }

        .chatbot-best-pricing-card-btn {
          border: 2px solid rgba(0, 149, 255, 0.3);
          border-radius: 50px;
          color: ${({ theme }) => theme.colors.primary};
          span {
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      }
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 32px;
      img {
        margin-top: 15px;
      }
    }
    .card-body {
      .pricing-icon {
        margin-bottom: 24px;
      }
      h3 {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 24px;
        span {
          font-size: 15px;
          line-height: 30px;
          font-weight: 500;
          margin-left: 8px;
          font-family: ${({ theme }) => theme.fonts.dmSans} !important;
        }
      }
      p {
        margin-bottom: 29px;
      }
      .chatbot-best-pricing-card-btn {
        width: 100%;
        padding: 17px;
        font-size: 15px;
        line-height: 26px;
        font-weight: 700;
        border-radius: 50px;
        color: ${({ theme }) => theme.colors.primary};
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        z-index: 0;
        //            @include btnInnerStyle();
        &:hover,
        &:focus {
          //            @include hoverBtnInnerStyle();
        }
      }
    }
  }
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

  @media screen and (max-width: 767px) {
    padding-top: 70px;
    padding-bottom: 40px;
    .chatbot-best-pricing-card {
      .card-header {
        margin-bottom: 16px;
      }
      .card-body {
        .pricing-icon {
          margin-bottom: 10px;
        }
        h3 {
          margin-bottom: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 425px) {
    .chatbot-best-pricing-card {
      padding: 30px 25px;
    }
  }
`;

export default ChatbotPricingStyle;
