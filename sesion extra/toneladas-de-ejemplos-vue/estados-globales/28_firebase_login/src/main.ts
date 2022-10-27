import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCCp9O1ZAdAxmCv1OlNQdUpnAzijRrEWBk",
  authDomain: "vuelogin-9aa81.firebaseapp.com",
  projectId: "vuelogin-9aa81",
  storageBucket: "vuelogin-9aa81.appspot.com",
  messagingSenderId: "654104703222",
  appId: "1:654104703222:web:4ee138417962019f4d7cd7"
};

initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
