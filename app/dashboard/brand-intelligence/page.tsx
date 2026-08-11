import { Brain } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/coming-soon'

export default function BrandIntelligencePage() {
  return (
    <ComingSoon
      icon={Brain}
      title="Brand Intelligence"
      description="Costruisci il profilo del tuo brand una volta sola: posizionamento, pubblico, tone of voice e differenziatori. Ogni contenuto generato eredita questo contesto."
      bullets={[
        'Analisi automatica del sito e dei canali social',
        'Tone of voice e linee guida editoriali',
        'Mappa del pubblico e dei competitor',
        'Contesto condiviso con tutti gli agenti AI',
      ]}
    />
  )
}
