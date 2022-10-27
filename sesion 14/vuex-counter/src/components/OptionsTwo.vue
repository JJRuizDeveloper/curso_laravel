<template>
    <h1>Option API mode 2</h1>
    <div>
        <h3>{{ counter }}  x2 =  {{ times2 }}</h3>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import { mapGetters, mapMutations, mapState } from 'vuex';

export default defineComponent({
    name: 'OptionsTwo',
    computed: {
        ...mapState(['counter']),
        ...mapGetters(['times2'])
    },
    methods: {
        ...mapMutations(['setCounter']),
        increment() {
            this.setCounter(this.counter + 1)
        }
    }
})
</script>