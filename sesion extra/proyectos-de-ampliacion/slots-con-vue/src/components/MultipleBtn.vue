<template>
    <button>
        <slot name="main" v-bind:bindedText="bindedText">Slot 1</slot>
        <slot name="sub">Slot 2</slot>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MultipleBtn',
  setup() {
    const bindedText = "Hola desde el componente hijo";
    return {bindedText}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
