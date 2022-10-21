<template>
    <button @click="showAlert">{{ title }}</button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: {
        type: String,
        required: false,
        default: 'Click'
    },
    msg: {
        type: String,
        required: true
    }
})

function showAlert() {
    alert(props.msg)
}



</script>