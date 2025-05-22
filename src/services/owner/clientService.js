import Api from "../../api/AxiosClient.js";

const http = Api();

const updateClient = async (client_id, data) => {
    const res = await http.put(`/client/update-client/${client_id}` , data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data;
}


export default {updateClient}