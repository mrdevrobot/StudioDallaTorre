<template>
  <ul class="social-links">
    <li>
      <a :href="SOCIAL.facebook" target="_blank" rel="noopener" aria-label="Studio Dalla Torre su Facebook">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.3H7.6V13h2.7v8h3.2z" /></svg>
      </a>
    </li>
    <li>
      <a :href="SOCIAL.instagram" target="_blank" rel="noopener" aria-label="Studio Dalla Torre su Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7.3A4.7 4.7 0 1 0 12 16.7 4.7 4.7 0 0 0 12 7.3zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5-7.9a1.1 1.1 0 1 1-2.200 0 1.1 1.1 0 0 1 2.200 0zM21 8.700c-.1-1.600-.4-3-1.600-4.100S16.900 3.100 15.300 3C13.700 2.900 10.300 2.900 8.700 3 7.100 3.100 5.700 3.400 4.600 4.600S3.100 7.100 3 8.700c-.1 1.600-.1 5 0 6.600.1 1.600.4 3 1.600 4.100s2.500 1.500 4.100 1.600c1.600.1 5 .1 6.600 0 1.600-.1 3-.4 4.100-1.600s1.500-2.500 1.600-4.100c.1-1.600.1-5 0-6.600zm-2.100 8c-.3.900-1 1.500-1.900 1.900-1.300.5-4.400.4-5.900.4s-4.600.1-5.900-.4c-.9-.3-1.500-1-1.900-1.900-.5-1.300-.4-4.400-.4-5.900s-.1-4.600.4-5.900c.3-.9 1-1.500 1.900-1.900C7.400 4.500 10.500 4.600 12 4.600s4.600-.1 5.900.4c.9.3 1.500 1 1.900 1.900.5 1.300.4 4.400.4 5.900s.1 4.600-.4 5.900z" /></svg>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.social-links {
  display: flex;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: background var(--transition);
}

.social-links svg {
  width: 20px;
  height: 20px;
  fill: var(--color-white);
}

.social-links a:hover {
  background: var(--color-secondary);
}
</style>
