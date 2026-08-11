import type { Metadata } from 'next'
import Link from 'next/link'
import SimplePage from '@/components/simple-page'

export const metadata: Metadata = {
  title: 'Password dimenticata — Social AI Pro',
}

export default function ForgotPasswordPage() {
  return (
    <SimplePage
      title="Password dimenticata"
      description="Il recupero password sarà attivo insieme al backend di autenticazione. Nel frattempo puoi tornare alla pagina di accesso."
    >
      <Link
        href="/login"
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Torna al login
      </Link>
    </SimplePage>
  )
}