import styled from "styled-components";

const NewsletterTestimonialStyle = styled.section`
  background: #eef2f5;
  padding-top: 132px;
  .newsletter-testmonial-tab-btns {
    max-width: 820px;
    margin: auto;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      list-style: none;
      padding: 0px;
      margin: 0px;
      border: none;
      li {
        width: 23.5%;
        padding: 0px;
        &.react-tabs__tab--selected,
        &:hover {
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.colors.title};
          button {
            &::after {
              opacity: 1;
            }
          }
        }
        &.react-tabs__tab:focus:after {
          display: none;
        }
        button {
          width: 100%;
          background: #fafbfc;
          box-shadow: 0px 2px 3px ${({ theme }) => theme.colors.blackColor}0d;
          border-radius: 10px;
          color: ${({ theme }) => theme.colors.textColor};
          padding: 10.5px;
          font-weight: 500;
          position: relative;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            margin-right: 15px;
          }
          &::after {
            content: "";
            height: 2px;
            background: ${({ theme }) => theme.colors.primary};
            width: 80%;
            position: absolute;
            bottom: 0px;
            opacity: 0;
            transition: 0.3s;
          }
        }
      }
    }
  }

  .newsletter-testmonial-tab-content {
    margin-top: 40px;
  }
  .newsletter-testmonial-card {
    padding: 28px 20px 23px 20px;
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 30px;
    margin-bottom: 30px;
    .card-gfooter-link {
      margin-top: 10px;
      transition: 0.3s;
      font-size: 13px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &:hover {
        color: ${({ theme }) => theme.colors.title};
      }
      img {
        margin-right: 8px;
        margin-left: 8px;
      }
    }
    .card-pragraph {
      a {
        color: ${({ theme }) => theme.colors.primary};
      }
      .highlignt {
        background: ${({ theme }) => theme.colors.aeroBlue};
      }
    }
    .testmonial-people {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 16px;
      gap: 9px;
      .textmonial-img {
        min-height: 35px;
        max-height: 35px;
        min-width: 35px;
        max-width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border-radius: 50%;
        overflow: hidden;
        img {
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
      p {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        font-weight: 700;
        margin-bottom: 0px;
        line-height: 20px;
        span {
          font-weight: 500;
          font-size: 13px;
          color: ${({ theme }) => theme.colors.textColor};
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 70px;
    .newsletter-testmonial-tab-btns {
      ul {
        flex-wrap: wrap;
        li {
          width: 48%;
          margin-bottom: 20px;
          button {
            padding: 10px 5px;
            img {
              margin-right: 7px;
            }
          }
        }
      }
    }
  }
`;

export default NewsletterTestimonialStyle;
