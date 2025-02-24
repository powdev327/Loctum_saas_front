import styled from "styled-components";

const NewsletterFeaturesStyle = styled.section`
  padding-bottom: 110px;
  .newsleter-features-card {
    background: ${({ theme }) => theme.colors.whiteColor};
    border-radius: 20px;
    margin-bottom: 30px;
    .newsleter-features-card-img {
      img {
        width: 100%;
      }
    }
  }
  .newsleter-features-card-text {
    padding: 32px 30px 35px 30px;
    h5 {
      margin-bottom: 19px;
      max-width: 290px;
    }
    p {
      margin-bottom: 16px;
    }
    a {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.title};
      transition: 0.3s;
      img {
        margin-left: 10px;
        filter: brightness(0);
        transition: 0.3s;
      }
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        img {
          filter: none;
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 50px;
    .newsleter-features-card-text {
      padding: 20px;
    }
  }
`;

export default NewsletterFeaturesStyle;
