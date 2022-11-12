import axios from "axios";

const URL = "http://localhost:3001";

export const axiosPrivate = axios.create({
    baseURL: URL,
})