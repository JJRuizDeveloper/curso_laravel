<template>
    <h1>Formulario</h1>
    <form>
        <label>Introduce tu nombre</label><br />
        <input type="text" v-model="userData.nickname" /><br />
        <label>Intruduce tu email</label><br />
        <input type="email" v-model="userData.email" /><br />
        <label>Comentario:</label><br />
        <input type="text" v-model="userData.comment" /><br />
        <input type="submit" value="Enviar" @click.prevent="sayHi" />
    </form>
</template>

<script setup>
    import { ref } from 'vue'

    let userData = ref({
        nickname: '',
        email: '',
        comment: ''
    })

    const sayHi = () => {
        alert("Hola " + userData.value.nickname)
    }
</script>

<style scoped>

</style>