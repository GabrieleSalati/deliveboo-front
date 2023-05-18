import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/GuestComponents/HomePage.vue";
import RestaurantIndex from "../components/GuestComponents/RestaurantIndex.vue";
import Menu from "../components/GuestComponents/Menu.vue";

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: '',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },

        {
            path: '/restaurants',
            name: 'restaurants',
            component: RestaurantIndex,
        },

        {
            path: '/menu',
            name: 'menu',
            component: Menu,
        },
    ],
});

export { router };