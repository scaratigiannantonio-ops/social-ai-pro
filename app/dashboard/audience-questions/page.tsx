import { MessageCircleQuestion } from 'lucide-react'
import { ComingSoon } from '@/components/dashboard/coming-soon'

export default function AudienceQuestionsPage() {
  return (
    <ComingSoon
      icon={MessageCircleQuestion}
      title="Audience Questions"
      description="Le domande che il tuo pubblico si sta già facendo, raccolte e ordinate per volume e rilevanza, pronte a diventare contenuti."
      bullets={[
        'Domande raccolte dalle conversazioni reali',
        'Ordinamento per volume e rilevanza',
        'Raggruppamento per tema',
        'Conversione in idee di contenuto',
      ]}
    />
  )
}
