import './assets/main.css'

// main.js
import { createApp } from 'vue';
import header from './components/header.vue';
const app = createApp(header);
header.mount('#header'); // Mount the app on element with id="app" in index.html


import footer from './components/footer.vue';
const footer = createApp(footer);
footer.mount('#footer'); // Mount the app on element with id="app" in index.html
