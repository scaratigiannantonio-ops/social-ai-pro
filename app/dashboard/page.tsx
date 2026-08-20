'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  Wallet,
  Users,
  MessageCircleQuestion,
  Lightbulb,
  Brain,
  Search,
  Target,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'

import {
  getCreditBalance,
  getCurrentUser,
  getAccessToken,
} from '@/lib/auth-client'

interface DashboardUser {
  id: number
  name?: string
  email?: string
  credits?: number
  plan?: string
}

interface CreditBalance {
  user_id: number
  credits: number
  plan: string
}

const features: {
  title: string
  description: string
  href: string
  cta: string
  icon: LucideIcon
}[] = [
  {
    title: 'Brand Intelligence',
    description:
      'Analizza il tuo brand, il posizionamento e il tone of voice per dare a ogni contenuto un contesto coerente.',
    href: '/dashboard/brand-intelligence',
    cta: 'Analizza il brand',
    icon: Brain,
  },
  {
    title: 'AI Research',
    description:
      'Scopri conversazioni, trend e lead reali nella tua nicchia, con fonti verificabili e non inventate.',
    href: '/dashboard/ai-research',
    cta: 'Avvia una research',
    icon: Search,
  },
  {
    title: 'Audience Questions',
    description:
      'Raccogli le domande che il tuo pubblico si sta già facendo e trasformale in contenuti ad alto impatto.',
    href: '/dashboard/audience-questions',
    cta: 'Vedi le domande',
    icon: MessageCircleQuestion,
  },
  {
    title: 'Content Strategy',
    description:
      'Costruisci un piano editoriale strutturato a partire dai dati raccolti, pronto da mettere in calendario.',
    href: '/dashboard/content-strategy',
    cta: 'Costruisci la strategia',
    icon: Target,
  },
]

export default function DashboardOverviewPage() {
  const [user, setUser] = useState<DashboardUser | null>(null)
  const [credits, setCredits] = useState<CreditBalance | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadDashboard() {
      const token = getAccessToken()

      if (!token) {
        setLoading(false)
        return
      }

      try {
        const [currentUser, creditBalance] = await Promise.all([
          getCurrentUser(),
          getCreditBalance(),
        ])

        if (currentUser) {
          setUser(currentUser)
        }

        if (creditBalance) {
          setCredits(creditBalance)
        }
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  const firstName =
    user?.name?.split(' ')[0] ??
    user?.email?.split('@')[0] ??
    'utente'

  const creditValue = loading
    ? '...'
    : credits?.credits?.toLocaleString('it-IT') ?? '0'

  const stats: {
    label: string
    value: string
    icon: LucideIcon
    pending?: boolean
  }[] = [
    {
      label: 'Crediti disponibili',
      value: creditValue,
      icon: Wallet,
    },
    {
      label: 'Lead trovati',
      value: '—',
      icon: Users,
      pending: true,
    },
    {
      label: 'Domande dell’audience',
      value: '—',
      icon: MessageCircleQuestion,
      pending: true,
    },
    {
      label: 'Idee di contenuto',
      value: '—',
      icon: Lightbulb,
      pending: true,
    },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
            Bentornato, {firstName} 👋
          </h1>

          <p className="mt-2 text-[15px] text-[#6B7280]">
            Ecco il riepilogo della tua attività su Social AI Pro.
          </p>

          {credits && (
            <p className="mt-1 text-xs text-[#9CA3AF]">
              Piano: {credits.plan}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard/ai-research"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start Research
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/dashboard/brand-intelligence"
            className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#F7F8FA]"
          >
            Analyze My Brand
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, pending }) => (
          <div
            key={label}
            className="rounded-2xl border border-[#E5E7EB] bg-white p-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
              <Icon className="h-5 w-5 text-[#6366F1]" />
            </div>

            <p className="mt-4 text-2xl font-bold text-[#111827]">
              {value}
            </p>

            <p className="mt-1 text-sm text-[#6B7280]">
              {label}
            </p>

            {pending && (
              <p className="mt-1 text-xs text-[#9CA3AF]">
                Non ancora disponibile
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {features.map(
          ({ title, description, href, cta, icon: Icon }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]">
                <Icon className="h-5 w-5 text-white" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#111827]">
                {title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B7280]">
                {description}
              </p>

              <Link
                href={href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1] transition-all hover:gap-3"
              >
                {cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ),
        )}
      </div>

      {/* Recent activity */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#111827]">
          Attività recente
        </h2>

        <div className="mt-4 rounded-lg bg-[#F7F8FA] px-4 py-8 text-center">
          <p className="text-sm text-[#6B7280]">
            Nessuna attività recente da mostrare.
          </p>
          <p className="mt-1 text-xs text-[#9CA3AF]">
            Le tue operazioni AI compariranno qui quando saranno
            collegate al backend.
          </p>
        </div>
      </div>
    </div>
  )
}
