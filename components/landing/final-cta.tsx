'use client'

import { FadeIn } from '@/components/ui/animate'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
      <div className="max-w-[1200px] mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Your next social media strategy shouldn&apos;t start with a blank page.
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Let AI research, plan and create with you.
          </p>
          <button onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-white text-[#111827] px-8 py-3.5 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors">
            Start Social AI Pro for €29/month
            <ArrowRight className="w-4 h-4" />
          </button>
        </FadeIn>
      </div>
    </section>
  )
}
