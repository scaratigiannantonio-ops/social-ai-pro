/* =========================================================================
 * AUTH CLIENT
 * =========================================================================
 * Thin frontend client for the future authentication backend.
 *
 * There is NO authentication implemented here: no session, no token, nothing
 * written to localStorage. The client simply forwards the form payload to the
 * API described by NEXT_PUBLIC_API_BASE_URL.
 *
 * While that variable is not configured, the calls below resolve to
 * { status: 'not-configured' } so the UI can show an honest message instead of
 * pretending the user has been registered or logged in.
 * ========================================================================= */

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export interface LoginPayload {
  email: string
  password: string
  remember: boolean
}

export type AuthResult =
  | { status: 'success' }
  | { status: 'not-configured' }
  | { status: 'error'; message: string }

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? ''

export const isBackendConfigured = () => API_BASE.length > 0

async function post(path: string, body: unknown): Promise<AuthResult> {
  if (!isBackendConfigured()) return { status: 'not-configured' }

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(body),
    })

    if (!res.ok) {
      const data = await res.json().catch(() => null)
      return {
        status: 'error',
        message:
          (data as { message?: string } | null)?.message ??
          `Richiesta non riuscita (${res.status}).`,
      }
    }

    return { status: 'success' }
  } catch {
    return {
      status: 'error',
      message: 'Impossibile contattare il server. Riprova tra qualche istante.',
    }
  }
}

export const registerUser = (payload: RegisterPayload) => post('/auth/register', payload)
export const loginUser = (payload: LoginPayload) => post('/auth/login', payload)