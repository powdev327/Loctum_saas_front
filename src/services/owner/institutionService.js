import Api from "../../api/AxiosClient.js";

const http = Api();

const storeInstitution = async (data) => {
  const res = await http.post('/client/store/institutions' , data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return res.data;
}

const getClientInstitution = async () => {
  const res = await http.get('/client/get-client-institution')
  return res.data;
}

export default {storeInstitution, getClientInstitution}