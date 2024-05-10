import './assets/main.css'

// main.js
import { createApp } from 'vue';
import Myheader from './header.vue';

const app = createApp(Myheader);

app.mount('#app'); // Mount the app on element with id="app" in index.html