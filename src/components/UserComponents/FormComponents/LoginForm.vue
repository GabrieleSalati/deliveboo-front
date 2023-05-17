<script>
import AppHeader from "../../_partials/AppHeader.vue";
import AppFooter from "../../_partials/AppFooter.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  mounted() {
    // Codice JavaScript per la validazione del modulo
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });
  },
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <!-- <AppHeader /> -->

  <div class="container my-5 py-5">
    <h1 class="text-center my-5">Accedi al tuo account</h1>
    <form
      action=""
      method="post"
      class="row g-3 needs-validation d-flex justify-content-center text-center"
      novalidate
    >
      <div class="col-md-4">
        <label for="validationCustom04" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="validationCustom04"
          name="email"
          required
        />
        <div class="invalid-feedback">
          Per favore inserisci una mail valida.
        </div>
      </div>

      <div class="col-md-4">
        <label for="validationCustom05" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="validationCustom05"
          name="password"
          pattern=".{8,}"
          required
        />
        <div class="invalid-feedback">
          La password deve avere almeno 8 caratteri.
        </div>
      </div>
      <div class="col-12 text-center mb-5">
        <button class="btn btn-primary" type="submit">Accedi</button>
      </div>
    </form>
  </div>
  <div class="utility mt-5 pt-5">
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped></style>
