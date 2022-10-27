<template>
  <authenticator>
    <template v-slot="{ user , signOut}">
      <h1>Hola {{ user.username }}</h1>
      <div id="app">
        <h1>Task list</h1>
        <input type="text" v-model="name" placeholder="Introduce task name" /><br />
        <input type="text" v-model="description" placeholder="Introduce a task description" /><br />
        <button @click="handleCreateTodo">Create Task</button>
        <div v-for="item in todos" :key="item.id">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>
  
<script setup>
import { Authenticator } from '@aws-amplify/ui-vue';
import '@aws-amplify/ui-vue/styles.css'
import { API } from 'aws-amplify'
import { createTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
import { onCreateTodo } from './graphql/subscriptions'
import { onMounted, ref } from 'vue';

onMounted(async () => {
  getTodos(),
    subscribe()
})

let name = ref('')
let description = ref('')
let todos = ref([])

const handleCreateTodo = async () => {
  if (!name.value || !description.value) return
  const todo = { name, description }
  todos = [...todos, todo]
  await API.graphql({
    query: createTodo,
    variables: { input: todo }
  })
  name = ''
  description = ''
}

const getTodos = async () => {
  const todosAPI = await API.graphql({
    query: listTodos
  })
  todos = todosAPI.data.listTodos.items;
}

const subscribe = () => {
  API.graphql({ query: onCreateTodo }).subscribe({
    next: (eventData) => {
      let todo = eventData.value.data.onCreateTodo;
      todos = [...todos, todo]
    }
  })
}

</script>