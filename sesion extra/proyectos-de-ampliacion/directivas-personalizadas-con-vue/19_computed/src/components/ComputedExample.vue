<template>
    <input type="text" v-model="msg" />
    <h3>Original: {{ msg }}</h3>
    <h3>Invertido: {{ reverse }}</h3>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, computed } from 'vue';

export default defineComponent({
  name: 'ComputedExample',
  setup() {
    let msg:Ref<string> = ref("Ejemplo de computed")
    const reverse = computed(() => msg.value.split('').reverse().join(''))
    return {msg, reverse}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
