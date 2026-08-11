'use client'

import { useState } from 'react'
import Sidebar from '@/components/dashboard/sidebar'
import DashboardHeader from '@/components/dashboard/header'

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <div className="lg:pl-64">
        <DashboardHeader onMenuClick={() => setMobileOpen(true)} />
        <main className="px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-[1100px] mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}