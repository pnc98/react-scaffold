import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const RequestSuccess = (config: AxiosRequestConfig) => {};
const RequestFailed = (error: any) => {};
const ResponseSuccess = (response: AxiosResponse) => {};
const ResponseFailed = (error: any) => {};

const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE,
  timeout: 3000
});

instance.defaults.headers.get.Accepts = "application/json";
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
instance.interceptors.request.use(RequestSuccess, RequestFailed);
instance.interceptors.response.use(ResponseSuccess, ResponseFailed);

export default instance;