// src/main.ts
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './index.css';
import 'flowbite'; // Added for Flowbite components

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');