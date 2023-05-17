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
  <div class="container mb-5 pb-5">
    <h1 class="text-center pt-5 mt-5 mb-5">Crea il tuo piatto</h1>

    <form class="row g-3 needs-validation" novalidate>
      <div class="col-6">
        <label for="validationCustom01" class="form-label">Nome Piatto</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          required
        />
        <div class="valid-feedback">Sembra buono!</div>
      </div>
      <div class="col-6">
        <label for="validationCustom02" class="form-label"
          >Descrizione e ingredienti del piatto</label
        >
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          required
        />
        <div class="valid-feedback">Sembra buono!</div>
      </div>
      <div class="col-6">
        <label for="validationCustomUsername" class="form-label">Prezzo</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">€</span>
          <input
            type="text"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">Per favore inserisci un prezzo.</div>
        </div>
      </div>

      <div class="col-6 mb-3">
        <label for="fileform" class="form-label"
          >Scegli l'immagine del piatto, file di tipo: jpg, png, jpeg.</label
        >
        <input
          id="fileform"
          type="file"
          class="form-control"
          aria-label="file example"
          accept=".jpg, .png, .jpeg"
        />
      </div>

      <div class="col-6">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
          />
          <label class="form-check-label" for="invalidCheck">
            Lo vuoi rendere visibile?
          </label>
        </div>
      </div>
      <div class="col-12 text-center">
        <button class="btn btn-primary" type="submit">Crea piatto</button>
      </div>
    </form>
  </div>

  <AppFooter />
</template>

<style lang="scss" scoped></style>
