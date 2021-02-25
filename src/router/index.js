import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Wallets from '../views/Wallets.vue'
import History from '../views/History.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wallets',
    name: 'Wallets',
    component: Wallets
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
