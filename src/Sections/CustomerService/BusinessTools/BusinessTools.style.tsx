import styled from "styled-components";

const BusinessToolsStyleWrapper = styled.section`
  margin-bottom: 110px;
  position: relative;
  z-index: 1;
  background: ${({ theme }) => theme.colors.whiteColor};

  .business-tools-text {
    min-height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    min-height: max-content;
    & h4 {
      margin-bottom: 15px;
    }
    & p {
      max-width: 585px;
      width: 100%;
      margin-bottom: 21px;
      &.bold {
        font-weight: 700;
        color: ${({ theme }) => theme.colors.title};
        margin-bottom: 0px;
      }
    }
    & ul {
      padding: 0;
      list-style: none;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 4%;
      max-width: 375px;
      width: 100%;
      & li {
        color: ${({ theme }) => theme.colors.title};
        width: 48%;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin-bottom: 15px;
        &:nth-last-child(1) {
          margin-bottom: 0px;
        }

        & svg {
          min-width: 20px;
          margin-top: 6px;
          margin-right: 10px;
          font-size: 18px;
          font-weight: 900;
          line-height: 36px;
          color: ${({ theme }) => theme.colors.iconColor2};
        }
      }
    }
  }

  .list-group {
    padding-top: 140px;
  }

  .business-tools-content-scrolspy {
    padding-top: 0px;
    margin-top: -490px;
    padding-left: 500px;
    .business-tools-content {
      padding-bottom: 40px;
      margin-bottom: 40px;
      min-height: auto;
      display: flex;
      align-content: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }
  }

  .business-tools-img-list {
    position: relative;
    min-height: 450px;
    min-width: 450px;
    border-radius: 30px;
    overflow: hidden;
    .business-tools-img-bg {
      position: absolute;
      left: 0px;
      top: 0px;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
    a {
      width: 270px;
      height: 200px;
      right: 30px;
      bottom: 30px;
      position: absolute;
    }
  }

  .business-tools-img.list-group-item {
    display: none;
  }

  .business-tools-img.list-group-item.active {
    background: transparent;
    display: block;
    border: none;
  }

  .business-tools-row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 50px;
    .sidebar {
      max-width: 450px;
      width: 100%;
    }
  }

  .business-tools-btns {
    gap: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 16px;
    max-width: 100%;
    button {
      background: rgba(17, 17, 17, 0.08);
      border-radius: 20px;
      padding: 8px 15px;
      svg {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.v8Title};
        margin-right: 9px;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    &.business-tools-text {
      &h4 {
        font-size: 20px;
        line-height: 16px;
        margin-bottom: 25px;
      }
    }
    .business-tools-img-list {
      min-width: 350px;
      max-width: 350px;
      min-height: 350px;
      max-height: 350px;
    }

    .business-tools-content-scrolspy {
      padding-top: 75px;

      .business-tools-content {
        min-height: 350px;
      }
    }

    .list-group {
      padding-top: 80px;
    }
    .business-tools-row {
      gap: 40px;

      .sidebar {
        max-width: 350px;
        width: 100%;
      }
    }
    .business-tools-content-scrolspy {
      padding-top: 100px;
      padding-left: 390px;
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 0px;
    margin-bottom: 8px;
    margin-bottom: -120px;

    .sidebar {
      display: none;
    }

    .business-tools-content-scrolspy {
      padding-left: 0px;
      margin-top: 0px;
      padding-top: 50px;
      .business-tools-content {
        margin-bottom: 20px;
        min-height: auto;
      }
    }
  }
  @media screen and (max-width: 540px) {
    .business-tools-content-scrolspy {
      padding-top: 20px;
    }
  }
  @media screen and (max-width: 374px) {
    .business-tools-text ul li {
      width: 100%;
    }
  }
`;

export default BusinessToolsStyleWrapper;
