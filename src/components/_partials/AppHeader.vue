<script>
import { store } from "../../assets/data/store";
import localStorageMixin from "../../localStorageMixin.js";
import Cart from "../GuestComponents/Cart.vue";

export default {
  mixins: [localStorageMixin],
  name: "AppHeader",
  data() {
    return {
      store,
      isMobileView: false,
      showCart: false,
    };
  },
  computed: {
    totalCartDishesNumber() {
      return store.totalCartDishesnumber;
    },
  },
  created() {
    // this.updateTotalCartDishes();
    this.init();
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // updateTotalCartDishes() {
    //   store.calculateDishesNumber(store.cartItems);
    // },
    init() {
      store.cartItems = this.getFromLocalStorage(store.key) || [];
    },
    redirectToPage() {
      window.location.href = "http://127.0.0.1:8000/login";
    },
    handleResize() {
      this.isMobileView = window.innerWidth <= 767; // Imposta la visualizzazione mobile per larghezza <= 767px
    },
    toggleCart() {
      this.showCart = !this.showCart;
    },
  },
  components: { Cart },
};
</script>

<template>
  <nav class="navbar navbar-expand-md fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'home' }" class="">
          <img src="../../assets/Logo.svg" alt="logo" class="img-fluid logo" />
        </router-link>
      </div>
      <div class="collapse navbar-collapse d-flex align-items-center" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'restaurants' }" class="btn btn-outline btn-lg custom-btn">
              Ristoranti
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="cart-icon">
            <!-- CONTATORE DISH -->
            <span class="text-danger dish-badge ms-5"
              ><strong>{{ store.totalCartDishesnumber }}</strong></span
            >

            <img src="../../assets/svg-1.svg" alt="" class="ms-2 mt-2" @click="toggleCart" />
            <div class="d-none bg-light" :class="{ 'show-cart': showCart }">
              <div class="container-fluid my-3">
                <Cart />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mobile-icons fixed-top m-0 p-0" v-if="isMobileView">
    <!-- icone per la visualizzazione mobile -->
    <div class="mobile-icon text-white d-flex align-items-center justify-content-evenly">
      <router-link
        :to="{ name: 'home' }"
        class="navbar-nav nav-link text-light fs-5 me-2 fw-bold h-100">
        <img src="../../assets/Logo.svg" alt="logo" class="mobile-logo img-fluid logo" />
      </router-link>
      <router-link
        :to="{ name: 'restaurants' }"
        class="navbar-nav nav-link text-light fs-5 me-2 fw-bold">
        <i class="bi bi-book"></i>
      </router-link>
      <!-- CONTATORE DISH -->
      <div class="cart-icon">
        <span class="text-danger dish-badge ms-5"
          ><strong>{{ store.totalCartDishesnumber }}</strong></span
        >
        <img src="../../assets/svg-1.svg" alt="" @click="toggleCart" />
        <div class="d-none bg-light" :class="{ 'show-cart': showCart }">
          <div class="container-fluid my-3">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #f8d24c;
  height: 4rem;
}

.logo {
  height: 3.8rem;
  margin-right: 1rem;
}

.btn.custom-btn {
  font-weight: 800;
  color: #bd2222;
  border-color: 0;
}

.btn.custom-btn:hover {
  color: #fff;
  border-color: #bd2222;
  background-color: #bd2222;
}

.cart-icon {
  position: relative;
}
.dish-badge {
  position: absolute;
  top: 7px;
  right: 26px;
  font-size: 0.9rem;
  background-color: white;
  margin: 0;
  padding: 0;
  padding: 1px 2px;
  line-height: 0.9rem;
  border-radius: 4px;
}

.mobile-icons {
  display: none;
  background-color: #f8d24c;
  padding: 1rem;
}

.mobile-icon {
  color: #ffffff;
  font-size: 1.5rem;
}

.mobile-icon > img {
  width: 1.5rem;
  height: 1.5rem;
  align-self: center;
}

.show-cart {
  display: block !important;
  position: absolute;
  // bottom: 0;
  right: 0;
  width: 25vw;
  min-width: 350px;
  max-height: 80vh;
  // overflow-y: auto;
  overflow: auto;
}

@media (max-width: 767px) {
  .navbar {
    display: none;
  }

  .mobile-icons {
    display: block;
  }

  .mobile-logo {
    height: 2.5rem;
    margin: 0;
    padding: 0;
  }
}
</style>
