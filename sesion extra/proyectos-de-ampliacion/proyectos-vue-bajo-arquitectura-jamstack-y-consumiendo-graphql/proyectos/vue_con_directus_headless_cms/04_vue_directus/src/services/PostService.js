import { ref } from 'vue'

class PostService {

    constructor() {
        this.post = ref({})
        this.posts = ref([])
    }

    getPost() {
        return this.post
    }

    getPosts() {
        return this.posts
    }

    async fetchAll() {
        try {
            const url = 'http://127.0.0.1:8055/items/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json.data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchById(id) {
        try {
            const url = `http://127.0.0.1:8055/items/posts/${id}`
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json.data
        } catch(error) {
            console.log(error)
        }
    }
}

export default PostService