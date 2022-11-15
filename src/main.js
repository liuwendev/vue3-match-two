import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Vue3TouchEvents from "vue3-touch-events";

// Vuetify
import { createVuetify } from 'vuetify';

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(Vue3TouchEvents);
app.mount("#app");