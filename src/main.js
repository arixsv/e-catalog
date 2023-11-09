import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

createApp(App).use(router).mount('#app')
