<script>
import axios from "axios";
import Cart from "./Cart.vue";
import localStorageMixin from "../../localStorageMixin.js";

export default {
  mixins: [localStorageMixin],
  name: "restaurant-card",

  data() {
    return {
      restaurant: {}, //ristorante
      cartItems: [], //carrello
      dishesList: [], //products
      // index: null,
      totalCartDishesnumber: 0,
      key: "carrello",
    };
  },
  components: {
    Cart,
  },
  computed: {
    totalCartDishesnumber() {
      let sumQuantity = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const quantityEl = this.cartItems[i].quantity;
        sumQuantity += quantityEl;
      }
      return (this.totalCartDishesnumber = sumQuantity);
    },
  },
  created() {
    axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`).then((response) => {
      this.restaurant = response.data[0];
      this.dishesList = this.restaurant.dishes;
      console.log(this.restaurant);
      console.log(this.dishesList);
    });
    // localStorage.clear();
    this.init();
  },

  methods: {
    init() {
      this.cartItems = this.getFromLocalStorage(this.key);
      console.log("log di cartitems nell' init", this.cartItems);
      if (!this.cartItems) {
        this.cartItems = [];
      }
    },

    incrementCounter(dish) {
      const cartItem = this.cartItems.find((item) => item.id === dish.id);

      // console.log("dish.restaurant_id:", dish.restaurant_id);
      // console.log("this.restaurant.id:", this.restaurant.id);

      if (cartItem && cartItem.restaurant_id === dish.restaurant_id) {
        cartItem.quantity++;
      } else if (
        this.cartItems.length == 0 ||
        this.cartItems[0].restaurant_id == dish.restaurant_id
      ) {
        let obj = {
          id: dish.id,
          restaurant_id: dish.restaurant_id,
          name: dish.name,
          quantity: 1,
          price: dish.price,
          picture: dish.picture,
        };
        this.cartItems.push(obj);
      } else {
        console.log(
          "Questo piatto non può essere aggiunto al carrello perché è di un altro ristorante!"
        );
      }

      this.sync(this.key, this.cartItems);
    },

    // incrementCounter(dish) {
    //   const cartItem = this.cartItems.find((item) => item.id === dish.id);
    //   if (cartItem) {
    //     cartItem.quantity++;
    //   } else {
    //     let obj = {
    //       id: dish.id,
    //       restaurant_id: dish.restaurant_id,
    //       name: dish.name,
    //       quantity: 1,
    //       price: dish.price,
    //       picture: dish.picture,
    //     };
    //     this.cartItems.push(obj);
    //   }
    //   console.log(this.cartItems);
    //   this.sync(this.key, this.cartItems);
    // },

    decrementCounter(dishId) {
      const cartItem = this.cartItems.find((item) => item.id === dishId);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
      if (cartItem && cartItem.quantity == 0) {
        // const index = this.cartItems.indexOf(cartItem);
        this.cartItems.splice(this.getIndexItem(dishId), 1);
      }
      console.log(this.cartItems);
      this.sync(this.key, this.cartItems);
    },

    getCartItemQuantity(dishId) {
      const cartItem = this.cartItems.find((item) => item.id === dishId);
      return cartItem ? cartItem.quantity : 0;
    },

    getIndexItem(dishId) {
      const cartItem = this.cartItems.find((item) => item.id == dishId);
      const index = this.cartItems.indexOf(cartItem);
      console.log("index", index);
      return index;
    },

    //   saveToCart(dishId) {
    //     // this.getIndexItem(dishId);
    //     // const cartItem = this.cartItems.find((item) => item.id == dishId);
    //     this.sync(this.key, this.cartItems);
    // },
    totalCartDishes() {
      let sumQuantity = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const quantityEl = this.cartItems[i].quantity;
        sumQuantity += quantityEl;
      }
      return sumQuantity;
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
          <p class="card-text"><i class="bi bi-geo-alt me-1"></i>{{ restaurant.address }}</p>
          <p>{{ restaurant.category }}</p>
        </div>

        <div class="menu">
          <div class="list-group d-flex my-5" id="myList" role="tablist">
            <div class="menu-title text-center fw-bold fs-2 my-4 rounded-top">Menu</div>
            <div
              v-for="dish in restaurant.dishes"
              :key="dish.id"
              class="list-group-item row list-group-item-action d-flex justify-content-start align-self-center">
              <!-- MODIFICA FLEX BREAK POINT -->
              <div class="col-4">
                <img :src="dish.picture" class="dish-picture img-fluid" alt="piatto" />
              </div>
              <div class="col-7">
                <div class="text-start px-4 py-3">
                  <h4>{{ dish.name }}</h4>
                  <p>{{ dish.description }}</p>
                  <p class="fw-bold">Prezzo: {{ dish.price }}€</p>
                </div>
              </div>
              <div
                class="col-1 d-flex align-items-center justify-content-evenly fs-4"
                :key="dish.id">
                <i class="bi bi-cart-dash" @click="decrementCounter(dish.id)"></i>
                {{ getCartItemQuantity(dish.id) }}
                <i class="bi bi-cart-plus" @click="incrementCounter(dish)"></i>

                <!-- <button class="btn btn-danger" @click="sync(this.key, this.cartItems)">
                  Aggiungi al carrello
                </button> -->
              </div>
            </div>
          </div>
          <!-- <h1 class="text-danger">totale piatti {{ this.totalCartDishesnumber }}</h1> -->
          <h1 class="text-danger">totale piatti {{ totalCartDishesnumber }}</h1>
          <Cart :cartItems="cartItems" />
        </div>
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
</style>
