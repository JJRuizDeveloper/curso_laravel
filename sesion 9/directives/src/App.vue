<template>
  <TeacherForm />
</template>

<script>
  import TeacherForm from "./components/TeacherForm.vue"
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'App',
    components: {
      TeacherForm
    }
  })
</script>

<style>

</style>