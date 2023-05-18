<script>
export default {
  name: "AppHeader",

  methods: {
    redirectToPage() {
      window.location.href = "http://127.0.0.1:8000/login";
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link
            :to="{ name: 'home' }"
            class="navbar-nav nav-link text-danger fs-6 me-2 fw-bold"
          >
            DeliveBoo
          </router-link>
          <router-link
            :to="{ name: 'home' }"
            class="navbar-nav nav-link text-danger fs-6 me-2"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'restaurants' }"
            class="navbar-nav nav-link text-danger fs-6 me-2"
          >
            Ristoranti
          </router-link>
          <button @click="redirectToPage" class="nav-link text-danger fs-6">
            Sei un ristoratore?
          </button>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li>
            <img src="../../assets/svg-1.svg" alt="" class="ms-2 mt-2" />
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
</style>
