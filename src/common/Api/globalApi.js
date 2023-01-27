import axios from "axios";

export const globalApi = axios.create({
    baseURL: process.env.REACT_APP_JOBTRACKER_URL
})