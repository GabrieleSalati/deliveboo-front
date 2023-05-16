
<script>

import axios from "axios";
import RestaurantShow from './components/partials/UserComponents/RestaurantShow.vue';

export default {
  data() {
    return {
      restaurants: []
    }
  },

  components: {
    RestaurantShow,
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
    <RestaurantShow :restaurants="restaurants" />
  </div>
</template>

<style lang="scss" scoped></style>