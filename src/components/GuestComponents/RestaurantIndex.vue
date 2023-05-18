<script>

import axios from "axios";
import AppFooter from "../_partials/AppFooter.vue";

export default {
    data() {
        return {
            restaurants: [],
            categories: []
        };
    },

    components: {
        AppFooter,
    },

    methods: {
        fetchRestaurants() {
            axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
                this.restaurants = response.data;
            });
        },
    },


    created() {
        this.fetchRestaurants();
    },
};


</script>

<template>
    <div class="container card-list">
        <div class="row justify-content-center">
            <div class="card d-flex col-4 g-4 p-0 mx-5" v-for="restaurant in restaurants">
                <img :src="restaurant.picture" class="card-img-top" alt="Picture">
                <div class="card-body p-4">
                    <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                    <p class="card-text">{{ restaurant.p_iva }}</p>
                    <p class="card-text">{{ restaurant.address }}</p>
                    <div v-for="category in restaurant.categories">
                        <p class="card-text categories">{{ category.label }}</p>
                    </div>
                </div>
                <router-link :to="{ name: 'menu' }" class="nav-link">
                    <button class="btn-main">Menu'</button>
                </router-link>
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    max-height: 180px;
}

.card {
    border: none;
    background-color: darkturquoise;
}

button {
    border: none;
    border-radius: 50px;
    padding: 0.5rem 2rem;
    margin: 1rem;
}

.card-body {
    background-color: darkturquoise;
    color: white;
}

.card-list {
    margin-top: 10vh;
    margin-bottom: 10vh;
}
</style>