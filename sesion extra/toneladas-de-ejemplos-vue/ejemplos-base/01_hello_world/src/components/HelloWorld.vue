<template>
  <h1>{{ hello }}</h1>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  /* OPTIONS API */
  /* data() {
    return {
      hello : "Hola mundo desde data"
    }
  }*/
  /* COMPOSITION API */
  setup() {
    let hello:Ref<string> = ref("Hola mundo desde composition")
    return {
      hello
    }
  }
});
</script>