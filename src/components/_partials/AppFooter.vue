<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  methods: {
    redirectToPage() {
      window.location.href = "http://127.0.0.1:8000/login";
    },
  }
};
</script>

<template>
  <!-- Footer -->
  <footer class="text-center text-lg-start text-light">
    <!-- Section: Links  -->
    <section>
      <div class="container text-center text-md-start pt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="block col-md-3 col-lg-4 col-xl-3 mx-1 mb-4 pt-3 rounded">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">DeliveBoo</h6>
            <p>
              DeliveBoo è un servizio di consegna di cibo online che ti permette
              di ordinare il tuo cibo preferito dai migliori ristoranti locali e
              riceverlo comodamente a casa tua. Ordina subito!
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="block col-md-3 col-lg-3 col-xl-2 mx-1 mb-4 pt-3 rounded">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4 text-center">Menu Rapido</h6>
            <p class="text-center">
              <router-link :to="{ name: 'home' }" class="nav-link text-light">
                Home
              </router-link>
            </p>
            <p class="text-center">
              <router-link :to="{ name: 'restaurants' }" class="nav-link text-light">
                Ristoranti
              </router-link>
            </p>
            <p>
              <button @click="redirectToPage" class="nav-link text-light">
                Sei un ristoratore?
              </button>
            </p>
            <p class="text-center">
              <a href="#!" class="text-reset">Chi Siamo</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="block col-md-2 col-lg-3 col-xl-2 mx-1 mb-4 pt-3 rounded">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4 text-center">Note Legali</h6>
            <p>
              <a href="#!" class="text-reset">Termini & Condizioni</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Informativa sulla privacy</a>
            </p>
            <p>
              <a href="#!" class="text-reset">Cookies</a>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="block col-md-3 col-lg-4 col-xl-3 mx-1  mb-4  pt-3 rounded">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">I nostri Contatti</h6>
            <p>
              <a href="https://www.linkedin.com/in/thomasbasadonne" class="text-reset">Thomas Basadonne</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/sofia-curreri-38b281276" class="text-reset">Sofia Curreri</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/hadolph-mercogliano-00016b275/" class="text-reset">Hadolph
                Mercogliano</a>
            </p>
            <p>
              <a href="https:/www.linkedin.com/in/gabriele-salati-910091275" class="text-reset">Gabriele Salati</a>
            </p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="#">DeliveBoo.com</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</template>

<style lang="scss" scoped>
footer {
  background-color: #2e3333;
}

.block {
  background-color: #484b4b;
}

a {
  text-decoration: none;
}

button {
  width: 100%;
}
</style>
