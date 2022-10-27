<template>
  <NavBar />
  <TeacherForm />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeacherForm from './components/TeacherForm.vue';
import NavBar from './components/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: {
    TeacherForm, NavBar
  }
});
</script>

<style lang="scss">
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: $bgColor;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
