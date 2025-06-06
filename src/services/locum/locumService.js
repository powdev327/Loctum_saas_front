import Api from "../../api/AxiosClient.js";

const http = Api();

const updateLocum = async (data) => {
    const res = await http.put('/locum/update-locum', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        }
    });
    return res.data;
}

const getLocum = async () => {
    const res = await http.get('/locum/get-locum');
    return res.data;
}
export default {updateLocum, getLocum};