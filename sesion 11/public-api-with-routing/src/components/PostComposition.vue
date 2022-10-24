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
     import { defineComponent, onMounted } from 'vue'

     export default defineComponent({
        setup() {
            const service = new PostService()
            const posts = service.getPosts()
 
            onMounted( async () => {
                await service.fetchAll()
            })

            return {
                posts
            }
        }
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