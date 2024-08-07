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
        id: '', // Adiciona o campo ID
        name: '',
        email: '' // Adiciona o campo email
      }
    };
  },
  methods: {
    handleSubmit() {
      // Lógica para submeter o formulário
      alert('Formulário enviado!');
    },
    handleCancel() {
      // Lógica para cancelar a operação e redirecionar ou limpar o formulário
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
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


