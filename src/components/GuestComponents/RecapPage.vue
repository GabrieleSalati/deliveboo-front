<script>
import Cart from "../GuestComponents/Cart.vue"
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
        }
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
    },
};

</script>

<template>
    <h1>{{ title }}</h1>
    <Cart :cartItems="cartItems" />
    <h2>Contatta il ristoratore:</h2>
    <form action="POST">
        <div class="container">
            <div class="mb-3">
                <label for="total_bill" class="form-label">Total bill</label>
                <input type="number" class="form-control" id="total_bill" placeholder="00">
            </div>
            <div class="mb-3">
                <label for="bill_no_shipping" class="form-label">Without shipping cost</label>
                <input type="number" class="form-control" id="bill_no_shipping" placeholder="00">
            </div>
            <div class="mb-3">
                <label for="guest_name" class="form-label">Customer</label>
                <input type="text" class="form-control" id="guest_name" placeholder="Germano Mosconi">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Customer email</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com">
            </div>
            <div class="mb-3">
                <label for="address" class="form-label">Customer address</label>
                <input type="text" class="form-control" id="address" placeholder="Via Tacchino 12">
            </div>
            <div class="mb-3">
                <label for="telephone" class="form-label">Phone number</label>
                <input type="text" class="form-control" id="telephone" placeholder="367859857">
            </div>
            <button type="submit">Ordina e paga!</button>
        </div>
    </form>
</template>

<style lang="scss" scoped></style>