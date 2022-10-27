<template>
 <div class="container">
  <h3>Pinia</h3>
  <div class="counter-container">
   <h3><span class="success">{{ store.count }}</span> x2 = ( <span class="success">{{ store.times2 }}</span> )</h3>
   <button class="btn" @click="store.increment(1)">Incrementar</button> <button class="btn" @click="store.waitAndIncrement">Espera y añade</button>
  </div>
 </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from './store/counter';

const store = useCounterStore();

</script>

<style lang="scss" scoped>
.container {
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
.counter-container {
   padding: 25px;
   margin: 10px;
   border-radius: 15px;
   border: 1px solid #ccc;
   width: 30%;
}

.btn {
   background-color: #42b983;
   color: white;
   padding: 15px;
   margin: 10px;
   border-radius: 15px;
   border: 1px solid #42b983;
   cursor: pointer;
}

.btn:hover {
   border: 1px solid #42b983;
   background-color: white;
   color: #42b983;
}

.success {
   color: #42b983;
}

</style>