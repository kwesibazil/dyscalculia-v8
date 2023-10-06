//Vue Libraries
import { createApp } from 'vue'
import { createPinia } from 'pinia' 

import App from './App.vue'
import router from './router'


//Libraries
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/animate.css/animate.min.css'
import '../node_modules/hover.css/css/hover-min.css'
import '@/assets/css/main.css'


//Global Components
import Auth from '@/components/modal/auth-modal.vue';


createApp(App)
.use(createPinia()).use(router)
.component("Auth", Auth)
.mount('#app')

