import Api from "../../api/AxiosClient.js";

const http = Api();

const get_applications = async () => {
    const res = await http.get('/applications/');
    return res.data;
}

const approved_application = async (application_id) => {
    const res = await http.put(`/applications/approved/${application_id}`);
    return res.data;
}

const reject_application = async (application_id) => {
    const res = await http.put(`/applications/rejected/${application_id}`);
    return res.data;
}

const apply_contract = async (contract_id) => {
    const res = await http.put(`/contract/apply-contract/${contract_id}`);
    res.data
}

export default {get_applications, approved_application, reject_application, apply_contract};