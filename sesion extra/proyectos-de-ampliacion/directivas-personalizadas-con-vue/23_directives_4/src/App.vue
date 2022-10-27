<template>
  <p v-custom-font.xxl.red>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit vitae quasi necessitatibus eum deserunt, quaerat consectetur pariatur magnam minima eveniet accusamus quidem, distinctio facilis aut! Ipsum, officia nisi! Nulla, dicta?</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
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
