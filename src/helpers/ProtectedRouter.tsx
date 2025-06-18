import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { MoonLoader } from "react-spinners";
import { toast } from "react-hot-toast";

let toastShown = false;

export const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            if (!toastShown) {
                toast.error("Unauthorized. Please log in first.");
                toastShown = true;
            }
            setIsLoading(false);
            return;
        }

        try {
            const decoded = jwtDecode(token);
            const issuedAt = decoded.iat * 1000;
            const now = Date.now();
            const remainingTime = 60 * 60 * 1000 - (now - issuedAt);

            if (remainingTime <= 0) {
                toast.error("Session expired.");
                localStorage.removeItem("token");
                window.location.href = "/";
                return;
            }

            setUser(decoded);
            const timer = setTimeout(() => {
                toast.error("Session expired.");
                localStorage.removeItem("token");
                window.location.href = "/";
            }, remainingTime);

            return () => clearTimeout(timer);
        } catch (error) {
            toast.error("Invalid token.");
            localStorage.removeItem("token");
            window.location.href = "/";
        } finally {
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <MoonLoader color="#0095FF" />;
    if (!user) return <Navigate to="/" replace />;

    return React.cloneElement(children, { user });
};
