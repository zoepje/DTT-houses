import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Houses from '../pages/Houses.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/houses',
    name: 'Houses',
    component: Houses,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
