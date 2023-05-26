<script>
import axios from "axios";
import Loader from "../_partials/Loader.vue";
import localStorageMixin from "../../localStorageMixin.js";

export default {
  mixins: [localStorageMixin],
  data() {
    return {
      restaurants: [],
      categories: [],
      selectedCategories: [],
      loading: true, // Variabile che indica se il loader deve essere visualizzato o meno
      id: ["ciao", "ciao2"], //serve?
      key: "chiave", //serve?
    };
  },

  components: {
    Loader,
  },
  computed: {
    filteredRestaurants() {
      if (this.selectedCategories.length > 0) {
        return this.restaurants.filter((restaurant) => {
          for (const category of restaurant.categories) {
            if (this.selectedCategories.includes(category.label)) {
              return true;
            }
          }
          return false;
        });
      } else {
        return this.restaurants;
      }
    },
  },
  methods: {
    fetchRestaurants() {
      // Mostra il loader prima di avviare la chiamata API
      this.loading = true;
      axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
        this.restaurants = response.data;
        // console.log(this.restaurants);
        this.loading = false; // Nasconde il loader quando i dati sono stati caricati
      });
    },
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
    checkboxChecked(label) {
      return this.selectedCategories.includes(label);
    },
    toggleCheckbox(label) {
      if (this.selectedCategories.includes(label)) {
        this.selectedCategories = this.selectedCategories.filter((category) => category !== label);
      } else {
        this.selectedCategories.push(label);
      }
    },
  },

  created() {
    this.fetchRestaurants();
    this.fetchCategories();
    if (this.$route.params.label) {
      this.selectedCategories.push(this.$route.params.label);
    }
    // this.saveToLocalStorage(this.id, 123);
    this.sync(this.id, this.key);
  },
};
</script>

<template>
  <Loader v-if="loading" />

  <section class="bg mt-5 pb-5" style="margin-bottom: -1px">
    <div class="container py-5 text-center text-white">
      <h1 class="mb-4 fw-bold">Scopri i ristoranti più apprezzati della nostra città.</h1>
      <h4>A casa tua a tempo <span style="color: #f8d24c"> di click!</span></h4>
    </div>

    <div class="bg-category container shadow-sm">
      <h4 class="fs-2 ms-3 mb-2" style="color: #bd2222">Scegli cosa mangiare:</h4>
      <div class="form-check form-check-inline my-2 mx-0" v-for="category in categories">
        <input
          class="btn-check"
          type="checkbox"
          :value="category.label"
          v-model="selectedCategories"
          autocomplete="off" />
        <!-- forse  :for="category.id qui sotto -->

        <button
          type="button"
          class="btn category-btn m-0"
          :class="{
            customActive:
              selectedCategories.includes(category.label) && checkboxChecked(category.label),
          }"
          data-bs-toggle="button"
          :id="'toggleBtn-' + category.id"
          @click="toggleCheckbox(category.label)">
          <img class="btn m-0 p-0 category-img" :src="category.picture" alt="" />
          <span class="btn-label">{{ category.label }}</span>
        </button>
      </div>
    </div>
  </section>
  <!-- WAVE SVG -->
  <svg
    class="wave"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 100"
    preserveAspectRatio="none">
    <path
      class="wavePath-haxJK1 animationPaused-2hZ4IO"
      d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z"
      fill="currentColor"></path>
  </svg>

  <!-- CARDS GRID -->

  <div class="container card-group pb-5">
    <div class="row justify-content-center">
      <div class="col-lg-4 col-md-6 col-sm-12 g-5" v-for="restaurant in filteredRestaurants">
        <div class="card h-100 border shadow-lg">
          <img
            :src="restaurant.picture"
            class="card-img-top restaurant-picture img-fluid"
            alt="Picture" />
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title text-center fw-bold mb-1">
              {{ restaurant.restaurant_name }}
            </h5>

            <h6 class="card-text text-center">
              <i class="bi bi-geo-alt"></i> In {{ restaurant.address }}
            </h6>

            <div class="row justify-content-center">
              <div class="d-flex align-items-center justify-content-center flex-wrap">
                <p class="m-0 me-2">Cosa si mangia?</p>
                <div v-for="category in restaurant.categories" class="">
                  <span class="card-text badge rounded-pill text-bg-danger">{{
                    category.label
                  }}</span>
                </div>
              </div>
            </div>

            <router-link
              :to="{
                name: 'restaurant-card',
                params: {
                  id: restaurant.id,
                },
              }"
              class="nav-link d-flex justify-content-center mt-1">
              <button class="btn custom-btn">Vai al Menu</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg {
  background-color: #bd2222;
}

.bg-category {
  background-color: #ffffff;
  height: auto;
  border-radius: 50px;
  padding: 2rem;
}

.restaurant-picture {
  height: 45%;
}

.btn.custom-btn {
  font-weight: 800;
  color: #bd2222;
  border-color: #bd2222;
}
.category-btn {
  width: 120px;
  height: 50px;
  font-weight: 800;
  padding: 1px;
  color: #c51616;
  border-color: #bd2222;
  position: relative;
}

.btn.custom-btn:hover,
.btn.category-btn:hover {
  color: #fff;
  background-color: rgba(189, 34, 34, 0.705);
}

button.btn.custom-btn.customActive,
.btn.category-btn.customActive {
  color: #c51616;
  background-color: #f8d24c;
}

.wave {
  color: #bd2222;
  display: block;
  transform: scaleY(-1);
}

.category-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  opacity: 50%;
}
.btn-label {
  position: absolute;
  font-size: 1.2rem;
  transform: translate(50%, -50%);
  right: 50%;
  top: 50%;
}
</style>
