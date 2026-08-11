'use client'

import { useState } from 'react'
import { Wallet, Sparkles } from 'lucide-react'
import { MOCK_CREDITS } from '@/lib/mock-data'

interface CreditsWidgetProps {
  /** Compact variant used on the Overview page. */
  compact?: boolean
}

/**
 * Credits UI. The balance comes from MOCK_CREDITS (UI-only placeholder) and is
 * never written anywhere: nothing here is persisted and no payment flow exists.
 */
export function CreditsWidget({ compact = false }: CreditsWidgetProps) {
  const [notice, setNotice] = useState(false)
  const { balance, monthlyAllowance, recentUsage } = MOCK_CREDITS
  const pct = Math.max(0, Math.min(100, Math.round((balance / monthlyAllowance) * 100)))

  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
            <Wallet className="h-5 w-5 text-[#6366F1]" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-[#111827]">AI Credits</h3>
            <p className="text-sm text-[#6B7280]">Saldo del ciclo corrente</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-[#111827]">{balance.toLocaleString('it-IT')}</span>
        <span className="text-sm text-[#6B7280]">/ {monthlyAllowance.toLocaleString('it-IT')} crediti</span>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-[#6B7280]">{pct}% del pacchetto mensile ancora disponibile</p>

      {!compact && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#111827]">Consumi recenti</h4>
          <ul className="mt-3 divide-y divide-[#E5E7EB]">
            {recentUsage.map((u, i) => (
              <li key={`${u.label}-${i}`} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-[#111827]">{u.label}</p>
                  <p className="text-xs text-[#6B7280]">{u.at}</p>
                </div>
                <span className="text-sm font-semibold text-[#6366F1]">-{u.cost}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={() => setNotice(true)}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <Sparkles className="h-4 w-4" />
        Buy Credits
      </button>

      {notice && (
        <p className="mt-3 rounded-lg bg-[#F7F8FA] px-4 py-3 text-xs text-[#6B7280]">
          L&apos;acquisto di crediti non è ancora attivo: il flusso di pagamento verrà collegato
          insieme al backend.
        </p>
      )}
    </div>
  )
}
