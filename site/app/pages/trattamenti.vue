<template>
  <div>
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Trattamenti</span>
    </div>

    <section class="page-hero">
      <div class="container">
        <span class="section-label">Confronta i Trattamenti</span>
        <h1>Quale trattamento fa per te?</h1>
        <p class="page-hero__subtitle">
          Capire le differenze tra le tipologie di trattamento ti aiuta a scegliere il percorso
          più adatto alla tua situazione. Qui trovi una guida chiara e dettagliata.
        </p>
      </div>
    </section>

    <!-- CONFRONTO TABELLA -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Confronto</span>
          <h2>Le principali differenze</h2>
          <p>Panoramica dei trattamenti disponibili allo Studio Dalla Torre.</p>
        </div>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Trattamento</th>
                <th>Approccio</th>
                <th>Indicato per</th>
                <th>Intensità</th>
                <th>Prima sessione</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparisonRows" :key="row.name">
                <td><strong>{{ row.name }}</strong></td>
                <td>{{ row.approach }}</td>
                <td>{{ row.forWho }}</td>
                <td>
                  <div class="intensity-bar">
                    <div class="intensity-bar__fill" :style="{ width: row.intensity + '%' }" :class="`intensity--${row.intensityLevel}`"></div>
                  </div>
                  <span class="intensity-label">{{ row.intensityLabel }}</span>
                </td>
                <td>{{ row.firstSession }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- CARD PER TIPOLOGIA -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">In Dettaglio</span>
          <h2>Approfondisci ogni approccio</h2>
        </div>
        <div class="grid grid--2">
          <div class="approach-card" v-for="approach in approaches" :key="approach.title">
            <div class="approach-card__header">
              <span class="approach-icon">{{ approach.icon }}</span>
              <div>
                <h3>{{ approach.title }}</h3>
                <span class="approach-type">{{ approach.type }}</span>
              </div>
            </div>
            <p>{{ approach.description }}</p>
            <div class="approach-pros">
              <h4>Punti di forza</h4>
              <ul>
                <li v-for="pro in approach.pros" :key="pro">✓ {{ pro }}</li>
              </ul>
            </div>
            <div class="approach-cons">
              <h4>Quando preferire altro</h4>
              <ul>
                <li v-for="con in approach.cons" :key="con">→ {{ con }}</li>
              </ul>
            </div>
            <NuxtLink :to="approach.link" class="btn btn--secondary approach-btn">
              Scopri il servizio
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SCENARIO GUIDE -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Guide per Situazione</span>
          <h2>Cosa scegliere in base al tuo problema</h2>
        </div>
        <div class="scenario-list">
          <details class="scenario" v-for="scenario in scenarios" :key="scenario.title">
            <summary class="scenario__title">
              <span class="scenario__icon">{{ scenario.icon }}</span>
              <span>{{ scenario.title }}</span>
              <span class="scenario__arrow">▼</span>
            </summary>
            <div class="scenario__content">
              <p>{{ scenario.description }}</p>
              <div class="scenario__recommendations">
                <div class="scenario__rec" v-for="rec in scenario.recommendations" :key="rec.label">
                  <strong>{{ rec.label }}</strong>
                  <span>{{ rec.reason }}</span>
                </div>
              </div>
              <NuxtLink to="/contatti" class="btn btn--primary">Prenota ora</NuxtLink>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--alt">
      <div class="container">
        <div class="cta-centered">
          <h2>Ancora dubbi? Ti aiutiamo noi</h2>
          <p>
            Usa il nostro strumento di autovalutazione oppure contattaci direttamente:
            ti guideremo verso il trattamento più adatto.
          </p>
          <div class="cta-centered__actions">
            <NuxtLink to="/trova-il-tuo-percorso" class="btn btn--primary btn--large">
              Trova il Tuo Percorso
            </NuxtLink>
            <NuxtLink to="/contatti" class="btn btn--secondary btn--large">
              Parla con Noi
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Trattamenti – Studio Dalla Torre | Confronto Osteopatia, Posturale e altro',
  meta: [
    {
      name: 'description',
      content:
        'Scopri le differenze tra i trattamenti osteopatici: strutturale, viscerale, craniosacrale, ginnastica posturale e osteopatia pediatrica. Guida per scegliere il percorso giusto.',
    },
  ],
})

const comparisonRows = [
  {
    name: 'Osteopatia Strutturale',
    approach: 'Manipolazione e mobilizzazione articolare',
    forWho: 'Adulti con dolori muscolo-scheletrici',
    intensity: 75,
    intensityLevel: 'medium',
    intensityLabel: 'Media',
    firstSession: '50–60 min',
  },
  {
    name: 'Osteopatia Viscerale',
    approach: 'Mobilità degli organi interni',
    forWho: 'Disturbi digestivi e dolori viscerali',
    intensity: 40,
    intensityLevel: 'low',
    intensityLabel: 'Delicata',
    firstSession: '50–60 min',
  },
  {
    name: 'Osteopatia Craniosacrale',
    approach: 'Tocco gentile sul sistema craniosacrale',
    forWho: 'Cefalee, stress, bambini, anziani',
    intensity: 15,
    intensityLevel: 'very-low',
    intensityLabel: 'Molto delicata',
    firstSession: '55–65 min',
  },
  {
    name: 'Ginnastica Posturale',
    approach: 'Esercizi personalizzati attivi',
    forWho: 'Prevenzione e mantenimento',
    intensity: 60,
    intensityLevel: 'medium',
    intensityLabel: 'Moderata',
    firstSession: '50–60 min',
  },
  {
    name: 'Osteopatia Pediatrica',
    approach: 'Tecniche dolci adattate ai bambini',
    forWho: 'Neonati, lattanti e bambini',
    intensity: 10,
    intensityLevel: 'very-low',
    intensityLabel: 'Delicatissima',
    firstSession: '30–45 min',
  },
  {
    name: 'Osteopatia Sportiva',
    approach: 'Biomeccanica e trattamento infortuni',
    forWho: 'Atleti amatoriali e agonisti',
    intensity: 80,
    intensityLevel: 'high',
    intensityLabel: 'Intensa',
    firstSession: '55–65 min',
  },
]

const approaches = [
  {
    icon: '🦴',
    type: 'Approccio Strutturale',
    title: 'Osteopatia Strutturale',
    description:
      "Lavora sul sistema muscolo-scheletrico con tecniche di mobilizzazione, manipolazione (HVLA) e tecniche miofasciali. Produce spesso risultati rapidi nei dolori acuti.",
    pros: [
      'Efficace per dolori acuti e cronici',
      'Risultati veloci in molte condizioni',
      'Ampiamente documentata scientificamente',
      'Applicabile a quasi tutte le aree del corpo',
    ],
    cons: [
      'Gravidanza avanzata (tecniche ad alta velocità)',
      'Osteoporosi severa',
      'Pazienti anziani fragili',
    ],
    link: '/servizi#osteopatia-strutturale',
  },
  {
    icon: '🧠',
    type: 'Approccio Craniosacrale',
    title: 'Osteopatia Craniosacrale',
    description:
      "Utilizza un tocco estremamente leggero (pochi grammi di pressione) per influenzare il sistema nervoso centrale attraverso le strutture craniali e sacrali. Profondamente rilassante.",
    pros: [
      'Indicata per tutti, inclusi bambini e anziani',
      'Ottima per stress cronico ed emicranie',
      'Non invasiva, senza controindicazioni significative',
      'Complementare ad altri trattamenti',
    ],
    cons: [
      'Effetti più lenti rispetto alla strutturale',
      'Non indicata come primario trattamento per dolori acuti gravi',
    ],
    link: '/servizi#osteopatia-craniosacrale',
  },
  {
    icon: '🫁',
    type: 'Approccio Viscerale',
    title: 'Osteopatia Viscerale',
    description:
      "Tratta le restrizioni di mobilità degli organi interni e le loro connessioni con il sistema muscolo-scheletrico. Fondamentale per problematiche che non rispondono al solo trattamento strutturale.",
    pros: [
      'Affronta cause profonde di dolori cronici',
      'Efficace per disturbi digestivi e pelvici',
      'Complementa il trattamento strutturale',
    ],
    cons: [
      'Richiede più sedute per vedere risultati',
      'Non indicata in patologie infiammatorie acute',
    ],
    link: '/servizi#osteopatia-viscerale',
  },
  {
    icon: '🏋️',
    type: 'Rieducazione Attiva',
    title: 'Ginnastica Posturale',
    description:
      "Programma di esercizi attivi personalizzati per correggere la postura, rafforzare i muscoli core e prevenire le recidive. Fondamentale per consolidare i risultati del trattamento passivo.",
    pros: [
      'Mantiene e consolida i risultati osteopatici',
      'Migliora la consapevolezza corporea',
      'Adattabile a tutti i livelli di fitness',
      'Esercizi eseguibili anche a casa',
    ],
    cons: [
      'Non sostituisce il trattamento osteopatico in fase acuta',
      'Richiede impegno e costanza',
    ],
    link: '/servizi#ginnastica-posturale',
  },
]

const scenarios = [
  {
    icon: '💢',
    title: 'Ho un dolore lombare acuto (comparso nella ultime 48 ore)',
    description:
      "Il dolore lombare acuto richiede una valutazione immediata per escludere cause serie. Solitamente risponde bene all'osteopatia strutturale combinata con consigli comportamentali.",
    recommendations: [
      { label: '1° scelta: Osteopatia Strutturale', reason: 'Riducono rapidamente il dolore e migliorano la mobilità' },
      { label: 'Complementare: Ginnastica Posturale', reason: 'In fase sub-acuta per prevenire le recidive' },
    ],
  },
  {
    icon: '🤕',
    title: 'Soffro di emicrania o cefalea cronica',
    description:
      "Le cefalee croniche spesso hanno origine nel rachide cervicale, nell'ATM o nel sistema craniosacrale. L'approccio integrato ha mostrato ottimi risultati.",
    recommendations: [
      { label: '1° scelta: Craniosacrale + Strutturale cervicale', reason: 'Combinazione più efficace per le cefalee di tensione' },
      { label: 'Complementare: Viscerale', reason: 'Se associate a disturbi digestivi o stress' },
    ],
  },
  {
    icon: '🍼',
    title: 'Il mio neonato ha coliche o dorme poco',
    description:
      "I neonati possono beneficiare enormemente dell'osteopatia. Le tecniche sono delicatissime e adattate all'età. Collaboriamo con il Dott. Pippolo, specialista neonatale.",
    recommendations: [
      { label: '1° scelta: Osteopatia Neonatale (Dott. Pippolo)', reason: 'Specializzato nei piccoli fino a 3 mesi' },
      { label: 'Complementare: Craniosacrale', reason: 'Per le settimane successive, molto dolce' },
    ],
  },
  {
    icon: '🏃',
    title: 'Faccio sport e ho un infortunio ricorrente',
    description:
      "Gli infortuni ricorrenti spesso nascondono compensi biomeccanici non corretti. L'analisi del gesto atletico e il trattamento osteopatico possono spezzare il ciclo.",
    recommendations: [
      { label: '1° scelta: Osteopatia Sportiva (Leonardo)', reason: 'Analisi biomeccanica e trattamento specifico per sportivi' },
      { label: 'Complementare: Ginnastica Posturale', reason: 'Per correggere i pattern motori scorretti' },
    ],
  },
  {
    icon: '🤰',
    title: 'Sono in gravidanza e ho dolori alla schiena',
    description:
      "La gravidanza porta importanti cambiamenti posturali. L'osteopatia con tecniche dolci è sicura ed efficace nel controllo del dolore lombo-pelvico.",
    recommendations: [
      { label: '1° scelta: Osteopatia Strutturale (tecniche dolci)', reason: 'Sicura a tutte le fasi della gestazione' },
      { label: 'Complementare: Craniosacrale', reason: 'Per il benessere generale e la riduzione dello stress' },
    ],
  },
]
</script>

<style scoped>
.page-hero {
  padding: 8rem 0 3rem;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}
.page-hero h1 { max-width: 700px; margin-bottom: 1rem; }
.page-hero__subtitle { max-width: 640px; font-size: 1.1rem; line-height: 1.8; }

/* COMPARISON TABLE */
.comparison-table-wrapper { overflow-x: auto; }

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem 1.25rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.comparison-table th {
  background: var(--color-primary);
  color: var(--color-white);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}

.comparison-table tr:hover td { background: var(--color-primary-light); }

.intensity-bar {
  height: 6px;
  background: var(--color-border);
  border-radius: 3px;
  margin-bottom: 4px;
  width: 120px;
}

.intensity-bar__fill {
  height: 100%;
  border-radius: 3px;
}

.intensity--very-low { background: #4ade80; }
.intensity--low { background: #86efac; }
.intensity--medium { background: #facc15; }
.intensity--high { background: #f97316; }

.intensity-label { font-size: 0.8rem; color: var(--color-text-light); }

/* APPROACH CARDS */
.approach-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
}

.approach-card__header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.approach-icon { font-size: 2.5rem; }

.approach-card__header h3 { font-size: 1.2rem; margin-bottom: 0.2rem; }
.approach-type { font-size: 0.8rem; color: var(--color-primary); font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; }

.approach-pros, .approach-cons { margin: 1rem 0; }
.approach-pros h4, .approach-cons h4 { font-size: 0.9rem; margin-bottom: 0.5rem; }
.approach-pros ul li, .approach-cons ul li { font-size: 0.88rem; color: var(--color-text-light); padding: 0.2rem 0; }

.approach-btn { margin-top: 1rem; }

/* SCENARIOS */
.scenario-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1rem; }

.scenario {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-white);
}

.scenario__title {
  padding: 1.25rem 1.5rem;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
}

.scenario__title::-webkit-details-marker { display: none; }
.scenario__icon { font-size: 1.25rem; flex-shrink: 0; }
.scenario__arrow { margin-left: auto; font-size: 0.75rem; transition: transform var(--transition); }
details[open] .scenario__arrow { transform: rotate(180deg); }

.scenario__content {
  padding: 0 1.5rem 1.5rem;
  border-top: 1px solid var(--color-border);
}

.scenario__content > p { font-size: 0.95rem; padding-top: 1rem; }

.scenario__recommendations {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1rem 0 1.5rem;
}

.scenario__rec {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  padding: 0.85rem 1rem;
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
}

.scenario__rec strong { font-size: 0.9rem; color: var(--color-primary-dark); }
.scenario__rec span { font-size: 0.85rem; color: var(--color-text-light); }

/* CTA */
.cta-centered { text-align: center; max-width: 640px; margin: 0 auto; }
.cta-centered h2 { margin-bottom: 1rem; }
.cta-centered p { margin-bottom: 2rem; font-size: 1.05rem; }
.cta-centered__actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
</style>
