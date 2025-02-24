import styled from "styled-components";

import ShapeImg from "../../../assets/images/icons/shape-left.svg";

const TeamCounterStyleWrapper = styled.section`
  padding: 65px 0;
  /*-- counter-card --*/
  .counter-card {
    width: 100%;
    height: 220px;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.bodyBG2};
    padding: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::before {
      position: absolute;
      content: url(${ShapeImg});
      top: -30px;
      left: -30px;
      animation: badgeAnimate 2s infinite;
    }
    h2 {
      color: ${({ theme }) => theme.colors.primary};
    }
    p {
      font-size: 18px;
      font-weight: 500;
      line-height: 40px;
      color: ${({ theme }) => theme.colors.title};
    }
  }

  @media screen and (max-width: 991px) {
    .counter-card {
      padding: 30px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 25px;
    .counter-card {
      display: block;
      text-align: center;
    }
    .counter-card {
      height: auto;
    }
    .counter-card {
      h2 {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .counter-card {
      padding: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    .counter-card {
      height: auto;
      padding: 30px;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
    .counter-card::before {
      top: -47px;
      left: 0;
    }
  }
`;

export default TeamCounterStyleWrapper;
