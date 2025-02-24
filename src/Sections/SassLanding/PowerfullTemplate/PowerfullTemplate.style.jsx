import styled from "styled-components";

const PowerfullTemplateStyle = styled.section`
  margin-bottom: 140px;
  overflow-y: hidden;
  background: ${({ theme }) => theme.colors.whiteColor};
  position: relative;
  z-index: 2;
  .powerfull-template-content {
    margin-top: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    .powerfull-template-row {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .powerfull-template-row {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &.active {
      .powerfull-template-number {
        color: ${({ theme }) => theme.colors.whiteColor};
        background: ${({ theme }) => theme.colors.primary};
      }
    }

    .powerfull-template-number {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: 60px;
      width: 60px;
      border: 10px solid ${({ theme }) => theme.colors.whiteColor};
      background: #e6e6e6;
      color: ${({ theme }) => theme.colors.title};
      font-family: ${({ theme }) => theme.fonts.PlusJakartaSans};
      font-weight: 700;
      line-height: 30px;
      position: absolute;
      top: 0px;
      z-index: 2;
      transition: 0.3s;
      &.active{
        color: ${({ theme }) => theme.colors.whiteColor};
        background: ${({ theme }) => theme.colors.primary};
      }
    }
    &::before {
      z-index: 1;
      content: "";
      background: ${({ theme }) => theme.colors.blackColor}1a;
      height: 100%;
      width: 2px;
      top: 50px;
      position: absolute;
    }
    &::after {
      content: "";
      background: ${({ theme }) => theme.colors.primary};
      height: 0%;
      width: 2px;
      top: 50px;
      position: absolute;
      z-index: 1;
      transition: height 2s;
    }
  }
  .powerfull-template-img {
    &.powerfull-template-img-right {
      padding: 30px 0px 50px 70px;
      margin-top: 40px;
    }
    &.powerfull-template-img-left {
      padding: 30px 70px 50px 0px;
      margin-top: 40px;
    }
  }

  .timeline-innerline {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.blackColor}1a;
    .timeline-progress {
      width: 2px;
      height: 50px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
  .powerfull-template-text {
    padding-top: 75px;
    max-width: 457px;
    width: 100%;
    ol,
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }
    &.powerfull-template-text-right {
      padding-left: 80px;
    }
    h4 {
      margin-bottom: 24px;
    }

    h6 {
      margin-bottom: 10px;
      font-family: ${({ theme }) => theme.fonts.dmSans};
    }
    p {
      margin-bottom: 16px;
    }

    ul {
      li {
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 15px;
        font-weight: 600;
        svg {
          color: ${({ theme }) => theme.colors.iconColor};
          font-size: 20px;
          font-weight: 800;
        }
      }
    }
    ol {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 26px;
      li {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 100%;
        font-size: 15px;
        margin-right: 15px;
        color: ${({ theme }) => theme.colors.title};
        &:last-child {
          margin-right: 0;
        }
        img {
          margin-bottom: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    margin-bottom: 85px;
    .powerfull-template-text {
      &.powerfull-template-text-left {
        padding-right: 20px;
      }

      &.powerfull-template-text-right {
        padding-left: 20px;
      }
    }
    .powerfull-template-img {
      margin-top: 50px;

      &.powerfull-template-img-left {
        padding-right: 20px;
      }

      &.powerfull-template-img-right {
        padding-left: 20px;
      }
    }
    .powerfull-template-text {
      padding-top: 60px;
      h4 {
        margin-bottom: 16px;
        font-size: 18px;
        line-height: 26px;
      }
      ol {
        flex-wrap: wrap;
        li {
          width: 50%;
          gap: 10px;
          margin-top: 15px;
          img {
            margin-bottom: 5px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    .powerfull-template-img {
      &.powerfull-template-img-left {
        padding: 0px;
      }
      &.powerfull-template-img-right {
        padding: 0px;
      }
    }
    .powerfull-template-content {
      margin-top: 0;
    }
    .powerfull-template-text {
      padding-top: 30px;
    }
    .powerfull-template-img.powerfull-template-img-right {
      padding-left: 0;
    }
    .powerfull-template-row {
      &::before,
      &::after {
        display: none;
        background: transparent;
      }

      .powerfull-template-number {
        display: none;
      }
    }

    .powerfull-template-text {
      max-width: 100%;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }
    .timeline-innerline {
      display: none;
    }
    .powerful-email-left {
      .email-collaps-list {
        .timeline-innerline {
          display: block;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    margin-bottom: 40px;
    .powerfull-template-text ol {
      display: block;
      margin-top: 20px;
      li {
        width: 100%;
        gap: 0;
      }
    }
    .powerful-email-left {
      .email-collaps-list {
        .email-collaps-item {
          .email-collaps-number {
            min-height: 50px;
            min-width: 50px;
            max-width: 50px;
            max-height: 50px;
            font-size: 25px;
          }

          .email-collaps-text {
            h3 {
              font-size: 20px;
              margin-top: 7px;
            }
          }
        }

        .timeline-innerline {
          left: 25px;
        }
      }
    }
  }
`;

export default PowerfullTemplateStyle;
