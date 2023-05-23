<script>
export default {
  name: "AppHeader",

  methods: {
    redirectToPage() {
      window.location.href = "http://127.0.0.1:8000/login";
    },
    toggleNavbar() {
      const navbarCollapse = document.querySelector(".navbar-collapse");
      navbarCollapse.classList.toggle("show");
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" aria-expanded="false"
        aria-label="Toggle navigation" @click="toggleNavbar">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link :to="{ name: 'home' }" class="navbar-nav nav-link text-light fs-5 me-2 fw-bold">
            DeliveBoo
          </router-link>
          <router-link :to="{ name: 'home' }" class="navbar-nav nav-link text-light fs-5 me-2">
            Home
          </router-link>
          <router-link :to="{ name: 'restaurants' }" class="navbar-nav nav-link text-light fs-5 me-2">
            Ristoranti
          </router-link>
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
</template>

<style lang="scss" scoped>
.navbar {
  background-color: #f8d24c;
  height: 4rem;
}

button {
  border: none;
  border-radius: 50px;
  padding: 0.5rem 2rem;
  margin: 0 0.5rem;
}
</style>
