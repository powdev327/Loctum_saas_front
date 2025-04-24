import styled from "styled-components";

const BusinessRatingStyle = styled.section`
  padding: 120px 0 140px 0;

  .rating-card {
    border: 1px dashed ${({ theme }) => theme.colors.blackColor}26;
    border-radius: 60px;
    padding: 35px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }

  .rating-item {
    display: flex;
    align-items: center;
    gap: 24px;
    .rating-icon {
      img {
        width: 40px;
        height: 40px;
      }
    }
    .rating-info {
      h2 {
        line-height: 24px;
        font-size: 24px;
      }
    }

    .rating-meta {
      padding: 0;
      list-style: none;
      margin-top: 5px;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      gap: 20px;
      li {
        position: relative;
        &:not(:first-child) {
          &::before {
            position: absolute;
            content: "|";
            top: 0;
            left: -10px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .rating-item {
      display: flex;
      align-items: center;
      gap: 15px;

      .rating-icon {
        img {
          width: 30px;
          height: 30px;
        }
      }

      .rating-info {
        h2 {
          @include textStyle(20px, 700, 24px);
        }
      }

      .rating-meta {
        margin-top: 0px;
        gap: 10px;
        li {
          &:not(:first-child) {
            &::before {
              left: -5px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 60px 0 80px;
    .rating-card {
      padding: 30px 28px;
      gap: 20px;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default BusinessRatingStyle;
