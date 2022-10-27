<template>
  <input type="text" v-model="msg"/>
  <button @click="notify">Notificar al ParentComponent</button> 
</template>

<script lang="ts">
import { defineComponent, ref, Ref} from 'vue';

export default defineComponent({
  name: 'ChildComponent',
  emits: ["sayHi"],
  setup(props, {emit}) {
    let msg:Ref<string> = ref("Hi!")
    function notify():void {
      emit("sayHi", msg.value)
    }
    return {
      msg, notify
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
