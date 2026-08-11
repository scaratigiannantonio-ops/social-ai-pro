import type { Metadata } from 'next'
import DashboardShell from '@/components/dashboard/dashboard-shell'

export const metadata: Metadata = {
  title: 'Dashboard — Social AI Pro',
  description: 'Il tuo workspace Social AI Pro: ricerca, strategia, contenuti e crediti AI.',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>
}