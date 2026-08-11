import Link from 'next/link'
import { Sparkles, ArrowLeft } from 'lucide-react'

/** Minimal branded page used for routes that are linked from the product but
 *  whose content will arrive with the backend (legal pages, password reset). */
export default function SimplePage({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <header className="px-6 py-6 border-b border-[#E5E7EB]">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#111827] text-lg">Social AI Pro</span>
        </Link>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">{title}</h1>
          <p className="mt-3 text-[#6B7280] leading-relaxed">{description}</p>

          {children && <div className="mt-8 text-left">{children}</div>}

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Torna alla home
          </Link>
        </div>
      </div>
    </main>
  )
}