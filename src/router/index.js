import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/GuestComponents/HomePage.vue";
import RestaurantIndex from "../components/GuestComponents/RestaurantIndex.vue";
import RestaurantCard from "../components/GuestComponents/RestaurantCard.vue";
import RecapPage from "../components/GuestComponents/RecapPage.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Se è disponibile una posizione salvata, torna a quella posizione
      return savedPosition;
    } else {
      // Altrimenti, scorri fino all'inizio della pagina
      return { left: 0, top: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },

    {
      path: "/index/:label?",
      name: "restaurants",
      component: RestaurantIndex,
    },
    {
      path: "/restaurants/:id",
      name: "restaurant-card",
      component: RestaurantCard,
    },

    {
      path: "/cart",
      name: "cart",
      component: RecapPage,
    },
  ],
});

export { router };
