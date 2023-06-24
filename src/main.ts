import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
const app = createApp(App)
app.config.warnHandler = () => null
app.use(ElementPlus).use(store).use(router).mount('#app')
