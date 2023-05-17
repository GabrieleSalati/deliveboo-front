<script>
// import MyComponent from "./components/MyComponent.vue";

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
  <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-4">
      <label for="validationCustom01" class="form-label">Nome Piatto</label>
      <input
        type="text"
        class="form-control"
        id="validationCustom01"
        value="Mark"
        required
      />
      <div class="valid-feedback">Sembra buono!</div>
    </div>
    <div class="col-md-4">
      <label for="validationCustom02" class="form-label"
        >Descrizione e ingredienti del piatto</label
      >
      <input
        type="text"
        class="form-control"
        id="validationCustom02"
        value="Otto"
        required
      />
      <div class="valid-feedback">Sembra buono!</div>
    </div>
    <div class="col-md-4">
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

    <div class="mb-3">
      <label for="fileform" class="form-label"
        >Scegli l'immagine del piatto</label
      >
      <input
        id="fileform"
        type="file"
        class="form-control"
        aria-label="file example"
        accept=".jpg, .png, .jpeg"
        required
      />
      <div class="invalid-feedback">
        Inserisci un file di tipo: jpg, png, jpeg.
      </div>
    </div>

    <div class="col-12">
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
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Crea piatto</button>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
