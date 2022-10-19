<template>
  <h3>Número de clicks: {{ counter }}</h3>
  <button @click="addCounter">Añadir</button>
</template>

<script setup>
  import { ref } from 'vue'
  let counter = ref(0)
  const addCounter = () => counter.value++
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
