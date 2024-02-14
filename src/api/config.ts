import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});