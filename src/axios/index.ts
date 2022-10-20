import axios, {AxiosRequestConfig} from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://newsapi.org/v2/',
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    headers: {
        Accept: "application/json, text/plain, */*"
    },
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const currentConfig: AxiosRequestConfig = config;

    currentConfig.params = config.params || {};

    return currentConfig;
});

export default axiosInstance;
