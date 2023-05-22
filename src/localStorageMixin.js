const localStorageMixin = {
  methods: {
    saveToLocalStorage(key, data) {
      localStorage.setItem(key, JSON.stringify(data));
    },
    getFromLocalStorage(key) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    },
    removeFromLocalStorage(key) {
      localStorage.removeItem(key);
    },
    sync(key, cartItems) {
      let cart = JSON.stringify(cartItems);
      localStorage.setItem(key, cart);
    }
  },
};

export default localStorageMixin;