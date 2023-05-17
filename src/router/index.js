import { createRouter, createWebHistory } from "vue-router";

import App from "src/App.vue";
import RestaurantIndex from "./components/GuestComponents/RestaurantIndex.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: App,
        },

        {
            path: '/Restaurants',
            name: 'Restaurants',
            component: RestaurantIndex,
        },
    ],
});

export { router };