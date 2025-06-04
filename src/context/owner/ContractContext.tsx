import {createContext, useContext, useEffect, useState} from "react";
import contractService from "../../services/contract/contractService.js";

const ContractContext = createContext();

export const useContract = () => useContext(ContractContext);

export const ContractProvider = ({ children }) => {
    const [contracts, setContracts] = useState([])

    const get_client_contracts = async () => {
      const data = await contractService.get_client_contracts()
        setContracts(data)
    }

    const storeContract = async (data) => {
        await contractService.store_Contract(data);
        await get_client_contracts()
    }

    const delete_client_contract = async (contract_id) => {
        await contractService.delete_client_contract(contract_id)
        await get_client_contracts()
    }
    useEffect(() => {
        get_client_contracts()
    }, []);
    return(
        <ContractContext.Provider value={{storeContract, contracts, delete_client_contract}}>
            {children}
        </ContractContext.Provider>
    )
}
