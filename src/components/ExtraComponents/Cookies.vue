<script>
import AppHeader from "../_partials/AppHeader.vue";
import AppFooter from "../_partials/AppFooter.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader />

  <div class="container my-5">
    <div class="container mt-5">
      <h1 class="text-center my-5 pt-5">
        <span class="text-danger fw-bold">DeliveBoo</span> Utilizzo dei Cookie
      </h1>

      <div class="row">
        <div class="col-lg-2">
          <div id="list-example" class="list-group">
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-1"
              >Punto 1</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-2"
              >Punto 2</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-3"
              >Punto 3</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-4"
              >Punto 4</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-5"
              >Punto 5</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-6"
              >Punto 6</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-7"
              >Punto 7</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-8"
              >Punto 8</a
            >
            <a
              class="list-group-item list-group-item-action"
              href="#list-item-9"
              >Punto 9</a
            >
          </div>
          <div class="banner mt-5 pt-1">
            <img src="../../assets/2.png" alt="banner" class="img-fluid" />
            <img src="../../assets/2.png" alt="banner" class="img-fluid" />
          </div>
        </div>

        <div class="col-lg-8">
          <div
            data-bs-spy="scroll"
            data-bs-target="#list-example"
            data-bs-smooth-scroll="true"
            class="scrollspy-example"
            tabindex="0"
          >
            <h2 id="list-item-1" class="my-4">
              <span class="text-danger me-2">1.</span> Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul
              tuo dispositivo quando visiti un sito web. DeliveBoo utilizza i
              cookie per migliorare l'esperienza degli utenti, offrire
              funzionalità personalizzate e raccogliere informazioni per fini
              statistici. Continuando a utilizzare il nostro servizio, accetti
              l'utilizzo dei cookie da parte di DeliveBoo.
            </p>

            <h2 id="list-item-2" class="my-4">
              <span class="text-danger me-2">2.</span> Tipologie di cookie
            </h2>
            <p>
              DeliveBoo utilizza sia cookie tecnici che cookie di terze parti. I
              cookie tecnici sono necessari per il corretto funzionamento del
              nostro servizio, mentre i cookie di terze parti vengono utilizzati
              per fini analitici e pubblicitari. Puoi trovare ulteriori
              informazioni sulle tipologie di cookie utilizzate da DeliveBoo
              nella nostra Cookie Policy.
            </p>

            <h2 id="list-item-3" class="my-4">
              <span class="text-danger me-2">3.</span> Gestione dei cookie
            </h2>
            <p>
              Puoi gestire le preferenze sui cookie attraverso le impostazioni
              del tuo browser. È possibile bloccare o eliminare i cookie
              esistenti e impostare le preferenze per l'accettazione o il
              rifiuto dei cookie. Tuttavia, tieni presente che la
              disabilitazione dei cookie potrebbe influire sul corretto
              funzionamento del nostro servizio.
            </p>

            <h2 id="list-item-4" class="my-4">
              <span class="text-danger me-2">4.</span> Informativa sulla privacy
            </h2>
            <p>
              Per ulteriori informazioni sulla raccolta e l'utilizzo dei dati
              personali da parte di DeliveBoo, consulta la nostra Informativa
              sulla Privacy. La nostra politica sulla privacy descrive come
              trattiamo le informazioni personali degli utenti e quali sono i
              tuoi diritti in merito.
            </p>

            <h2 id="list-item-5" class="my-4">
              <span class="text-danger me-2">5.</span> Contatti
            </h2>
            <p>
              Se hai domande o dubbi sull'utilizzo dei cookie da parte di
              DeliveBoo, ti invitiamo a contattarci tramite i nostri canali di
              assistenza. Saremo lieti di fornirti ulteriori informazioni.
            </p>

            <h2 id="list-item-6" class="my-4">
              <span class="text-danger me-2">6.</span> Cookie Policy
            </h2>
            <p>
              Puoi leggere la nostra Cookie Policy per maggiori dettagli sulle
              tipologie di cookie utilizzate da DeliveBoo e sulle modalità di
              gestione e controllo dei cookie.
            </p>

            <h2 id="list-item-7" class="my-4">
              <span class="text-danger me-2">7.</span> Cookie di terze parti
            </h2>
            <p>
              DeliveBoo potrebbe utilizzare cookie di terze parti per fini
              analitici e pubblicitari. Questi cookie vengono impostati da terze
              parti come Google Analytics e possono raccogliere informazioni sul
              tuo comportamento di navigazione per offrirti annunci
              personalizzati. Puoi controllare e gestire le impostazioni dei
              cookie di terze parti tramite le preferenze del tuo browser.
            </p>

            <h2 id="list-item-8" class="my-4">
              <span class="text-danger me-2">8.</span> Accettazione dei cookie
            </h2>
            <p>
              Continuando a utilizzare il nostro servizio, acconsenti
              all'utilizzo dei cookie da parte di DeliveBoo. Se non desideri
              accettare i cookie o desideri modificare le tue preferenze sui
              cookie, ti invitiamo a gestirli tramite le impostazioni del tuo
              browser.
            </p>

            <h2 id="list-item-9" class="my-4">
              <span class="text-danger me-2">9.</span> Modifiche alla Cookie
              Policy
            </h2>
            <p>
              DeliveBoo si riserva il diritto di apportare modifiche alla
              presente Cookie Policy. Eventuali modifiche saranno pubblicate su
              questa pagina e saranno efficaci dalla data di pubblicazione. Ti
              invitiamo a verificare periodicamente questa pagina per essere
              sempre aggiornato sulle eventuali modifiche alla nostra Cookie
              Policy.
            </p>
          </div>
        </div>
        <div class="col-lg-2">
          <img src="../../assets/1.png" alt="banner" class="img-fluid" />
          <img src="../../assets/1.png" alt="banner" class="img-fluid" />
          <img src="../../assets/1.png" alt="banner" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>

  <AppFooter />
</template>
