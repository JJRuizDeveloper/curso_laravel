<template>
<div class="navbar">
    <h1>Gestor de Profesores</h1>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavBar',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
    background-color: $navbarColor;
    margin: 0;
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $bgColor;
    margin-bottom: 15px;
}
</style>
