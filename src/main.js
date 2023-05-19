import { createApp } from "vue";
import { router } from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import App from "./App.vue";
import './localStorageMixin.js';

const app = createApp(App);
app.use(router);
app.mount("#app");
