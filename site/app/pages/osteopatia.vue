<template>
  <div>
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Osteopatia</span>
    </div>

    <!-- HERO -->
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Approfondimento</span>
        <h1>Cos'è l'Osteopatia?</h1>
        <p class="page-hero__subtitle">
          Tutto quello che devi sapere sull'osteopatia: storia, principi fondamentali, benefici e a chi è rivolta.
          Una guida completa per comprendere questa disciplina terapeutica.
        </p>
      </div>
    </section>

    <!-- DEFINIZIONE -->
    <section class="section">
      <div class="container">
        <div class="content-grid">
          <div class="content-main">
            <h2>Una disciplina al servizio del corpo</h2>
            <p>
              L'<strong>osteopatia</strong> è una disciplina terapeutica manuale riconosciuta
              dall'Organizzazione Mondiale della Sanità (OMS). Fondata nel 1874 dal medico
              americano Andrew Taylor Still, si basa sul principio che <strong>il corpo è un'unità
              funzionale integrata</strong> e possiede la capacità intrinseca di autoguarigione.
            </p>
            <p>
              L'osteopata utilizza esclusivamente <strong>tecniche manuali</strong> per individuare
              e trattare le disfunzioni somatiche — alterazioni della funzione corporea che
              limitano il movimento e possono causare dolore. L'obiettivo non è semplicemente
              eliminare il sintomo, ma <strong>ripristinare l'equilibrio globale</strong>
              dell'organismo.
            </p>
            <p>
              In Italia, l'osteopatia è stata riconosciuta come <strong>professione sanitaria</strong>
              con la Legge 3/2018 (Legge Lorenzin), consolidando il suo ruolo nel panorama
              sanitario nazionale.
            </p>

            <div class="info-box">
              <h3>📋 In breve</h3>
              <ul>
                <li>Disciplina terapeutica manuale riconosciuta dall'OMS</li>
                <li>Non utilizza farmaci né strumenti chirurgici</li>
                <li>Professione sanitaria in Italia (Legge 3/2018)</li>
                <li>Approccio globale: tratta la causa, non solo il sintomo</li>
                <li>Adatta a tutte le età: neonati, bambini, adulti, anziani</li>
              </ul>
            </div>
          </div>
          <div class="content-sidebar">
            <div class="sidebar-card">
              <h4>Indice dei Contenuti</h4>
              <ul>
                <li><a href="#principi">I Principi Fondamentali</a></li>
                <li><a href="#come-funziona">Come Funziona</a></li>
                <li><a href="#benefici">I Benefici</a></li>
                <li><a href="#chi-puo-beneficiarne">A Chi è Rivolta</a></li>
                <li><a href="#differenze">Osteopatia vs Altre Discipline</a></li>
                <li><a href="#faq">Domande Frequenti</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRINCIPI -->
    <section id="principi" class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Fondamenti</span>
          <h2>I Principi Fondamentali dell'Osteopatia</h2>
          <p>
            L'osteopatia si fonda su principi fondamentali che guidano ogni trattamento.
          </p>
        </div>
        <div class="grid grid--2">
          <div class="principle-card" v-for="principle in principles" :key="principle.title">
            <div class="principle-number">{{ principle.number }}</div>
            <h3>{{ principle.title }}</h3>
            <p>{{ principle.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CITAZIONI DEI MAESTRI -->
    <section class="section quotes-masters">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Le Parole dei Maestri</span>
          <h2>Voci che hanno plasmato l'Osteopatia</h2>
          <p>
            Le riflessioni dei grandi pionieri che hanno fondato e sviluppato l'osteopatia moderna,
            fonte perenne di ispirazione per ogni osteopata.
          </p>
        </div>
        <div class="quotes-grid">
          <blockquote class="quote-card" v-for="quote in quotes" :key="quote.author">
            <span class="quote-mark">&#8220;</span>
            <p class="quote-text">{{ quote.text }}</p>
            <footer class="quote-footer">
              <strong class="quote-author">{{ quote.author }}</strong>
              <span class="quote-role">{{ quote.role }}</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- COME FUNZIONA -->
    <section id="come-funziona" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Il Processo</span>
          <h2>Come Funziona un Trattamento Osteopatico</h2>
        </div>
        <div class="process-timeline">
          <div class="process-step" v-for="(step, index) in process" :key="index">
            <div class="process-marker">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="process-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
              <span class="process-duration" v-if="step.duration">⏱️ {{ step.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BENEFICI -->
    <section id="benefici" class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Vantaggi</span>
          <h2>I Benefici dell'Osteopatia</h2>
          <p>L'osteopatia offre numerosi benefici per la salute e il benessere generale.</p>
        </div>
        <div class="grid grid--3">
          <div class="benefit-card" v-for="benefit in benefits" :key="benefit.title">
            <span class="benefit-icon">{{ benefit.icon }}</span>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- A CHI È RIVOLTA -->
    <section id="chi-puo-beneficiarne" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Per Tutti</span>
          <h2>A Chi è Rivolta l'Osteopatia?</h2>
          <p>L'osteopatia è adatta a persone di tutte le età e condizioni.</p>
        </div>
        <div class="grid grid--3">
          <div class="audience-card" v-for="audience in audiences" :key="audience.title">
            <div class="audience-icon">{{ audience.icon }}</div>
            <h3>{{ audience.title }}</h3>
            <p>{{ audience.description }}</p>
            <ul class="audience-list">
              <li v-for="item in audience.issues" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- DIFFERENZE -->
    <section id="differenze" class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Confronto</span>
          <h2>Osteopatia vs Altre Discipline</h2>
          <p>Come si differenzia l'osteopatia dalle altre terapie manuali?</p>
        </div>
        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Caratteristica</th>
                <th class="highlight">Osteopatia</th>
                <th>Fisioterapia</th>
                <th>Chiropratica</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparisonRows" :key="row.feature">
                <td><strong>{{ row.feature }}</strong></td>
                <td class="highlight">{{ row.osteopathy }}</td>
                <td>{{ row.physio }}</td>
                <td>{{ row.chiro }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="table-note">
          Ogni disciplina ha i propri punti di forza. L'osteopatia si distingue per il suo
          approccio <strong>globale e integrato</strong> al corpo umano e per l'utilizzo esclusivo
          di tecniche manuali.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section id="faq" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">FAQ</span>
          <h2>Domande Frequenti sull'Osteopatia</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button
              class="faq-question"
              :class="{ active: openFaq === index }"
              @click="toggleFaq(index)"
            >
              {{ faq.question }}
              <span class="arrow">▼</span>
            </button>
            <div class="faq-answer" :class="{ open: openFaq === index }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-osteo">
      <div class="container">
        <div class="cta-content">
          <h2>Vuoi saperne di più?</h2>
          <p>
            Scopri quale trattamento osteopatico è più adatto alle tue esigenze o prenota
            direttamente la tua prima visita.
          </p>
          <div class="cta-actions">
            <NuxtLink to="/trova-il-tuo-percorso" class="btn btn--primary btn--large">
              Trova il Tuo Percorso
            </NuxtLink>
            <NuxtLink to="/contatti" class="btn btn--secondary btn--large">
              Prenota una Visita
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Cos'è l'Osteopatia? Guida Completa – Studio Dalla Torre",
  meta: [
    {
      name: 'description',
      content:
        "Scopri cos'è l'osteopatia, come funziona e quali sono i suoi benefici. Guida completa del Centro Osteopatico Studio Dalla Torre a San Donà di Piave.",
    },
    {
      name: 'keywords',
      content:
        "cos'è osteopatia, osteopatia benefici, trattamento osteopatico, osteopatia come funziona, osteopata San Donà di Piave",
    },
  ],
})

const openFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}

const principles = [
  {
    number: '01',
    title: 'Il corpo come unità funzionale',
    description:
      'L\'organismo umano è un sistema integrato in cui le dimensioni biologica, psichica e relazionale sono inscindibilmente connesse. Una disfunzione somatica localizzata non si esaurisce nel distretto colpito, ma modifica i pattern di tensione fasciale, i circuiti neurovegetativi e la risposta adattativa globale. L\'osteopata ragiona sempre per sistemi, non per segmenti.',
  },
  {
    number: '02',
    title: 'Interdipendenza tra struttura e funzione',
    description:
      'La morfologia anatomica e la fisiologia funzionale si condizionano reciprocamente in modo dinamico e bidirezionale. Un\'alterazione strutturale — sia essa articolare, fasciale o viscerale — modifica i parametri fisiologici locali e a distanza; viceversa, uno squilibrio funzionale cronico induce nel tempo adattamenti morfostrutturali. Identificare e trattare questo rapporto è il fulcro del trattamento osteopatico.',
  },
  {
    number: '03',
    title: 'Autoregolazione e capacità di guarigione intrinseca',
    description:
      'Il corpo è dotato di sofisticati meccanismi omeostatici di autoregolazione — neuroendocrini, immunitari, fasciali — che tendono naturalmente al ripristino dell\'equilibrio. Il compito dell\'osteopata non è sostituirsi a questi processi, ma rimuovere le restrizioni che ne ostacolano l\'espressione, creando le condizioni ottimali affinché l\'organismo recuperi autonomamente la propria salute.',
  },
  {
    number: '04',
    title: 'La supremazia dell\'arteria',
    description:
      'Andrew Taylor Still affermava che la libera circolazione del sangue e di tutti i fluidi corporei — arteriosi, venosi, linfatici e liquorali — è condizione imprescindibile per la salute tissutale. Ogni restrizione meccanica che altera la perfusione locale genera ipossia, accumulo di metaboliti, infiammazione cronica e degenerazione progressiva. Ripristinare la libertà circolatoria è quindi un obiettivo terapeutico prioritario.',
  },
  {
    number: '05',
    title: 'Il tocco terapeutico',
    description:
      'Le mani dell\'osteopata sono al tempo stesso strumento di valutazione e mezzo di cura. Attraverso il contatto manuale diretto l\'operatore percepisce qualità tissutali — densità, temperatura, tensione, mobilità e vitalità — che orientano il trattamento in tempo reale. Il tocco non è mai neutro: modula la risposta del sistema nervoso autonomo, riduce il tono di guardia muscolare e attiva i meccanismi endogeni di modulazione del dolore, rendendo la relazione mano-tessuto il cuore irriducibile della pratica osteopatica.',
  },
]

const process = [
  {
    title: 'Anamnesi Approfondita',
    description:
      'Un colloquio dettagliato sulla tua storia clinica, stile di vita, abitudini posturali e il motivo della visita. Vogliamo conoscerti a fondo.',
    duration: '15-20 minuti',
  },
  {
    title: 'Valutazione Posturale e Palpatoria',
    description:
      'Esame visivo della postura e palpazione dei tessuti per individuare le aree di tensione, restrizione e disfunzione.',
    duration: '10-15 minuti',
  },
  {
    title: 'Test di Mobilità',
    description:
      'Valutazione della mobilità articolare, della flessibilità muscolare e della funzionalità del sistema fasciale.',
    duration: '5-10 minuti',
  },
  {
    title: 'Trattamento Manuale',
    description:
      'Applicazione delle tecniche osteopatiche più appropriate: manipolazioni, mobilizzazioni, tecniche fasciali, viscerali o craniali.',
    duration: '20-30 minuti',
  },
  {
    title: 'Consigli e Piano Terapeutico',
    description:
      'Esercizi da fare a casa, consigli posturali e pianificazione delle sedute successive per un recupero ottimale.',
    duration: '5-10 minuti',
  },
]

const benefits = [
  {
    icon: '🔧',
    title: 'Riduzione del Dolore',
    description: 'Allevia dolori muscolo-scheletrici, cefalee, cervicalgie e lombalgie in modo naturale.',
  },
  {
    icon: '🔄',
    title: 'Miglioramento della Mobilità',
    description: 'Ripristina il range di movimento articolare e la flessibilità muscolare.',
  },
  {
    icon: '⚖️',
    title: 'Riequilibrio Posturale',
    description: 'Corregge gli squilibri posturali che causano compensi e dolori a catena.',
  },
  {
    icon: '😴',
    title: 'Miglioramento del Sonno',
    description: 'Riduce le tensioni e favorisce il rilassamento del sistema nervoso autonomo.',
  },
  {
    icon: '🫁',
    title: 'Funzione Viscerale',
    description: 'Migliora la digestione, riduce il reflusso e allevia i disturbi intestinali.',
  },
  {
    icon: '🧠',
    title: 'Riduzione dello Stress',
    description: 'Le tecniche craniosacrale favoriscono il rilassamento profondo e il benessere psico-fisico.',
  },
  {
    icon: '🏃',
    title: 'Performance Sportiva',
    description: 'Ottimizza le prestazioni atletiche e accelera il recupero dagli infortuni.',
  },
  {
    icon: '🛡️',
    title: 'Prevenzione',
    description: 'Identifica e corregge le disfunzioni prima che diventino patologie conclamate.',
  },
  {
    icon: '👶',
    title: 'Supporto Neonatale',
    description: 'Trattamenti delicatissimi per i neonati per migliorare il sonno, la suzione e il benessere.',
  },
]

const audiences = [
  {
    icon: '👩‍💼',
    title: 'Adulti',
    description:
      'Mal di schiena, cervicalgia e stress da lavoro sedentario sono tra i disturbi più comuni.',
    issues: [
      'Lombalgia e sciatalgia',
      'Cervicalgia e torcicollo',
      'Cefalea e emicrania',
      'Dolore alla spalla',
      'Tunnel carpale',
    ],
  },
  {
    icon: '⚽',
    title: 'Sportivi',
    description:
      'Prevenzione e recupero da infortuni, ottimizzazione della performance e riequilibrio corporeo.',
    issues: [
      'Distorsioni e contratture',
      'Tendiniti e fasciti',
      'Recupero post-infortunio',
      'Dolore al ginocchio',
      'Pubalgia',
    ],
  },
  {
    icon: '🤰',
    title: 'Donne in Gravidanza',
    description:
      'Supporto durante la gravidanza per alleviare i disturbi muscolo-scheletrici tipici del periodo.',
    issues: [
      'Lombalgia gravidica',
      'Sciatica',
      'Dolore pelvico',
      'Preparazione al parto',
      'Recupero post-parto',
    ],
  },
  {
    icon: '👶',
    title: 'Neonati e Bambini',
    description:
      'Trattamenti delicatissimi per i più piccoli, in collaborazione con il Dott. Pippolo.',
    issues: [
      'Coliche del neonato',
      'Plagiocefalia',
      'Difficoltà di suzione',
      'Disturbi del sonno',
      'Otiti ricorrenti',
    ],
  },
  {
    icon: '👴',
    title: 'Anziani',
    description:
      'Mantenimento della mobilità, riduzione del dolore cronico e miglioramento della qualità di vita.',
    issues: [
      'Artrosi e rigidità',
      'Dolore articolare',
      'Equilibrio e mobilità',
      'Dolori cronici',
      'Tensioni muscolari',
    ],
  },
  {
    icon: '💼',
    title: 'Lavoratori Sedentari',
    description:
      'Prevenzione e cura dei problemi legati alla postura da scrivania e all\'uso prolungato del computer.',
    issues: [
      'Cervicalgia da postura',
      'Sindrome del mouse',
      'Mal di testa tensivo',
      'Dolore lombare',
      'Rigidità delle spalle',
    ],
  },
]

const comparisonRows = [
  {
    feature: 'Approccio',
    osteopathy: 'Globale e olistico',
    physio: 'Funzionale e riabilitativo',
    chiro: 'Focalizzato sulla colonna',
  },
  {
    feature: 'Tecniche principali',
    osteopathy: 'Manipolazioni, fasciali, viscerali, craniali',
    physio: 'Esercizi, elettroterapia, massoterapia',
    chiro: 'Aggiustamenti vertebrali',
  },
  {
    feature: 'Area di intervento',
    osteopathy: 'Tutto il corpo',
    physio: 'Sistema muscolo-scheletrico',
    chiro: 'Colonna vertebrale',
  },
  {
    feature: 'Prescrizione medica',
    osteopathy: 'Non necessaria',
    physio: 'Spesso richiesta',
    chiro: 'Non necessaria',
  },
  {
    feature: 'Utilizzo strumenti',
    osteopathy: 'Solo mani',
    physio: 'Mani e strumenti',
    chiro: 'Mani e lettino specifico',
  },
]

const quotes = [
  {
    text: 'Trovare la salute dovrebbe essere lo scopo del medico. Chiunque sa trovare la malattia.',
    author: 'Andrew Taylor Still',
    role: 'Fondatore dell\'Osteopatia (1828–1917)',
  },
  {
    text: 'La legge della vita è il movimento. La struttura governa la funzione, ma è la funzione a dare senso alla struttura.',
    author: 'John Martin Littlejohn',
    role: 'Fondatore della British School of Osteopathy (1865–1947)',
  },
  {
    text: 'Stai fermo, ascolta. Il corpo del paziente conosce la propria storia meglio di qualunque libro.',
    author: 'Rollin E. Becker DO',
    role: 'Padre dell\'Osteopatia Cranica (1910–1996)',
  },
  {
    text: 'Quando percepisco il ritmo cranico, mi accordo alla voce della vita che pulsa in ogni essere umano.',
    author: 'Viola Frymann DO',
    role: 'Pioniera dell\'Osteopatia Pediatrica (1921–2016)',
  },
]

const faqs = [
  {
    question: "L'osteopatia è riconosciuta in Italia?",
    answer:
      "Sì! L'osteopatia è stata riconosciuta come professione sanitaria in Italia con la Legge 3/2018 (Legge Lorenzin). L'Organizzazione Mondiale della Sanità (OMS) ne ha riconosciuto l'efficacia già nel 2010 con le 'Benchmarks for Training in Osteopathy'.",
  },
  {
    question: 'Ci sono controindicazioni?',
    answer:
      "Esistono alcune controindicazioni assolute come fratture recenti, tumori ossei, infezioni acute e alcune patologie vascolari. L'osteopata effettua sempre un'accurata anamnesi iniziale per escludere queste condizioni e, se necessario, indirizza il paziente al medico specialista.",
  },
  {
    question: 'Quante sedute servono per vedere risultati?',
    answer:
      'Dipende dalla problematica, dalla sua cronicità e dalla risposta individuale del paziente. In genere, dopo 2-3 sedute si notano i primi miglioramenti. Per problemi acuti possono bastare 3-5 sedute, mentre per problemi cronici il percorso può essere più lungo.',
  },
  {
    question: "L'osteopata può prescrivere farmaci?",
    answer:
      "No, l'osteopata non prescrive farmaci né effettua interventi chirurgici. L'osteopatia si basa esclusivamente su tecniche manuali. Se durante la valutazione emergono condizioni che richiedono un intervento medico, l'osteopata indirizza il paziente al medico specialista.",
  },
  {
    question: "Qual è la differenza tra osteopatia e fisioterapia?",
    answer:
      "L'osteopatia adotta un approccio globale al corpo, considerandolo come un'unità funzionale, e utilizza esclusivamente tecniche manuali. La fisioterapia si concentra maggiormente sulla riabilitazione di specifiche funzioni e può utilizzare anche strumenti e macchinari. Le due discipline sono complementari e possono integrarsi efficacemente.",
  },
  {
    question: 'Si può fare osteopatia durante la gravidanza?',
    answer:
      "Sì, l'osteopatia in gravidanza è sicura e particolarmente indicata per alleviare disturbi come la lombalgia, la sciatica e il dolore pelvico. L'osteopata utilizza tecniche delicate e adatte al periodo gestazionale, contribuendo al benessere della futura mamma.",
  },
]
</script>

<style scoped>
/* CITAZIONI DEI MAESTRI */
.quotes-masters {
  background: var(--color-text);
}

.quotes-masters .section-header span,
.quotes-masters .section-header p {
  color: rgba(255, 255, 255, 0.65);
}

.quotes-masters .section-header h2 {
  color: var(--color-white);
}

.quotes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem;
  margin-top: 3rem;
}

.quote-card {
  position: relative;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius);
  padding: 2rem 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: transform var(--transition), border-color var(--transition);
}

.quote-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-secondary);
}

.quote-mark {
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 1;
  color: var(--color-secondary);
  opacity: 0.7;
  display: block;
  margin-bottom: -0.5rem;
}

.quote-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
  flex: 1;
}

.quote-footer {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
}

.quote-author {
  font-family: var(--font-heading);
  font-size: 0.95rem;
  color: var(--color-secondary);
  font-weight: 700;
}

.quote-role {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .quotes-grid {
    grid-template-columns: 1fr;
  }
}

.page-hero {
  padding: 3.5rem 0 3rem;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}

.page-hero h1 {
  max-width: 700px;
  margin-bottom: 1rem;
}

.page-hero__subtitle {
  max-width: 680px;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* CONTENT GRID */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 3rem;
  align-items: start;
}

.content-main h2 {
  margin-bottom: 1rem;
}

.info-box {
  background: var(--color-primary-light);
  border-radius: var(--radius);
  padding: 1.75rem;
  margin-top: 1.5rem;
}

.info-box h3 {
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
}

.info-box ul {
  list-style: none;
}

.info-box li {
  padding: 0.35rem 0;
  font-size: 0.92rem;
  color: var(--color-text);
  padding-left: 1.25rem;
  position: relative;
}

.info-box li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

.sidebar-card {
  position: sticky;
  top: 6rem;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
}

.sidebar-card h4 {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-family: var(--font-body);
  font-weight: 600;
}

.sidebar-card ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar-card li a {
  font-size: 0.88rem;
  color: var(--color-text-light);
  display: block;
  padding: 0.4rem 0.75rem;
  border-radius: var(--radius-sm);
  transition: all var(--transition);
}

.sidebar-card li a:hover {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

/* PRINCIPLES */
.principle-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
}

.principle-number {
  font-size: 2rem;
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-primary);
  opacity: 0.3;
  margin-bottom: 0.75rem;
}

.principle-card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
}

.principle-card p {
  font-size: 0.92rem;
}

/* PROCESS */
.process-timeline {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.process-step {
  display: flex;
  gap: 1.5rem;
  padding-bottom: 2rem;
  position: relative;
}

.process-step:last-child {
  padding-bottom: 0;
}

.process-marker {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.process-content h3 {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.process-content p {
  font-size: 0.92rem;
}

.process-duration {
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: var(--color-primary);
  font-weight: 500;
}

/* BENEFITS */
.benefit-card {
  text-align: center;
  padding: 1.5rem;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
}

.benefit-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.benefit-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 0.75rem;
}

.benefit-card h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.benefit-card p {
  font-size: 0.88rem;
}

/* AUDIENCES */
.audience-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
}

.audience-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.audience-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.audience-card > p {
  font-size: 0.92rem;
  margin-bottom: 1rem;
}

.audience-list {
  list-style: none;
}

.audience-list li {
  padding: 0.3rem 0;
  padding-left: 1.25rem;
  position: relative;
  font-size: 0.88rem;
  color: var(--color-text-light);
}

.audience-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* COMPARISON TABLE */
.comparison-table-wrapper {
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  min-width: 600px;
}

.comparison-table th,
.comparison-table td {
  padding: 1rem 1.25rem;
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

.comparison-table th {
  background: var(--color-bg);
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.comparison-table th.highlight,
.comparison-table td.highlight {
  background: var(--color-primary-light);
}

.table-note {
  font-size: 0.88rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

/* FAQ */
.faq-list {
  max-width: 720px;
  margin: 0 auto;
}

/* CTA */
.cta-osteo {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
}

.cta-content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: var(--color-white);
}

.cta-content h2 {
  color: var(--color-white);
  margin-bottom: 1rem;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-actions .btn--primary {
  background: var(--color-white);
  color: var(--color-primary);
}

.cta-actions .btn--secondary {
  border-color: var(--color-white);
  color: var(--color-white);
}

.cta-actions .btn--secondary:hover {
  background: var(--color-white);
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }

  .content-sidebar {
    order: -1;
  }

  .sidebar-card {
    position: static;
  }
}
</style>
