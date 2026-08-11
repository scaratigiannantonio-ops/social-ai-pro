import { AlertCircle, Info } from 'lucide-react'

export default function FormAlert({
  tone,
  children,
}: {
  tone: 'error' | 'info'
  children: React.ReactNode
}) {
  const Icon = tone === 'error' ? AlertCircle : Info

  return (
    <div
      role={tone === 'error' ? 'alert' : 'status'}
      className={`flex items-start gap-2.5 rounded-lg border px-3.5 py-3 text-sm ${
        tone === 'error'
          ? 'border-red-200 bg-red-50 text-red-700'
          : 'border-[#E5E7EB] bg-[#F7F8FA] text-[#6B7280]'
      }`}
    >
      <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
      <div className="leading-relaxed">{children}</div>
    </div>
  )
}