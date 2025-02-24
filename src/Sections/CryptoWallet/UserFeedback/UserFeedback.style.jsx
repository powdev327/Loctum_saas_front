import styled from "styled-components";

const UserFeedbackStyle = styled.section`
  padding-bottom: 97px;
  position: relative;
  .crypto{
    position: relative;
    z-index: 11;
  }
  .container {
    position: relative;
  }
  .dTXPaW.crypto {
    position: relative;
    z-index: 4;
  }
  .layer-1 {
    height: 45%;
    width: 100%;
    background: linear-gradient(
      180deg,
      #101722 42.19%,
      rgba(16, 23, 34, 0) 100%
    );
    position: absolute;
    top: 20px;
    left: 0px;
    z-index: 3;
  }
  .layer-2 {
    height: 30%;
    width: 100%;
    background: linear-gradient(180deg, rgba(16, 23, 34, 0) 0%, #101722 75.52%);
    position: absolute;
    bottom: 0px;
    left: 0px;
    z-index: 3;
  }
  .feedback-stop-btn {
    background: ${({ theme }) => theme.colors.whiteColor}33;
    backdrop-filter: blur(2.5px);
    height: 68px;
    width: 68px;
    overflow: hidden;
    border-radius: 50%;
    margin: auto;
    margin-top: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    .play {
      display: none;
    }
    .pause {
      display: block;
    }
    &.active {
      .play {
        display: block;
      }
      .pause {
        display: none;
      }
    }
  }
  .feedback-content {
    max-height: 700px;
    overflow: hidden;
    position: relative;
    z-index: 2;
  }
  .feedback-card {
    background: ${({ theme }) => theme.colors.whiteColor}0d;
    border-radius: 30px;
    padding: 28px 30px;
    margin-bottom: 30px;
    .people {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      .people-img {
        border-radius: 50%;
        overflow: hidden;
        height: 35px;
        width: 35px;
        position: relative;
        img {
          position: absolute;
          top: 0px;
          left: 0px;
          height: 100%;
          width: 100%;
        }
      }
      .people-text {
        p {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          margin-bottom: 0px;
          font-weight: 700;
          margin-top: 0px !important;
          line-height: 20px;
          span {
            font-weight: 500;
            font-size: 13px;
            color: ${({ theme }) => theme.colors.whiteColor}cc;
          }
        }
      }
    }
    p {
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.whiteColor}cc;
      margin-top: 16px;
    }
  }

  .feedback-card-list {
    &.up {
      animation: translateUp 15s linear infinite;
      -webkit-animation: translateUp 15s linear infinite;
      &.active {
        animation: none;
      }
    }
    &.down {
      animation: translateDown 15s linear infinite;
      -webkit-animation: translateDown 15s linear infinite;
      &.active {
        animation: none;
      }
    }
  }

  @-webkit-keyframes translateUp {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-100%);
    }
  }

  @keyframes translateUp {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-100%);
    }
  }

  @-webkit-keyframes translateDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @keyframes translateDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 20px;
  }
`;

export default UserFeedbackStyle;
