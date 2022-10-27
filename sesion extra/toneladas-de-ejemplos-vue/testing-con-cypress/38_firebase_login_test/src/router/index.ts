import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getAuth} from 'firebase/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: 'login'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      logged : true
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/*webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach( (to, from, next) => {
    const user = getAuth().currentUser // Miramos si el usuario está autenticado
    const authorization = to.matched.some( record => record.meta.logged) // Buscamos en la matriz si la ruta requiere de autenticación

    if(authorization && !user) {
      next('login')
    } else if (!authorization && user) {
      next('home')
    } else {
      next()
    }
})

export default router
