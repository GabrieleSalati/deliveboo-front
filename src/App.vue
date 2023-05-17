
<script>

import axios from "axios";
import RestaurantIndex from './components/partials/UserComponents/RestaurantIndex.vue';

export default {
  data() {
    return {
      restaurants: []
    }
  },

  components: {
    RestaurantIndex,
  },


  methods: {
    fetchRestaurants() {
      axios.get('http://127.0.0.1:8000/api/restaurants').then((response) => { this.restaurants = response.data; })
    }
  },

  created() {
    this.fetchRestaurants();
  },
};
</script>

<template>
  <div class="container">
    <RestaurantIndex :restaurants="restaurants" />
  </div>
</template>

<style lang="scss" scoped></style>