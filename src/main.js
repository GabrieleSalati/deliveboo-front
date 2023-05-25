import { createApp } from "vue";
import { router } from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import App from "./App.vue";
import { store } from "./assets/data/store";
import "./localStorageMixin.js";
// import braintree from "braintree";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
