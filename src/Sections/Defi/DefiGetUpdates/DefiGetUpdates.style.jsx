import styled from "styled-components";

const DefiGetUpdatesStyle = styled.section`
  position: relative;

  .defi-get-updates-top {
    text-align: center;
    max-width: 912px;
    width: 100%;
    margin: auto;
    position: relative;
    z-index: 0;

    a {
      img {
        margin-bottom: 36px;
      }
    }
    .dotted-line {
      position: absolute;
      top: 0px;
      width: 100%;
      left: 0px;
      z-index: -1;
      top: -50px;
    }
  }

  .defi-get-updates-form {
    position: relative;
    z-index: 0;
    background: ${({ theme }) => theme.colors.whiteColor}1a;
    border-radius: 35px;
    max-width: 570px;
    width: 100%;
    padding: 10px;
    margin: auto;
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 80%;
      border: none;
      outline: none;
      overflow: hidden;
      background: transparent;
      padding: 5px 20px;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.whiteColor};
      &::placeholder {
        color: ${({ theme }) => theme.colors.whiteColor}80;
      }
    }
    button {
      background: ${({ theme }) => theme.colors.whiteColor}1a;
      border-radius: 35px;
      padding: 11px 38px;
      border: none;
      outline: none;
      overflow: hidden;
      &:hover {
        opacity: 0.5s;
      }
    }
  }

  .defi-get-update-card {
    padding: 40px 30px 33px 30px;
    background: ${({ theme }) => theme.colors.whiteColor}1a;
    border-radius: 20px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
    h5 {
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 18px;
      text-transform: uppercase;
      span {
        margin-right: 18px;
        img {
          max-width: 28px;
        }
      }
    }
    p {
      margin-bottom: 0px;
      color: ${({ theme }) => theme.colors.whiteColor}cc;
    }
  }

  @keyframes scale-up {
    to {
      transform: scale(600);
    }
  }

  @keyframes scale-down {
    from {
      transform: scale(600);
    }
    to {
      ransform: scale(0);
    }
  }

  @media screen and (max-width: 1199px) {
    .defi-get-update-card {
      padding: 20px;
      p {
        font-size: 14px;
      }
    }
  }
`;

export default DefiGetUpdatesStyle;
