<template>
  <ButtonAlert title="Pulsar botón" msg="Hola Mundo!" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonAlert from './components/ButtonAlert.vue'

export default defineComponent({
  name: 'App',
  components: {
    ButtonAlert
  }
});
</script>

<style>
</style>
