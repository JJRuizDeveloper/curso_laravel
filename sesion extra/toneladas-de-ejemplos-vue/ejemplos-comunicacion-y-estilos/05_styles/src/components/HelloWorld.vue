<template>
  <h1 v-bind:class="{'danger' : hasError}">Ejercicio para vincular una clase CSS</h1>
  <button @click="onClick()">Cambiar color</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      hasError: true
    }
  },
  methods: {
    onClick() {
      this.hasError = !this.hasError
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .danger {
    color: red;
  }
</style>
