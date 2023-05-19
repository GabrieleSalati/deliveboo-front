<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "Restaurant Show",
    };
  },
};
</script>

<template>
  <!-- <div>
    <h1>{{ title }}</h1>
    <div class="card" v-if="restaurant">
      <div class="card-body">
        <h5 class="card-title">{{ restaurant.restaurant_name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ restaurant.address }}</h6>
        <p class="card-text">{{ restaurant.description }}</p>
        <p class="card-text">P.IVA: {{ restaurant.p_iva }}</p>
      </div>
    </div>
  </div> -->

  <!-- PLACEHOLDER CARD DA MODIFY -->
  <div class="container my-5">
    <div class="card mb-3">
      <img
        src="../../assets/jumbo-.svg"
        class="card-img-top img-fluid"
        alt="..."
      />
      <div class="card-body">
        <div class="info-restaurant text-center">
          <h5 class="card-title fs-1">Mythos</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p>Category: Pizza, Pizza, Pizza</p>
        </div>
        <div class="menu">
          <div class="list-group my-5" id="myList" role="tablist">
            <li class="list-group-item text-center fw-bold fs-2">Menu</li>
            <div
              class="list-group-item list-group-item-action d-flex justify-content-center"
            >
              <img
                src="../../assets/jumbo-.svg"
                class="card-img-top img-fluid"
                alt=""
              />
              <div class="text-start px-4 py-3">
                <h4>Nome piatto</h4>
                <p>
                  Descrizione: Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Adipisci porro soluta laborum, at fugiat
                  architecto quidem nostrum illum eligendi.
                </p>
                <p>Prezzo:12</p>
                <div>
                  <i class="bi bi-cart-plus"></i>
                  <i class="bi bi-cart-dash"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="card-text">
          <small class="text-body-secondary">P. IVA: 11111111111</small>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-img-top {
  height: 30vh;
  width: auto;
}
.list-group-item .list-group-item-action .text-center {
  background-color: #bd2222;
}
</style>
