<template>
    <ChildScriptSetup @sayHi="showAlert" />
</template>

<script setup>
    import ChildScriptSetup from './ChildScriptSetup.vue';
    const showAlert = (msg) => alert(msg)
</script>