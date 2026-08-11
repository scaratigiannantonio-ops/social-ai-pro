'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Zap, ChevronDown, User, Settings, LogOut } from 'lucide-react'
import { MOCK_USER, MOCK_CREDITS } from '@/lib/mock-data'

export default function DashboardHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header className="sticky top-0 z-40 h-16 bg-white/80 backdrop-blur-lg border-b border-[#E5E7EB]">
      <div className="h-full px-4 sm:px-6 flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-[#111827]"
          aria-label="Apri menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <span className="lg:hidden font-semibold text-[#111827]">Social AI Pro</span>

        <div className="ml-auto flex items-center gap-3">
          {/* Credits indicator */}
          <Link
            href="/dashboard/credits"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3 py-1.5 hover:bg-[#F7F8FA] transition-colors"
          >
            <Zap className="w-4 h-4 text-[#6366F1]" />
            <span className="text-sm font-medium text-[#111827]">
              {MOCK_CREDITS.balance.toLocaleString('it-IT')}
            </span>
            <span className="text-xs text-[#6B7280]">crediti</span>
          </Link>

          {/* Account menu */}
          <div className="relative" ref={ref}>
            <button
              onClick={() => setOpen(!open)}
              aria-haspopup="menu"
              aria-expanded={open}
              className="flex items-center gap-2 rounded-lg py-1.5 pl-1.5 pr-2 hover:bg-[#F7F8FA] transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center text-xs font-semibold text-white">
                {MOCK_USER.initials}
              </span>
              <span className="hidden sm:block text-sm font-medium text-[#111827]">
                {MOCK_USER.name}
              </span>
              <ChevronDown className="w-4 h-4 text-[#6B7280]" />
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-56 rounded-xl border border-[#E5E7EB] bg-white shadow-lg py-1.5 animate-fade-in"
              >
                <div className="px-3.5 py-2 border-b border-[#E5E7EB]">
                  <p className="text-sm font-medium text-[#111827]">{MOCK_USER.name}</p>
                  <p className="text-xs text-[#6B7280] truncate">{MOCK_USER.email}</p>
                </div>
                <Link
                  href="/dashboard/settings"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-[#6B7280] hover:bg-[#F7F8FA] hover:text-[#111827] transition-colors"
                >
                  <User className="w-4 h-4" />
                  Profilo
                </Link>
                <Link
                  href="/dashboard/settings"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-[#6B7280] hover:bg-[#F7F8FA] hover:text-[#111827] transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Impostazioni
                </Link>
                <div className="my-1 border-t border-[#E5E7EB]" />
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-[#6B7280] hover:bg-[#F7F8FA] hover:text-[#111827] transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Esci
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}