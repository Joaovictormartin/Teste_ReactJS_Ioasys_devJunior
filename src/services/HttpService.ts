import axios from "axios";

const BASE_URL = 'https://books.ioasys.com.br/api/v1';

export const HttpService = axios.create({
    baseURL: BASE_URL,
})
