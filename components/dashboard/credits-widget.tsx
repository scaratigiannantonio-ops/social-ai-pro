'use client'

import { useEffect, useState } from 'react'
import { Wallet, Sparkles } from 'lucide-react'

import {
  getCreditBalance,
  getAccessToken,
} from '@/lib/auth-client'

interface CreditsWidgetProps {
  /** Compact variant used on the Overview page. */
  compact?: boolean
}

interface CreditBalance {
  user_id: number
  credits: number
  plan: string
}

export function CreditsWidget({
  compact = false,
}: CreditsWidgetProps) {
  const [credits, setCredits] = useState<CreditBalance | null>(null)
  const [loading, setLoading] = useState(true)
  const [notice, setNotice] = useState(false)

  useEffect(() => {
    async function loadCredits() {
      const token = getAccessToken()

      if (!token) {
        setLoading(false)
        return
      }

      try {
        const balance = await getCreditBalance()

        if (balance) {
          setCredits(balance)
        }
      } finally {
        setLoading(false)
      }
    }

    loadCredits()
  }, [])

  /*
   * Il piano può essere gestito dal backend.
   * Per ora manteniamo 6000 come limite visuale del piano corrente.
   */
  const monthlyAllowance = 6000

  const balance = credits?.credits ?? 0

  const pct = Math.max(
    0,
    Math.min(
      100,
      Math.round((balance / monthlyAllowance) * 100),
    ),
  )

  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
            <Wallet className="h-5 w-5 text-[#6366F1]" />
          </div>

          <div>
            <h3 className="text-base font-semibold text-[#111827]">
              AI Credits
            </h3>

            <p className="text-sm text-[#6B7280]">
              Saldo del ciclo corrente
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-[#111827]">
          {loading
            ? '...'
            : balance.toLocaleString('it-IT')}
        </span>

        <span className="text-sm text-[#6B7280]">
          / {monthlyAllowance.toLocaleString('it-IT')} crediti
        </span>
      </div>

      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]"
          style={{
            width: `${pct}%`,
          }}
        />
      </div>

      <p className="mt-2 text-xs text-[#6B7280]">
        {loading
          ? 'Caricamento saldo...'
          : `${pct}% del pacchetto mensile ancora disponibile`}
      </p>

      {!compact && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#111827]">
            Saldo account
          </h4>

          <div className="mt-3 rounded-lg bg-[#F7F8FA] px-4 py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#6B7280]">
                Crediti disponibili
              </span>

              <span className="text-sm font-semibold text-[#6366F1]">
                {loading
                  ? '...'
                  : balance.toLocaleString('it-IT')}
              </span>
            </div>

            {credits?.plan && (
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm text-[#6B7280]">
                  Piano
                </span>

                <span className="text-sm font-semibold text-[#111827]">
                  {credits.plan}
                </span>
              </div>
            )}
          </div>
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
          L&apos;acquisto di crediti non è ancora attivo:
          il flusso di pagamento verrà collegato insieme
          al backend.
        </p>
      )}
    </div>
  )
}
