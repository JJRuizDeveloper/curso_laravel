import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('custom-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = binding.value + "px"
    },
    updated: (el,binding) => {
        el.style.fontSize = binding.value + "px"
    }
})

app.mount('#app')
