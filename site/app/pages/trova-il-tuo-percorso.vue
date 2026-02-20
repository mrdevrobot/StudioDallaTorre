<template>
  <div>
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Trova il Tuo Percorso</span>
    </div>

    <!-- HERO -->
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Autovalutazione</span>
        <h1>Trova il trattamento più adatto a te</h1>
        <p class="page-hero__subtitle">
          Rispondi a poche domande e ti indicheremo il percorso di trattamento
          più adatto alla tua situazione. Non è una diagnosi medica, ma un
          orientamento per capire come possiamo aiutarti.
        </p>
      </div>
    </section>

    <!-- QUIZ -->
    <section class="section">
      <div class="container quiz-wrapper">
        <!-- PROGRESS -->
        <div class="quiz-progress" v-if="!showResult">
          <div class="progress-bar">
            <div class="progress-bar__fill" :style="{ width: progressPercent + '%' }"></div>
          </div>
          <span>Domanda {{ currentStep + 1 }} di {{ questions.length }}</span>
        </div>

        <!-- QUESTION -->
        <transition name="slide" mode="out-in">
          <div class="quiz-card" v-if="!showResult" :key="currentStep">
            <h2 class="quiz-question">{{ questions[currentStep].text }}</h2>
            <p class="quiz-hint" v-if="questions[currentStep].hint">
              {{ questions[currentStep].hint }}
            </p>
            <div class="quiz-options">
              <button
                v-for="option in questions[currentStep].options"
                :key="option.value"
                class="quiz-option"
                :class="{ selected: answers[currentStep] === option.value }"
                @click="selectOption(option.value, option.scores)"
              >
                <span class="option-icon">{{ option.icon }}</span>
                <div class="option-content">
                  <strong>{{ option.label }}</strong>
                  <span v-if="option.sublabel">{{ option.sublabel }}</span>
                </div>
              </button>
            </div>
            <div class="quiz-nav">
              <button
                class="btn btn--secondary"
                v-if="currentStep > 0"
                @click="prevStep"
              >
                ← Indietro
              </button>
            </div>
          </div>

          <!-- RESULT -->
          <div class="quiz-result" v-else>
            <div class="result-header">
              <span class="result-icon">{{ topResult?.icon }}</span>
              <h2>Il tuo percorso consigliato</h2>
            </div>
            <div class="result-primary">
              <div class="result-badge">Trattamento principale</div>
              <h3>{{ topResult?.title }}</h3>
              <p>{{ topResult?.description }}</p>
            </div>

            <div class="result-secondary" v-if="secondResult">
              <div class="result-badge result-badge--secondary">Complementare</div>
              <h3>{{ secondResult?.title }}</h3>
              <p>{{ secondResult?.description }}</p>
            </div>

            <div class="result-advice">
              <h4>💡 Cosa fare ora</h4>
              <p>{{ topResult?.advice }}</p>
            </div>

            <div class="result-actions">
              <button class="btn btn--primary btn--large" @click="goToBooking">
                🗓 Prenota con il form
              </button>
              <a :href="waBookingLink" target="_blank" rel="noopener noreferrer" class="btn btn--wa btn--large">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
              <a :href="`/servizi#${topResult?.serviceId}`" class="btn btn--secondary btn--large">
                Scopri il Trattamento
              </a>
            </div>

            <button class="quiz-restart" @click="restartQuiz">
              ↩ Ricomincia il Questionario
            </button>
          </div>
        </transition>
      </div>
    </section>

    <!-- DISCLAIMER -->
    <section class="section section--alt">
      <div class="container disclaimer-box">
        <h3>⚠️ Importante</h3>
        <p>
          Questo strumento ha scopo puramente orientativo e non sostituisce una valutazione
          clinica professionale. Per una diagnosi accurata e un piano di trattamento adeguato,
          è sempre necessaria una visita con i nostri osteopati. In caso di dolore acuto intenso,
          febbre, perdita di forza o altri sintomi gravi, consulta immediatamente il tuo medico.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Trova il Tuo Percorso – Studio Dalla Torre | Guida ai Trattamenti Osteopatici',
  meta: [
    {
      name: 'description',
      content:
        'Rispondi a poche domande e scopri quale trattamento osteopatico è più adatto a te. Strumento di autovalutazione gratuito dello Studio Dalla Torre di San Donà di Piave.',
    },
  ],
})

const treatments = {
  strutturale: {
    id: 'strutturale',
    serviceId: 'osteopatia-strutturale',
    icon: '🦴',
    title: 'Osteopatia Strutturale',
    description:
      "Il tuo profilo indica problematiche muscolo-scheletriche che rispondono bene alle tecniche osteopatiche strutturali. Manipolazioni, mobilizzazioni e tecniche miofasciali sono l'approccio più indicato.",
    advice:
      "Prenota una prima visita osteopatica. Porta con te eventuali referti medici o diagnostica per immagini (RX, RMN) relativi al tuo problema. La prima visita valuterà la tua postura, i range di movimento e le aree di restrizione.",
  },
  craniosacrale: {
    id: 'craniosacrale',
    serviceId: 'osteopatia-craniosacrale',
    icon: '🧠',
    title: 'Osteopatia Craniosacrale',
    description:
      "Il tuo profilo suggerisce beneficio dall'approccio craniosacrale: un trattamento dolce che agisce sul sistema nervoso e aiuta cefalee, stress e disturbi del sonno.",
    advice:
      "La prima seduta craniosacrale dura circa 60 minuti. Ti chiederemo della tua storia clinica, stile di vita e livelli di stress. Il trattamento è molto rilassante: molte persone si addormentano durante la seduta.",
  },
  viscerale: {
    id: 'viscerale',
    serviceId: 'osteopatia-viscerale',
    icon: '🫁',
    title: 'Osteopatia Viscerale',
    description:
      "I tuoi sintomi suggeriscono possibili disfunzioni viscerali. L'osteopatia viscerale lavora sulla mobilità degli organi interni, spesso collegati a dolori ricorrenti e disturbi digestivi.",
    advice:
      "Porta con te eventuali gastroscopie, ecografie o referti relativi a disturbi digestivi. Il trattamento è dolce e indolore. Segnala sempre ai nostri osteopati tutti i farmaci che stai assumendo.",
  },
  posturale: {
    id: 'posturale',
    serviceId: 'ginnastica-posturale',
    icon: '🏋️',
    title: 'Ginnastica Posturale',
    description:
      "Il tuo profilo indica che un programma di ginnastica posturale personalizzata è il percorso più indicato. Lavorerete sulla postura, il rinforzo muscolare e la prevenzione.",
    advice:
      "Indossa abbigliamento comodo per la prima seduta. Martina o Leonardo valuteranno la tua postura e creeranno un programma specifico per te. Ti verranno insegnati esercizi da svolgere anche a casa.",
  },
  pediatrica: {
    id: 'pediatrica',
    serviceId: 'osteopatia-pediatrica',
    icon: '👶',
    title: 'Osteopatia Pediatrica / Neonatale',
    description:
      "Il profilo indica che il bambino potrebbe beneficiare di un trattamento osteopatico pediatrico. Il Dott. Pippolo, nostro collaboratore specializzato, offre assistenza neonatale e pediatrica di alto livello.",
    advice:
      "Per i neonati, porta il bambino dopo l'allattamento (non a stomaco pieno né vuoto). Per i bambini più grandi, spiega loro brevemente cosa farete. Il trattamento è indolore e spesso i bambini si addormentano.",
  },
  sportiva: {
    id: 'sportiva',
    serviceId: 'osteopatia-sportiva',
    icon: '⚽',
    title: 'Osteopatia Sportiva',
    description:
      "Il tuo profilo atletico suggerisce un approccio osteopatico sportivo. Leonardo, con la sua esperienza come personal trainer e osteopata, è il riferimento ideale per gli sportivi.",
    advice:
      "Porta con te informazioni sul tuo sport, frequenza di allenamento e storia degli infortuni. Se possibile, vieni vestito con abbigliamento sportivo per facilitare la valutazione biomeccanica.",
  },
}

type TreatmentKey = keyof typeof treatments

const questions = [
  {
    text: "Qual è il problema principale per cui vorresti consultare un osteopata?",
    hint: "Scegli la risposta che descrive meglio il tuo disagio principale.",
    options: [
      {
        icon: '💢',
        label: 'Dolore muscolare o articolare',
        sublabel: 'Schiena, collo, spalle, ginocchia...',
        value: 'pain',
        scores: { strutturale: 3, sportiva: 1 },
      },
      {
        icon: '🤕',
        label: 'Cefalea, emicrania o stress',
        sublabel: 'Dolori alla testa, difficoltà a dormire',
        value: 'head',
        scores: { craniosacrale: 3, strutturale: 1 },
      },
      {
        icon: '🍽️',
        label: 'Disturbi digestivi',
        sublabel: 'Reflusso, gonfiore, colon irritabile',
        value: 'digestive',
        scores: { viscerale: 3, strutturale: 1 },
      },
      {
        icon: '🏃',
        label: 'Infortunio sportivo o performance',
        sublabel: 'Recupero infortuni, ottimizzazione atletica',
        value: 'sport',
        scores: { sportiva: 3, strutturale: 2 },
      },
      {
        icon: '👶',
        label: 'È per un bambino/neonato',
        sublabel: 'Coliche, sonno, plagiocefalia...',
        value: 'child',
        scores: { pediatrica: 5 },
      },
      {
        icon: '🧘',
        label: 'Postura e prevenzione',
        sublabel: 'Voglio migliorare la postura e stare bene',
        value: 'posture',
        scores: { posturale: 3, strutturale: 1 },
      },
    ],
  },
  {
    text: "Da quanto tempo hai questo problema?",
    hint: null,
    options: [
      {
        icon: '⚡',
        label: 'Meno di 2 settimane',
        sublabel: 'Problema acuto recente',
        value: 'acute',
        scores: { strutturale: 2 },
      },
      {
        icon: '📅',
        label: 'Da 2 settimane a 3 mesi',
        sublabel: 'Fase subacuta',
        value: 'subacute',
        scores: { strutturale: 2, posturale: 1 },
      },
      {
        icon: '🗓️',
        label: 'Da più di 3 mesi',
        sublabel: 'Problema cronico',
        value: 'chronic',
        scores: { strutturale: 1, craniosacrale: 1, viscerale: 1, posturale: 2 },
      },
      {
        icon: '🔁',
        label: 'Va e viene periodicamente',
        sublabel: 'Ricorrente',
        value: 'recurrent',
        scores: { strutturale: 1, posturale: 2, craniosacrale: 1 },
      },
    ],
  },
  {
    text: "Come descriveresti il tuo livello di stress nella vita quotidiana?",
    hint: null,
    options: [
      {
        icon: '😌',
        label: 'Basso - mi sento generalmente rilassato',
        value: 'low',
        sublabel: null,
        scores: { strutturale: 1 },
      },
      {
        icon: '😐',
        label: 'Moderato - ho qualche giornata difficile',
        value: 'moderate',
        sublabel: null,
        scores: { craniosacrale: 1, strutturale: 1 },
      },
      {
        icon: '😟',
        label: 'Alto - spesso mi sento teso o esausto',
        value: 'high',
        sublabel: null,
        scores: { craniosacrale: 3 },
      },
      {
        icon: '😰',
        label: 'Molto alto - è significativo nella mia vita',
        value: 'very_high',
        sublabel: null,
        scores: { craniosacrale: 4 },
      },
    ],
  },
  {
    text: "Pratichi attività fisica o sport?",
    hint: null,
    options: [
      {
        icon: '🛋️',
        label: 'No, stile di vita sedentario',
        value: 'sedentary',
        sublabel: null,
        scores: { posturale: 2 },
      },
      {
        icon: '🚶',
        label: 'Attività leggera (passeggiate, stretching)',
        value: 'light',
        sublabel: null,
        scores: { posturale: 1 },
      },
      {
        icon: '🏊',
        label: 'Attività moderata (palestra, nuoto)',
        value: 'moderate',
        sublabel: null,
        scores: { strutturale: 1, posturale: 1 },
      },
      {
        icon: '🏆',
        label: 'Sport intenso o agonistico',
        value: 'intense',
        sublabel: null,
        scores: { sportiva: 3, strutturale: 1 },
      },
    ],
  },
  {
    text: "Hai già effettuato trattamenti osteopatici o fisioterapici in passato?",
    hint: null,
    options: [
      {
        icon: '❌',
        label: 'No, è la prima volta',
        value: 'never',
        sublabel: null,
        scores: { strutturale: 1 },
      },
      {
        icon: '✅',
        label: 'Sì, con buoni risultati',
        value: 'yes_good',
        sublabel: null,
        scores: { strutturale: 2 },
      },
      {
        icon: '⚖️',
        label: 'Sì, con risultati parziali',
        value: 'yes_partial',
        sublabel: null,
        scores: { craniosacrale: 1, viscerale: 1 },
      },
      {
        icon: '🚫',
        label: 'Sì, senza benefici significativi',
        value: 'yes_no_benefit',
        sublabel: null,
        scores: { craniosacrale: 2, viscerale: 2 },
      },
    ],
  },
]

const currentStep = ref(0)
const answers = ref<(string | null)[]>(Array(questions.length).fill(null))
const scoreMap = ref<Record<TreatmentKey, number>>({
  strutturale: 0,
  craniosacrale: 0,
  viscerale: 0,
  posturale: 0,
  pediatrica: 0,
  sportiva: 0,
})
const showResult = ref(false)

const progressPercent = computed(() =>
  Math.round((currentStep.value / questions.length) * 100)
)

const sortedResults = computed(() => {
  return (Object.entries(scoreMap.value) as [TreatmentKey, number][])
    .sort((a, b) => b[1] - a[1])
    .filter(([, score]) => score > 0)
})

const topResult = computed(() =>
  sortedResults.value[0] ? treatments[sortedResults.value[0][0]] : null
)

const secondResult = computed(() =>
  sortedResults.value[1] && sortedResults.value[1][1] > 0
    ? treatments[sortedResults.value[1][0]]
    : null
)

function selectOption(value: string, scores: Partial<Record<TreatmentKey, number>>) {
  answers.value[currentStep.value] = value
  for (const [key, score] of Object.entries(scores) as [TreatmentKey, number][]) {
    scoreMap.value[key] = (scoreMap.value[key] || 0) + score
  }
  if (currentStep.value < questions.length - 1) {
    currentStep.value++
  } else {
    showResult.value = true
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

function restartQuiz() {
  currentStep.value = 0
  answers.value = Array(questions.length).fill(null)
  scoreMap.value = { strutturale: 0, craniosacrale: 0, viscerale: 0, posturale: 0, pediatrica: 0, sportiva: 0 }
  showResult.value = false
}

function buildSummary(): string {
  const lines: string[] = []
  lines.push('Ho completato il questionario "Trova il Tuo Percorso" con i seguenti risultati:')
  lines.push('')
  lines.push(`✅ Trattamento consigliato: ${topResult.value?.title ?? ''}`)
  if (secondResult.value) {
    lines.push(`➕ Complementare suggerito: ${secondResult.value.title}`)
  }
  lines.push('')
  lines.push('Riepilogo risposte:')
  questions.forEach((q, i) => {
    const val = answers.value[i]
    if (val) {
      const opt = q.options.find(o => o.value === val)
      if (opt) lines.push(`• ${q.text.replace('?', '')}: ${opt.label}`)
    }
  })
  return lines.join('\n')
}

function goToBooking() {
  const subject = topResult.value?.serviceId ?? 'prenotazione'
  const message = buildSummary()
  navigateTo({ path: '/contatti', query: { from: 'quiz', subject, message } })
}

const { buildLink } = useWhatsApp()
const waBookingLink = computed(() => {
  if (!topResult.value) return '#'
  return buildLink(buildSummary())
})
</script>

<style scoped>
.btn--wa {
  background: #25D366;
  color: white;
  border: 2px solid #25D366;
}
.btn--wa:hover {
  background: #1ebe5d;
  border-color: #1ebe5d;
  color: white;
  transform: translateY(-2px);
}
.btn--wa svg { flex-shrink: 0; }

.page-hero {
  padding: 8rem 0 3rem;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}
.page-hero h1 { max-width: 700px; margin-bottom: 1rem; }
.page-hero__subtitle { max-width: 640px; font-size: 1.1rem; line-height: 1.8; }

.quiz-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

/* PROGRESS */
.quiz-progress {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background: var(--color-primary);
  border-radius: 4px;
  transition: width 0.4s ease;
}

.quiz-progress span {
  font-size: 0.85rem;
  color: var(--color-text-light);
  white-space: nowrap;
}

/* QUIZ CARD */
.quiz-card {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
}

.quiz-question {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.quiz-hint {
  font-size: 0.9rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: var(--color-bg-alt);
  border: 2px solid transparent;
  border-radius: var(--radius-sm);
  cursor: pointer;
  text-align: left;
  transition: all var(--transition);
  font-family: var(--font-body);
  width: 100%;
}

.quiz-option:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.quiz-option.selected {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.option-icon { font-size: 1.5rem; flex-shrink: 0; }
.option-content { display: flex; flex-direction: column; gap: 0.2rem; }
.option-content strong { font-size: 0.95rem; color: var(--color-text); }
.option-content span { font-size: 0.82rem; color: var(--color-text-light); }

.quiz-nav { display: flex; gap: 1rem; }

/* SLIDE TRANSITION */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from { opacity: 0; transform: translateX(30px); }
.slide-leave-to { opacity: 0; transform: translateX(-30px); }

/* RESULT */
.quiz-result {
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
  text-align: center;
}

.result-header { margin-bottom: 2rem; }
.result-icon { font-size: 4rem; display: block; margin-bottom: 1rem; }
.result-header h2 { font-size: 1.6rem; }

.result-badge {
  display: inline-block;
  padding: 0.3rem 0.85rem;
  background: var(--color-primary);
  color: var(--color-white);
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.75rem;
}

.result-badge--secondary {
  background: var(--color-secondary);
}

.result-primary {
  background: var(--color-primary-light);
  border-radius: var(--radius-sm);
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.result-primary h3 { font-size: 1.3rem; margin-bottom: 0.75rem; color: var(--color-primary-dark); }
.result-primary p { font-size: 0.95rem; margin: 0; }

.result-secondary {
  background: var(--color-secondary-light);
  border-radius: var(--radius-sm);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.result-secondary h3 { font-size: 1.15rem; margin-bottom: 0.5rem; }
.result-secondary p { font-size: 0.9rem; margin: 0; }

.result-advice {
  background: var(--color-bg-alt);
  border-radius: var(--radius-sm);
  padding: 1.25rem;
  margin-bottom: 2rem;
  text-align: left;
}

.result-advice h4 { font-size: 0.95rem; margin-bottom: 0.5rem; }
.result-advice p { font-size: 0.9rem; margin: 0; }

.result-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.5rem; }

.quiz-restart {
  background: none;
  border: none;
  color: var(--color-text-light);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color var(--transition);
}

.quiz-restart:hover { color: var(--color-primary); }

/* DISCLAIMER */
.disclaimer-box {
  max-width: 800px;
  margin: 0 auto;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-left: 4px solid var(--color-secondary);
  border-radius: var(--radius-sm);
  padding: 1.5rem 2rem;
}

.disclaimer-box h3 { font-size: 1rem; margin-bottom: 0.75rem; }
.disclaimer-box p { font-size: 0.88rem; margin: 0; }

@media (max-width: 600px) {
  .quiz-card, .quiz-result { padding: 1.5rem; }
  .quiz-question { font-size: 1.15rem; }
}
</style>
