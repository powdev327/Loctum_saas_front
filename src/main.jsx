import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider as TemplateProvider } from "styled-components";
import App from "./App.jsx";

//  styles import here
import TemplateStyles from "./assets/styles/TemplateStyles.js";

//venobox css
import "venobox/dist/venobox.min.css";

//slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//global styles
import GlobalStyles from "./assets/styles/GlobalStyles";

//custom css
import "./assets/styles/common-style.css";
import "./assets/styles/buttons-style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TemplateProvider theme={TemplateStyles}>
      <GlobalStyles />
      <App />
    </TemplateProvider>
  </React.StrictMode>
);
