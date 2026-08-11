'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Sparkles, X } from 'lucide-react'
import { dashboardNav } from '@/lib/dashboard-nav'

export default function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean
  onClose: () => void
}) {
  const pathname = usePathname()

  const nav = (
    <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Sezioni dashboard">
      {dashboardNav.map((item) => {
        const active =
          item.href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(item.href)
        const Icon = item.icon

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            aria-current={active ? 'page' : undefined}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
              active
                ? 'bg-[#6366F1]/10 text-[#6366F1] font-medium'
                : 'text-[#6B7280] hover:bg-[#F7F8FA] hover:text-[#111827]'
            }`}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            {item.label}
          </Link>
        )
      })}
    </nav>
  )

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 w-64 flex-col border-r border-[#E5E7EB] bg-white">
        <div className="h-16 flex items-center gap-2 px-5 border-b border-[#E5E7EB]">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-[#111827]">Social AI Pro</span>
        </div>
        {nav}
        <div className="px-5 py-4 border-t border-[#E5E7EB]">
          <Link href="/" className="text-xs text-[#6B7280] hover:text-[#111827] transition-colors">
            ← Torna al sito
          </Link>
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <button
            aria-label="Chiudi menu"
            onClick={onClose}
            className="absolute inset-0 bg-[#111827]/40"
          />
          <aside className="absolute inset-y-0 left-0 w-72 bg-white flex flex-col shadow-xl animate-fade-in">
            <div className="h-16 flex items-center gap-2 px-5 border-b border-[#E5E7EB]">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-[#111827]">Social AI Pro</span>
              <button onClick={onClose} className="ml-auto p-2 text-[#6B7280]" aria-label="Chiudi menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            {nav}
          </aside>
        </div>
      )}
    </>
  )
}