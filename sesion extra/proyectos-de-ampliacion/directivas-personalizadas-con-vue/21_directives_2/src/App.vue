<template>
 <p v-custom-size="fontSize">Directiva vinculada a un valor</p>
 <button @click="fontSize *= 2">Agrandar fuente</button>
 {{ fontSize }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    let fontSize = ref(16)
    return {fontSize}
  }
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
