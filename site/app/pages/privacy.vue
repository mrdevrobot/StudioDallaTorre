<template>
  <div>
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Privacy Policy</span>
    </div>
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Informativa</span>
        <h1>Privacy Policy</h1>
        <p class="page-hero__subtitle">Aggiornata al {{ lastUpdate }}</p>
      </div>
    </section>
    <section class="section">
      <div class="container policy-content">
        <h2>Titolare del Trattamento</h2>
        <p>
          <strong>Studio Dalla Torre</strong><br>
          Via Eraclea 5, 30027 San Donà di Piave (VE)<br>
          Email: <a href="mailto:info@studiodallatorre.it">info@studiodallatorre.it</a>
        </p>

        <h2>Tipologie di Dati Raccolti</h2>
        <p>
          Il Titolare raccoglie i seguenti dati personali forniti volontariamente dall'Utente
          attraverso il modulo di contatto: nome, cognome, indirizzo email, numero di telefono
          e qualsiasi informazione contenuta nel messaggio inviato.
        </p>

        <h2>Finalità del Trattamento</h2>
        <p>I dati personali raccolti vengono trattati per le seguenti finalità:</p>
        <ul>
          <li>Risposta alle richieste di informazioni o prenotazione</li>
          <li>Gestione degli appuntamenti</li>
          <li>Adempimento di obblighi legali e contabili</li>
        </ul>

        <h2>Base Giuridica</h2>
        <p>
          Il trattamento dei dati è basato sul consenso dell'interessato (Art. 6 lett. a GDPR)
          o sull'esecuzione di misure precontrattuali (Art. 6 lett. b GDPR).
        </p>

        <h2>Conservazione dei Dati</h2>
        <p>
          I dati personali saranno conservati per il tempo strettamente necessario a fornire
          il servizio richiesto, e comunque non oltre 10 anni per adempiere agli obblighi
          fiscali e legali.
        </p>

        <h2>Diritti dell'Interessato</h2>
        <p>
          L'Utente ha il diritto di: accedere ai propri dati, correggerli, cancellarli,
          limitarne il trattamento, opporsi al trattamento e richiedere la portabilità dei dati.
          Per esercitare questi diritti contatta:
          <a href="mailto:info@studiodallatorre.it">info@studiodallatorre.it</a>
        </p>

        <h2>Cookie</h2>
        <p>
          Per informazioni sui cookie utilizzati, consulta la nostra
          <NuxtLink to="/cookie">Cookie Policy</NuxtLink>.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy Policy – Studio Dalla Torre',
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
})
const lastUpdate = '20 Febbraio 2026'
</script>

<style scoped>
.page-hero {
  padding: 8rem 0 3rem;
  background: var(--color-bg-alt);
}
.page-hero h1 { max-width: 700px; margin-bottom: 0.5rem; }
.page-hero__subtitle { font-size: 0.9rem; color: var(--color-text-light); }

.policy-content {
  max-width: 800px;
}

.policy-content h2 {
  font-size: 1.25rem;
  margin: 2rem 0 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.policy-content h2:first-child { border-top: none; margin-top: 0; padding-top: 0; }

.policy-content ul {
  list-style: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.policy-content li {
  font-size: 0.95rem;
  color: var(--color-text-light);
  padding: 0.25rem 0;
}
</style>
