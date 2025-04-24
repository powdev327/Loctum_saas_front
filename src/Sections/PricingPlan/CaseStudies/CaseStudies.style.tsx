import styled from "styled-components";

const CaseStudiesStyle = styled.section`
  /* margin-top: 90px;
  margin-bottom: 115px; */
  margin: 0;
  background: ${({ theme }) => theme.colors.blueGray};
  .case-studies-left {
    max-width: 496px;
    width: 100%;
    padding: 125px 0px 140px 0px;
    h2 {
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-size: 40px;
      font-weight: 800;
      line-height: 60px;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 35px;
    }
  }

  .case-studies-brands {
    display: flex;
    align-items: center;
    justify-content: center;
    .case-studies-item {
      width: 50%;
      padding-top: 60px;
      border-left: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-right: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      min-height: 550px;
      max-height: 585px;
      position: relative;
      overflow: hidden;
      &::before {
        content: "";
        height: 200px;
        width: 100%;
        position: absolute;
        background: linear-gradient(
          180deg,
          #eeeffb 0%,
          rgba(238, 239, 251, 0) 100%
        );
        top: 0px;
        left: 0px;
        z-index: 2;
      }
      &::after {
        content: "";
        height: 200px;
        width: 100%;
        position: absolute;
        background: linear-gradient(
          180deg,
          rgba(238, 239, 251, 0) 0%,
          #eeeffb 100%
        );
        bottom: 0px;
        left: 0px;
        z-index: 2;
      }
      &:nth-last-child(1) {
        border-left: none;
      }
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        overflow: hidden;
        &.slide-top {
          animation: SlideTop 10s infinite linear;
        }
        &.slide-bottom {
          animation: SlideBottom 10s infinite linear;
        }
        li {
          min-height: 24px;
          margin-bottom: 85px;
        }
      }
    }
  }

  @keyframes SlideTop {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes SlideBottom {
    0% {
      transform: translateY(0%);
    }
    100% {
      transform: translateY(-100%);
    }
  }

  @media screen and (max-width: 1199px) {
    .case-studies-left h2 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 991px) {
    .case-studies-left h2 {
      font-size: 27px;
      line-height: 45px;
      margin-bottom: 25px;
    }

    .case-studies-brands .case-studies-item {
      min-height: 455px;
      max-height: 455px;

      ul {
        padding: 0px 30px;

        li {
          margin-bottom: 60px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    .case-studies-left {
      padding: 70px 0px;
    }
  }
  @media screen and (max-width: 480px) {
    .case-studies-left h2 {
      font-size: 24px;
    }
  }
`;

export default CaseStudiesStyle;
