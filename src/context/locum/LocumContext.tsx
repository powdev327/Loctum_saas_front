import {createContext, useContext, useEffect, useState} from "react";
import locumService from '../../services/locum/locumService.js';

const LocumContext = createContext();

export const useLocum = () => useContext(LocumContext)

export const LocumProvider = ({children}) => {
    const [locum, setLocum] = useState(null);
    const [cvs, setCvs] = useState(null);
    const [locum_contracts, setLocumContracts] = useState([]);

    const getLocum = async () => {
      const data = await locumService.getLocum();
      setLocum(data);
      setCvs(data.cvs);
    }

    const updateLocum = async (data) => {
        const response = await locumService.updateLocum(data);
        await getLocum();
        return response;
    };

    const get_locum_contracts = async () => {
        const data = await locumService.get_locum_contracts();
        setLocumContracts(data);
    }

    useEffect(() => {
        getLocum();
        get_locum_contracts();
    }, [])

    return(
        <LocumContext.Provider value={{locum, cvs, refreshLocum: getLocum, updateLocum, locum_contracts}}>
            {children}
        </LocumContext.Provider>
    )
}