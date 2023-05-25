<script>
import localStorageMixin from "../../localStorageMixin.js";
import { store } from "../../assets/data/store";

export default {
  mixins: [localStorageMixin],
  data() {
    return {
      store,
      // cartItems: store.cartItems,
      title: "Cart",
      // showButton: true,
    };
  },

  mounted() {
    // if (this.$route.name === "cart") {
    //   this.showButton = false;
    // }
  },
  computed: {},
  created() {
    this.updateTotalCartDishes();
    this.init();
  },
  methods: {
    init() {
      store.cartItems = this.getFromLocalStorage(store.key) || [];
    },
    // svuota il carrello cliccando il tasto "remove"
    emptyCart(key) {
      this.removeFromLocalStorage(key);
      store.cartItems.splice(0, store.cartItems.length);
      this.updateTotalCartDishes();
    },

    // calcola il prezzo del singolo piatto per la quantità
    singleDishTotalPrice(cartItem) {
      return cartItem.price * cartItem.quantity;
    },

    // calcola il valore totale del carrello
    totalCartValue() {
      let sumPrice = 0;
      for (let i = 0; i < store.cartItems.length; i++) {
        const cartItem = store.cartItems[i];
        sumPrice += cartItem.quantity * cartItem.price;
      }
      return sumPrice;
    },

    // totalCartDishesnumber() {
    //   let cartQuantity = 0;
    //   for (let i = 0; i < store.cartItems.length; i++) {
    //     const cartItem = store.cartItems[i];
    //     cartQuantity += cartItem.quantity;
    //   }
    //   return cartQuantity;
    // },

    removeDish(id, quantity) {
      store.cartItems.splice(this.getIndexItem(id), 1);
      this.sync(store.key, store.cartItems);
      this.updateTotalCartDishes();
    },

    // funzione di utility per determinare l'indice di un piatto nell' array cartItems in base al valore del campo id
    getIndexItem(id) {
      const cartItem = store.cartItems.find((item) => item.id == id);
      const index = store.cartItems.indexOf(cartItem);
      return index;
    },
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
        alert(
          "Questo piatto non può essere aggiunto al carrello perché è di un altro ristorante!"
        );

        document.getElementById("alert").innerHTML = `
      <div class="alert alert-danger" role="alert">
        Puoi ordinare da un ristorante alla volta, svuota il carrello per continuare!
      </div>
      `;
      }
      this.sync(store.key, store.cartItems);
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
    },

    // indica la quantità di ogni singolo piatto all' interno dell' array cartItems, se il piatto non è presente nell' array imposta la quantity=0
    getCartItemQuantity(dishId) {
      const cartItem = store.cartItems.find((item) => item.id === dishId);
      return cartItem ? cartItem.quantity : 0;
    },
    updateTotalCartDishes() {
      store.calculateDishesNumber(store.cartItems);
    },
  },
};
</script>
<template>
  <h1 class="text-dark">Il tuo carrello:</h1>
  <div class="carrello">
    <ul class="list-group" v-for="cartItem in store.cartItems">
      <li class="list-group-item list-group-item-action">
        <div class="row">
          <!-- COLONNA IMG -->
          <div class="col-lg-4 col-md-6">
            <img
              :src="cartItem.picture"
              class="img-fluid"
              :alt="cartItem.name"
            />
          </div>
          <!-- COLONNA INFO -->
          <div class="col-lg-4 col-md-6">
            <div class="d-flex flex-column justify-content-between">
              <h6 class="my-0 card-title fw-bold">{{ cartItem.name }}</h6>
              <p class="fs-6 my-0 card-text">Prezzo: {{ cartItem.price }}€</p>
              <p class="fs-6 my-0">Quantità: {{ cartItem.quantity }}</p>
              <p class="fs-6 my-0">
                Prezzo totale: {{ singleDishTotalPrice(cartItem) }}€
              </p>
            </div>
          </div>
          <!-- COLONNA ACTION -->
          <div
            class="col-lg-4 col-md-12 d-flex flex-column justify-content-around"
          >
            <div class="text-center mb-2 fs-5">
              <i
                class="bi bi-cart-dash"
                @click="decrementCounter(cartItem.id)"
              ></i>
              {{ getCartItemQuantity(cartItem.id) }}
              <i
                class="bi bi-cart-plus"
                @click="incrementCounter(cartItem)"
              ></i>
            </div>
            <div class="text-center">
              <button
                class="btn custom-btn"
                @click="removeDish(cartItem.id, cartItem.quantity)"
              >
                Rimuovi
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <h4 class="mt-3 p-0 text-dark text-center">
      Totale: <strong>{{ totalCartValue() }} €</strong>
    </h4>
    <div class="d-flex justify-content-between my-3 align-items-baseline">
      <button class="btn custom-btn" @click="emptyCart(store.key)">
        Svuota Carrello
      </button>
      <!-- v-if="showButton" -->
      <router-link
        :to="{ name: 'cart' }"
        class="navbar-nav nav-link text-light fs-5 me-2"
      >
        <button class="btn custom-btn">Vai al checkout</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn.custom-btn {
  font-weight: 800;
  color: #bd2222;
  border-color: #bd2222;
}

.btn.custom-btn:hover {
  color: #fff;
  background-color: #bd2222;
}
</style>
