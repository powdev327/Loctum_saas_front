import styled from "styled-components";

import NewsImg1 from "../../../assets/images/crypto-token/news_1.png";
import NewsImg2 from "../../../assets/images/crypto-token/news_2.png";
import NewsImg3 from "../../../assets/images/crypto-token/news_3.png";
import NewsImg4 from "../../../assets/images/crypto-token/news_4.png";
import NewsGrainImg from "../../../assets/images/crypto-token/news-grain.png";

const LatestNewsStyle = styled.section`
  padding-top: 122px;
  position: relative;
  .latest-news-title {
    padding-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.whiteColor}1f;
    gap: 20px;
    h2 {
      font-family: ${({ theme }) => theme.fonts.quantico};
      font-weight: 700;
      font-size: 60px;
      line-height: 80px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
    }
    a {
      color: ${({ theme }) => theme.colors.whiteColor};
      transition: 0.3s;
      img {
        filter: brightness(100);
        margin-left: 14px;
        transition: 0.3s;
      }
      &:hover {
        img {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .news-content {
    .news-row-section {
      position: relative;
      &::after {
        content: "";
        height: 60px;
        width: 50%;
        background: linear-gradient(
          90deg,
          rgba(208, 46, 190, 0.1) 0%,
          rgba(208, 46, 190, 0) 100%
        );
        position: absolute;
        left: 0px;
        z-index: 0;
        top: 32%;
      }
    }
    .news-row {
      padding: 25px 100px;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.colors.whiteColor}1f;
      position: relative;
      overflow: hidden;
      z-index: 1;
      h5 {
        font-family: ${({ theme }) => theme.fonts.quantico};
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.whiteColor}cc;
        font-weight: 700;
        line-height: 50px;
        margin-bottom: 0px;
      }
      h3 {
        font-family: ${({ theme }) => theme.fonts.quantico};
        line-height: 50px;
        color: ${({ theme }) => theme.colors.whiteColor};
        text-transform: uppercase;
        margin-bottom: 0px;
        padding-top: 20px;
      }
      .news-link {
        position: relative;
        z-index: 1;
      }
      .news-row-bg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        position: absolute;
        width: 100%;
        left: 0px;
        top: 100%;
        z-index: 0;
        transition: 0.3s;
        &.news1 {
          background: url(${NewsImg1});
        }
        &.news2 {
          background: url(${NewsImg2});
        }
        &.news3 {
          background: url(${NewsImg3});
        }
        &.news4 {
          background: url(${NewsImg4});
        }
        .overlay {
          background: url(${NewsGrainImg});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          height: 100%;
          padding: 75px;
        }
      }
      &:hover {
        .news-row-bg {
          transform: scale(1.3);
          top: 0px;
        }
      }

      .link {
        height: 29px;
        width: 24px;
        overflow: hidden;
        opacity: 0;
        position: absolute;
        right: 100px;
        top: 38%;
        z-index: 11;
        .link-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transform: rotate(-135deg) translateY(-35px);
          transition: 0.3s;
        }
      }
      &:hover {
        .link {
          opacity: 1;

          .link-inner {
            transform: rotate(-135deg) translateY(-8px) translateX(10px);
            transition: 0.3s;
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 100px;
    .latest-news-title {
      padding-bottom: 20px;
      h2 {
        font-size: 40px;
      }
    }
    .news-content {
      .news-row {
        padding: 25px 60px;
        .link {
          right: 50px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 60px;
    .news-content {
      .news-row {
        padding: 25px 30px;
        .link {
          right: 50px;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .latest-news-title {
      h2 {
        font-size: 32px;
      }
      .link {
        right: 20px;
      }
    }
    .news-content {
      .news-row {
        padding: 25px 15px;
        h5 {
          font-size: 16px;
        }
        h3 {
          font-size: 20px;
        }
        .link {
          right: 20px;
        }
      }
    }
  }
  @media screen and (max-width: 425px) {
    .latest-news-title {
      flex-wrap: wrap;
    }
    .shape {
      &1 {
        bottom: 360px;
      }
      &2 {
        bottom: 260px;
      }
      &3 {
        bottom: 142px;
      }
      &4 {
        bottom: 21px;
      }
    }
    .news-content {
      .news-row {
        h5 {
          font-size: 14px;
          line-height: 22px;
        }
        h3 {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
  }
`;

export default LatestNewsStyle;
