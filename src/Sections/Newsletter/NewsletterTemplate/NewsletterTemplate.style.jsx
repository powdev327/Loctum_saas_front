import styled from "styled-components";

const NewsletterTemplateStyle = styled.section`
  margin-top: 120px;
  margin-bottom: 57px;
  padding: 0px 55px;

  .portfolio-title {
    text-align: center;
    p {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 700;
      line-height: 30px;
      color: ${({ theme }) => theme.colors.primary};
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
    .portfolio-subtitle {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      h2 {
        font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        font-size: 40px;
        font-weight: 700;
        line-height: 60px;
        color: ${({ theme }) => theme.colors.title};
        text-align: right;
      }
      h3 {
        text-align: left;
        font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
        font-size: 36px;
        font-weight: 700;
        line-height: 60px;
        color: ${({ theme }) => theme.colors.iconColor2};
        span {
          font-size: 16px;
          font-weight: 600;
          line-height: 60px;
          color: ${({ theme }) => theme.colors.title};
        }
      }
    }
  }

  .portfolio-gallery-section {
    max-width: 100%;
    overflow-x: hidden;
    padding-bottom: 140px;
  }

  .portfolio-gallery {
    margin-top: 42px;
    display: flex;
    align-items: center;
    gap: 20px;
    .portfolio-img {
      flex: 0 0 auto;
      width: 430px;
      height: 300px;
      border-radius: 10px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  &.newsletter {
    background: ${({ theme }) => theme.colors.whiteColor};
    margin-top: 0px;
    margin-bottom: 0px;
    .portfolio-gallery {
      margin-bottom: 63px;
      .portfolio-img {
        height: auto;
        width: auto;
      }
    }
    .free-demo-btn {
      padding: 12px 20px;
      border: 2px solid rgba(0, 149, 255, 0.3);
      border-radius: 50px;
      color: ${({ theme }) => theme.colors.primary};
      background: transparent;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 230px;
      height: 60px;
      margin: auto;
      span {
        color: ${({ theme }) => theme.colors.primary};
      }
      svg {
        font-size: 24px;
        margin-left: 15px;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .portfolio-title .portfolio-subtitle h2 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 991px) {
    .portfolio-title {
      .portfolio-subtitle {
        h2,
        h3 {
          font-size: 27px;
          line-height: 45px;

          span {
            line-height: 45px;
          }
        }
      }
    }
    &.newsletter {
      .portfolio-gallery {
        .portfolio-img {
          width: 220px;
          height: 290px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    &.newsletter {
      .portfolio-gallery {
        .portfolio-img {
          width: 180px;
          height: 260px;
        }
      }
    }
    .portfolio-gallery-section{
      padding-bottom: 90px;
    }
  }
  @media screen and (max-width: 575px) {
    .portfolio-title .portfolio-subtitle h2,
    .portfolio-title .portfolio-subtitle h3 {
      font-size: 20px;
      line-height: 37px;

      span {
        line-height: 37px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .portfolio-title .portfolio-subtitle h2,
    .portfolio-title .portfolio-subtitle h3 {
      font-size: 18px;
      line-height: 30px;

      span {
        font-size: 13px;
        line-height: 30px;
      }
    }
  }
`;

export default NewsletterTemplateStyle;
