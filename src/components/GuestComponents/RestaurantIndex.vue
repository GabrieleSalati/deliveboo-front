<script>
import axios from "axios";
import AppFooter from "../_partials/AppFooter.vue";

export default {
  data() {
    return {
      restaurants: [],
      categories: [],
      selectedCategories: [],
    };
  },

  components: {
    AppFooter,
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
      axios.get("http://127.0.0.1:8000/api/restaurants").then((response) => {
        this.restaurants = response.data;
        console.log(this.restaurants);
      });
    },
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
    const category = this.$route.query.category;

    // Verifica se il parametro di query è presente e aggiungilo all'array "selectedCategories"
    if (category) {
      this.selectedCategories.push(category.label);
    }
  },
};
</script>

<template>
  <section class="bg pb-5">
    <div class="container py-5 text-center text-white">
      <h1 class="mb-4 fw-bold">Scopri i ristoranti più apprezzati della nostra città.</h1>
      <h4>A casa tua a tempo <span style="color: #f8d24c"> di click!</span></h4>
    </div>

    <div class="bg-category container shadow-lg">
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
          class="btn custom-btn"
          :class="{
            customActive:
              selectedCategories.includes(category.label) && checkboxChecked(category.label),
          }"
          data-bs-toggle="button"
          :id="'toggleBtn-' + category.id"
          @click="toggleCheckbox(category.label)">
          {{ category.label }}
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
        <div class="card h-100 border-0 shadow-lg">
          <img
            :src="restaurant.picture"
            class="card-img-top restaurant-picture img-fluid"
            alt="Picture" />
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title text-center fw-bold mb-1">
              {{ restaurant.restaurant_name }}
            </h5>

            <div class="d-flex align-items-center justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-geo-alt"
                viewBox="0 0 16 16">
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
              <h6 class="card-text text-center">In {{ restaurant.address }}</h6>
            </div>

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

            <router-link :to="{ name: 'menu' }" class="nav-link d-flex justify-content-center mt-1">
              <button class="btn custom-btn">Vai al Menu</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <AppFooter />
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

.btn.custom-btn:hover {
  color: #fff;
  background-color: #bd2222;
}

button.btn.custom-btn.customActive {
  color: #bd2222;
  background-color: #f8d24c;
}

.wave {
  color: #bd2222;
  display: block;
  transform: scaleY(-1);
}
</style>
