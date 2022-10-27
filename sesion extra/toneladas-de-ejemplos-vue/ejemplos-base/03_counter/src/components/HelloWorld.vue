<template>
  <div class="hello">
    <h1>{{ time }}</h1>
    <button @click="decrease">Decrementar</button>
    <button @click="increase">Incrementar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    let time = ref(0)

    function decrease ():void {
      time.value--
    }

    function increase ():void {
      time.value++
    }

    return {
      time, decrease, increase
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
