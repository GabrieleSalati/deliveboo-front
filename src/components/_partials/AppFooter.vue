<script>
export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  methods: {
    redirectToPage() {
      window.location.href = "http://127.0.0.1:8000/";
    },
  },
};
</script>

<template>
  <!-- Footer -->
  <footer class="text-sm-center text-lg-start text-light">
    <!-- Section: Links  -->
    <section>
      <div class="container text-center pt-5">
        <!-- Grid row -->
        <div class="row mt-3 d-flex justify-content-between custom-row">
          <!-- Grid column -->
          <div class="bg-block col-lg-3 col-md-6 col-sm-12 mb-4 pt-3 rounded">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">DeliveBoo</h6>
            <p>
              DeliveBoo è un servizio di consegna di cibo online che ti permette
              di ordinare il tuo cibo preferito dai migliori ristoranti locali e
              riceverlo comodamente a casa tua. Ordina subito!
            </p>
          </div>

          <!-- Grid column -->
          <div class="bg-block col-lg-3 col-md-6 col-sm-12 mb-4 pt-3 rounded">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4 text-center">Menu Rapido</h6>
            <p>
              <router-link :to="{ name: 'home' }" class="nav-link text-light">
                Home
              </router-link>
            </p>
            <p>
              <router-link
                :to="{ name: 'restaurants' }"
                class="nav-link text-light"
              >
                Ristoranti
              </router-link>
            </p>
            <div class="my-3 d-flex justify-content-center">
              <button @click="redirectToPage" class="nav-link text-light">
                Sei un ristoratore?
              </button>
            </div>

            <p>
              <a href="#!" class="text-reset">Chi Siamo</a>
            </p>
          </div>

          <!-- Grid column -->
          <div class="bg-block col-lg-3 col-md-6 col-sm-12 mb-4 pt-3 rounded">
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
          <div class="bg-block col-lg-3 col-md-6 col-sm-12 mb-4 pt-3 rounded">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">I nostri Contatti</h6>
            <p>
              <a
                href="https://www.linkedin.com/in/thomasbasadonne"
                class="text-reset"
                >Thomas Basadonne</a
              >
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/sofia-curreri-38b281276"
                class="text-reset"
                >Sofia Curreri</a
              >
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/hadolph-mercogliano-00016b275/"
                class="text-reset"
                >Hadolph Mercogliano</a
              >
            </p>
            <p>
              <a
                href="https:/www.linkedin.com/in/gabriele-salati-910091275"
                class="text-reset"
                >Gabriele Salati</a
              >
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Copyright -->
    <div class="text-center p-4">
      © 2023 Copyright:
      <a class="text-reset fw-bold" href="#">DeliveBoo.com</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #2e3333;
}

.bg-block {
  background-color: #484b4b;
}

a {
  text-decoration: none;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .bg-block {
    max-width: 40%;
  }
  .custom-row {
    justify-content: center !important;
    gap: 2rem;
  }
}

@media (min-width: 992px) {
  .bg-block {
    max-width: 22%;
  }
}
</style>
