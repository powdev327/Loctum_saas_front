import {createContext, useContext, useEffect, useState} from "react";
import applicationService from "../../services/contract/applicationService.js";

const ApplicationContext = createContext();

export const useApplication = () => useContext(ApplicationContext);

export const ApplicationProvider = ({ children }) => {
    const [applications, setApplications] = useState([])

    const get_applications = async () => {
        const data = await applicationService.get_applications()
        setApplications(data)
    }

    const approved_applications = async (application_id) => {
        await applicationService.approved_application(application_id)
        await get_applications()
    }

    const reject_application = async (application_id) => {
        await applicationService.reject_application(application_id)
        await get_applications()
    }

    const apply_contracts = async (application_id) => {
        await applicationService.apply_contract(application_id)
        await get_applications()
    }

    useEffect(() => {
        get_applications()
    }, []);

    return <ApplicationContext.Provider value={{approved_applications, applications, reject_application}}>{children}</ApplicationContext.Provider>;
}