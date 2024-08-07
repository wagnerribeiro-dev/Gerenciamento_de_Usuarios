<template>
  <div class="user-list">
    <h1>Lista de Usuários</h1>
    <ul class="user-list__items">
      <li v-for="user in users" :key="user.id" class="user-list__item">
        <span class="user-list__name">{{ user.name }}</span>
        <router-link :to="{ name: 'edit-user', params: { id: user.id } }" class="user-list__edit-link">Editar</router-link>
      </li>
    </ul>
    <div class="user-list__actions">
      <router-link to="/add" class="user-list__add-button">Adicionar Novo Usuário</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'UserList',
  data() {
    return {
      users: []  // Inicializa como um array vazio
    };
  },
  async created() {
    try {
      // Substitua a URL pelo endpoint correto do seu backend
      const response = await axios.get('http://localhost:5000/api/users');
      this.users = response.data;
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  }
}
</script>

<style>
/* Mantenha os estilos existentes */
h1 {
  color: #42b983; /* Cor desejada */
}

.user-list {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
}

.user-list h1 {
  margin-bottom: 20px;
  color: #333;
}

.user-list__items {
  list-style: none;
  padding: 0;
}

.user-list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-list__name {
  font-size: 16px;
  color: #333;
}

.user-list__edit-link {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  transition: color 0.3s ease;
}

.user-list__edit-link:hover {
  color: #2c7d57;
}

.user-list__actions {
  margin-top: 20px;
}

.user-list__add-button {
  text-decoration: none;
  background-color: #42b983;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.user-list__add-button:hover {
  background-color: #2c7d57;
}
</style>

