import { createApp } from 'vue'
import './global.scss'
import App from './App.vue'
import router from './router'

// Supports weights 300-800
import '@fontsource-variable/open-sans';
const app = createApp(App);

app.use(router).mount('#app');
