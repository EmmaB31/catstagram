import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import FeedPage from '@/views/FeedPage.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/feed',
    name: 'FeedPage',
    component: FeedPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
