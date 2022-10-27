<template>
    <h1>Option API mode 1</h1>
    <div>
        <h3>{{ counter }}  x2 =  {{ times2 }}</h3>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'OptionsOne',
    computed: {
        counter() {
            return this.$store.state.counter
        },
        times2() {
            return this.$store.getters.times2
        }
    },
    methods: {
        increment() {
            this.$store.commit('setCounter', this.counter + 1)
        }
    }
})
</script>