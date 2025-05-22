import { Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { MoonLoader } from "react-spinners";
import { toast } from "react-hot-toast";

let toastShown = false;

export const ProtectedRoute = ({ role, children }) => {
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            if (!toastShown) {
                toast.error("Unauthorized You must log in first.");
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
                toast.error("Session expired. Please log in again.");
                localStorage.removeItem("token");
                window.location.href = "/";
                return;
            }

            if (decoded.user_type !== role) {
                toast.error("Unauthorized: Incorrect role.");
                setIsLoading(false);
                return;
            }

            setIsValid(true);

            const timer = setTimeout(() => {
                toast.error("Session expired. Please log in again.");
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
    }, [role]);

    if (isLoading) return <MoonLoader color="#0095FF" />;

    if (!isValid) return <Navigate to="/" replace />;

    return children;
};
