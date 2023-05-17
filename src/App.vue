<script>
import axios from "axios";
import RestaurantIndex from "./components/UserComponents/RestaurantIndex.vue";
import AppHeader from "./components/_partials/AppHeader.vue";
import AppFooter from "./components/_partials/AppFooter.vue";
import AppMain from "./components/GuestComponents/AppMain.vue";

export default {
  data() {
    return {
      title: "Deliveboo",
      restaurants: [],
    };
  },
  components: {
    AppHeader,
    AppFooter,
    AppMain,
    RestaurantIndex,
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
  <AppHeader />
  <AppMain />
  <div class="container">
    <RestaurantIndex :restaurants="restaurants" />
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
