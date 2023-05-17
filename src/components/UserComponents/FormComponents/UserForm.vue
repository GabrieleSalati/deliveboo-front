<script>
import AppHeader from "../../_partials/AppHeader.vue";
import AppFooter from "../../_partials/AppFooter.vue";
import axios from "axios";

export default {
  data() {
    return {
      title: "Hello world",
      categories: [],
      selectedCategories: [],
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

    this.fetchCategories();
  },
  components: {
    AppHeader,
    AppFooter,
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
    // checkSelection(category) {
    //   const index = this.selectedCategories.indexOf(category);
    //   if (index > -1) {
    //     this.selectedCategories.splice(index, 1);
    //   } else {
    //     this.selectedCategories.push(category);
    //   }
    // },
  },
};
</script>

<template>
  <!-- <AppHeader /> -->

  <div class="container mb-5">
    <form
      class="row g-3 needs-validation"
      novalidate
      :class="{ 'was-validated': selectedCategories.length === 0 }"
    >
      <div class="col-6">
        <label for="validationCustom01" class="form-label">Nome Utente</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          name="username"
          required
        />
        <div class="valid-feedback">Perfetto!</div>
      </div>

      <div class="col-6">
        <label for="validationCustomUsername" class="form-label"
          >Il nome della tua attività</label
        >
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input
            type="text"
            class="form-control"
            id="validationCustomUsername"
            name="activityName"
            aria-describedby="inputGroupPrepend"
            required
          />
          <div class="invalid-feedback">
            Per favore inserisci il nome della tua attività.
          </div>
          <div class="valid-feedback">Perfetto!</div>
        </div>
      </div>

      <div class="col-6">
        <label for="validationCustom03" class="form-label">Partita IVA</label>
        <input
          type="text"
          class="form-control"
          id="validationCustom03"
          name="partitaIVA"
          pattern=".{11}"
          required
        />
        <div class="invalid-feedback">
          La Partita IVA deve essere di 11 caratteri.
        </div>
      </div>

      <div class="col-6">
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

      <div class="col-6">
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

      <div class="col-6 mb-3">
        <label for="fileform" class="form-label"
          >Scegli l'immagine di copertina</label
        >
        <input
          id="fileform"
          type="file"
          class="form-control"
          aria-label="file example"
          accept=".jpg, .png, .jpeg"
          name="coverImage"
          required
        />
        <div class="invalid-feedback">
          Inserisci un file di tipo: jpg, png, jpeg.
        </div>
      </div>

      <div class="col-4" v-for="category in categories" :key="category.id">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :value="category.label"
            :id="category"
            :name="categories"
          />
          <label class="form-check-label" :for="category">{{
            category.label
          }}</label>
        </div>
      </div>

      <!-- <div class="col-12">
        <div
          id="invalidCheck3Feedback"
          class="invalid-feedback"
          v-show="selectedCategories.length === 0"
        >
          Seleziona almeno una categoria.
        </div>
      </div> -->

      <div class="col-12">
        <button class="btn btn-primary" type="submit">Registrati</button>
      </div>
    </form>
  </div>
  <AppFooter />
</template>
