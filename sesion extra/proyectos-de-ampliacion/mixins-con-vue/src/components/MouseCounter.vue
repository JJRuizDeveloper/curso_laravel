<template>
<h3>{{ counter }}</h3>
<button @mouseover="addCounter">Add</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from '../../mixins/Counter';

export default defineComponent({
  name: 'MouseCounter',
  mixins: [Counter]
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
