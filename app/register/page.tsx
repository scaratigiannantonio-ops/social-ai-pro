import type { Metadata } from 'next'
import Link from 'next/link'
import AuthShell from '@/components/auth/auth-shell'
import RegisterForm from '@/components/auth/register-form'

export const metadata: Metadata = {
  title: 'Crea il tuo account — Social AI Pro',
  description:
    'Crea il tuo account Social AI Pro e attiva il tuo team marketing AI: ricerca, strategia e contenuti in un unico workspace.',
}

export default function RegisterPage() {
  return (
    <AuthShell
      title="Crea il tuo account"
      subtitle="Attiva il tuo team marketing AI: ricerca il pubblico, costruisci la strategia e genera contenuti da un unico workspace."
      footer={
        <>
          Hai già un account?{' '}
          <Link href="/login" className="font-medium text-[#6366F1] hover:underline">
            Accedi
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthShell>
  )
}