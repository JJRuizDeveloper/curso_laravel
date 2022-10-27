<template>
  <SideBar />
  <div :style="{'margin-left' : sidebarWidth}">
    <router-view/>
  </div>
</template>

<script lang="ts">
import SideBar from "./components/SideBar.vue";
import {defineComponent, computed} from 'vue';
import { useStore } from "vuex";
export default defineComponent({
  components: {SideBar},
  setup() {
    const store = useStore();
    const sidebarWidth = computed( () => store.getters.sidebarWidth);
    return {sidebarWidth}
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
