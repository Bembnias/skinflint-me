import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import LitepieDatepicker from 'litepie-datepicker'
import VueApexCharts from 'vue3-apexcharts'

// Firebase auth service
import { projectAuth } from './firebase/config'

let app;

projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App)
        app.use(router)
        app.use(LitepieDatepicker)
        app.use(VueApexCharts)
        app.mount('#app')
    }
})