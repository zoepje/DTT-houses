import { createRouter, createWebHistory } from 'vue-router';
import About from '../pages/About.vue';
import Houses from '../pages/Houses.vue';

const routes = [
  {
    path: '/',
    name: 'Houses',
    component: Houses,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
