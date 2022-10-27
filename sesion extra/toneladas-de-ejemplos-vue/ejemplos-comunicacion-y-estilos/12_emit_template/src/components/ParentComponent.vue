<template>
  <ChildComponent @sayHi="showAlert" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default defineComponent({
  name: 'ParentComponent',
  components: {
    ChildComponent
  },
  setup() {
    function showAlert(msg:string) {
      alert(msg)
    }
    return {
      showAlert
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
