/* =========================================================================
 * MOCK DATA — UI ONLY
 * =========================================================================
 * Everything in this file is placeholder data used exclusively to render the
 * dashboard UI. It is NOT persisted anywhere and it does NOT represent a real
 * user, a real credit balance or real analytics.
 *
 * When the backend is connected, delete this file and replace each import with
 * the corresponding API call. The shapes below are intentionally the shapes we
 * expect the API to return, so the swap is a one-line change per consumer.
 * ========================================================================= */

export interface DashboardUser {
  name: string
  email: string
  initials: string
}

export interface CreditsState {
  balance: number
  monthlyAllowance: number
  recentUsage: { label: string; cost: number; at: string }[]
}

export interface OverviewMetrics {
  leadsFound: number
  audienceQuestions: number
  contentIdeas: number
}

export interface ActivityItem {
  id: string
  title: string
  detail: string
  at: string
  kind: 'research' | 'content' | 'brand' | 'strategy'
}

/** Placeholder account shown in the header — replaced by the session user. */
export const MOCK_USER: DashboardUser = {
  name: 'Marco Rossi',
  email: 'marco@example.com',
  initials: 'MR',
}

/** Placeholder credit wallet — replaced by GET /credits. */
export const MOCK_CREDITS: CreditsState = {
  balance: 4850,
  monthlyAllowance: 6000,
  recentUsage: [
    { label: 'AI Research', cost: 50, at: '2 ore fa' },
    { label: 'Generate post', cost: 20, at: '5 ore fa' },
    { label: 'Generate image', cost: 80, at: 'Ieri' },
    { label: 'Generate post', cost: 20, at: 'Ieri' },
  ],
}

/** Placeholder metrics — replaced by GET /overview. */
export const MOCK_METRICS: OverviewMetrics = {
  leadsFound: 128,
  audienceQuestions: 46,
  contentIdeas: 72,
}

/** Placeholder activity feed — replaced by GET /activity. */
export const MOCK_ACTIVITY: ActivityItem[] = [
  {
    id: 'a1',
    kind: 'research',
    title: 'Research completata',
    detail: '12 nuove domande trovate per "content marketing B2B"',
    at: '2 ore fa',
  },
  {
    id: 'a2',
    kind: 'content',
    title: 'Contenuto generato',
    detail: '3 varianti di post LinkedIn su "ROI dei contenuti"',
    at: '5 ore fa',
  },
  {
    id: 'a3',
    kind: 'strategy',
    title: 'Strategia aggiornata',
    detail: 'Piano editoriale della prossima settimana rigenerato',
    at: 'Ieri',
  },
  {
    id: 'a4',
    kind: 'brand',
    title: 'Brand Profile aggiornato',
    detail: 'Tone of voice e posizionamento rivisti',
    at: '2 giorni fa',
  },
]

/** Reference price list shown in the credits UI. */
export const CREDIT_COSTS = [
  { label: 'AI Research', cost: 50 },
  { label: 'Generate post', cost: 20 },
  { label: 'Generate image', cost: 80 },
  { label: 'Generate video', cost: 300 },
]