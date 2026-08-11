import { Target } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/coming-soon'

export default function ContentStrategyPage() {
  return (
    <ComingSoon
      icon={Target}
      title="Content Strategy"
      description="Un piano editoriale costruito sui dati raccolti: pilastri di contenuto, formati, frequenza e obiettivi, pronto da mettere in calendario."
      bullets={[
        'Pilastri di contenuto basati sui dati',
        'Formati e canali consigliati',
        'Frequenza di pubblicazione',
        'Collegamento diretto al Content Calendar',
      ]}
    />
  )
}
