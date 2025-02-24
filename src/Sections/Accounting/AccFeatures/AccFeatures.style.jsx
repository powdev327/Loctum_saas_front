import styled from "styled-components";

const AccFeaturesStyle = styled.section`
  background: ${({ theme }) => theme.colors.whiteColor};
  padding-bottom: 100px;
  .v8-card-section-text {
    font-family: ${({ theme }) => theme.fonts.dmSans};
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 55px;
    margin-top: -16px;
  }

  .index6-card {
    background: ${({ theme }) => theme.colors.bodyBG2};
    padding: 40px 30px;
    border-radius: 30px;
    margin-bottom: 30px;
    transition: 0.3s;
    &.index8-card {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      min-height: 100%;
      height: 370px;
      overflow: hidden;
      p {
        margin-bottom: 0px;
        overflow: hidden;
      }
      .index8-card-text {
        position: relative;
        bottom: -100px;
        z-index: 1;
      }
      a {
        background: ${({ theme }) => theme.colors.bodyBG2};
        margin-top: 18px;
        justify-content: flex-start;
        position: relative;
        z-index: 2;
        gap: 20px;
        padding-top: 20px;
        padding-bottom: 48px;
        .icon {
          filter: brightness(0);
        }
      }
      &:hover {
        p {
          display: block;
        }
        .index8-card-text {
          animation: smothShow 0.5s;
          bottom: -10px;
        }
        a {
          .icon {
            transition: 0.5s;
            transform: rotate(-45deg);
            filter: none;
          }
        }
      }
    }
    .index6-card-icon {
      margin-bottom: 31px;
    }
    h5 {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.blackColor};
      margin-bottom: 19px;
      transition: 0.5s;
      max-width: 200px;
    }
    p {
      margin-bottom: 70px;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: 0.7s;
      span {
        transition: 0.5s;
        color: ${({ theme }) => theme.colors.textColor};
        font-weight: 700;
      }
      .link-btn {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.blackColor}1a;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
        .icon {
          margin-bottom: 3px;
          margin-left: 2px;
        }
        img {
          filter: brightness(0);
          transition: 0.3s;
        }
      }
    }
    &:hover {
      a {
        span {
          color: ${({ theme }) => theme.colors.primary6Deep};
        }
        .link-btn {
          background: ${({ theme }) => theme.colors.primary6Deep};
          img {
            filter: brightness(100);
            transform: rotate(-45deg);
          }
        }
      }
    }
  }

  @keyframes smothShow {
    0% {
      bottom: -100px;
    }
    100% {
      bottom: -10px;
    }
  }

  @media screen and (max-width: 1199px) {
    padding-bottom: 40px;
    &.index8-card-section {
      padding-bottom: 50px;
    }
  }
  @media screen and (max-width: 991px) {
    .v8-card-section-text {
      margin-bottom: 40px;
    }
    .index6-card.index8-card .index8-card-text {
      bottom: -132px;
    }
    .index6-card.index8-card a {
      margin-top: 0px;
    }
    .index6-card.index8-card:hover .index8-card-text {
      bottom: 0px;
    }
  }
  @media screen and (max-width: 767px) {
    .index6-card p {
      margin-bottom: 40px;
    }
    .index6-card.index8-card p {
      margin-bottom: 15px;
    }
    .index6-card.index8-card {
      max-width: 370px;
      margin: auto;
      height: 350px;
    }
    .index6-card.index8-card a {
      padding-top: 0px;
    }
    .index6-card.index8-card .index8-card-text {
      bottom: -100px;
    }
  }
  @media screen and (max-width: 374px) {
    .index6-card.index8-card .index8-card-text {
      bottom: -100px;
    }
    .index6-card.index8-card a {
      margin-top: 0px;
    }
    .index6-card.index8-card:hover .index8-card-text {
      bottom: 0px;
    }
  }
`;

export default AccFeaturesStyle;
