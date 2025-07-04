import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import { Toaster } from "react-hot-toast";
import React from "react";

interface AppLayoutProps {
    user: { user_type: "client" | "locum" };
}

const LayoutContent: React.FC<{ user: AppLayoutProps["user"] }> = ({ user }) => {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    return (
        <div className="min-h-screen xl:flex">
            <div>
                <AppSidebar user={user} />
                <Backdrop />
            </div>
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
                } ${isMobileOpen ? "ml-0" : ""}`}
            >
                <AppHeader user_type={user.user_type} />
                <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const AppLayout: React.FC<AppLayoutProps> = ({ user }) => {
    return (
        <SidebarProvider>
            <Toaster position="top-center" reverseOrder={false} containerStyle={{ zIndex: 9999 }} />
            <LayoutContent user={user} />
        </SidebarProvider>
    );
};

export default AppLayout;