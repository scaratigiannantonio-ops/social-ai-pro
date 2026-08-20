'use client'

import { useEffect, useState } from 'react'
import { Wallet, Sparkles } from 'lucide-react'

import {
  getCreditBalance,
  getAccessToken,
} from '@/lib/auth-client'

interface CreditBalance {
  user_id: number
  credits: number
  plan: string
}

interface CreditsWidgetProps {
  compact?: boolean
}

// Social AI Pro: piano unico €29/mese.
// Il piano include 6.000 crediti mensili.
// I crediti aggiuntivi saranno acquistabili separatamente.
const MONTHLY_CREDIT_ALLOWANCE = 6000

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

  const balance = credits?.credits ?? 0

  const pct = Math.max(
    0,
    Math.min(
      100,
      Math.round(
        (balance / MONTHLY_CREDIT_ALLOWANCE) * 100,
      ),
    ),
  )

  const displayedBalance = loading
    ? '...'
    : balance.toLocaleString('it-IT')

  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">

      {/* Header */}
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
              Crediti disponibili
            </p>
          </div>

        </div>
      </div>

      {/* Balance */}
      <div className="mt-6 flex items-baseline gap-2">

        <span className="text-4xl font-bold text-[#111827]">
          {displayedBalance}
        </span>

        <span className="text-sm text-[#6B7280]">
          / {MONTHLY_CREDIT_ALLOWANCE.toLocaleString('it-IT')} crediti
        </span>

      </div>

      {/* Progress */}
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] transition-all duration-500"
          style={{
            width: `${pct}%`,
          }}
        />
      </div>

      <p className="mt-2 text-xs text-[#6B7280]">
        {loading
          ? 'Caricamento saldo...'
          : `${pct}% dei crediti mensili ancora disponibili`}
      </p>

      {/* Plan */}
      <div className="mt-4 rounded-lg bg-[#F7F8FA] px-4 py-3">
        <p className="text-xs font-medium text-[#111827]">
          Social AI Pro
        </p>

        <p className="mt-1 text-xs text-[#6B7280]">
          €29/mese · 6.000 crediti inclusi
        </p>
      </div>

      {/* Recent usage */}
      {!compact && (
        <div className="mt-6">

          <h4 className="text-sm font-semibold text-[#111827]">
            Consumi recenti
          </h4>

          <div className="mt-3 rounded-lg bg-[#F7F8FA] px-4 py-4">
            <p className="text-xs leading-relaxed text-[#6B7280]">
              I consumi verranno mostrati qui quando le
              operazioni AI saranno collegate al sistema
              crediti del backend.
            </p>
          </div>

        </div>
      )}

      {/* Buy Credits */}
      <button
        type="button"
        onClick={() => setNotice(true)}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        <Sparkles className="h-4 w-4" />
        Acquista crediti
      </button>

      {notice && (
        <p className="mt-3 rounded-lg bg-[#F7F8FA] px-4 py-3 text-xs text-[#6B7280]">
          L&apos;acquisto di crediti aggiuntivi sarà disponibile
          prossimamente.
        </p>
      )}

    </div>
  )
}
