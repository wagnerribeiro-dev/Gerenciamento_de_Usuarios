<template>
  <div class="edit-user">
    <h1>Editar Usuário</h1>
    <form @submit.prevent="saveUser">
      <div class="form-group">
        <label for="userId">ID</label>
        <input type="text" id="userId" v-model="user.id" disabled />
      </div>
      <div class="form-group">
        <label for="userName">Nome</label>
        <input type="text" id="userName" v-model="user.name" required />
      </div>
      <div class="form-group">
        <label for="userEmail">Email</label>
        <input type="email" id="userEmail" v-model="user.email" required />
      </div>
      <div class="form-actions">
        <button type="submit">Salvar</button>
        <button type="button" @click="cancelEdit">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { getUserById, updateUser } from '../api/userService';

export default {
  name: 'EditUser',
  data() {
    return {
      user: {
        id: '',
        name: '',
        email: ''
      }
    };
  },
  methods: {
    async saveUser() {
      try {
        await updateUser(this.user.id, this.user);
        alert('Usuário salvo com sucesso!');
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao salvar o usuário:', error);
        alert('Erro ao salvar o usuário.');
      }
    },
    cancelEdit() {
      this.$router.push('/');
    }
  },
  async mounted() {
    const userId = this.$route.params.id;
    try {
      if (userId) {
        const response = await getUserById(userId);
        this.user = response.data;
      }
    } catch (error) {
      console.error('Erro ao carregar dados do usuário:', error);
      alert('Erro ao carregar dados do usuário.');
    }
  }
}
</script>

<style scoped>
.edit-user {
  text-align: center;
  margin-top: 50px;
  color: #42b983;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.form-actions {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #42b983;
  color: white;
  cursor: pointer;
  margin: 0 10px;
}

button:hover {
  background-color: #36a373;
}
</style>

