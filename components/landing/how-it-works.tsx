'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { Brain, Compass, Map, LayoutGrid } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: Brain,
    title: 'Understand your brand',
    desc: 'Social AI Pro learns your brand identity, tone of voice, target audience, products and competitors to build a complete profile.',
  },
  {
    num: '02',
    icon: Compass,
    title: 'Discover opportunities',
    desc: 'AI agents research your market, find trending topics, and discover the exact questions your audience is asking online.',
  },
  {
    num: '03',
    icon: Map,
    title: 'Create your strategy',
    desc: 'Get a data-driven content strategy with pillars, themes and a publishing calendar tailored to your brand.',
  },
  {
    num: '04',
    icon: LayoutGrid,
    title: 'Create and organize',
    desc: 'Generate posts, carousels, videos and more — optimized for each platform — and schedule them on your content calendar.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-16">
            How it works
          </h2>
        </FadeIn>

        <Stagger staggerDelay={0.1} className="relative grid md:grid-cols-4 gap-8">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#6366F1]/20 via-[#8B5CF6]/30 to-[#6366F1]/20" />

          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div className="relative text-center">
                {/* Number badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-sm font-bold text-white">{step.num}</span>
                </div>

                <div className="w-10 h-10 rounded-lg bg-[#F7F8FA] flex items-center justify-center mx-auto mb-3">
                  <step.icon className="w-5 h-5 text-[#6366F1]" />
                </div>

                <h3 className="text-base font-semibold text-[#111827] mb-2">{step.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{step.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
