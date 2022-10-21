<template>
    <input type="text" v-model="msg" />
    <button @click="notify">Notify parent</button>
</template>

<script setup>
    import { defineEmits, ref } from 'vue'
    const emit = defineEmits(['sayHi'])
    let msg = ref('')
    const notify = () => emit('sayHi', msg.value)
</script>