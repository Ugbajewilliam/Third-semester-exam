import { createApp } from 'vue'
import App from './App.vue'
import store from './composables/store'
import router from './components/router/index.js'


const app = createApp(App)
app.use(router);
app.use(store)
app.mount('#app')
