import Api from "../../api/AxiosClient.js";

const http = Api();

const get_conversations = async () => {
  const res = await http.get('/messaging/get-conversations/');
  return res.data;
}


export default {get_conversations}