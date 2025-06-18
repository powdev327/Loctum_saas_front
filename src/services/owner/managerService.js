import Api from "../../api/AxiosClient.js";

const http = Api();

const storeManager = async (data) => {
    const res = await http.post('/client/store-manager' , data);
    return res.data;
}

const updateManager = async (manager_id, data) => {
    const res = await http.put(`/client/update-manager/${manager_id}` , data);
    return res.data;
}

const deleteManager = async (manager_id) => {
    const res = await http.delete(`/client/destroy-manager/${manager_id}`);
    return res.data;
}

const getManagers = async () => {
    const res = await http.get('/client/managers');
    
    
    return res.data;
}
export default {storeManager, getManagers, deleteManager, updateManager};