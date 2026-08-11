'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Loader2, ArrowRight } from 'lucide-react'
import Field from '@/components/auth/field'
import FormAlert from '@/components/auth/form-alert'
import { registerUser } from '@/lib/auth-client'

interface Errors {
  name?: string
  email?: string
  password?: string
  confirm?: string
  terms?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function RegisterForm() {
  const router = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [terms, setTerms] = useState(false)

  const [errors, setErrors] = useState<Errors>({})
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [notConfigured, setNotConfigured] = useState(false)

  const validate = () => {
    const next: Errors = {}

    if (name.trim().length < 2) next.name = 'Inserisci il tuo nome (almeno 2 caratteri).'
    if (!EMAIL_RE.test(email.trim())) next.email = 'Inserisci un indirizzo email valido.'
    if (password.length < 8) next.password = 'La password deve avere almeno 8 caratteri.'
    else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password))
      next.password = 'Usa almeno una lettera e un numero.'
    if (confirm !== password) next.confirm = 'Le password non coincidono.'
    if (!terms) next.terms = 'Devi accettare Termini e Privacy per continuare.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')
    setNotConfigured(false)

    if (!validate()) return

    setLoading(true)
    const result = await registerUser({ name: name.trim(), email: email.trim(), password })
    setLoading(false)

    if (result.status === 'success') {
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

      {notConfigured && (
        <FormAlert tone="info">
          I dati sono validi, ma il backend di registrazione non è ancora collegato, quindi
          nessun account è stato creato.{' '}
          <Link href="/dashboard" className="font-medium text-[#6366F1] hover:underline">
            Apri l&apos;anteprima della dashboard
          </Link>
          .
        </FormAlert>
      )}

      <Field
        label="Nome"
        value={name}
        onChange={setName}
        error={errors.name}
        autoComplete="name"
        placeholder="Marco Rossi"
        disabled={loading}
      />
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
        autoComplete="new-password"
        placeholder="Almeno 8 caratteri"
        disabled={loading}
      />
      <Field
        label="Conferma password"
        type="password"
        value={confirm}
        onChange={setConfirm}
        error={errors.confirm}
        autoComplete="new-password"
        placeholder="Ripeti la password"
        disabled={loading}
      />

      <div>
        <label className="flex items-start gap-2.5 text-sm text-[#6B7280] cursor-pointer">
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            disabled={loading}
            className="mt-0.5 w-4 h-4 rounded border-[#E5E7EB] text-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/25"
          />
          <span>
            Accetto i{' '}
            <Link href="/terms" className="text-[#6366F1] hover:underline">
              Termini di servizio
            </Link>{' '}
            e la{' '}
            <Link href="/privacy" className="text-[#6366F1] hover:underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.terms && <p className="mt-1.5 text-xs text-red-600">{errors.terms}</p>}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Creazione account…
          </>
        ) : (
          <>
            Crea account
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  )
}