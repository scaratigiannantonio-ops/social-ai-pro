import type { Metadata } from 'next'
import SimplePage from '@/components/simple-page'

export const metadata: Metadata = {
  title: 'Termini di servizio — Social AI Pro',
}

export default function TermsPage() {
  return (
    <SimplePage
      title="Termini di servizio"
      description="I termini di servizio definitivi verranno pubblicati qui prima dell'attivazione degli account e dei pagamenti."
    />
  )
}