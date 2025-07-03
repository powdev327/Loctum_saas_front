import React, { createContext, useContext, useEffect, useState } from "react";
import locumService from "../services/locum/locumService.js";
import clientService from "../services/owner/clientService.js";
import institutionService from "../services/owner/institutionService.js";

import toast from "react-hot-toast";
import applicationService from "../services/contract/applicationService";

interface User {
    user_type: "locum" | "client";
    id?: string;
    cv_summary?: { education: string[]; experience: string[]; skills: string[] };
    cvs?: any[];
    client?: any;
    institutions?: any[];
}

interface AuthContextType {
    user: User | null;
    updateUser: (data: FormData) => Promise<any>;
    applyContract: (contractId: string) => Promise<any>;
    refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }) {
    const [user, setUser] = useState<User | null>(null);

    const userType = localStorage.getItem("user_type");

    const refreshUser = async () => {
        try {
            if (userType === "locum") {
                const data = await locumService.getLocum();
                setUser({
                    user_type: "locum",
                    id: data.locum_id,
                    cv_summary: data.cv_summary || { education: [], experience: [], skills: [] },
                    cvs: data.cvs,
                });
            } else if (userType === "client") {
                const data = await institutionService.getClientInstitution();
                setUser({
                    user_type: "client",
                    id: data.client.client_id,
                    client: data.client,
                    institutions: data.institutions,
                });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const updateUser = async (data: FormData) => {
        try {
            let response;
            if (userType === "locum") {
                response = await locumService.updateLocum(data);
            } else if (userType === "client") {
                response = await clientService.updateClient(user?.id, data);
            }
            await refreshUser();
            return response;
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    };

    const applyContract = async (contractId: string) => {
        try {
            if (userType !== "locum") {
                throw new Error("Only locum users can apply for contracts");
            }
            const response = await applicationService.apply_contract(contractId);
            toast.success("Successfully applied for contract!");
            return response;
        } catch (error) {
            console.error("Error applying for contract:", error);
            throw error;
        }
    };

    useEffect(() => {
        refreshUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, updateUser, applyContract, refreshUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}