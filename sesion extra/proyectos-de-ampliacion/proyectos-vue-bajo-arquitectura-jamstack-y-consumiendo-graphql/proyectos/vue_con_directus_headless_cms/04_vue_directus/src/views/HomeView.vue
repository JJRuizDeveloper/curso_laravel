<template>
  <div class="home">
    <h1>Listado de post</h1>
    <ul class="post-list">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{name: 'post', params: {id: post.id}}">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {defineComponent, onMounted} from 'vue'
import PostService from '@/services/PostService'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const service = new PostService()
    const posts = service.getPosts()

    onMounted(async () => await service.fetchAll())

    return {posts}
  }
})
</script>

<style lang="scss" scoped>
  .post-list {
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;

    li {
      padding: 10px;
      width: 100%;
      border: 1px solid #ccc;

      a {
        text-decoration: none;
        color: #666;
      }
    }

    li:hover {
      background-color: #42b983;
      cursor: pointer;
    }
  }
</style>