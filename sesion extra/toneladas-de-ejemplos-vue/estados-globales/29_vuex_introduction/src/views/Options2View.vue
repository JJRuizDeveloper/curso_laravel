<template>
 <div class="container">
  <h3>Options API v2</h3>
  <div class="counter-container">
   <h3><span class="success">{{ counter }}</span> x2 = ( <span class="success">{{ times2 }}</span> )</h3>
   <button class="btn" @click="increment">Incrementar</button>
  </div>
 </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import { mapGetters, mapMutations, mapState } from 'vuex';

export default defineComponent({
   name: 'Options2View',
   computed: {
      ...mapState(['counter']),
      ...mapGetters(['times2'])
   }, methods: {
      ...mapMutations(['setCounter']),
      increment () {
         this.setCounter(this.counter + 1)
      }
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