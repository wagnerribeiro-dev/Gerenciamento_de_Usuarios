// src/api/index.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // URL base para todas as chamadas API
});

export default api;
