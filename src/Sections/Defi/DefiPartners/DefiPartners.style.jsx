import styled from "styled-components";

const DefiPartnersStyle = styled.section`
  position: relative;
  z-index: 111;
  margin-top: -115px;
  padding-bottom: 132px;

  .defi-backed-list {
    padding-top: 10px;
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      padding: 0px;
      margin: 0px;
      gap: 20px;
      li {
        max-width: 218px;
        width: 100%;
        max-height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: ${({ theme }) => theme.colors.whiteColor}0a;
        min-height: 120px;
        padding: 20px 0px;
        border-radius: 20px;
        padding: 30px;
        transition: 0.3s;
        overflow: hidden;
        &::after {
          content: "";
          width: 100%;
          top: 0%;
          position: absolute;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.15) 0%,
            rgba(255, 255, 255, 0.075) 49.48%,
            rgba(255, 255, 255, 0.15) 100%
          );
          transition: 0.3s;
          padding: 60px 0px;
          opacity: 0;
        }
        img {
          z-index: 1;
          position: relative;
          opacity: 0.5;
          transition: 0.3s;
        }
        &:hover {
          &::after {
            width: 100%;
            opacity: 1;
          }
          a {
            img {
              animation: imgHovEffect 200ms linear;
              transform: translateY(-111%);
              opacity: 1;
            }
          }
        }
        a {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          min-height: 30px;
          max-height: 30px;
          overflow: hidden;
          img {
            margin-bottom: 5px;
          }
        }
      }
    }
  }

  @keyframes imgHovEffect {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-111%);
    }
  }

  @media screen and (max-width: 1199px) {
    .defi-backed-list {
      ul {
        li {
          min-height: 100px;
          max-height: 100px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding-bottom: 100px;
  }
  @media screen and (max-width: 767px) {
    margin-top: -160px;
    padding-bottom: 75px;
  }
  @media screen and (max-width: 575px) {
    .defi-backed-list {
      ul {
        column-gap: 4%;
        li {
          width: 48%;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    margin-top: -88px;
    .defi-backed-list {
      ul {
        li {
          min-height: 70px;
          max-height: 70px;
          padding: 10px;
          a {
            min-height: 20px;
            max-height: 20px;
            img {
              width: 80px;
            }
          }
        }
      }
    }
  }
`;

export default DefiPartnersStyle;
