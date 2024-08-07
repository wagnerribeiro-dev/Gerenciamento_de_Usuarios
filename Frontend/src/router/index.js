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
    meta: { title: 'Lista de Usuários' }
  },
  {
    path: '/adicionar',
    name: 'add-user',
    component: UserForm,
    meta: { title: 'Adicionar Usuário' }
  },
  {
    path: '/editar',
    name: 'edit-user',
    component: UserEdit,
    meta: { title: 'Editar Usuário' }
  },
  {
    path: '/deletar/',
    name: 'delete-user',
    component: UserDelete,
    meta: { title: 'Deletar Usuário' }
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



