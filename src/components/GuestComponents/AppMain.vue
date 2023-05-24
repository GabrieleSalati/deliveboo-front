<script>
import axios from "axios";
import Loader from "../_partials/Loader.vue";

export default {
  data() {
    return {
      title: "App Main",
      loading: true, // Variabile che indica se il loader deve essere visualizzato o meno
      categories: [],
    };
  },

  components: {
    Loader,
  },

  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      // Mostra il loader prima di avviare la chiamata API
      this.loading = true;
      axios
        .get("http://127.0.0.1:8000/api/categories")
        .then((response) => {
          this.categories = response.data;
          this.loading = false; // Nasconde il loader quando i dati sono stati caricati
        })
        .catch((error) => {
          console.error(error);
          this.loading = false; // Nasconde il loader anche in caso di errore
        });
    },
  },
};
</script>

<template>
  <Loader v-if="loading" />

  <!-- JUMBOTRON -->
  <section class="jumbo mt-5 justify-content-center w-100 mx-0">
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <div
          class="col col-lg-8 col-md-8 d-flex aling-items-evenly justify-content-center pe-0"
        >
          <div class="jumbo-text text-white text-start">
            <h1 class="header-jumbo mb-2">DeliveBoo</h1>
            <h3 class="header-txt mb-2">
              Soddisfa la tua fame con <span class="highlight">un click!</span
              ><br />
              Il cibo delizioso viene direttamente
              <span class="highlight">da te.</span>
            </h3>

            <router-link
              :to="{ name: 'restaurants' }"
              class="btn jumbo-custom-btn custom-btn my-2"
            >
              Ordina subito!
            </router-link>
          </div>
        </div>
        <div
          class="col col-lg-4 col-md-4 d-flex justify-content-md-center align-self-end pb-0 mb-0 pe-0 me-0 flex-shrink-1"
        >
          <img
            class="motorino img-fluid"
            src="../../assets/motorino.png"
            alt="motorino"
          />
        </div>
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

    <div
      class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center mt-3"
    >
      <div v-for="category in categories" :key="category.id" class="col">
        <div class="card position-relative zoom-effect shadow-sm">
          <router-link
            :to="{
              name: 'restaurants',
              params: {
                label: category.label,
              },
            }"
          >
            <img :src="category.picture" class="card-img" alt="..." />
            <div
              class="card-img-overlay text-light d-flex align-items-center justify-content-center"
            >
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
  background-image: url(../../assets/jumbo-.png);
  background-position: center bottom;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  width: auto;
  display: flex;
  align-items: flex-end;
}

.motorino {
  height: auto;
  max-width: 100%;
  object-fit: cover;
}

// .jumbo-text {
//   margin-left: 25%;
// }

.jumbo .text-white {
  position: relative;
  z-index: 1;
}
h4:hover .highlight {
  /* Stili al passaggio del mouse sull'h1 */
  font-weight: 900;
  color: #bd2222;

  /* Transizione */
  transition: font-weight 0.3s ease, color 0.3s ease;
}

h3:hover .highlight {
  /* Stili al passaggio del mouse sull'h1 */
  font-weight: 900;
  color: #f8d24c;

  /* Transizione */
  transition: font-weight 0.3s ease, color 0.3s ease;
}
.highlight {
  color: #f8d24c;
}

.header-jumbo {
  font-size: 7rem;
}

.card-img {
  object-fit: cover;
  height: 200px;
}

.zoom-effect {
  transform: scale(1);
  transition: transform 0.3s ease;
}

.zoom-effect:hover {
  transform: scale(1.05);
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

.jumbo-custom-btn {
  background-color: #bd2222;
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
  }

  .jumbo .d-flex {
    justify-content: center;
    align-items: flex-end;
  }

  .motorino {
    // height: 15rem;
    // width: auto;
    margin-top: auto;
    margin-bottom: 0;
  }

  .bg-mobile {
    // background-color: #f8d24c;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .bg-mobile > h3 > .highlight {
    color: #f8d24c;
  }

  .jumbo-text {
    padding-left: 0;
    margin-left: 0;
    // background-image: url(../../assets/bg-text.png);
    // background-size: contain;
    // background-repeat: no-repeat;
    // background-position: center;
  }
  .header-jumbo {
    font-size: 3rem;
  }

  .highlight {
    color: inherit;
  }
}
</style>
