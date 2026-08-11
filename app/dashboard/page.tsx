import Link from 'next/link'
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
import { MOCK_USER, MOCK_CREDITS, MOCK_METRICS, MOCK_ACTIVITY } from '@/lib/mock-data'

const stats: { label: string; value: string; icon: LucideIcon }[] = [
  { label: 'Crediti disponibili', value: MOCK_CREDITS.balance.toLocaleString('it-IT'), icon: Wallet },
  { label: 'Lead trovati', value: MOCK_METRICS.leadsFound.toLocaleString('it-IT'), icon: Users },
  {
    label: 'Domande dell’audience',
    value: MOCK_METRICS.audienceQuestions.toLocaleString('it-IT'),
    icon: MessageCircleQuestion,
  },
  { label: 'Idee di contenuto', value: MOCK_METRICS.contentIdeas.toLocaleString('it-IT'), icon: Lightbulb },
]

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

const kindColor: Record<string, string> = {
  research: 'bg-[#EEF2FF] text-[#6366F1]',
  content: 'bg-[#F3E8FF] text-[#8B5CF6]',
  brand: 'bg-[#ECFDF5] text-[#10B981]',
  strategy: 'bg-[#FFF7ED] text-[#F59E0B]',
}

export default function DashboardOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
            Bentornato, {MOCK_USER.name.split(' ')[0]} 👋
          </h1>
          <p className="mt-2 text-[15px] text-[#6B7280]">
            Ecco il riepilogo della tua attività su Social AI Pro.
          </p>
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
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
              <Icon className="h-5 w-5 text-[#6366F1]" />
            </div>
            <p className="mt-4 text-2xl font-bold text-[#111827]">{value}</p>
            <p className="mt-1 text-sm text-[#6B7280]">{label}</p>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="grid gap-4 lg:grid-cols-2">
        {features.map(({ title, description, href, cta, icon: Icon }) => (
          <div
            key={title}
            className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-shadow hover:shadow-lg"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#111827]">{title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#6B7280]">{description}</p>
            <Link
              href={href}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#6366F1] hover:gap-3 transition-all"
            >
              {cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#111827]">Attività recente</h2>
        <ul className="mt-4 divide-y divide-[#E5E7EB]">
          {MOCK_ACTIVITY.map((a) => (
            <li key={a.id} className="flex items-start justify-between gap-4 py-4">
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 rounded-md px-2 py-1 text-[11px] font-semibold capitalize ${kindColor[a.kind]}`}
                >
                  {a.kind}
                </span>
                <div>
                  <p className="text-sm font-medium text-[#111827]">{a.title}</p>
                  <p className="text-sm text-[#6B7280]">{a.detail}</p>
                </div>
              </div>
              <span className="shrink-0 text-xs text-[#9CA3AF]">{a.at}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
