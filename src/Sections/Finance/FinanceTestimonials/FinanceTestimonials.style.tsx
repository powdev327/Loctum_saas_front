import styled from "styled-components";

import QuoteImg from "../../../assets/images/finance-index/card-quote-img.png";

const FinanceTestimonialsStyle = styled.section`
  padding-top: 120px;
  padding-bottom: 132px;

  .customers-quote-card {
    background: ${({ theme }) => theme.colors.whiteColor};
    box-shadow: 0px 5px 10px ${({ theme }) => theme.colors.blackColor}0d;
    border-radius: 30px;
    height: auto;
    position: relative;
    overflow: hidden;
    .customers-quote-bg {
      position: absolute;
      left: 9%;
      bottom: 117px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .quote-icon {
      position: absolute;
      top: 18%;
      right: 46%;
    }
    &::before {
      content: url(${QuoteImg});
      position: absolute;
      left: 0px;
      top: 48px;
      z-index: 0;
    }
    .customers-quote-content {
      padding-top: 100px;
      padding-bottom: 49px;
      padding-right: 50px;
      position: relative;
      z-index: 2;
    }
  }
  /*-- customers-quote-img --*/
  .customers-quote-img {
    position: relative;
    min-height: 298px;
    max-width: 320px;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .quote-customers-img {
      position: relative;
      z-index: 2;
    }
  }

  /*-- customers-quote-text --*/
  .customers-quote-text {
    max-width: 520px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
    .quote-icon {
      margin-bottom: 42px;
    }
    p {
      font-family: ${({ theme }) => theme.fonts.dmSans};
      font-size: 18px;
      font-weight: 500;
      line-height: 36px;
      color: ${({ theme }) => theme.colors.title};
      margin-bottom: 27px;
      overflow: hidden;
      display: -webkit-box !important;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
    .quote-customer-name {
      color: ${({ theme }) => theme.colors.title};
      font-family: ${({ theme }) => theme.fonts.dmSans};
      .name {
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        display: block;
      }
      .duration {
        display: block;
      }
    }
  }

  /*-- customers-quote-card-footer --*/
  .customers-quote-card-footer {
    border-top: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    padding: 20px 38px;
    position: relative;
    &::before {
      position: absolute;
      top: -2px;
      left: 0px;
      content: "";
      height: 2px;
      width: 30%;
      background: ${({ theme }) => theme.colors.primary6Deep};
      animation: lineProgress 12s linear infinite;
      -webkit-animation: lineProgress 12s linear infinite;
    }
    .quote-slider-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        margin: auto;
      }
    }
    .slick-list {
      padding: 0 !important;
    }

    .slick-track {
      width: 100% !important;
      transform: translate3d(0px, 0px, 0px) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    .slide-item {
      cursor: pointer;
      opacity: 0.6;
      &.slick-current {
        opacity: 1;
      }
    }
  }

  @keyframes lineProgress {
    0% {
      width: 0%;
    }

    100% {
      width: 100%;
    }
  }

  @media screen and (max-width: 1850px) {
    .nft-header-section {
      .nft-has-submenu {
        .nft-submenu {
          left: auto;
          right: 110%;
        }
      }
    }
  }

  @media screen and (max-width: 1699px) {
    /*-- home page 3 style start --*/
    .main-feature-section {
      .shape-img {
        &.img-1 {
          bottom: 80px;
          left: 35%;
        }

        &.img-2 {
          bottom: 43%;
          right: 35%;
        }
      }
    }

    /*-- home page 3 style end --*/

    /*-- home page 4 style start --*/
    .why-choose-parent {
      .overlay-left,
      .overlay-right {
        width: 13%;
      }
    }
    /*-- home page 4 style end --*/

    /*-- index 6 start --*/
    .happy-customers-section {
      .happy-customers-content {
        .happy-customers-slide-text {
          p {
            min-width: auto;
          }
        }
        .happy-customers-slide-img {
          max-width: 235px;
          height: 235px;
          margin: auto;
          margin-top: 60px;
        }
      }
    }

    .hero-section-v6 {
      .v6hero-img {
        margin-top: -18%;
      }
    }
    /*-- index 6 End --*/
  }

  @media screen and (max-width: 1600px) {
    .footer-section {
      &.v4,
      &.v4 {
        &::before {
          width: 34%;
        }
      }
    }
    .building-section-4 {
      &::before {
        width: 34%;
      }

      &::after {
        width: calc(100% - 34%);
      }
    }
    /*-- crypto index start --*/
    .hero-overlay {
      .banner-vector {
        margin-top: 80%;
      }
    }
    /*-- crypto index End --*/

    /*-- defi index start --*/
    .defi-footer-section {
      .footer-row {
        &::before {
          width: 29%;
        }
        &::after {
          width: 71%;
        }
      }
    }
    /*-- defi index end --*/
  }

  @media screen and (max-width: 1499px) {
    /*-- home page 3 style start --*/
    .main-feature-section {
      .shape-img {
        &.img-1 {
          bottom: 80px;
          left: 31%;
        }

        &.img-2 {
          bottom: 43%;
          right: 31%;
        }
      }
    }

    /*-- home page 3 style end --*/

    /*-- home page 4 style start --*/
    .why-choose-parent {
      .overlay-left,
      .overlay-right {
        width: 10%;
      }
    }
    /*-- home page 4 style end --*/

    /*-- index 8 start --*/
    .v8banner-text {
      min-height: 650px;
    }
    .v8banner-video {
      video {
        min-height: 650px;
      }
    }

    /*-- app-landing page --*/
    .testimonial-slider {
      .slider-item {
        p {
          font-size: 15px;
          line-height: 28px;
        }
      }
    }
    .stay-connect-content {
      max-height: auto;
      min-height: auto;
    }
    /*-- index 8 end --*/

    .footer-menu-list {
      h5 {
        font-size: 16px;
      }
    }

    /*-- marketplace start --*/
    .nft-header-left {
      gap: 40px;
      form {
        width: 370px;
      }
    }
    .top-artists-list {
      flex-wrap: wrap;
      li {
        width: 25%;
      }
    }
    .nft-header-right {
      gap: 30px;
      .nft-menu {
        gap: 30px;
      }
    }

    .footer-top-section {
      .footer-top-text {
        &.right {
          margin-left: 50px;
        }
      }
    }

    /*--  Item Details i --*/
    .item-details-info {
      padding-right: 0px;
      .item-details-btns {
        button {
          width: 46%;
        }
        .item-details-timer {
          width: 50%;
          padding: 17.5px 20px;
        }
      }
    }

    /*-- Discover page --*/
    /*-- discover nft page --*/
    .discover-filter-section {
      &.left {
        padding-right: 0px;
      }
      &.right {
        padding-left: 0px;
      }
    }
    .item-details-info {
      &.right {
        padding-left: 0px;
      }
      &.left {
        padding-right: 0px;
      }
    }

    /*-- marketplace end --*/

    /*-- crypto token start --*/
    .crypto-token-banner-inner {
      .overlay {
        padding-top: 200px;
      }
    }
    .crypto-token-banner-text {
      margin-bottom: 80px;
      h1 {
        font-size: 90px;
        margin-bottom: 30px;
      }
      p {
        margin-bottom: 40px;
      }
    }
    .crypto-token-banner-inner {
      .overlay {
        .masd-grad {
          right: 0px;
        }
      }
    }
    .crypto-banner-card {
      h2 {
        font-size: 40px;
        margin: 4px 0px;
      }
    }
    .crypto-banner-card2 {
      padding: 19.5px 38px;
    }
    .scroll-text-inner {
      ul {
        li {
          font-size: 90px;
        }
      }
    }
    .token-footer-bottom-text {
      .text {
        font-size: 97px;
        text-align: center;
      }
    }

    /*-- crypto token end --*/
  }

  @media screen and (max-width: 1399px) {
    .header-extra {
      gap: 20px;
    }
    .main-menu {
      gap: 20px;
    }

    .footer-section {
      &.v3,
      &.v4 {
        &::before {
          width: 32%;
        }
      }
    }

    .building-section-4 {
      &::before {
        width: 32%;
      }

      &::after {
        width: calc(100% - 32%);
      }
    }

    /*-- crypto index start --*/
    .hero-overlay {
      .banner-vector {
        margin-top: 90%;
      }
    }
    /*-- crypto index End --*/

    /*-- corporate index --*/
    .about-company-right ul li {
      padding: 10px 10px 10px 14px;
    }
  }

  @media screen and (max-width: 1280px) {
    .community-section {
      img {
        opacity: 30%;
      }
    }
  }
  @media screen and (max-width: 1199px) {
    /*-- home page style start --*/
    .hero-content {
      &-text {
        h2 {
          @include textStyle(55px, 700, 80px);
        }
      }
    }
    .hero-img {
      &::before {
        left: 0;
      }

      .overlay {
        left: 0px;
      }
    }

    /*-- footer-section start --*/
    /*-- .footer-follow style --*/
    .footer-follow {
      gap: 15px;

      .social-link {
        gap: 15px;
      }
    }
    .footer-rating {
      gap: 20px;
    }

    /*-- footer-section end --*/
    /*-- home page style end --*/

    /*-- home page 2 style start --*/
    .hero-content2-text {
      & h2 {
        font-size: 40px;
        line-height: 40px;
      }
    }
    .index2-statistics-section {
      min-height: auto;
      .index2-statistics-content {
        min-height: auto;
        padding: 60px 20px;
      }
    }
    .statistics-text {
      & h2 {
        font-size: 30px;
        line-height: 35px;
      }
    }
    .feature-team-section.v6 {
      .feature-team-slider-for {
        margin-bottom: 45px;
      }
    }
    .index2-integration-section {
      & .index2-integration-auto-slider-list {
        & ul li {
          height: 80px;
          width: 80px;
        }
      }
    }
    .business-tools-section {
      & .business-tools-text {
        & h4 {
          font-size: 20px;
          line-height: 16px;
          margin-bottom: 25px;
        }
      }
    }
    .section-title {
      h2 {
        font-size: 36px;
        line-height: 45px;
      }
      .title {
        .caveat {
          font-size: 40px;
        }
      }
    }
    /*-- home page 2 style end --*/

    /*-- home page 3 style start --*/
    .hero-section-3-header {
      .shape-img {
        &.img-1 {
          left: 0;
        }

        &.img-2 {
          right: 0;
        }
      }
    }
    .main-feature-section {
      .shape-img {
        &.img-1 {
          bottom: 80px;
          left: 31%;
        }

        &.img-2 {
          bottom: 47%;
          right: 30%;
        }
      }
    }
    .meeting-anytime-card-content {
      width: 55%;
    }
    .best-pricing-grid {
      flex-wrap: wrap;
    }
    .best-pricing-card {
      width: 50%;
    }
    .best-pricing-card {
      &:first-child {
        border-radius: 30px 0 0 0;
      }

      &:nth-child(3) {
        border-radius: 0 0 0 30px;
      }

      &:last-child {
        border-radius: 0 0 30px 0;
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-left: 0;
      }

      &.active {
        border-left: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-right: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      }
    }

    /*-- home page 3 style end --*/

    /*-- home page 4 style start --*/
    .hero-section-4-content {
      .hero-content-text h2 {
        font-size: 50px;
      }
    }
    .testimonial-section-4-slider {
      &::before,
      &::after {
        width: 200px;
      }
    }
    .why-choose-section {
      .wrapper {
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
      }

      .section {
        top: 100px;
        height: auto;
      }
    }

    .why-choose-tab {
      margin-bottom: -40px;
      .tab-btn {
        width: 25%;
      }
    }

    /*-- home page 4 style end --*/

    /*-- about-us page style start --*/
    .about-feature-tab {
      .tab-body {
        &-list {
          gap: 25px;
        }
      }
    }
    .about-feature-slider-for {
      .slider-item {
        .list {
          gap: 25px;
        }
      }
    }

    /*-- about-us page style end --*/

    /*-- service page style start --*/
    .core-feature-item {
      max-width: 100%;
    }
    /*-- service page style end --*/

    h1,
    .hero-section-index5 .index5-hero-content .v5banner-text .banner-title {
      font-size: 54px;
    }
    .section-title {
      margin-bottom: 30px;
    }
    .index2-integration-section {
      & .index2-integration-auto-slider-list {
        & ul li {
          height: 80px;
          width: 80px;
        }
      }
    }
    .business-tools-section {
      .business-tools-img-list {
        min-width: 350px;
        max-width: 350px;
        min-height: 350px;
        max-height: 350px;
      }

      .business-tools-content-scrolspy {
        padding-top: 75px;

        .business-tools-content {
          min-height: 350px;
        }
      }

      .list-group {
        padding-top: 80px;
      }
    }
    .business-tools-row {
      gap: 40px;

      .sidebar {
        max-width: 350px;
        width: 100%;
      }
    }
    .business-tools-content-scrolspy {
      padding-top: 100px;
    }
    .blog-details-inner {
      .blog-tag-section {
        ul {
          li {
            padding: 4px 16px;
          }
        }

        button {
          padding: 5px 16px;
        }
      }
    }
    .hero2-img {
      .hero2-image1 {
        padding: 12px;
        height: 120px;
        width: 120px;
      }

      .hero2-image2 {
        left: 0px;
      }

      .hero2-image4 {
        left: 0px;
      }
    }

    .compare-price-content {
      .compare-price-icons3 {
        right: -37px;
        height: 80px;
        width: 80px;
      }

      .compare-price-icons1 {
        left: -66px;
        height: 60px;
        width: 60px;
      }
    }

    .hero-section-index5 .index5-hero-content .v5banner-text h2 {
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 17px;
    }

    .happy-customers-section {
      .happy-customers-content {
        .happy-customers-slide-text {
          ul {
            margin-bottom: 20px;
          }

          p {
            font-size: 19px;
            line-height: 35px;
            margin-bottom: 10px;
          }
        }
      }
    }

    .case-studies-section .case-studies-left h2 {
      font-size: 36px;
    }

    .portfolio-section .portfolio-title .portfolio-subtitle h2 {
      font-size: 36px;
    }

    .footer-testimonial-section .footer-testimonial-left form button {
      padding: 12px 22px;
    }
    .happy-customers-section .happy-customers-bg .happy-customers-bg-img {
      height: 1500px;
    }

    /*-- Index6 Start--*/
    /* Hero Section */
    .hero-section6 {
      margin-bottom: 80px;

      .container {
        padding-top: 180px;
        padding-bottom: 120px;

        .banner-vector-line1 {
          height: 38%;
          right: 28%;
        }

        .banner-vector-line2 {
          height: 73.5%;
          right: 35.4%;
        }
      }
    }
    .v6-banner-text {
      .banner-title {
        font-size: 48px;
        line-height: 58px;
      }

      p {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 30px;
      }
    }
    /* index6-card */
    .index6-card-section {
      padding-bottom: 40px;
      &.index8-card-section {
        padding-bottom: 50px;
      }
    }
    /* lets-talk section */
    .lets-talk-section {
      margin: 80px 0px;
    }
    .lets-talk-text {
      h3 {
        font-size: 33px;
        line-height: 50px;
        margin-bottom: 30px;
      }
    }
    /* benefits section */
    .benefits-faq {
      padding-left: 30px;
    }
    .benefits-img-bg .benefits-img-chart {
      width: 50%;
    }
    padding: 80px 0px 75px;
    /* feature-team-section */
    .feature-team-section.v6 {
      padding: 80px 0px;
    }
    /* blog-post section */
    .blog-post-section {
      padding-bottom: 80px;
    }
    .footer-section {
      &.v6 {
        .footer-top {
          padding-top: 80px;
        }
      }
    }
    .customers-quote-card .customers-quote-bg {
      left: 7%;
    }
    .v7hero-section-text .banner-text h2 {
      font-size: 55px;
    }
    .portfolio-gallery-section {
      padding-bottom: 80px;
    }

    /*-- Index6 End--*/

    /*-- Index 8 start --*/
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
    .brands-section.v8 {
      padding: 40px 20px;
      margin-bottom: 72px;
    }
    .v8banner-text .title {
      font-size: 44px;
    }
    /*-- Index 8 end --*/
    .index8-accounting-section {
      padding-bottom: 70px;
    }

    @keyframes move {
      25% {
        transform: translatey(6%);
        opacity: 1;
      }

      50% {
        transform: translatey(-30%);
      }

      75% {
        transform: translatey(-65%);
      }
    }

    /*-- ChatBot Start --*/
    .v8banner-section.chatbot-banner {
      .chatbot-banner-text {
        max-width: 430px;
        min-height: 650px;
        .title {
          font-size: 40px;
          font-weight: 700;
          line-height: 60px;
        }
      }
    }
    .chatbot-banner-video {
      .chatbot-banner-video-overlay {
        .banner-chat-section {
          max-width: 345px;
          video {
            min-height: 600px;
            max-width: auto;
          }
        }
      }
    }
    .start-free-form {
      max-height: 64px;
      .bg-blue-btn {
        padding: 8px 20px;
      }
    }

    .chatbot-newslater {
      h2 {
        font-size: 36px;
      }
    }
    .chatbot-footer-card {
      padding: 70px 30px;
    }
    .chatbot-footer-right {
      padding-left: 15px;
    }
    .subscribe-form {
      .bg-blue-btn {
        padding: 7px 14px;
      }
    }

    /*-- ChatBot End --*/

    /*-- Newsletter Index Start --*/
    .hero-section2.newslater {
      min-height: auto;
      padding-top: 170px;
      margin-bottom: 30px;
      .new-hoogle {
        margin-bottom: 10px;
      }
      .banner-title {
        font-size: 46px;
        .animation-text {
          b {
            font-size: 70px;
          }
        }
      }
      p {
        font-size: 16px;
        margin-bottom: 30px;
      }
    }
    .leading-email-card {
      padding: 40px 50px;
    }
    .leading-email-left {
      h3 {
        font-size: 24px;
        line-height: 36px;
        span {
          font-size: 36px;
        }
      }
    }
    .powerful-email-section {
      padding-bottom: 140px;
    }
    .powerful-email-left {
      .email-collaps-list {
        .email-collaps-item {
          gap: 20px;
          .email-collaps-text {
            h3 {
              margin-top: 20px;
              font-size: 24px;
            }
          }
        }
      }
    }
    .newsletter-get-demo-left {
      h2 {
        font-size: 32px;
      }
    }
    /*-- Newsletter Index End --*/

    /*-- marketplace start --*/
    .nft-banner-section {
      padding-top: 80px;
    }
    .nft-banner-right {
      padding-left: 0px;
    }
    .top-artists-list {
      li {
        width: 33.333%;
      }
    }
    .nft-header-left {
      form {
        width: 250px;
      }
    }
    .nft-banner-right {
      .nft-banner-title {
        font-size: 32px;
        line-height: 50px;
        max-width: 300px;
      }
    }
    .nft-bid-info {
      p {
        font-size: 16px;
        margin-bottom: 20px;
      }
      h4 {
        font-size: 20px;
      }
      .nft-banner-timer {
        font-size: 20px;
        max-width: 210px;
      }
    }
    .nft-banner-left {
      padding-top: 50px;
      .item.slick-slide {
        width: 300px;
        height: 350px !important;
      }
    }

    /*--  Item Details i --*/
    .item-details-info {
      padding-right: 0px;
      .item-details-btns {
        button {
          width: 38%;
          padding: 17.5px 20px;
        }
        .item-details-timer {
          width: 58%;
        }
      }
    }

    /*-- discover nft page --*/
    .discover-filter-section {
      margin-bottom: 70px;
    }
    /*-- marketplace end --*/

    /*-- App Landing Page Start --*/
    .testimonial-section-4 {
      &.app-testimonial-section {
        .testimonial-btns {
          a {
            padding: 12px 34px;
          }
        }
      }
    }
    /*-- App Landing Page End --*/

    /*-- Crypto Wallet Start --*/
    .crypto-features-text {
      padding-right: 20px;
    }
    .hero-overlay {
      .banner-vector {
        margin-top: 110%;
      }
    }

    /*-- Crypto Wallet End --*/

    /*-- corporate index start --*/
    .brands-section.corporate-brands-section {
      padding: 100px 0px;
    }
    /*-- corporate index end --*/

    /*-- crypto wallet 2 start --*/
    .crypto2-benifits-card {
      padding: 40px;
    }
    .support-card {
      overflow: hidden;
      padding: 50px;
      .dot-bg {
        top: -100px;
      }
    }
    /*-- crypto wallet 2 end --*/

    /*-- crypto token start --*/
    .crypto-token-banner-text {
      h1 {
        font-size: 80px;
      }
    }
    .text-with-img {
      font-size: 45px;
    }
    .crypto-token-partners {
      .partners-title {
        font-size: 45px;
        margin-bottom: 40px;
      }
    }
    .crypto-banner-card {
      padding: 25px 30px;
      h2 {
        font-size: 30px;
      }
      &2 {
        padding: 15px 30px;
        h2 {
          font-size: 30px;
        }
      }
    }
    .number-diy {
      .data {
        font-size: 30px !important;
        div {
          width: 20px !important;
          span {
            width: 20px !important;
          }
        }
      }
    }
    .token-footer-bottom-text {
      .text {
        font-size: 81px;
      }
    }

    .crypto-token-partners {
      .partners-logo {
        min-width: 160px;
        min-height: 160px;
        padding: 20px;
      }
    }

    .scroll-text-inner {
      ul {
        li {
          font-size: 70px;
        }
      }
    }

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

    /*-- crypto token end --*/

    /*-- Sass Landing Page start --*/
    .sass-landing-hero-bg {
      .banner-shape-list {
        transform: rotate(-20deg);
        bottom: 148px;
        left: -11px;
        width: 114%;
      }
    }
    .sass-landing-banner-shapes {
      .shape5 {
        right: 0px;
      }
    }

    .sass-video-container {
      .shape1 {
        left: 2%;
      }
      .shape4 {
        right: 5%;
      }
    }
    .sass-demo-shapes {
      .shape2 {
        top: 10px;
      }
    }
    /*-- Sass Landing Page end --*/

    /*-- defi index start --*/
    .ecosystem-content {
      max-width: 755px;
    }
    .defi-get-update-card {
      padding: 20px;
      p {
        font-size: 14px;
      }
    }
    .defi-metaverse-card2 {
      .overlay {
        padding: 50px;
      }
    }
    .defi-metaverse-card3 {
      .overlay {
        padding: 40px 40px 20px 40px;
      }
    }
    .defi-backed-list {
      ul {
        li {
          min-height: 100px;
          max-height: 100px;
        }
      }
    }
    /*-- defi index end --*/

    /*-- auth style start --*/
    .auth-page-header {
      margin-bottom: 80px;
    }
    .auth-form-section {
      max-width: 400px;
      padding-left: 50px;
      padding-right: 50px;
    }
    /*-- auth style end --*/
  }

  @media screen and (min-width: 991px) and (max-width: 1200px) {
    .header-extra {
      .btn-light-green {
        width: 130px;
      }
    }
    .header-section {
      .main-menu {
        li {
          a {
            font-size: 13px;
          }
        }
      }
      .header-extra {
        li {
          a {
            font-size: 13px;

            img {
              max-width: 18px;
            }
          }
        }
      }
    }
    .language-dropdown {
      button {
        font-size: 13px;
        width: 90px;
        height: 44px;
      }
    }

    /*-- Index 1 Start --*/
    .feature-card {
      h2 {
        margin-bottom: 5px;
      }

      p {
        font-size: 13px;
        line-height: 24px;
      }

      &-icon {
        margin-bottom: 16px;
      }
    }
    /*-- Index 1 End --*/

    /*--Inded 1 Featers Start --*/
    /*--Inded 1 Featers End --*/
    .index2-features-section .index2-features-card {
      padding: 100px 60px;
    }
    /*-- Header Section Start --*/
    .main-menu {
      gap: 25px;
    }
    .header-extra {
      gap: 25px;
    }
    /*-- Header Section End --*/

    /*-- index 8 Start --*/
    .index6-card.index8-card {
      .index8-card-text {
        bottom: -132px;
      }

      a {
        margin-top: 0px;
      }

      &:hover {
        .index8-card-text {
          bottom: 0px;
        }
      }
    }
    @keyframes smothShow {
      0% {
        bottom: -132px;
      }

      100% {
        bottom: 0px;
      }
    }

    /*-- index 8 End --*/

    /*-- App Landing Page Start --*/
    .app-useful-features-card {
      .card-content {
        padding: 20px;
        p {
          font-size: 13px;
        }
      }
    }
    /*-- App Landing Page End --*/
    /*-- crypto index start --*/
    .os-btns {
      .os-btn {
        min-width: 106px;
        min-height: 106px;
        border-radius: 20px;
      }
    }
    /*-- crypto index end --*/

    /*-- corporate menu css --*/
    .corporate-header {
      .main-menu {
        gap: 10px;
      }
      .header-extra {
        gap: 18px;
      }
      &.header-section {
        .header-navbar-container {
          gap: 30px;
        }
        .header-navbar-content {
          gap: 20px;
        }
      }
    }
    .coroprate-banner-section {
      .overlay {
        padding: 140px 0px;
      }
    }
    .best-services-text {
      padding: 25px 20px;
    }
    .about-company-right {
      ul {
        li {
          padding: 10px 5px;
          span {
            font-size: 13px;
          }
        }
      }
    }

    .best-services-section {
      .slick-prev {
        left: -225px;
      }

      .slick-next {
        left: -145px;
      }
    }

    .our-value-text {
      .our-value-icon {
        &1 {
          right: -130px;
        }
        &2 {
          right: -75px;
        }
        &3 {
          left: -130px;
        }
        &4 {
          left: -75px;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    .nav-expander {
      display: block;
    }
    .mobile-navbar-menu span.submenu-button::before {
      right: 26px;
    }
    .mobile-navbar-menu span.submenu-button::after {
      right: 21px;
    }
    .feature-team-slider-for .slider-item h2 {
      font-size: 32px;
      line-height: 44px;
    }
    .feature-team-slider-nav .slick-track {
      gap: 15px;
    }
    .blog-post-card .card-title h4 {
      font-size: 22px;
      line-height: 34px;
    }
    .blog-post-card .card-title h3 {
      font-size: 24px;
      line-height: 36px;
    }

    /*-- home page style start --*/
    .header-navbar-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 320px;
      height: 100%;
      background-color: black;
      padding: 30px;
      flex-direction: column;
      align-items: flex-start !important;
      justify-content: flex-start !important;
      transition: 0.3s;
      transform: translateX(-155%);
      height: 100vh;

      &.show {
        transform: translateX(0%);
      }
    }

    .main-menu {
      flex-direction: column;
      align-items: flex-start;

      li {
        position: relative;
        a {
          padding: 0px;
        }
        &:hover {
          .dropdown-toggle {
            &::after {
              transform: rotate(0deg);
            }
          }

          .submenu {
            transform: translateY(10px);
          }
        }
      }

      .submenu {
        display: none;
        position: unset;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: transparent;
        border: none;
        box-shadow: none;
        border-top: 0;
        padding: 5px 0;
        transform: translateY(10px);
        transition: 0.3s;
        opacity: 1;
        visibility: visible;

        li a {
          padding: 10px 15px;
        }

        &.show {
          display: block;
        }
      }
    }

    .header-extra {
      margin-top: 30px;
      // flex-direction: column;
      // align-items: flex-start;
    }

    .header-section:not(.v6) {
      background: ${({ theme }) => theme.colors.whiteColor};
      padding: 15px 0px;
    }

    .header-section {
      .logo-light {
        display: none;
      }
      .logo-dark {
        display: block !important;
      }
      &.v2 {
        .header-navbar-content {
          background-color: white;
          box-shadow: 0px 10px 15px ${({ theme }) => theme.colors.blackColor}14;
        }

        .dropdown-toggle {
          &::after {
            filter: none;
          }
        }

        .submenu {
          background-color: transparent;
          box-shadow: none;
        }
      }
    }

    .qr-code-btn {
      .view-qr {
        height: 40px;
        width: 40px;
        padding: 11px;
      }
    }

    .hero-content-text p {
      max-width: 500px;
      margin: auto;
      margin-top: 15px;
    }
    .hero-img {
      margin-top: 110px;
      text-align: center;
    }
    .hero-img {
      .overlay {
        top: -13%;
        left: 38%;
      }
    }

    .usability-section {
      padding: 0px 0 70px 0;
    }
    .marketing-section {
      padding-top: 70px;
    }

    .usability-card {
      height: 600px;
      padding: 84px 50px 20px 50px;

      &-title {
        margin-bottom: 44px;

        h2 {
          @include textStyle(40px, 700, 60px);
        }
      }

      .usability-buttons {
        margin-bottom: 50px;
        gap: 20px;

        //flex-wrap: wrap;
        button {
          width: 180px;
          height: 50px;
          gap: 10px;
        }
      }
    }

    .usability-slider-nav {
      .slider-item {
        width: 175px !important;
        gap: 10px;
      }
    }

    .usability-slider-for {
      margin-top: 40px;
    }

    .marketing-img {
      width: 480px;
      height: 420px;
      margin-bottom: 40px;
    }

    .testimonial-card {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      &-left,
      &-right {
        width: 100%;
        min-height: 530px;
        height: unset;
      }
    }

    /*-- footer-section start --*/
    .footer-section {
      &.v2 {
        .footer-widget {
          margin-top: 40px;
        }
      }

      &.v3 {
        &::before {
          display: none;
        }

        .footer-widget {
          margin-top: 40px;
        }
      }

      &.v4 {
        &::before {
          display: none;
        }

        .footer-copyright {
          margin-top: 20px;
        }
      }
    }

    .footer-card {
      margin-bottom: 40px;
    }
    /*-- footer-section end --*/

    /*-- home page style end --*/
    .index2-features-section {
      .index2-features-card {
        padding: 80px 60px;

        .features2-contents {
          margin-top: 40px;
        }
      }
    }

    .compare-price-content {
      & .compare-price-card {
        padding: 40px 28px;
      }

      & .compare-price-list {
        & ul li {
          font-size: 15px;
        }
      }
    }

    .index2-integration-section {
      & .index2-integration-auto-slider {
        &:after,
        &:before {
          width: 200px;
        }
      }

      & .index2-integration-auto-slider-list {
        gap: 50px;

        & ul {
          gap: 50px;

          & li {
            height: 60px;
            width: 60px;
          }
        }
      }
    }

    /*-- home page 2 style end --*/

    /*-- home page 3 style start --*/
    .main-feature-section {
      .shape-img {
        display: none;
      }
    }

    .useful-feature-slider-nav {
      .slick-track {
        margin: 0 -7px;
      }

      .slider-item {
        margin: 7px;
        width: fit-content !important;
        height: 50px !important;
        padding: 13px 28px;
      }
    }

    .meeting-anytime-card .overlay {
      display: none;
    }

    .meeting-anytime-card-content {
      width: 100%;
    }

    .virtually-img {
      margin-bottom: 40px;
    }

    .counter-card {
      padding: 30px;
    }

    .useful-feature-tab-img {
      margin-top: 30px;
    }

    .useful-feature-slider-for {
      margin-top: 40px;

      .slider-item {
        flex-direction: column;
        gap: 20px;

        &-left,
        &-img {
          width: 100%;
        }
      }
    }

    /*-- home page 3 style end --*/

    /*-- home page 4 style start --*/
    .hero-section-4 {
      padding: 150px 0px 80px 0px;
      &::before {
        display: none;
      }
    }
    .hero-section-4-content {
      .hero-content-text {
        text-align: center;
        max-width: 480px;
        margin: auto;
        margin-bottom: 30px;
        &::before {
          left: 60px;
        }
      }
    }

    .hero-section-4-content {
      margin-bottom: 50px;
    }

    .hero-section-4-img {
      margin: auto;
      width: fit-content;
      .overlay-item {
        &.item-2 {
          left: 0px;
        }

        &.status {
          left: 0;

          > img {
            width: 140px;
            height: 140px;
          }

          .pie_progress {
            width: 100px;
            height: 100px;
          }

          .pie_progress__label h4 {
            @include textStyle(24px, 700, 30px);
          }

          .pie_progress__label p {
            @include textStyle(12px, 500, 20px);
          }
        }
      }
    }
    .why-choose-tab {
      .tab-btn {
        span {
          &:nth-child(2) {
            display: none;
          }
        }
      }
    }
    .rating-card {
      padding: 30px 28px;
      gap: 20px;
    }

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

    .building-content-4 {
      h2 {
        font-size: 32px;
        line-height: 45px;
      }

      a {
        margin-top: 20px;
      }
    }

    /*-- home page 4 style end --*/

    /*-- about-us page style start --*/
    .breadcrumb-section {
      margin-top: 70px;
    }
    .customer-img {
      margin-bottom: 40px;
    }

    .about-feature-img {
      margin-top: 40px;
      width: fit-content;
    }

    .building-content {
      &-text {
        margin-bottom: 30px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }

    /*-- about-us page style end --*/

    /*-- service page style start --*/
    .skills-img {
      margin-top: 40px;
    }

    .core-feature-content {
      margin-bottom: 40px;
    }
    .index6-card-section .v8-card-section-text {
      margin-bottom: 40px;
    }
    .footer-contact-section {
      margin-bottom: 40px;
    }
    .header-section.v6.sticky {
      box-shadow: 0px 10px 15px ${({ theme }) => theme.colors.blackColor}0d;
    }
    body:not(.nav-expanded) .header-section.v6:not(.sticky) {
      .logo-light {
        display: block;
      }
      .logo-dark {
        display: none !important;
      }
      .nav-expander {
        img {
          filter: brightness(0) invert(1);
        }
      }
    }
    .header-section.v6 {
      .v6-header-content {
        height: auto;
      }
      &.sticky {
        background: ${({ theme }) => theme.colors.whiteColor};
        padding: 0;
        .header-section.v6.v6-header-content {
          box-shadow: none;
        }
      }
    }

    /*-- service page style end --*/

    /*-- contact-us style start --*/
    .contact-img {
      width: fit-content;
      margin-bottom: 40px;
    }
    .footer-testimonial-section
      .footer-testimonial-right
      .footer-testimonial-right-text {
      left: 35px;
    }
    .footer6-section {
      margin-top: 70px;
    }
    .footer-testimonial-section.v8 {
      margin-bottom: 0;
    }
    .footer-top6 {
      padding-bottom: 35px;
    }
    .mobile-navbar-menu .sub-menu li {
      &:last-child {
        a {
          padding-bottom: 18px;
        }
      }
    }
    .nav-expanded .header-3-canva {
      margin-top: 85px;
    }
    .nav-expanded .header-section.v6 {
      padding: 0;
    }
    .header-section.v6.sticky .v6-header-content {
      box-shadow: none;
    }
    .nav-expanded .header-section.v6 .v6-header-content,
    .header-section.v6.sticky .v6-header-content {
      border-radius: 0;
    }
    .compare-plans-table-section .compare-plans-table .table-body {
      overflow-y: auto;
    }
    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
    }
    .header-section.v6.sticky .col-md-12,
    .nav-expanded .header-section.v6 .col-md-12 {
      padding: 0 !important;
    }
    .nav-expanded {
      .header-section.defi .defi-header-content {
        background: transparent;
      }
    }
    .hero-section-4 .hero-content-button,
    .lg-center-text {
      text-align: center;
    }
    .happy-customers-section {
      padding-bottom: 120px;
    }
    .header-section.v1 {
      .main-menu {
        .submenu {
          li {
            a {
              color: ${({ theme }) => theme.colors.whiteColor}b2;
            }
          }
        }
      }
      &.sticky {
        .main-menu {
          li {
            a {
              color: ${({ theme }) => theme.colors.whiteColor}b2;
            }
          }
        }
        .header-extra {
          li {
            a {
              color: ${({ theme }) => theme.colors.whiteColor};
            }
          }
        }
      }
    }
    .hero-content {
      text-align: center;

      .new-hoogle {
        justify-content: center;
      }
    }
    .section-title h2 br {
      display: none;
    }
    .hero-content-list {
      &.v4 {
        justify-content: center;
        margin-bottom: 30px;
      }

      justify-content: center;
    }
    .hero-content-button {
      v4 {
        a {
          margin-right: auto;
        }
      }

      button,
      a {
        margin: auto;
      }
    }
    .hero-section-index5 .index5-hero-img {
      min-height: 350px;
    }
    .hero-section2 {
      padding-top: 180px;
    }
    .breadcrumb-title h2 br {
      display: none;
    }
    .index2-features-section {
      .index2-features-card {
        padding: 80px 60px;

        .features2-contents {
          margin-top: 40px;
        }
      }
    }
    .compare-price-content {
      & .compare-price-card {
        padding: 40px 28px;
      }
    }
    .index2-integration-section {
      & .index2-integration-auto-slider {
        &:after,
        &:before {
          width: 200px;
        }
      }

      & .index2-integration-auto-slider-list {
        gap: 50px;

        & ul {
          gap: 50px;

          & li {
            height: 60px;
            width: 60px;
          }
        }
      }
    }
    .blog-details-content,
    .blog-previous-next-section,
    .blog-comment-section,
    .comment-writing-section {
      margin-right: 0px;
    }
    .comment-writing-section {
      margin-bottom: 50px;
    }
    .latest-blog-section .latest-blog-content {
      padding-right: 0px;
    }
    .hero2-img {
      max-width: 500px;
      margin: auto;
      margin-top: 60px;
      .hero2-image2 {
        left: 0px;
      }
      .hero2-image4 {
        left: 0px;
      }

      .hero2-image1 {
        left: 25%;
      }
    }
    .compare-price-content {
      .compare-price-icons1,
      .compare-price-icons2,
      .compare-price-icons3,
      .compare-price-icons4 {
        display: none;
      }
    }
    .powerfull-template-text {
      &.powerfull-template-text-left {
        padding-right: 20px;
      }

      &.powerfull-template-text-right {
        padding-left: 20px;
      }
    }
    .powerfull-template-img {
      margin-top: 50px;

      &.powerfull-template-img-left {
        padding-right: 20px;
      }

      &.powerfull-template-img-right {
        padding-left: 20px;
      }
    }
    .powerfull-template-text {
      padding-top: 60px;
      h4 {
        margin-bottom: 16px;
        font-size: 18px;
        line-height: 26px;
      }
      ol {
        flex-wrap: wrap;
        li {
          width: 50%;
          gap: 10px;
          margin-top: 15px;
          img {
            margin-bottom: 5px;
          }
        }
      }
    }
    .powerfull-template-section {
      margin-bottom: 85px;
    }
    .case-studies-section {
      .case-studies-left h2 {
        font-size: 27px;
        line-height: 45px;
        margin-bottom: 25px;
      }

      .case-studies-brands .case-studies-item {
        min-height: 455px;
        max-height: 455px;

        ul {
          padding: 0px 30px;

          li {
            margin-bottom: 60px;
          }
        }
      }
    }
    .developer-apis-Section .developer-apis-left .developer-apis-text p {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .portfolio-section {
      .portfolio-title {
        .portfolio-subtitle {
          h2,
          h3 {
            font-size: 27px;
            line-height: 45px;

            span {
              line-height: 45px;
            }
          }
        }
      }
    }
    .compare-plans-section {
      .compare-plans-title {
        margin-bottom: 20px;
      }
    }
    .main-feature-section,
    .hero-section-3 {
      padding-top: 80px;
    }
    .virtually-section,
    .useful-feature-section {
      padding-top: 10px;
    }
    .useful-feature-section {
      padding-bottom: 55px;
    }
    .virtually-section {
      padding-bottom: 60px;
    }
    .best-pricing-section {
      padding-top: 74px;
      padding-bottom: 80px;
    }
    .meeting-anytime-section {
      padding-top: 20px;
    }
    .meeting-anytime-card-text h2 {
      font-size: 34px;
      line-height: 50px;
    }
    .meeting-anytime-section {
      padding-bottom: 80px;
    }
    .faq-seciton.v2 {
      padding-top: 72px;
    }
    .hero-section-3-header h2 {
      font-size: 46px;
      line-height: 60px;
    }
    .hero-section-3 {
      margin-top: 75px;
    }
    /*-- Index6 Start--*/
    .hero-section6 {
      .container {
        padding-top: 160px;
        padding-bottom: 105px;

        .banner-vector-line1 {
          height: 44%;
          right: 23%;
        }

        .banner-vector-line2 {
          position: absolute;
          height: 69%;
          right: 35.4%;
        }
      }
    }
    .v6-banner-text {
      .banner-title {
        font-size: 38px;
        line-height: 54px;
      }
    }

    /* lets-talk section */
    .lets-talk-text {
      h3 {
        font-size: 23px;
        line-height: 35px;
        margin-bottom: 20px;
      }

      .lets-talk-btn {
        width: 130px;
        height: 45px;
      }
    }
    .customers-quote-card .customers-quote-content {
      padding-left: 20px;
      padding-right: 20px;
    }
    .customers-quote-text {
      .quote-icon {
        margin-bottom: 30px;
      }

      p {
        font-size: 15px;
        line-height: 25px;
      }
    }
    .blog-post-section .blog-post-content {
      .col-lg-4 {
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .blog-post-section {
      padding-bottom: 80px;
    }

    /* benefits section */
    .benefits-faq {
      padding-left: 10px;

      .template-accordion {
        .accordion-button {
          &::after {
            top: 20px;
          }

          padding: 16px 0px;

          &:not(.collapsed) {
            padding-bottom: 10px;
          }
        }

        .accordion-body {
          p {
            font-size: 12px;
            line-height: 22px;
          }
        }
      }
    }
    .about-feature-img .success-rate {
      max-width: 130px;
      max-height: 130px;
    }
    .about-feature-img .pie_progress {
      width: 110px;
      height: 110px;
    }
    .customers-quote-img {
      align-items: center;
    }
    .customers-quote-card .customers-quote-bg {
      width: 40%;
      bottom: 132px;
      left: 7%;
    }
    .customers-quote-card .quote-icon {
      right: 40%;
    }
    .customers-quote-text {
      padding-bottom: 30px;
    }
    .v6-banner-text h2.cd-headline.loading-bar .cd-words-wrapper::after {
      bottom: 0px;
    }
    .benefits-img-bg {
      .benefits-img {
        max-width: 100%;

        img {
          max-height: 100%;
        }
      }
    }
    .feature-team-section.v6 {
      padding: 64px 0px 80px;
    }

    /*-- Index6 End--*/

    /*-- Index 7 Start--*/
    .hero-section-v6 {
      padding-top: 160px;
    }
    .v7hero-section-text .banner-text h2 {
      font-size: 45px;
      line-height: 50px;
    }
    .portfolio-grid-container {
      -webkit-column-count: 2;
      column-count: 2;
    }
    .portfolio-gallery-card5 {
      padding-top: 0px;
    }
    .v7footer-contact-card .v7footer-card-text {
      h6 {
        font-size: 16px;
      }
    }

    /*-- Index 7 End--*/

    .pricing-plan-card {
      padding-bottom: 10px;
      padding-top: 25px;
    }
    .pricing-plan-card-content {
      &.right {
        margin-left: 0px;
        margin-right: auto;

        .pricing-plan-img {
          bottom: 0px;
          margin-top: 20px;
        }
      }
    }
    .pricing-plan-card-header h3 {
      font-size: 23px;
      margin-top: 5px;
    }
    .compare-plans-table-section {
      .compare-plans-title {
        margin-bottom: 0px;
      }

      .compare-plans-table {
        ol {
          li {
            min-width: 33%;
            max-width: 33%;
            padding: 15px;
            margin-top: 0px;
            background: transparent;

            &:nth-child(1) {
              display: none;
            }

            &:nth-last-child(2) {
              background: transparent;
            }

            &.active {
              background: rgba(0, 0, 0, 0.03);
            }
          }
        }

        .table-body {
          .table-col2,
          .table-col3,
          .table-col4 {
            background: rgba(0, 0, 0, 0.03);
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
          }
        }
      }
    }

    /*--  Index 8 Start --*/
    .index8-accounting-column-section {
      .custom-row {
        .custom-column {
          &:nth-child(2) {
            .index8-accounting-column-content {
              border: none;
            }
          }
        }
      }
    }
    .we-offering-slider-nav {
      .slick-btn {
        font-size: 21px;
        padding: 22px 0px;
      }
    }
    .we-offering-slide-item-text {
      h4 {
        font-size: 24px;
        margin-bottom: 10px;
      }
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
    .we-offering-section {
      padding-top: 100px;
      padding-bottom: 80px;
    }
    .v8banner-video {
      top: 70px;
      video {
        min-height: 470px;
      }
    }
    .footer-top6 {
      .footer-col {
        margin-bottom: 30px;

        h6 {
          margin-top: 20px;
        }

        h5 {
          margin-bottom: 16px;
        }
      }
    }
    .index8-accounting-column-section .custom-row {
      padding-bottom: 60px;
    }
    .index8-accounting-section {
      padding-top: 80px;
    }
    .design-system-sticky {
      padding-top: 72px;
    }

    /*--  Index 8 End --*/
    /*-- nft marketplace start --*/
    .creators-details-section {
      padding-bottom: 40px;
    }
    /*-- nft marketplace end --*/
    /*-- newsletter --*/
    .powerful-email-left {
      .email-collaps-list {
        .email-collaps-item {
          &.active {
            .email-collaps-text {
              .powerful-email-img-mobile {
                display: block;
              }
            }
          }
        }
      }
    }
    .powerful-email-right {
      display: none;
    }

    /*-- ChatBot Start --*/
    .convert-visitors-slider-content {
      .slick-dots {
        left: 15px;
        bottom: auto;
        top: 46%;
      }
      .convert-visitors-slider-bg {
        bottom: auto;
        top: 20%;
        left: 0%;
      }
    }
    .convert-visitors-slider-right {
      padding-top: 25%;
    }
    .convert-visitors-slider-right {
      margin-top: 100px;
    }
    .convert-visitors-img-section {
      margin-right: auto;
    }

    .chatbot-why-choose-us-section {
      padding-bottom: 140px;
    }
    .chatbot-why-choose-us-content {
      padding: 70px;
    }
    .chatbot-why-choose-us {
      &-left {
        padding-bottom: 30%;
      }
      &-right {
        padding-top: 50%;
      }
    }

    .chatbot-customers-suport-card {
      min-height: 100%;
      max-height: auto;
      max-height: 815px;
      padding: 25px;
      .card-subtitle {
        font-size: 25px;
        margin-bottom: 10px;
      }
    }
    .chatbot-footer-right {
      padding-left: 0px;
      padding-top: 30px;
      border: none;
    }
    .integration-element-section {
      &.chatbot {
        overflow-x: hidden;
      }
    }

    .integrate-element-list .list-item {
      height: 70px;
      width: 70px;
      padding: 20px;
    }

    .chatbot-footer-left {
      margin-bottom: 20px;
      p {
        margin-bottom: 25px;
      }
    }

    /*-- ChatBot End --*/

    /*-- Newsletter Section Start --*/
    .hero-section2.newslater {
      .new-hoogle {
        margin: auto;
        margin-bottom: 10px;
      }
      p {
        margin: auto;
        margin-bottom: 30px;
        max-width: 460px;
      }
    }
    .hero-content-button.newslater {
      margin: auto;
    }
    .leading-email-left {
      max-width: 430px;
      margin: auto;
      text-align: center;
      ul {
        margin: auto;
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    .leading-email-right {
      justify-content: center;
      margin-top: 30px;
      margin-bottom: 30px;
      ul {
        margin: auto;
      }
    }
    .powerful-email-right {
      margin: auto;
    }

    .feature-team-slider-for {
      .slider-item {
        h2 {
          margin-top: 35px;
        }
      }
    }

    .chatbot-footer-card.newsletter {
      .chatbot-footer-left {
        margin-right: auto;
        margin-left: 0;
        margin-bottom: 30px;
      }
      .chatbot-footer-right {
        border-right: 0px;
      }
    }

    .portfolio-section {
      &.newsletter {
        .portfolio-gallery {
          .portfolio-img {
            width: 220px;
            height: 290px;
          }
        }
      }
    }

    /*-- Newsletter Section End --*/

    /*-- MarketPlace Start --*/
    .nft-header-section {
      padding: 15px 0px;
    }
    .nft-header-right {
      display: none;
    }
    .nft-header-left {
      justify-content: space-between;
      width: 100%;
    }
    .top-artists-list {
      li {
        width: 50%;
      }
    }
    .nft-footer-social-list ul {
      margin-bottom: 50px;
    }
    .nft-newsletter {
      margin-bottom: 20px;
    }
    .nft-footer-menu {
      margin-top: 20px;
      h5 {
        margin-bottom: 10px;
      }
    }
    .nft-header-left form {
      display: none;
    }
    .discover-nfts-dropdown-list {
      margin-left: 0px;
      margin-right: auto;
      margin-top: 0px;
      justify-content: flex-start;
    }

    /*--  Item Details i --*/
    .item-details-info {
      margin-top: 100px;
      .right {
        padding-left: 0px;
      }
      .left {
        padding-right: 0px;
      }
      .nft-people-section {
        flex-direction: row;
        .nft-people {
          margin-bottom: 0px;
        }
      }
      .item-details-btns {
        button {
          width: 48%;
        }
        .item-details-timer {
          width: 48%;
        }
      }
    }

    .footer-top-section {
      padding: 50px 0px;
      .footer-top-text {
        p {
          font-size: 14px;
        }
        h3 {
          font-size: 23px;
        }
      }
    }

    /*-- app landing page start --*/
    .app-landing-hero-section {
      .app-hero-content {
        margin-top: -40px;
      }
    }
    .app-landing-hero-section {
      .app-landing-banner-img {
        margin-top: 40px;
      }
    }
    .app-landing-hero-section {
      .app-banner-text-effect {
        p {
          justify-content: center;
          .cd-words-wrapper {
            width: auto !important;
            min-width: max-content;
          }
        }
      }
    }
    .protect-data-section {
      .protect-data-content {
        .protect-data-text p {
          margin-bottom: 0px !important;
        }
      }
    }
    .app-convert-visitors-nav {
      justify-content: flex-start;
      margin-bottom: 60px;
    }
    .convert-visitors-slider-right {
      margin-top: 0px;
    }
    .app-chose-us-content {
      .app-chose-title {
        font-size: 32px;
      }
    }
    .app-banner-text {
      max-width: 500px;
      margin: auto;
      margin-bottom: 50px;
    }

    .convert-visitors-slider-right {
      padding-top: 120px;
      &.app {
        padding-top: 0px;
      }
      .section-title {
        h2 {
          font-size: 24px;
          margin-bottom: -20px;
        }
      }
      p {
        font-size: 13px;
        line-height: 20px;
        margin-bottom: 16px !important;
      }
      ul {
        li {
          font-size: 13px;
          line-height: 20px;
          margin-bottom: 15px;
        }
      }
      .convert-visitors-progress-section {
        .convert-visitors-progress-text {
          p {
            margin-bottom: 0px !important;
          }
        }
      }
      .lead-generation-list {
        p {
          margin-bottom: 4px !important;
        }
        &:nth-last-child(1) {
          padding-bottom: 40px;
        }
      }
    }

    .v7-main-footer {
      .privacy-menu {
        width: 48%;
        gap: 12px;
      }
    }
    .app-chose-us-card {
      .app-chose-card {
        min-height: 135px;
      }
    }

    /*-- app landing page End --*/

    /*-- MarketPlace End --*/

    /*-- crypto wallet section start --*/
    .header-section {
      &.crypto-header {
        background: transparent;
      }
    }
    .download-wallet-btns {
      a {
        padding: 7px 12px;
        max-width: 170px;
      }
    }

    .crypto-features-content {
      padding: 47px 20px 50px 20px;
    }
    .crypto-features-text {
      h4 {
        font-size: 19px;
      }
    }

    .crypto-hero-section-text {
      h1 {
        font-size: 50px;
        max-width: 520px;
        line-height: 128%;
      }
    }
    .crypto-hero-img {
      .mobile-img {
        max-width: 150px;
      }
    }
    .hero-overlay {
      .banner-vector {
        min-height: 384px;
        margin-top: 1100px;
      }
    }
    .crypto-wallet-footer {
      padding-top: 80px;
    }
    .chatbot-footer-card {
      .chatbot-footer-left {
        margin-bottom: 50px;
        margin-right: auto;
        margin-left: 0px !important;
      }
      .chatbot-footer-right {
        border-right: none !important;
      }
    }
    .footer-menu-list {
      h5 {
        margin-bottom: 20px;
      }
    }

    .support-card-right {
      max-width: 100%;
    }
    /*-- crypto wallet section end --*/

    /*-- corporate index start --*/
    .coroprate-banner-section {
      .overlay {
        padding: 120px 0px;
      }
    }
    .best-services-left {
      margin-bottom: 30px;
    }
    .best-services-section {
      .overlay {
        padding: 120px 0px;
      }
    }
    .best-services-text {
      padding: 25px 20px;
    }
    .about-our-company-section {
      padding: 110px 0px;
    }
    .about-company-left {
      margin-bottom: 30px;
    }
    .how-it-work-section {
      padding: 110px 0px 82px 0px;
    }
    .our-values-img-border {
      height: 200px;
      width: 200px;
    }
    .loader-img {
      height: 200px;
      width: 200px;
    }
    .our-values-img {
      height: 140px;
      width: 140px;
    }
    .our-values-img-section {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .our-values-img-border {
      top: auto;
      bottom: auto;
    }
    .our-values-section {
      padding-top: 110px;
      padding-bottom: 80px;
    }
    .our-values-top {
      margin-bottom: 60px;
    }
    .our-value-text {
      margin-bottom: 30px;
      .our-value-icon {
        &1 {
          right: -70px;
          top: auto;
          bottom: 0px;
        }
        &2 {
          right: -70px;
          top: 30px;
        }
        &3 {
          left: -70px;
          top: auto;
          bottom: 0px;
        }
        &4 {
          left: -70px;
          top: 30px;
        }
      }
    }

    .corporate-testiminials-section {
      .overlay {
        padding: 110px 0px;
      }
    }
    .brands-section.corporate-brands-section {
      padding: 90px 0px;
    }
    .consultation-section {
      padding-top: 110px;
    }

    .corporate-footer-top-banner {
      h4 {
        font-size: 22px;
      }
    }
    .corporate-footer-top-banner {
      .overlay {
        height: 200px;
      }
    }
    /*-- corporate index End --*/

    /*-- crypto index 2 start --*/
    .crypto-assets-section {
      margin-top: 0px;
    }
    .crypto-assets-box {
      padding: 50px;
      height: 255px;
    }
    .connect-dapps-img {
      .mocup-img {
        left: 0px;
      }
    }
    .crypto2-benifits-card {
      max-width: 500px;
      margin: auto;
      margin-bottom: 30px;
    }
    .connect-dapps-text {
      p {
        font-size: 16px;
      }
    }
    .connect-dapps-img {
      padding-top: 80px;
    }

    .download-wallet-list ul li {
      width: 25%;
    }
    .crypto2-hero-section {
      padding-top: 180px;
      .bottom-overlay {
        bottom: 0px;
      }
    }
    .crypto2-hero-left::before {
      top: -90px;
      left: -50px;
      height: 400px;
      width: 400px;
    }
    .crypto2-hero-text {
      padding-top: 0px;
      margin-top: -30px;
      h1 {
        font-size: 40px;
        line-height: 150%;
      }
      p {
        margin-bottom: 30px;
        font-size: 16px;
      }
    }
    .support-card .dot-bg {
      top: -200px;
    }

    .safe-platform-section {
      .sidebar__inner {
        position: relative !important;
        transform: none !important;
      }
    }

    /*-- crypto index 2 end --*/

    /*-- crypto token start --*/
    .crypto-token-banner-inner {
      .overlay {
        padding-top: 180px;
        padding-bottom: 70px;
      }
    }
    .crypto-banner-card {
      margin-bottom: 30px;
    }
    .crypto-token-banner-text {
      h1 {
        font-size: 60px;
      }
    }
    .crypto-token-banner-ball {
      max-width: 300px;
      top: 0px;
    }
    .crypto-social-list {
      .crypto-social-link {
        .crypto-social-btn {
          max-width: 130px;
          height: 130px;
        }
      }
    }

    .banner-video-section {
      padding-top: 0px;
    }
    .banner-video-card {
      height: 320px;
      h2 {
        font-size: 45px;
      }
    }

    .key-points-section {
      padding: 90px 0px 60px 0px;
    }
    .text-with-img {
      font-size: 35px;
    }
    .crypto-token-features-text {
      h2 {
        font-size: 30px;
      }
    }
    .crypto-token-features-img {
      left: 0px;
    }
    .crypto-token-features-cards {
      .stack__card {
        .title {
          h4 {
            font-size: 18px;
          }
        }
      }
    }
    .crypto-token-features-cards {
      .stack__card {
        height: 540px;
        &:nth-child(1) {
          .card-bg {
            .overlay {
              padding: 40px;
            }
          }
        }
        &:nth-child(2),
        &:nth-child(3) {
          .card-bg {
            padding: 40px;
          }
        }
      }
    }
    .crypto-token-partners {
      .partners-list {
        ul {
          margin: 0px;
          li {
            width: 25%;
          }
        }
      }
    }
    .tokenomics-content {
      h2 {
        font-size: 45px;
        margin-bottom: 30px;
      }
    }
    .tokenomics-card {
      .overlay {
        padding: 50px 40px;
      }
    }

    .tokenomics-progress-section {
      .tokenomics-progress {
        &.community {
          width: 35%;
        }
        &.team {
          width: 28%;
        }
        &.investor {
          width: 22%;
        }
        &.advisors {
          width: 15%;
        }
      }
    }
    .crypto-token-tag-section {
      padding: 100px 0px;
    }
    .latest-news-title {
      padding-bottom: 20px;
      h2 {
        font-size: 40px;
      }
    }
    .documents-title {
      padding-bottom: 20px;
      h2 {
        font-size: 40px;
      }
    }
    .token-footer-bottom-text {
      padding: 30px 0px;
      .text {
        font-size: 61px;
      }
    }

    .token-subscribe-section {
      input[type="email"] {
        max-width: 390px;
      }
    }

    .news-content {
      .news-row {
        padding: 25px 60px;
        .link {
          right: 50px;
        }
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
    .crypto-tokenomics-section {
      padding-top: 100px;
    }
    .scroll-text-section {
      padding: 40px 0px;
    }
    .scroll-text-inner {
      ul {
        li {
          font-size: 60px;
        }
      }
    }
    .become-investor-btn {
      margin-top: 20px;
    }

    .crypto-token-partners {
      margin-bottom: 100px;
    }

    .crypto-token-tag-list {
      .tag {
        padding: 0px 18px;
        font-size: 18px;
      }
    }
    .latest-news-section {
      padding-top: 100px;
    }
    .documents-section {
      padding-top: 100px;
    }
    /*-- crypto token end --*/

    /*-- sass landing page start --*/
    .sass-landing-hero-content {
      padding-top: 180px;
    }
    .sass-landing-hero-bg .banner-shape-list {
      transform: rotate(-23deg);
      bottom: 114px;
      left: -42px;
      width: 114%;
    }
    .sass-banner-text {
      margin-bottom: 60px;
      text-align: center;
      p {
        margin: auto;
        margin-bottom: 40px;
      }
    }
    .sass-banner-btn {
      justify-content: center;
    }
    .sass-banner-img {
      text-align: center;
    }
    .sass-banner-img {
      .shape1 {
        right: -20px;
      }
    }
    .sass-demo-shapes {
      .shape2 {
        top: 55px;
      }
    }
    .sass-video-container {
      .video-card {
        height: 400px;
      }
    }
    /*-- sass landing page end --*/

    /*-- defi index start --*/
    .header-section {
      &.v6.defi {
        &.sticky {
          background: ${({ theme }) => theme.colors.whiteColor}1a;
          backdrop-filter: blur(2.5px);
          & .v6-header-content {
            background: transparent;
            padding: 18px 15px 15px;
            backdrop-filter: none;
          }
        }
        .nav-expander img:nth-child(1) {
          filter: brightness(100);
        }
      }
    }

    .defi-metaverse-card {
      padding: 50px;
    }

    .defi-banner-section {
      .defi-banner-inner {
        .overlay {
          padding-top: 157px;
        }
      }
    }
    .defi-statistic-section {
      padding-bottom: 70px;
      padding-top: 0px;
    }
    .defi-statistic-card {
      margin-bottom: 30px;
    }
    .defi-safe-platform-img {
      max-width: 80px;
    }
    .defi-safe-platform-section {
      .overlay {
        padding-bottom: 0px;
      }
    }
    .defi-safe-platform-content {
      margin-bottom: 30px;
    }

    .latest-articles-card {
      .latest-articles-text {
        padding: 20px;
        h4 {
          font-size: 18px;
        }
      }
    }

    .ecosystem-text {
      ul {
        li {
          font-size: 13px;
        }
      }
    }
    .ecosystem-content {
      max-width: 560px;
    }

    .defi-footer-section {
      .left {
        max-width: 200px;
      }
      .right {
        padding-left: 0px;
      }
      ul {
        gap: 30px;
      }
    }
    .defi-backed-section {
      padding-bottom: 100px;
    }
    .latest-articles-section {
      padding-bottom: 100px;
    }
    .defi-metaverse-card {
      margin-bottom: 30px;
    }
    .defi-metaverse-card2,
    .defi-metaverse-card3 {
      margin-bottom: 30px;
    }
    /*-- defi index end --*/

    /*-- auth and utlitiy start --*/
    .terms-and-service-body {
      padding-top: 80px;
      padding-bottom: 80px;
    }
    .terms-and-service-inner {
      margin-top: 80px;
    }
    .auth-brand-slider-section {
      padding: 40px 20px;
    }
    /*-- auth and utlitiy end --*/
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .footer-testimonial-section .footer-testimonial-right {
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      height: 100%;
    }
    .lets-talk-text h2 {
      font-size: 36px;
    }
    .benefits-img-bg {
      padding: 20px;

      .benefits-img-tag {
        font-size: 13px;
        padding: 8px 16px;

        &1 {
          right: 10px;
        }

        &2 {
          right: 10px;
          top: 33%;
        }

        &3 {
          left: 10%;
          bottom: 16px;
        }
      }

      .about-feature-img .overlay-item.success-rate {
        bottom: 10px;
        right: 0px;
      }
    }
    .benefits-faq {
      .benefits-slider-nav {
        padding: 18px 0px;

        .slick-current {
          padding-bottom: 15px;
        }

        .benefits-nav-btn {
          font-size: 16px;
        }
      }
    }
    .v7-main-footer {
      h6 {
        gap: 10px;
        font-size: 13px;
      }

      h5 {
        font-size: 13px;
      }
    }

    /*-- index 8 start --*/
    .we-offering-slider {
      margin-top: -190px;
    }
    .we-offering-slide-img {
      height: 170px;
      width: 180px;
      margin-bottom: 60px;
      margin-left: 20px;
    }
    /*-- index 8 End --*/
    .nft-banner-right {
      .nft-banner-title {
        margin-bottom: 20px;
      }
    }
    .nft-people-section {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
      .nft-people {
        margin-bottom: 20px;
        width: 100%;
      }
    }
    .nft-bid-info-section {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 30px;
      .nft-bid-info {
        margin-bottom: 20px;
        width: 100%;
        p {
          margin-bottom: 10px;
        }
      }
    }
    .nft-banner-left {
      padding-top: 100px;
      .item.slick-slide {
        width: 247px;
        height: 300px !important;
      }
    }
    .footer-top-section {
      .footer-top-text {
        &.right {
          margin-left: 20px;
        }
      }
    }
    .testimonial-section-4 {
      &.app-testimonial-section {
        .testimonial-btns {
          a {
            padding: 12px 17px;
            h4 {
              font-size: 18px;
              span {
                font-size: 12px;
              }
            }
          }
        }
      }
    }

    /*-- crypto index start --*/
    .os-btns {
      .os-btn {
        min-width: 76px;
        min-height: 76px;
        border-radius: 20px;
        img {
          height: 24px;
          width: 24px;
        }
      }
    }
    /*-- crypto index end --*/

    /*-- crypto index 2 start --*/
    .crypto2-hero-img {
      top: 50px;
    }
    /*-- crypto index 2 end --*/
  }

  @media screen and (max-width: 767px) {
    .mobile-navbar-menu .nav-menu,
    .mobile-navbar-menu .nav-buttons {
      width: 540px;
    }

    /*-- breadcrumb style start --*/
    .breadcrumb-title {
      h2 {
        @include textStyle(40px, 700, 50px);
      }
    }

    .breadcrumb-img {
      margin-top: 40px;
    }

    /*-- breadcrumb style end --*/

    /*-- home page style start --*/
    .hero-section {
      padding: 150px 0px 80px;
    }
    .hero-img {
      margin-top: 85px;
    }
    .hero-content {
      margin-bottom: 16px;
      &-text {
        margin-bottom: 40px;
        h2 {
          @include textStyle(40px, 700, 60px);
          margin: auto;
        }
        p {
          @include textStyle(16px, 500, 30px);
          margin: auto;
          margin-top: 20px;
        }
      }
    }
    .get-demo-btn {
      height: 100px;
      width: 100px;
      padding: 10px;
    }
    .hero-img .overlay {
      left: 39%;
    }
    .counter-card {
      height: auto;
    }
    .brands-section {
      padding-top: 70px;
    }
    .brands-slider-container {
      gap: 50px;
    }
    .brands-slider .slider-item {
      width: 95px;
      height: 18px;
    }
    /*-- brands-section End --*/
    .index2-statistics-section {
      margin-bottom: 70px;
    }
    .contents-text {
      &2 {
        padding-left: 0px;
      }
      &4 {
        padding-left: 0px;
      }
    }
    .choose-us-section {
      .choose-us-content {
        .choose-us-text {
          gap: 30px;
        }
      }
    }
    .footer-testimonial-section
      .footer-testimonial-right
      .footer-testimonial-right-text {
      bottom: 50px;
    }
    /*-- feature-section start --*/
    .feature-section {
      padding: 40px 0px 0px 0px;
    }
    .feature-card {
      margin-bottom: 0px;
    }
    .feature-card-text {
      max-width: 100%;
      margin: 0 auto;
      p {
        max-width: 288px;
        margin: auto;
        line-height: 26px;
      }
    }
    /*-- feature-section End --*/

    .usability-section {
      padding: 40px 0px 80px;
    }
    .usability-card {
      border-radius: 30px;
      height: auto;
      padding: 60px 25px 25px 25px;

      &-title {
        margin-bottom: 44px;

        h2 {
          @include textStyle(40px, 700, 60px);
        }
      }

      .usability-buttons {
        margin-bottom: 50px;
        gap: 20px;
        flex-wrap: wrap;

        button {
          width: 180px;
          height: 50px;
          gap: 10px;
        }
      }
    }

    .usability-slider-nav {
      .slick-track {
        gap: 10px;
      }

      .slider-item {
        width: 130px !important;
        gap: 5px;
        line-height: 22px;
        img {
          width: 15px;
          height: 15px;
        }
      }
    }

    /*-- marketing Start --*/

    .marketing-content-title {
      margin-bottom: 30px;
      h3 {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 11px;
      }
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }

    .marketing-img {
      .emoji-icons {
        padding: 10px;
        height: 48px;
        width: 145px;
      }

      .chart {
        width: 131px;
        height: 60px;
        padding: 20px 20px 0px 0px;
      }
    }
    .marketing-img {
      height: auto;

      > img {
        width: 85%;
        height: auto;
      }
    }

    .marketing-img .pie_progress__label {
      h4 {
        font-size: 20px;
        line-height: 15px;
      }

      p {
        font-size: 10px;
        line-height: 15px;
      }
    }

    .marketing-img .reduction-time {
      height: 62px;
      width: 118px;
      padding: 17px 27px 6px 0px;
      h2 {
        font-size: 20px;
        line-height: 15px;
      }
      p {
        font-size: 10px;
        line-height: 15px;
      }
    }

    .marketing-img .success-rate {
      height: 118px;
      width: 118px;
      bottom: 30px;
      right: 49px;
    }
    .marketing-img {
      .pie_progress__svg svg {
        top: 25px;
        left: 26px;
        width: 60%;
        height: 60%;
        margin: auto;
      }
    }
    .marketing-section {
      padding-top: 80px;
    }
    .marketing-img.v2 {
      width: 100%;
      margin-bottom: 42px;
    }
    /*-- marketing end --*/

    .pie_progress__svg svg {
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      margin: auto;
    }

    /*-- testimonial Start --*/

    .testimonial-seciton {
      padding: 60px 0px 60px;
    }
    .testimonial-card {
      .slider-counter-box {
        display: none;
        bottom: 43px;
        right: unset;
        left: 60px;
      }
      &-left {
        .shape-img {
          &img-4 {
            top: auto;
            bottom: 19px;
            left: 36px;
            right: auto;
          }
        }
      }
    }

    .testimonial-slider {
      .owl-nav {
        margin-top: 0px;
        bottom: -30px;
        right: unset;
        left: 0;
        gap: 20px;
      }
    }

    .testimonial-title {
      margin-bottom: 17px;
      h3 {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 9px;
      }
      h2 {
        font-size: 32px;
        line-height: 50px;
      }
    }
    .testimonial-slider-for .slider-item p {
      font-size: 15px;
      line-height: 30px;
      margin-bottom: 23px;
    }
    .testimonial-card {
      &-left {
        min-height: auto;
        padding: 50px 20px 100px 20px;
      }
      &-right {
        min-height: auto;
        padding: 42px 20px 44px 20px;
      }
    }
    .testimonial-slider-for .slider-info {
      position: relative;
      justify-content: center;
      margin-top: 15px;
    }

    .testimonial-card-left .shape-img.img-4 {
      top: auto;
      bottom: 19px;
      left: 36px;
      right: auto;
    }

    /*-- testimonial End --*/

    /*-- integrate section start --*/
    .integrate-card {
      margin-bottom: 30px;
      padding: 38px 20px;
    }
    .integrate-slider {
      &-container {
        gap: 30px;
      }

      &::before {
        width: 100px;
      }

      &::after {
        width: 100px;
      }
    }

    .integrate-card p {
      margin-top: 18px;
    }

    /*-- integrate section End --*/

    /*-- faq-section start --*/
    .faq-seciton {
      padding-top: 40px;
      padding-bottom: 80px;
    }
    .faq-section-title {
      margin-bottom: 40px;
      h3 {
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 11px;
      }
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    .template-accordion {
      .accordion-button {
        font-size: 16px;
        line-height: 30px;
      }
    }

    .leave-message {
      margin-bottom: 0px;
      text-align: center;
      &1 {
        display: none;
      }
      &2 {
        display: block;
        margin-top: 50px;
      }
      .text-link {
        margin: auto;
      }
    }

    .faq-seciton.pricing-plan-faq-seciton {
      padding: 70px 0px 80px;
    }

    /*-- faq-section end --*/

    /*-- pricing-section start --*/
    .pricing-selector {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
    }
    .pricing-section {
      padding-top: 72px;
      padding-bottom: 50px;
    }
    .pricing-section-title {
      margin-bottom: 20px;
      h3 {
        margin-bottom: 11px;
        font-size: 16px;
        line-height: 30px;
      }
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }

    .pricing-card {
      padding: 36px 30px 40px 30px;
      h2 {
        font-size: 24px;
      }
    }

    .compare-plans-section {
      padding-bottom: 80px;
    }

    /*-- pricing-section end --*/

    /*-- About Us Section Start --*/
    .customer-content {
      &-text {
        h2 {
          margin-bottom: 18px;
          @include textStyle(32px, 700, 45px);
        }

        p {
          margin-bottom: 15px;
        }
        .text-link {
          margin-top: 20px;
        }
      }
    }
    /*-- About Us Section End --*/

    /*-- footer-section start --*/
    .footer-section {
      &.v2,
      &.v3 {
        .footer-copyright {
          margin-top: 20px;
          text-align: center;
        }
      }

      &.v4 {
        .privacy-menu {
          margin-bottom: 0;
          margin-top: 20px;
          justify-content: flex-start;
        }

        .footer-copyright {
          text-align: left;
        }
      }
    }

    .footer-top {
      padding: 80px 0px 65px;
    }
    .footer-info {
      margin-bottom: 18px;
      .footer-logo {
        margin-bottom: 24px;
      }
    }

    .footer-card {
      margin-bottom: 0px;
    }
    .footer-widget .widget-list li a {
      line-height: 36px;
    }
    .footer-bottom {
      padding: 25px 0px 20px;
    }
    .counter-section {
      padding-top: 25px;
    }

    /*-- footer-widget style --*/
    .footer-widget {
      margin-top: 40px;
    }

    /*-- footer-copyright style --*/
    .footer-copyright {
      text-align: center;
    }

    /*-- privacy-menu style --*/
    .privacy-menu {
      margin-bottom: 10px;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    .privacy-menu li,
    .privacy-menu li a {
      line-height: 1;
    }

    /*-- footer-section end --*/
    /*-- home page style end --*/

    /*-- home page 2 style start --*/
    .compare-price-content {
      flex-direction: column;

      & .vs h6:after {
        height: 40px;
        width: 82px;
      }
    }

    .choose-us-section {
      .choose-us-content {
        flex-direction: column;
      }
    }

    .best-pricing-info {
      padding: 30px;
    }

    .powerfull-template-img {
      &.powerfull-template-img-left {
        padding: 0px;
      }
      &.powerfull-template-img-right {
        padding: 0px;
      }
    }

    /*-- home page 2 style end --*/

    /*-- home page 3 style start --*/
    .hero-section-3 {
      .bg-shape {
        display: none;
      }
    }

    .hero-section-3-header h2 {
      font-size: 48px;
    }

    #accordionExample2 {
      margin-top: 20px;
    }

    .meeting-anytime-card {
      padding: 40px;
    }

    .counter-card {
      h2 {
        font-size: 30px;
      }
    }

    .best-pricing-card {
      width: 100%;

      &:not(:first-child) {
        border-left: 0;
      }

      &:not(:last-child) {
        border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      }
    }

    .best-pricing-card {
      &:first-child {
        border-radius: 30px 30px 0 0;
      }

      &:nth-child(3) {
        border-radius: 0 0 0 0;
      }

      &:last-child {
        border-radius: 0 0 30px 30px;
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-left: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      }
    }

    .best-pricing-info {
      gap: 10px;

      .list {
        gap: 10px;
      }

      &-right {
        gap: 20px;

        a {
          gap: 10px;
        }
      }
    }

    /*-- home page 3 style end --*/

    /*-- home page 4 style start --*/
    .hero-section-4 {
      padding: 160px 0 80px;
    }

    .hero-section-4-img {
      .overlay-item {
        &.item-2 {
          top: 15%;
        }

        &.item-3 {
          right: 0px;
        }

        &.chart {
          right: 0;
        }
      }
    }

    .hero-section-4-content {
      .hero-content-text {
        text-align: center;
        &::before {
          left: 95px;
        }
        h2 {
          font-size: 40px;
          line-height: 60px;
        }
      }
    }

    .how-works-section {
      padding: 70px 0px 0px 0px;
    }
    .marketing-badge {
      padding: 0px 10px 7px 10px;
    }
    .how-works-title {
      margin-bottom: 40px;
      h3 {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 30px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }

    .why-choose-section {
      padding: 40px 0px 0px 0px;
      .tab-body {
        gap: 0px;
        flex-wrap: wrap;
        &-text {
          width: 100%;
          margin-top: 30px;
        }
        &-img {
          width: 50%;
          margin-right: auto;
        }
      }

      .section {
        top: 70px;
      }
    }

    .why-choose-title {
      h3 {
        font-size: 16px;
        margin-bottom: 5px;
      }
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    .faq-section-4-title h2,
    .testimonial-section-4-title h2 {
      font-size: 32px;
      line-height: 45px;
    }

    .why-choose-title {
      margin-bottom: 30px;
    }
    .why-choose-tab {
      height: 80px;
      margin-bottom: 40px;
      .tab-buttons {
        .tab-btn {
          width: 50% !important;
          margin-bottom: 16px;
          &:nth-last-child(1),
          &:nth-last-child(2) {
            margin-bottom: 0px;
          }
        }
      }
    }

    .why-choose-content {
      display: block;
      .tab-body {
        flex-direction: column;
        &-text {
          width: 100%;
        }
      }
    }

    .rating-card {
      padding: 30px 28px;
      gap: 20px;
      flex-direction: column;
      align-items: flex-start;
    }

    .testimonial-section-4-slider {
      &::before,
      &::after {
        width: 100px;
      }
    }

    .building-img-4 {
      margin-bottom: 30px;
    }

    .rating-section {
      padding: 60px 0 80px;
    }

    .testimonial-section-4 {
      padding: 70px 0 60px;
    }

    .testimonial-section-4-title {
      margin-bottom: 40px;
    }

    .faq-section-4 {
      padding: 70px 0;
    }

    .building-section-4 {
      padding: 80px 0px 70px;
    }
    .footer-rating {
      justify-content: center;
    }
    .footer-section.v4 {
      .privacy-menu {
        justify-content: center;
      }
      .footer-copyright {
        text-align: center;
      }
    }

    /*-- home page 4 style end --*/

    /*-- Hero 5 start --*/
    .hero-section-index5 .index5-hero-content {
      padding-top: 150px;
    }
    .index5-scroll-carousel-section {
      ul {
        gap: 15px;
        margin-bottom: 0px;
        li {
          gap: 5px;
          strong {
            font-size: 20px;
          }
          span {
            img {
              max-width: 60%;
              margin: auto;
              display: flex;
            }
          }
        }
      }
    }

    /*-- Hero 5 End--*/

    /*-- index 5 start --*/
    .why-chose-us-section {
      padding: 70px 0px 40px 0px;
      .why-chose-us-content {
        margin-top: 0px;
        .why-chose-us-card {
          padding: 30px 20px;
          p {
            margin-bottom: 30px;
          }
        }
      }
    }

    .happy-customers-section {
      padding: 70px 0px 120px 0px;
    }
    .happy-customers-title {
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    .happy-customer-slider-for .slider-item p {
      font-size: 18px;
      line-height: 36px;
    }
    /*-- index 5 End --*/

    /*-- about-us page style start --*/
    .building-section {
      background-size: cover;
    }

    .building-img {
      margin-top: 60px;
      text-align: left;
    }

    /*-- about-us page style end --*/

    /*-- Out Servicess section start --*/
    .skills-content {
      &-text {
        margin-bottom: 25px;
      }

      h3 {
        margin-bottom: 10px;
        @include textStyle(16px, 700, 30px);
      }

      h2 {
        @include textStyle(32px, 700, 45px);
      }
    }

    .core-feature-title {
      h3 {
        margin-bottom: 5px;
        @include textStyle(16px, 700, 30px);
      }

      h2 {
        @include textStyle(32px, 700, 45px);
      }
    }
    .core-feature-actions {
      margin-top: 20px;
    }
    .core-feature-section {
      padding: 60px 0 40px 0px;
    }
    /*-- Out Servicess section End --*/

    /*-- Latest Blog Start --*/
    .latest-blog-section {
      padding: 80px 0px 70px;
    }
    .post-tags-section ul li {
      padding: 11px 15px;
    }
    /*-- Latest Blog End --*/

    /*-- Blog Details Start --*/
    .blog-details-inner {
      .blog-details-headline {
        font-size: 15px;
        line-height: 26px;
      }
    }
    .blog-details-section {
      padding-bottom: 50px;
    }
    /*-- Blog Details End --*/

    /*-- Contact Us Style Start --*/
    .contact-content {
      &-title {
        margin-bottom: 20px;
      }

      h3 {
        margin-bottom: 8px;
        font-size: 16px;
      }

      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    /*-- Contact Us Style end --*/

    /*-- Footer Section Start --*/
    .footer-widget .widget-list li:not(:first-child) {
      margin-top: 0px;
    }
    .footer-section.v3 .footer-widget {
      margin-top: 30px;
    }
    .footer-widget .widget-title {
      margin-bottom: 15px;
    }

    .footer-section.v3 .footer-bottom {
      text-align: center;
    }
    .footer-section.v2 .social-link,
    .footer-section.v3 .social-link {
      justify-content: center;
    }
    .footer-section.v3 .footer-copyright {
      text-align: center;
    }
    /*-- Footer Section End --*/

    h1 {
      font-size: 40px;
    }
    h3 {
      font-size: 26px;
    }
    h6,
    body {
      font-size: 14px;
      line-height: 26px;
    }
    .hero-section-index5 .index5-hero-content .v5banner-text .banner-title {
      font-size: 38px;
    }
    .timeline-innerline {
      display: none;
    }
    .powerfull-template-content {
      margin-top: 0;
    }
    .md-mb-0 {
      margin-bottom: 0px;
    }
    .md-mb-10 {
      margin-bottom: 10px;
    }
    .md-mb-20 {
      margin-bottom: 20px !important;
    }
    .md-mb-30 {
      margin-bottom: 30px !important;
    }
    .md-mb-40 {
      margin-bottom: 40px !important;
    }
    .md-mb-50 {
      margin-bottom: 50px !important;
    }
    .md-pt-40 {
      padding-top: 40px !important;
    }
    .md-pt-60 {
      padding-top: 60px !important;
    }
    .md-pt-70 {
      padding-top: 70px !important;
    }
    .md-pb-0 {
      padding-bottom: 0px !important;
    }
    .md-pb-40 {
      padding-bottom: 40px;
    }
    .md-pb-50 {
      padding-bottom: 50px !important;
    }
    .md-pb-60 {
      padding-bottom: 60px !important;
    }
    .md-pb-80 {
      padding-bottom: 80px !important;
    }
    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
      margin-top: 5px;
    }
    .section-title .sub-title {
      font-size: 16px;
    }
    .counter-section .counter-card {
      display: block;
    }
    .best-pricing-card {
      padding: 30px;
    }
    .usability-section {
      background-image: none;
    }
    .breadcrumb-section.blog-details-breadcrumb-section {
      height: 360px;
    }
    .contact-section {
      padding: 80px 0 30px 0;
    }
    .map-section {
      padding: 30px 0 80px;
    }
    .index6-card.index8-card p {
      margin-bottom: 15px;
    }
    .index6-card p {
      margin-bottom: 40px;
    }
    .feature-team-slider-for .slider-item ul {
      gap: 15px;
    }
    .we-offering-slider-nav .slick-btn {
      font-size: 18px;
      padding: 16px 0px;
    }
    .powerfull-template-text {
      padding-top: 30px;
    }
    .building-section::after {
      display: none;
    }
    .powerfull-template-img.powerfull-template-img-right {
      padding-left: 0;
    }
    .breadcrumb-sec .breadcrumb-title br {
      display: none;
    }
    .template-accordion .accordion-button::after {
      top: 24px;
    }
    .customer-section {
      padding-top: 80px;
      padding-bottom: 70px;
    }
    .compare-plans-table-section .compare-plans-table .table-body .table-col1 {
      width: 50%;
    }
    .compare-plans-table-section .compare-plans-table .table-body ul {
      padding-right: 10px;
    }
    .choose-us-section .choose-us-content .choose-us-text {
      max-width: 355px;
    }
    .building-section {
      padding: 70px 0 80px;
    }
    .hero-section2 {
      padding-top: 130px;
    }
    .compare-plans-section {
      padding-top: 70px;
    }
    .footer-widget .widget-list li a {
      padding-bottom: 10px;
      display: block;
    }
    .load-more-btn {
      margin-top: 20px;
    }
    .powerfull-template-section {
      margin-bottom: 70px;
    }
    .hero-section-index5 .index5-hero-img {
      min-height: 270px;
    }
    .footer-testimonial-section .footer-testimonial-left h4 {
      line-height: 36px;
    }
    .hero-section-index5 {
      padding-bottom: 60px;
    }
    .header-top .header-top-content .header-top-timer,
    .header-top .header-top-content .header-top-left {
      display: none;
    }
    .header-top .header-top-content .header-top-right {
      padding-top: 5px;
    }

    .features2-contents {
      .row-gap50-custom {
        row-gap: 25px;
      }
    }
    .customers-quote-card .customers-quote-content {
      padding-top: 68px;
    }
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2 {
      font-size: 36px;
      line-height: 45px;
    }
    .contents-text {
      text-align: left !important;

      & h4 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }

    .compare-price-content {
      flex-direction: column;
      margin-bottom: 40px;
      gap: 30px;

      & .vs h6:after {
        height: 40px;
        width: 82px;
      }
    }

    .choose-us-section {
      padding-bottom: 70px;
      .choose-us-content {
        flex-direction: column;
      }
    }

    .hero2-img {
      .hero2-image1 {
        left: 0%;
      }

      .hero2-image2 {
        left: 0%;
      }

      .hero2-image4 {
        left: 0%;
      }
    }

    .header-top {
      .header-top-content {
        flex-direction: column;
      }
    }

    .hero-section {
      .shape-img {
        &.img-2 {
          bottom: 0;
          left: -15px;
          max-width: 190px;
        }

        &.img-3 {
          bottom: 0px;
          right: -30px;
          max-width: 200px;
        }
      }
    }

    .pricing-card {
      margin-bottom: 30px;
    }

    .pricing-section {
      .shape-img {
        &.img-2 {
          bottom: 0;
          max-width: 309px;
          left: -35px;
        }

        &.img-1 {
          bottom: 0;
          right: 0px;
          max-width: 143px;
        }
      }
    }

    /*-- index 2 Start --*/
    .business-tools-section {
      padding-bottom: 0px;
      margin-bottom: 8px;
      .sidebar {
        display: none;
      }
      .business-tools-content-scrolspy {
        .business-tools-content {
          margin-bottom: 20px;
          min-height: auto;
        }
      }
    }

    .hero-badge::before {
      top: -35px;
    }

    .hero-content2-text {
      ul {
        margin-bottom: 40px;
        margin-top: 25px;
      }
      h2 {
        font-size: 40px;
        line-height: 60px;
        margin-bottom: 0px;
      }
    }

    .index2-integration-section {
      padding: 80px 0px;
    }

    .index2-features-section .index2-features-card {
      margin-top: 50px;
    }
    /*-- index 2 End --*/

    .powerfull-template-row {
      &::before,
      &::after {
        display: none;
        background: transparent;
      }

      .powerfull-template-number {
        display: none;
      }
    }

    .powerfull-template-text {
      max-width: 100%;
      padding-left: 0px !important;
      padding-right: 0px !important;
    }

    .happy-customers-section
      .happy-customers-content
      .happy-customers-slide-text
      p {
      font-size: 16px;
      line-height: 28px;
    }

    .happy-customers-section
      .happy-customers-content
      .happy-customers-title
      h5 {
      font-size: 15px;
      line-height: 23px;
    }

    .happy-customers-section
      .happy-customers-content
      .happy-customers-title
      h2 {
      font-size: 30px;
      line-height: 37px;
    }

    .hero-section-index5 .index5-hero-content .v5banner-text h2 {
      font-size: 36px;
      line-height: 40px;
    }

    .hero-section-index5 .index5-hero-content .v5banner-text p {
      font-size: 16px;
      max-width: 460px;
    }

    .developer-apis-Section {
      padding-bottom: 50px;

      .developer-apis-left {
        padding: 50px 0px;
        margin-bottom: 0px;
        padding-right: 0px;
      }

      .developer-apis-right {
        padding: 50px 15px;
      }
    }

    .case-studies-section .case-studies-left {
      padding: 70px 0px;
    }

    .ultimate-features-section {
      margin-bottom: 0px;
    }

    .footer-testimonial-section {
      .footer-testimonial-left {
        margin-bottom: 50px;

        h4 {
          font-size: 18px;
          margin-bottom: 25px;
        }

        form button {
          padding: 8px 18px;
        }
      }
    }

    .hero-section6 {
      .container {
        .banner-vector-line1,
        .banner-vector-line2 {
          display: none;
        }
      }
    }

    .hero-section6 .banner-vector-line {
      display: none;
    }

    .v6-banner-img-section {
      max-width: 100%;
      margin-top: 50px;
    }

    .benefits-faq {
      padding-left: 0px;
      padding-top: 50px;
    }

    .disclaimer-section {
      padding: 30px 0px;
    }

    .feature-team-section.v6 {
      padding-top: 40px;
    }

    .customers-quote-card .customers-quote-bg {
      width: 55%;
      top: 13.5%;
      left: 23%;
      bottom: auto;
    }

    .customers-quote-card .quote-icon {
      left: 30px;
      top: 48%;
    }

    .customers-quote-text {
      padding-bottom: 0px;
      padding-top: 100px;
    }

    .happy-customers-section .happy-customers-bg .happy-customers-bg-img {
      height: 1700px;
    }

    /*-- pricing plan --*/
    .pricing-plan-section {
      padding-bottom: 50px;
    }

    .pricing-plan-card {
      padding-bottom: 30px;
    }
    .pricing-plan-card-content.right {
      height: 0px;
      overflow: hidden;
      transition: 0.5s;
    }
    .best-pricing-card-body {
      margin-top: 25px;
    }
    /*-- v7 start --*/
    .v7body-section {
      margin-bottom: 0px;
    }

    .hero-section-v6 {
      padding-top: 120px;

      .v6hero-img {
        margin-top: 0px;
      }
    }

    .v7hero-section-text .banner-text h2 {
      font-size: 38px;
      line-height: 56px;
      margin-bottom: 16px;
    }

    .v7footer-contact-card {
      flex-direction: column;

      .v7footer-card-text {
        text-align: center !important;
      }
    }
    .footer-v7-text h2 {
      font-size: 32px;
      line-height: 42px;
    }

    .v7-main-footer {
      position: relative;
      flex-direction: column;
      padding-top: 90px;

      h5 {
        margin-bottom: 20px;
      }

      .back-to-top-btn {
        position: absolute;
        top: 30px;
      }
    }

    .v7-main-footer {
      h5,
      h6 {
        width: 100%;
        text-align: center;
        justify-content: center;
      }
    }

    /*-- v7 End --*/

    /*-- pricing plan --*/
    .pricing-plan-breadcrumb-right {
      justify-content: flex-start;
      margin-top: 40px;
    }

    .v7hero-section-text .banner-text {
      margin-bottom: 0;
    }
    .v6hero-section-btns {
      margin-top: 35px;
    }

    /*-- Index 8 Start --*/
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
    .we-offering-section {
      padding-top: 72px;
    }
    .footer-testimonial-section .footer-testimonial-right {
      position: static;
    }
    .v8banner-video {
      position: relative;
      top: 0px;
      width: 100%;
    }
    .index6-card.index8-card {
      max-width: 370px;
      margin: auto;
      height: 350px;
      a {
        padding-top: 0px;
      }

      .index8-card-text {
        bottom: -100px;
      }
    }
    .index8-accounting-img {
      max-width: 100%;
      padding-right: 0px;
      margin-bottom: 40px;
    }
    .footer-testimonial-img {
      text-align: center;
    }
    .we-offering-text {
      padding-right: 0px;
      max-width: 100%;
    }
    .we-offering-slider-content {
      margin-top: 50px;
      max-width: 100%;
    }
    .v8banner-section {
      padding: 140px 0 0;
    }
    .footer-testimonial-section .footer-testimonial-left.v8 {
      padding-top: 10px;
      padding-bottom: 0;
    }
    .index8-accounting-column-section .custom-row {
      padding-bottom: 30px;
    }
    .index8-accounting-column-content {
      padding-right: 0;
    }
    .customers-quote-card .customers-quote-bg {
      top: 8.5%;
    }
    /*-- Index 8 End --*/

    .blog-details-section {
      margin-top: -80px;
    }

    /*-- ChatBot Start --*/
    .v8banner-section.chatbot-banner {
      .chatbot-banner-text {
        padding-bottom: 0px;
        min-height: 550px;
        .title {
          text-align: center;
        }
      }
    }
    .v8banner-section {
      &.chatbot-banner {
        padding: 70px 0 0 0;
      }
    }
    .chatbot-banner-video {
      &.v8banner-video {
        video {
          min-height: 600px;
        }
      }
    }
    .convert-visitors-slider-nav-section {
      .slick-track {
        gap: 0px;
        flex-wrap: wrap;
        justify-content: center;
        .nav-item {
          max-width: 40% !important;
          text-align: left;
          margin-bottom: 20px;
        }
      }
    }
    .convert-visitors-slider-content {
      max-width: 500px;
      margin: auto;
      position: relative;
      .slick-dots {
        max-width: 500px;
        left: 3%;
        top: 45.2%;
      }
      .convert-visitors-slider-bg {
        top: 12%;
        max-width: 500px;
        left: 0%;
        width: 100%;
      }
    }
    .chatbot-newslater-btn {
      margin: auto;
      margin-top: 20px;
    }
    .chatbot-testmonial-content {
      .testmonial-quote-text {
        font-size: 16px;
        line-height: 30px;
      }
    }
    .chatbot-customers-suport-card {
      min-height: auto;
      margin-bottom: 30px;
    }

    .chatbot-why-choose-us-content {
      padding: 50px;
    }
    .chatbot-footer-bottom {
      margin-top: 30px;
      .footer-copyright {
        min-height: auto;
        margin-top: 16px;
      }
    }
    .chatbot-newslater {
      margin-bottom: 20px;
    }
    .chatbot-testmonial-badge {
      padding-top: 50px;
    }
    .convert-visitors-slider-nav {
      padding-bottom: 0px;
    }

    .convert-visitors-section {
      padding-top: 70px;
    }
    .chatbot-why-choose-us-section {
      padding-top: 50px;
      padding-bottom: 80px;
    }
    .chatbot-customers-suport-sectoin {
      padding-bottom: 50px;
    }
    .chatbot-best-pricing-section {
      padding-top: 70px;
      padding-bottom: 40px;
    }
    .chatbot-best-pricing-card {
      .card-header {
        margin-bottom: 16px;
      }
      .card-body {
        .pricing-icon {
          margin-bottom: 10px;
        }
        h3 {
          margin-bottom: 10px;
        }
      }
    }
    .chatbot-testmonial-section {
      padding-bottom: 70px;
    }
    .chatbot-footer-section {
      padding-top: 65px;
    }
    .chatbot-newslater {
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    .chatbot-newslater-left {
      text-align: center;
    }
    .newsletter-get-demo-section-inner {
      .newsletter-box {
        align-items: flex-start;
      }
    }
    .integration-element-section {
      padding: 80px 0px;
    }
    .integration-element-title {
      margin-top: 130px;
      margin-bottom: 45px;
      h2 {
        font-size: 32px;
        line-height: 45px;
      }
    }
    .chatbot-footer-card {
      padding: 40px 30px;

      .chatbot-footer-left {
        margin: auto !important;
        margin-left: auto !important;
        text-align: center;
        margin-bottom: 40px !important;

        h4 {
          margin: auto;
          margin-bottom: 20px;
        }
      }
    }

    .chatbot-footer-bottom-right {
      text-align: center;
      p {
        margin-bottom: 0px;
      }
      .chatbot-social {
        margin-bottom: 35px;
        justify-content: center;
      }
    }
    .chatbot-footer-bottom {
      text-align: center;
    }
    .chatbot-footer-bottom-left {
      text-align: center;
      ul {
        justify-content: center;
        margin: auto;
        margin-bottom: 22px;
      }
    }
    .chatbot-footer-bottom {
      .footer-copyright {
        justify-content: center;
      }
      .copyright-list {
        text-align: center;
        margin: auto;
      }
    }
    /*-- ChatBot End --*/

    /*-- NewsLetter Section  Start --*/
    .hero-section2.newslater {
      padding-top: 150px;
    }
    .portfolio-section {
      &.newsletter {
        .portfolio-gallery {
          .portfolio-img {
            width: 180px;
            height: 260px;
          }
        }
      }
    }

    /*-- nft section start --*/
    .nft-banner-section {
      padding-bottom: 90px;
    }
    .hot-collections-section {
      margin-bottom: 75px;
    }
    .live-auctions-section {
      padding-bottom: 75px;
    }
    .top-artists-section {
      padding-bottom: 43px;
    }
    .nft-footer-section {
      margin-top: 78px;
    }
    .discover-nfts-section {
      margin-bottom: 50px;
    }
    .newsleter-features-card-text {
      padding: 20px;
    }

    .powerful-email-section {
      padding-top: 70px;
      padding-bottom: 80px;
    }
    .powerful-email-left {
      .email-collaps-list {
        .timeline-innerline {
          display: block;
        }
      }
    }
    .brands-section.newslater {
      padding: 40px 20px;
      .brands-section-title {
        position: inherit;
      }
    }
    .brands-slider.newslater::before {
      left: 0px;
    }

    .leading-email-section {
      margin-top: 35px;
      margin-bottom: 70px;
    }
    .newsleter-features-secton {
      padding-bottom: 50px;
    }

    .chatbot-footer-card.newsletter {
      padding-bottom: 30px;
    }

    .place-bid-btn {
      padding: 17.5px 100px;
    }
    .nft-footer-section {
      text-align: center;
    }
    .nft-footer-social-list ul {
      margin: auto;
      margin-bottom: 40px;
    }
    .nft-newsletter form {
      justify-content: center;
    }
    .nft-top-footer {
      margin-bottom: 0px;
    }
    .nft-bottom-footer {
      padding: 20px 0px;
    }
    .nft-bottom-footer-right {
      margin: auto;
      margin-bottom: 10px;
    }
    .nft-bottom-footer p {
      justify-content: center;
    }
    .nft-card .nft-text {
      padding: 16px;
      .nft-title {
        font-size: 16px;
      }
    }
    .feature-team-section {
      padding: 70px 0px;
    }

    .index2-integration-section.newsletter {
      padding-top: 45px;
    }
    .newsletter-testmonial-section {
      padding-top: 70px;
    }
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

    .chatbot-footer-card.newsletter {
      .chatbot-footer-left {
        margin: auto;
        margin-bottom: 30px;
      }
    }
    /*-- NewsLetter Section  End --*/

    /*-- Marketplace Start --*/
    .nft-banner-left {
      padding-top: 0px;
      max-width: 500px;
      margin: auto;
    }
    .top-artists-list {
      .top-artists-card {
        .top-artists-img {
          max-width: 35px;
          max-height: 35px;
          min-width: 35px;
          min-height: 35px;
        }
      }
    }
    .search-form-phn {
      max-width: 580px;
    }

    .nft-footer-logo {
      img {
        margin: auto;
      }
    }
    .footer-top-section {
      &::before {
        height: 50%;
        width: 100%;
      }
      .footer-top-text {
        &.right {
          margin-left: 0px;
          margin-top: 40px;
        }
      }
    }

    /*-- Discover page --*/
    .discover-nfts-page {
      padding-top: 75px;
    }
    /*-- item Details --*/
    .item-details-section {
      padding-top: 80px;
      padding-bottom: 40px;
    }
    .item-details-info {
      margin-top: 70px;
      .item-details-btns {
        button {
          width: 46%;
        }
        .item-details-timer {
          width: 50%;
          padding: 17.5px 20px;
        }
      }
    }

    /*-- creator-profile --*/
    .creator-profile-section {
      .creator-profile-img {
        min-width: 180px;
        min-height: 180px;
        max-width: 180px;
        max-height: 180px;
        padding: 10px;
      }
    }

    /*-- Marketplace End --*/

    .sass-video-container {
      .video-card {
        height: 320px;
      }
    }
    /*-- app landing page start --*/
    .app-banner-text {
      .banner-title {
        font-size: 40px;
      }
    }
    .convert-visitors-slider-right {
      padding-top: 120px;
      &.app {
        padding-top: 0px;
      }
    }
    .v7-main-footer {
      .privacy-menu {
        width: 100%;
        margin-top: 20px;
        gap: 16px;
      }
    }

    .app-useful-features {
      padding: 70px 0px 50px 0px;
    }
    .app-useful-features-text {
      margin-top: 25px;
    }
    .app-useful-features-card-section {
      margin-top: 30px;
    }
    .app-convert-visitors-section {
      padding-top: 60px;
      .convert-visitors-text {
        padding-bottom: 50px;
      }
    }
    .app-convert-visitors-nav {
      position: relative;
      top: -390px;
      width: 100%;
     
      .app-nav-list {
        flex-direction: row;
        flex-wrap: no-wrap;
        .nav-item {
          width: 23% !important;
          max-width: 23% !important;
          min-width: 23% !important;
          padding: 0px !important;
        
          .tab-btn {
            span {
              display: none;
            }
            height: 4px;
            width: 100%;
            overflow: hidden;
            background: #e6e6e6;
            border-radius: 2px;
            position: relative;
            &::before {
              width: 0%;
              height: 100%;
              background: color(primary);
              position: absolute;
              border-radius: 2px;
              left: 0px;
              top: 0px;
            }
          }
        }
      }
    }
    .convert-visitors-slider-right {
      .lead-generation-list {
        &:nth-last-child(1) {
          padding-bottom: 0px;
        }
      }
    }
    .app-landing-hero-section {
      .app-hero-content {
        margin-top: 0px;
      }
    }
    .app-chose-us-section {
      padding-top: 0px;
      padding-bottom: 50px;
    }
    .testimonial-section-4.app-testimonial-section {
      padding-top: 70px;
    }
    .app-chose-us-content {
      .app-chose-title {
        margin-bottom: 30px;
      }
    }
    .app-benefits-section {
      padding: 70px 0px 40px 0px;
    }
    .v7-main-footer {
      .copyright-text {
        width: 100%;
        text-align: center;
      }
    }
    .v7-footer-area {
      position: relative;
    }

    /*-- crypto index start --*/
    .crypto-wallet-hero-section {
      padding-top: 150px;
    }
    .crypto-hero-img {
      margin-bottom: 80px;
      .mobile-img {
        max-width: 140px;
      }
    }
    .hero-overlay {
      .banner-vector {
        margin-top: 1000px;
      }
    }

    .crypto-features-text {
      text-align: center;
      margin-bottom: 30px;
      padding-right: 0px;
      &1,
      &2 {
        &::after {
          display: none;
        }
      }
      &3 {
        margin-bottom: 0px;
      }
      p {
        margin: auto;
      }
    }
    .super-secure-text {
      font-size: 16px;
    }
    .manage-asset-section {
      margin: 80px 0px;
    }
    .manage-asset-left {
      margin-bottom: 40px;
    }
    .blockchain-defi-section {
      margin-bottom: 50px;
    }
    .cross-platform-section {
      padding: 80px 0px;
    }
    .cross-platform-card {
      max-width: 410px;
      padding: 60px 0px;
    }
    .super-secure-section {
      padding: 80px 0px 50px 0px;
    }
    .feedbacks-section {
      padding-bottom: 20px;
    }
    .download-wallet-section {
      .download-wallet-overlay {
        padding-top: 80px;
        padding-bottom: 80px;
      }
    }
    .chatbot-footer-card {
      padding-bottom: 40px !important;
    }
    .footer-menu-list {
      margin-bottom: 30px;
    }
    .os-btns {
      max-width: 225px;
      margin-top: 50px;
      .os-btn {
        min-width: 106px;
        min-height: 106px;
        border-radius: 20px;
      }
    }
    .crypto-footer-social-list {
      justify-content: center;
      max-width: 350px;
      margin: auto;
      margin-top: 15px;
      margin-bottom: 30px;
    }
    .blockchain-defi-card {
      .graph-img {
        opacity: 0.5;
      }
    }
    /*-- crypto index end --*/

    /*-- corporat indexe start --*/
    .coroprate-banner-section {
      .overlay {
        padding: 80px 0px;
      }
    }
    .corporate-banner-text h1 {
      font-size: 40px;
    }
    .best-services-section .overlay {
      padding: 70px 0px 80px 0px;
    }
    .about-our-company-section {
      padding: 80px 0px;
    }
    .how-it-work-section {
      padding: 80px 0px 50px 0px;
    }
    .our-values-section {
      padding-top: 70px;
      padding-bottom: 50px;
    }
    .our-value-text {
      text-align: left;
      padding-left: 80px;
      max-width: 390px;
      .our-value-icon {
        right: auto;
        left: 0px;
        top: 0px;
        bottom: auto;
      }
    }
    .our-values-top {
      p {
        font-size: 16px;
      }
    }
    .corporate-testiminials-content {
      p {
        font-size: 16px;
      }
    }
    .our-values-img-border {
      position: relative;
      margin-bottom: 30px;
    }
    .consultation-form {
      padding: 60px 30px;
    }
    .consultation-left {
      padding: 60px 30px;
    }
    .corporate-testiminials-section {
      .overlay {
        padding: 80px 0px;
      }
    }
    .brands-section.corporate-brands-section {
      padding: 60px 0px;
    }
    .consultation-section {
      padding-top: 80px;
    }
    .corporate-footer-top-banner {
      &3 {
        .overlay {
          border-top: 1px solid ${({ theme }) => theme.colors.whiteColor}26;
        }
      }
    }
    .staco-scroll-top {
      bottom: -90px;
      transition: 0.5s;
      &.fixed {
        bottom: 25px;
      }
    }
    /*-- corporat index end --*/

    /*-- crypto wallet index 2 start --*/
    .crypto2-hero-section {
      padding-top: 140px;
    }
    .crypto2-hero-text {
      text-align: center;
      max-width: 430px;
      margin: auto;
    }
    .crypto2-hero-img {
      position: relative;
      z-index: 1;
      max-width: 500px;
      margin: auto;
      text-align: center;
      margin-top: 120px;
    }

    .crypto-assets-box h3 {
      font-size: 24px !important;
    }

    .safe-platform-ball {
      min-height: 100%;
      padding: 50px 20px;
      h4 {
        font-size: 20px;
      }
    }
    .download-wallet-list ul li {
      width: 33.33%;
    }
    .support-card-right {
      max-width: 100%;
      margin-top: 20px;
    }

    .support-section {
      padding: 50px 0px 80px 0px;
    }

    .crypto-assets-section {
      padding-bottom: 80px;
    }
    .crypto2-hero-section {
      .bottom-overlay {
        bottom: 100px;
      }
    }
    .crypto-assets-section {
      margin-top: -100px;
    }
    .crypto2-benifits-section {
      padding: 80px 0px;
    }
    .connect-dapps-section {
      padding-top: 80px;
    }
    .connect-dapps-img .mocup-img {
      margin-top: -300px;
    }
    .safe-platform-text {
      margin-bottom: 60px;
    }
    .metaverse-card .overlay {
      padding: 50px 30px;
    }

    .cross-network-list {
      .item {
        height: 70px;
        width: 180px;
      }
    }
    .our-partners-list {
      .item {
        height: 70px;
        width: 180px;
      }
    }
    /*-- crypto wallet index 2 end --*/

    /*- crypto token start --*/
    .crypto-token-banner-inner {
      .overlay {
        padding-top: 130px;
      }
    }
    .crypto-token-banner-text {
      h1 {
        font-size: 50px;
      }
    }
    .token-footer-menu-section {
      .footer-column {
        &2 {
          border-right: none;
        }
      }
    }
    .token-footer-bottom-text {
      .text {
        font-size: 45px;
      }
    }

    .crypto-token-partners {
      .partners-title {
        font-size: 40px;
      }
    }
    .banner-video-card {
      h2 {
        .cd-words-wrapper {
          width: 380px !important;
          b {
            width: 380px !important;
          }
        }
      }
    }
    .crypto-token-partners {
      margin-bottom: 80px;
      .partners-list {
        ul {
          li {
            width: 33.33%;
          }
        }
      }
    }
    .crypto-token-social {
      padding: 80px 0px;
    }
    .crypto-social-list {
      flex-wrap: wrap;
      .crypto-social-link {
        .crypto-social-btn {
          padding: 30px;
          max-width: 100px;
          height: 100px;
        }
      }
    }
    .crypto-token-features-cards {
      .stack__card {
        height: 460px;
      }
    }
    .crypto-token-features-img {
      z-index: -1;
      opacity: 0.7;
    }

    .news-content {
      .news-row {
        padding: 25px 30px;
        .link {
          right: 50px;
        }
      }
    }
    .documents-content {
      .documents-row {
        padding: 50px 30px;
        .link {
          right: 30px;
        }
      }
    }
    .text-with-img {
      margin-bottom: 90px;
    }
    .crypto-token-tag-section {
      padding: 80px 0px;
    }
    .latest-news-section {
      padding-top: 60px;
    }
    .documents-section {
      padding-top: 60px;
    }

    .key-points-section {
      padding: 70px 0px 40px 0px;
    }
    .crypto-token-partners {
      margin-bottom: 80px;
    }
    .crypto-tokenomics-section {
      padding-top: 80px;
    }
    /*- crypto token end --*/

    /*-- sass landing page start --*/
    .sass-landing-hero-content {
      padding-top: 140px;
    }
    .top-notch-features-section {
      padding: 80px 0px 48px 0px;
    }
    .sass-choose-us-text {
      margin-top: 60px;
    }
    .brands-section {
      &.sass {
        padding-top: 40px;
      }
    }
    .sass-video-section {
      padding: 55px;
    }
    .seamless-solutions-section {
      padding-bottom: 80px;
    }
    .seamless-card2 {
      margin-top: 60px;
    }
    .community-content h2 {
      font-size: 32px;
    }
    .newsletter-get-demo-section-inner.sass {
      padding: 40px;
    }
    .sass-demo-shapes {
      height: 200px;
      max-width: 350px;
    }
    .chatbot-footer-section.sass-footer {
      padding-top: 80px;
    }
    .sass-choose-us-section {
      .sidebar__inner {
        width: 500px !important;
        position: inherit !important;
      }
    }
    /*-- sass landing page end --*/

    /*-- defi index start --*/
    .defi-banner-section {
      .defi-banner-inner {
        .overlay {
          padding-top: 137px;
        }
      }
    }
    .ecosystem-content {
      overflow: hidden;
    }

    .eco-line {
      max-width: 430px;
      margin: auto;
    }
    .metavarse-card-img {
      margin-top: 50px;
    }
    .defi-metaverse-card2 {
      .card2-img {
        margin-right: auto;
      }
    }

    .latest-articles-card {
      .latest-articles-text {
        padding: 23px;
      }
    }

    .defi-footer-section {
      .footer-row-inner {
        flex-direction: column;
      }
      .left {
        text-align: left;
        padding-right: 0px;
        max-width: 100%;
      }
      h5 {
        margin-bottom: 16px;
      }
      .footer-row {
        height: auto;
      }
    }

    .defi-banner-text {
      h1 {
        font-size: 40px;
        line-height: 150%;
      }
      p {
        margin-bottom: 30px;
        font-size: 16px;
      }
    }

    .multi-chain-section {
      margin-top: 30px;
    }
    .multi-chain-card {
      padding: 10px 0px;
    }
    .multi-chain-list {
      margin-bottom: 10px;
      ul {
        li {
          padding: 5px;
          margin-right: 10px;
          .coin-img {
            height: 20px;
            width: 20px;
          }
        }
      }
    }
    .ecosystem-section {
      p {
        font-size: 16px;
      }
    }
    .defi-statistic-card {
      padding: 30px;
      h2 {
        font-size: 32px;
      }
    }

    .defi-safe-platform-shape {
      .galaxy2 {
        bottom: -200px;
        max-width: 300px;
      }
      .rocket {
        max-width: 150px;
      }
    }

    .defi-safe-platform-section {
      margin-top: 80px;
    }
    .defi-statistic-section {
      padding-bottom: 40px;
    }
    .ecosystem-section {
      padding-top: 50px;
    }
    .ecosystem-section {
      p {
        margin-bottom: 30px;
      }
    }
    .defi-launchapp-btn {
      margin-bottom: 50px;
    }
    .defi-backed-section {
      margin-top: -160px;
      padding-bottom: 75px;
    }
    .latest-articles-section {
      padding-bottom: 80px;
    }
    .defi-footer-section {
      ul {
        flex-wrap: wrap;
        justify-content: center;
      }
    }
    .defi-footer-section {
      .right {
        width: 100%;
      }
      .footer-row {
        &::before {
          width: 40%;
          background: ${({ theme }) => theme.colors.whiteColor}0d;
        }
        &::after {
          width: 60%;
        }
      }
      .footer-row-inner {
        justify-content: flex-start;
      }
    }
    .defi-footer-section ul {
      row-gap: 10px;
      column-gap: 30px;
      justify-content: flex-start;
    }
    .ecosystem-text {
      ul {
        flex-wrap: wrap;
        justify-content: center;
        li {
          width: 50%;
          line-height: 20px;
          &:nth-child(1) {
            text-align: left;
            padding: 0px;
          }
          &:nth-child(2) {
            text-align: right;
            padding: 0px;
          }
          &:nth-child(3) {
            text-align: right;
            padding-right: 20px;
          }
          &:nth-child(4) {
            text-align: left;
            padding-left: 20px;
          }
        }
      }
    }
    .eco-line-pc {
      display: none;
    }

    .eco-line-mobile {
      display: block;
      position: relative;
      z-index: 0;
    }
    .ecosystem-text {
      margin-bottom: -100px;
      position: relative;
      z-index: 1;
    }

    .ecosystem-text ul li {
      &:nth-child(3) {
        padding-left: 80px;
        text-align: left;
      }
      &:nth-child(4) {
        padding-right: 80px;
        text-align: right;
      }
    }

    /*-- defi index end --*/

    /*-- auth style start --*/
    .auth-body {
      flex-direction: column;
    }
    .auth-form-section {
      max-width: 100%;
      padding-left: 50px;
      padding-right: 50px;
    }
    .auth-right-section {
      display: none;
    }

    .auth-page-header {
      margin-bottom: 50px;
    }

    .terms-and-service-inner {
      .sidebar {
        margin-bottom: 40px;
      }
    }
    .terms-and-service-sidebar {
      position: relative !important;
      top: 0px !important;
      width: 100% !important;
    }
    /*-- auth and utlitiy start --*/
    .terms-and-service-body {
      h1 {
        font-size: 32px;
      }
    }
    .terms-and-service-body {
      padding-top: 60px;
      padding-bottom: 50px;
    }
    .terms-and-service-inner {
      margin-top: 60px;
    }
    /*-- auth and utlitiy end --*/
    /*-- auth style end --*/
  }

  @media screen and (max-width: 575px) {
    .mobile-navbar-menu .nav-menu,
    .mobile-navbar-menu .nav-buttons {
      width: 100%;
    }

    /*-- form styel start --*/
    .form-input-between {
      gap: 0px;
      flex-direction: column;
    }

    /*-- form styel end --*/

    .get-demo-btn {
      height: 100px;
      width: 100px;
      padding: 10px;
    }
    .feature-section {
      padding: 60px 0 20px 0;
    }
    .usability-card {
      padding: 61px 30px 20px 30px;

      &-title {
        margin-bottom: 30px;

        h2 {
          @include textStyle(32px, 700, 45px);
          max-width: 308px;
        }
      }

      .usability-buttons {
        margin-bottom: 50px;
        gap: 10px;
      }
    }
    .usability-slider-nav {
      .slider-item {
        width: 110px !important;
        height: 40px !important;

        &-text {
          display: none;
        }
        img {
          display: none;
        }
      }
    }

    .marketing-img {
      width: 100%;
    }

    /*-- faq-section start --*/
    .faq-seciton {
      &.v2 {
        padding: 70px 0 60px 0;
      }

      &-header {
        align-items: flex-start;
        flex-direction: column;
        gap: 20px;
      }
    }

    /*-- faq-section end --*/

    /*-- footer-section start --*/
    .footer-section {
      &.v2,
      &.v3 {
        .social-link {
          margin-top: 20px;
        }
      }
    }

    .footer-info {
      margin-bottom: 40px;

      .footer-logo {
        margin-bottom: 30px;
      }
    }

    /*-- footer-section end --*/
    /*-- home page style end --*/

    /*-- home page 2 style start --*/
    .hero-content2-text {
      & h2 {
        font-size: 32px;
      }

      & ul li {
        font-size: 13px;
      }
    }

    .index2-features-section .index2-features-card {
      padding: 50px 30px;
    }
    .statistics-text {
      text-align: center;
    }
    .index2-statistics-content {
      .col-sm-4 {
        &:nth-last-child(1) {
          .statistics-text {
            margin-bottom: 0px;
          }
        }
      }
    }

    /*-- home page 2 style end --*/

    /*-- home page 3 style start --*/
    .hero-section-3-header h2 {
      font-size: 36px;
      line-height: 70px;
    }

    .virtually-card .virtually-title h2 {
      font-size: 30px;
      line-height: 50px;
    }

    .meeting-anytime-section {
      padding: 60px 0;
    }

    .meeting-anytime-card-text {
      h2 {
        font-size: 30px;
      }

      p {
        font-size: 16px;
      }
    }

    .counter-card {
      padding: 20px;
    }

    .useful-feature-header-title h2 {
      font-size: 30px;
    }

    .best-pricing-header {
      h2 {
        font-size: 30px;
      }
    }

    /*-- home page 3 style end --*/

    /*-- home page 4 style start --*/
    .hero-section-4-content {
      .hero-content-text {
        &::before {
          left: 24px;
        }
      }
    }
    /*-- home page 4 style end --*/

    /*-- about-us page style start --*/
    .customer-section {
      padding: 60px 0;
    }

    .about-feature-section {
      .about-feature-title {
        margin-bottom: 40px;

        h3 {
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 30px;
        }

        h2 {
          font-size: 30px;
          line-height: 50px;
        }
      }
    }

    .about-feature-slider-nav {
      .slick-track {
        margin: 0 -5px;
      }

      .slider-item {
        margin: 5px;
      }
    }

    .team-section {
      padding: 0 0 30px 0;
    }

    .building-section {
      padding: 60px 0;
    }

    /*-- about-us page style end --*/

    /*-- contact-us page style start --*/

    .map-info-card {
      position: absolute;
      z-index: 1;
      top: 30px;
      left: 30px;
      width: 80%;
      height: calc(100% - 60px);
      padding: 20px;
    }

    /*-- contact-us page style end --*/

    /*-- service page style start --*/
    .service-section {
      padding: 75px 0 30px;
    }

    .skills-section {
      padding: 72px 0 80px;
    }

    .skills-status {
      gap: 50px;

      .skills-item {
        text-align: center;

        p {
          margin-top: 18px;
        }
      }

      .pie_progress {
        width: 80px;
        height: 80px;
      }

      .pie_progress__label h4 {
        @include textStyle(16px, 600, 26px);
      }
    }

    /*-- service page style end --*/

    .testimonial-section-4 {
      &.app-testimonial-section {
        .testimonial-btns {
          a {
            margin-bottom: 20px;
          }
        }
      }
    }
    .portfolio-grid-container.row {
      margin: 0px !important;
    }
    .mobile-navbar-menu .nav-buttons {
      padding-left: 20px;
      padding-right: 20px;
    }
    .container {
      padding: 0px 20px;
    }
    .hero-section-index5 .index5-hero-content .v5banner-text h2 {
      font-size: 32px;
      line-height: 40px;
      gap: 10px;
    }
    .index8-accounting-column-section .custom-row {
      padding-bottom: 20px;
    }
    .index2-features-section .index2-features-card {
      padding: 50px 30px;
    }
    .mobile-navbar-menu .nav-menu li a {
      padding-left: 20px;
      padding-right: 20px;
    }

    .mobile-navbar-menu .nav-menu li.active .sub-menu {
      border-top: 1px solid ${({ theme }) => theme.colors.blackColor}26;
      border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
    }
    .mobile-navbar-menu .nav-menu {
      padding: 0;
    }
    .hero2-img {
      .hero2-image1 {
        height: 80px;
        width: 80px;
      }

      .hero2-image2 {
        height: 50px;
        width: 50px;
      }

      .hero2-image4 {
        height: 30px;
        width: 30px;
        bottom: 20px;
      }
    }
    .portfolio-gallery-card2 {
      padding-top: 0;
    }
    .powerfull-template-text ol {
      display: block;
      margin-top: 20px;
      li {
        width: 100%;
        gap: 0;
      }
    }

    /*-- element-footer --*/
    .footer6-section .social-link.social-link-right {
      justify-content: center;
      margin-top: 20px;
    }
    .footer-section .staco-footer-6 .footer-copyright {
      margin-top: 15px;
    }
    .meeting-anytime-card-text h2 {
      font-size: 30px;
      line-height: 44px;
    }

    .footer-section .staco-footer-6 .footer-logo {
      display: block;
      text-align: center;
    }

    .footer-section .staco-footer-6 .social-link {
      justify-content: center;
    }

    .hero-section-3-header h2 {
      font-size: 40px;
      line-height: 55px;
    }

    .best-pricing-card-title h2 {
      font-size: 26px;
    }

    .developer-apis-Section
      .developer-apis-right
      .developer-apis-tab-buttons
      button {
      padding: 4px 8px;
      font-size: 13px;
    }

    .developer-apis-notepad .custom-textarea .textarea {
      width: 100%;
    }

    .portfolio-section .portfolio-title .portfolio-subtitle h2,
    .portfolio-section .portfolio-title .portfolio-subtitle h3 {
      font-size: 20px;
      line-height: 37px;

      span {
        line-height: 37px;
      }
    }

    .footer-contact-section {
      .line1,
      .line2 {
        display: none;
      }
    }

    .blog-details-inner {
      .blog-details-headline {
        font-size: 16px;
        line-height: 28px;
      }

      .blog-quotation-section h4 {
        font-size: 16px;
        line-height: 28px;
      }

      .blog-details-info-list {
        margin-bottom: 15px;

        ul {
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
        }
      }
    }

    .manage-team-card {
      text-align: center;

      p {
        margin: auto;
      }
    }

    .ultimate-features-card {
      text-align: center;

      p {
        max-width: 350px;
        margin: auto;
      }
    }

    .lets-talk-content {
      padding: 0px 30px;
      text-align: center;
    }

    .lets-talk-text .lets-talk-btn {
      margin: auto;
    }

    .lets-talk-img {
      justify-content: center;
    }

    .customers-quote-card-footer {
      padding: 20px 16px;

      ul {
        gap: 12px;
      }
    }

    .customers-quote-card .customers-quote-bg {
      width: 65%;
      left: 17%;
    }

    .v6hero-section-btns {
      margin-top: 30px;
    }

    .portfolio-grid-container {
      -webkit-column-count: 1;
      column-count: 1;
    }

    .compare-plans-table-section {
      .compare-plans-table {
        ol {
          li {
            h5 {
              display: flex;
              align-items: flex-start;
              justify-content: flex-start;
              flex-direction: column;

              & span {
                margin-left: 0px;
              }
            }
          }
        }
      }
    }
    .v7hero-section-text .banner-text h2 {
      font-size: 32px;
    }
    /*-- Index 8 Start --*/
    .index8-accounting-column-section {
      .custom-row {
        margin: 0px;
      }
    }

    .index8-accounting-column-content {
      border: none;
      padding-right: 0px;
    }

    .v8banner-video video {
      min-height: 350px;
    }

    .footer-contact-section {
      .footer-contact-line {
        display: none;
      }
      .footer-contact-text {
        margin: auto;
        margin-bottom: 20px;
        max-width: 100%;
        p {
          padding-left: 0px;
          background: transparent;
        }

        h5 {
          padding-left: 0px;
        }
      }

      .footer-contact {
        margin-left: 0px;
      }
    }

    .footer-top6 .footer-col form {
      input {
        margin-bottom: 20px;
      }
      input,
      button {
        max-width: 400px;
        width: 100%;
      }
    }

    .convert-visitors-slider-right {
      &.app {
        padding-top: 0px;
      }
    }

    /*-- Index 8 End --*/

    @keyframes move {
      25% {
        transform: translatey(5%);
        opacity: 1;
      }

      50% {
        transform: translatey(-28%);
      }

      75% {
        transform: translatey(-62%);
      }
    }

    .v8banner-section.chatbot-banner {
      .chatbot-banner-text {
        .title {
          font-size: 30px;
          line-height: 50px;
        }
      }
    }
    .convert-visitors-slider-content {
      .slick-dots {
        max-width: 100%;
        left: 0px;
        top: 43.2%;
      }
      .convert-visitors-slider-bg {
        top: 14%;
        max-width: inherit;
        left: -3.5%;
        width: 107%;
        img {
          min-height: 354px;
        }
      }
    }
    .convert-visitors-slider-right {
      padding-top: 120px;
      margin-top: 0px;
    }
    .chatbot-why-choose-us-left {
      .chatbot-why-choose-img {
        max-width: 250px;
      }
    }
    .chatbot-footer-card {
      padding: 30px 20px;
    }
    .chatbot-why-choose-us-content {
      padding: 40px 20px;
    }
    .chatbot-customers-suport-card {
      padding: 40px 20px;
    }
    .footer-menu-list {
      margin-top: 20px;
      h5 {
        margin-bottom: 20px;
      }
    }
    .chatbot-why-choose-us-right {
      padding-top: 65%;
    }
    .chatbot-banner-video {
      .chatbot-banner-video-overlay {
        .banner-chat-section {
          max-width: 275px;
          video {
            min-height: 482px;
          }
        }
      }
      &.v8banner-video {
        video {
          min-height: 482px;
        }
      }
    }

    .integrate-element-list .list-item {
      height: 50px;
      width: 50px;
      padding: 10px;
    }
    .convert-visitors-slider-nav-section {
      margin-left: 0px;
    }
    .convert-visitors-slider-nav-section {
      .slick-track {
        .nav-item {
          max-width: 50% !important;
        }
      }
    }

    /*-- nft marketplace start --*/
    .creator-profile-section {
      .creator-profile-img {
        min-width: 150px;
        min-height: 150px;
        max-width: 150px;
        max-height: 150px;
        padding: 8px;
      }
    }
    /*-- nft marketplace end --*/

    /*-- Newsletter Start --*/
    .hero-section2.newslater {
      .banner-title {
        font-size: 34px;
        .animation-text b {
          font-size: 50px;
        }
      }
    }
    .leading-email-card {
      padding: 40px 20px;
    }
    .leading-email-right {
      margin: 20px 0px;
    }
    .powerful-email-left {
      .email-collaps-list {
        .email-collaps-item {
          .email-collaps-number {
            min-height: 50px;
            min-width: 50px;
            max-width: 50px;
            max-height: 50px;
            font-size: 25px;
          }

          .email-collaps-text {
            h3 {
              font-size: 20px;
              margin-top: 7px;
            }
          }
        }

        .timeline-innerline {
          left: 25px;
        }
      }
    }

    /*-- Newsletter End --*/

    /*-- app-landing start --*/
    .stay-connect-btns {
      a {
        margin: auto;
      }
      .qr-code {
        text-align: center;
        margin-top: 40px;
      }
    }
    /*-- app-landing end --*/

    /*-- Marketplace Start --*/
    .top-artists-list {
      padding: 0px -10px;
      li {
        padding: 0px 10px;
      }
      .top-artists-card {
        padding: 15px 10px;
        gap: 10px;
        .top-artists-img {
          min-height: 30px;
          min-width: 30px;
          max-height: 30px;
          max-width: 30px;
        }
      }
    }
    .categories-card h5 {
      font-size: 14px;
    }
    .marketplace-title {
      h3 {
        font-size: 19px;
        margin-bottom: 0px;
      }
    }
    .hot-collections-section,
    .live-auctions-section {
      .slick-next {
        height: 25px;
        width: 25px;
        top: -50px;
        &::before {
          font-size: 20px;
        }
      }
      .slick-prev {
        height: 25px;
        width: 25px;
        right: 50px;
        top: -50px;
        &::before {
          font-size: 20px;
        }
      }
    }
    .nft-banner-left {
      .slick-dots {
        max-width: 200px;
        li {
          &.slick-active {
            button {
              width: 40px;
            }
          }
        }
      }
    }
    .top-artists-content {
      margin-top: 0px;
      .top-artists-time {
        margin-right: auto;
        margin-left: 0px;
      }
    }

    /*-- item Details --*/
    .item-details-info {
      .item-details-price-section {
        flex-direction: column;
        .item-details-price {
          width: 100%;
          margin-top: 20px;
          &:nth-child(1) {
            margin-top: 0px;
          }
        }
      }
      .nft-people-section {
        flex-direction: column;
        .nft-people {
          margin-bottom: 20px;
          width: 100%;
          &:nth-last-child(1) {
            margin-bottom: 0px;
          }
        }
      }
      .item-details-btns {
        flex-direction: column;
        button {
          width: 100%;
          margin-bottom: 30px;
        }
        .item-details-timer {
          width: 100%;
        }
      }
    }
    .creator-profile-section {
      margin-top: -180px;
    }

    /*-- Modal section --*/
    .staco-modals {
      .modal-content {
        .modal-body {
          .connect-section {
            ul {
              li {
                &::after {
                  top: 19px;
                }
              }
            }
          }
        }
      }
    }
    /*-- Marketplace End --*/
    .app-banner-text {
      .banner-title {
        font-size: 30px;
      }
    }
    .stay-connect-section {
      padding-top: 65px;
      padding-bottom: 100px;
    }
    .stay-connect-mobile-img {
      margin-top: -80px;
    }
    .app-landing-hero-section {
      .app-hero-content {
        p {
          font-size: 14px;
          line-height: 30px;
          max-width: 350px;
          margin: auto;
        }
      }
    }
    .testimonial-section-4.app-testimonial-section {
      .testimonial-btns {
        max-width: 225px;
      }
    }

    /*-- crypto wallet start --*/
    .crypto-hero-section-text {
      h1 {
        font-size: 40px;
      }
      .banner-text {
        font-size: 14px;
        line-height: 30px;
        max-width: 405px;
      }
    }
    .hero-overlay {
      .banner-vector {
        margin-top: 900px;
      }
    }
    .crypto-hero-img {
      .dhashboard-img {
        border-radius: 12px;
      }
      .mobile-img {
        padding: 5px;
        border-radius: 12px;
        max-width: 100px;
      }
    }
    .super-secure-card {
      p {
        max-width: 210px;
        margin: auto;
      }
    }
    .download-wallet-overlay {
      .section-title {
        text-align: center;
      }
    }
    .download-wallet-btns {
      margin: auto;
      margin-top: 40px;
      margin-bottom: -20px;
      a {
        margin-bottom: 20px;
      }
    }
    .os-btns {
      margin: auto;
      margin-top: 50px;
    }
    /*-- crypto wallet end --*/

    /*-- corporate index --*/
    .corporate-banner-text {
      h2 {
        font-size: 32px;
      }
    }
    .corporate-footer-top-banner {
      &2 {
        .overlay {
          border-top: 1px solid ${({ theme }) => theme.colors.whiteColor}26;
        }
      }
    }

    .about-company-right {
      ul {
        flex-wrap: wrap;
        li {
          width: 50%;
          padding: 10px 20px !important;
          &:nth-child(3) {
            border-left: none;
          }
          &:nth-child(1) {
            border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
          }
          &:nth-child(2) {
            border-bottom: 1px solid ${({ theme }) => theme.colors.blackColor}26;
          }
        }
      }
    }

    /*-- crypto wallet index 2 start --*/
    .crypto2-hero-text h1 {
      font-size: 32px;
    }
    .support-card {
      padding: 50px 30px;
      padding-bottom: 20px;
    }
    .benifits-card-img-section {
      .benifits-card-img {
        max-width: auto;
        margin: auto;
        margin-bottom: 30px;
        height: auto;
        text-align: center;
        .card-img {
          position: inherit !important;
          height: auto;
          width: auto;
        }
      }
    }
    .crypto-assets-box h3::before {
      height: 20px;
      width: 20px;
    }

    .crypto-assets-box {
      h3 {
        padding-left: 30px;
        font-size: 18px !important;

        &::before {
          top: 8px;
        }
      }
      .coin-bg {
        left: 50px;
      }
    }
    .crypto2-hero-left::before {
      width: 350px;
      height: 350px;
    }

    .crypto-assets-box {
      padding: 25px;
      height: 200px;
    }
    .crypto2-banner-links {
      flex-wrap: wrap;
      justify-content: center;
      margin: auto;
      .crypto2-btn {
        width: 100%;
        margin-bottom: 20px;
        a {
          margin: auto;
        }
      }
      a {
        &.os-link {
          width: 30%;
          &:nth-last-child(2) {
            margin-left: auto;
          }
          &:nth-last-child(1) {
            margin-right: auto;
          }
        }
      }
    }

    .safe-platform-ball {
      padding: 50px;
      transform: none !important;
      margin-bottom: 30px;
      min-height: auto;
    }
    /*-- crypto wallet index 2 end --*/

    /*-- crypto token index start --*/
    .crypto-token-banner-text {
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 16px;
      }
    }
    .banner-video-card {
      h2 {
        font-size: 32px;
        .cd-words-wrapper {
          width: 300px !important;
          b {
            width: 300px !important;
          }
        }
      }
    }
    .text-with-img {
      font-size: 28px;
    }

    .crypto-token-features-cards {
      .stack__card {
        height: 500px;
      }
    }
    .crypto-token-partners {
      .partners-title {
        font-size: 30px;
      }
    }
    .crypto-token-partners {
      .partners-logo {
        min-width: 110px;
        min-height: 110px;
      }
    }

    .scroll-text-section {
      padding: 30px 0px;
    }
    .scroll-text-inner {
      ul {
        li {
          font-size: 32px;
          margin-right: 24px;
        }
      }
    }
    .latest-news-title {
      h2 {
        font-size: 32px;
      }
      .link {
        right: 20px;
      }
    }
    .documents-title {
      h2 {
        font-size: 32px;
      }
    }
    .news-content {
      .news-row {
        padding: 25px 15px;
        h5 {
          font-size: 16px;
        }
        h3 {
          font-size: 20px;
        }
        .link {
          right: 20px;
        }
      }
    }
    .documents-content {
      .documents-row {
        padding: 30px 20px;
      }
    }
    .documents-section {
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
    .token-footer-bottom-text {
      padding: 0px;
      .text {
        font-size: 32px;
      }
    }
    .crypto-social-list {
      .crypto-social-link {
        width: 33.33%;
        margin-bottom: 30px;
      }
    }
    .crypto-token-social {
      padding: 80px 0px 50px 0px;
    }
    .tokenomics-content {
      h2 {
        font-size: 32px;
      }
    }
    .tokenomics-progress-section {
      flex-wrap: wrap;
      .tokenomics-progress {
        width: 100% !important;
        margin-bottom: 20px;
        .tokenomics-progress-bg {
          height: 30px;
          border-radius: 8px !important;
          margin-bottom: 10px;
        }
        &.community {
          .tokenomics-progress-bg {
            width: 46%;
          }
        }
        &.team {
          .tokenomics-progress-bg {
            width: 34%;
          }
        }
        &.investor {
          .tokenomics-progress-bg {
            width: 12%;
          }
        }
        &.advisors {
          .tokenomics-progress-bg {
            width: 8%;
          }
        }
      }
    }
    /*-- crypto token index end --*/

    /*-- Sass Landing Page start --*/
    .sass-landing-hero-section {
      padding-top: 140px;
    }
    .sass-landing-hero-bg {
      .bg-inner {
        img {
          min-height: 110vh;
        }
      }
    }
    .sass-banner-text {
      p {
        font-size: 16px;
      }
    }
    .sass-landing-hero-bg {
      .banner-shape-list {
        bottom: 80px;
        left: -53px;
        width: 127%;
      }
    }
    .sass-banner-img {
      .shape1 {
        right: -20px;
        width: 75px;
      }
    }
    .sass-banner-btn {
      flex-direction: column;
      margin-bottom: 20px;
    }
    .hero-content-list {
      gap: 15px;
    }
    .sass-video-section {
      padding: 0px;
    }
    .seamless-card {
      .card-bg {
        height: 158%;
      }
    }
    .sass-demo-shapes {
      max-width: 205px;
    }
    .seamless-solutions-section {
      .container {
        .seamless-shape {
          width: 140px;
        }
      }
    }
    .sass-choose-us-section {
      .sidebar__inner {
        width: 380px !important;
      }
    }
    .sass-video-container {
      margin-bottom: 50px;
      .video-card {
        height: 270px;
      }
    }
    /*-- Sass Landing Page end --*/

    /*-- defi index start --*/
    .defi-banner-text {
      h1 {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }
    .defi-metaverse-card {
      .card-left-text {
        margin-left: 20px;
      }
    }

    .seamless-card {
      padding: 40px 20px 60px 20px;
    }
    .newsletter-get-demo-section-inner.sass {
      padding: 30px;
    }

    .defi-backed-list {
      ul {
        column-gap: 4%;
        li {
          width: 48%;
        }
      }
    }
    /*-- defi index start --*/
    .ecosystem-text ul li {
      &:nth-child(3) {
        padding-left: 30px;
      }
      &:nth-child(4) {
        padding-right: 30px;
      }
    }
    /*-- defi index end --*/
  }

  @media screen and (max-width: 480px) {
    /*-- breadcrumb style start --*/
    .breadcrumb-title {
      h2 {
        @include textStyle(30px, 700, 40px);
      }
    }
    .customers-quote-card-footer .slick-track {
      gap: 10px;
    }
    .header-navbar-content {
      width: 250px;
    }
    .hero-img {
      > img {
        width: 300px;
        height: 400px;
      }
    }
    .feature-card-icon {
      margin-bottom: 15px;

      img {
        width: 30px;
        height: 30px;
      }
    }
    .customers-quote-text {
      margin-top: 20px;
    }

    .feature-card-text {
      h2 {
        margin-bottom: 5px;
        font-size: 16px;
        line-height: 26px;
      }
    }
    .usability-card {
      height: auto;
      padding: 61px 13px 20px 13px;
    }
    .usability-slider-nav {
      .slider-item {
        width: fit-content !important;
        height: 40px !important;
        padding: 5px 13px;
        line-height: 30px;

        &-text {
          display: none;
        }
      }
    }
    .marketing-img {
      height: auto;

      > img {
        width: 85%;
        height: auto;
      }
    }
    .testimonial-card {
      &-left,
      &-right {
        padding: 30px 20px 40px;
      }

      &-left .shape-img.img-4 {
        top: 20px;
        right: 33px;
      }
    }
    .integrate-card {
      padding: 30px;
      height: 420px;

      .shape-img {
        &.img-2 {
          bottom: 61px;
          right: 5%;
        }

        &.img-3 {
          bottom: 139px;
          right: 25%;
        }

        &.img-4 {
          bottom: 95px;
          left: 5%;
        }

        &.img-5 {
          bottom: 0;
          left: 30%;
        }
      }
    }
    .testimonial-slider-for {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .slider-info {
        position: relative;
      }
    }
    .testimonial-slider-for .slider-info {
      margin-top: 0;
    }

    /*-- home page style end --*/

    /*-- home page 3 style start --*/
    .hero-section-3 {
      padding: 100px 0 30px 0;
    }

    .hero-section-3-header {
      h2 {
        font-size: 24px;
        line-height: 40px;
      }

      form {
        flex-direction: column;

        input {
          width: 100%;
        }
      }
    }

    .meeting-anytime-card {
      padding: 20px;
    }

    .meeting-anytime-card-text {
      h2 {
        font-size: 24px;
        line-height: 34px;
      }

      p {
        font-size: 16px;
      }
    }

    .counter-card {
      height: auto;
      padding: 30px;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }

    .useful-feature-header-title h2 {
      line-height: 50px;
    }

    .best-pricing-header {
      h2 {
        font-size: 24px;
      }
    }
    .hero-section-index5 .index5-hero-content .v5banner-text span,
    .hero-section-index5 .index5-hero-content .v5banner-text h2 {
      display: block;
      min-height: 40px;
    }

    /*-- home page 3 style end --*/

    /*-- home page 4 style start --*/
    .hero-section-4-content {
      .hero-content-text h2 {
        font-size: 40px;
      }
    }
    .why-choose-section {
      .tab-body {
        h2 {
          font-size: 20px;
          line-height: 30px;
        }

        p {
          margin-top: 15px;
        }

        .list {
          margin-top: 7px;
        }
      }
    }

    .testimonial-section-4-title {
      h3 {
        margin-bottom: 10px;
      }

      h2 {
        font-size: 30px;
      }
    }

    .faq-section-4-title {
      h3 {
        margin-bottom: 10px;
        @include textStyle(16px, 700, 26px);
      }

      h2 {
        @include textStyle(30px, 700, 50px);
      }
    }

    .faq-section-4-tab {
      .nav.nav-tabs {
        gap: 10px;
      }

      .nav-link {
        border-radius: 26px;
        padding: 10px 15px;
      }

      .tab-content {
        margin-top: 40px;
      }
    }

    .faq-section-4-bottom {
      margin-top: 40px;
      text-align: center;
    }

    /*-- home page 4 style end --*/

    /*-- about-us page style start --*/

    .about-feature-section {
      .about-feature-title {
        h2 {
          font-size: 24px;
          line-height: 40px;
        }
      }
    }

    .about-feature-tab {
      .nav.nav-tabs {
        gap: 12px;

        .nav-link {
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;

          .text {
            display: none;
          }
        }
      }

      .tab-content {
        margin-top: 40px;
      }

      .about-feature-tab-content {
        .list {
          margin-top: 30px;
          gap: 20px;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }

    .team-section {
      .section-title {
        margin-bottom: 40px;

        h3 {
          margin-bottom: 10px;
          font-size: 16px;
          line-height: 26px;
        }

        h2 {
          font-size: 20px;
          line-height: 40px;
        }
      }
    }

    /*-- about-us page style end --*/

    /*-- contact-us page style start --*/
    .contact-img {
      .overlay-item {
        &.shape-1 {
          bottom: 60px;
          right: 0;

          img {
            width: 100px;
          }

          .icon {
            img {
              width: 30px;
              height: auto;
            }
          }
        }

        &.shape-2 {
          bottom: 0;
          left: 80px;

          img {
            width: 60px;
          }

          .icon {
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
    .v7hero-section-text .banner-text .slick-track {
      display: block;
    }
    body .v7hero-section-text .banner-text h2 {
      float: none;
      width: 100%;
      margin: 0;
    }

    /*-- contact-us page style end --*/

    /*-- service page styel start --*/

    .skills-status {
      gap: 20px;

      .skills-item {
        text-align: center;
        p {
          margin-top: 15px;
        }
      }
      .pie_progress {
        width: 60px;
        height: 60px;
      }
    }

    /*-- service page styel end --*/

    .hero-section-index5 .index5-hero-img {
      min-height: 150px;
    }
    .counter-card::before {
      top: -47px;
      left: 0;
    }
    .happy-customers-section {
      .happy-customers-content {
        .happy-customers-slide-img {
          max-width: 160px;
          height: 160px;
          margin: auto;
          margin-top: 60px;

          ul {
            li {
              height: 70px;
              width: 70px;
              padding: 7px;
            }
          }
        }
      }
    }
    .useful-feature-slider-for .slider-item .list .list-item p {
      margin-top: 6px;
    }
    .useful-feature-slider-for .slider-item .list {
      gap: 20px;
    }

    .portfolio-section .portfolio-title .portfolio-subtitle h2,
    .portfolio-section .portfolio-title .portfolio-subtitle h3 {
      font-size: 18px;
      line-height: 30px;

      span {
        font-size: 13px;
        line-height: 30px;
      }
    }

    .case-studies-section .case-studies-left h2 {
      font-size: 24px;
    }

    .v6-body-bg {
      padding-bottom: 360px;
    }

    .customers-quote-card .customers-quote-bg {
      width: 75%;
      left: 12%;
    }

    .happy-customers-section .happy-customers-bg .happy-customers-bg-img {
      height: 2000px;
    }

    .benefits-img-bg {
      padding: 20px;

      .benefits-img-tag {
        font-size: 13px;
        padding: 8px 16px;

        &1 {
          right: 10px;
        }

        &2 {
          right: 10px;
          top: 33%;
        }

        &3 {
          left: 10%;
          bottom: 16px;
        }
      }

      .about-feature-img .overlay-item.success-rate {
        bottom: 10px;
        right: 0px;
      }
    }

    .benefits-faq {
      .benefits-slider-nav {
        padding: 18px 0px;

        .slick-current {
          padding-bottom: 15px;
        }

        .benefits-nav-btn {
          font-size: 16px;
        }

        .benefits-nav-content {
          p {
            font-size: 13px;
            line-height: 24px;
          }
        }
      }
    }

    .v7hero-section-text .banner-text {
      margin-bottom: 16px;
    }

    .v7hero-section-text .banner-text .slick-track {
      gap: 10px;
    }

    .footer-v7-text h2 {
      font-size: 22px;
    }

    .v7-main-footer {
      h5 {
        margin-bottom: 10px;
      }
    }

    /*-- index 8 start --*/
    .we-offering-slider {
      margin-top: -185px;
    }

    .we-offering-slide-img {
      height: 170px;
      width: 180px;
      margin-bottom: 60px;
      margin-left: 15px;
    }

    /*-- index 8 End --*/

    /*-- nft marketplace start --*/
    .creator-profile-section {
      .creator-profile-img {
        min-width: 120px;
        min-height: 120px;
        max-width: 120px;
        max-height: 120px;
        padding: 5px;
      }
    }
    /*-- nft marketplace end --*/

    .blog-details-section {
      margin-top: -50px;
    }

    .blog-comment-section .reply-comment-block {
      padding-left: 40px;
    }

    /*-- newsletter start --*/
    .newsletter-get-demo-section-inner {
      padding: 40px 20px 0px 20px;
    }
    /*-- newsletter End --*/

    /*-- app landing page start --*/
    .app-convert-visitors-nav {
      top: -440px;
    }
    /*-- app landing page end --*/

    .top-artists-list {
      li {
        width: 100%;
      }
      .top-artists-card {
        padding: 15px 16px;
      }
    }
    .nft-people-section {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
      .nft-people {
        margin-bottom: 20px;
        width: 100%;
      }
    }
    .nft-bid-info-section {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 20px;
      .nft-bid-info {
        margin-bottom: 30px;
        width: 100%;
      }
    }

    .nft-banner-left {
      max-width: 340px;
      .item.slick-slide {
        width: 247px;
        height: 300px !important;
      }
    }

    .item-details-tab-section {
      .item-details-tab-btns {
        gap: 20px;
        li {
          font-size: 13px;
        }
      }
    }

    .nft-bottom-footer-right {
      flex-wrap: wrap-reverse;
      ul {
        margin: auto;
      }
      .footer-dropdown {
        margin: auto;
      }
    }

    /*-- crypto wallet index 2 start --*/
    .download-wallet-list ul li {
      width: 50%;
    }

    .safe-platform-ball h4 {
      font-size: 18px;
    }

    .crypto2-benifits-section {
      .section-title.crypto2.text-center {
        text-align: left !important;
      }
    }
    .connect-dapps-img {
      padding-top: 120px;
    }
    /*-- crypto wallet index 2 end --*/

    /*-- crypto token start --*/
    .crypto-token-partners {
      .partners-logo {
        padding: 10px;
      }
    }
    .token-footer-menu-section {
      .footer-column {
        &.footer-column1 {
          padding-right: 16px;
        }
      }
    }
    /*-- crypto token end --*/

    /*-- defi index start --*/
    .ecosystem-section {
      &::after {
        height: 200px;
      }
      &::before {
        bottom: 140px;
      }
    }
    .defi-backed-section {
      margin-top: -88px;
    }
    .defi-metaverse-card {
      padding: 40px 30px;
    }
    .defi-banner-text h1 {
      line-height: 120%;
    }
    .defi-backed-list {
      ul {
        li {
          min-height: 70px;
          max-height: 70px;
          padding: 10px;
          a {
            min-height: 20px;
            max-height: 20px;
            img {
              width: 80px;
            }
          }
        }
      }
    }
    /*-- defi index end --*/
  }

  @media screen and (max-width: 425px) {
    .qr-code-btn {
      .qr-code-box {
        width: 230px;
        height: 115px;
        border-radius: 10px;
      }
    }

    .hero-img .overlay {
      left: 34%;
    }
    .happy-customers-section {
      padding-bottom: 50px;
    }
    .happy-customers-section .happy-customer-left {
      padding-bottom: 25px;
    }

    .happy-customers-section .happy-customers-bg .happy-customers-bg-img {
      height: 2200px;
    }

    .compare-plans-table-section {
      .compare-plans-table {
        ol {
          li {
            button {
              height: 30px;
              font-size: 10px;
            }
          }
        }
      }
    }

    .new-hoogle p {
      font-size: 16px;
    }
    .footer-testimonial-section .footer-testimonial-left ul {
      display: block;
    }
    .footer-testimonial-section .footer-testimonial-left ul li {
      width: 100%;
    }

    .v8banner-section {
      &.chatbot-banner {
        .hero-content-list {
          margin-top: 30px;
          li {
            margin-bottom: -5px;
          }
        }
      }
    }

    .v8banner-section.chatbot-banner {
      .chatbot-banner-text {
        min-height: 600px;
        padding-bottom: 20px;
      }
    }
    .start-free-form {
      flex-direction: column;
      max-height: inherit;
      background: transparent;
      padding: 0px;
      .form-input {
        width: 100%;
        padding: 12px 25px;
        background: ${({ theme }) => theme.colors.whiteColor} !important;
        border-radius: 35px;
      }
      .bg-blue-btn {
        width: 100%;
        padding: 12px 14px;
      }
    }
    .subscribe-form {
      flex-direction: column;
      max-height: inherit;
      background: transparent;
      padding: 0px;
      .form-input {
        width: 100%;
        padding: 12px 25px;
        background: ${({ theme }) => theme.colors.whiteColor}1a;
        border-radius: 35px;
      }
      .bg-blue-btn {
        width: 100%;
        padding: 11px 14px;
      }
    }
    .chatbot-why-choose-us-right {
      padding-top: 80%;
    }
    .chatbot-best-pricing-card {
      padding: 30px 25px;
    }
    .chatbot-footer-bottom-right {
      .chatbot-social-list {
        max-width: 180px;
      }
    }
    .convert-visitors-slider-content {
      .slick-dots {
        max-width: 96%;
        left: 6px;
        top: 40.8%;
      }
    }
    .v8banner-section {
      &.chatbot-banner {
        .hero-content-list {
          .list-item {
            height: 24px;
          }
        }
      }
    }
    .convert-visitors-slider-nav-section {
      .slick-track {
        .nav-item {
          button {
            font-size: 13px;
          }
        }
      }
    }
    .hero-content-button.newslater {
      flex-direction: column;
      .bg-blue-btn {
        width: 100%;
      }
      .bg-white-btn {
        width: 100%;
      }
    }
    .nft-banner-left {
      max-width: 340px;
      max-width: 250px;
      .item.slick-slide {
        width: 180px;
        height: 220px !important;
      }
    }

    .app-landing-hero-section {
      .app-banner-text-effect {
        p {
          b {
            font-size: 13px;
          }
        }
      }
    }
    .app-convert-visitors-nav {
      top: -480px;
    }
    /*-- app landing page end --*/

    /*-- crypto wallet start --*/
    .crypto-hero-img {
      .mobile-img {
        max-width: 70px;
      }
    }
    .crypto2-hero-img .coin2 {
      right: 20%;
    }
    .crypto2-hero-left::before {
      width: 300px;
      height: 300px;
    }
    /*-- crypto wallet end --*/
    /*-- crypto token index start --*/
    .tokenomics-card {
      .overlay {
        padding: 30px;
      }
    }
    .latest-news-title {
      flex-wrap: wrap;
    }
    .crypto-token-partners {
      .partners-logo {
        min-width: 80px;
        min-height: 80px;
      }
    }
    .tokenomics-list {
      ul {
        li {
          height: 70px;
          span {
            font-size: 14px;
          }
          h5 {
            font-size: 15px;
          }
        }
      }
    }

    .crypto-social-list {
      .crypto-social-link {
        .crypto-social-btn {
          max-width: 90px;
          height: 90px;
        }
      }
    }
    .token-subscribe-section {
      padding: 20px 0px;
      input[type="email"] {
        font-size: 20px;
      }
    }
    .token-footer-bottom-text {
      .text {
        font-size: 24px;
      }
    }

    .news-content {
      .news-row {
        h5 {
          font-size: 14px;
          line-height: 22px;
        }
        h3 {
          font-size: 18px;
          line-height: 30px;
        }
      }
    }
    .token-footer-bottom-text {
      .text {
        line-height: 80px;
      }
    }

    .latest-news-section {
      .shape {
        &1 {
          bottom: 360px;
        }
        &2 {
          bottom: 260px;
        }
        &3 {
          bottom: 142px;
        }
        &4 {
          bottom: 21px;
        }
      }
    }

    .banner-video-card {
      height: 250px;
      h2 {
        font-size: 26px;
        .cd-words-wrapper {
          width: 210px !important;
          b {
            width: 210px !important;
          }
        }
      }
    }
    .key-points-card {
      padding: 30px;
    }
    .crypto-token-features-text {
      h4 {
        font-size: 14px;
      }
      h2 {
        font-size: 22px;
      }
    }
    .crypto-token-banner-text {
      h1 {
        font-size: 30px;
      }
    }
    .support-inner-card {
      padding: 20px;
      h5 {
        font-size: 16px;
      }
    }
    .crypto-banner-card {
      h2 {
        font-size: 22px;
      }
      p {
        font-size: 14px;
      }
      &2 {
        h2 {
          font-size: 22px;
        }
        p {
          font-size: 14px;
        }
      }
    }
    .text-with-img {
      font-size: 20px;
    }

    .connect-dapps-img {
      padding-top: 140px;
    }
    .safe-platform-content-section {
      margin-top: 50px;
    }
    /*-- crypto token index end --*/

    /*-- sass landing page start --*/
    .sass-choose-us-section {
      .sidebar__inner {
        width: 320px !important;
      }
    }
    .subscribe-form.sass {
      border: none;
      .form-input {
        border: 1px solid ${({ theme }) => theme.colors.blackColor}26;
        border-radius: 30px;
      }
    }
    /*-- sass landing page end --*/

    /*-- auth style start --*/
    .auth-form-section {
      padding: 20px 25px;
    }
    /*-- auth style end --*/
  }

  @media screen and (max-width: 374px) {
    /*-- home page style start --*/
    .feature-card-text {
      max-width: 100%;
    }
    .usability-slider-nav {
      .slick-track {
        gap: 5px;
      }

      .slider-item {
        width: fit-content !important;
        height: 40px !important;
        padding: 0 10px;

        img {
          display: none;
        }
      }
    }
    .hero-section-4-content .hero-content-text .title {
      line-height: 1.24;
    }
    .marketing-img .success-rate {
      bottom: 71px;
      right: 30px;
    }
    .marketing-img .wave-shape {
      bottom: 121px;
      left: 0px;
    }

    /*-- home page 2 style start --*/
    .business-tools-section .business-tools-text ul li {
      width: 100%;
    }

    /*-- service page styel start --*/
    .about-feature-slider-nav {
      .slider-item {
        .text {
          display: none;
        }
      }
    }

    .contact-content h2,
    .core-feature-title h2,
    .skills-content h2,
    .building-content h2,
    .lets-talk-text h2,
    .section-title .title,
    .team-section .section-title h2,
    .about-feature-section .about-feature-title h2,
    .customer-content-text h2,
    .feature-team-slider-for .slider-item h2,
    .how-works-title h2,
    .usability-card-title h2,
    .faq-section-title h2,
    .pricing-section-title h2,
    .testimonial-title h2,
    .marketing-content-title h2,
    .section-title h2 {
      font-size: 32px !important;
      line-height: 42px;
    }
    .integrate-card h2 {
      font-size: 26px;
      line-height: 40px;
    }
    .useful-feature-slider-nav .slider-item {
      width: 100% !important;
    }
    h1,
    .breadcrumb-sec .breadcrumb-title {
      font-size: 35px;
      line-height: 50px;
    }
    .hero-section-4-content .hero-content-text::before {
      top: -22px;
    }
    .brands-section-title h2 {
      font-size: 16px;
    }
    .business-tools-section .business-tools-text ul li {
      width: 100%;
    }
    .v6-body-bg {
      padding-bottom: 400px;
    }
    .hero-section-4-content .hero-content-text::before {
      left: 36px;
    }
    .customers-quote-card .customers-quote-bg {
      width: 88.5%;
      left: 6%;
    }
    .hero-section-index5
      .index5-hero-content
      .v5banner-text
      .banner-title
      .animation-text {
      width: 100%;
    }
    .hero-section-index5 .index5-hero-content .v5banner-text .banner-title {
      font-size: 35px;
    }

    /*-- index 8 Start --*/
    .index6-card.index8-card {
      .index8-card-text {
        bottom: -100px;
      }

      a {
        margin-top: 0px;
      }

      &:hover {
        .index8-card-text {
          bottom: 0px;
        }
      }
    }

    @keyframes smothShow {
      0% {
        bottom: -132px;
      }

      100% {
        bottom: 0px;
      }
    }

    /*-- index 8 End --*/

    .convert-visitors-slider-nav-section {
      .slick-track {
        .nav-item {
          max-width: 100% !important;
          margin-bottom: 12px;
        }
      }
    }

    /*-- Crypto wallet start --*/
    .crypto-hero-section-text {
      h1 {
        font-size: 33px;
      }
    }
    .crypto2-banner-btn {
      max-width: 180px;
      padding: 12px 20px;
    }

    .safe-platform-content-section {
      margin-top: 70px;
    }
    /*-- Crypto Wallet End --*/

    .defi-footer-section {
      .right.links {
        margin-top: 20px;
      }
    }

    /*-- defi index start --*/
    .ecosystem-text ul li {
      &:nth-child(3) {
        padding: 0px 15px;
      }
      &:nth-child(4) {
        padding: 0px 15px;
      }
    }
    /*-- defi index end --*/
  }

  @media screen and (min-width: 768px) {
    .why-choose-container {
      max-width: 100%;
    }
  }
`;

export default FinanceTestimonialsStyle;
