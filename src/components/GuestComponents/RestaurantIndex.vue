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
            <div class="card col-4 g-4 p-0 mx-5" v-for="restaurant in restaurants">
                <img :src="restaurant.picture" class="card-img-top" alt="Picture">
                <div class="card-body p-4">
                    <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                    <p class="card-text">{{ restaurant.p_iva }}</p>
                    <p class="card-text">{{ restaurant.address }}</p>
                    <div v-for="category in restaurant.categories">
                        <p class="card-text">{{ category.label }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<style lang="scss" scoped>
img {
    width: 100%;
    max-height: 200px;
}

.card {
    border: none;
}

.card-body {
    background-color: aquamarine;
}

.card-list {
    margin-top: 10vh;
    margin-bottom: 10vh;
}
</style>