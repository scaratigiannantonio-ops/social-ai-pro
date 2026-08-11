'use client'

import { FadeIn } from '@/components/ui/animate'
import { Check, ArrowRight } from 'lucide-react'

const features = [
  'Brand Intelligence',
  'AI Research',
  'AI Content Strategy',
  'AI Content Generator',
  'AI Agents',
  'Content Calendar',
  'Analytics',
  'Monthly AI credits',
  'No setup fees',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-14">
            Simple, transparent pricing.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-[#E5E7EB] shadow-lg overflow-hidden">
            {/* Header */}
            <div className="p-8 pb-6 text-center border-b border-[#E5E7EB]">
              <p className="text-sm font-semibold text-[#6366F1] uppercase tracking-wider mb-2">Social AI Pro</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-[#111827]">€29</span>
                <span className="text-[#6B7280]">/month</span>
              </div>
            </div>

            {/* Features */}
            <div className="p-8">
              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#111827]">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button onClick={() => window.open('#', '_self')} className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Start for €29/month
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-[#6B7280] mt-4">Cancel anytime.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
