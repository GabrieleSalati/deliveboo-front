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
        <div class="row">
            <div class="card col-6" v-for="restaurant in restaurants">
                <div class="card-body">
                    <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
                    <p class="card-text">{{ restaurant.p_iva }}</p>
                    <p class="card-text">{{ restaurant.address }}</p>
                    <div v-for="category in restaurant.categories">
                        <p class="card-text">{{ category.label }}</p>
                    </div>
                    <!-- <img :src="project.image" class="card-img-top" alt="Picture"> -->
                </div>
            </div>
        </div>
    </div>
    <AppFooter />
</template>

<style lang="scss" scoped>
.card-list {
    margin-top: 10vh;
}
</style>