// src/services/index.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333', // Certifique-se de que essa é a URL correta
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

export default api;
