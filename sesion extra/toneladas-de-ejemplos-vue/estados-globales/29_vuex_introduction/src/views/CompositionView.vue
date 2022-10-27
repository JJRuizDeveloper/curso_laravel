<template>
 <div class="container">
  <h3>Composition API</h3>
  <div class="counter-container">
   <h3><span class="success">{{ counter }}</span> x2 = ( <span class="success">{{ times2 }}</span> )</h3>
   <button class="btn" @click="increment">Incrementar</button>
  </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
   name: 'CompositionView',
   setup() {
      const store = useStore(); // Es lo mismo  decir this.$store.....
      const counter = computed(() => store.state.counter)
      const times2 = computed(() => store.getters.times2 )
      const increment = () => store.commit('setCounter', counter.value +1)
      return {increment, counter, times2}
   }
})
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