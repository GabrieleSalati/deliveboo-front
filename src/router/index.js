import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/GuestComponents/HomePage.vue";
import RestaurantIndex from "../components/GuestComponents/RestaurantIndex.vue";
import RestaurantCard from "../components/GuestComponents/RestaurantCard.vue";

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "",
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
  ],
});

export { router };
