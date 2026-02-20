const PHONE = '393519052755'

export function useWhatsApp() {
  function buildLink(message: string): string {
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`
  }

  function buildServiceMessage(opts: {
    serviceName: string
    visitType: string
    urgency: string
    note?: string
  }): string {
    const lines = [
      `Ciao! Vorrei prenotare una visita allo Studio Dalla Torre.`,
      ``,
      `📋 Servizio: *${opts.serviceName}*`,
      `👤 Tipo visita: ${opts.visitType}`,
      `⏱ Urgenza: ${opts.urgency}`,
    ]
    if (opts.note?.trim()) lines.push(`📝 Note: ${opts.note.trim()}`)
    lines.push(``, `Potete indicarmi la prima disponibilità? Grazie!`)
    return lines.join('\n')
  }

  function buildScenarioMessage(opts: {
    scenarioTitle: string
    recommendations: { label: string; reason: string }[]
  }): string {
    const recs = opts.recommendations.map(r => `• ${r.label}: ${r.reason}`).join('\n')
    return [
      `Ciao! Ho consultato la guida "Cosa scegliere in base al tuo problema" su studiodallatorre.it.`,
      ``,
      `📍 Situazione: *${opts.scenarioTitle}*`,
      ``,
      `Trattamenti consigliati:`,
      recs,
      ``,
      `Vorrei prenotare una visita per questa problematica. Grazie!`,
    ].join('\n')
  }

  function buildQuizMessage(summary: string): string {
    return summary
  }

  return { PHONE, buildLink, buildServiceMessage, buildScenarioMessage, buildQuizMessage }
}
