'use client'

import { useId } from 'react'
import { AlertCircle } from 'lucide-react'

export default function Field({
  label,
  type = 'text',
  value,
  onChange,
  error,
  autoComplete,
  placeholder,
  disabled,
}: {
  label: string
  type?: string
  value: string
  onChange: (value: string) => void
  error?: string
  autoComplete?: string
  placeholder?: string
  disabled?: boolean
}) {
  const id = useId()

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[#111827] mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-colors disabled:bg-[#F7F8FA] disabled:cursor-not-allowed ${
          error
            ? 'border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100'
            : 'border-[#E5E7EB] focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/15'
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  )
}