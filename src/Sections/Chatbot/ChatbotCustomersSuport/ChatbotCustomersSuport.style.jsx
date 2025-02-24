import styled from "styled-components";

import ShapeImg1 from "../../../assets/images/chatbot/card-shape1.svg";
import ShapeImg2 from "../../../assets/images/chatbot/card-shape2.svg";
import bulletImg from "../../../assets/images/chatbot/list-bullet.svg";

const ChatbotCustomersSuportStyle = styled.section`
  padding-bottom: 140px;
  background: ${({ theme }) => theme.colors.whiteColor};
  .chatbot-customers-suport-card {
    border-radius: 30px;
    padding: 50px 50px 0px 50px;
    position: relative;
    overflow: hidden;
    min-height: 100%;
    max-height: 695px;
    overflow: hidden;
    &1 {
      background: #0048ac;
      &::after {
        content: url(${ShapeImg1});
        top: 0px;
        left: 0px;
        position: absolute;
        overflow: hidden;
        z-index: 0;
      }
    }
    &2 {
      background: #0f5267;
      &::after {
        content: url(${ShapeImg2});
        bottom: -10px;
        left: 0px;
        position: absolute;
        overflow: hidden;
        z-index: 0;
      }
    }
    .card-title {
      background: ${({ theme }) => theme.colors.whiteColor}1a;
      border-radius: 20px;
      padding: 8px 20px;
      width: max-content;
      margin-bottom: 17px;
      color: ${({ theme }) => theme.colors.whiteColor};
      text-transform: uppercase;
      line-height: 24px;
      position: relative;
      z-index: 1;
    }
    .card-subtitle {
      position: relative;
      z-index: 1;
      margin-bottom: 26px;
    }
    .card-pragraph {
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
      color: ${({ theme }) => theme.colors.whiteColor};
      max-width: 398px;
      margin-bottom: 20px;
    }
    ul {
      list-style: url(${bulletImg});
      padding-left: 20px;
      margin-bottom: 35px;
      position: relative;
      z-index: 1;
      li {
        color: ${({ theme }) => theme.colors.whiteColor};
        line-height: 36px;
      }
    }
    .card-img {
      min-height: 150px;
      z-index: 111;
      transition: 0s;
      transform-style: preserve-3d;
      &1 {
        max-width: 447px;
        margin: auto;
      }
      &2 {
        max-width: 298px;
        margin-left: auto;
        margin-top: -100px;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .chatbot-customers-suport-card {
      min-height: 100%;
      max-height: auto;
      max-height: 815px;
      padding: 25px;
      .card-subtitle {
        font-size: 25px;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 60px;
    .chatbot-customers-suport-card {
      min-height: auto;
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 575px) {
    .chatbot-customers-suport-card {
      padding: 40px 20px;
    }
  }
`;

export default ChatbotCustomersSuportStyle;
