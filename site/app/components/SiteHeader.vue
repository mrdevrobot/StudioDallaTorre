<template>
  <header class="site-header" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container header-inner">
      <NuxtLink to="/" class="logo" aria-label="Studio Dalla Torre - Homepage">
        <img src="/logo.svg" alt="Studio Dalla Torre" class="logo-img" />
        <span class="logo-text">
          <strong>Studio Dalla Torre</strong>
          <small>Osteopatia</small>
        </span>
      </NuxtLink>

      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-label="Apri menu di navigazione"
        @click="menuOpen = !menuOpen"
      >
        <span class="hamburger" :class="{ active: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav class="nav" :class="{ open: menuOpen }" aria-label="Menu principale">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/contatti" class="btn btn--primary nav-cta" @click="menuOpen = false">
          Prenota Ora
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/chi-siamo', label: 'Chi Siamo' },
  { to: '/osteopatia', label: 'Osteopatia' },
  { to: '/servizi', label: 'Servizi' },
  { to: '/trattamenti', label: 'Trattamenti' },
  { to: '/trova-il-tuo-percorso', label: 'Trova il Tuo Percorso' },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  transition: all var(--transition);
  border-bottom: 1px solid transparent;
}

.site-header.scrolled {
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--color-text);
}

.logo-img {
  height: 44px;
  width: auto;
  display: block;
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.logo-text strong {
  font-family: var(--font-heading);
  font-size: 1.15rem;
}

.logo-text small {
  font-size: 0.75rem;
  color: var(--color-primary);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
}

.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-link {
  padding: 0.5rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-light);
  border-radius: var(--radius-sm);
  transition: all var(--transition);
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.nav-cta {
  margin-left: 0.75rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.85rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition);
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 900px) {
  .menu-toggle {
    display: block;
  }

  .nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background: var(--color-white);
    flex-direction: column;
    align-items: stretch;
    padding: 5rem 1.5rem 2rem;
    gap: 0.25rem;
    transform: translateX(100%);
    transition: transform var(--transition);
    box-shadow: var(--shadow-lg);
  }

  .nav.open {
    transform: translateX(0);
  }

  .nav-link {
    padding: 0.85rem 1rem;
    font-size: 1rem;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: 1rem;
    text-align: center;
    justify-content: center;
  }
}
</style>
