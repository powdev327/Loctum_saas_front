import styled from "styled-components";

const IntegrationStyle = styled.section`
  padding: 120px 0;
  background-color: ${({ theme }) => theme.colors.bgHero};
  position: relative;
  z-index: 0;

  &.chatbot {
    background-color: ${({ theme }) => theme.colors.chatbotGreen};
    .integrate-element-list {
      .list-item {
        background: #19353e;
      }
    }
    .explore-btn {
      background: #19353e;
      transition: 0.4s;
      &:hover {
        img {
          transform: rotate(-45deg);
          transition: 0.4s;
        }
      }
    }
    .bg-shape {
      .bg-line {
        position: absolute;
        bottom: 0px;
        width: 100%;
        height: 566px;
        object-fit: cover;
        z-index: 0;
      }
    }
  }

  .bg-img {
    position: absolute;
    z-index: -1;

    &.img-1 {
      top: 170px;
    }

    &.img-2 {
      top: 52%;
      left: 4%;
    }

    &.img-3 {
      bottom: 0;
      left: 22%;
    }
  }

  .integrate-element-list {
    position: relative;
    top: 0;

    .list-item {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #2d2e50;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;

      img {
        width: 45px;
        height: 45px;
      }

      &:nth-child(1) {
        top: 220px;
        left: 10%;
        transform: translateX(-50%);
      }

      &:nth-child(2) {
        top: 110px;
        left: 22%;
        transform: translateX(-50%);
      }

      &:nth-child(3) {
        top: 30px;
        left: 35%;
        transform: translateX(-50%);
      }

      &:nth-child(4) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }

      &:nth-child(5) {
        top: 30px;
        right: 35%;
        transform: translateX(50%);
      }

      &:nth-child(6) {
        top: 110px;
        right: 22%;
        transform: translateX(50%);
      }

      &:nth-child(7) {
        top: 220px;
        right: 10%;
        transform: translateX(50%);
      }
    }
  }

  .integration-element-title {
    margin-top: 153px;
    margin-bottom: 110px;
    text-align: center;
    position: relative;
    z-index: 1;

    h4 {
      margin-bottom: 17px;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
    }

    h2 {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;
      color: ${({ theme }) => theme.colors.whiteColor};
    }
  }

  .integration-element-button {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 991px) {
    &.chatbot {
      overflow-x: hidden;
    }
  }
  @media screen and (max-width: 767px) {
    padding: 80px 0px;
    .integrate-element-list{
      .list-item{
        height: 60px;
        width: 60px;
        padding: 15px;
      }
    } 
    .integration-element-title {
      margin-top: 130px;
      margin-bottom: 45px;
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
  }
`;

export default IntegrationStyle;
