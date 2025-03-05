import { createRouter, createWebHistory } from 'vue-router'
import IdopontfoglalasView from '../views/IdopontfoglalasView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'idopontfoglalas',
      component: IdopontfoglalasView,
    },
    {
      path: '/valaszt',
      name: 'valaszt',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ValasztView.vue'),
    }
  ],
})

export default router
