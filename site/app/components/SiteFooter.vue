<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="logo-icon">🦴</span>
            <span>
              <strong>Studio Dalla Torre</strong>
              <small>Osteopatia</small>
            </span>
          </div>
          <p>
            Centro di osteopatia a San Donà di Piave. Ci prendiamo cura del tuo benessere con
            trattamenti osteopatici personalizzati e ginnastica posturale.
          </p>
        </div>

        <div class="footer-links">
          <h4>Navigazione</h4>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/chi-siamo">Chi Siamo</NuxtLink></li>
            <li><NuxtLink to="/osteopatia">Osteopatia</NuxtLink></li>
            <li><NuxtLink to="/servizi">Servizi</NuxtLink></li>
            <li><NuxtLink to="/trattamenti">Trattamenti</NuxtLink></li>
            <li><NuxtLink to="/trova-il-tuo-percorso">Trova il Tuo Percorso</NuxtLink></li>
            <li><NuxtLink to="/contatti">Contatti</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-links">
          <h4>Servizi</h4>
          <ul>
            <li><NuxtLink to="/servizi#osteopatia-strutturale">Osteopatia Strutturale</NuxtLink></li>
            <li><NuxtLink to="/servizi#osteopatia-viscerale">Osteopatia Viscerale</NuxtLink></li>
            <li><NuxtLink to="/servizi#osteopatia-craniosacrale">Osteopatia Craniosacrale</NuxtLink></li>
            <li><NuxtLink to="/servizi#ginnastica-posturale">Ginnastica Posturale</NuxtLink></li>
            <li><NuxtLink to="/servizi#osteopatia-pediatrica">Osteopatia Pediatrica</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Contatti</h4>
          <ul>
            <li>📍 Via Eraclea 5, San Donà di Piave (VE)</li>
            <li>
              ✉️
              <a href="mailto:info@studiodallatorre.it">info@studiodallatorre.it</a>
            </li>
            <li>🕐 Lun – Sab: 8:00 – 13:00 / 14:00 – 20:00</li>
            <li>📅 Solo su appuntamento</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ currentYear }} Studio Dalla Torre. Tutti i diritti riservati.</p>
        <p>
          <NuxtLink to="/privacy">Privacy Policy</NuxtLink> ·
          <NuxtLink to="/cookie">Cookie Policy</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background: var(--color-text);
  color: rgba(255, 255, 255, 0.8);
  padding: 4rem 0 0;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 2.5rem;
}

.footer-brand .footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--color-white);
}

.footer-logo .logo-icon {
  font-size: 1.5rem;
}

.footer-logo strong {
  font-family: var(--font-heading);
  font-size: 1.1rem;
  display: block;
}

.footer-logo small {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-secondary);
}

.footer-brand p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
}

.footer-links h4,
.footer-contact h4 {
  color: var(--color-white);
  font-size: 1rem;
  margin-bottom: 1rem;
  font-family: var(--font-body);
  font-weight: 600;
}

.footer-links ul,
.footer-contact ul {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links li a {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  transition: color var(--transition);
}

.footer-links li a:hover {
  color: var(--color-secondary);
}

.footer-contact li {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
}

.footer-contact li a {
  color: rgba(255, 255, 255, 0.6);
}

.footer-contact li a:hover {
  color: var(--color-secondary);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.4);
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.4);
}

.footer-bottom a:hover {
  color: var(--color-secondary);
}

@media (max-width: 900px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
</style>
