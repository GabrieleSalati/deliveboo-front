<script>
import axios from "axios";

export default {
  name: "restaurant-card",

  data() {
    return {
      restaurant: null,
      cartItems: [],
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
  methods: {
    incrementCounter(dishId) {
      const cartItem = this.cartItems.find((item) => item.dishId === dishId);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cartItems.push({
          dishId: dishId,
          quantity: 1,
        });
      }
    },
    decrementCounter(dishId) {
      const cartItem = this.cartItems.find((item) => item.dishId === dishId);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
    },
    getCartItemQuantity(dishId) {
      const cartItem = this.cartItems.find((item) => item.dishId === dishId);
      return cartItem ? cartItem.quantity : 0;
    },
  },
};
</script>

<template>
  <div class="container my-5">
    <div class="card mb-3 shadow-lg">
      <div class="container d-flex justify-content-center">
        <div class="restaurant-img mt-3">
          <img :src="restaurant.picture" class="img-fluid rounded" alt="" />
        </div>
      </div>

      <div class="card-body">
        <div class="info-restaurant text-center">
          <h5 class="card-title fs-1">{{ restaurant.restaurant_name }}</h5>
          <p class="card-text">
            <i class="bi bi-geo-alt me-1"></i>{{ restaurant.address }}
          </p>
          <p>{{ restaurant.category }}</p>
        </div>

        <div class="menu">
          <div class="list-group d-flex my-5" id="myList" role="tablist">
            <div class="menu-title text-center fw-bold fs-2 my-4 rounded-top">
              Menu
            </div>
            <div v-for="dish in restaurant.dishes" :key="dish.id"
              class="list-group-item row list-group-item-action d-flex justify-content-start align-self-center">
              <!-- MODIFICA FLEX BREAK POINT -->
              <div class="col-sm-12 col-md-12 col-lg-4">
                <img :src="dish.picture" class="dish-picture" alt="piatto" />
              </div>
              <div class="col-sm-12 col-md-12 col-lg-6">
                <div class="text-start px-4 py-3">
                  <h4>{{ dish.name }}</h4>
                  <p>{{ dish.description }}</p>
                  <p class="fw-bold">Prezzo: {{ dish.price }}€</p>
                </div>
              </div>
              <div class="col-sm-12 col-md-12 col-lg-2 d-flex align-items-center justify-content-evenly fs-4"
                :key="dish.id">
                <i class="bi bi-cart-plus" @click="incrementCounter(dish.id)"></i>
                {{ getCartItemQuantity(dish.id) }}
                <i class="bi bi-cart-dash" @click="decrementCounter(dish.id)"></i>
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
.restaurant-img {
  max-width: 600px;
}

.menu-title {
  color: #bd2222;
  border: 1px solid #bd2222;
}

.dish-picture {
  max-width: 300px;
}

.bi {
  cursor: pointer;
}
</style>
