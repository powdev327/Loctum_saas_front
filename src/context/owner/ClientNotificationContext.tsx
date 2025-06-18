import {createContext, useContext, useEffect, useState} from "react";
import clientNotificationService from '../../services/owner/clientNotificationService.js'
const ClientNotificationContext = createContext();

export const useClientNotification = () => useContext(ClientNotificationContext);

export const ClientNotificationProvider = ({ children }) => {
    const [clientNotification, setClientNotification] = useState([]);

    const get_client_notifications = async () => {
        const data = await clientNotificationService.get_client_notifications()
        setClientNotification(data)
    }

    useEffect(() => {
        get_client_notifications()
    }, []);

    return(
        <ClientNotificationContext.Provider value={clientNotification}>{children}</ClientNotificationContext.Provider>
    )
}