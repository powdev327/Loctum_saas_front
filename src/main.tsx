import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as TemplateProvider } from "styled-components";
import App from "./App";
import TemplateStyles from "./assets/styles/TemplateStyles";
import "venobox/dist/venobox.min.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import "./assets/styles/common-style.css";
import "./assets/styles/buttons-style.css";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import { AppWrapper } from "./Components/common/PageMeta";
import DynamicCssLoader from "./DynamicCssLoader";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
        <TemplateProvider theme={TemplateStyles}>
            <DynamicCssLoader>
            <ThemeProvider>
                <AppWrapper>
                    <App />
                </AppWrapper>
            </ThemeProvider>
            </DynamicCssLoader>
        </TemplateProvider>
    </BrowserRouter>
);