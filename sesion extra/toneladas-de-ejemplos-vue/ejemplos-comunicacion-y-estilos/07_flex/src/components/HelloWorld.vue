<template>
  <div class="container">
    <div class="card">
      <h1>Título</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
     <div class="card">
      <h1>Título</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
     <div class="card">
      <h1>Título</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
     <div class="card">
      <h1>Título</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
     <div class="card">
      <h1>Título</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-color:beige;
  width: 95vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
  background-color: brown;
  color: white;
  width: 400px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
