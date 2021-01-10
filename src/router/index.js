import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

// import delay from '@/utils/delay';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Home,
    },
    {
      path: '/products',
      component: () => import('@/views/Products.vue'),
      children: [
        {
          path: ':id?',
          name: 'products',
          component: () => import('@/views/Products/index.vue'),
        },
      ],
    },
  ],
});

router.beforeEach(async (to, from) => {
  console.log(to, from);
  return true;
});

export default router;
