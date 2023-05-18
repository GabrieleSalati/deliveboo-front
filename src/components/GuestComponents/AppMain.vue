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
    <div class="container text-center">
      <div class="text-white text-start">
        <h1 class="header-jumbo mb-3">DeliveBoo</h1>
        <h4 class="mb-3">
          Soddisfa la tua fame con <span class="highlight">un click!</span
          ><br />
          Il cibo delizioso viene direttamente
          <span class="highlight">da te.</span>
        </h4>
        <a class="btn btn-outline-light btn-lg" href="#!" role="button"
          >Ordina subito!</a
        >
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

@media (max-width: 767px) {
  .jumbo {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .header-jumbo {
    font-size: 4rem;
  }
  .highlight {
    color: aliceblue;
  }
}
</style>
