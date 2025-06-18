import Api from "../../api/AxiosClient.js";

const http = Api();

const get_client_notifications = async () => {
  const res = await http.get(`/notification/get-notifications/`);
  return res.data;
}

export default {get_client_notifications};