import axios from "axios";

import StorageService from "./StorageService";

import { serverURL } from "../utils/Constants";

export const LOGGED_USER = 'loggedUser';
export const TOKEN = 'token';

export const httpClient = axios.create({
    baseURL: `${serverURL}/api`,
    withCredentials: true,
});

export default class ApiService {

    constructor(endpoint) {
        this.endpoint = endpoint;

        this.storageService = new StorageService();
        const token = this.storageService.getItem(TOKEN);
        this.registerToken(token);
    }

    registerToken(token) {
        if (token) {
            httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
    }

    buildUrl(url) {
        return `${this.endpoint}${url}`;
    }

    get(url) {
        return httpClient.get(this.buildUrl(url));
    }

    post(url, params) {
        return httpClient.post(this.buildUrl(url), params);
    }

    put(url, params) {
        return httpClient.put(this.buildUrl(url), params);
    }

    delete(url) {
        return httpClient.delete(this.buildUrl(url));
    }

}
