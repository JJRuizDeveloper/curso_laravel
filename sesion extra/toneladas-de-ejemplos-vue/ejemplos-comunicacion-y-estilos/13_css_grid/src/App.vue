<template>
  <div class="container">
    <div class="header">
      <h3>Título</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="card">
      <h3>Título</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="card">
      <h3>Título</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="card">
      <h3>Título</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div class="card">
      <h3>Título</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
     <div class="footer">
      <h3>Título</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
.container {
  background-color: antiquewhite;
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-rows: 25% 25% 25%;
  height: 90vh;
}

.card {
  background-color: aquamarine;
  border: 3px solid black;
}

.header {
  background-color: brown;
  grid-column: 1/5;
}

.footer {
  background-color: brown;
  grid-column: 1/span 3;
}
</style>
