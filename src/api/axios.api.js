import axios from "axios";

export const apiService = axios.create({
    baseURL: 'http://goodoc-production.up.railway.app',
})