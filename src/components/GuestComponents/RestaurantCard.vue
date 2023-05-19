<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Restaurant Show",
    };
  },
};
</script>

<template>
  <!-- <div>
    <h1>{{ title }}</h1>
    <div class="card" v-if="restaurant">
      <div class="card-body">
        <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ restaurant.address }}</h6>
        <p class="card-text">{{ restaurant.description }}</p>
        <p class="card-text">P.IVA: {{ restaurant.p_iva }}</p>
      </div>
    </div>
  </div> -->
  <div class="card mb-3">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p class="card-text">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
