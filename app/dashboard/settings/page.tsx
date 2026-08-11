import { Settings } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/coming-soon'

export default function SettingsPage() {
  return (
    <ComingSoon
      icon={Settings}
      title="Settings"
      description="Gestione dell’account, del team e delle preferenze. Sarà disponibile insieme al backend e all’autenticazione reale."
      bullets={[
        'Profilo e dati account',
        'Preferenze di notifica',
        'Gestione del team',
        'Connessione dei canali social',
      ]}
    />
  )
}
