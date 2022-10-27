<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <div>
        <h1>Hello {{ user.username }}</h1>
        <h2>Todo list</h2>
        <input type="text" v-model="name" placeholder="Task name"/>
        <input type="text" v-model="description" placeholder="Task description"/>
        <button @click="createTodo">Create task</button>
        <div v-for="item in todos" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description}}</p>
        </div>
      </div>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>

<script>
  import { API } from 'aws-amplify'
  import { createTodo } from './graphql/mutations'
  import { defineComponent } from 'vue'
  import { listTodos } from './graphql/queries'
  import { onCreateTodo  } from './graphql/subscriptions'
  // eslint-disable-next-line no-unused-vars
  import { Authenticator } from '@aws-amplify/ui-vue'
  import '@aws-amplify/ui-vue/styles.css'

  export default defineComponent({
    name: 'app',
    async created() {
      this.getTodos()
      this.subscribe()
    },
    data() {
      return {
        name: '',
        description: '',
        todos: []
      }
    },
    methods: {
      async createTodo() {
        const { name, description } = this
        if (!name || !description) return
        const todo = { name, description }
        this.todos = [...this.todos, todo]
        await API.graphql({
          query: createTodo,
          variables: { input: todo }
        })
        this.name = ''
        this.description = ''
      },
      async getTodos() {
        const todos = await API.graphql({
          query: listTodos
        })
        this.todos = todos.data.listTodos.items;
      },
      subscribe() {
        API.graphql({query: onCreateTodo}).subscribe({
          next: (eventData) => {
            let todo = eventData.value.data.onCreateTodo;
            if (this.todos.some(item => item.name === todo.name)) return
            this.todos.push(todo)
          }
        })
      }
    }
  })
</script>

<style>

</style>
