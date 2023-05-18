<script>
export default {
  name: "AppHeader",
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
          <li><img src="" alt="" /></li>
          <router-link :to="{ name: 'home' }" class="nav-link">
            <span class="nav-link fw-bold fs-4">DeliveBoo</span>
          </router-link>
          <router-link :to="{ name: 'home' }" class="nav-link">
            Home
          </router-link>
          <router-link :to="{ name: 'restaurants' }" class="nav-link">
            Ristoranti
          </router-link>
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
  background-color: #f8d24c;
}

.navbar-nav {
  display: flex;
  align-items: center;
}

.nav-link {
  color: #bd2222;
  margin-right: 1rem;
}
</style>
