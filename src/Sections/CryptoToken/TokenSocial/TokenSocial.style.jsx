import styled from "styled-components";

const TokenSocialStyle = styled.div`
  padding: 140px 0px;
  .crypto-social-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0px -15px;
    .crypto-social-link {
      padding: 0xp 15px;
      width: 20%;
      &:hover{
        .crypto-social-icon{
          img{
            transform: translateY(-48px);
          }
        }
      }
      .crypto-social-icon{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        max-width: 72px;
        max-height: 42px;
        overflow: hidden;
        img{
          margin-bottom: 10px;
          transition: 0.3s;
        }
      }
    }
  }
  .crypto-social-btn {
    background-color: ${({ theme }) => theme.colors.whiteColor}0d;
    border-radius: 30px;
    height: 210px;
    max-width: 210px;
    width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1199px) {
    .crypto-social-list {
      //        margin: 0px;
      .crypto-social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        //            width: 100%;
        a {
          width: 100%;
        }
        .crypto-social-btn {
          max-width: 160px;
          height: 160px;
          margin: auto;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .crypto-social-list {
      .crypto-social-link {
        .crypto-social-btn {
          max-width: 130px;
          height: 130px;
          &:hover{
            .crypto-social-icon{
              img{
                transform: translateY(-30px);
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 80px 0px;
    .crypto-social-list {
      flex-wrap: wrap;
      .crypto-social-link {
        .crypto-social-btn {
          padding: 20px;
          max-width: 100px;
          height: 100px;
          
          .crypto-social-icon {
              max-width: 36px;
              max-height: 21px;
          }
        }
      }
    }

  }
  @media screen and (max-width: 575px) {
    padding: 80px 0px 50px 0px;
    .crypto-social-list {
      .crypto-social-link {
        width: 33.33%;
        margin-bottom: 30px;
      }
    }
  }
  @media screen and (max-width: 425px) {
    .crypto-social-list {
      .crypto-social-link {
        .crypto-social-btn {
          max-width: 90px;
          height: 90px;
        }
      }
    }
  }
`;

export default TokenSocialStyle;
