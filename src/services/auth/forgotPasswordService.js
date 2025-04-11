import Api from "../../api/AxiosClient.js";

const http = Api()

export const requestReset = async (email) => {
    const res = await http.post("/request-password-reset", {email});
    return res.data
}

export const requestResetPassword = async (token, newPassword) => {
    const res = await http.post("/reset-password", {token, new_password :newPassword});
    return res.data
}