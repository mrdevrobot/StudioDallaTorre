<template>
  <div>
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Contatti</span>
    </div>

    <section class="page-hero">
      <div class="container">
        <span class="section-label">Prenota e Contatti</span>
        <h1>Siamo qui per te</h1>
        <p class="page-hero__subtitle">
          Prenota la tua visita, chiedi informazioni o semplicemente scrivici.
          Ti risponderemo al più presto.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- INFO -->
          <div class="contact-info">
            <h2>Come trovarci</h2>

            <div class="info-card">
              <div class="info-card__icon">📍</div>
              <div>
                <strong>Indirizzo</strong>
                <p>Via Eraclea 5<br>San Donà di Piave (VE) 30027</p>
                <a
                  href="https://maps.google.com/?q=Via+Eraclea+5+San+Dona+di+Piave"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="map-link"
                >
                  Apri in Google Maps →
                </a>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card__icon">✉️</div>
              <div>
                <strong>Email</strong>
                <p>
                  <a href="mailto:info@studiodallatorre.it">info@studiodallatorre.it</a>
                </p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card__icon">🕐</div>
              <div>
                <strong>Orari di ricevimento</strong>
                <p>Solo su appuntamento</p>
                <div class="hours-table">
                  <div class="hours-row">
                    <span class="hours-day">Lunedì – Sabato</span>
                    <span class="hours-time">08:00 – 13:00</span>
                  </div>
                  <div class="hours-row">
                    <span class="hours-day">Lunedì – Sabato</span>
                    <span class="hours-time">14:00 – 20:00</span>
                  </div>
                  <div class="hours-row hours-row--closed">
                    <span class="hours-day">Domenica</span>
                    <span class="hours-time">Chiuso</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="booking-note">
              <span class="note-icon">💡</span>
              <p>
                <strong>Ricevimento solo su appuntamento.</strong>
                Ti preghiamo di non presentarti senza prenotazione.
                Per urgenze, scrivici via email con oggetto "URGENTE".
              </p>
            </div>
          </div>

          <!-- FORM -->
          <div class="contact-form-wrapper">
            <h2>Prenota o scrivi</h2>

            <!-- BANNER QUIZ -->
            <div class="quiz-prefill-banner" v-if="fromQuiz">
              <div class="quiz-prefill-banner__icon">🧩</div>
              <div class="quiz-prefill-banner__content">
                <strong>Modulo pre-compilato dal questionario</strong>
                <p v-if="quizTreatmentLabel">
                  Trattamento consigliato: <em>{{ quizTreatmentLabel }}</em>.
                  Il campo messaggio contiene il riepilogo delle tue risposte.
                </p>
                <p v-else>Il modulo è stato pre-compilato con le tue risposte al questionario.</p>
              </div>
              <NuxtLink to="/trova-il-tuo-percorso" class="quiz-prefill-banner__redo">Rifare il test →</NuxtLink>
            </div>

            <!-- BANNER SCENARI -->
            <div class="quiz-prefill-banner" v-if="fromScenari">
              <div class="quiz-prefill-banner__icon">📍</div>
              <div class="quiz-prefill-banner__content">
                <strong>Modulo pre-compilato dalla guida trattamenti</strong>
                <p v-if="scenarioTitle">Situazione selezionata: <em>{{ scenarioTitle }}</em>.</p>
                <p v-else>Il modulo è stato pre-compilato con la tua situazione.</p>
              </div>
              <NuxtLink to="/trattamenti" class="quiz-prefill-banner__redo">Torna alla guida →</NuxtLink>
            </div>

            <!-- BANNER SERVIZI -->
            <div class="quiz-prefill-banner" v-if="fromServizi">
              <div class="quiz-prefill-banner__icon">📋</div>
              <div class="quiz-prefill-banner__content">
                <strong>Modulo pre-compilato dalla pagina servizi</strong>
                <p v-if="serviziServiceLabel">Servizio selezionato: <em>{{ serviziServiceLabel }}</em>. Il messaggio contiene le tue preferenze.</p>
                <p v-else>Il modulo è stato pre-compilato con il servizio scelto.</p>
              </div>
              <NuxtLink to="/servizi" class="quiz-prefill-banner__redo">Torna ai servizi →</NuxtLink>
            </div>

            <p class="form-intro">
              Compila il modulo per prenotare un appuntamento o richiedere informazioni.
              Ti risponderemo entro 24 ore.
            </p>

            <form class="contact-form" @submit.prevent="submitForm" novalidate>
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName">Nome *</label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    placeholder="Mario"
                    required
                    :class="{ error: errors.firstName }"
                  />
                  <span class="error-msg" v-if="errors.firstName">{{ errors.firstName }}</span>
                </div>
                <div class="form-group">
                  <label for="lastName">Cognome *</label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    placeholder="Rossi"
                    required
                    :class="{ error: errors.lastName }"
                  />
                  <span class="error-msg" v-if="errors.lastName">{{ errors.lastName }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="mario.rossi@email.it"
                  required
                  :class="{ error: errors.email }"
                />
                <span class="error-msg" v-if="errors.email">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="phone">Telefono</label>
                <input
                  id="phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="+39 333 1234567"
                />
              </div>

              <div class="form-group">
                <label for="subject">Motivo del contatto *</label>
                <select
                  id="subject"
                  v-model="form.subject"
                  required
                  :class="{ error: errors.subject }"
                >
                  <option value="">Seleziona...</option>
                  <option value="prenotazione">Prenotazione prima visita</option>
                  <option value="osteopatia-strutturale">Osteopatia Strutturale</option>
                  <option value="osteopatia-viscerale">Osteopatia Viscerale</option>
                  <option value="osteopatia-craniosacrale">Osteopatia Craniosacrale</option>
                  <option value="ginnastica-posturale">Ginnastica Posturale</option>
                  <option value="osteopatia-pediatrica">Osteopatia Pediatrica / Neonatale</option>
                  <option value="osteopatia-sportiva">Osteopatia Sportiva</option>
                  <option value="informazioni">Richiesta informazioni generali</option>
                </select>
                <span class="error-msg" v-if="errors.subject">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="preferredTime">Fascia oraria preferita</label>
                <select id="preferredTime" v-model="form.preferredTime">
                  <option value="">Nessuna preferenza</option>
                  <option value="mattina">Mattina (8:00 – 13:00)</option>
                  <option value="pomeriggio">Pomeriggio / Sera (14:00 – 20:00)</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Descrivi brevemente il tuo problema</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="4"
                  placeholder="Racconta brevemente le tue problematiche o le informazioni che vorresti ricevere..."
                ></textarea>
              </div>

              <div class="form-group form-group--checkbox">
                <input
                  id="privacy"
                  v-model="form.privacy"
                  type="checkbox"
                  required
                  :class="{ error: errors.privacy }"
                />
                <label for="privacy">
                  Ho letto e accetto la
                  <NuxtLink to="/privacy" target="_blank">Privacy Policy</NuxtLink>
                  *
                </label>
                <span class="error-msg" v-if="errors.privacy">{{ errors.privacy }}</span>
              </div>

              <button type="submit" class="btn btn--primary btn--large submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Invia Richiesta</span>
                <span v-else>Invio in corso...</span>
              </button>
            </form>

            <!-- SUCCESS MESSAGE -->
            <div class="success-message" v-if="submitted">
              <span class="success-icon">✅</span>
              <h3>Richiesta inviata con successo!</h3>
              <p>
                Grazie {{ form.firstName }}! Abbiamo ricevuto la tua richiesta e ti contatteremo
                al più presto, entro 24 ore lavorative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MAPPA -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Come Raggiungerci</span>
          <h2>Studio Dalla Torre – San Donà di Piave</h2>
          <p>Via Eraclea 5, San Donà di Piave (VE)</p>
        </div>
        <div class="map-placeholder">
          <a
            href="https://maps.google.com/?q=Via+Eraclea+5+San+Dona+di+Piave"
            target="_blank"
            rel="noopener noreferrer"
            class="map-external-link"
          >
            <div class="map-placeholder-inner">
              <span>🗺️</span>
              <p>Clicca per aprire su Google Maps</p>
              <p class="map-address">Via Eraclea 5, San Donà di Piave (VE) 30027</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- COLLABORATORE -->
    <section class="section">
      <div class="container">
        <div class="collab-box">
          <span class="collab-icon">👶</span>
          <div>
            <h3>Osteopatia Neonatale – Dott. Emanuele Pippolo</h3>
            <p>
              Per appuntamenti di osteopatia neonatale e pediatrica specialistica, il
              <strong>Dott. Emanuele Pippolo</strong> collabora periodicamente con lo Studio Dalla Torre.
              Seleziona "Osteopatia Pediatrica / Neonatale" nel modulo di contatto per essere
              messo in contatto con lui.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contatti e Prenotazioni – Studio Dalla Torre | San Donà di Piave',
  meta: [
    {
      name: 'description',
      content:
        'Prenota un appuntamento allo Studio Dalla Torre di San Donà di Piave. Via Eraclea 5 – info@studiodallatorre.it – Lunedì-Sabato 8:00-13:00 / 14:00-20:00.',
    },
  ],
})

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  preferredTime: string
  message: string
  privacy: boolean
}

const form = reactive<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  preferredTime: '',
  message: '',
  privacy: false,
})

const errors = reactive<Partial<Record<keyof FormData, string>>>({})
const isSubmitting = ref(false)
const submitted = ref(false)
const fromQuiz = ref(false)
const quizTreatmentLabel = ref('')
const fromScenari = ref(false)
const scenarioTitle = ref('')
const fromServizi = ref(false)
const serviziServiceLabel = ref('')

const route = useRoute()
onMounted(() => {
  if (route.query.from === 'quiz') {
    fromQuiz.value = true
    if (route.query.subject) form.subject = route.query.subject as string
    if (route.query.message) form.message = route.query.message as string
    const msg = route.query.message as string ?? ''
    const match = msg.match(/Trattamento consigliato: (.+)/)
    quizTreatmentLabel.value = match?.[1] ?? ''
  } else if (route.query.from === 'scenari') {
    fromScenari.value = true
    if (route.query.subject) form.subject = route.query.subject as string
    if (route.query.message) form.message = route.query.message as string
    scenarioTitle.value = route.query.scenario as string ?? ''
  } else if (route.query.from === 'servizi') {
    fromServizi.value = true
    if (route.query.subject) form.subject = route.query.subject as string
    if (route.query.message) form.message = route.query.message as string
    serviziServiceLabel.value = route.query.service as string ?? ''
  }
})

function validateForm(): boolean {
  Object.keys(errors).forEach(k => delete (errors as Record<string, string>)[k])
  let valid = true
  if (!form.firstName.trim()) { errors.firstName = 'Il nome è obbligatorio'; valid = false }
  if (!form.lastName.trim()) { errors.lastName = 'Il cognome è obbligatorio'; valid = false }
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Inserisci un\'email valida'; valid = false
  }
  if (!form.subject) { errors.subject = 'Seleziona un\'opzione'; valid = false }
  if (!form.privacy) { errors.privacy = 'Devi accettare la Privacy Policy'; valid = false }
  return valid
}

async function submitForm() {
  if (!validateForm()) return
  isSubmitting.value = true
  // Simulate API call - in production replace with actual form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  isSubmitting.value = false
  submitted.value = true
}
</script>

<style scoped>
.page-hero {
  padding: 8rem 0 3rem;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}
.page-hero h1 { max-width: 700px; margin-bottom: 1rem; }
.page-hero__subtitle { max-width: 640px; font-size: 1.1rem; line-height: 1.8; }

/* CONTACT GRID */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 4rem;
  align-items: start;
}

.contact-info h2,
.contact-form-wrapper h2 { margin-bottom: 1.5rem; }

/* INFO CARDS */
.info-card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--color-bg-alt);
  border-radius: var(--radius-sm);
  margin-bottom: 1rem;
}

.info-card__icon { font-size: 1.5rem; flex-shrink: 0; }
.info-card strong { display: block; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--color-primary); margin-bottom: 0.4rem; }
.info-card p { font-size: 0.92rem; margin: 0 0 0.4rem; }
.map-link { font-size: 0.85rem; font-weight: 600; }

.hours-table { margin-top: 0.75rem; display: flex; flex-direction: column; gap: 0.4rem; }
.hours-row { display: flex; justify-content: space-between; font-size: 0.88rem; padding: 0.3rem 0; border-bottom: 1px solid var(--color-border); }
.hours-row--closed .hours-time { color: #e17055; }
.hours-day { color: var(--color-text-light); }
.hours-time { font-weight: 600; }

.booking-note {
  display: flex;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  background: var(--color-secondary-light);
  border: 1px solid #e8d5a3;
  border-radius: var(--radius-sm);
  margin-top: 1.5rem;
}
.note-icon { font-size: 1.25rem; flex-shrink: 0; }
.booking-note p { font-size: 0.88rem; margin: 0; }

/* QUIZ PREFILL BANNER */
.quiz-prefill-banner {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #d4e8f8;
  border: 1px solid var(--color-primary);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-sm);
  margin-bottom: 1.5rem;
}

.quiz-prefill-banner__icon { font-size: 1.4rem; flex-shrink: 0; }

.quiz-prefill-banner__content { flex: 1; }
.quiz-prefill-banner__content strong { display: block; font-size: 0.9rem; color: var(--color-primary-dark); margin-bottom: 0.25rem; }
.quiz-prefill-banner__content p { font-size: 0.85rem; margin: 0; color: var(--color-text-light); }
.quiz-prefill-banner__content em { font-style: normal; font-weight: 600; color: var(--color-primary-dark); }

.quiz-prefill-banner__redo {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  white-space: nowrap;
  flex-shrink: 0;
  align-self: center;
}

/* FORM */
.form-intro { font-size: 0.95rem; margin-bottom: 1.5rem; }

.contact-form { display: flex; flex-direction: column; gap: 1rem; }

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

.form-group { display: flex; flex-direction: column; gap: 0.4rem; }

.form-group label {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--color-text);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: 0.95rem;
  background: var(--color-white);
  color: var(--color-text);
  transition: border-color var(--transition);
  outline: none;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--color-primary);
}

.form-group input.error,
.form-group select.error {
  border-color: #e17055;
}

.error-msg { font-size: 0.8rem; color: #e17055; }

.form-group--checkbox {
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.form-group--checkbox input[type="checkbox"] {
  margin-top: 2px;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.form-group--checkbox label { font-size: 0.88rem; font-weight: 400; flex: 1; }

.submit-btn { width: 100%; justify-content: center; margin-top: 0.5rem; }
.submit-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; }

/* SUCCESS */
.success-message {
  text-align: center;
  padding: 3rem 2rem;
  background: var(--color-primary-light);
  border-radius: var(--radius);
  border: 1px solid var(--color-primary);
}
.success-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
.success-message h3 { margin-bottom: 0.75rem; }
.success-message p { font-size: 0.95rem; }

/* MAP */
.map-placeholder {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

.map-external-link { display: block; text-decoration: none; }

.map-placeholder-inner {
  background: linear-gradient(135deg, #d6ecfb, #a8d4f5);
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background var(--transition);
}

.map-placeholder-inner:hover { background: linear-gradient(135deg, #c0e0f8, #8cc6f0); }

.map-placeholder-inner span { font-size: 3rem; }
.map-placeholder-inner p { font-size: 1rem; font-weight: 600; color: var(--color-primary-dark); margin: 0; }
.map-address { font-size: 0.85rem !important; font-weight: 400 !important; color: var(--color-text-light) !important; }

/* COLLABORATORE */
.collab-box {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 2rem;
  background: var(--color-secondary-light);
  border: 1px solid #e8d5a3;
  border-left: 4px solid var(--color-secondary);
  border-radius: var(--radius);
}
.collab-icon { font-size: 2.5rem; flex-shrink: 0; }
.collab-box h3 { margin-bottom: 0.75rem; }
.collab-box p { font-size: 0.92rem; margin: 0; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
