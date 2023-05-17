<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
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
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <router-link :to="{ name: 'login' }" class="nav-link">
            Login
          </router-link>
          <router-link :to="{ name: 'user-form' }" class="nav-link">
            Registrati
          </router-link>
          <router-link :to="{ name: 'dish-form' }" class="nav-link">
            Crea Piatto
          </router-link>
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
</style>
