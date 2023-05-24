<script>
import Cart from "../GuestComponents/Cart.vue";
import localStorageMixin from "../../localStorageMixin.js";
import { store } from "../../assets/data/store";
import axios from "axios";

export default {
  mixins: [localStorageMixin],

  data() {
    return {
      store,
      title: "Effettua il checkout!",
      restaurant: {}, //ristorante
      cartItems: [], //carrello
      dishesList: [], //products
      // index: null,
      totalCartDishesnumber: 0,
      key: "carrello",
      formData: {
        guestName: "",
        email: "",
        address: "",
        telephone: "",
      },
    };
  },

  components: { Cart },
  computed: {
    // totalCartDishes2() {
    //   let totalCartDishesnumber = 0;
    //   for (let i = 0; i < this.cartItems.length; i++) {
    //     const quantityEl = this.cartItems[i].quantity;
    //     totalCartDishesnumber += quantityEl;
    //   }
    //   return totalCartDishesnumber;
    // },
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
    axios
      .get(`http://127.0.0.1:8000/api/restaurants/${this.$route.params.id}`)
      .then((response) => {
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
      if (cartItem) {
        cartItem.quantity++;
      } else {
        let obj = {
          id: dish.id,
          restaurant_id: dish.restaurant_id,
          name: dish.name,
          quantity: 1,
          price: dish.price,
          picture: dish.picture,
        };
        this.cartItems.push(obj);
      }
      console.log(this.cartItems);
      this.sync(this.key, this.cartItems);
    },

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

    sendOrder() {
      const order = {
        guestName: this.formData.guestName,
        email: this.formData.email,
        address: this.formData.address,
        telephone: this.formData.telephone,
      };

      axios
        .post("http://127.0.0.1:8000/api/orders", order)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });
    },
  },
};
</script>

<template>
  <div class="container my-5">
    <h1 class="pt-5 fw-bold">{{ title }}</h1>
    <Cart :cartItems="cartItems" />
    <h2 class="mt-5">Contatta il ristoratore:</h2>
    <form @submit.prevent="sendOrder">
      <div class="container row">
        <!-- <div class="mb-3 col-6">
                <label for="exampleFormControlInput1" class="form-label">Total bill</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00">
            </div>
            <div class="mb-3 col-6">
                <label for="exampleFormControlInput1" class="form-label">Without shipping cost</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="00">
            </div> -->
        <div class="mb-3 col-6">
          <label for="guest_name" class="form-label">Nome Cliente</label>
          <input
            v-model="guestName"
            type="text"
            class="form-control"
            id="guest_name"
            placeholder="Nome Cognome"
          />
        </div>

        <div class="mb-3 col-6">
          <label for="guest_email" class="form-label">Email Cliente</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="guest_email"
            placeholder="name@example.com"
          />
        </div>

        <div class="mb-3 col-6">
          <label for="guest_address" class="form-label">Indirizzo</label>
          <input
            v-model="address"
            type="text"
            class="form-control"
            id="guest_address"
            placeholder="Via Tacchi 12"
          />
        </div>

        <div class="mb-5 col-6">
          <label for="guest_telephone" class="form-label">Cellulare</label>
          <input
            v-model="telephone"
            type="text"
            class="form-control"
            id="guest_telephone"
            placeholder="367859857"
          />
        </div>

        <div class="mb-3 col-12 d-flex justify-content-center">
          <button class="btn custom-btn" type="submit">Ordina e paga!</button>
        </div>
      </div>
    </form>
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
