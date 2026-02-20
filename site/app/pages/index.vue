<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="container hero-inner">
        <div class="hero-content">
          <span class="section-label">Osteopatia a San Donà di Piave</span>
          <h1>Il tuo benessere inizia dall'ascolto del corpo</h1>
          <p class="hero-subtitle">
            Studio Dalla Torre è il centro di osteopatia di riferimento a San Donà di Piave. Martina e Leonardo Dalla Torre ti guidano verso il recupero funzionale e il benessere attraverso trattamenti osteopatici personalizzati.
          </p>
          <div class="hero-actions">
            <NuxtLink to="/contatti" class="btn btn--primary btn--large">
              Prenota un Appuntamento
            </NuxtLink>
            <NuxtLink to="/trova-il-tuo-percorso" class="btn btn--secondary btn--large">
              Scopri il Tuo Percorso
            </NuxtLink>
          </div>
          <div class="hero-trust">
            <div class="trust-item">
              <strong>15+</strong>
              <span>Anni di esperienza</span>
            </div>
            <div class="trust-item">
              <strong>2</strong>
              <span>Osteopati qualificati</span>
            </div>
            <div class="trust-item">
              <strong>6</strong>
              <span>Giorni a settimana</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-placeholder">
            <div class="placeholder-content">
              <span>🤲</span>
              <p>Trattamento Osteopatico</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVIZI IN EVIDENZA -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">I Nostri Servizi</span>
          <h2>Un approccio completo al tuo benessere</h2>
          <p>
            Offriamo una gamma di trattamenti osteopatici e servizi complementari per rispondere a ogni esigenza, dal dolore acuto alla prevenzione.
          </p>
        </div>
        <div class="grid grid--3">
          <div class="card" v-for="service in services" :key="service.title">
            <div class="card__icon">{{ service.icon }}</div>
            <h3 class="card__title">{{ service.title }}</h3>
            <p class="card__text">{{ service.description }}</p>
            <NuxtLink :to="service.link" class="card-link">
              Scopri di più →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CHI SIAMO PREVIEW -->
    <section class="section">
      <div class="container">
        <div class="about-preview">
          <div class="about-preview__content">
            <span class="section-label">Chi Siamo</span>
            <h2>Due fratelli, una passione: il tuo benessere</h2>
            <p>
              Martina e Leonardo Dalla Torre uniscono le competenze in scienze motorie e osteopatia
              per offrirti un percorso di cura completo e personalizzato. Dalla valutazione iniziale
              al trattamento, ti accompagnano verso il recupero e la prevenzione.
            </p>
            <div class="team-preview">
              <div class="team-member-mini">
                <div class="member-avatar">M</div>
                <div>
                  <strong>Dott.ssa Martina Dalla Torre</strong>
                  <span>Osteopata D.O. · 15+ anni di esperienza</span>
                </div>
              </div>
              <div class="team-member-mini">
                <div class="member-avatar">L</div>
                <div>
                  <strong>Leonardo Dalla Torre</strong>
                  <span>Osteopata · Specialista in scienze motorie</span>
                </div>
              </div>
            </div>
            <NuxtLink to="/chi-siamo" class="btn btn--secondary">
              Conosci il Team →
            </NuxtLink>
          </div>
          <div class="about-preview__visual">
            <div class="visual-card">
              <div class="visual-stat">
                <span class="stat-number">15+</span>
                <span class="stat-label">Anni nel settore della salute</span>
              </div>
            </div>
            <div class="visual-card visual-card--accent">
              <div class="visual-stat">
                <span class="stat-number">100%</span>
                <span class="stat-label">Approccio personalizzato</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PERCHÉ SCEGLIERCI -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Perché Sceglierci</span>
          <h2>Cosa ci distingue</h2>
        </div>
        <div class="grid grid--4">
          <div class="feature" v-for="feature in features" :key="feature.title">
            <div class="feature__icon">{{ feature.icon }}</div>
            <h3 class="feature__title">{{ feature.title }}</h3>
            <p class="feature__text">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- COME FUNZIONA -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Il Percorso</span>
          <h2>Come funziona la prima visita</h2>
          <p>Un processo semplice e trasparente per prenderci cura di te.</p>
        </div>
        <div class="steps">
          <div class="step" v-for="(step, index) in steps" :key="index">
            <div class="step__number">{{ index + 1 }}</div>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__text">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ HOME -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Domande Frequenti</span>
          <h2>Hai delle domande?</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button class="faq-question" :class="{ active: openFaq === index }" @click="toggleFaq(index)">
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

    <!-- CTA FINALE -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Pronto a stare meglio?</h2>
          <p>
            Prenota il tuo appuntamento allo Studio Dalla Torre. Ricordiamo che ricercammo su appuntamento dal lunedì al sabato, dalle 8:00 alle 13:00 e dalle 14:00 alle 20:00.
          </p>
          <div class="cta-actions">
            <NuxtLink to="/contatti" class="btn btn--primary btn--large">
              Prenota Ora
            </NuxtLink>
            <a href="mailto:info@studiodallatorre.it" class="btn btn--secondary btn--large">
              Scrivici una Email
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Studio Dalla Torre – Osteopatia a San Donà di Piave',
  meta: [
    {
      name: 'description',
      content:
        'Studio Dalla Torre: centro di osteopatia a San Donà di Piave con Martina e Leonardo Dalla Torre. Trattamenti osteopatici, ginnastica posturale e riabilitazione personalizzata.',
    },
    {
      name: 'keywords',
      content:
        'osteopatia, osteopata San Donà di Piave, trattamento osteopatico, ginnastica posturale, dolore schiena, Studio Dalla Torre',
    },
  ],
})

const openFaq = ref<number | null>(null)

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index
}

const services = [
  {
    icon: '🦴',
    title: 'Osteopatia Strutturale',
    description:
      'Trattamento delle disfunzioni muscolo-scheletriche: mal di schiena, cervicalgia, dolori articolari e problemi posturali.',
    link: '/servizi#osteopatia-strutturale',
  },
  {
    icon: '🫁',
    title: 'Osteopatia Viscerale',
    description:
      'Intervento sugli organi interni per migliorare la mobilità viscerale e risolvere disturbi digestivi, reflusso e tensioni addominali.',
    link: '/servizi#osteopatia-viscerale',
  },
  {
    icon: '🧠',
    title: 'Osteopatia Craniosacrale',
    description:
      'Tecniche dolci sul sistema craniosacrale per trattare cefalee, emicranie, disturbi del sonno e stress.',
    link: '/servizi#osteopatia-craniosacrale',
  },
  {
    icon: '🏋️',
    title: 'Ginnastica Posturale',
    description:
      'Programmi di esercizi mirati per correggere la postura, prevenire il dolore e migliorare la consapevolezza corporea.',
    link: '/servizi#ginnastica-posturale',
  },
  {
    icon: '👶',
    title: 'Osteopatia Pediatrica',
    description:
      'Trattamenti delicati per neonati e bambini, in collaborazione con il Dott. Emanuele Pippolo, specialista in osteopatia neonatale.',
    link: '/servizi#osteopatia-pediatrica',
  },
  {
    icon: '⚽',
    title: 'Osteopatia Sportiva',
    description:
      'Prevenzione e recupero da infortuni sportivi. Ottimizzazione della performance atletica attraverso il riequilibrio corporeo.',
    link: '/servizi#osteopatia-sportiva',
  },
]

const features = [
  {
    icon: '🎯',
    title: 'Approccio Personalizzato',
    description: 'Ogni paziente è unico. Creiamo percorsi di cura su misura basati sulle tue esigenze specifiche.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Competenza Familiare',
    description: 'Due fratelli con formazione in scienze motorie e osteopatia per un approccio multidisciplinare.',
  },
  {
    icon: '🤝',
    title: 'Rete Professionale',
    description: 'Collaboriamo con specialisti come il Dott. Pippolo per offrirti un supporto completo e integrato.',
  },
  {
    icon: '📍',
    title: 'Comodo e Accessibile',
    description: 'Studio in posizione centrale a San Donà di Piave, aperto 6 giorni su 7 con orari flessibili.',
  },
]

const steps = [
  {
    title: 'Contattaci',
    description: 'Prenota telefonicamente o via email. Ti troveremo il primo orario disponibile.',
  },
  {
    title: 'Prima Valutazione',
    description:
      'Un colloquio approfondito e un esame posturale per capire le tue problematiche e i tuoi obiettivi.',
  },
  {
    title: 'Piano di Trattamento',
    description: 'Definiamo insieme un percorso personalizzato con frequenza e tipologia di trattamento ideali.',
  },
  {
    title: 'Trattamento e Benessere',
    description: 'Iniziamo il percorso con sedute mirate e monitoraggio costante dei progressi.',
  },
]

const faqs = [
  {
    question: "Cos'è l'osteopatia?",
    answer:
      "L'osteopatia è una disciplina terapeutica manuale che si basa sul principio che il corpo è un'unità funzionale integrata. L'osteopata utilizza tecniche manuali per individuare e trattare le disfunzioni che limitano il movimento e causano dolore, favorendo la capacità di autoguarigione del corpo.",
  },
  {
    question: 'Serve la prescrizione medica per un trattamento osteopatico?',
    answer:
      "No, non è necessaria una prescrizione medica per recarsi dall'osteopata. L'osteopatia è una professione sanitaria autonoma e puoi prenotare direttamente il tuo appuntamento.",
  },
  {
    question: 'Quanto dura una seduta?',
    answer:
      'La prima visita dura circa 50-60 minuti, poiché include un colloquio approfondito e la valutazione. Le sedute successive durano generalmente 40-50 minuti.',
  },
  {
    question: "L'osteopatia è dolorosa?",
    answer:
      "No, le tecniche osteopatiche sono generalmente indolori. L'osteopata adatta sempre l'intensità del trattamento alla sensibilità e alle condizioni del paziente, utilizzando quando necessario tecniche più dolci come quelle craniosacrale.",
  },
  {
    question: 'Quante sedute sono necessarie?',
    answer:
      "Il numero di sedute varia in base alla problematica e alla risposta individuale. Generalmente, dopo 3-4 sedute si nota un miglioramento significativo. L'osteopata ti fornirà un piano di trattamento personalizzato durante la prima visita.",
  },
]
</script>

<style scoped>
/* HERO */
.hero {
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content h1 {
  margin-bottom: 1.25rem;
}

.hero-subtitle {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  max-width: 540px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.hero-trust {
  display: flex;
  gap: 2rem;
}

.trust-item {
  display: flex;
  flex-direction: column;
}

.trust-item strong {
  font-size: 1.8rem;
  font-family: var(--font-heading);
  color: var(--color-primary);
  line-height: 1;
}

.trust-item span {
  font-size: 0.8rem;
  color: var(--color-text-light);
  margin-top: 0.25rem;
}

.hero-image-placeholder {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  border-radius: var(--radius);
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
}

.placeholder-content {
  text-align: center;
  color: var(--color-white);
}

.placeholder-content span {
  font-size: 4rem;
  display: block;
  margin-bottom: 1rem;
}

.placeholder-content p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

/* CARD LINK */
.card-link {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
}

.card-link:hover {
  color: var(--color-primary-dark);
}

/* ABOUT PREVIEW */
.about-preview {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.about-preview__content h2 {
  margin-bottom: 1rem;
}

.team-preview {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.team-member-mini {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
}

.member-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.team-member-mini strong {
  display: block;
  font-size: 0.95rem;
}

.team-member-mini span {
  font-size: 0.8rem;
  color: var(--color-text-light);
}

.about-preview__visual {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.visual-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
}

.visual-card--accent {
  background: var(--color-primary);
  border-color: var(--color-primary);
}

.visual-card--accent .stat-number,
.visual-card--accent .stat-label {
  color: var(--color-white);
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-light);
}

/* FEATURES */
.feature {
  text-align: center;
  padding: 1.5rem;
}

.feature__icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature__title {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.feature__text {
  font-size: 0.9rem;
  color: var(--color-text-light);
}

/* STEPS */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  counter-reset: step;
}

.step {
  text-align: center;
  padding: 1.5rem;
  position: relative;
}

.step__number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
}

.step__title {
  font-size: 1.05rem;
  margin-bottom: 0.5rem;
}

.step__text {
  font-size: 0.9rem;
  color: var(--color-text-light);
}

/* FAQ */
.faq-list {
  max-width: 720px;
  margin: 0 auto;
}

/* CTA */
.cta-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
}

.cta-box {
  text-align: center;
  color: var(--color-white);
  max-width: 640px;
  margin: 0 auto;
}

.cta-box h2 {
  color: var(--color-white);
  margin-bottom: 1rem;
}

.cta-box p {
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 2rem;
  font-size: 1.05rem;
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

.cta-actions .btn--primary:hover {
  background: var(--color-secondary-light);
}

.cta-actions .btn--secondary {
  border-color: var(--color-white);
  color: var(--color-white);
}

.cta-actions .btn--secondary:hover {
  background: var(--color-white);
  color: var(--color-primary);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .hero {
    padding: 6rem 0 3rem;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-visual {
    order: -1;
  }

  .hero-trust {
    gap: 1.5rem;
  }

  .about-preview {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
