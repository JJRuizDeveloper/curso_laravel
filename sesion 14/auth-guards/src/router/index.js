import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { getAuth } from 'firebase/auth' // Esta importación solo si estamos usando firebase como método de auth

const routes = [
  {
    path: 'nosotros',
    redirect: 'about'
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      isLogged : true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
  to -> La ruta a la que quiere ir el usuario
  from -> La ruta desde la que viene
  next -> La ruta a la que va a ir
*/
router.beforeEach((to, from, next) => {
    // 1. Comprobar si el usuario está autenticado
    const user = true // Dummy content. En lugar de true, realizaríamos la comprobación necesaria en Pinia, o la fuente correspondiente.
    // const user = getAuth().currentUser // Este es el formato de comprobar si el usuario está autenticado con firebase.

    // 2. Comprobamos si la ruta a la que quiere ir necesita de autenticación previa
    const authorization = to.matched.some( record => record.meta.isLogged)

    // 3. Dirijo al usuario a la ruta correspondiente en función de si tiene permisos para acceder o no
    if(authorization && !user) {
      next('login')
    } else if(!authorization && user) {
      next('home')
    } else {
      next()
    }
})


export default router