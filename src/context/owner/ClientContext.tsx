import React, { createContext, useContext, useEffect, useState } from "react";
import institutionService from '../../services/owner/institutionService.js';
const ClientContext = createContext();

export const useClient = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
    const [client, setClient] = useState(null);
    const [institutions, setInstitutions] = useState([]);

    const getClient = async () => {
        try {
            const data = await institutionService.getClientInstitution();
            setClient(data.client);
            setInstitutions(data.institutions);
        } catch (error) {
            console.error("Error fetching client institution data:", error);
        }
    };

    useEffect(() => {
        getClient();
    }, []);

    return (
        <ClientContext.Provider value={{ client, institutions, refreshClient: getClient }}>
            {children}
        </ClientContext.Provider>
    );
};