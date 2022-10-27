import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: 'posts'
  },
  {
    path: '/',
    redirect: 'posts' 
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "posts" */ '../views/PostsView.vue')
  },
  {
    path: '/posts/:id',
    name: 'post',
    component: () => import(/* webpackChunkName: "post" */ '../views/PostView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
