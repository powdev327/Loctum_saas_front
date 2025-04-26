import styled from "styled-components";

const PortfolioGalleryStyle = styled.section`
  max-width: 100%;
  overflow-x: hidden;
  padding-bottom: 140px;
  .portfolio-section {
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
  }

  .masonary-grid {
    column-count: 3;
    column-gap: 30px;

    .portfolio-gallery-card {
      width: 100%;
      break-inside: avoid;
    }
  }

  .portfolio-grid-container {
    width: 100%;
    margin: auto;
    &.row {
      margin-left: -15px;
      margin-right: -15px;
      .col-md-4 {
        padding-left: 15px !important;
        padding-right: 15px !important;
      }
    }
  }
  .portfolio-gallery-card {
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    background: transparent;
    min-height: 100px;
    height: auto;
    text-align: center;
    &2 {
      padding-top: 70px;
    }

    .portfolio-img {
      height: 100%;
      width: 100%;
      cursor: pointer;
      img {
        height: 100%;
        width: 100%;
        opacity: 1;
      }
    }

    .portfolio-details {
      position: absolute;
      left: 0px;
      padding: 15px;
      background: transparent;
      width: 100%;
    }
    .portfolio-text-card {
      background: ${({ theme }) => theme.colors.whiteColor};
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px 20px;
      gap: 20px;
      text-align: left;
      max-width: 92%;
      width: 100%;
      margin: auto;
      h5 {
        a {
          color: ${({ theme }) => theme.colors.title};
        }
      }
      h6 {
        font-size: 14px;
      }
      .portfolio-text-link {
        transition: 0.5s;
        .icon {
          background: ${({ theme }) => theme.colors.blackColor}1a;
          height: 30px;
          width: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          svg {
            color: ${({ theme }) => theme.colors.textColor};
          }
        }
      }
      &:hover {
        .portfolio-text-link {
          transform: rotate(-45deg);
        }
      }
    }
    &:hover {
      .portfolio-details {
        bottom: 0px;
        animation-name: slideToTop;
        animation-duration: 0.6s;
      }
    }
  }

  @keyframes slideToTop {
    0% {
      bottom: -120px;
    }

    100% {
      bottom: 0px;
    }
  }

  .lb-outerContainer {
    height: 100vh !important;
    position: fixed !important;
    left: 0px !important;
    top: 0px !important;
    width: 100% !important;
    border-radius: 0px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lightbox .lb-image {
    border: none;
    border-radius: 0px;
  }
  .lb-nav {
    a {
      &.lb-next {
        opacity: 1;
        right: 30px;
        width: 20%;
        margin-right: 30px;
      }
      &.lb-prev {
        opacity: 1;
        left: 30px;
        width: 20%;
        margin-left: 30px;
      }
    }
  }

  .lb-data .lb-close {
    position: fixed;
    top: 30px;
    right: 30px;
  }

  @media screen and (max-width: 1199px) {
    padding-bottom: 80px;
    .portfolio-section .portfolio-title .portfolio-subtitle h2 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 991px) {
    .portfolio-section {
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
    }
    .portfolio-section {
      &.newsletter {
        .portfolio-gallery {
          .portfolio-img {
            width: 220px;
            height: 290px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .portfolio-section {
      &.newsletter {
        .portfolio-gallery {
          .portfolio-img {
            width: 180px;
            height: 260px;
          }
        }
      }
    }
    .portfolio-grid-container {
      -webkit-column-count: 2;
      column-count: 2;
    }

    .masonary-grid{
      column-gap: 20px;
      .portfolio-gallery-card{
        margin-bottom: 20px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .portfolio-section .portfolio-title .portfolio-subtitle h2,
    .portfolio-section .portfolio-title .portfolio-subtitle h3 {
      font-size: 20px;
      line-height: 37px;

      span {
        line-height: 37px;
      }
    }
    .masonary-grid{
      column-gap: 15px;
      .portfolio-gallery-card{
        margin-bottom: 15px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .portfolio-section .portfolio-title .portfolio-subtitle h2,
    .portfolio-section .portfolio-title .portfolio-subtitle h3 {
      font-size: 18px;
      line-height: 30px;

      span {
        font-size: 13px;
        line-height: 30px;
      }
    }
    .portfolio-grid-container.row {
      margin: 0px !important;
    }
    .portfolio-grid-container {
      -webkit-column-count: 1;
      column-count: 1;
    }
    .masonary-grid{
      column-gap: 10px;
      .portfolio-gallery-card{
        margin-bottom: 10px;
      }
    }
    .load-more-btn{
      margin-top: 30px;
    }
  }
`;

export default PortfolioGalleryStyle;
