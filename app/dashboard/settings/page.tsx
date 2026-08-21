'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  User,
  Mail,
  CreditCard,
  LogOut,
  Loader2,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'

import {
  getAccessToken,
  getCurrentUser,
  getCreditBalance,
  removeAccessToken,
} from '@/lib/auth-client'

interface AccountUser {
  id: number
  name?: string
  email?: string
  plan?: string
  credits?: number
  created_at?: string
  createdAt?: string
}

interface AccountCredits {
  user_id: number
  credits: number
  plan: string
}

export default function SettingsPage() {
  const router = useRouter()

  const [user, setUser] = useState<AccountUser | null>(null)
  const [credits, setCredits] = useState<AccountCredits | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [loggingOut, setLoggingOut] = useState(false)

  useEffect(() => {
    let mounted = true

    async function loadAccount() {
      const token = getAccessToken()

      if (!token) {
        router.replace('/login')
        return
      }

      try {
        setLoading(true)
        setError(null)

        const [currentUser, creditBalance] = await Promise.all([
          getCurrentUser(),
          getCreditBalance(),
        ])

        if (!mounted) return

        if (!currentUser) {
          setError(
            'Impossibile recuperare i dati dell’account. La sessione potrebbe essere scaduta.',
          )
          return
        }

        setUser(currentUser)
        setCredits(creditBalance)
      } catch {
        if (!mounted) return

        setError(
          'Si è verificato un errore durante il caricamento dei dati dell’account.',
        )
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    }

    loadAccount()

    return () => {
      mounted = false
    }
  }, [router])

  function handleLogout() {
    setLoggingOut(true)
    removeAccessToken()
    router.replace('/login')
  }

  function formatDate(date?: string) {
    if (!date) return null

    const parsed = new Date(date)

    if (Number.isNaN(parsed.getTime())) {
      return null
    }

    return parsed.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  }

  const plan = credits?.plan ?? user?.plan ?? 'free'
  const creditAmount = credits?.credits ?? user?.credits ?? 0
  const createdAt = formatDate(user?.created_at ?? user?.createdAt)

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex items-center gap-3 text-sm text-[#6B7280]">
          <Loader2 className="h-5 w-5 animate-spin text-[#6366F1]" />
          Caricamento account...
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
          Account & Settings
        </h1>

        <p className="mt-2 text-[15px] text-[#6B7280]">
          Gestisci i dati del tuo account e visualizza il tuo piano e i
          crediti disponibili.
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />

          <div>
            <p className="text-sm font-semibold text-red-700">
              Impossibile caricare l’account
            </p>

            <p className="mt-1 text-sm text-red-600">
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Account */}
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-2xl border border-[#E5E7EB] bg-white">
          <div className="border-b border-[#E5E7EB] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
                <User className="h-5 w-5 text-[#6366F1]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#111827]">
                  Informazioni account
                </h2>

                <p className="text-sm text-[#6B7280]">
                  I dati associati al tuo account Social AI Pro.
                </p>
              </div>
            </div>
          </div>

          <div className="divide-y divide-[#E5E7EB]">
            {/* Name */}
            <div className="flex items-center justify-between gap-6 px-6 py-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
                  Nome
                </p>

                <p className="mt-1 text-sm font-medium text-[#111827]">
                  {user?.name || 'Non disponibile'}
                </p>
              </div>

              <User className="h-5 w-5 text-[#9CA3AF]" />
            </div>

            {/* Email */}
            <div className="flex items-center justify-between gap-6 px-6 py-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
                  Email
                </p>

                <p className="mt-1 break-all text-sm font-medium text-[#111827]">
                  {user?.email || 'Non disponibile'}
                </p>
              </div>

              <Mail className="h-5 w-5 text-[#9CA3AF]" />
            </div>

            {/* Plan */}
            <div className="flex items-center justify-between gap-6 px-6 py-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
                  Piano
                </p>

                <p className="mt-1 text-sm font-semibold capitalize text-[#6366F1]">
                  {plan}
                </p>
              </div>

              <CreditCard className="h-5 w-5 text-[#9CA3AF]" />
            </div>

            {/* Created at */}
            {createdAt && (
              <div className="flex items-center justify-between gap-6 px-6 py-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
                    Account creato il
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#111827]">
                    {createdAt}
                  </p>
                </div>

                <CheckCircle2 className="h-5 w-5 text-[#10B981]" />
              </div>
            )}
          </div>
        </div>

        {/* Credits */}
        <div className="rounded-2xl border border-[#E5E7EB] bg-white">
          <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-6 py-5">
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-white" />

              <div>
                <h2 className="text-base font-semibold text-white">
                  AI Credits
                </h2>

                <p className="text-sm text-white/80">
                  Saldo disponibile
                </p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-4xl font-bold text-[#111827]">
              {creditAmount.toLocaleString('it-IT')}
            </p>

            <p className="mt-1 text-sm text-[#6B7280]">
              crediti disponibili
            </p>

            <div className="mt-6 rounded-lg bg-[#F7F8FA] p-4">
              <p className="text-xs leading-relaxed text-[#6B7280]">
                I crediti vengono utilizzati quando esegui funzionalità AI
                come Research, generazione di contenuti, immagini e video.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Session */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
        <h2 className="text-base font-semibold text-[#111827]">
          Sessione
        </h2>

        <p className="mt-1 text-sm text-[#6B7280]">
          Esci da questo account su questo dispositivo.
        </p>

        <button
          type="button"
          onClick={handleLogout}
          disabled={loggingOut}
          className="mt-5 inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loggingOut ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <LogOut className="h-4 w-4" />
          )}

          {loggingOut ? 'Uscita...' : 'Esci dall’account'}
        </button>
      </div>
    </div>
  )
}
