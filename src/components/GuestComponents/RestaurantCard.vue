<script>
import axios from "axios";

export default {
  name: "restaurant-card",

  data() {
    return {
      restaurant: null
    };
  },

  created() {
    axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`).then((response) => { this.restaurant = response.data });
  },
};
</script>

<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
        <!-- <h6 class="card-subtitle mb-2 text-muted">{{ restaurant.address }}</h6>
        <p class="card-text">{{ restaurant.description }}</p>
        <p class="card-text">P.IVA: {{ restaurant.p_iva }}</p> -->
      </div>
    </div>
  </div>

  <!-- PLACEHOLDER CARD DA MODIFY -->
  <!-- <div class="container my-5">
    <div class="card mb-3">
      <img
        src="../../assets/jumbo-.svg"
        class="card-img-top img-fluid"
        alt="..."
      />
      <div class="card-body">
        <div class="info-restaurant text-center">
          <h5 class="card-title fs-1">Mythos</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p>Category: Pizza, Pizza, Pizza</p>
        </div>
        
        QUI CI VA IL MENU

        <p class="card-text">
          <small class="text-body-secondary">P. IVA: 11111111111</small>
        </p>
      </div>
    </div>
  </div> -->
</template>

<style lang="scss" scoped>
.card-img-top {
  height: 30vh;
  width: auto;
}

.list-group-item .list-group-item-action .text-center {
  background-color: #bd2222;
}
</style>
