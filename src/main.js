import './assets/main.css'

// main.js
import { createApp } from 'vue';
import header from './components/header.vue';
const app = createApp(header);
app.mount('#app'); // Mount the app on element with id="app" in index.html


import footer from './components/footer.vue';
const app1 = createApp(footer);
app1.mount('#app1'); // Mount the app on element with id="app" in index.html
