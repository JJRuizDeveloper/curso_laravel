<template>
    <h1>Listado de posts</h1>
    <ul class="post-list">
         <li v-for="post in posts" :key="post.id">
             {{ post.title }}
         </li>
    </ul>
 </template>
 
 <script>
    import PostService from '../services/PostService'
    import { defineComponent } from 'vue'

    export default defineComponent({
        data() {
            const service = new PostService()
            const posts = service.getPosts()

            return {
                service, posts
            }
        },
        async mounted() {
            await service.fetchAll()
        }
    })
 </script>