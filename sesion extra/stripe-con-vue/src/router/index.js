import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '../views/SuccessView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      logged: true
    }
  },
  {
    path: '/success',
    name: 'success',
    component: SuccessView
  },
  {
    path: '/error',
    name: 'error',
    component: ErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


/*router.beforeEach( (to, from, next) => {
  const user = getAuth().currentUser
  const authorization = to.matched.some(record => record.meta.logged)

  if(authorization && !user) {
    next('login')
  } else if(!authorization && user) {
    next('home')
  } else {
    next()
  }
})*/




export default router
