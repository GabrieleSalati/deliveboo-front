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
      cartItems: [], //carrello

      totalCartDishesnumber: 0,
      spedizione: 0,
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
    totalCartDishesnumber() {
      let sumQuantity = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const quantityEl = this.cartItems[i].quantity;
        sumQuantity += quantityEl;
      }
      return (this.totalCartDishesnumber = sumQuantity);
    },
    spedizionePrice() {
      if (this.totalCartDishes() == 0) return (this.spedizione = 0);
      else if (this.totalCartDishes() < 10) return (this.spedizione = 3);
      else if (this.totalCartDishes() >= 10 && this.totalCartDishes() < 15)
        return (this.spedizione = 5);
      else return (this.spedizione = 7);
    },
  },
  created() {
    // localStorage.clear();
    this.init();
  },

  methods: {
    //inizializzazione carrello
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
      console.log(this.cartItems[0]);
      this.sync(this.key, this.cartItems);
    },

    //funzione per decrementare quantità prodotto nel carrello
    decrementCounter(dishId) {
      const cartItem = this.cartItems.find((item) => item.id === dishId);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
      if (cartItem && cartItem.quantity == 0) {
        this.cartItems.splice(this.getIndexItem(dishId), 1);
      }
      console.log(this.cartItems);
      this.sync(this.key, this.cartItems);
    },

    //funzione che restituisce quantità di un determinato piatto nel carrello
    getCartItemQuantity(dishId) {
      const cartItem = this.cartItems.find((item) => item.id === dishId);
      return cartItem ? cartItem.quantity : 0;
    },

    //funzione che restituisce la posizione di un determinato piatto nell' array carrello
    getIndexItem(dishId) {
      const cartItem = this.cartItems.find((item) => item.id == dishId);
      const index = this.cartItems.indexOf(cartItem);
      console.log("index", index);
      return index;
    },

    //funzione che restituisce il numero di piatti totali nel carrello
    totalCartDishes() {
      let sumQuantity = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const quantityEl = this.cartItems[i].quantity;
        sumQuantity += quantityEl;
      }
      return sumQuantity;
    },

    //funzione legata al submit.prevent
    sendOrder() {
      const order = {
        total_bill: this.totalCheckOutPlusShipping(),
        bill_no_shipping: this.totalCartValue(),
        guest_name: this.formData.guestName,
        email: this.formData.email,
        address: this.formData.address,
        telephone: this.formData.telephone,
        restaurant_id: this.cartItems[0].restaurant_id,
        dish_ids: this.getDishIdsFromOrder(),
      };

      axios
        .post("http://127.0.0.1:8000/api/orders", order)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          this.error = error.message;
          console.log(error.message);
        });
    },

    //funzione per calcolare totale carrello (senza spedizione) così da riportarlo sotto nel form
    totalCartValue() {
      let sumPrice = 0;
      for (let i = 0; i < store.cartItems.length; i++) {
        const cartItem = store.cartItems[i];
        sumPrice += cartItem.quantity * cartItem.price;
      }
      return sumPrice;
    },

    //funzione per calcolare totale carrello (con spedizione) così da riportarlo sotto nel form
    totalCheckOutPlusShipping() {
      let totCart = 0;
      const cartItems = this.getFromLocalStorage(store.key);

      if (cartItems && cartItems.length !== 0) {
        for (let i = 0; i < cartItems.length; i++) {
          totCart += cartItems[i].quantity * cartItems[i].price;
        }
        return totCart + this.spedizione;
      } else {
        return 0;
      }
    },

    // Funzione per ottenere l'array di Id dei piatti contenuti nell'ordine.
    getDishIdsFromOrder() {
      let dishIds = [];

      const cartItems = this.getFromLocalStorage(store.key);

      for (let i = 0; i < cartItems.length; i++) {
        const cartItem = cartItems[i];
        dishIds.push(cartItem);
      }

      console.log(dishIds);

      return dishIds;
    },

  },
};
</script>

<template>
  <div class="container my-5">
    <h1 class="pt-5 fw-bold">{{ title }}</h1>
  </div>

  <div class="container">
    <div class="row g-5">
      <div class="col-lg-6 col-md-12">
        <Cart :cartItems="cartItems" />
      </div>
      <div class="col-lg-6 col-md-12">
        <h2 class="my-5">Inserisci le tue credenziali:</h2>
        <form @submit.prevent="sendOrder">
          <div class="container row">
            <div class="mb-3 col-6">
              <label for="exampleFormControlInput1" class="form-label">Totale</label>
              <p class="form-control">
                <!-- {{ this.getFromLocalStorage(store.key)[0].price }} -->
                {{ this.totalCheckOutPlusShipping() }}
              </p>
            </div>

            <div class="mb-3 col-6">
              <label for="exampleFormControlInput1" class="form-label">Totale senza costi di spedizione</label>
              <p class="form-control">
                {{ this.totalCartValue() }}
              </p>
            </div>

            <div class="mb-3 col-6">
              <label for="guest_name" class="form-label">Nome Cliente</label>
              <input v-model="formData.guestName" type="text" class="form-control" id="guest_name"
                placeholder="Nome Cognome" />
            </div>

            <div class="mb-3 col-6">
              <label for="guest_email" class="form-label">Email Cliente</label>
              <input v-model="formData.email" type="email" class="form-control" id="guest_email"
                placeholder="name@example.com" />
            </div>

            <div class="mb-3 col-6">
              <label for="guest_address" class="form-label">Indirizzo</label>
              <input v-model="formData.address" type="text" class="form-control" id="guest_address"
                placeholder="Via Tacchi 12" />
            </div>

            <div class="mb-5 col-6">
              <label for="guest_telephone" class="form-label">Cellulare</label>
              <input v-model="formData.telephone" type="text" class="form-control" id="guest_telephone"
                placeholder="367859857" />
            </div>

            <div class="mb-3 col-12 d-flex justify-content-center">
              <button class="btn custom-btn" type="submit">
                Ordina e paga!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn.custom-btn {
  font-weight: 800;
  color: #bd2222;
  border-color: #bd2222;
  font-weight: 800;
  color: #bd2222;
  border-color: #bd2222;
}

.btn.custom-btn:hover {
  color: #fff;
  background-color: #bd2222;
  color: #fff;
  background-color: #bd2222;
}
</style>
