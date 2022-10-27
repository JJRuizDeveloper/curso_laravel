<template>
    <form>
        <label>Escribe tu nombre</label>
        <input type="text" v-model="username" />
        <h3>Tu nombre es: {{ username }}</h3>
        <button @click="">Saludar</button>
    </form>
</template>

<script setup>
    import {ref} from 'vue'
    let username = ref('---')
</script>

<style scoped>
.red {
    color: red;
}
</style>