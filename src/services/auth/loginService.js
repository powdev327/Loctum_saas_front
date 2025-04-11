import Api from "../../api/AxiosClient.js";

const http = Api();

const login = async (credentials) => {
    const response = await http.post("/login", credentials);
    return response.data;
};
export default login;
