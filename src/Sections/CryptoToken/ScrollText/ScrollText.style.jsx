import styled from "styled-components";

import BgImg from "../../../assets/images/crypto-token/dotted-bg.svg";

const ScrollTextStyle = styled.section`
  background: url(${BgImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 54px 0px;
  overflow: hidden;
  .scroll-text-inner {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding: 0px;
      margin: 0px;
      li {
        margin-right: 38px;
        font-family: ${({ theme }) => theme.fonts.quantico};
        line-height: 100%;
        font-size: 100px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.whiteColor};
        text-transform: uppercase;
      }
    }
  }

  @media screen and (max-width: 1499px) {
    .scroll-text-inner {
      ul {
        li {
          font-size: 90px;
        }
      }
    }
  }
  @media screen and (max-width: 1199px) {
    .scroll-text-inner {
      ul {
        li {
          font-size: 70px;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding: 40px 0px;
    .scroll-text-inner {
      ul {
        li {
          font-size: 60px;
        }
      }
    }
  }

  @media screen and (max-width: 575px) {
    padding: 30px 0px;
    .scroll-text-inner {
      ul {
        li {
          font-size: 32px;
          margin-right: 24px;
        }
      }
    }
  }
`;

export default ScrollTextStyle;
