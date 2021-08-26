import axios from "axios";
import Storage from "../utilities/Storage";

const BASE_URL = `https://elearning0706.cybersoft.edu.vn/api`;

const api = {
    call() {
        return axios.create({
            baseURL: BASE_URL,
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
            },
        });
    },

    callWithAuth({ headers = {} } = {}) {
        const token = Storage.getToken();
        return axios.create({
            baseURL: BASE_URL,
            headers: {
                accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                ...headers,
            },
        });
    },
};

export { api };
