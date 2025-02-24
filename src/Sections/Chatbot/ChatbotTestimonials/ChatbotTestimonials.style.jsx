import styled from "styled-components";

const ChatbotTestimonialsStyle = styled.section`
  padding-bottom: 140px;
  background: ${({ theme }) => theme.colors.chatbotGray};
  .chatbot-testmonial-content {
    max-width: 780px;
    margin: auto;
    text-align: center;
    .testmonial-title {
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.iconColor};
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 52px;
    }
    .testmonial-quote-text {
      font-size: 25px;
      font-weight: 500;
      line-height: 45px;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 25px;
    }
    .clint-content {
      .clint-img {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        margin: auto;
        margin-bottom: 17px;
        img {
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
      .clint-info {
        margin-bottom: 29px;
        span {
          font-size: 18px;
          font-weight: 700;
          line-height: 30px;
          color: ${({ theme }) => theme.colors.title};
        }
      }
    }

    .slick-dots {
      position: relative;
      bottom: 0px;
      max-width: 107px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      gap: 6px;
      li {
        height: 8px;
        width: 8px;
        padding: 0px;
        button {
          background: ${({ theme }) => theme.colors.blackColor}33;
          height: 8px;
          width: 8px;
          border-radius: 50%;
          opacity: 1;
          color: transparent;
          &:before {
            display: none;
          }
        }
        &.slick-active {
          width: 15px;
          button {
            width: 15px;
            border-radius: 20px;
            background: ${({ theme }) => theme.colors.title};
          }
        }
      }
    }
  }
  .testmonial-quote-icon {
    height: 100px;
    width: 100px;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffc847;
    margin: auto;
    margin-bottom: 47px;

    .circle-progress {
      position: absolute;
      z-index: 1;
      width: 100px;
      height: 100px;
    }

    .halfclip {
      width: 50%;
      height: 100%;
      right: 0px;
      position: absolute;
      overflow: hidden;
      transform-origin: left center;
    }

    .halfcircle {
      box-sizing: border-box;
      height: 100%;
      right: 0px;
      position: absolute;
      border: solid 3px transparent;
      border-radius: 50%;
    }

    .clipped {
      width: 200%;
    }

    .fixed {
      width: 100%;
      transform: rotate(135deg);
    }
  }

  .chatbot-testmonial-slider {
    .slick-current {
      .halfclip {
        animation: cliprotate 4.5s steps(2) infinite;
        -webkit-animation: cliprotate 4.5s steps(2) infinite;
      }

      .halfcircle {
        border-top-color: #b38d33;
        border-left-color: #b38d33;
      }

      .clipped {
        animation: rotate 2.25s linear infinite;
        -webkit-animation: rotate 2.25s linear infinite;
      }

      .fixed {
        animation: showfixed 4.5s steps(2) infinite;
        -webkit-animation: showfixed 4.5s linear infinite;
      }
    }
  }

  @keyframes cliprotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(-45deg);
    }
    100% {
      transform: rotate(135deg);
    }
  }

  @keyframes showfixed {
    0% {
      opacity: 0;
    }
    49.9% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 70px;
    .chatbot-testmonial-content {
      .testmonial-quote-text {
        font-size: 16px;
        line-height: 30px;
      }
    }
    .chatbot-testmonial-badge {
      padding-top: 50px;
    }
  }
`;

export default ChatbotTestimonialsStyle;
