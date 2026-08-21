'use client'

import { useState } from 'react'
import {
  Building2,
  User,
  Mail,
  MapPin,
  FileText,
  Save,
  CheckCircle2,
  Download,
  Eye,
  CreditCard,
} from 'lucide-react'

interface BillingData {
  customerType: 'individual' | 'business'
  name: string
  companyName: string
  email: string
  taxCode: string
  vatNumber: string
  address: string
  postalCode: string
  city: string
  province: string
  country: string
  pec: string
  sdiCode: string
}

const initialBillingData: BillingData = {
  customerType: 'individual',
  name: '',
  companyName: '',
  email: '',
  taxCode: '',
  vatNumber: '',
  address: '',
  postalCode: '',
  city: '',
  province: '',
  country: 'Italia',
  pec: '',
  sdiCode: '',
}

const invoices = [
  {
    id: '—',
    date: '—',
    description: 'Nessuna fattura ancora disponibile',
    amount: '—',
    status: 'In attesa',
  },
]

export default function BillingPage() {
  const [billingData, setBillingData] =
    useState<BillingData>(initialBillingData)

  const [saved, setSaved] = useState(false)

  function updateField(
    field: keyof BillingData,
    value: string,
  ) {
    setBillingData((current) => ({
      ...current,
      [field]: value,
    }))
    setSaved(false)
  }

  function handleSave(event: React.FormEvent) {
    event.preventDefault()

    // Frontend-only for now.
    // The data will later be persisted through the backend.
    setSaved(true)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#111827] sm:text-3xl">
          Billing
        </h1>

        <p className="mt-2 max-w-2xl text-[15px] text-[#6B7280]">
          Gestisci i tuoi dati di fatturazione e consulta lo storico delle
          fatture del tuo account Social AI Pro.
        </p>
      </div>

      {/* Success message */}
      {saved && (
        <div className="flex items-center gap-3 rounded-xl border border-[#A7F3D0] bg-[#ECFDF5] px-4 py-3">
          <CheckCircle2 className="h-5 w-5 text-[#10B981]" />

          <p className="text-sm font-medium text-[#047857]">
            Dati di fatturazione salvati.
          </p>
        </div>
      )}

      {/* Billing information */}
      <form onSubmit={handleSave}>
        <div className="rounded-2xl border border-[#E5E7EB] bg-white">
          <div className="border-b border-[#E5E7EB] px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
                <FileText className="h-5 w-5 text-[#6366F1]" />
              </div>

              <div>
                <h2 className="text-base font-semibold text-[#111827]">
                  Dati di fatturazione
                </h2>

                <p className="text-sm text-[#6B7280]">
                  Questi dati verranno utilizzati per la fatturazione.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 p-6">
            {/* Customer type */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#111827]">
                Tipo di cliente
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() =>
                    updateField('customerType', 'individual')
                  }
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    billingData.customerType === 'individual'
                      ? 'border-[#6366F1] bg-[#EEF2FF]'
                      : 'border-[#E5E7EB] hover:bg-[#F7F8FA]'
                  }`}
                >
                  <User className="h-5 w-5 text-[#6366F1]" />

                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Persona fisica
                    </p>

                    <p className="text-xs text-[#6B7280]">
                      Privato o professionista
                    </p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    updateField('customerType', 'business')
                  }
                  className={`flex items-center gap-3 rounded-xl border p-4 text-left transition-colors ${
                    billingData.customerType === 'business'
                      ? 'border-[#6366F1] bg-[#EEF2FF]'
                      : 'border-[#E5E7EB] hover:bg-[#F7F8FA]'
                  }`}
                >
                  <Building2 className="h-5 w-5 text-[#6366F1]" />

                  <div>
                    <p className="text-sm font-semibold text-[#111827]">
                      Azienda
                    </p>

                    <p className="text-xs text-[#6B7280]">
                      Società o impresa
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Identity */}
            <div className="grid gap-5 md:grid-cols-2">
              <Field
                label="Nome e cognome"
                value={billingData.name}
                onChange={(value) =>
                  updateField('name', value)
                }
                placeholder="Mario Rossi"
              />

              <Field
                label="Ragione sociale"
                value={billingData.companyName}
                onChange={(value) =>
                  updateField('companyName', value)
                }
                placeholder="Facoltativo"
              />

              <Field
                label="Email"
                type="email"
                value={billingData.email}
                onChange={(value) =>
                  updateField('email', value)
                }
                placeholder="nome@email.com"
              />

              <Field
                label="Codice fiscale"
                value={billingData.taxCode}
                onChange={(value) =>
                  updateField('taxCode', value)
                }
                placeholder="Codice fiscale"
              />

              <Field
                label="Partita IVA"
                value={billingData.vatNumber}
                onChange={(value) =>
                  updateField('vatNumber', value)
                }
                placeholder="IT00000000000"
              />
            </div>

            {/* Address */}
            <div className="border-t border-[#E5E7EB] pt-6">
              <div className="mb-4 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#6366F1]" />

                <h3 className="text-sm font-semibold text-[#111827]">
                  Indirizzo di fatturazione
                </h3>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Field
                    label="Indirizzo"
                    value={billingData.address}
                    onChange={(value) =>
                      updateField('address', value)
                    }
                    placeholder="Via Roma 1"
                  />
                </div>

                <Field
                  label="CAP"
                  value={billingData.postalCode}
                  onChange={(value) =>
                    updateField('postalCode', value)
                  }
                  placeholder="20100"
                />

                <Field
                  label="Comune"
                  value={billingData.city}
                  onChange={(value) =>
                    updateField('city', value)
                  }
                  placeholder="Milano"
                />

                <Field
                  label="Provincia"
                  value={billingData.province}
                  onChange={(value) =>
                    updateField('province', value)
                  }
                  placeholder="MI"
                />

                <Field
                  label="Paese"
                  value={billingData.country}
                  onChange={(value) =>
                    updateField('country', value)
                  }
                  placeholder="Italia"
                />
              </div>
            </div>

            {/* SDI */}
            <div className="border-t border-[#E5E7EB] pt-6">
              <div className="mb-4 flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#6366F1]" />

                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">
                    Dati di fatturazione elettronica
                  </h3>

                  <p className="text-xs text-[#6B7280]">
                    Utilizzati successivamente per la fatturazione
                    elettronica.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Field
                  label="PEC"
                  type="email"
                  value={billingData.pec}
                  onChange={(value) =>
                    updateField('pec', value)
                  }
                  placeholder="pec@esempio.it"
                />

                <Field
                  label="Codice destinatario SDI"
                  value={billingData.sdiCode}
                  onChange={(value) =>
                    updateField('sdiCode', value)
                  }
                  placeholder="Codice SDI"
                />
              </div>
            </div>

            {/* Save */}
            <div className="flex justify-end border-t border-[#E5E7EB] pt-6">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <Save className="h-4 w-4" />
                Salva dati
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Invoice history */}
      <div className="rounded-2xl border border-[#E5E7EB] bg-white">
        <div className="border-b border-[#E5E7EB] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF2FF]">
              <CreditCard className="h-5 w-5 text-[#6366F1]" />
            </div>

            <div>
              <h2 className="text-base font-semibold text-[#111827]">
                Storico fatture
              </h2>

              <p className="text-sm text-[#6B7280]">
                Le fatture emesse per il tuo account appariranno qui.
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-[#E5E7EB] bg-[#F7F8FA] text-left">
                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Fattura
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Data
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Descrizione
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Totale
                </th>

                <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Stato
                </th>

                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-[#6B7280]">
                  Azioni
                </th>
              </tr>
            </thead>

            <tbody>
              {invoices.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="border-b border-[#E5E7EB] last:border-0"
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#111827]">
                    {invoice.id}
                  </td>

                  <td className="px-6 py-4 text-sm text-[#6B7280]">
                    {invoice.date}
                  </td>

                  <td className="px-6 py-4 text-sm text-[#6B7280]">
                    {invoice.description}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-[#111827]">
                    {invoice.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-[#F3F4F6] px-2.5 py-1 text-xs font-medium text-[#6B7280]">
                      {invoice.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-end gap-2">
                      <button
                        type="button"
                        disabled
                        className="rounded-lg p-2 text-[#9CA3AF]"
                        title="Visualizza"
                      >
                        <Eye className="h-4 w-4" />
                      </button>

                      <button
                        type="button"
                        disabled
                        className="rounded-lg p-2 text-[#9CA3AF]"
                        title="Scarica"
                      >
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Future billing notice */}
      <div className="rounded-xl border border-[#E5E7EB] bg-[#F7F8FA] p-5">
        <p className="text-sm font-semibold text-[#111827]">
          Fatturazione automatica
        </p>

        <p className="mt-1 text-sm leading-relaxed text-[#6B7280]">
          La generazione e l&apos;emissione delle fatture verranno collegate
          successivamente al sistema di pagamento e al backend fiscale di
          Social AI Pro. I dati inseriti qui saranno utilizzati come base per
          la configurazione futura.
        </p>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#111827]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2.5 text-sm text-[#111827] outline-none transition focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10"
      />
    </div>
  )
}
