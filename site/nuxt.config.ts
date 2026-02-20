// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  site: {
    url: 'https://www.studiodallatorre.it',
    name: 'Studio Dalla Torre – Osteopatia a San Donà di Piave',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'it' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Studio Dalla Torre – Osteopatia a San Donà di Piave',
      meta: [
        {
          name: 'description',
          content:
            'Studio Dalla Torre: centro di osteopatia a San Donà di Piave. Trattamenti osteopatici, ginnastica posturale e riabilitazione con Martina e Leonardo Dalla Torre.',
        },
        { name: 'theme-color', content: '#1a7abf' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'it_IT' },
        {
          property: 'og:title',
          content: 'Studio Dalla Torre – Osteopatia a San Donà di Piave',
        },
        {
          property: 'og:description',
          content:
            'Centro di osteopatia a San Donà di Piave. Trattamenti manuali, ginnastica posturale e molto altro.',
        },
        { property: 'og:url', content: 'https://www.studiodallatorre.it' },
        { property: 'og:site_name', content: 'Studio Dalla Torre' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.studiodallatorre.it' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },

  sitemap: {
    xsl: false,
  },

  robots: {
    groups: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://www.studiodallatorre.it/sitemap.xml',
  },

  schemaOrg: {
    identity: {
      type: 'LocalBusiness',
      name: 'Studio Dalla Torre',
      url: 'https://www.studiodallatorre.it',
      logo: 'https://www.studiodallatorre.it/logo.svg',
      description:
        'Centro di osteopatia a San Donà di Piave specializzato in trattamenti osteopatici, ginnastica posturale e benessere.',
      address: {
        streetAddress: 'Via Eraclea 5',
        addressLocality: 'San Donà di Piave',
        addressRegion: 'VE',
        postalCode: '30027',
        addressCountry: 'IT',
      },
      telephone: '',
      email: 'info@studiodallatorre.it',
      openingHours: ['Mo-Sa 08:00-13:00', 'Mo-Sa 14:00-20:00'],
    },
  },

  css: ['@/assets/css/main.css'],

  fonts: {
    families: [
      { name: 'DM Sans', provider: 'google', weights: [300, 400, 500, 600, 700] },
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [400, 500, 600, 700, 800] },
    ],
  },

  image: {
    quality: 80,
    format: ['webp', 'jpg'],
  },

  routeRules: {
    '/': { prerender: true },
    '/chi-siamo': { prerender: true },
    '/osteopatia': { prerender: true },
    '/servizi': { prerender: true },
    '/trattamenti': { prerender: true },
    '/trova-il-tuo-percorso': { prerender: true },
    '/contatti': { prerender: true },
  },

  nitro: {
    output: {
      publicDir: 'dist',
    },
  },
})
