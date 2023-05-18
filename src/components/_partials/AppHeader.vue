<script>
export default {
  name: "AppHeader",

  methods: {
    redirectToPage(page) {
      if (page === 'login') {
        window.location.href = 'http://127.0.0.1:8000/login';
      } else if (page === 'register') {
        window.location.href = 'http://127.0.0.1:8000/register';
      }
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top mb-5">
    <div class="container">
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li><img src="" alt="" /></li>
          <router-link :to="{ name: 'home' }" class="nav-link">
            DeliveBoo
          </router-link>
          <router-link :to="{ name: 'home' }" class="nav-link">
            Home
          </router-link>
          <router-link :to="{ name: 'restaurants' }" class="nav-link">
            Ristoranti
          </router-link>
        </ul>
        <ul class="navbar-nav ml-auto">
          <button @click="redirectToPage('login')">Login</button>
        </ul>
        <ul class="navbar-nav ml-auto">
          <button @click="redirectToPage('register')">Registrati</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

button {
  border: none;
  border-radius: 50px;
  padding: 0.5rem 2rem;
  margin: 0 0.5rem;
}
</style>
