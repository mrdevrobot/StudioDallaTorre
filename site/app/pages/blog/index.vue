<template>
  <div>
    <!-- BREADCRUMBS -->
    <div class="container breadcrumbs">
      <NuxtLink to="/">Home</NuxtLink>
      <span>/</span>
      <span>Blog</span>
    </div>

    <!-- HERO -->
    <section class="page-hero">
      <div class="container">
        <span class="section-label">Approfondimenti & Consigli</span>
        <h1>Blog di Osteopatia</h1>
        <p class="page-hero__subtitle">
          Articoli, guide e approfondimenti su osteopatia, benessere e salute,
          scritti dagli osteopati dello Studio Dalla Torre di San Donà di Piave.
        </p>
      </div>
    </section>

    <!-- ARTICOLI -->
    <section class="section">
      <div class="container">
        <div class="blog-grid">
          <article class="blog-card" v-for="post in posts" :key="post.slug">
            <div class="blog-card__meta">
              <span class="blog-card__category">{{ post.category }}</span>
              <span class="blog-card__date">{{ post.date }}</span>
            </div>
            <h2 class="blog-card__title">
              <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
            </h2>
            <p class="blog-card__excerpt">{{ post.excerpt }}</p>
            <div class="blog-card__footer">
              <span class="blog-card__author">{{ post.author }}</span>
              <NuxtLink :to="`/blog/${post.slug}`" class="blog-card__readmore">
                Leggi l'articolo →
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--alt">
      <div class="container">
        <div class="blog-cta">
          <h2>Hai domande sul tuo benessere?</h2>
          <p>
            Non aspettare che il dolore si aggravi. Contattaci per una consulenza
            o scopri qual è il percorso più adatto a te.
          </p>
          <div class="blog-cta__actions">
            <NuxtLink to="/contatti" class="btn btn--primary btn--large">
              Prenota una Consulenza
            </NuxtLink>
            <NuxtLink to="/trova-il-tuo-percorso" class="btn btn--secondary btn--large">
              Trova il Tuo Percorso
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog di Osteopatia – Studio Dalla Torre | San Donà di Piave',
  meta: [
    {
      name: 'description',
      content:
        'Articoli e guide su osteopatia, dolore, postura e benessere. Approfondimenti degli osteopati Martina e Leonardo Dalla Torre a San Donà di Piave.',
    },
    { property: 'og:title', content: 'Blog di Osteopatia – Studio Dalla Torre' },
    {
      property: 'og:description',
      content:
        'Articoli e guide su osteopatia, dolore, postura e benessere a San Donà di Piave.',
    },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.studiodallatorre.it/blog' },
  ],
})

const posts = [
  {
    slug: 'osteopata-san-dona-di-piave',
    category: 'Osteopatia',
    date: '20 Marzo 2026',
    title: 'Osteopata a San Donà di Piave: la guida completa per scegliere il professionista giusto',
    excerpt:
      'Cerchi un osteopata a San Donà di Piave? Scopri cos\'è l\'osteopatia, quando consultare uno specialista, cosa aspettarti dalla prima visita e perché lo Studio Dalla Torre è il punto di riferimento nel Veneziano.',
    author: 'Dott.ssa Martina Dalla Torre',
  },
  {
    slug: 'osteopatia-pediatrica-neonatale',
    category: 'Pediatria',
    date: '20 Marzo 2026',
    title: 'Osteopatia Pediatrica e Neonatale: quando iniziare e cosa aspettarsi',
    excerpt:
      'Coliche, plagiocefalia, difficoltà di allattamento, scoliosi in adolescenza: l\'osteopatia pediatrica e neonatale accompagna tuo figlio fin dai primi giorni di vita con tecniche dolci e sicure.',
    author: 'Dott.ssa Martina Dalla Torre',
  },
  {
    slug: 'osteopatia-disturbi-femminili-ciclo',
    category: 'Salute Femminile',
    date: '20 Marzo 2026',
    title: 'Osteopatia per i Disturbi Femminili: ciclo doloroso, tensioni pelviche e benessere ormonale',
    excerpt:
      'Dismenorrea, sindrome premestruale, dolore pelvico e recupero post-parto: l\'osteopatia viscerale come alleata concreta per la salute ginecologica della donna.',
    author: 'Dott.ssa Martina Dalla Torre',
  },
  {
    slug: 'osteopatia-post-traumatica-prevenzione',
    category: 'Sport & Prevenzione',
    date: '20 Marzo 2026',
    title: 'Osteopatia Post-Traumatica e Preventiva: recuperare bene per non ricadere',
    excerpt:
      'Colpo di frusta, distorsioni, infortuni sportivi, recupero post-chirurgico: come l\'osteopatia post-traumatica e preventiva aiuta il corpo a guarire davvero e a non ricadere.',
    author: 'Studio Dalla Torre',
  },
]
</script>

<style scoped>
.page-hero {
  padding: 3.5rem 0 3rem;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-bg) 100%);
}

.blog-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
}

.blog-card {
  background: var(--color-white);
  border-radius: var(--radius);
  padding: 2rem;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.blog-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.blog-card__category {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-primary);
  background: var(--color-primary-light);
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
}

.blog-card__date {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

.blog-card__title {
  font-size: 1.25rem;
  line-height: 1.4;
  margin: 0;
}

.blog-card__title a {
  color: var(--color-text);
  text-decoration: none;
}

.blog-card__title a:hover {
  color: var(--color-primary);
}

.blog-card__excerpt {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text-light);
  flex: 1;
  margin: 0;
}

.blog-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  flex-wrap: wrap;
  gap: 0.5rem;
}

.blog-card__author {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-light);
}

.blog-card__readmore {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
}

.blog-card__readmore:hover {
  color: var(--color-primary-dark);
}

.blog-cta {
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}

.blog-cta h2 {
  margin-bottom: 1rem;
}

.blog-cta p {
  font-size: 1.05rem;
  margin-bottom: 2rem;
}

.blog-cta__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
