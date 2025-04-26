import styled from "styled-components";

const CryptoBallsStyle = styled.section`
  position: relative;
  z-index: 2;
  margin-bottom: -225px;

  .safe-platform-ball-content {
    max-width: 770px;
    width: 100%;
    margin: auto;
  }
  .safe-platform-ball {
    border-radius: 185px;
    padding: 95px 37px;
    text-align: center;
    &1 {
      background: #4541fe;
      h4 {
        margin-top: 35px;
        margin-bottom: 12px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      p {
        margin-bottom: 0px;
        color: ${({ theme }) => theme.colors.whiteColor}cc;
      }
    }
    &2 {
      background: #9fe870;
      h4 {
        margin-top: 35px;
        margin-bottom: 12px;
        color: ${({ theme }) => theme.colors.title};
      }
      p {
        margin-bottom: 0px;
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
  }
  @media screen and (max-width: 1399px) {
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1199px) {
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 991px) {
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    .safe-platform-ball {
      min-height: 100%;
      padding: 50px 20px;
      h4 {
        font-size: 20px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .safe-platform-ball {
      padding: 50px;
      transform: none !important;
      margin-bottom: 30px;
      min-height: auto;
    }
  }
  @media screen and (max-width: 480px) {
    .safe-platform-ball h4 {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 374px) {
  }
  @media screen and (min-width: 768px) {
  }
`;

export default CryptoBallsStyle;
