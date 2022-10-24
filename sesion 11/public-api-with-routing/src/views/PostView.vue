<template>
   <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
        <router-link class="link" :to="{name: 'home'}">Volver atrás</router-link>
   </div>
</template>

<script setup>
import { onMounted } from 'vue'
import PostService from '@/services/PostService'
import { useRoute } from 'vue-router'

const service = new PostService()
const post = service.getPost()

onMounted(async () => {
    const route = useRoute()
    const elm = route.params.id
    await service.fetchById(elm)
})
</script>

<style scoped>
    .post-container {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .post-card {
        padding: 25px;
        width: 750px;
        border-radius: 15px;
        border: 1px solid #ccc;
    }
    .link {
        margin-top: 25px;
        color: #2c3e50;
        text-decoration: none;
    }
    .link:hover {
        text-decoration: underline;
    }
</style>