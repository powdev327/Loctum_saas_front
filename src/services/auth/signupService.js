import Api from "../../api/AxiosClient.js";

const http = Api();

const signup = async (credentials) => {
    try {
        const res = await http.post("/signup", credentials);
        return res.data
    }catch (e) {
        console.error(e)
        throw e;
    }
}

const verifyOtp = async (email, otpCode) => {
    try {
        const response = await http.post("/verify-otp", { email, otp_code: otpCode });
        return response.data;
    } catch (error) {
        console.error("Error verifying OTP:", error);
        throw error;
    }
};

const resendOtp = async (email) => {
    try {
        const response = await http.post("/resend-otp", { email });
        return response.data;
    } catch (error) {
        console.error("Error resending OTP:", error);
        throw error;
    }
};

export { verifyOtp, resendOtp , signup};
