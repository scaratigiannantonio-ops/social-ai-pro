/* =========================================================================
 * SOCIAL AI PRO - AUTH CLIENT
 * ========================================================================= */

export interface RegisterPayload {
  name: string
  email: string
  password: string
}

export interface LoginPayload {
  email: string
  password: string
  remember?: boolean
}

export interface AuthUser {
  id: number
  name?: string
  email?: string
  credits?: number
  plan?: string
}

export interface CreditBalance {
  user_id: number
  credits: number
  plan: string
}

export interface GenerateContentResponse {
  content: string
  credits_used: number
  remaining_credits: number
}

export type AuthResult =
  | {
      status: 'success'
      access_token?: string
      user?: AuthUser
    }
  | {
      status: 'not-configured'
    }
  | {
      status: 'error'
      message: string
    }

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? ''

const TOKEN_KEY = 'social_ai_pro_access_token'

export const isBackendConfigured = (): boolean => {
  return API_BASE.length > 0
}

/* =========================================================================
 * TOKEN
 * ========================================================================= */

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') {
    return null
  }

  return localStorage.getItem(TOKEN_KEY)
}

export function saveAccessToken(token: string): void {
  if (typeof window === 'undefined') {
    return
  }

  localStorage.setItem(TOKEN_KEY, token)
}

export function removeAccessToken(): void {
  if (typeof window === 'undefined') {
    return
  }

  localStorage.removeItem(TOKEN_KEY)
}

export function isAuthenticated(): boolean {
  return getAccessToken() !== null
}

/* =========================================================================
 * GENERIC POST
 * ========================================================================= */

async function post(
  path: string,
  body: unknown,
): Promise<AuthResult> {
  if (!isBackendConfigured()) {
    return {
      status: 'not-configured',
    }
  }

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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

/* =========================================================================
 * REGISTER
 * ========================================================================= */

export function registerUser(
  payload: RegisterPayload,
): Promise<AuthResult> {
  return post('/auth/register', payload)
}

/* =========================================================================
 * LOGIN
 * ========================================================================= */

export function loginUser(
  payload: LoginPayload,
): Promise<AuthResult> {
  return post('/auth/login', {
    email: payload.email,
    password: payload.password,
  })
}

/* =========================================================================
 * AUTHENTICATED REQUEST
 * ========================================================================= */

async function authenticatedFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const token = getAccessToken()

  const headers = new Headers(options.headers)

  headers.set('Accept', 'application/json')

  if (options.body) {
    headers.set('Content-Type', 'application/json')
  }

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  return fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  })
}

/* =========================================================================
 * CURRENT USER
 * ========================================================================= */

export async function getCurrentUser(): Promise<AuthUser | null> {
  if (!isBackendConfigured()) {
    return null
  }

  try {
    const res = await authenticatedFetch('/auth/me')

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        removeAccessToken()
      }

      return null
    }

    return await res.json()
  } catch {
    return null
  }
}

/* =========================================================================
 * CREDIT BALANCE
 * ========================================================================= */

export async function getCreditBalance(): Promise<CreditBalance | null> {
  if (!isBackendConfigured()) {
    return null
  }

  try {
    const res = await authenticatedFetch('/credits/balance')

    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        removeAccessToken()
      }

      return null
    }

    return await res.json()
  } catch {
    return null
  }
}

/* =========================================================================
 * GENERATE CONTENT
 * ========================================================================= */

export async function generateContent(
  prompt: string,
): Promise<GenerateContentResponse> {
  if (!isBackendConfigured()) {
    throw new Error('Backend non configurato.')
  }

  const res = await authenticatedFetch('/content/generate', {
    method: 'POST',
    body: JSON.stringify({
      prompt,
    }),
  })

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    if (res.status === 401 || res.status === 403) {
      removeAccessToken()
    }

    throw new Error(
      data?.detail ??
        data?.message ??
        `Generazione non riuscita (${res.status}).`,
    )
  }

  return data
}
