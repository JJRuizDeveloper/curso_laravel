import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


app.directive('custom-font', {
    beforeMount: (el, binding) => {
        let size = 12

        if(binding.modifiers.sm) {
            size = 8
        } else if (binding.modifiers.lg) {
            size = 24
        } else if (binding.modifiers.xxl) {
            size = 30
        }

        if(binding.modifiers.red) {
            el.style.color = '#ff0000'
        } else if(binding.modifiers.green) {
            el.style.color = '#00ff00'
        } else if(binding.modifiers.blue) {
            el.style.color = '#0000ff'
        }
    }
})




app.mount('#app')
