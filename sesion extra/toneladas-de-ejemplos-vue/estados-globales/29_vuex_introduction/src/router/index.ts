import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'options1',
    component: () => import(/* webpackChunkName: "options1" */ '../views/Options1View.vue')
  },
  {
    path: '/options',
    name: 'options2',
    component: () => import(/* webpackChunkName: "options2" */ '../views/Options2View.vue')
  },
  {
    path: '/composition',
    name: 'composition',
    component: () => import(/* webpackChunkName: "composition" */ '../views/CompositionView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
