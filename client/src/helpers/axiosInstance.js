import axios from 'axios';
import router from "@/router";

const axiosInstance = axios.create({
  baseURL: import.meta.env.AXIOS_BASE_URL_DEV,     //👈server endpoint,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

const errorHandler = err =>{
  console.log(err.response.status);
  return Promise.reject(err)
}

axiosInstance.interceptors.response.use(res => res, errorHandler)
export default axiosInstance

