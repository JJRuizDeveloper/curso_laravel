<template>
  <h1>Tiempo transcurrido: {{ time }}</h1>
</template>

<script lang="ts">
import { defineComponent , ref} from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  /* OPTIONS API */

  /*data() {
    return {
      time : 0,
    }
  },
  methods: {
    counter() {
      setInterval(() => {this.time++}, 1000)
    }
  },
  mounted() {
    this.counter()
  }*/

  /* COMPOSITION API */
  setup() {
    let time = ref(0)

    function counter() {
      setInterval(() => {
        time.value++
      }, 1000)
    }

    return {
      time, counter
    }
  },
  mounted() {
    this.counter()
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
