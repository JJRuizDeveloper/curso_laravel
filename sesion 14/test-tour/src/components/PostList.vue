<template>
   <h1>Listado de posts</h1>
   <ul class="post-list">
        <li v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'post', params: {id: post.id}}">{{ post.title }}</router-link>
        </li>
   </ul>
</template>

<script setup>
    import PostService from '../services/PostService'
    import { onMounted } from 'vue'

    const service = new PostService()
    const posts = service.getPosts()

    onMounted( async () => {
        await service.fetchAll()
    })
</script>

<style scoped>
.post-list {
    list-style-type: none;
    padding: 10px;
    width: 100%;
}

.post-list li {
    padding: 10px;
    border: 1px solid #ccc;
}
</style>