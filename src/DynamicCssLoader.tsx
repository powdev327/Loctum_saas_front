import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GlobalStyles from "./assets/styles/GlobalStyles";

const dashboardPaths = [
    "/dashboard",
    "/analytics",
    "/marketing",
    "/crm",
    "/stocks",
    "/saas",
    "/profile",
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
];

const DynamicCssLoader = () => {
    const location = useLocation();
    const [isDashboard, setIsDashboard] = useState(
        dashboardPaths.includes(location.pathname)
    );

    useEffect(() => {
        const currentPath = location.pathname;
        const isDashPage = dashboardPaths.includes(currentPath);
        setIsDashboard(isDashPage);

        const head = document.head;
        const existingLink = document.querySelector("#dynamic-style");
        if (existingLink) existingLink.remove();

        const link = document.createElement("link");
        link.id = "dynamic-style";
        link.rel = "stylesheet";
        link.href = isDashPage ? "/src/input.css" : "/css/bootstrap.min.css";
        head.appendChild(link);

        return () => {
            link.remove();
        };
    }, [location.pathname]);

    return <>{!isDashboard && <GlobalStyles />}</>;
};

export default DynamicCssLoader;
