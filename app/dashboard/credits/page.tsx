import { CreditsWidget } from '@/components/dashboard/credits-widget'
import { CREDIT_COSTS } from '@/lib/mock-data'

export default function CreditsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">Credits</h1>
        <p className="mt-2 text-[15px] text-[#6B7280]">
          Ogni azione AI consuma crediti. Qui trovi il saldo, i consumi recenti e il listino.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <CreditsWidget />

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
          <h2 className="text-base font-semibold text-[#111827]">Costo delle azioni</h2>
          <p className="mt-1 text-sm text-[#6B7280]">Listino di riferimento per ogni operazione AI.</p>
          <ul className="mt-5 divide-y divide-[#E5E7EB]">
            {CREDIT_COSTS.map((c) => (
              <li key={c.label} className="flex items-center justify-between py-3">
                <span className="text-sm text-[#111827]">{c.label}</span>
                <span className="text-sm font-semibold text-[#6B7280]">{c.cost} crediti</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-lg bg-[#F7F8FA] px-4 py-3 text-xs leading-relaxed text-[#6B7280]">
            I valori mostrati in questa pagina sono dati di esempio per l&apos;interfaccia: non sono
            salvati e non rappresentano un saldo reale. Verranno sostituiti dai dati del backend.
          </p>
        </div>
      </div>
    </div>
  )
}
