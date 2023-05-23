<script>
import localStorageMixin from "../../localStorageMixin.js";
export default {
  mixins: [localStorageMixin],
  props: {
    cartItems: Array,
  },
  data() {
    return {
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
  },

  created() {},
};
</script>
<template>
  <div>
    <h1>carrello</h1>
    <div class="row">
      <div class="col-12" v-for="cartItem in cartItems">
        <div class="card d-flex flex-row align-items-center">
          <div class="col-3">
            <img :src="cartItem.picture" class="px-1 img-fluid" :alt="cartItem.name" />
          </div>
          <div class="card-body">
            <h6 class="card-title">{{ cartItem.name }}</h6>
            <p class="card-text text-end">{{ cartItem.price }}€</p>
            <span class="card-text"> Quantità:{{ cartItem.quantity }}</span>
            <p class="card-text text-end">Prezzo totale: {{ singleDishTotalPrice(cartItem) }}€</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <button class="btn btn-danger" @click="emptyCart(this.key)">Remove</button>
      <p class="text-danger m-0 p-0">Totale:{{ totalCartValue() }} €</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
