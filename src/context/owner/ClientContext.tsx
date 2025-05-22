import React, { createContext, useContext, useEffect, useState } from "react";
import institutionService from '../../services/owner/institutionService.js';
import clientService from '../../services/owner/clientService.js';
import toast from "react-hot-toast";
const ClientContext = createContext();

export const useClient = () => useContext(ClientContext);

export const ClientProvider = ({ children }) => {
    const [client, setClient] = useState(null);
    const [institutions, setInstitutions] = useState([]);
    const [institutionObj, setInstitution] = useState(null);

    const getClient = async () => {
        try {
            const data = await institutionService.getClientInstitution();
            setClient(data.client);
            setInstitutions(data.institutions);
        } catch (error) {
            console.error("Error fetching client institution data:", error);
        }
    };

    const updateClient = async (client_id, data) => {
        try {
            await clientService.updateClient(client_id, data);
            await getClient();
        } catch (error) {
            console.error("Error updating client:", error);
        }
    };

    const deleteInstitution = async (institution_id, closeModal) => {
        await institutionService.destroyInstitution(institution_id)
        await getClient();
        toast.success("Institution deleted successfully.");
        closeModal();
    }

    const updateInstitution = async (institution_id, data, closeEditModal) => {
        await institutionService.updateInstitution(institution_id, data);
        await getClient();
        const updatedInstitution = await institutionService.getInstitution_by_id(institution_id);
        setInstitution(updatedInstitution.data);
        toast.success("Institution updated successfully.");
        closeEditModal();
    };

    useEffect(() => {
        getClient();
    }, []);

    return (
        <ClientContext.Provider value={{ client, institutions, refreshClient: getClient, updateClient, deleteInstitution, updateInstitution
        }}>
            {children}
        </ClientContext.Provider>
    );
};