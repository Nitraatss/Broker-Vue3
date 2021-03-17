import { createRouter, createWebHistory } from 'vue-router';

import PageAdmin from './views/PageAdmin.vue';
import PageClient from './views/PageClient.vue';
import UserProfile from './views/UserProfile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: PageAdmin,
      name: 'Страница администратора',
      meta: {
        title: 'Главная администратора брокерской кампании',
      }
    },
    {
      path: '/client',
      component: PageClient,
      name: 'Страница клиента',
      meta: {
        title: 'Главная клиента брокерской кампании',
      }
    },
    {
      path: '/user/:id',
      component: UserProfile,
      name: 'Страница профиля клиента',
      meta: {
        title: 'Профиль клиента',
      }
    },
  ]
});

export default router;