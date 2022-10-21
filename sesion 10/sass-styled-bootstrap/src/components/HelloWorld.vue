<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="btn btn-warning">Botón en bootstrap</button>
    <ul class="options">
      <li><a>Opción 1</a></li>
      <li><a>Opción 2</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
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
  color: $primaryColor;
}
</style>
