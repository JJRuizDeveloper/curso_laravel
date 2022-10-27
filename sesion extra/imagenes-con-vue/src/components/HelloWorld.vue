<template>
  <div>
    <img :src="require(`@/assets/${imageUri}`)" />
    <button @click="spain">Español</button><button @click="france">Francés</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  data() {
    return {
      imageUri: "spain.png"
    }
  },
  methods: {
    spain: function () {
      this.imageUri = "spain.png"
    },
    france: function () {
      this.imageUri = "france.png"
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
