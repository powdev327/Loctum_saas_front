import styled from "styled-components";

const BusinessHowWorkStyle = styled.section`
  padding: 132px 0 36px 0;

  .how-works-title {
    margin-bottom: 42px;
    h3 {
      margin-bottom: 19px;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .how-works-card {
    margin-bottom: 30px;
    padding: 40px 30px 32px 30px;
    border-radius: 30px;
    transition: 0.3s;

    a {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 15px;
      height: 29px;
      span {
        font-size: 15px;
        font-weight: 700;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.primary};
        display: none;
        transition: 0.3s;
      }
      img {
        filter: brightness(0);
        transition: 0.3s;
      }
    }
    &:hover {
      a {
        span {
          display: block;
        }
        img {
          filter: none;
          transform: rotate(-45deg);
        }
      }
    }

    &.card-1 {
      background-color: ${({ theme }) => theme.colors.blueGray};
    }
    &.card-2 {
      background-color: #f8f0e6;
    }
    &.card-3 {
      background-color: #f6eafe;
    }

    &-icon {
      margin-bottom: 40px;
    }

    &-content {
      h4 {
        margin-bottom: 16px;
        font-size: 18px;
        line-height: 26px;
      }
      p {
        margin-bottom: 25px;
      }
      a {
        transition: 0.3s;
        img {
          width: 15px;
          height: 12px;
          transition: 0.3s;
        }
        &:hover {
          img {
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 70px 0px 0px 0px;
    .how-works-title {
      margin-bottom: 40px;
      h3 {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 30px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
  }
`;

export default BusinessHowWorkStyle;
