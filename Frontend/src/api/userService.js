import axios from 'axios';

// Crie uma instância do axios com a configuração base
const api = axios.create({
  baseURL: 'http://localhost:3333/api', // Certifique-se de que esta URL está correta
  headers: {
    'Content-Type': 'application/json',
  }
});

// Obter todos os usuários
export const getUsers = () => api.get('/users');

// Obter um usuário por ID
export const getUserById = (id) => api.get(`/users/${id}`);

// Criar um novo usuário
export const createUser = (userData) => api.post('/users', userData);

// Atualizar um usuário
export const updateUser = (id, userData) => api.put(`/users/${id}`, userData);

// Deletar um usuário
export const deleteUser = (id) => api.delete(`/users/${id}`);

// Login
export const loginUser = (loginData) => api.post('/login', loginData);


