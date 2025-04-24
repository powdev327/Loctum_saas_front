import styled from "styled-components";

import BgImg from "../../../assets/images/chatbot/chatbot-banner-grident.svg";

const ChatbotBannerStyle = styled.section`
  background: #0d333f;
  padding-top: 90px;
  position: relative;
  &.chatbot-banner {
    position: relative;
    z-index: 1;
    background: ${({ theme }) => theme.colors.chatbotPrimary} !important;
    background: url(${BgImg});
    background-size: cover;
    background-position: left center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .hero-content-list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 35px;
      margin-top: 16px;
      list-style: none;
      padding: 0px;
      .list-item {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        svg {
          color: ${({ theme }) => theme.colors.whiteColor};
          font-size: 22px;
          margin-right: 12px;
        }
      }
      p {
        margin-bottom: 10px;
      }
    }

    .chatbot-banner-text {
      position: relative;
      z-index: 1;
      min-height: 800px;
      .title {
        font-size: 60px;
        font-weight: 700;
        line-height: 80px;
        text-align: left;
        span {
          position: relative;
          padding: 0px !important;

          &::after {
            content: "";
            height: 5px;
            border-radius: 2.5px;
            background: #ffc847;
            width: 100%;
            position: absolute;
            left: 0px;
            bottom: 0px;
          }

          img {
            position: absolute;
            top: -10px;
            right: -30px;
          }
        }
      }

      p {
        margin-top: 8px;
      }
    }
  }

  .chatbot-banner-video {
    position: relative;
    &.v8banner-video {
      video {
        min-height: 800px;
      }
    }
    .chatbot-banner-video-overlay {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0px;
      right: 0px;
      width: 100%;
      background: linear-gradient(
        90deg,
        #041646 4.17%,
        rgba(4, 22, 70, 0.520833) 51.04%,
        rgba(4, 22, 70, 0) 100%
      );
    }
  }
  .start-free-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 35px;
    padding: 10px;
    max-width: 470px;
    width: 100%;
    max-height: 70px;
    .form-input {
      color: ${({ theme }) => theme.colors.title};
      background: transparent;
      border: none;
      outline: none;
      padding: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
    }
    .bg-blue-btn {
      padding: 12px 40px;
      border: none;
      outline: none;
      &:hover {
        opacity: 0.8;
      }
    }
  }

  .banner-chat-section {
    max-width: 460px;
    width: 100%;
    padding-top: 15px;
    overflow: hidden;
  }

  .v8banner-text {
    max-width: 607px;
    padding-right: 49px;
    min-height: 760px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .title {
      line-height: 1.25;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 18px;
    }
    p {
      font-size: 18px;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 48px;
    }
  }

  .v8banner-video {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    overflow: hidden;
    position: absolute;
    right: 0px;
    top: 90px;
    video {
      width: 100%;
      min-height: 760px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1199px) {
    &.chatbot-banner {
      .chatbot-banner-text {
        max-width: 430px;
        min-height: 650px;
        .title {
          font-size: 40px;
          font-weight: 700;
          line-height: 60px;
        }
      }
    }
    .chatbot-banner-video {
      .chatbot-banner-video-overlay {
        .banner-chat-section {
          max-width: 345px;
          video {
            min-height: 600px;
            max-width: auto;
          }
        }
      }
    }
    .v8banner-video {
      video {
        min-height: 500px;
      }
    }
    .start-free-form {
      max-height: 64px;
      .bg-blue-btn {
        padding: 8px 20px;
      }
    }

    .hero-content-list .list-item p {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
    .v8banner-video {
      top: 70px;
      video {
        min-height: 470px;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    padding: 140px 0 0;
    /*-- ChatBot Start --*/
    &.chatbot-banner {
      .chatbot-banner-text {
        padding-bottom: 0px;
        min-height: 550px;
        .title {
          text-align: center;
        }
      }
    }
    &.chatbot-banner {
      padding: 70px 0 0 0;
      padding-top: 140px;
    }
    .chatbot-banner-video {
      &.v8banner-video {
        video {
          min-height: 600px;
        }
      }
    }
    .v8banner-video {
      position: relative;
      top: 0px;
      width: 100%;
    }
    &.chatbot-banner {
      .chatbot-banner-text {
        padding-right: 0px;
        margin: auto;
        p {
          text-align: center;
        }
      }
      .hero-content-list {
        justify-content: center;
        margin: auto;
        margin-top: 0px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .chatbot-banner-video {
      .chatbot-banner-video-overlay {
        .banner-chat-section {
          max-width: 275px;
          video {
            min-height: 482px;
          }
        }
      }
      &.v8banner-video {
        video {
          min-height: 482px;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    &.chatbot-banner {
      .hero-content-list {
        gap: 16px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    &.chatbot-banner {
      .hero-content-list {
        margin-top: 30px;
        li {
          margin-bottom: -5px;
        }
      }
    }

    &.chatbot-banner {
      .chatbot-banner-text {
        min-height: 600px;
        padding-bottom: 20px;
      }
    }
    .start-free-form {
      flex-direction: column;
      max-height: inherit;
      background: transparent;
      padding: 0px;
      .form-input {
        width: 100%;
        padding: 12px 25px;
        background: ${({ theme }) => theme.colors.whiteColor} !important;
        border-radius: 35px;
      }
      .bg-blue-btn {
        width: 100%;
        padding: 12px 14px;
      }
    }
  }
  @media screen and (max-width: 374px) {
  }
  @media screen and (min-width: 768px) {
  }
`;

export default ChatbotBannerStyle;
