import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.trakt.tv'
});

export default api;