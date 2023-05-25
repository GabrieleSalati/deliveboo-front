s
<script>
import axios from "axios";
import Cart from "./Cart.vue";
import localStorageMixin from "../../localStorageMixin";
import Loader from "../_partials/Loader.vue";
import { store } from "../../assets/data/store";

export default {
  mixins: [localStorageMixin],
  name: "restaurant-card",

  data() {
    return {
      store,
      restaurant: {}, //ristorante
      dishesList: [], //products
      // index: null,

      loading: true,
    };
  },
  components: {
    Cart,
    Loader,
  },
  computed: {},

  // fetch del ristorante con i relativi piatti
  created() {
    this.loading = true;

    axios.get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`).then((response) => {
      this.restaurant = response.data[0];
      this.dishesList = this.restaurant.dishes;
      this.loading = false;
      console.log(this.dishesList);
    });
    this.init();
    // localStorage.clear();
    this.updateTotalCartDishes();
  },
  methods: {
    // inizializza la variabile cartItems caricando al suo interno i dati da localStorage
    init() {
      store.cartItems = this.getFromLocalStorage(store.key) || [];
      // console.log("log di cartitems nell' init", store.cartItems);
      // if (!store.cartItems) {
      //   store.cartItems = [];
      // }
    },

    // aggiunge un piatto all' array cartItems e se il piatto è già nell' array ne aumenta la quantity
    incrementCounter(dish) {
      const cartItem = store.cartItems.find((item) => item.id === dish.id);
      if (cartItem && cartItem.restaurant_id === dish.restaurant_id) {
        cartItem.quantity++;
      } else if (
        store.cartItems.length == 0 ||
        store.cartItems[0].restaurant_id == dish.restaurant_id
      ) {
        let obj = {
          id: dish.id,
          restaurant_id: dish.restaurant_id,
          name: dish.name,
          quantity: 1,
          price: dish.price,
          picture: dish.picture,
        };
        store.cartItems.push(obj);
      } else {
        alert("Questo piatto non può essere aggiunto al carrello perché è di un altro ristorante!");

        document.getElementById("alert").innerHTML = `
      <div class="alert alert-danger" role="alert">
        Puoi ordinare da un ristorante alla volta, svuota il carrello per continuare!
      </div>
      `;
      }
      this.sync(store.key, store.cartItems);
      this.init();
      this.updateTotalCartDishes();
    },

    // riduce la quantity di un piatto nell' array cartItems e se la quantity=0 rimuove il piatto dall' array
    decrementCounter(dishId) {
      const cartItem = store.cartItems.find((item) => item.id === dishId);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
      if (cartItem && cartItem.quantity == 0) {
        store.cartItems.splice(this.getIndexItem(dishId), 1);
      }
      this.sync(store.key, store.cartItems);
      this.updateTotalCartDishes();
      this.init();
      // store.totalCartDishesnumber--;
    },

    // indica la quantità di ogni singolo piatto all' interno dell' array cartItems, se il piatto non è presente nell' array imposta la quantity=0
    getCartItemQuantity(dishId) {
      const cartItem = store.cartItems.find((item) => item.id === dishId);
      return cartItem ? cartItem.quantity : 0;
    },

    // funzione di utility per determinare l'indice di un piatto nell' array cartItems in base al valore del campo id
    getIndexItem(dishId) {
      const cartItem = store.cartItems.find((item) => item.id == dishId);
      const index = store.cartItems.indexOf(cartItem);
      return index;
    },
    updateTotalCartDishes() {
      store.calculateDishesNumber(store.cartItems);
    },
  },
};
</script>

<template>
  <Loader v-if="loading" />
  <div class="container pt-4 my-5">
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
            <div class="menu-title text-center fw-bold fs-2 mt-4 rounded-top">Menu</div>
            <div id="alert"></div>
            <div
              v-for="dish in restaurant.dishes"
              :key="dish.id"
              class="list-group-item row list-group-item-action d-flex justify-content-start align-self-center">
              <!-- MODIFICA FLEX BREAK POINT -->
              <div
                class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                <img :src="dish.picture" class="dish-picture" alt="piatto" />
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="text-start px-4 py-3">
                  <h4>{{ dish.name }}</h4>
                  <p>{{ dish.description }}</p>
                  <p class="fw-bold">Prezzo: {{ dish.price }}€</p>
                </div>
              </div>
              <div
                class="col-lg-2 col-md-12 col-sm-12 d-flex align-items-center justify-content-evenly fs-4 my-3"
                :key="dish.id">
                <i class="bi bi-cart-dash" @click="decrementCounter(dish.id)"></i>
                {{ getCartItemQuantity(dish.id) }}
                <i class="bi bi-cart-plus" @click="incrementCounter(dish)"></i>

                <!-- <button class="btn btn-danger" @click="sync(store.key, store.cartItems)">
                  Aggiungi al carrello
                </button> -->
              </div>
            </div>
          </div>
          <!-- <h1>
            Numero totale piatti
            <span class="badge text-bg-danger">{{
              store.totalCartDishesnumber
            }}</span>
          </h1> -->
          <!-- <Cart /> -->
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

.bi {
  cursor: pointer;
}
</style>
