<template>
  <input v-model="text" />
  <button @click="addText">Añadir</button>

<transition-group tag="ul" name="list">
  <li v-for="(item, index) in items" :key="index" @click="removeText(index)">
  {{ item }}
  </li>
</transition-group>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    const text = ref("");
    const items = reactive(["Primer elemento", "Segundo elemento"]);
    const addText = () => {
      items.push(text.value);
      text.value = "";
    }
    const removeText = (index:number) => {
      items.splice(index,1);
    }
    return {text, items, addText, removeText}
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
