import styled from "styled-components";

const DefiBlogStyle = styled.section`
  padding-bottom: 140px;
  .latest-articles-content {
    padding-bottom: 20px;
  }
  .latest-articles-card {
    background: ${({ theme }) => theme.colors.whiteColor}1a;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 30px;
    .articles-img {
      img {
        width: 100%;
      }
    }
    .latest-articles-text {
      padding: 30px;
      p {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.whiteColor}cc;
        margin-bottom: 0px;
      }
      h4 {
        margin-top: 11px;
        margin-bottom: 42px;
        color: ${({ theme }) => theme.colors.whiteColor};
      }
      .articles-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
          color: ${({ theme }) => theme.colors.whiteColor}80;
        }
        a {
          opacity: 0.5;
          transition: 0.3s;
          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .defi-explore-article-btn {
    padding: 15px 51px;
    background: ${({ theme }) => theme.colors.whiteColor}1a;
    border-radius: 50px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 275px;
    width: 100%;
    margin: auto;
    color: ${({ theme }) => theme.colors.whiteColor};
    position: relative;
    overflow: hidden;
    img {
      margin-left: 14px;
      filter: brightness(100);
      transition: 0.3s;
    }
    &:hover {
      color: ${({ theme }) => theme.colors.whiteColor};
      img {
        transform: rotate(-45deg);
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding-bottom: 100px;
    .latest-articles-card {
      .latest-articles-text {
        padding: 20px;
        h4 {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding-bottom: 80px;
    .latest-articles-card {
      .latest-articles-text {
        padding: 23px;
      }
    }
  }
`;

export default DefiBlogStyle;
