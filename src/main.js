import 'amfe-flexible';
import { createApp } from 'vue'
import './styles/index.scss'
import App from './App.vue'
import router from './routers';


const app = createApp(App)

app.use(router).mount('#app')
