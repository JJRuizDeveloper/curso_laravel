<template>
    <h1>Composition API</h1>
    <div>
        <h3>{{ counter }}  x2 =  {{ times2 }}</h3>
        <button @click="increment">Increment</button>
    </div>
</template>


<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore() // Es lo mismo que decir this.$store en options API
const counter = computed(() => store.state.counter)
const times2 = computed(() => store.getters.times2)
const increment = () => store.commit('setCounter', counter.value + 1)
</script>