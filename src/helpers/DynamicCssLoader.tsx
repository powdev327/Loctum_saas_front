import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GlobalStyles from "../assets/styles/GlobalStyles";
import {MoonLoader} from "react-spinners";

const dashboardPaths = [
    "/dashboard",
    "/analytics",
    "/marketing",
    "/crm",
    "/stocks",
    "/saas",
    "/profile",
    "/contract",
    "/calendar",
    "/invoice",
    "/faq",
    "/pricing-tables",
    "/blank",
    "/form-elements",
    "/form-layout",
    "/chat",
    "/task-list",
    "/task-kanban",
    "/file-manager",
    "/inbox",
    "/inbox-details",
    "/basic-tables",
    "/data-tables",
    "/alerts",
    "/avatars",
    "/badge",
    "/breadcrumb",
    "/buttons",
    "/buttons-group",
    "/cards",
    "/carousel",
    "/dropdowns",
    "/images",
    "/links",
    "/list",
    "/modals",
    "/notifications",
    "/pagination",
    "/popovers",
    "/progress-bar",
    "/ribbons",
    "/spinners",
    "/tabs",
    "/tooltips",
    "/videos",
    "/line-chart",
    "/bar-chart",
    "/pie-chart",
    "/Locumprofile"
];

const DynamicCssLoader = ({ children }) => {
    const location = useLocation();
    const [isCssLoaded, setIsCssLoaded] = useState(false);
    const [isDashboard, setIsDashboard] = useState(false);

    useEffect(() => {
        const isDashPage = dashboardPaths.includes(location.pathname);
        setIsDashboard(isDashPage);

        const head = document.head;
        const existingLink = document.querySelector("#dynamic-style");
        if (existingLink) existingLink.remove();

        const link = document.createElement("link");
        link.id = "dynamic-style";
        link.rel = "stylesheet";
        link.href = isDashPage ? "/src/input.css" : "/css/bootstrap.min.css";



        link.onload = () => setIsCssLoaded(true);
        head.appendChild(link);

        return () => {
            setIsCssLoaded(false);
            link.remove();
        };
    }, [location.pathname]);

    return isCssLoaded ? (
        <>
            {!isDashboard && <GlobalStyles />}
            {children}
        </>
    ) : (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
        }}>
            <MoonLoader color="#0095FF" />
        </div>
    );
};

export default DynamicCssLoader;