import type { Metadata } from 'next'
import SimplePage from '@/components/simple-page'

export const metadata: Metadata = {
  title: 'Privacy Policy — Social AI Pro',
}

export default function PrivacyPage() {
  return (
    <SimplePage
      title="Privacy Policy"
      description="L'informativa privacy definitiva verrà pubblicata qui prima dell'attivazione degli account e dei pagamenti."
    />
  )
}