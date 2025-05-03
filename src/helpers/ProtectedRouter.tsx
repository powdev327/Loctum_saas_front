import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const ProtectedRoute = ({ role, children }) => {
    const [userRole, setUserRole] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const isLoggedIn = () => {
        const token = localStorage.getItem("token");
        return !!token;
    };


    const decodeToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                return jwtDecode(token);
            } catch (error) {
                console.error("Failed to decode token:", error);
                return null;
            }
        }
        return null;
    };

    useEffect(() => {
        if (isLoggedIn()) {
            const decodedToken = decodeToken();
            if (decodedToken && decodedToken.user_type) {
                setUserRole(decodedToken.user_type);
            } else {
                console.error("No user role found in the token or invalid token.");
                setUserRole(null);
            }
        }
        setIsLoading(false);
    }, []);


    if (isLoading) {
        return null;
    }

    if (!isLoggedIn() || userRole !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};