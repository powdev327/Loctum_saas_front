import styled from "styled-components";

const AppWhyChooseStyle = styled.section`
  padding-top: 80px;
  padding-bottom: 110px;

  .app-chose-us-content {
    .app-chose-title {
      max-width: 600px;
      margin: auto;
      margin-bottom: 67px;
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-weight: 800;
      font-size: 40px;
      line-height: 150%;
      text-align: center;
      color: ${({ theme }) => theme.colors.title};
      display: none;
      &-defult {
        display: block;
      }
      &.active {
        display: block;
        //animation: animatedText 2s linear infinite;
        animation: animatedText 0.75s linear;
      }
    }
  }
  .app-chose-us-card {
    cursor: pointer;
    margin-bottom: 30px;
    .app-chose-card {
      overflow: hidden;
      text-align: center;
      padding: 44px 30px 35px 30px;
      border-radius: 15px;
      border: 2px solid transparent;
      cursor: pointer;
      transition: 0.3s;
      position: relative;
      overflow: hidden;
      .app-chose-icon {
        background: ${({ theme }) => theme.colors.whiteColor};
        width: 100%;
        position: relative;
        z-index: 1;
      }

      h6 {
        margin-bottom: 0px;
        padding-bottom: 29px;
        font-weight: 700;
        background: ${({ theme }) => theme.colors.whiteColor};
        padding-top: 21px;
        position: relative;
        z-index: 1;
      }

      p {
        opacity: 0;
        color: ${({ theme }) => theme.colors.whiteColor};
        transition: 0.4s;
        //transform: translateY(-100%);
        margin-top: -150px;
        z-index: 0;
      }
    }
    &:hover {
      min-height: auto;
      .app-chose-card {
        border: 2px solid ${({ theme }) => theme.colors.blackColor}14;
        p {
          color: ${({ theme }) => theme.colors.textColor};
          opacity: 1;
          //transform: translateY(0%);
          margin-top: 0px;
        }
      }
    }
  }

  @keyframes animatedText {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }

    to {
      opacity: 1;
      transform: translateY(-0%);
    }
  }

  @media screen and (max-width: 991px) {
    .app-chose-us-content {
      .app-chose-title {
        font-size: 32px;
      }
    }
    .app-chose-us-card {
      .app-chose-card {
        min-height: 135px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 50px;
    .app-chose-us-content {
      .app-chose-title {
        margin-bottom: 30px;
      }
    }
  }
`;

export default AppWhyChooseStyle;
