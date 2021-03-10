import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import LitepieDatepicker from 'litepie-datepicker'

const app = createApp(App)
app.use(router)
app.use(LitepieDatepicker)
app.mount('#app')