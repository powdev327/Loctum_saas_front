import styled from "styled-components";

const AccountingBannerStyle = styled.section`
  background: #0d333f;
  padding-top: 90px;
  position: relative;
  overflow: hidden;

  .v8banner-text {
    max-width: 607px;
    padding-right: 49px;
    min-height: 760px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    .title {
      line-height: 1.25;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 18px;
    }
    p {
      font-size: 18px;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 48px;
    }
  }

  .v8banner-video {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    overflow: hidden;
    position: absolute;
    right: 0px;
    top: 90px;
    video {
      width: 100%;
      min-height: 760px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1499px) {
    .v8banner-text {
      min-height: 650px;
    }
    .v8banner-video {
      video {
        min-height: 650px;
      }
    }
  }
  @media screen and (max-width: 1199px) {
    .v8banner-text {
      max-width: 400px;
      min-height: 500px;

      h2 {
        font-size: 40px;
        line-height: 56px;
      }
    }
    .v8banner-video {
      video {
        min-height: 500px;
      }
    }
    .v8banner-text .title {
      font-size: 44px;
    }
    .v8banner-text {
      max-width: 380px;
      min-height: 450px;
      padding-bottom: 35px;
      p {
        font-size: 16px;
        margin-bottom: 30px;
        line-height: 30px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .v8banner-video {
      top: 70px;
      video {
        min-height: 470px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 140px 0 0;
    .v8banner-text {
      max-width: 100%;
      min-height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      padding: 0px;
      text-align: center;
      padding-bottom: 80px;
    }
    .v8banner-video {
      position: relative;
      top: 0px;
      width: 100%;
    }
  }
  @media screen and (max-width: 575px) {
    .v8banner-video video {
      min-height: 350px;
    }
  }
`;

export default AccountingBannerStyle;
