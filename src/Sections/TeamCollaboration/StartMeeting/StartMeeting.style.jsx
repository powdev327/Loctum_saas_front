import styled from "styled-components";

import GrainTextureImg from "../../../assets/images/team-collaboration/grain-texture.svg";
import MeshGradImg from "../../../assets/images/team-collaboration/mesh-grad.svg";
import ShapeImg from "../../../assets/images/team-collaboration/shape.svg";

const StartMeetingStyleWrapper = styled.section`
  padding: 140px 0;
  position: relative;
  overflow: hidden;

  .meeting-anytime-card {
    width: 100%;
    height: 400px;
    border-radius: 30px;
    background-color: #2d2e50;
    background-image: url(${GrainTextureImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 0;
    padding: 65px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    &::before {
      position: absolute;
      z-index: -1;
      content: url(${MeshGradImg});
      top: 0;
      left: 20%;
    }

    &::after {
      position: absolute;
      content: url(${ShapeImg});
      top: -30px;
      right: -30px;
      animation: badgeAnimate 2s infinite;
    }

    .overlay {
      position: absolute;
      bottom: 0;
      left: 32px;
    }

    &-content {
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &-text {
      margin-bottom: 38px;
      h2 {
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      p {
        margin-top: 10px;
        font-size: 18px;
        font-weight: 500;
        line-height: 36px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
    }
    &-buttons {
      display: flex;
      align-items: center;
      gap: 20px;
      a {
        width: 160px;
        height: 50px;
        border-radius: 8px;
        overflow: hidden;
        transition: 0.3s;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .meeting-anytime-card-content {
      width: 55%;
    }
  }
  @media screen and (max-width: 991px) {
    padding-top: 20px;
    padding-bottom: 80px;
    .meeting-anytime-card .overlay {
      display: none;
    }

    .meeting-anytime-card-content {
      width: 100%;
    }
    .meeting-anytime-card-text h2 {
      font-size: 34px;
      line-height: 50px;
    }
  }
  @media screen and (max-width: 767px) {
    .meeting-anytime-card {
      padding: 40px;
    }
  }
  @media screen and (max-width: 575px) {
    padding: 60px 0;
    .meeting-anytime-card-text {
      h2 {
        font-size: 30px;
      }

      p {
        font-size: 16px;
      }
    }
    .meeting-anytime-card-text h2 {
      font-size: 30px;
      line-height: 44px;
    }
  }
  @media screen and (max-width: 480px) {
    .meeting-anytime-card {
      padding: 20px;
    }

    .meeting-anytime-card-text {
      h2 {
        font-size: 24px;
        line-height: 34px;
      }

      p {
        font-size: 16px;
      }
    }
  }
`;

export default StartMeetingStyleWrapper;
