<template>
  <p>Ejericicio de directivas.</p>
 <!-- <p v-font-size>Párrafo modificado con directiva</p> -->
 <p v-custom-size="50">Párrafo modificado con directiva con binding.value</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
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
