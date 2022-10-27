<template>
  <input type="text" v-model="name1" />
  <ButtonAlert :name="name1" @sayHi="showAlert" />
  <hr />
  <input type="text" v-model="name2" />
  <ButtonAlert :name="name2" @sayHi="showAlert" />
  <hr />
  <input type="text" v-model="name3" />
  <ButtonAlert :name="name3" @sayHi="showAlert" />
</template>

<script setup>
import ButtonAlert from "./components/ButtonAlert.vue";
import {ref} from 'vue';

let name1 = ref('')
let name2 = ref('')
let name3 = ref('')

const showAlert = (msg) => alert(msg)
</script>

<style>

</style>
