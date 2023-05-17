<script>
import axios from "axios";
import AppHeader from "./components/partials/AppHeader.vue";
import AppFooter from "./components/partials/AppFooter.vue";
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
  <AppFooter />
</template>

<style lang="scss" scoped></style>
