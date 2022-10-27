<template>
    <div class="post-container">
        <div class="post-card">
            <h3>{{ post.title }}</h3>
            <div>{{ post.body }}</div>
        </div>
        <router-link class="link" to="/">Back</router-link>
    </div>
</template>

<script>
    import PostService from "@/services/PostService"
    import { defineComponent, onMounted } from "vue"
    import { useRoute } from 'vue-router'

    export default defineComponent({
        name: 'PostView',
        setup() {
            const service = new PostService()
            const post = service.getPost()

            onMounted(async () => {
                const route = useRoute()
                let item = route.params.id
                await service.fetchById(item)
            })

            return { post }
        }  
    })
</script>


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