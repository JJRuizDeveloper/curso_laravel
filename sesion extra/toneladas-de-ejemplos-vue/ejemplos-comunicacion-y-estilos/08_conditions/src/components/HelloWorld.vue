<template>
  <h1 v-if="show">Show es cierto (v-if)</h1>
  <h1 v-show="show">Show es cierto (v-show)</h1>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    let show:Ref<boolean> = ref(false)
    return {
      show
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
