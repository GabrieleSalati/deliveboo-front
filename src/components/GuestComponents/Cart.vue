<script>
import localStorageMixin from "../../localStorageMixin.js";
import { store } from "../../assets/data/store";

export default {
  mixins: [localStorageMixin],
  data() {
    return {
      store,
      cartItems: store.cartItems,
      title: "Cart",
    };
  },
  components: {},
  computed: {},
  methods: {
    // svuota il carrello cliccando il tasto "remove"
    emptyCart(key) {
      this.removeFromLocalStorage(key);
      this.cartItems.splice(0, this.cartItems.length);
      this.updateTotalCartDishes();
    },

    // calcola il prezzo del singolo piatto per la quantità
    singleDishTotalPrice(cartItem) {
      return cartItem.price * cartItem.quantity;
    },

    // calcola il valore totale del carrello
    totalCartValue() {
      let sumPrice = 0;
      for (let i = 0; i < this.cartItems.length; i++) {
        const cartItem = this.cartItems[i];
        sumPrice += cartItem.quantity * cartItem.price;
      }
      return sumPrice;
    },

    // totalCartDishesnumber() {
    //   let cartQuantity = 0;
    //   for (let i = 0; i < this.cartItems.length; i++) {
    //     const cartItem = this.cartItems[i];
    //     cartQuantity += cartItem.quantity;
    //   }
    //   return cartQuantity;
    // },

    removeDish(id, quantity) {
      this.cartItems.splice(this.getIndexItem(id), 1);
      this.sync(store.key, this.cartItems);
      this.updateTotalCartDishes();
    },

    // funzione di utility per determinare l'indice di un piatto nell' array cartItems in base al valore del campo id
    getIndexItem(id) {
      const cartItem = this.cartItems.find((item) => item.id == id);
      const index = this.cartItems.indexOf(cartItem);
      return index;
    },
    incrementCounter(dish) {
      const cartItem = this.cartItems.find((item) => item.id === dish.id);
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
        alert("Questo piatto non può essere aggiunto al carrello perché è di un altro ristorante!");

        document.getElementById("alert").innerHTML = `
      <div class="alert alert-danger" role="alert">
        Puoi ordinare da un ristorante alla volta, svuota il carrello per continuare!
      </div>
      `;
      }
      this.sync(store.key, this.cartItems);
      this.updateTotalCartDishes();
    },

    // riduce la quantity di un piatto nell' array cartItems e se la quantity=0 rimuove il piatto dall' array
    decrementCounter(dishId) {
      const cartItem = this.cartItems.find((item) => item.id === dishId);
      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
      if (cartItem && cartItem.quantity == 0) {
        this.cartItems.splice(this.getIndexItem(dishId), 1);
      }
      this.sync(store.key, this.cartItems);
      this.updateTotalCartDishes();
    },

    // indica la quantità di ogni singolo piatto all' interno dell' array cartItems, se il piatto non è presente nell' array imposta la quantity=0
    getCartItemQuantity(dishId) {
      const cartItem = this.cartItems.find((item) => item.id === dishId);
      return cartItem ? cartItem.quantity : 0;
    },
    updateTotalCartDishes() {
      store.calculateDishesNumber(this.cartItems);
    },
  },

  created() {
    this.updateTotalCartDishes();
  },
};
</script>
<template>
  <div class="">
    <h1>Il tuo carrello</h1>
    <div class="row">
      <div class="col-12" v-for="cartItem in cartItems">
        <div class="card rounded-0 d-flex flex-row align-items-center">
          <div class="col-3">
            <img :src="cartItem.picture" class="img-fluid" :alt="cartItem.name" />
          </div>
          <div class="card-body row">
            <div class="col-6">
              <h5 class="card-title fw-bold">{{ cartItem.name }}</h5>
              <p class="card-text">Prezzo: {{ cartItem.price }}€</p>
            </div>
            <div class="col">
              <p class="card-text text-end">Quantità: {{ cartItem.quantity }}</p>
              <p class="card-text text-end">Prezzo totale: {{ singleDishTotalPrice(cartItem) }}€</p>
            </div>
            <div class="col-3 d-flex flex-column align-items-center">
              <div class="mb-2 fs-4">
                <i class="bi bi-cart-dash" @click="decrementCounter(cartItem.id)"></i>
                {{ getCartItemQuantity(cartItem.id) }}
                <i class="bi bi-cart-plus" @click="incrementCounter(cartItem)"></i>
              </div>

              <button
                class="btn custom-btn mx-3"
                @click="removeDish(cartItem.id, cartItem.quantity)">
                Rimuovi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between mt-5 align-items-baseline">
      <button class="btn custom-btn" @click="emptyCart(store.key)">Svuota Carrello</button>
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
