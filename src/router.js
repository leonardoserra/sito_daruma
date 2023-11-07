import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import NotFound from './views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ]
})

export default router