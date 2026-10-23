<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <WhatsAppButton />
</template>

<script setup lang="ts">
const route = useRoute()
// The host serves every page as a directory index and 301-redirects to the trailing slash.
const pageUrl = computed(() => {
  const path = route.path.endsWith('/') ? route.path : `${route.path}/`
  return `https://www.studiodallatorre.it${path}`
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  meta: [{ property: 'og:url', content: pageUrl }],
})

useSchemaOrg([
  defineLocalBusiness({
    '@type': ['LocalBusiness', 'MedicalBusiness'],
    name: 'Studio Dalla Torre',
    description:
      'Osteopata a San Donà di Piave: trattamenti osteopatici, ginnastica posturale e riabilitazione con Martina e Leonardo Dalla Torre.',
    url: 'https://www.studiodallatorre.it/',
    logo: 'https://www.studiodallatorre.it/logo.svg',
    image: 'https://www.studiodallatorre.it/images/hero.jpeg',
    telephone: '+39 351 905 2755',
    email: 'info@studiodallatorre.it',
    address: {
      streetAddress: 'Via Eraclea 5',
      addressLocality: 'San Donà di Piave',
      addressRegion: 'VE',
      postalCode: '30027',
      addressCountry: 'IT',
    },
    areaServed: ['San Donà di Piave', 'Musile di Piave', 'Noventa di Piave', 'Eraclea', 'Jesolo', 'Ceggia'],
    openingHoursSpecification: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '08:00', closes: '13:00' },
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '14:00', closes: '20:00' },
    ],
  }),
])
</script>
