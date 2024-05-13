import './assets/main.css'

// main.js
import { createApp } from 'vue';
import header from './components/header.vue';
const headerUCL = createApp(header);
headerUCL.mount('#header'); // Mount the app on element with id="header" in index.html


import footer from './components/footer.vue';
const footerUCL = createApp(footer);
footerUCL.mount('#footer'); // Mount the app on element with id="footer" in index.html


import arrangementer from './components/arrangementer.vue';
const arrangementerUCL = createApp(arrangementer);
arrangementerUCL.mount('#arrangementer'); // Mount the app on element with id="footer" in index.html
>>>>>>> 896bbce9148a707db3ecba11b692bd96bd0fd2f8
