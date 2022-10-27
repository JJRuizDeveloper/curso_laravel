<template>
<div class="container">
  <form class="form-task" @submit.prevent="createTask">
    <input type="text" class="input" placeholder="Añadir Tarea" v-model="taskName" />
    <input type="submit" class="btn" />
  </form>

<div class="form-task" v-if="todoStore.loading">
 <p>Cargando...</p>
</div>

<div class="form-task" v-if="!todoStore.tasks.length && !todoStore.loading">
 <p>No hay tareas.</p>
</div>

<div class="form-task" v-else-if="todoStore.tasks.length && !todoStore.loading">
  <ul>
    <li v-for="task in todoStore.tasks" :key="task.id" :class="{'done': task.done}">
      <input type="checkbox" :checked="task.done" @click.prevent="updateTask(task.id)" /> {{ task.name }} 
      <button @click.prevent="deleteTask(task.id)">Eliminar</button>
    </li>
  </ul>
</div>

</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodoStore } from './store/todo';


export default defineComponent({
  name: 'App',
  setup() {
    const taskName = ref()
    const todoStore = useTodoStore()

    function createTask(): void {
      todoStore.addTask(taskName.value);
    }

    function updateTask(id:string): void {
      todoStore.updateTask(id);
    }

    function deleteTask(id:string): void {
      todoStore.deleteTask(id);
    }

    return {todoStore, taskName, createTask, updateTask, deleteTask}
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.done {
  text-decoration: line-through;
}

.form-task {
  width: 30%;
  padding: 25px;
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    list-style-type: none;
    width: 100%;

    li {
      width: 90%;
      padding: 10px;
      border-bottom: 1px solid #ccc;

      button {
        background-color: lightcoral;
        outline: none;
        padding: 10px;
        border: 0;
        border-radius: 5px;
        color: white;
        cursor: pointer;
      }
    }
  }
}


.input {
  padding: 5px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 90%;
}

.btn {
  padding: 5px;
  outline: none;
  border: 1px solid rgb(64, 105, 64);
  background-color: rgb(64, 105, 64);
  border-radius: 5px;
  color: white;
  margin-top: 5px;
  cursor: pointer;
  width: 92%;
}

.btn:hover {
   background-color: white;
   color: rgb(64, 105, 64);
}
</style>
