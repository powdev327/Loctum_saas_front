import {createContext, useContext, useEffect, useState} from "react";
import clientNotificationService from '../../services/owner/clientNotificationService.js'
const ClientNotificationContext = createContext();

export const useClientNotification = () => useContext(ClientNotificationContext);

export const ClientNotificationProvider = ({ children }) => {
    const [clientNotification, setClientNotification] = useState([]);

    const get_client_notifications = async () => {
        const data = await clientNotificationService.get_client_notifications();
        setClientNotification(data);
    };

    const destroy_notifications = async (ids) => {
        try {
            await clientNotificationService.destroy_notifications(ids);
            await get_client_notifications();
        } catch (error) {
            console.error("Failed to delete notifications", error);
        }
    };

    useEffect(() => {
        get_client_notifications();
    }, []);

    return (
        <ClientNotificationContext.Provider
            value={{
                clientNotification,
                refreshNotifications: get_client_notifications,
                destroy_notifications,
            }}
        >

        {children}
        </ClientNotificationContext.Provider>
    );
};
