import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/UserList.vue';
import UserForm from '../components/UserForm.vue';
import UserEdit from '../components/UserEdit.vue'; // Corrigido o nome do componente
import UserDelete from '../components/UserDelete.vue'; // Corrigido o nome do componente

const routes = [
  {
    path: '/',
    name: 'user-list',
    component: UserList,
    meta: { title: 'Lista de Usuários - Gerenciador de Usuários' }
  },
  {
    path: '/adicionar',
    name: 'add-user',
    component: UserForm,
    meta: { title: 'Adicionar Usuário - Gerenciador de Usuários' }
  },
  {
    path: '/editar',
    name: 'edit-user',
    component: UserEdit,
    meta: { title: 'Editar Usuário - Gerenciador de Usuários' }
  },
  {
    path: '/deletar/',
    name: 'delete-user',
    component: UserDelete,
    meta: { title: 'Deletar Usuário - Gerenciador de Usuários' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Gerenciador de Usuários';
  next();
});

export default router;



