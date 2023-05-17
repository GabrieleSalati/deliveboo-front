import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../components/GuestComponents/HomePage.vue";
import LoginForm from "../components/UserComponents/FormComponents/LoginForm.vue";
import UserForm from "../components/UserComponents/FormComponents/UserForm.vue";
import DishForm from "../components/UserComponents/FormComponents/DishForm.vue";
import RestaurantIndex from "../components/GuestComponents/RestaurantIndex.vue";

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
            path: '/login',
            name: 'login',
            component: LoginForm,
        },

        {
            path: '/user',
            name: 'user-form',
            component: UserForm,
        },

        {
            path: '/dish',
            name: 'dish-form',
            component: DishForm,
        },
    ],
});

export { router };