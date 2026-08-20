'use client'

import { FadeIn, SlideIn } from '@/components/ui/animate'
import { CreditCard, Sparkles } from 'lucide-react'

export default function Credits() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-4">
            One simple subscription. AI credits when you use AI.
          </h2>

          <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-14">
            Your subscription keeps things simple. AI credits are purchased
            separately and you only spend them when you use AI features.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <SlideIn from="left">
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-5 py-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white">
                    AI Credits
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#6366F1]" />
                  </div>

                  <div>
                    <p className="text-base font-semibold text-[#111827]">
                      Credits purchased separately
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                      Your €29/month subscription gives you access to Social AI
                      Pro. AI credits are purchased separately and are consumed
                      only when you use AI-powered features.
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                      Your available balance is shown directly in your dashboard
                      and updated from your account in real time.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-lg bg-[#F7F8FA] px-4 py-4">
                  <p className="text-sm font-medium text-[#111827]">
                    Pay only for the AI you use
                  </p>

                  <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                    Credit consumption depends on the AI operation you run.
                    The applicable cost can be displayed before an operation is
                    executed.
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
