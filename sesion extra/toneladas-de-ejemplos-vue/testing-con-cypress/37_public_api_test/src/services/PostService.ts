import { Ref, ref } from 'vue'
import IPost from '@/interfaces/IPost'

class PostService {
    private post: Ref<IPost>
    private posts: Ref<Array<IPost>>

    constructor () {
        this.post = ref<IPost>({})
        this.posts = ref<Array<IPost>>([])
    }

    getPost (): Ref<IPost> {
        return this.post
    }

    getPosts (): Ref<Array<IPost>> {
        return this.posts
    }

    async fetchAll(): Promise<void> {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.posts.value = await json
        } catch (error) {
            console.log(error)
        }
    }

    async fetchById(id: string | Array<string>): Promise<void> {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json
        } catch (error) {
            console.log(error)
        }
    }
 }

export default PostService