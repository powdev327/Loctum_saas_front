import {createContext, useContext, useEffect, useState} from "react";
import locumService from '../../services/locum/locumService.js';

const LocumContext = createContext();

export const useLocum = () => useContext(LocumContext)

export const LocumProvider = ({children}) => {
    const [locum, setLocum] = useState(null);

    const getLocum = async () => {
      const data = await locumService.getLocum();
      setLocum(data);
    }

    const updateLocum = async (data) => {
        await locumService.updateLocum(data)
        await getLocum();
    }

    useEffect(() => {
        getLocum();
    }, [])

    return(
        <LocumContext.Provider value={{locum, refreshLocum: getLocum, updateLocum}}>
            {children}
        </LocumContext.Provider>
    )
}