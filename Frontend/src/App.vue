<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Lista de Usuários</router-link>
        <router-link to="/adicionar">Adicionar Usuário</router-link>
        <router-link to="/editar">Editar Usuário</router-link>
        <router-link to="/deletar">Deletar Usuário</router-link>
      </nav>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2024 WGR Systems. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    pageTitle() {
      return this.$route.meta.title;
    }
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #35495e;
  padding: 20px;
  color: white;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

nav a {
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  background-color: #42b983;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #2c7d57;
}

nav a.router-link-exact-active {
  background-color: #2c7d57;
}

.header-title {
  font-size: 24px; 
  margin: 0;
  padding: 10px 0;
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

footer {
  background-color: #35495e;
  color: white;
  text-align: center;
  padding: 10px;
  position: relative;
  bottom: 0;
  width: 100%;
}

footer p {
  margin: 0;
}
</style>

