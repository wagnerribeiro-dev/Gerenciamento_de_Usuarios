<template>
  <div class="user-delete">
    <h1>Deletar Usuário</h1>
    <p>Tem certeza de que deseja deletar o usuário com ID: {{ userId }}?</p>
    <button @click="deleteUser">Deletar</button>
    <button @click="cancelDelete">Cancelar</button>
  </div>
</template>

<script>
import axios from 'axios'; // Importe axios para fazer requisições HTTP

export default {
  name: 'UserDelete',
  computed: {
    userId() {
      return this.$route.params.id;
    }
  },
  methods: {
    async deleteUser() {
      try {
        // Requisição DELETE para o backend
        await axios.delete(`http://localhost:3333/users/${this.userId}`);
        alert(`Usuário com ID ${this.userId} deletado com sucesso!`);
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        alert('Ocorreu um erro ao tentar deletar o usuário.');
      }
    },
    cancelDelete() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.user-delete {
  text-align: center;
  margin-top: 50px;
  color: #42b983;
}

button {
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:first-of-type {
  background-color: #e74c3c;
  color: white;
}

button:first-of-type:hover {
  background-color: #c0392b;
}

button:last-of-type {
  background-color: #95a5a6;
  color: white;
}

button:last-of-type:hover {
  background-color: #7f8c8d;
}
</style>


