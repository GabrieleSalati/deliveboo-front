<script>
import Cart from "../GuestComponents/Cart.vue";
import localStorageMixin from "../../localStorageMixin.js";
import axios from "axios";

export default {
    mixins: [localStorageMixin],

    data() {
        return {
            title: "Ordina e paga!",
            restaurant: {}, //ristorante
            cartItems: [], //carrello
            dishesList: [], //products
            // index: null,
            totalCartDishesnumber: 0,
            key: "carrello",

            formData: {
                guestName: '',
                email: '',
                address: '',
                telephone: '',
            },
        };
    },

    components: {
        Cart,
    },
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

        // incrementCounter(dishId) {
        //   // TODO portare come parametro il piatto intero e confrontare gli id
        //   const cartItem = this.cartItems.find((item) => item.id === dishId);
        //   if (cartItem) {
        //     cartItem.quantity++;
        //   } else {
        //     let arr = this.dishesList.filter((dish) => {
        //       if (dish.id === dishId) {
        //         console.log("oggeto trovato dal filter", dish);
        //         return true;
        //       }
        //     });
        //     if (arr && arr[0]) {
        //       let obj = {
        //         id: arr[0].id,
        //         restaurant_id: arr[0].restaurant_id,
        //         name: arr[0].name,
        //         quantity: 1,
        //         price: arr[0].price,
        //         picture: arr[0].picture,
        //       };
        //       this.cartItems.push(obj);
        //       this.sync(this.key, this.cartItems);
        //       // this.cartItems.push({
        //       //   dishId: dishId,
        //       //   quantity: 1,

        //       // });
        //     } else {
        //       //product id does not exist in products data
        //       console.error("Invalid Product");
        //     }
        //     console.log(this.cartItems);
        //   }
        // },
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
        // incrementCounter(dishId) {
        //   // TODO portare come parametro il piatto intero e confrontare gli id
        //   const cartItem = this.cartItems.find((item) => item.dishId === dishId);
        //   if (cartItem) {
        //     cartItem.quantity++;
        //   } else {
        //     this.cartItems.push({
        //       dishId: dishId,
        //       quantity: 1,
        //     });
        //   }
        //   console.log(this.cartItems);
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

        handleSubmit(event) {
            event.preventDefault();
            axios.post('/api/submit', this.formData)
                .then(response => {
                    // Gestisci la risposta
                })
                .catch(error => {
                    // Gestisci l'errore
                });
        },
    },
};
</script>

<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <Cart :cartItems="cartItems" />
        <h2 class="my-5">Contatta il ristoratore:</h2>
        <form @submit="handleSubmit">
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
                    <label for="exampleFormControlInput1" class="form-label">Customer</label>
                    <input v-model="formData.guestName" type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Germano Mosconi" />
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleFormControlInput1" class="form-label">Customer email</label>
                    <input v-model="formData.email" type="email" class="form-control" id="exampleFormControlInput1"
                        placeholder="name@example.com" />
                </div>
                <div class="mb-3 col-6">
                    <label for="exampleFormControlInput1" class="form-label">Customer address</label>
                    <input v-model="formData.address" type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="Via Tacchino 12" />
                </div>
                <div class="mb-5 col-6">
                    <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                    <input v-model="formData.telephone" type="text" class="form-control" id="exampleFormControlInput1"
                        placeholder="367859857" />
                </div>
                <div class="mb-3 col-12 d-flex justify-content-center">
                    <button type="submit">Ordina e paga!</button>
                </div>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped></style>
