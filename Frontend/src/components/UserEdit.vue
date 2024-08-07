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
    saveUser() {
      // Lógica para salvar o usuário
      console.log('Usuário salvo:', this.user);
    },
    cancelEdit() {
      // Lógica para cancelar a edição e voltar à página anterior
      this.$router.push('/');
    }
  },
  mounted() {
    // Simula a obtenção de dados do usuário. Substitua com sua lógica de API.
    const userId = this.$route.params.id;
    if (userId) {
      // Substitua com chamada real à API
      this.user = { id: userId, name: 'Nome do Usuário', email: 'email@dominio.com' };
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

