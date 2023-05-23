import { createApp } from "vue";
import { router } from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import App from "./App.vue";
import "./localStorageMixin.js";
import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    totalCartDishesnumber: 0,
  },
  mutations: {
    setTotalCartDishesnumber(state, value) {
      state.totalCartDishesnumber = value;
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
