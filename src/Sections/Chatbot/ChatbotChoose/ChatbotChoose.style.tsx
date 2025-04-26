import styled from "styled-components";

const ChatbotChooseStyle = styled.section`
  padding-top: 140px;
  padding-bottom: 220px;
  background: ${({ theme }) => theme.colors.whiteColor};
  .chatbot-why-choose-us-content {
    background: ${({ theme }) => theme.colors.chatbotGray};
    border-radius: 30px;
    padding: 112px 70px;
  }
  .chatbot-why-choose-us-left {
    min-height: 100%;
    position: relative;
    p {
      max-width: 400px;
      width: 100%;
      margin-top: 35px;
    }
    .chatbot-why-choose-img {
      position: absolute;
      left: 0px;
      bottom: -182px !important;
      //        transform: translateY(182px);
      transition: 0.5s;
      transform-style: preserve-3d;
    }
  }
  .chatbot-why-choose-us-right {
    min-height: 100%;
  }
  .chatbot-why-choose-info {
    margin-bottom: 50px;
    &:nth-last-child(1) {
      margin-bottom: 0px;
    }
    .chatbot-why-choose-icon {
      margin-bottom: 23px;
    }
    h5 {
      margin-bottom: 14px;
      font-weight: 700;
    }
    p {
      margin-bottom: 0px;
    }
  }

  @media screen and (max-width: 991px) {
    padding-bottom: 140px;
    .chatbot-why-choose-us-content {
      padding: 70px;
    }
    .chatbot-why-choose-us {
      &-left {
        padding-bottom: 30%;
      }
      &-right {
        padding-top: 50%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 50px;
    padding-bottom: 80px;
    .chatbot-why-choose-us-content {
      padding: 50px;
    }
  }
  @media screen and (max-width: 575px) {
    .chatbot-why-choose-us-left {
      .chatbot-why-choose-img {
        max-width: 250px;
      }
    }
    .chatbot-why-choose-us-content {
      padding: 40px 20px;
    }
    .chatbot-why-choose-us-right {
      padding-top: 65%;
    }
  }
  @media screen and (max-width: 425px) {
    .chatbot-why-choose-us-right {
      padding-top: 80%;
    }
  }
`;

export default ChatbotChooseStyle;
