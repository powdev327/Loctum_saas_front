import styled from "styled-components";

const DocumentsStyle = styled.div`
  padding-top: 122px;
  position: relative;
  .documents-title {
    padding-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.whiteColor}1f;
    h2 {
      font-family: ${({ theme }) => theme.fonts.quantico};
      font-weight: 700;
      font-size: 60px;
      line-height: 80px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.whiteColor};
      margin-bottom: 0px;
    }
  }

  .documents-content {
    .doc-row-section {
      position: relative;
      &::after {
        content: "";
        height: 60px;
        width: 50%;
        background: linear-gradient(
          90deg,
          rgba(108, 211, 108, 0) 0%,
          rgba(108, 211, 108, 0.1) 100%
        );
        position: absolute;
        right: 0px;
        top: 33%;
        z-index: 0;
      }
    }
    .documents-row {
      padding: 50px 100px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.whiteColor}1f;
      position: relative;
      z-index: 1;
      h3 {
        font-family: ${({ theme }) => theme.fonts.quantico};
        line-height: 50px;
        color: ${({ theme }) => theme.colors.whiteColor};
        text-transform: uppercase;
        margin-bottom: 0px;
      }
      .doc-img {
        display: none;
        position: absolute;
        margin-top: -167px;
      }
      &:hover {
        .doc-img {
          display: block;
        }
      }
      .link {
        height: 29px;
        width: 24px;
        overflow: hidden;
        opacity: 0;
        position: absolute;
        right: 100px;
        top: 36%;
        .link-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          transform: translateY(-20px);
          transition: 0.3s;
        }
      }
      &:hover {
        .link {
          opacity: 1;

          .link-inner {
            transform: translateY(-2px);
            transition: 0.3s;
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 100px;
    .documents-title {
      padding-bottom: 20px;
      h2 {
        font-size: 40px;
      }
    }
    .documents-content {
      .documents-row {
        padding: 50px 60px;
        .link {
          right: 50px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-top: 60px;
    .documents-content {
      .documents-row {
        padding: 50px 30px;
        .link {
          right: 30px;
        }
      }
    }
  }
  @media screen and (max-width: 575px) {
    .shape {
      &1 {
        bottom: 249px;
      }
      &2 {
        bottom: 139px;
      }
      &3 {
        bottom: 26px;
      }
    }
    .documents-title {
      h2 {
        font-size: 32px;
      }
    }
    .documents-content {
      .documents-row {
        padding: 30px 20px;
      }
    }
    .documents-content {
      .documents-row {
        h3 {
          font-size: 20px;
        }
        .link {
          right: 15px;
        }
      }
    }
  }
`;

export default DocumentsStyle;
