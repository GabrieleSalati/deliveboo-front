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
  computed: {
    syncCart() {
      // this.syncAfterRemove(key);
      // return (this.cartItems = []);
      localStorage.clear();
    },

    // checkRestaurantId(cartItem) {
    //   if(cartItem.restaurant_id != )
    // }
  },
  methods: {
    fetchid() {
      this.id = this.getFromLocalStorage(this.key);
    },

    syncAfterRemove(key) {
      this.removeFromLocalStorage(key);
      return (this.cartItems = []);
    },

    totalDishPrice(cartItem) {
      return cartItem.price * cartItem.quantity;
    },
    totalDishesPrice() {
      let sumQuantity = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const cartItem = this.cartItems[i];
        sumQuantity = cartItem.quantity * cartItem.price;
      }
    },
  },
  created() {
    // this.fetchid();
  },
};
</script>
<template>
  <div>
    <h1>carrello</h1>
    <div class="row">
      <div class="col-12" v-for="cartItem in cartItems">
        <div class="card d-flex flex-row align-items-center">
          <div class="col-3">
            <img
              :src="cartItem.picture"
              class="px-1 img-fluid"
              :alt="cartItem.name"
            />
          </div>
          <div class="card-body">
            <h6 class="card-title">{{ cartItem.name }}</h6>
            <p class="card-text text-end">{{ cartItem.price }}€</p>
            <!-- <span class="card-text">{{ cartItem.price }}€</span> -->
            <span class="card-text"> Quantità:{{ cartItem.quantity }}</span>
            <p class="card-text text-end">
              Prezzo totale: {{ totalDishPrice(cartItem) }}€
            </p>

            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
        <!-- <h2>{{ cartItems }}</h2> -->
      </div>
    </div>
    <div>
      <button class="btn btn-danger" @click="syncCart()">Remove</button>
      <span class="text-danger">Totale:{{ totalDishesPrice() }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
