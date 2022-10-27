import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { initializeApp } from "firebase/app"
import { createPinia } from 'pinia'


const firebaseConfig = {
  apiKey: "AIzaSyAlS4eL19970s5CSvH850PtOm38FpPQQB8",
  authDomain: "laravelvue-febdd.firebaseapp.com",
  projectId: "laravelvue-febdd",
  storageBucket: "laravelvue-febdd.appspot.com",
  messagingSenderId: "1072320305858",
  appId: "1:1072320305858:web:4ddd9e97d2cb20a3e0795b"
};


initializeApp(firebaseConfig);
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
