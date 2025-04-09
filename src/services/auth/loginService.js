import Api from "../../api/AxiosClient.js";

const http = Api();

const login = async (credentials) => {
    try {
        const response = await http.post("/login", credentials);
        return response.data;
    } catch (e) {
        console.error("Login error:", e);
        throw e;
    }
};
export default login;
