<script>

export default {

    props: {
        restaurants: Array,
    },

};
</script>

<template>
    <div class="card" v-for="restaurant in restaurants">
        <div class="card-body">
            <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
            <p class="card-text">{{ restaurant.p_iva }}</p>
            <p class="card-text">{{ restaurant.address }}</p>
            <!-- <img :src="project.image" class="card-img-top" alt="Picture"> -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>