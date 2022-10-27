<template>
<select @change="handleChange($event)">
    <option value="spain.png">Spain</option>
    <option value="france.png">France</option>
</select>
<img alt="Flag" :src="require(`@/assets/${imageUri}`)" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  setup() {
    let imageUri = ref('spain.png')
    const handleChange = (evt: Event) => {
        imageUri.value = (evt.target as HTMLInputElement).value
    }

    return { imageUri, handleChange }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
