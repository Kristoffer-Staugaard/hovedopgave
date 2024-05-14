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
arrangementerUCL.mount('#arrangementer_section');

import kontakt from './components/kontakt.vue';
const kontaktUCL = createApp(kontakt);
kontaktUCL.mount('#kontakt'); // Mount the app on element with id="footer" in index.html

import shortcut from './components/shortcut.vue';
const shortcutUCL = createApp(shortcut);
shortcutUCL.mount('#shortcut');

import jobportalen from './components/jobportalen.vue';
const jobportalenUCL = createApp(jobportalen);
jobportalenUCL.mount('#jobportalen');

import tjekliste from './components/tjekliste.vue';
const tjeklisteUCL = createApp(tjekliste);
tjeklisteUCL.mount('#tjekliste');

import navigation from './components/navigation.vue';
const navigationUCL = createApp(navigation);
navigationUCL.mount('#navigation');


