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
            <button class="btn btn--primary" @click="openModal(service)">Prenota questo servizio</button>
          </div>
          <div class="service-block__visual">
            <div class="service-image-wrapper">
              <img
                :src="service.image"
                :alt="service.title"
                class="service-img"
              />
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

    <!-- MODAL PRENOTAZIONE -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="modalService" class="modal-backdrop" @click.self="closeModal">
          <div class="modal" role="dialog" :aria-label="`Prenota ${modalService.title}`">
            <button class="modal__close" @click="closeModal" aria-label="Chiudi">&times;</button>

            <div class="modal__header">
              <span class="modal__icon">{{ modalService.icon }}</span>
              <div>
                <p class="modal__label">Stai prenotando</p>
                <h3 class="modal__title">{{ modalService.title }}</h3>
              </div>
            </div>

            <div class="modal__body">
              <!-- Q1 -->
              <div class="modal-question">
                <p class="modal-question__label">È la tua prima visita con noi?</p>
                <div class="modal-options">
                  <button
                    v-for="opt in visitTypeOptions"
                    :key="opt.value"
                    class="modal-option"
                    :class="{ active: modalForm.visitType === opt.value }"
                    @click="modalForm.visitType = opt.value"
                  >
                    <span>{{ opt.icon }}</span> {{ opt.label }}
                  </button>
                </div>
              </div>

              <!-- Q2 -->
              <div class="modal-question">
                <p class="modal-question__label">Con quale urgenza?</p>
                <div class="modal-options">
                  <button
                    v-for="opt in urgencyOptions"
                    :key="opt.value"
                    class="modal-option"
                    :class="{ active: modalForm.urgency === opt.value }"
                    @click="modalForm.urgency = opt.value"
                  >
                    <span>{{ opt.icon }}</span> {{ opt.label }}
                  </button>
                </div>
              </div>

              <!-- Q3 -->
              <div class="modal-question">
                <p class="modal-question__label">Vuoi aggiungere qualcosa? <span class="optional">(facoltativo)</span></p>
                <textarea
                  v-model="modalForm.note"
                  class="modal-textarea"
                  rows="3"
                  placeholder="Es. ho dolore da 3 settimane alla spalla destra..."
                />
              </div>
            </div>

            <div class="modal__footer">
              <button class="btn btn--secondary" @click="closeModal">Annulla</button>
              <div class="modal__cta">
                <button
                  class="btn btn--primary"
                  :disabled="!modalForm.visitType || !modalForm.urgency"
                  @click="submitModal"
                >
                  📋 Compila il form
                </button>
                <a
                  :href="modalWaLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn--wa"
                  :class="{ disabled: !modalForm.visitType || !modalForm.urgency }"
                  @click.prevent="submitViaWhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
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
    image: '/images/servizi/strutturale.jpeg',
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
    image: '/images/servizi/viscerale.jpeg',
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
    image: '/images/servizi/craniosacrale.jpeg',
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
    image: '/images/servizi/posturale.jpeg',
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
    image: '/images/servizi/pediatrica.jpeg',
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
    shortTitle: 'dello Sport',
    icon: '⚽',
    image: '/images/servizi/sportiva.jpeg',
    title: 'Osteopatia dello Sport',
    intro:
      "Trattamenti specifici per atleti amatoriali e agonisti: prevenzione, recupero dagli infortuni e ottimizzazione della performance.",
    description: [
      "Leonardo Dalla Torre, grazie alla sua formazione come personal trainer e osteopata, è particolarmente preparato per trattare gli infortuni sportivi e ottimizzare la funzionalità fisica degli atleti.",
      "L'osteopatia dello sport integra l'analisi biomeccanica del gesto atletico con il trattamento manuale, permettendo di identificare e correggere i pattern di movimento che predispongono agli infortuni.",
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

// ---------- MODAL ----------
const modalService = ref<typeof services[0] | null>(null)
const modalForm = reactive({ visitType: '', urgency: '', note: '' })

const visitTypeOptions = [
  { value: 'prima-visita', icon: '✨', label: 'Prima visita' },
  { value: 'follow-up', icon: '🔄', label: 'Visita di controllo' },
  { value: 'non-so', icon: '🤔', label: 'Non so ancora' },
]

const urgencyOptions = [
  { value: 'urgente', icon: '🔴', label: 'Ho dolore / urgente' },
  { value: 'presto', icon: '🟡', label: 'Entro qualche settimana' },
  { value: 'pianificazione', icon: '🟢', label: 'Con calma / prevenzione' },
]

function openModal(service: typeof services[0]) {
  modalService.value = service
  modalForm.visitType = ''
  modalForm.urgency = ''
  modalForm.note = ''
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  modalService.value = null
  document.body.style.overflow = ''
}

function submitModal() {
  if (!modalService.value) return
  const svc = modalService.value
  const vLabel = visitTypeOptions.find(o => o.value === modalForm.visitType)?.label ?? ''
  const uLabel = urgencyOptions.find(o => o.value === modalForm.urgency)?.label ?? ''
  const lines = [
    `Servizio richiesto: ${svc.title}`,
    `Tipo di visita: ${vLabel}`,
    `Urgenza: ${uLabel}`,
  ]
  if (modalForm.note.trim()) lines.push(`Note: ${modalForm.note.trim()}`)
  const message = lines.join('\n')
  closeModal()
  navigateTo({
    path: '/contatti',
    query: {
      from: 'servizi',
      subject: svc.id,
      service: svc.title,
      message,
    },
  })
}

const { buildLink, buildServiceMessage } = useWhatsApp()
const modalWaLink = computed(() => {
  if (!modalService.value || !modalForm.visitType || !modalForm.urgency) return '#'
  const vLabel = visitTypeOptions.find(o => o.value === modalForm.visitType)?.label ?? ''
  const uLabel = urgencyOptions.find(o => o.value === modalForm.urgency)?.label ?? ''
  return buildLink(buildServiceMessage({
    serviceName: modalService.value.title,
    visitType: vLabel,
    urgency: uLabel,
    note: modalForm.note || undefined,
  }))
})

function submitViaWhatsApp() {
  if (!modalForm.visitType || !modalForm.urgency) return
  window.open(modalWaLink.value, '_blank', 'noopener,noreferrer')
  closeModal()
}
</script>

<style scoped>
/* MODAL */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal {
  background: var(--color-white);
  border-radius: var(--radius);
  width: 100%;
  max-width: 540px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: var(--shadow-lg);
  position: relative;
}

.modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  color: var(--color-text-light);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
  transition: background var(--transition);
}
.modal__close:hover { background: var(--color-bg-alt); }

.modal__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.75rem 1.75rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
}
.modal__icon { font-size: 2.2rem; }
.modal__label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-primary); font-weight: 600; margin: 0 0 0.2rem; }
.modal__title { font-size: 1.2rem; font-weight: 700; font-family: var(--font-heading); margin: 0; color: var(--color-text); }

.modal__body { padding: 1.5rem 1.75rem; display: flex; flex-direction: column; gap: 1.5rem; }

.modal-question__label {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
}
.optional { font-weight: 400; color: var(--color-text-light); }

.modal-options {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.modal-option {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-white);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
  color: var(--color-text);
}
.modal-option:hover { border-color: var(--color-primary); color: var(--color-primary); background: var(--color-primary-light); }
.modal-option.active { border-color: var(--color-primary); background: var(--color-primary); color: var(--color-white); }

.modal-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.92rem;
  color: var(--color-text);
  resize: vertical;
  transition: border-color var(--transition);
  background: var(--color-bg);
}
.modal-textarea:focus { outline: none; border-color: var(--color-primary); }

.modal__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 1.25rem 1.75rem;
  border-top: 1px solid var(--color-border);
}

.modal__cta {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn--wa {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.85rem 1.4rem;
  background: #25D366;
  color: white;
  border: none;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition);
}
.btn--wa:hover { background: #1ebe5d; color: white; transform: translateY(-2px); }
.btn--wa.disabled { opacity: 0.45; pointer-events: none; }

.modal__footer .btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  transform: none;
}

/* Transition */
.modal-enter-active, .modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-active .modal, .modal-leave-active .modal { transition: transform 0.25s ease; }
.modal-enter-from .modal { transform: translateY(20px) scale(0.97); }
.modal-leave-to .modal { transform: translateY(10px) scale(0.97); }

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

.service-image-wrapper {
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 130px;
}

.service-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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
  .service-image-wrapper { position: static; aspect-ratio: 16/9; }
  .symptom-list { grid-template-columns: 1fr; }
}
</style>
