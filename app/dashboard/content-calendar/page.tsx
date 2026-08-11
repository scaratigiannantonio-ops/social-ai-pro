import { Calendar } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/coming-soon'

export default function ContentCalendarPage() {
  return (
    <ComingSoon
      icon={Calendar}
      title="Content Calendar"
      description="Pianifica, organizza e tieni sotto controllo tutti i contenuti generati in un unico calendario editoriale."
      bullets={[
        'Vista settimanale e mensile',
        'Stato di ogni contenuto',
        'Assegnazione ai canali',
        'Sincronizzazione con la strategia',
      ]}
    />
  )
}
