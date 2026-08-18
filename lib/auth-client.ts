/* =========================================================================
 * AUTH CLIENT
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

export interface AuthUser {
  id: number
  name: string
  email: string
  credits?: number
  plan?: string
}

export type AuthResult =
  | {
      status: 'success'
      access_token?: string
      user?: AuthUser
    }
  | { status: 'not-configured' }
  | { status: 'error'; message: string }

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? ''

export const isBackendConfigured = () => API_BASE.length > 0

const TOKEN_KEY = 'social_ai_pro_access_token'

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(TOKEN_KEY)
}

export function saveAccessToken(token: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeAccessToken(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(TOKEN_KEY)
}

async function post(
  path: string,
  body: unknown,
): Promise<AuthResult> {
  if (!isBackendConfigured()) {
    return { status: 'not-configured' }
  }

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const data = await res.json().catch(() => null)

    if (!res.ok) {
      return {
        status: 'error',
        message:
          data?.detail ??
          data?.message ??
          `Richiesta non riuscita (${res.status}).`,
      }
    }

    if (data?.access_token) {
      saveAccessToken(data.access_token)
    }

    return {
      status: 'success',
      access_token: data?.access_token,
      user: data?.user,
    }
  } catch {
    return {
      status: 'error',
      message:
        'Impossibile contattare il server. Riprova tra qualche istante.',
    }
  }
}

export const registerUser = (
  payload: RegisterPayload,
) => post('/auth/register', payload)

export const loginUser = (
  payload: LoginPayload,
) => post('/auth/login', payload)
