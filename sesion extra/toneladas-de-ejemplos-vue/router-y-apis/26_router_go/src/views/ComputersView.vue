<template>
    <h1>Recurso mostrado: {{ $route.params.id }}</h1>
    <img :src="require(`@/assets/${imgUri}`)" />
    <button @click="handleGoBack">Anterior</button>
    <router-link :to="{name: 'computers', params: {id: 1}}">Foto 1</router-link>
    <router-link :to="{name: 'computers', params: {id: 2}}">Foto 2</router-link>
    <router-link :to="{name: 'computers', params: {id: 3}}">Foto 3</router-link>
    <button @click="handleGoNext">Siguiente</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router' 
import  router  from '../router'

export default defineComponent({
  name: 'ComputersView',
  setup() {
    const route = useRoute()
    let imgUri = ref(route.params.id + ".png")

    function handleGoBack (){
        router.go(-1)
    }
    function handleGoNext (){
        router.go(1)
    }
    return {handleGoBack, handleGoNext, imgUri, route}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
