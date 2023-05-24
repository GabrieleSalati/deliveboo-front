import { reactive } from "vue";
export const store = reactive({
  totalCartDishesnumber:0,
  cartItems: [],
  key: "carrello",
  calculateDishesNumber(cartItems) {
    this.totalCartDishesnumber = 0;
    for (let i = 0; i < cartItems.length; i++) {
      const quantityEl = cartItems[i].quantity;
      this.totalCartDishesnumber += quantityEl;
    }
  }
});