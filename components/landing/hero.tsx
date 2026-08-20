'use client'

import { ArrowRight, Sparkles, Calendar, CreditCard, Lightbulb, HelpCircle, BarChart3 } from 'lucide-react'
import { FadeIn, SlideIn } from '@/components/ui/animate'

const contentIdeas = [
  { title: '5 ways SaaS teams lose productivity', tag: 'LinkedIn', color: 'bg-blue-100 text-blue-700' },
  { title: 'How AI is changing content marketing', tag: 'Blog', color: 'bg-purple-100 text-purple-700' },
  { title: 'The ROI of social media strategy', tag: 'Twitter', color: 'bg-sky-100 text-sky-700' },
]

const audienceQuestions = [
  'What tools do small teams use for social media?',
  'How to measure content marketing ROI?',
  'Best posting times for B2B on LinkedIn?',
]

const calendarDays = [
  { day: 'Mon', dots: ['bg-[#6366F1]', 'bg-[#10B981]'] },
  { day: 'Tue', dots: ['bg-[#8B5CF6]'] },
  { day: 'Wed', dots: ['bg-[#6366F1]', 'bg-[#8B5CF6]'] },
  { day: 'Thu', dots: ['bg-[#10B981]'] },
  { day: 'Fri', dots: ['bg-[#6366F1]', 'bg-[#10B981]', 'bg-[#8B5CF6]'] },
]

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left content */}
        <div className="flex-1 max-w-xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white mb-6">
              <Sparkles className="w-4 h-4 text-[#6366F1]" />
              <span className="text-sm text-[#6B7280] font-medium">Your AI Social Media Team</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#111827] leading-tight tracking-tight mb-6">
              Turn your social media into an AI-powered growth engine.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Social AI Pro researches your audience, discovers what people are asking, creates your content strategy and helps you publish content that actually matters.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={() => document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-3 rounded-lg font-medium text-base hover:opacity-90 transition-opacity"
              >
                Start for €29/month
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 border border-[#E5E7EB] text-[#111827] px-6 py-3 rounded-lg font-medium text-base hover:bg-gray-50 transition-colors"
              >
                See how it works
              </button>
            </div>
            <p className="text-sm text-[#6B7280]">No complex setup. No marketing team required.</p>
          </FadeIn>
        </div>

        {/* Right — Dashboard mockup */}
        <SlideIn from="right" delay={0.2} className="flex-1 w-full max-w-lg lg:max-w-xl">
          <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-lg overflow-hidden">
            {/* App header */}
            <div className="px-4 py-3 border-b border-[#E5E7EB] flex items-center gap-2 bg-[#F7F8FA]">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-[#111827]">Social AI Pro</span>
              <div className="ml-auto flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Content Ideas */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-[#6366F1]" />
                  <span className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Content Ideas</span>
                </div>
                <div className="space-y-2">
                  {contentIdeas.map((idea, i) => (
                    <div key={i} className="flex items-center justify-between bg-[#F7F8FA] rounded-lg px-3 py-2">
                      <span className="text-sm text-[#111827] truncate mr-2">{idea.title}</span>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap ${idea.color}`}>
                        {idea.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Audience Questions */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <HelpCircle className="w-4 h-4 text-[#8B5CF6]" />
                  <span className="text-xs font-semibold text-[#111827] uppercase tracking-wider">Audience Questions</span>
                </div>
                <div className="space-y-1.5">
                  {audienceQuestions.map((q, i) => (
                    <div key={i} className="text-sm text-[#6B7280] bg-[#F7F8FA] rounded-lg px-3 py-2">
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row: Strategy + Calendar + Credits */}
              <div className="grid grid-cols-3 gap-3">
                {/* AI Strategy */}
                <div className="bg-gradient-to-br from-[#6366F1]/5 to-[#8B5CF6]/5 rounded-lg p-3 border border-[#6366F1]/10">
                  <BarChart3 className="w-4 h-4 text-[#6366F1] mb-1" />
                  <p className="text-[10px] font-semibold text-[#111827]">AI Strategy</p>
                  <p className="text-[10px] text-[#6B7280]">3 pillars active</p>
                </div>

                {/* Calendar strip */}
                <div className="bg-[#F7F8FA] rounded-lg p-3">
                  <Calendar className="w-4 h-4 text-[#6B7280] mb-1" />
                  <div className="flex gap-1.5">
                    {calendarDays.map((d) => (
                      <div key={d.day} className="flex flex-col items-center gap-0.5">
                        <span className="text-[8px] text-[#6B7280]">{d.day}</span>
                        <div className="flex gap-px">
                          {d.dots.map((c, j) => (
                            <div key={j} className={`w-1.5 h-1.5 rounded-full ${c}`} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credits */}
                <div className="bg-[#F7F8FA] rounded-lg p-3">
                  <CreditCard className="w-4 h-4 text-[#10B981] mb-1" />
                  <p className="text-[10px] font-semibold text-[#111827]">AI Credits</p>
                  <p className="text-[8px] text-[#6B7280]">Pay as you use</p>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  )
}
