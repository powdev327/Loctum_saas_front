import styled from "styled-components";

const MeetVirtuallyStyleWrapper = styled.section`
  padding: 65px 0 136px 0;

  /*-- virtually-card style --*/
  .virtually-card {
    .virtually-title {
      margin-bottom: 44px;
      p {
        margin-bottom: 16px;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.primary};
        letter-spacing: 0.2em;
      }
    }
    .virtually-content {
      margin-bottom: 6px;
      h2 {
        margin-bottom: 24px;
        font-size: 24px;
        line-height: 24px;
      }
    }
    .list {
      padding: 0;
      list-style: none;
      .list-item {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
        padding-left: 20px;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 6px;
          height: 15px;
          width: 8px;
          border-bottom: 2px solid ${({ theme }) => theme.colors.iconColor};
          border-right: 2px solid ${({ theme }) => theme.colors.iconColor};
          transform: rotate(45deg);
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    padding-top: 10px;
    padding-bottom: 60px;

    .virtually-img {
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 575px) {
    .virtually-card .virtually-title h2 {
      font-size: 30px;
      line-height: 50px;
    }
  }
`;

export default MeetVirtuallyStyleWrapper;
