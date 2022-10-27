<template>
    <h1>Counter with Pinia</h1>
    <div>
        <h3>{{ store.count }} x2 = {{ store.times2 }}</h3>
        <button @click="store.increment(1)">Increment</button>
        <button @click="store.waitAndIncrement">Wait and increment</button>
    </div>
</template>

<script setup>
    import { useCounterStore } from '@/store/counter'
    const store = useCounterStore()
</script>