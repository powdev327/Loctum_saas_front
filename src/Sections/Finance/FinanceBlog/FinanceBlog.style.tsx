import styled from "styled-components";

import BgImg from "../../../assets/images/finance-index/blog-post-card-bg.png";

const FinanceBlogStyle = styled.section`
  padding-bottom: 110px;
  .blog-post-card {
    overflow: hidden;
    padding: 30px;
    border-radius: 30px;
    min-height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    &.blog-post-card1 {
      background: ${({ theme }) => theme.colors.whiteColor};
      box-shadow: 0px 5px 10px ${({ theme }) => theme.colors.blackColor}0d;
      justify-content: flex-start;
      .card-title {
        h6 {
          color: ${({ theme }) => theme.colors.primary6Deep};
        }
      }

      .card-footer {
        .user {
          span {
            color: ${({ theme }) => theme.colors.title};
          }
        }
        h5 {
          color: ${({ theme }) => theme.colors.textColor};
          opacity: 0.8;
        }
      }
    }
    &.blog-post-card2 {
      background: url(${BgImg});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      color: ${({ theme }) => theme.colors.whiteColor};
      justify-content: flex-end;
    }
    &.blog-post-card3 {
      background: ${({ theme }) => theme.colors.primary6};
      justify-content: space-between;
      .card-title {
        color: ${({ theme }) => theme.colors.v6templateColor};
      }
      .card-footer {
        color: ${({ theme }) => theme.colors.title};
      }
    }

    .card-title {
      h6 {
        font-family: ${({ theme }) => theme.fonts.dmSans};
        font-weight: 700;
        margin-bottom: 10px;
        text-transform: uppercase;
      }
      h4 {
        margin-bottom: 25px;
        &:hover {
          opacity: 0.8;
        }
      }
      h3 {
        margin-bottom: 25px;
        &:hover {
          opacity: 0.8;
        }
      }
    }
    p {
      padding-bottom: 15px;
    }
    .card-footer {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .user {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        span {
          font-weight: 700;
        }
        .user-img {
          height: 36px;
          width: 36px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            height: 100%;
            width: 100%;
          }
        }
      }
      .blog-date {
        color: ${({ theme }) => theme.colors.iconColor};
      }
    }
  }

  @media screen and (max-width: 1199px) {
    padding-bottom: 80px;
  }
  @media screen and (max-width: 991px) {
    padding-bottom: 80px;
    .blog-post-content {
      .col-lg-4 {
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .blog-post-card .card-title h4 {
      font-size: 22px;
      line-height: 34px;
    }
    .blog-post-card .card-title h3 {
      font-size: 24px;
      line-height: 36px;
    }
  }
`;

export default FinanceBlogStyle;
