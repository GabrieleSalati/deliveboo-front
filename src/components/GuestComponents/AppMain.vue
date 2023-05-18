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
    <div class="p-5 container text-center">
      <div class="d-flex align-items-center justify-content-start">
        <div class="text-white text-start">
          <h1 class="header mb-1">DeliveBoo</h1>
          <h4 class="mb-3">
            Soddisfa la tua fame con <span class="highlight">un click!</span
            ><br />
            Il cibo delizioso viene direttamente
            <span class="highlight">da te.</span>
          </h4>
          <a class="btn btn-outline-light btn-lg" href="#!" role="button"
            >Call to action</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.jumbo {
  background-image: url(../../assets/jumbo-.svg);
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: start;
  text-align: center;
}

.jumbo .text-white {
  position: relative;
  z-index: 1;
}

.highlight {
  color: #f8d24c;
  font-weight: 900;
}

.header {
  font-size: 7rem;
}
</style>
