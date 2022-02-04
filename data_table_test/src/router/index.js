import { createRouter, createWebHistory } from 'vue-router';
import MainTable from '@/views/MainTable';
import IdCard from '@/views/IdCard';
import PageNotFound from '@/views/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'MainTable',
    component: MainTable,
  },
  { 
    path: '/:id',
    name: 'IdCard',
    component: IdCard,
  },
  {
    path: '/error404',
    component: PageNotFound,
    meta: { title: 'Not found' }
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: PageNotFound,
    meta: {
      requiresAuth: false
    }
}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
