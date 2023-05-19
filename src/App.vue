<script>
import axios from "axios";
import AppHeader from "./components/_partials/AppHeader.vue";

export default {
  data() {
    return {
      title: "Deliveboo",
    };
  },
  components: {
    AppHeader,
  },

  // methods: {
  //   fetchRestaurants() {
  //     axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
  //       this.restaurants = response.data;
  //     });
  //   },
  // },

  // created() {
  //   this.fetchRestaurants();
  // },
};
</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss" scoped>
body {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
