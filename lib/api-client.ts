import { getAccessToken } from './auth-client'

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '') ?? ''

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

async function authenticatedFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const token = getAccessToken()

  if (!token) {
    throw new Error('Utente non autenticato.')
  }

  const headers = new Headers(options.headers)

  headers.set('Authorization', `Bearer ${token}`)
  headers.set('Content-Type', 'application/json')

  return fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  })
}

export async function getCreditBalance(): Promise<CreditBalance> {
  const response = await authenticatedFetch('/credits/balance')

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data?.detail ?? 'Impossibile recuperare il saldo crediti.',
    )
  }

  return data
}

export async function generateContent(
  prompt: string,
): Promise<GenerateContentResponse> {
  const response = await authenticatedFetch('/content/generate', {
    method: 'POST',
    body: JSON.stringify({ prompt }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data?.detail ?? 'Impossibile generare il contenuto.',
    )
  }

  return data
}
