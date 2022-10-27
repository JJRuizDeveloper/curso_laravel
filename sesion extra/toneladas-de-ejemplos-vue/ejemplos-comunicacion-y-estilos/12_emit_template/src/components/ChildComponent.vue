<template>
  <input type="text" v-model="msg"/>
  <button @click="$emit('sayHi', msg)">Notificar al ParentComponent</button> 
</template>

<script lang="ts">
import { defineComponent, ref, Ref} from 'vue';

export default defineComponent({
  name: 'ChildComponent',
  setup(props, {emit}) {
    let msg:Ref<string> = ref("Hi!")
    return {
      msg
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
