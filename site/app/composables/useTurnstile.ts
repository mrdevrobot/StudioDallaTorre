// Cloudflare Turnstile per il modulo contatti. La site key è pubblica; il segreto sta sul
// server, fuori dalla document root (vedi public/contact.php). Widget "managed": di solito è
// invisibile e mostra la sfida solo se serve.
const TURNSTILE_SITE_KEY = '0x4AAAAAAFMRipluhi_C7Yf7'

type TurnstileApi = {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string
  reset: (id?: string) => void
  remove: (id?: string) => void
}
const api = () => (window as unknown as { turnstile?: TurnstileApi }).turnstile

export function useTurnstile() {
  const el = ref<HTMLElement | null>(null)
  const token = ref('')
  const errore = ref(false)
  let id: string | undefined

  function monta(tentativi = 0) {
    const t = api()
    if (!el.value || id) return
    if (!t) {
      if (tentativi < 50) setTimeout(() => monta(tentativi + 1), 200)
      return
    }
    id = t.render(el.value, {
      sitekey: TURNSTILE_SITE_KEY,
      language: 'it',
      callback: (v: string) => { token.value = v; errore.value = false },
      'expired-callback': () => { token.value = '' },
      'error-callback': () => { token.value = ''; errore.value = true },
    })
  }

  // Il token vale una sola volta: va azzerato dopo ogni invio fallito
  function reset() {
    token.value = ''
    if (id) api()?.reset(id)
  }

  useHead({
    script: [{ src: 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit', async: true, defer: true }],
  })
  onMounted(() => monta())
  // Se il form viene ricreato dopo l'esito, rimonta il widget sul nuovo elemento
  watch(el, (nuovo) => {
    if (nuovo && !nuovo.hasChildNodes()) {
      id = undefined
      token.value = ''
      monta()
    }
  })
  onBeforeUnmount(() => { if (id) api()?.remove(id) })

  return { el, token, errore, reset }
}
