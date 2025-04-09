import Api from "../../api/AxiosClient.js";

const http = Api()

export const requestReset = async (email) => {
    try {
        const res = await http.post("/request-password-reset", {email});
        return res.data
    }catch (e) {
        console.error('Sending request of Reset password isnt working',e);
        throw e;
    }
}

export const requestResetPassword = async (token, newPassword) => {
    try {
        const res = await http.post("/reset-password", {token, new_password :newPassword});
        return res.data
    }catch (e) {
        console.error('Reset password isnt working',e);
        throw e;
    }
}