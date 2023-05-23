<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMobileView: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },

  methods: {
    redirectToPage() {
      window.location.href = "http://127.0.0.1:8000/login";
    },
    handleResize() {
      this.isMobileView = window.innerWidth <= 767; // Imposta la visualizzazione mobile per larghezza <= 767px
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-md fixed-top">
    <div class="container">
      <div class="navbar-brand">
        <img src="../../assets/Logo.svg" alt="logo" class="img-fluid logo" />
        <router-link
          :to="{ name: 'home' }"
          class="btn btn-outline btn-lg custom-btn"
        >
          DeliveBoo
        </router-link>
      </div>
      <div
        class="collapse navbar-collapse d-flex align-items-center"
        id="navbarNav"
      >
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link
              :to="{ name: 'restaurants' }"
              class="btn btn-outline btn-lg custom-btn"
            >
              Ristoranti
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li>
            <router-link :to="{ name: 'cart' }" class="navbar-nav nav-link text-light fs-5 me-2">
              <img src="../../assets/svg-1.svg" alt="" class="ms-2 mt-2" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mobile-icons fixed-top" v-if="isMobileView">
    <!-- icone per la visualizzazione mobile -->
    <div class="mobile-icon text-white d-flex justify-content-evenly">
      <router-link
        :to="{ name: 'home' }"
        class="navbar-nav nav-link text-light fs-5 me-2 fw-bold"
      >
        <i class="bi bi-house-door-fill"></i>
      </router-link>
      <router-link
        :to="{ name: 'restaurants' }"
        class="navbar-nav nav-link text-light fs-5 me-2 fw-bold"
      >
        <i class="bi bi-book"></i>
      </router-link>
      <img src="../../assets/svg-1.svg" alt="" />
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

@media (max-width: 767px) {
  .navbar {
    display: none;
  }

  .mobile-icons {
    display: block;
  }
}
</style>
