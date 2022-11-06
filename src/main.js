import { createApp } from 'vue';
import App from './App.vue';
import Vue3TouchEvents from "vue3-touch-events";

const app = createApp(App);

app.use(Vue3TouchEvents).mount("#app");