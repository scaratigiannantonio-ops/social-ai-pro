'use client'

import { FadeIn, SlideIn } from '@/components/ui/animate'
import { CreditCard, Search, Edit, ImageIcon, Video } from 'lucide-react'

const creditItems = [
  { icon: Search, label: 'Research', credits: 50 },
  { icon: Edit, label: 'Generate post', credits: 20 },
  { icon: ImageIcon, label: 'Generate image', credits: 80 },
  { icon: Video, label: 'Generate video', credits: 300 },
]

export default function Credits() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-4">
            One simple subscription. AI credits when you use AI.
          </h2>
          <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-14">
            Your monthly plan includes a generous amount of AI credits. Use them for research, content generation, images and videos — you only spend credits when you use AI features.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-4xl mx-auto">
          {/* Left — Credits wallet card */}
          <SlideIn from="left">
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] px-5 py-4">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-white" />
                  <span className="text-sm font-semibold text-white">AI Credits</span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-3xl font-bold text-[#111827] mb-1">4,850</p>
                <p className="text-sm text-[#6B7280] mb-4">credits remaining</p>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-[#10B981] rounded-full transition-all" />
                </div>
                <p className="text-xs text-[#6B7280] mt-2">72% of monthly credits available</p>
              </div>
            </div>
          </SlideIn>

          {/* Right — Credits consumption */}
          <SlideIn from="right">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#111827] uppercase tracking-wider mb-4">Credits per action</p>
              {creditItems.map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white rounded-lg px-4 py-3 border border-[#E5E7EB]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#F7F8FA] flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-[#6366F1]" />
                    </div>
                    <span className="text-sm text-[#111827] font-medium">{item.label}</span>
                  </div>
                  <span className="text-sm font-semibold text-[#6366F1] bg-[#6366F1]/5 px-3 py-1 rounded-full">
                    {item.credits} credits
                  </span>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
