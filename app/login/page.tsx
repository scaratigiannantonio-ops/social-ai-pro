import type { Metadata } from 'next'
import Link from 'next/link'
import AuthShell from '@/components/auth/auth-shell'
import LoginForm from '@/components/auth/login-form'

export const metadata: Metadata = {
  title: 'Accedi — Social AI Pro',
  description: 'Accedi al tuo workspace Social AI Pro.',
}

export default function LoginPage() {
  return (
    <AuthShell
      title="Bentornato"
      subtitle="Accedi per riprendere ricerca, strategia e contenuti da dove li avevi lasciati."
      footer={
        <>
          Non hai ancora un account?{' '}
          <Link href="/register" className="font-medium text-[#6366F1] hover:underline">
            Registrati
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  )
}