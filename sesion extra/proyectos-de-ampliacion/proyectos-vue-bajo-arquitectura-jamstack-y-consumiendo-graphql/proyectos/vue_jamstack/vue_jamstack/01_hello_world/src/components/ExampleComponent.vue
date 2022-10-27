<template>
    <h1 class="red">{{ counter }}</h1>
    <button @click="addCounter" >Añadir</button>
</template>

<script>
 import {defineComponent} from 'vue'
 export default defineComponent({
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addCounter() {
            this.counter++
        }
    }
 })
</script>

<style scoped>
.red {
    color: red;
}
</style>