<template>
    <button @click="showAlert">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonAlert',
  props: {
    title : {
        type: String,
        required: false,
        default: "Púlsame"
    },
    msg : {
        type: String,
        required: true
    }
  },
  setup(props) {
    function showAlert():void {
        alert(props.msg)
    }
    return {showAlert}
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
