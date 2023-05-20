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
  <section class="jumbo">
    <div class="container text-center">
      <div class="text-white text-start ps-5">
        <h1 class="header-jumbo mb-2">DeliveBoo</h1>
        <h4 class="header-txt mb-4">
          Soddisfa la tua fame con <span class="highlight">un click!</span><br />
          Il cibo delizioso viene direttamente
          <span class="highlight">da te.</span>
        </h4>
        <router-link :to="{ name: 'restaurants' }" class="btn btn-outline-light btn-lg custom-btn">
          Ordina subito!
        </router-link>
      </div>
    </div>
  </section>

  <!-- SEARCH TAG SECTION -->
  <section class="search-tag container my-5">
    <h2 class="fs-1 fw-bold">I tuoi Piatti preferiti, consegnati da noi.</h2>
    <h4>
      Di cosa hai voglia oggi? <span class="highlight">Lasciati ispirare!</span>
    </h4>

    <!-- CATEGORY CARDS -->

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mt-3">
      <div v-for="category in categories" :key="category.id" class="col">
        <div class="card position-relative">
          <router-link :to="{
            name: 'restaurants', params: {
              id: category.id
            }
          }">
            <img :src="category.picture" class="card-img" alt="..." />
            <div class="card-img-overlay text-light d-flex align-items-center justify-content-center">
              <h5 class="label-category align-center text-center fs-2">
                {{ category.label }}
              </h5>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.jumbo {
  background-image: url(../../assets/jumbo-.svg);
  background-position: center bottom;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  display: flex;
  align-items: center;
}

.jumbo .text-white {
  position: relative;
  z-index: 1;
}

.highlight {
  color: #f8d24c;
  font-weight: 900;
}

.header-jumbo {
  font-size: 7rem;
}

.card-img {
  object-fit: cover;
  height: 200px;
}

.card-img-overlay {
  opacity: 0;
  background-color: rgba(248, 210, 76, 0.8);
  transition: opacity 0.3s ease;
}

.card:hover .card-img-overlay {
  opacity: 1;
}

.label-category {
  font-weight: 800;
  font-size: 2rem;
}

.btn.custom-btn {
  font-weight: 800;
  color: #f8d24c;
  border-color: #f8d24c;
}

.btn.custom-btn:hover {
  color: #fff;
  background-color: #f8d24c;
}

@media (max-width: 767px) {
  .jumbo {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .header-jumbo {
    font-size: 3rem;
  }

  .highlight {
    color: inherit;
  }
}
</style>
