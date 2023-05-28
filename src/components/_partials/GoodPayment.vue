<template>
  <div class="h-100">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <h1>Pagamento andato a buon fine! Grazie!</h1>
      <h3>Controlla la tua mail per il recap dell' ordine</h3>

      <router-link :to="{ name: 'home' }" class="btn custom-btn fs-5 me-2 fw-bold">
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
</style>
