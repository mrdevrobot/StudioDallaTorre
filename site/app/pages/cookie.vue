<template>
  <div>
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Cookie Policy</span>
    </div>
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Informativa</span>
        <h1>Cookie Policy</h1>
        <p class="page-hero__subtitle">Aggiornata al {{ lastUpdate }}</p>
      </div>
    </section>
    <section class="section">
      <div class="container policy-content">
        <h2>Cosa sono i Cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti web salvano nel browser dell'utente
          durante la navigazione. Vengono utilizzati per garantire il corretto funzionamento
          del sito e migliorare l'esperienza utente.
        </p>

        <h2>Tipologie di Cookie Utilizzati</h2>
        <h3>Cookie Tecnici (necessari)</h3>
        <p>
          Questi cookie sono indispensabili per il funzionamento del sito. Non raccolgono
          informazioni personali e non richiedono consenso.
        </p>

        <h3>Cookie Analitici</h3>
        <p>
          Utilizziamo cookie analitici anonimi per comprendere come gli utenti interagiscono
          con il nostro sito e migliorarlo. I dati raccolti sono aggregati e non identificativi.
        </p>

        <h2>Gestione dei Cookie</h2>
        <p>
          Puoi gestire o disabilitare i cookie dalle impostazioni del tuo browser. Tieni
          presente che la disabilitazione di alcuni cookie potrebbe influire sul funzionamento
          del sito.
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Chrome</a></li>
          <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener">Firefox</a></li>
          <li><a href="https://support.apple.com/kb/PH17191" target="_blank" rel="noopener">Safari</a></li>
          <li><a href="https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener">Edge</a></li>
        </ul>

        <h2>Contatti</h2>
        <p>
          Per qualsiasi domanda sulla nostra Cookie Policy:
          <a href="mailto:info@studiodallatorre.it">info@studiodallatorre.it</a>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Cookie Policy – Studio Dalla Torre',
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

.policy-content { max-width: 800px; }

.policy-content h2 {
  font-size: 1.25rem;
  margin: 2rem 0 0.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.policy-content h2:first-child { border-top: none; margin-top: 0; padding-top: 0; }

.policy-content h3 { font-size: 1.05rem; margin: 1rem 0 0.5rem; }

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
