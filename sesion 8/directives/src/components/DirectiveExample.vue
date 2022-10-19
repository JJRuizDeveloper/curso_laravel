<template>
    <ul>
        <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
</template>

<script setup>
    import {ref} from 'vue'
    let countries = ref([
        {
            id: 1,
            name: 'Spain'
        },
        {
            id: 2,
            name: 'France'
        },
        {
            id: 3,
            name: 'UK'
        },
        {
            id: 4,
            name: 'Portugal'
        },
        {
            id: 5,
            name: 'Italy'
        }
    ])
</script>

<style scoped>

</style>