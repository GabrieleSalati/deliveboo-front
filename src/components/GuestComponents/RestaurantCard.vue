<script>
import axios from "axios";

export default {
  name: "restaurant-card",

  data() {
    return {
      restaurant: null,
    };
  },

  created() {
    axios
      .get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`)
      .then((response) => {
        this.restaurant = response.data[0];
        console.log(this.restaurant);
      });
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="card mb-3">
      <img :src="restaurant.picture" class="restaurant-img img-fluid" alt="" />
      <div class="card-body">
        <div class="info-restaurant text-center">
          <h5 class="card-title fs-1">{{ restaurant.restaurant_name }}</h5>
          <p class="card-text">
            {{ restaurant.address }}
          </p>
          <p>{{ restaurant.category }}</p>
        </div>

        <div class="menu">
          <div class="list-group my-5" id="myList" role="tablist">
            <li class="list-group-item text-center fw-bold fs-2">Menu</li>
            <div
              v-for="dish in restaurant.dishes"
              :key="dish.id"
              class="list-group-item list-group-item-action d-flex justify-content-center"
            >
              <div class="col">
                <img
                  :src="dish.picture"
                  class="card-img-top img-fluid"
                  alt=""
                />
              </div>
              <div class="col">
                <div class="text-start px-4 py-3">
                  <h4>{{ dish.name }}</h4>
                  <p>{{ dish.description }}</p>
                  <p class="fw-bold">Prezzo: {{ dish.price }}€</p>
                  <div>
                    <i class="bi bi-cart-plus"></i>
                    <i class="bi bi-cart-dash"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="card-text">
          <small class="text-body-secondary">
            P. IVA: {{ restaurant.p_iva }}
          </small>
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.list-group-item .list-group-item-action .text-center {
  background-color: #bd2222;
}
</style>
