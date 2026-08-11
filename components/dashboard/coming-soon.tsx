import Link from 'next/link'
import { ArrowLeft, type LucideIcon } from 'lucide-react'

interface ComingSoonProps {
  icon: LucideIcon
  title: string
  description: string
  bullets?: string[]
}

/**
 * Professional placeholder for dashboard sections whose backend is not built
 * yet. Keeps the navigation complete without pretending the feature works.
 */
export function ComingSoon({ icon: Icon, title, description, bullets }: ComingSoonProps) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-white p-8 sm:p-12 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]">
        <Icon className="h-7 w-7 text-white" />
      </div>

      <span className="mt-6 inline-block rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#6366F1]">
        In arrivo
      </span>

      <h2 className="mt-4 text-2xl font-bold text-[#111827]">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#6B7280]">
        {description}
      </p>

      {bullets && bullets.length > 0 && (
        <ul className="mx-auto mt-8 grid max-w-xl gap-3 text-left sm:grid-cols-2">
          {bullets.map((b) => (
            <li
              key={b}
              className="rounded-lg border border-[#E5E7EB] bg-[#F7F8FA] px-4 py-3 text-sm text-[#374151]"
            >
              {b}
            </li>
          ))}
        </ul>
      )}

      <Link
        href="/dashboard"
        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] px-5 py-2.5 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#F7F8FA]"
      >
        <ArrowLeft className="h-4 w-4" />
        Torna alla Overview
      </Link>
    </div>
  )
}
