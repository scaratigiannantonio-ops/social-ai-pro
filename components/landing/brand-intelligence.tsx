'use client'

import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Brain, Globe, ShoppingBag, Users, MessageCircle, Crosshair, Star, Eye, Share2 } from 'lucide-react'

const profileItems = [
  { icon: Globe, label: 'Website' },
  { icon: ShoppingBag, label: 'Products & Services' },
  { icon: Users, label: 'Target Audience' },
  { icon: MessageCircle, label: 'Tone of Voice' },
  { icon: Crosshair, label: 'Positioning' },
  { icon: Star, label: 'Unique Selling Proposition' },
  { icon: Eye, label: 'Competitors' },
  { icon: Share2, label: 'Social Profiles' },
]

const mockProfile = [
  { label: 'Brand', value: 'Acme Corp' },
  { label: 'Website', value: 'acmecorp.com' },
  { label: 'Industry', value: 'B2B SaaS' },
  { label: 'Tone', value: 'Professional & friendly' },
  { label: 'Audience', value: 'Marketing managers, 25-45' },
  { label: 'USP', value: 'All-in-one marketing automation' },
]

export default function BrandIntelligence() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-4">
            Your AI learns your brand.
          </h2>
          <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-14">
            Social AI Pro builds a complete brand intelligence profile so every piece of content sounds like you.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <FadeIn>
            <div>
              <h3 className="text-xl font-semibold text-[#111827] mb-4">
                A complete brand profile, automatically.
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Tell Social AI Pro about your brand once. It analyzes your website, social profiles and existing content to understand who you are, who you serve and how you communicate.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {profileItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-[#111827]">
                    <item.icon className="w-4 h-4 text-[#6366F1] flex-shrink-0" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — Brand profile mockup */}
          <SlideIn from="right">
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-[#E5E7EB] bg-[#F7F8FA] flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#6366F1]" />
                <span className="text-sm font-semibold text-[#111827]">Brand Profile</span>
                <span className="ml-auto text-[10px] font-medium text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">Complete</span>
              </div>
              <div className="p-4 space-y-3">
                {mockProfile.map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-[#E5E7EB] last:border-0">
                    <span className="text-xs font-medium text-[#6B7280] uppercase tracking-wider">{row.label}</span>
                    <span className="text-sm text-[#111827] font-medium">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
