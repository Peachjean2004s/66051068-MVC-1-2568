import { createRouter, createWebHistory } from 'vue-router';
import JobsOpen from './view/JobsOpen.vue';
import LoginView from './view/LoginView.vue';
import ApplyView from './view/ApplyView.vue';
import AdminView from './view/AdminView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'jobs',
      component: JobsOpen
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/apply/:jobId',
      name: 'apply',
      component: ApplyView,
      props: true,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { requiresAuth: true, requiresAdmin: true }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  if (to.meta.requiresAuth && !user) {
    next('/login');
  } else if (to.meta.requiresAdmin && (!user || !user.isAdmin)) {
    next('/');
  } else if (to.path === '/login' && user) {
    next('/');
  } else {
    next();
  }
});

export default router;