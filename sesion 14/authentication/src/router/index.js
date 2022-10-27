import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import FirebaseView from '../views/FirebaseView.vue'
import CompleteView from '../views/CompleteView.vue'
import { useAuthenticationStore } from '@/store/authentication'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      authenticated: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FirebaseView
  },
  {
    path: '/complete',
    name: 'complete',
    component: CompleteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
  const store = useAuthenticationStore()
  const authorization = to.matched.some( record => record.meta.authenticated)

  console.log("authorization " + authorization + " authenticated " + store.isAuthenticated)
  if(authorization && !store.isAuthenticated) {
    next('complete')
  } else {
    next()
  }
})

export default router
