<template>
  <div class="container height">
    <div class="d-flex flex-column justify-content-center align-items-center h-100 text-center">
      <h1>Pagamento andato a buon fine, grazie!</h1>
      <h3 class="my-3">Controlla la tua mail per il recap dell' ordine</h3>

      <router-link :to="{ name: 'home' }" class="btn custom-btn fs-5 m-4 fw-bold">
        Torna alla Homepage
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn.custom-btn {
  font-weight: 800;
  color: #bd2222;
  border-color: #bd2222;
  font-weight: 800;
  color: #bd2222;
  border-color: #bd2222;
}

.btn.custom-btn:hover {
  color: #fff;
  background-color: #bd2222;
  color: #fff;
  background-color: #bd2222;
}
.height {
  height: 70vh;
}
</style>
