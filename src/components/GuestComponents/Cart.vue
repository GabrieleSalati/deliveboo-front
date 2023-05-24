<script>
import localStorageMixin from "../../localStorageMixin.js";
import { store } from "../../assets/data/store";

export default {
  mixins: [localStorageMixin],
  props: {
    cartItems: Array,
  },
  data() {
    return {
      store,
      title: "Cart",
      key: "carrello",
    };
  },
  components: {},
  methods: {
    // svuota il carrello cliccando il tasto "remove"
    emptyCart(key) {
      this.removeFromLocalStorage(key);
      this.cartItems.splice(0, this.cartItems.length);
      this.setTotalCartDishesnumber(0);
    },

    // calcola il prezzo del singolo piatto per la quantità
    singleDishTotalPrice(cartItem) {
      return cartItem.price * cartItem.quantity;
    },

    // calcola il valore totale del carrello
    totalCartValue() {
      let sumQuantity = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const cartItem = this.cartItems[i];
        sumQuantity += cartItem.quantity * cartItem.price;
      }
      return sumQuantity;
    },

    totalCartDishesnumber() {
      let cartQuantity = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const cartItem = this.cartItems[i];
        cartQuantity += cartItem.quantity;
      }
      return cartQuantity;
    },

    removeDish(id, quantity) {
      this.cartItems.splice(this.getIndexItem(id), 1);
      this.sync(this.key, this.cartItems);
      this.setTotalCartDishesnumber(store.totalCartDishesnumber - quantity);
    },

    // funzione di utility per determinare l'indice di un piatto nell' array cartItems in base al valore del campo id
    getIndexItem(id) {
      const cartItem = this.cartItems.find((item) => item.id == id);
      const index = this.cartItems.indexOf(cartItem);
      // console.log("index", index);
      return index;
    },
  },

  created() {},
};
</script>
<template>
  <div class="">
    <h1>Il tuo carrello</h1>
    <div class="row">
      <div class="col-12" v-for="cartItem in cartItems">
        <div class="card d-flex flex-row align-items-center">
          <div class="col-3">
            <img
              :src="cartItem.picture"
              class="img-fluid"
              :alt="cartItem.name"
            />
          </div>
          <div class="card-body row">
            <div class="col">
              <h5 class="card-title fw-bold">{{ cartItem.name }}</h5>
              <p class="card-text">Prezzo: {{ cartItem.price }}€</p>
            </div>
            <div class="col">
              <p class="card-text text-end">
                Quantità: {{ cartItem.quantity }}€
              </p>
              <p class="card-text text-end">
                Prezzo totale: {{ singleDishTotalPrice(cartItem) }}€
              </p>
            </div>
          </div>
          <button
            class="btn custom-btn mx-3"
            @click="removeDish(cartItem.id, cartItem.quantity)"
          >
            Rimuovi
          </button>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-5 align-items-baseline">
      <button class="btn custom-btn" @click="emptyCart(this.key)">
        Svuota Carrello
      </button>
      <p class="text-danger m-0 p-0">Totale:{{ totalCartValue() }} €</p>
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
