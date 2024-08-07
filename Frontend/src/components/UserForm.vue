<template>
  <div class="user-form">
    <h1>{{ formTitle }}</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="id">ID:</label>
        <input type="number" id="id" v-model="formData.id" required />
      </div>
      
      <div class="form-group">
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      
      <div class="form-actions">
        <button type="submit" class="btn-submit">{{ formTitle }}</button>
        <button type="button" class="btn-cancel" @click="handleCancel">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'; // Certifique-se de importar o axios
import { createUser, updateUser } from '../api/userService';

export default {
  name: 'UserForm',
  computed: {
    formTitle() {
      return this.$route.name === 'add-user' ? 'Adicionar Usuário' : 'Editar Usuário';
    }
  },
  data() {
    return {
      formData: {
        id: '',
        name: '',
        email: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (this.$route.name === 'add-user') {
          // Adicionar usuário
          await createUser(this.formData);
          alert('Usuário adicionado com sucesso!');
        } else if (this.$route.name === 'edit-user') {
          // Atualizar usuário
          await updateUser(this.formData.id, this.formData);
          alert('Usuário atualizado com sucesso!');
        }
        this.$router.push('/');
      } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        alert('Ocorreu um erro ao salvar o usuário.');
      }
    },
    handleCancel() {
      this.$router.push('/');
    }
  },
  async created() {
    if (this.$route.name === 'edit-user') {
      const userId = this.$route.params.id;
      try {
        // Preencher os dados do formulário para edição
        const response = await axios.get(`http://localhost:3333/api/users/${userId}`); // Atualizar a URL para refletir a rota correta
        this.formData = response.data;
      } catch (error) {
        console.error('Erro ao carregar dados do usuário:', error);
        alert('Ocorreu um erro ao carregar os dados do usuário.');
      }
    }
  }
}
</script>

<style>
/* Estilos permanecem os mesmos */
h1 {
  color: #42b983; 
}

@media (max-width: 768px) {
  .user-form {
    margin-top: 20px;
    padding: 10px;
  }

  .form-group input {
    max-width: 100%;
  }

  .form-actions {
    flex-direction: column;
  }

  .btn-submit,
  .btn-cancel {
    width: 100%;
    margin: 5px 0;
  }
}

.user-form {
  text-align: center;
  margin-top: 50px;
}

h1 {
  margin-bottom: 20px;
  color: #35495e;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  margin-top: 20px;
}

.btn-submit {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn-submit:hover {
  background-color: #36a04a;
}

.btn-cancel {
  background-color: #f4f4f9;
  color: #35495e;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
}

.btn-cancel:hover {
  background-color: #e0e0e0;
}
</style>
