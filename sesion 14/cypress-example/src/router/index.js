import { createRouter , createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'

const routes = [
    {
        path: '/',
        redirect: '/posts'
    },
    {
        path: '/posts',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/post/:id',
        name: 'post',
        component: PostView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router