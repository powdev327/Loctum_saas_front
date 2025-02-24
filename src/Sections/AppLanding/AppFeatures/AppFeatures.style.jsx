import styled from "styled-components";

import HoverImg from "../../../assets/images/app/hover_effect.svg";

const AppFeaturesStyleWrapper = styled.section`
  background: ${({ theme }) => theme.colors.bgHero};
  padding-top: 130px;
  padding-bottom: 110px;
  .app-useful-features-card {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.whiteColor}14;
    border-radius: 15px;
    margin-bottom: 30px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    &::after {
      content: url(${HoverImg});
      position: absolute;
      top: 0;
      opacity: 0;
      opacity: 0;
      transition: 0.6s;
      z-index: 0;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
    .card-content {
      position: relative;
      z-index: 4;
      padding: 35px 30px;
      .icon {
        margin-bottom: 24px;
      }
      h5 {
        margin-bottom: 14px;
      }
      p {
        letter-spacing: 0.4pxx;
      }
    }
  }

  .app-useful-features-card-section {
    margin-top: 40px;
  }

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    .app-useful-features-card {
      .card-content {
        padding: 20px;
        p {
          font-size: 13px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 70px 0px 50px 0px;

    .app-useful-features-text {
      margin-top: 25px;
    }
    .app-useful-features-card-section {
      margin-top: 30px;
    }
  }
`;

export default AppFeaturesStyleWrapper;
