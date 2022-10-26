<template>
    <input type="text" v-model="msg" />
    <button @click="notify">Notify parent</button>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'ChildComponent',
    emits: ['sayHi'],
    setup(props, {emit}) {
        let msg = ref('')
        function notify() {
            emit('sayHi', msg.value)
        }
        return { msg, notify }
    }
})
</script>