import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


app.directive('font-size', {
    beforeMount : (el, binding) => {
        let size = 12

        switch(binding.arg) {
            case 'sm':
                size = 8
                break
            case 'lg':
                size = 24
                break
            case 'xxl':
                size = 32
                break
        }

        el.style.fontSize = size + "px"
    }
})



app.mount('#app')
