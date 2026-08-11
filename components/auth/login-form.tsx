'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, ArrowRight, CheckCircle2 } from 'lucide-react'
import Field from '@/components/auth/field'
import FormAlert from '@/components/auth/form-alert'
import { loginUser } from '@/lib/auth-client'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function LoginForm() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [success, setSuccess] = useState(false)
  const [notConfigured, setNotConfigured] = useState(false)

  const validate = () => {
    const next: { email?: string; password?: string } = {}
    if (!EMAIL_RE.test(email.trim())) next.email = 'Inserisci un indirizzo email valido.'
    if (password.length === 0) next.password = 'Inserisci la tua password.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')
    setNotConfigured(false)

    if (!validate()) return

    setLoading(true)
    const result = await loginUser({ email: email.trim(), password, remember })
    setLoading(false)

    if (result.status === 'success') {
      setSuccess(true)
      router.push('/dashboard')
      return
    }

    if (result.status === 'not-configured') {
      setNotConfigured(true)
      return
    }

    setFormError(result.message)
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {formError && <FormAlert tone="error">{formError}</FormAlert>}

      {success && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-lg border border-[#10B981]/30 bg-[#10B981]/5 px-3.5 py-3 text-sm text-[#047857]"
        >
          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
          Accesso riuscito. Ti stiamo portando alla dashboard…
        </div>
      )}

      {notConfigured && (
        <FormAlert tone="info">
          Le credenziali sono nel formato corretto, ma il backend di autenticazione non è
          ancora collegato, quindi nessuna sessione è stata creata.{' '}
          <Link href="/dashboard" className="font-medium text-[#6366F1] hover:underline">
            Apri l&apos;anteprima della dashboard
          </Link>
          .
        </FormAlert>
      )}

      <Field
        label="Email"
        type="email"
        value={email}
        onChange={setEmail}
        error={errors.email}
        autoComplete="email"
        placeholder="nome@azienda.com"
        disabled={loading}
      />
      <Field
        label="Password"
        type="password"
        value={password}
        onChange={setPassword}
        error={errors.password}
        autoComplete="current-password"
        placeholder="La tua password"
        disabled={loading}
      />

      <div className="flex items-center justify-between gap-4">
        <label className="flex items-center gap-2 text-sm text-[#6B7280] cursor-pointer">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            disabled={loading}
            className="w-4 h-4 rounded border-[#E5E7EB] text-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/25"
          />
          Ricordami
        </label>

        <Link href="/forgot-password" className="text-sm text-[#6366F1] hover:underline">
          Password dimenticata?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Accesso in corso…
          </>
        ) : (
          <>
            Accedi
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}