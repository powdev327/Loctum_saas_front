import { createContext, useContext, useEffect, useState } from "react";
import locumService from '../../services/locum/locumService.js';

const LocumNotificationContext = createContext();

export const useLocumNotification = () => useContext(LocumNotificationContext);

export const LocumNotificationProvider = ({ children }) => {
    const [locumNotification, setLocumNotification] = useState([]);

    const get_locum_notifications = async () => {
        try {
            const data = await locumService.get_locum_notifications();
            setLocumNotification(data);
        } catch (error) {
            console.error("Failed to fetch locum notifications", error);
        }
    };

    const destroy_notifications = async (ids) => {
        try {
            await locumService.destroy_notifications(ids);
            await get_locum_notifications();
        } catch (error) {
            console.error("Failed to delete locum notifications", error);
        }
    };

    useEffect(() => {
        get_locum_notifications();
    }, []);

    return (
        <LocumNotificationContext.Provider
            value={{
                locumNotification,
                refreshNotifications: get_locum_notifications,
                destroy_notifications,
            }}
        >
            {children}
        </LocumNotificationContext.Provider>
    );
};
