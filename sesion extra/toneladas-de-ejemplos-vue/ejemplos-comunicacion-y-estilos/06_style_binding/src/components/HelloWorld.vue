<template>
  <h1 v-bind:style="{backgroundColor : '#ccc', color: '#fff'}">Ejemplo de binding a propiedades</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
