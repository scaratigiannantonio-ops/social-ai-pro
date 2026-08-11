import Link from 'next/link'
import { Sparkles, Check } from 'lucide-react'

const highlights = [
  'Brand Intelligence che impara il tuo brand',
  'AI Research sulle domande reali del pubblico',
  'Strategia e contenuti generati dagli AI Agents',
]

export default function AuthShell({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
  footer: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      {/* Form column */}
      <div className="flex flex-col px-6 py-10 sm:px-10 lg:px-16">
        <Link href="/" className="inline-flex items-center gap-2 self-start">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#111827] text-lg">Social AI Pro</span>
        </Link>

        <div className="flex-1 flex items-center justify-center py-10">
          <div className="w-full max-w-sm">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">{title}</h1>
            <p className="mt-2 text-[#6B7280] leading-relaxed">{subtitle}</p>

            <div className="mt-8">{children}</div>

            <div className="mt-6 text-center text-sm text-[#6B7280]">{footer}</div>
          </div>
        </div>
      </div>

      {/* Brand column */}
      <aside className="hidden lg:flex flex-col justify-center px-16 bg-[#F7F8FA] border-l border-[#E5E7EB]">
        <div className="max-w-md">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white mb-6">
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span className="text-sm text-[#6B7280] font-medium">Your AI Social Media Team</span>
          </div>

          <h2 className="text-3xl font-bold text-[#111827] tracking-tight leading-tight">
            Un team marketing AI che lavora per te.
          </h2>
          <p className="mt-4 text-[#6B7280] leading-relaxed">
            Ricerca, strategia e contenuti in un unico workspace intelligente.
          </p>

          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[#111827]">
                <span className="w-5 h-5 mt-0.5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </main>
  )
}