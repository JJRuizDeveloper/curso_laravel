<template>
  <div class="hello">
    <CustomBtn>
      Mi primer slot
    </CustomBtn>

  <hr />

    <MultipleBtn>
      <template v-slot:main="{bindedText}">
        <h1>{{ bindedText }}</h1>
      </template>

      <template #sub>
        <small>Texto en slot sub</small>
      </template>
    </MultipleBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomBtn from './CustomBtn.vue';
import MultipleBtn from './MultipleBtn.vue';

export default defineComponent({
  name: 'HelloWorld',
  components: {CustomBtn, MultipleBtn},
  setup() {
    const text = "Hola inyectado desde el componente padre";
    return { text }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
