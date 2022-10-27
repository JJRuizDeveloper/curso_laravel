<template>
  <label>Escribe tu nombre: </label>
  <input type="text" v-model="username" />
  <p>Hola, {{ username }}</p>
  <hr />
  <select v-model="country">
    <option>Spain</option>
    <option>France</option>
    <option>UK</option>
  </select>
  <p>País seleccionado: {{ country }}</p>
  <hr />
  <input type="checkbox" v-model="agree" /> Acepto los términos y condiciones
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

export default defineComponent({
  name: 'ExampleForm',
  setup() {
    let username: Ref<string> = ref("---");
    let country: Ref<string> = ref("Spain");
    let agree: Ref<boolean> = ref(true)
    return {username, country, agree}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
