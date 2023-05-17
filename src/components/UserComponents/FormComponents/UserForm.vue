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
  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <AppHeader />

  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">Nome Utente</label>
      <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
      <div class="valid-feedback">Perfetto!</div>
    </div>

    <div class="col-md-4">
      <label for="validationCustomUsername" class="form-label">Il nome della tua attività</label>
      <div class="input-group has-validation">
        <span class="input-group-text" id="inputGroupPrepend">@</span>
        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
          required />
        <div class="invalid-feedback">
          Per favore inserisci il nome della tua attività.
        </div>
        <div class="valid-feedback">Perfetto!</div>
      </div>
    </div>

    <div class="col-md-6">
      <label for="validationCustom03" class="form-label">Partita IVA</label>
      <input type="text" class="form-control" id="validationCustom03" pattern=".{11}" required />
      <div class="invalid-feedback">
        La Partita IVA deve essere di 11 caratteri.
      </div>
    </div>

    <div class="col-md-3">
      <label for="validationCustom04" class="form-label">Email</label>
      <input type="email" class="form-control" id="validationCustom04" required />
      <div class="invalid-feedback">Per favore inserisci una mail valida.</div>
    </div>

    <div class="col-md-3">
      <label for="validationCustom05" class="form-label">Password</label>
      <input type="password" class="form-control" id="validationCustom05" pattern=".{8,}" required />
      <div class="invalid-feedback">
        La password deve avere almeno 8 caratteri.
      </div>
    </div>

    <div class="mb-3">
      <label for="fileform" class="form-label">Scegli l'immagine di copertina</label>
      <input id="fileform" type="file" class="form-control" aria-label="file example" accept=".jpg, .png, .jpeg"
        required />
      <div class="invalid-feedback">
        Inserisci un file di tipo: jpg, png, jpeg.
      </div>
    </div>

    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
        <label class="form-check-label" for="invalidCheck">
          Accetto i termini e le condizioni
        </label>
        <div class="invalid-feedback">Devi accettare prima di inviare.</div>
      </div>
    </div>

    <div class="col-12">
      <div class="form-check">
        <input class="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3"
          aria-describedby="invalidCheck3Feedback" required />
        <label class="form-check-label" for="invalidCheck3">
          Seleziona almeno una categoria.
        </label>
        <div id="invalidCheck3Feedback" class="invalid-feedback">
          Seleziona almeno una categoria.
        </div>
      </div>
    </div>

    <div class="col-12">
      <button class="btn btn-primary" type="submit">Registrati</button>
    </div>
  </form>
  <AppFooter />
</template>

<style lang="scss" scoped></style>
