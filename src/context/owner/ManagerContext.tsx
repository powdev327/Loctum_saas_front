import React, {createContext, useContext, useEffect, useState} from "react";
import managerService from "../../services/owner/managerService.js";

const ManagerContext = createContext();

export const useManager = () => useContext(ManagerContext);

export const ManagerProvider = ({ children }) => {
    const [managers, setManagers] = useState([]);

    const getManagers = async () => {
      const data = await managerService.getManagers();
      setManagers(data)
    }

    const storeManager = async ( data) => {
        await managerService.storeManager(data);
        await getManagers()
    };

    const updateManager = async (manager_id, data) => {
        await managerService.updateManager(manager_id, data);
        await getManagers()
    }

    const deleteManager = async (manager_id, closeModal) => {
        await managerService.deleteManager(manager_id);
        await getManagers()
        closeModal()
    }

    useEffect(() => {
        getManagers()
    }, []);

    return (
        <ManagerContext.Provider value={{
            storeManager,
            managers,
            refreshManager : getManagers,
            updateManager,
            deleteManager,
        }}>
            {children}
        </ManagerContext.Provider>
    );
}
