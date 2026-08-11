import { Search } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/coming-soon'

export default function AiResearchPage() {
  return (
    <ComingSoon
      icon={Search}
      title="AI Research"
      description="Cerca conversazioni reali nella tua nicchia e trasformale in insight utilizzabili, con fonti verificabili invece di output inventati."
      bullets={[
        'Ricerca su conversazioni e community reali',
        'Lead e segnali di intento qualificati',
        'Fonti sempre citate e verificabili',
        'Esportazione dei risultati verso la strategia',
      ]}
    />
  )
}
