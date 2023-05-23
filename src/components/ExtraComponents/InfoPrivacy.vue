<script>
import AppHeader from "../_partials/AppHeader.vue";
import AppFooter from "../_partials/AppFooter.vue";

export default {
  data() {
    return {
      title: "Termini e Condizioni",
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
        <span class="text-danger fw-bold">DeliveBoo</span> Termini e Condizioni
        del Servizio
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
              <span class="text-danger me-2">1.</span> Accettazione dei Termini
            </h2>
            <p>
              Benvenuto su DeliveBoo! Prima di utilizzare i nostri servizi di
              food delivery, ti invitiamo a leggere attentamente i seguenti
              Termini e Condizioni. L'utilizzo del nostro sito web e l'accesso
              ai nostri servizi implicano l'accettazione incondizionata di tali
              termini. Se non sei d'accordo con questi Termini e Condizioni, ti
              invitiamo a non utilizzare il nostro servizio.
            </p>

            <h2 id="list-item-2" class="my-4">
              <span class="text-danger me-2">2.</span> Descrizione del Servizio
            </h2>
            <p>
              DeliveBoo è una piattaforma di food delivery che mette in contatto
              gli utenti con i ristoranti disponibili nella loro zona.
              Attraverso il nostro sito web o l'applicazione mobile, gli utenti
              possono effettuare ordini dai ristoranti registrati e ricevere la
              consegna dei pasti direttamente a casa o in ufficio.
            </p>

            <h2 id="list-item-3" class="my-4">
              <span class="text-danger me-2">3.</span> Registrazione
              dell'Account
            </h2>
            <p>
              Per utilizzare pienamente i nostri servizi, potrebbe essere
              necessario creare un account personale su DeliveBoo. Durante il
              processo di registrazione, sarai tenuto a fornire informazioni
              accurate e complete. Selezionando un nome utente e una password,
              sarai responsabile della sicurezza del tuo account e delle
              attività svolte con le tue credenziali.
            </p>

            <h2 id="list-item-4" class="my-4">
              <span class="text-danger me-2">4.</span> Ordini e Pagamenti
            </h2>
            <p>
              Gli utenti possono effettuare ordini selezionando i ristoranti e i
              piatti desiderati tramite DeliveBoo. È responsabilità degli utenti
              fornire le informazioni corrette relative all'indirizzo di
              consegna e ai dettagli di pagamento. I pagamenti possono essere
              effettuati utilizzando i metodi di pagamento disponibili sulla
              piattaforma.
            </p>

            <h2 id="list-item-5" class="my-4">
              <span class="text-danger me-2">5.</span>Responsabilità dei
              Ristoranti.
            </h2>
            <p>
              I ristoranti registrati su DeliveBoo sono responsabili della
              preparazione e della consegna degli ordini effettuati dagli
              utenti. DeliveBoo non si assume alcuna responsabilità per la
              qualità del cibo, i tempi di consegna o eventuali problemi legati
              al servizio offerto dai ristoranti.
            </p>

            <h2 id="list-item-6" class="my-4">
              <span class="text-danger me-2">6.</span>Responsabilità degli
              Utenti.
            </h2>
            <p>
              Gli utenti sono responsabili dell'accuratezza delle informazioni
              fornite durante la registrazione e degli ordini effettuati tramite
              DeliveBoo. È vietato utilizzare i nostri servizi per scopi
              illegali o non autorizzati. Gli utenti accettano di rispettare
              tutte le leggi applicabili durante l'utilizzo del nostro servizio.
            </p>

            <h2 id="list-item-7" class="my-4">
              <span class="text-danger me-2">7.</span>Modifiche ai Termini e
              Condizioni.
            </h2>
            <p>
              DeliveBoo si riserva il diritto di apportare modifiche ai presenti
              Termini e Condizioni in qualsiasi momento. Gli utenti saranno
              informati di eventuali modifiche tramite comunicazioni sul sito
              web o tramite altri mezzi appropriati. L'utilizzo continuato del
              nostro servizio costituirà l'accettazione delle nuove
              disposizioni.
            </p>

            <h2 id="list-item-8" class="my-4">
              <span class="text-danger me-2">8.</span> Legge Applicabile
            </h2>
            <p>
              I presenti Termini e Condizioni sono disciplinati e interpretati
              in conformità con la legge vigente. Eventuali controversie
              derivanti da questi Termini e Condizioni saranno sottoposte alla
              giurisdizione esclusiva dei tribunali competenti.
            </p>

            <p>
              Grazie per aver letto i Termini e Condizioni del servizio di
              DeliveBoo. Se hai domande o dubbi, ti invitiamo a contattarci
              tramite i nostri canali di assistenza. Buon appetito!
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

<style lang="scss" scoped></style>
