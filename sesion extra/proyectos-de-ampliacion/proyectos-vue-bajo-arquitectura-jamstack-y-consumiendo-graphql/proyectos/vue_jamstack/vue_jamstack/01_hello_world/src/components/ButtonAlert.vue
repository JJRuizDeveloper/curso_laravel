<template>
    <button @click="showAlert">{{ title }}</button>
    <button @click="showParentAlert">{{ title2 }}</button>
</template>



<script setup>
import {defineProps, defineEmits} from 'vue'

const props = defineProps({
    name: {
        type: String,
        required: false,
        default: "Juanjo"
    }
})

const emit = defineEmits(['sayHi'])

    let title = 'Saludar desde el hijo'
    let title2 = 'Saludar desde el padre'
    const showAlert = () => alert(props.name)
    const showParentAlert = () => emit('sayHi', 'Hola emitido desde el hijo y ejecutado por el padre.')
</script>


<style scoped>

</style>