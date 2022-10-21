<template>
    <button @click="showAlert">{{ title }}</button>
</template>

<script>
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'ButtonAlert',
        props: {
            title: {
                type: String,
                required: false,
                default: 'Click'
            },
            msg: {
                type: String,
                required: true
            }
        },
        setup(props) {
            function showAlert() {
                alert(props.msg)
            }
            return {
                showAlert
            }
        }
    })
</script>