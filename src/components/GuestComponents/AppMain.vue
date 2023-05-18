<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "App Main",

      categories: [],
    };
  },

  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios
        .get("http://127.0.0.1:8000/api/categories")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <!-- JUMBOTRON -->
  <section class="jumbo mt-5">
    <!-- <div class="p-5 container text-center bg-image">
      <div class="mask d-flex align-items-center justify-content-center">
        <div class="text-white">
          <h1 class="mb-3">I piatti che ami, a domicilio.</h1>
          <h4 class="mb-3">Subheading</h4>
          <a class="btn btn-outline-light btn-lg" href="#!" role="button"
            >Call to action</a
          >
        </div>
      </div>
    </div> -->
  </section>

  <!-- SEARCH TAG SECTION -->
  <section class="search-tag container my-5">
    <h2>I tuoi Piatti preferiti, consegnati da noi</h2>

    <!-- CATEGORY CARDS -->

    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mt-3"
    >
      <div v-for="category in categories" :key="category.id" class="col">
        <div class="card position-relative">
          <img :src="category.picture" class="card-img" alt="..." />
          <div
            class="card-img-overlay d-flex align-items-center justify-content-center"
          >
            <h5 class="card-title text-center text-light">
              {{ category.label }}
            </h5>
          </div>
        </div>
      </div>

      <!-- Colonna vuota per centrare l'ultima card -->
    </div>
  </section>
</template>

<style lang="scss">
.jumbo {
  background-image: url(../../assets/jumbo-.svg);
  background-position: center top;
  background-size: cover; /* Aggiunto per adattare l'immagine */

  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
}

.jumbo .text-white {
  position: relative;
  z-index: 1;
}

.card-img {
  object-fit: cover;
  height: 200px;
}

.card-img-overlay {
  opacity: 0;
  background-color: rgba(255, 165, 0, 0.8);
  transition: opacity 0.3s ease;
}

.card:hover .card-img-overlay {
  opacity: 1;
}

.card-title {
  font-size: 18px;
}
</style>
