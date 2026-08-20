import { CreditsWidget } from '@/components/dashboard/credits-widget'

export default function CreditsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">Credits</h1>
        <p className="mt-2 text-[15px] text-[#6B7280]">
          Ogni azione AI consuma crediti. Qui trovi il saldo reale del tuo account.
          I crediti AI si acquistano separatamente dall&apos;abbonamento.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <CreditsWidget />

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
          <h2 className="text-base font-semibold text-[#111827]">Costo delle azioni</h2>
          <p className="mt-1 text-sm text-[#6B7280]">
            Il listino dei crediti per ogni operazione AI verrà definito dal backend.
          </p>
          <p className="mt-5 rounded-lg bg-[#F7F8FA] px-4 py-3 text-xs leading-relaxed text-[#6B7280]">
            Listino crediti in configurazione. Il costo di ogni operazione AI sarà
            mostrato qui non appena disponibile dal backend.
          </p>
        </div>
      </div>
    </div>
  )
}
