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
  <nav class="navbar navbar-expand-md">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          :to="{ name: 'home' }"
          class="navbar-nav nav-link text-light fs-5 me-2 fw-bold"
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
              class="navbar-nav nav-link text-light fs-5 me-2"
            >
              Ristoranti
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li>
            <img src="../../assets/svg-1.svg" alt="" class="ms-2 mt-2" />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="mobile-icons" v-if="isMobileView">
    <!-- Aggiungi qui le icone per la visualizzazione mobile -->
    <!-- Esempio: -->
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
  <!-- <nav class="navbar navbar-expand-lg">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <div class="navbar-brand" href="#">
          <router-link
            :to="{ name: 'home' }"
            class="navbar-nav nav-link text-light fs-5 me-2 fw-bold"
          >
            DeliveBoo
          </router-link>
        </div>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              :to="{ name: 'restaurants' }"
              class="navbar-nav nav-link text-light fs-5 me-2"
            >
              Ristoranti
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li>
            <img src="../../assets/svg-1.svg" alt="" class="ms-2 mt-2" />
          </li>
        </ul>
      </div>
    </div>
  </nav> -->
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #f8d24c;
  height: 4rem;
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
