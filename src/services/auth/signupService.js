import Api from "../../api/AxiosClient.js";

const http = Api();

const signup = async (credentials) => {
    const res = await http.post("/signup", credentials);
    return res.data;
};

const verifyOtp = async (email, otpCode) => {
    const response = await http.post("/verify-otp", { email, otp_code: otpCode });
    return response.data;
};

const resendOtp = async (email) => {
    const response = await http.post("/resend-otp", { email });
    return response.data;
};

export { verifyOtp, resendOtp, signup };
