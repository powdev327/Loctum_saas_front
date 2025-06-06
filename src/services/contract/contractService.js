import Api from "../../api/AxiosClient.js";

const http = Api();

const store_Contract = async (data) => {
  const res = await http.post('/contract/create-contract' , data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });

  return res.data;
}

const get_client_contracts = async () => {
    const res = await http.get('/contract/get-client-contracts')
    return res.data;
}

const delete_client_contract = async (contract_id) => {
    const res = await http.delete(`/contract/delete-contract/${contract_id}`)
    return res.data;
}
export default {store_Contract, get_client_contracts, delete_client_contract}