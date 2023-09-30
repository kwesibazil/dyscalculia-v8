
import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/animate.css/animate.min.css'
import '../node_modules/hover.css/css/hover-min.css'
import '@/assets/css/main.css'


createApp(App).use(router).use(store).mount('#app')