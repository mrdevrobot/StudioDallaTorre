<template>
  <div>
    <!-- BREADCRUMBS -->
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Chi Siamo</span>
    </div>

    <!-- HERO -->
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Il Nostro Team</span>
        <h1>Due fratelli, una missione: il tuo benessere</h1>
        <p class="page-hero__subtitle">
          Martina e Leonardo Dalla Torre combinano anni di esperienza in scienze motorie e
          osteopatia per offrirti un percorso di cura completo e personalizzato.
        </p>
      </div>
    </section>

    <!-- LA NOSTRA STORIA -->
    <section class="section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <span class="section-label">La Nostra Storia</span>
            <h2>Una passione che diventa professione</h2>
            <p>
              Lo Studio Dalla Torre nasce dalla passione condivisa dei fratelli Martina e Leonardo
              per il benessere e la salute della persona. Entrambi laureati in scienze motorie e
              formati come osteopati, hanno unito le proprie competenze per creare un centro di
              eccellenza a San Donà di Piave.
            </p>
            <p>
              La nostra filosofia si basa sull'ascolto attento del paziente, sulla valutazione
              globale del corpo e sull'utilizzo di tecniche manuali scientificamente validate.
              Crediamo che ogni persona sia unica e meriti un approccio personalizzato.
            </p>
            <p>
              Situato in Via Eraclea 5 a San Donà di Piave, il nostro studio è un ambiente
              accogliente e professionale dove prendersi cura di sé stessi diventa un'esperienza
              positiva e rassicurante.
            </p>
          </div>
          <div class="story-visual">
            <div class="story-logo-box">
              <img src="/logo.svg" alt="Studio Dalla Torre" class="story-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Il Team</span>
          <h2>Professionisti al tuo servizio</h2>
        </div>

        <!-- MARTINA -->
        <div class="team-card">
          <div class="team-card__avatar">
            <div class="avatar-circle">M</div>
          </div>
          <div class="team-card__content">
            <div class="team-card__header">
              <h3>Dott.ssa Martina Dalla Torre</h3>
              <span class="team-badge">Osteopata D.O.</span>
            </div>
            <p class="team-card__role">Fondatrice · Osteopata · Personal Trainer</p>
            <p>
              Martina, 41 anni, è laureata in scienze motorie e osteopata D.O. (Diploma in
              Osteopatia). Con oltre <strong>15 anni di esperienza</strong> nel settore della
              salute e del personal training e <strong>5 anni come osteopata</strong>, rappresenta
              il punto di riferimento dello studio.
            </p>
            <p>
              La sua lunga esperienza nel campo delle scienze motorie le permette di integrare
              perfettamente l'approccio osteopatico con la conoscenza del movimento umano, offrendo
              ai pazienti un percorso di cura che va dalla risoluzione del dolore alla prevenzione
              attraverso l'esercizio fisico.
            </p>
            <div class="team-card__skills">
              <span class="skill-tag">Osteopatia Strutturale</span>
              <span class="skill-tag">Ginnastica Posturale</span>
              <span class="skill-tag">Personal Training</span>
              <span class="skill-tag">Riabilitazione Motoria</span>
              <span class="skill-tag">Trattamento del Dolore</span>
            </div>
          </div>
        </div>

        <!-- LEONARDO -->
        <div class="team-card">
          <div class="team-card__avatar">
            <div class="avatar-circle avatar-circle--accent">L</div>
          </div>
          <div class="team-card__content">
            <div class="team-card__header">
              <h3>Leonardo Dalla Torre</h3>
              <span class="team-badge">Osteopata</span>
            </div>
            <p class="team-card__role">Osteopata · Personal Trainer</p>
            <p>
              Leonardo, 25 anni, è laureato in scienze motorie e osteopata. Con
              <strong>3 anni di esperienza come personal trainer</strong> e
              <strong>1 anno come osteopata</strong>, porta energia, freschezza e le più recenti
              conoscenze scientifiche nello studio.
            </p>
            <p>
              La sua formazione recente gli consente di applicare le tecniche più aggiornate e le
              ultime evidenze scientifiche nel campo dell'osteopatia. La sua passione per lo sport
              lo rende particolarmente attento alle esigenze degli atleti e di chi pratica attività
              fisica.
            </p>
            <div class="team-card__skills">
              <span class="skill-tag">Osteopatia dello Sport</span>
              <span class="skill-tag">Personal Training</span>
              <span class="skill-tag">Preparazione Atletica</span>
              <span class="skill-tag">Biomeccanica</span>
            </div>
          </div>
        </div>

        <!-- COLLABORATORE -->
        <div class="team-card team-card--collab">
          <div class="team-card__avatar">
            <div class="avatar-circle avatar-circle--secondary">EP</div>
          </div>
          <div class="team-card__content">
            <div class="team-card__header">
              <h3>Dott. Emanuele Pippolo</h3>
              <span class="team-badge team-badge--collab">Collaboratore</span>
            </div>
            <p class="team-card__role">Osteopata Specializzato · Assistenza Neonatale</p>
            <p>
              Il Dott. Emanuele Pippolo collabora periodicamente con lo Studio Dalla Torre offrendo
              assistenza osteopatica di <strong>alto livello</strong> e specializzata in ambito
              <strong>neonatale</strong>. La sua competenza arricchisce l'offerta dello studio,
              garantendo ai più piccoli un'assistenza delicata e professionale.
            </p>
            <div class="team-card__skills">
              <span class="skill-tag">Osteopatia Neonatale</span>
              <span class="skill-tag">Osteopatia Pediatrica</span>
              <span class="skill-tag">Assistenza Specializzata</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- I NOSTRI VALORI -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">I Nostri Valori</span>
          <h2>Cosa guida il nostro lavoro</h2>
        </div>
        <div class="grid grid--3">
          <div class="value-card" v-for="value in values" :key="value.title">
            <div class="value-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section cta-about">
      <div class="container">
        <div class="cta-box-alt">
          <h2>Vieni a conoscerci di persona</h2>
          <p>
            Siamo in Via Eraclea 5 a San Donà di Piave. Prenota la tua prima visita e scopri come
            possiamo aiutarti.
          </p>
          <NuxtLink to="/contatti" class="btn btn--primary btn--large">
            Prenota la tua Prima Visita
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Chi Siamo – Studio Dalla Torre | Osteopati a San Donà di Piave',
  meta: [
    {
      name: 'description',
      content:
        'Conosci il team dello Studio Dalla Torre: Martina e Leonardo Dalla Torre, osteopati e laureati in scienze motorie. Oltre 15 anni di esperienza a San Donà di Piave.',
    },
  ],
})

const values = [
  {
    icon: '👂',
    title: 'Ascolto',
    description:
      'Ogni percorso inizia dall\'ascolto attento delle tue esigenze. Dedichiamo il tempo necessario per comprendere la tua storia clinica e i tuoi obiettivi.',
  },
  {
    icon: '🔬',
    title: 'Competenza Scientifica',
    description:
      'Le nostre tecniche sono basate sulle più recenti evidenze scientifiche. Ci aggiorniamo costantemente per offrirti il meglio.',
  },
  {
    icon: '🤲',
    title: 'Approccio Olistico',
    description:
      'Guardiamo la persona nella sua totalità. Non trattiamo solo il sintomo, ma cerchiamo la causa profonda del disagio.',
  },
  {
    icon: '💪',
    title: 'Empowerment',
    description:
      'Ti forniamo gli strumenti per prenderti cura di te stesso. Esercizi, consigli posturali e consapevolezza del corpo.',
  },
  {
    icon: '🤝',
    title: 'Collaborazione',
    description:
      'Lavoriamo in rete con altri professionisti per offrirti un supporto completo. La tua salute è un lavoro di squadra.',
  },
  {
    icon: '❤️',
    title: 'Passione',
    description:
      'Come fratelli condividiamo la passione per il benessere. Ogni giorno ci impegniamo per fare la differenza nella vita dei nostri pazienti.',
  },
]
</script>

<style scoped>
.page-hero {
  padding: 8rem 0 3rem;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}

.page-hero h1 {
  max-width: 700px;
  margin-bottom: 1rem;
}

.page-hero__subtitle {
  max-width: 640px;
  font-size: 1.1rem;
  line-height: 1.8;
}

/* STORY */
.story-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.story-content h2 {
  margin-bottom: 1rem;
}

.story-logo-box {
  background: var(--color-primary-light);
  border-radius: var(--radius);
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  padding: 3rem;
}

.story-logo {
  width: 100%;
  max-width: 240px;
  height: auto;
}

/* TEAM CARDS */
.team-card {
  display: flex;
  gap: 2.5rem;
  padding: 2.5rem;
  background: var(--color-white);
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
}

.team-card--collab {
  border-left: 4px solid var(--color-secondary);
}

.team-card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
}

.team-card__header h3 {
  font-size: 1.4rem;
}

.team-badge {
  display: inline-block;
  padding: 0.2rem 0.75rem;
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.team-badge--collab {
  background: var(--color-secondary-light);
  color: #8a6d2b;
}

.team-card__role {
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-bottom: 1rem;
  font-weight: 500;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.8rem;
  font-family: var(--font-heading);
  flex-shrink: 0;
}

.avatar-circle--accent {
  background: var(--color-accent);
}

.avatar-circle--secondary {
  background: var(--color-secondary);
}

.team-card__skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.skill-tag {
  display: inline-block;
  padding: 0.3rem 0.75rem;
  background: var(--color-bg-alt);
  color: var(--color-text-light);
  font-size: 0.8rem;
  border-radius: 20px;
  font-weight: 500;
}

/* VALUES */
.value-card {
  text-align: center;
  padding: 2rem;
}

.value-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.value-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.value-card p {
  font-size: 0.92rem;
}

/* CTA */
.cta-about {
  background: var(--color-primary-light);
}

.cta-box-alt {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-box-alt h2 {
  margin-bottom: 1rem;
}

.cta-box-alt p {
  margin-bottom: 2rem;
  font-size: 1.05rem;
}

@media (max-width: 768px) {
  .story-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .team-card {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
  }
}
</style>
