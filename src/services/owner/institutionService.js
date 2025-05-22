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

const getInstitution_by_id = async (institution_id) => {
  const res = await http.get(`/client/institutions/${institution_id}`);
  console.log("dzjdkzod", res.data);
  return res.data;
}


const destroyInstitution = async (institution_id) => {
  const res = await http.delete(`/client/delete-institution/${institution_id}`)
  return res.data;
}

const updateInstitution = async (institution_id, data) => {
  const res = await http.put(`/client/update-institution/${institution_id}` , data, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
  return res.data;
}

export default {storeInstitution, getClientInstitution, getInstitution_by_id, destroyInstitution, updateInstitution}