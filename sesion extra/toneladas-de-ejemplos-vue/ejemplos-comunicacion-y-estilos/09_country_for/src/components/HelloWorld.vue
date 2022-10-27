<template>
  <ul>
    <li v-for="country in countries" v-bind:key="country">{{ country }}</li>
  </ul>
  <hr />
  <ul>
    <li v-for="country in countriesCode" v-bind:key="country.id">{{ country.country }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    let countries: Ref<Array<string>> = ref(["Spain", "France", "UK", "Italy", "Portugal", "Germany"])
    let countriesCode = ref([
      {
        id: 'ES',
        country: 'Spain'
      },
      {
        id: 'FR',
        country: 'France'
      },
      {
        id: 'UK',
        country: 'United Kingdom'
      },
      {
        id: 'IT',
        country: 'Italy'
      },
      {
        id: 'PT',
        country: 'Portugal'
      },
      {
        id: 'GE',
        country: 'Germany'
      }
    ])
    return {countries, countriesCode}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
