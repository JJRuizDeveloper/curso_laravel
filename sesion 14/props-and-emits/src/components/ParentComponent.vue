<template>
    <ChildComponent @sayHi="showAlert" />
</template>

<script>
import { defineComponent } from 'vue'
import ChildComponent from './ChildComponent.vue'

export default defineComponent({
    name: 'ParentComponent',
    components: {ChildComponent},
    setup() {
        function showAlert(msg) {
            alert(msg)
        }
        return { showAlert }
    }
})
</script>