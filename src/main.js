import './assets/main.css'

// main.js
import { createApp } from 'vue';
import header from './components/header.vue';
import footer from './components/footer.vue';
const app = createApp(header);
const app = createApp(footer);
app.mount('#app'); // Mount the app on element with id="app" in index.html

