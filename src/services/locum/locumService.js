import Api from "../../api/AxiosClient.js";

const http = Api();

const updateLocum = async (data) => {
    const formData = new FormData();

    for (const key in data) {
        if (key === "cv_summary" && typeof data[key] === "object") {
            formData.append(key, JSON.stringify(data[key]));
        } else if (data[key] instanceof File) {
            formData.append(key, data[key]);
        } else if (data[key] !== undefined && data[key] !== null) {
            formData.append(key, data[key]);
        }
    }

    const res = await http.put('/locum/update-locum', formData, {
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

const get_locum_notifications = async () => {
    const res = await http.get('/locum/get-notifications/');
    return res.data;
}

const get_locum_contracts = async () => {
    const res = await http.get('/locum/get-contracts/');
    return res.data;
}
export default {updateLocum, getLocum, get_locum_notifications, get_locum_contracts};