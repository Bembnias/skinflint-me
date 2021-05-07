import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Settings from '../views/Settings.vue'
import SignIn from '../views/auth/SignIn.vue'
import SignUp from '../views/auth/SignUp.vue'
import { projectAuth } from '../firebase/config'

// Auth Guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('Auth guard cur user ', user)
  if (!user) {
    next({ name: 'SignIn' })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: requireAuth
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
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
