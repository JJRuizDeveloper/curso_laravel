<template>
  <ClickCounter />
  <hr />
  <MouseCounter />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClickCounter from './components/ClickCounter.vue';
import MouseCounter from './components/MouseCounter.vue';

export default defineComponent({
  name: 'App',
  components: {
    ClickCounter,
    MouseCounter,
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
