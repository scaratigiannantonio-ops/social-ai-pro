'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/animate'
import { ArrowRight } from 'lucide-react'

const workflowSteps = ['Research', 'Strategy', 'Hook', 'Content', 'Variations', 'Calendar']

type Platform = 'Instagram' | 'TikTok' | 'YouTube' | 'LinkedIn'

const platformContent: Record<Platform, { title: string; body: string; meta: string }> = {
  Instagram: {
    title: 'Carousel Post',
    body: '5 signs your content strategy is outdated (and what to do instead). Swipe to discover the frameworks top brands are using in 2026 to stay relevant and grow their audience.',
    meta: '10 slides · Carousel · Engagement-focused',
  },
  TikTok: {
    title: 'Short Video Script',
    body: 'POV: You just discovered your competitors are using AI to create 10x more content than you. Here\'s the 3-step system to catch up without burning out your team.',
    meta: '45 sec · Trending audio · Hook-first',
  },
  YouTube: {
    title: 'Long-form Video',
    body: 'I Tested AI Content Tools for 30 Days — Here\'s What Actually Worked. A deep dive into the tools, workflows and results of AI-powered content creation for business.',
    meta: '12 min · Tutorial · SEO-optimized',
  },
  LinkedIn: {
    title: 'Thought Leadership Post',
    body: 'Most brands are still guessing what to post. The ones growing fastest? They\'re using audience intelligence. Here\'s the framework we use to turn real audience questions into high-performing content.',
    meta: 'Text post · Professional tone · CTA included',
  },
}

const platforms: Platform[] = ['Instagram', 'TikTok', 'YouTube', 'LinkedIn']

export default function ContentSection() {
  const [activePlatform, setActivePlatform] = useState<Platform>('Instagram')
  const content = platformContent[activePlatform]

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-4">
            From one idea to an entire content strategy.
          </h2>
          <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12">
            Social AI Pro transforms a single topic into platform-specific content, ready to publish.
          </p>
        </FadeIn>

        {/* Workflow bar */}
        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-1 md:gap-2 mb-14 flex-wrap">
            {workflowSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-1 md:gap-2">
                <span className="text-xs md:text-sm font-medium text-[#111827] bg-[#F7F8FA] px-3 py-1.5 rounded-lg border border-[#E5E7EB]">
                  {step}
                </span>
                {i < workflowSteps.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-[#6B7280] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Platform tabs */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-1 mb-6 bg-[#F7F8FA] p-1 rounded-lg">
              {platforms.map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePlatform(p)}
                  className={`flex-1 text-sm py-2 rounded-md font-medium transition-all ${
                    activePlatform === p
                      ? 'bg-white text-[#111827] shadow-sm'
                      : 'text-[#6B7280] hover:text-[#111827]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Content card */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider">{activePlatform}</span>
                <span className="text-xs text-[#6B7280]">{content?.meta ?? ''}</span>
              </div>
              <h4 className="text-lg font-semibold text-[#111827] mb-3">{content?.title ?? ''}</h4>
              <p className="text-sm text-[#6B7280] leading-relaxed">{content?.body ?? ''}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
