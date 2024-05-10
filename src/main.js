import './assets/main.css'

// main.js
import { createApp } from 'vue';
import header from './components/header.vue';
const headerUCL = createApp(header);
headerUCL.mount('#header'); // Mount the app on element with id="heaer" in index.html


import footer from './components/footer.vue';
const footerUCL = createApp(footer);
footerUCL.mount('#footer'); // Mount the app on element with id="footer" in index.html
