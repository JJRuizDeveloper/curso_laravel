<template>
    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
        <router-link to="/posts" class="link">Volver atrás</router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import PostService from '../services/PostService';

export default defineComponent({
  name: 'PostView',
  setup() {
  
   const service = new PostService()
   const post = service.getPost()

    onMounted(async () => {
        const route = useRoute()
        let elm = route.params.id
       await service.fetchById(elm)
    })

    return {post}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
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
    color: #42b983;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>
