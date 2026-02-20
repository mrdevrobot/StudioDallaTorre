<template>
  <div>
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Servizi</span>
    </div>

    <section class="page-hero">
      <div class="container">
        <span class="section-label">I Nostri Servizi</span>
        <h1>Trattamenti osteopatici per ogni esigenza</h1>
        <p class="page-hero__subtitle">
          Dallo studio del movimento all'osteopatia di precisione: offriamo un'ampia gamma
          di trattamenti personalizzati per il tuo benessere fisico e la prevenzione.
        </p>
      </div>
    </section>

    <!-- INDICE SERVIZI -->
    <nav class="services-nav" aria-label="Naviga ai servizi">
      <div class="container">
        <ul class="services-nav__list">
          <li v-for="s in services" :key="s.id">
            <a :href="`#${s.id}`">{{ s.shortTitle }}</a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- SERVIZI -->
    <section
      v-for="(service, index) in services"
      :key="service.id"
      :id="service.id"
      class="section service-section"
      :class="{ 'section--alt': index % 2 !== 0 }"
    >
      <div class="container">
        <div class="service-block" :class="{ 'service-block--reversed': index % 2 !== 0 }">
          <div class="service-block__content">
            <span class="section-label">{{ service.category }}</span>
            <h2>{{ service.title }}</h2>
            <p class="service-intro">{{ service.intro }}</p>
            <div class="service-details">
              <p v-for="(para, i) in service.description" :key="i">{{ para }}</p>
            </div>
            <div class="service-meta">
              <div class="service-meta__item" v-if="service.duration">
                <strong>⏱ Durata:</strong> {{ service.duration }}
              </div>
              <div class="service-meta__item" v-if="service.who">
                <strong>👤 Per chi:</strong> {{ service.who }}
              </div>
              <div class="service-meta__item" v-if="service.expert">
                <strong>👩‍⚕️ Specialista:</strong> {{ service.expert }}
              </div>
            </div>
            <div class="service-symptoms" v-if="service.symptoms && service.symptoms.length">
              <h4>Problematiche trattate</h4>
              <ul class="symptom-list">
                <li v-for="symptom in service.symptoms" :key="symptom">
                  <span class="symptom-check">✓</span> {{ symptom }}
                </li>
              </ul>
            </div>
            <NuxtLink to="/contatti" class="btn btn--primary">Prenota questo servizio</NuxtLink>
          </div>
          <div class="service-block__visual">
            <div class="service-image-placeholder">
              <span>{{ service.icon }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-centered">
          <h2>Non sai da dove iniziare?</h2>
          <p>Usa il nostro strumento di autovalutazione per capire quale trattamento fa per te,
            oppure contattaci direttamente per un consulto.</p>
          <div class="cta-centered__actions">
            <NuxtLink to="/trova-il-tuo-percorso" class="btn btn--primary btn--large">
              Scopri il Tuo Percorso
            </NuxtLink>
            <NuxtLink to="/contatti" class="btn btn--secondary btn--large">
              Contattaci
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Servizi – Studio Dalla Torre | Osteopatia, Ginnastica Posturale a San Donà di Piave',
  meta: [
    {
      name: 'description',
      content:
        'Scopri tutti i servizi dello Studio Dalla Torre: osteopatia strutturale, viscerale, craniosacrale, ginnastica posturale, osteopatia pediatrica e sportiva a San Donà di Piave.',
    },
  ],
})

const services = [
  {
    id: 'osteopatia-strutturale',
    category: 'Osteopatia',
    shortTitle: 'Osteopatia Strutturale',
    icon: '🦴',
    title: "Osteopatia Strutturale",
    intro:
      "Il trattamento osteopatico strutturale agisce sul sistema muscolo-scheletrico per ripristinare la mobilità articolare, ridurre tensioni muscolari e alleviare il dolore.",
    description: [
      "L'osteopatia strutturale lavora principalmente su articolazioni, muscoli, legamenti e fasce. Attraverso tecniche di manipolazione, mobilizzazione e tecniche miofasciali, l'osteopata identifica e tratta le restrizioni di mobilità che causano dolore e disfunzione.",
      "È il tipo di trattamento più conosciuto e spesso il primo approccio per chi soffre di problemi alla schiena, al collo, alle spalle o alle articolazioni periferiche.",
    ],
    duration: '45–60 minuti',
    who: 'Adulti e adolescenti con problemi muscolo-scheletrici',
    expert: 'Martina e Leonardo Dalla Torre',
    symptoms: [
      'Lombalgia (mal di schiena basso)',
      'Cervicalgia e torcicollo',
      'Ernia del disco',
      'Dolori alla spalla (periartrite)',
      'Colpo di frusta',
      'Dolori al ginocchio e all\'anca',
      'Tendiniti e tensioni muscolari',
      'Problemi posturali',
    ],
  },
  {
    id: 'osteopatia-viscerale',
    category: 'Osteopatia',
    shortTitle: 'Osteopatia Viscerale',
    icon: '🫁',
    title: 'Osteopatia Viscerale',
    intro:
      "L'osteopatia viscerale si occupa della mobilità e motilità degli organi interni e delle loro connessioni con il sistema muscolo-scheletrico.",
    description: [
      "Gli organi interni sono circondati da fasce e connettivi che li collegano alle strutture scheletriche. Quando si creano restrizioni a questo livello, possono comparire dolori riferiti, problemi digestivi e disfunzioni a distanza.",
      "L'osteopata viscerale utilizza tecniche dolci e precise per liberare le tensioni viscerali, migliorare la circolazione locale e ristabilire la normale mobilità degli organi.",
    ],
    duration: '45–60 minuti',
    who: 'Chi soffre di disturbi digestivi o dolori viscerali',
    expert: 'Martina Dalla Torre',
    symptoms: [
      'Reflusso gastroesofageo',
      'Sindrome del colon irritabile',
      'Gonfiore addominale e meteorismo',
      'Costipazione cronica',
      'Dolori addominali senza causa organica apparente',
      'Ernia iatale',
      'Tensioni post-operatorie addominali',
    ],
  },
  {
    id: 'osteopatia-craniosacrale',
    category: 'Osteopatia',
    shortTitle: 'Craniosacrale',
    icon: '🧠',
    title: 'Osteopatia Craniosacrale',
    intro:
      "L'osteopatia craniosacrale è un approccio dolce e non invasivo che lavora sul sistema nervoso centrale attraverso le strutture ossee del cranio e del sacro.",
    description: [
      "Il sistema craniosacrale comprende le membrane e il liquido cerebrospinale che circondano il cervello e il midollo spinale. L'osteopata, attraverso un tocco estremamente delicato, percepisce e corregge le restrizioni in questo sistema.",
      "È un approccio particolarmente indicato per persone sensibili, anziani, bambini e per problematiche croniche dove la manipolazione strutturale non è indicata.",
    ],
    duration: '50–60 minuti',
    who: 'Adulti, anziani, bambini, neonati',
    expert: 'Martina Dalla Torre',
    symptoms: [
      'Cefalee ed emicranie',
      'Disturbi del sonno',
      'Stress e ansia',
      'Problemi dell\'ATM (articolazione temporo-mandibolare)',
      'Tinniti (fischi alle orecchie)',
      'Disturbi della concentrazione',
      'Nevralgie facciali',
    ],
  },
  {
    id: 'ginnastica-posturale',
    category: 'Rieducazione',
    shortTitle: 'Ginnastica Posturale',
    icon: '🏋️',
    title: 'Ginnastica Posturale',
    intro:
      "La ginnastica posturale è un programma di esercizi personalizzato per migliorare la postura, rafforzare i muscoli profondi e prevenire il dolore cronico.",
    description: [
      "Martina e Leonardo, con la loro formazione in scienze motorie, progettano programmi di esercizio specifici per ogni paziente. L'obiettivo è correggere gli squilibri muscolari, migliorare la consapevolezza corporea e consolidare i risultati ottenuti con i trattamenti osteopatici.",
      "I programmi includono esercizi di stretching, rinforzo muscolare, respirazione e propriocezione. Possono essere svolti in studio o continuati autonomamente a casa.",
    ],
    duration: '45–60 minuti (individuale o piccoli gruppi)',
    who: 'Adulti di tutte le età e sportivi',
    expert: 'Martina e Leonardo Dalla Torre',
    symptoms: [
      'Scoliosi e paramorfismi',
      'Iperlordosi e ipercifosi',
      'Mal di schiena cronico',
      'Debolezza del core',
      'Rigidità muscolare diffusa',
      'Prevenzione in sportivi',
      'Recupero post-infortunio',
    ],
  },
  {
    id: 'osteopatia-pediatrica',
    category: 'Osteopatia Specialistica',
    shortTitle: 'Osteopatia Pediatrica',
    icon: '👶',
    title: 'Osteopatia Pediatrica e Neonatale',
    intro:
      "Trattamenti dolci e sicuri per neonati, lattanti e bambini, in collaborazione con il Dott. Emanuele Pippolo, specialista in osteopatia neonatale.",
    description: [
      "Il parto, anche quando si svolge normalmente, può lasciare tensioni significative nel cranio e nel corpo del neonato. L'osteopatia neonatale utilizza tecniche estremamente delicate per liberare queste tensioni e favorire uno sviluppo armonioso.",
      "Per i bambini più grandi, l'osteopatia pediatrica affronta problematiche legate alla crescita, ai traumi, e alle difficoltà posturali. Il Dott. Emanuele Pippolo collabora periodicamente con lo studio per offrire un'assistenza specialistica di alto livello.",
    ],
    duration: '30–45 minuti per neonati, 45 min per bambini',
    who: 'Neonati, lattanti e bambini fino a 14 anni',
    expert: 'Dott. Emanuele Pippolo (collaboratore) + Martina Dalla Torre',
    symptoms: [
      'Difficoltà di allattamento',
      'Coliche e irrequietezza nei neonati',
      'Plagiocefalia (testa piatta)',
      'Problemi del sonno nei lattanti',
      'Ritardi motori',
      'Dolori da crescita',
      'Scoliosi idiopatica giovanile',
    ],
  },
  {
    id: 'osteopatia-sportiva',
    category: 'Osteopatia',
    shortTitle: 'Osteopatia Sportiva',
    icon: '⚽',
    title: 'Osteopatia Sportiva',
    intro:
      "Trattamenti specifici per atleti amatoriali e agonisti: prevenzione, recupero dagli infortuni e ottimizzazione della performance.",
    description: [
      "Leonardo Dalla Torre, grazie alla sua formazione come personal trainer e osteopata, è particolarmente preparato per trattare gli infortuni sportivi e ottimizzare la funzionalità fisica degli atleti.",
      "L'osteopatia sportiva integra l'analisi biomeccanica del gesto atletico con il trattamento manuale, permettendo di identificare e correggere i pattern di movimento che predispongono agli infortuni.",
    ],
    duration: '50–60 minuti',
    who: 'Sportivi amatoriali e agonisti',
    expert: 'Leonardo Dalla Torre',
    symptoms: [
      'Distorsioni e stiramenti',
      'Tendinopatie (Achille, Rotuleo)',
      'Sindrome della bandelletta ileotibiale',
      'Pubalgia',
      'Dolori da sovraccarico',
      'Recupero post-operatorio sportivo',
      'Ottimizzazione della performance',
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

/* SERVICES NAV */
.services-nav {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 65px;
  z-index: 100;
}

.services-nav__list {
  display: flex;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
  padding: 0;
}

.services-nav__list li a {
  display: block;
  padding: 0.85rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-light);
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: all var(--transition);
}

.services-nav__list li a:hover {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

/* SERVICE BLOCK */
.service-section { scroll-margin-top: 120px; }

.service-block {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: start;
}

.service-block--reversed {
  grid-template-columns: 0.8fr 1.2fr;
}

.service-block--reversed .service-block__content { order: 2; }
.service-block--reversed .service-block__visual { order: 1; }

.service-block__content h2 { margin-bottom: 0.75rem; }
.service-intro { font-size: 1.05rem; font-weight: 500; color: var(--color-text); margin-bottom: 1rem; }
.service-details p { font-size: 0.95rem; }

.service-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  margin: 1.5rem 0;
}

.service-meta__item { font-size: 0.9rem; color: var(--color-text-light); }
.service-meta__item strong { color: var(--color-text); }

.service-symptoms h4 { font-size: 0.95rem; margin-bottom: 0.75rem; }
.symptom-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem 1rem; margin-bottom: 1.5rem; }
.symptom-list li { font-size: 0.88rem; color: var(--color-text-light); display: flex; gap: 0.4rem; }
.symptom-check { color: var(--color-primary); font-weight: 700; }

.service-image-placeholder {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  border-radius: var(--radius);
  aspect-ratio: 3 / 4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 130px;
}

/* CTA */
.cta-centered { text-align: center; max-width: 640px; margin: 0 auto; }
.cta-centered h2 { margin-bottom: 1rem; }
.cta-centered p { margin-bottom: 2rem; font-size: 1.05rem; }
.cta-centered__actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }

@media (max-width: 768px) {
  .service-block,
  .service-block--reversed {
    grid-template-columns: 1fr;
  }
  .service-block--reversed .service-block__content { order: 1; }
  .service-block--reversed .service-block__visual { order: 2; }
  .service-image-placeholder { position: static; aspect-ratio: 16/9; }
  .symptom-list { grid-template-columns: 1fr; }
}
</style>
