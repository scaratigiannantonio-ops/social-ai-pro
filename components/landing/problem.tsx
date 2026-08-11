'use client'

import { Search, Users, Edit3, Target, BarChart2 } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'

const painPoints = [
  { icon: Search, title: 'Finding relevant topics', desc: 'Spending hours scrolling for content ideas that might resonate with your audience.' },
  { icon: Users, title: 'Understanding audience needs', desc: 'Guessing what your followers actually want instead of knowing it.' },
  { icon: Edit3, title: 'Creating content consistently', desc: 'The pressure of publishing regularly without running out of ideas.' },
  { icon: Target, title: 'Maintaining a strategy', desc: 'Posting without a clear plan, hoping something sticks.' },
  { icon: BarChart2, title: 'Measuring what works', desc: 'No clarity on which content drives results and which falls flat.' },
]

export default function Problem() {
  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-14">
            Stop guessing what to post.
          </h2>
        </FadeIn>

        <Stagger staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {painPoints.map((p, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-md transition-shadow h-full">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-[#6366F1]" />
                </div>
                <h3 className="text-base font-semibold text-[#111827] mb-2">{p.title}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#111827] mb-3">Social AI Pro solves all of this.</h3>
            <p className="text-[#6B7280] leading-relaxed">
              An AI-powered platform that researches your market, understands your audience, builds your strategy and creates content — so you can focus on growing your business.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
