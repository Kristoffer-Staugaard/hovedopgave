import './assets/main.css'

// main.js
import { createApp } from 'vue';
import header from './header.vue';

const app = createApp(header);

app.mount('#app'); // Mount the app on element with id="app" in index.html