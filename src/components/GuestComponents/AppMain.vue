<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "App Main",

      categories: [],
    };
  },

  // !!chiamata axios per le category!!
  // created() {
  //   axios
  //     .get("/api/categories")
  //     .then((response) => {
  //       this.categories = response.data;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // },
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <!-- JUMBOTRON -->
  <section class="jumbo container">
    <div class="p-5 text-center bg-image">
      <div class="mask d-flex align-items-center justify-content-center">
        <div class="text-white">
          <h1 class="mb-3">I piatti che ami, a domicilio.</h1>
          <h4 class="mb-3">Subheading</h4>
          <a class="btn btn-outline-light btn-lg" href="#!" role="button"
            >Call to action</a
          >
        </div>
      </div>
    </div>
  </section>

  <!-- SEARCH TAG SECTION -->
  <section class="search-tag container my-5">
    <h2>I tuoi Piatti preferiti, consegnati da noi</h2>

    <div v-for="category in categories" :key="category.id" class="card">
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-6">
        <div class="col">
          <div class="card text-bg-dark">
            <img :src="category.picture" class="img-fluid" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title text-center">{{ category.label }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.jumbo {
  background-image: url(https://images.pexels.com/photos/13443799/pexels-photo-13443799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-position: center bottom;
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
</style>
