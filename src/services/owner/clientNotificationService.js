import Api from "../../api/AxiosClient.js";

const http = Api();

const get_client_notifications = async () => {
  const res = await http.get(`/notification/get-notifications/`);
  console.log('get_client_notifications', res.data);
  return res.data;
}

const destroy_notifications = async (ids) => {
  const res = await http.delete("/notification/destroy-notifications", {
    data: ids,
  });
  return res.data;
};

export default {
  get_client_notifications,
  destroy_notifications,
};
