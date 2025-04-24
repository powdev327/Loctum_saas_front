import styled from "styled-components";

const SassVideoStyle = styled.section`
  padding-top: 100px;
  padding-bottom: 109px;
  .sass-video-container {
    padding: 23px;
    width: 100%;
    position: relative;
    .shape1 {
      position: absolute;
      z-index: 2;
      top: 50px;
      left: 125px;
      transition: 0.3s;
    }
    .shape2 {
      position: absolute;
      z-index: 2;
      bottom: 66px;
      left: 0px;
    }
    .shape3 {
      position: absolute;
      z-index: 2;
      top: 177px;
      right: 0px;
    }
    .shape4 {
      position: absolute;
      z-index: 0;
      bottom: 160px;
      right: 160px;
      transition: 0.3s;
    }
    .video-card {
      overflow: hidden;
      height: 450px;
      margin: auto;
      max-width: 770px;
      width: 100%;
      background: #d9d9d9;
      border-radius: 30px;
      z-index: 1;
      position: relative;
      video {
        object-fit: fill;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 1199px) {
    .sass-video-container {
      .shape1 {
        left: 2%;
      }
      .shape4 {
        right: 5%;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .sass-video-container {
      .video-card {
        height: 400px;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 55px;
    .sass-video-container {
      .video-card {
        height: 320px;
      }
    }
  }
  @media screen and (max-width: 575px) {
    padding: 0px;
    .sass-video-container {
      margin-bottom: 50px;
      .video-card {
        height: 270px;
      }
    }
  }
`;

export default SassVideoStyle;
