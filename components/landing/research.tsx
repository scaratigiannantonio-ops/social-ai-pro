'use client'

import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Search } from 'lucide-react'

const researchRows = [
  { question: 'How to automate social media for small teams?', source: 'Reddit', relevance: 'High', angle: 'Tutorial post' },
  { question: 'Best tools for B2B content marketing?', source: 'Quora', relevance: 'High', angle: 'Comparison carousel' },
  { question: 'How often should a SaaS brand post on LinkedIn?', source: 'Google', relevance: 'Medium', angle: 'Data-driven thread' },
  { question: 'What content format gets the most engagement?', source: 'Twitter/X', relevance: 'High', angle: 'Infographic' },
]

function RelevanceBadge({ level }: { level: string }) {
  const colors = level === 'High' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-yellow-100 text-yellow-700'
  return <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${colors}`}>{level}</span>
}

export default function Research() {
  return (
    <section className="py-20 md:py-28 px-6 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-4">
            Know what your audience is asking before you create content.
          </h2>
          <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-14">
            AI agents scan forums, search engines and social platforms to surface the exact questions your audience is asking — so every piece of content you create is relevant.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <FadeIn>
            <div>
              <h3 className="text-xl font-semibold text-[#111827] mb-4">Real audience intelligence.</h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                Instead of guessing what to write, Social AI Pro shows you what people are actually searching for and discussing right now. Every content idea is backed by real demand.
              </p>
              <ul className="space-y-3">
                {['Discover trending questions in your niche', 'Find content gaps your competitors are missing', 'Get content angle suggestions for each topic', 'Sources from Reddit, Quora, Google and more'].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#111827]">
                    <div className="w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right — Research table mockup */}
          <SlideIn from="right">
            <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-lg overflow-hidden">
              <div className="px-4 py-3 border-b border-[#E5E7EB] bg-[#F7F8FA] flex items-center gap-2">
                <Search className="w-4 h-4 text-[#6366F1]" />
                <span className="text-sm font-semibold text-[#111827]">Research Results</span>
                <span className="ml-auto text-[10px] text-[#6B7280]">Last updated: Today</span>
              </div>
              {/* Table header */}
              <div className="grid grid-cols-[1fr_70px_65px_100px] px-4 py-2 text-[10px] font-semibold text-[#6B7280] uppercase tracking-wider border-b border-[#E5E7EB]">
                <span>Question</span>
                <span>Source</span>
                <span>Relevance</span>
                <span>Content Angle</span>
              </div>
              {/* Rows */}
              {researchRows.map((row, i) => (
                <div key={i} className={`grid grid-cols-[1fr_70px_65px_100px] px-4 py-3 text-sm items-center ${i % 2 === 1 ? 'bg-[#F7F8FA]/50' : ''} border-b border-[#E5E7EB] last:border-0`}>
                  <span className="text-[#111827] text-xs leading-snug pr-2">{row.question}</span>
                  <span className="text-[#6B7280] text-xs">{row.source}</span>
                  <RelevanceBadge level={row.relevance} />
                  <span className="text-[#6366F1] text-xs font-medium">{row.angle}</span>
                </div>
              ))}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
