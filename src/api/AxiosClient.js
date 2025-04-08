import axios from "axios";

/**
 Axios client factory function
 Creates a configured axios instance with base URL and interceptors
*/

const Api = () => {
    const instance = axios.create({
        baseURL: "http://127.0.0.1:8000/api/",
        headers: {
            "Content-Type": "application/json",
        },
    });

    /**
     Request interceptor
     attaches the authorization header with a bearer token if it exists in localStorage
     */

    instance.interceptors.request.use(
        async (axiosConfig) => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    axiosConfig.headers.Authorization = `Bearer ${token}`;
                } else {
                    console.log("No token found in localstorage");
                }
            } catch (error) {
                console.error("Error fetching token from localstorage:", error);
            }
            return axiosConfig;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    /**
     Response interceptor
     passes the response through or handles errors
     */
    instance.interceptors.response.use(
        (response) => response,
        (error) => {
            return Promise.reject(error);
        }
    );

    return instance;
};

export default Api;
