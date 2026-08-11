'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/ui/animate'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is Social AI Pro?',
    a: 'Social AI Pro is an AI-powered social media intelligence and content platform. It combines audience research, content strategy and AI content generation into one tool — so you can create social media content that is backed by real data and tailored to your brand.',
  },
  {
    q: 'Do I need marketing experience?',
    a: 'Not at all. Social AI Pro is designed for business owners, solopreneurs and small teams who want professional social media results without hiring an agency or learning complex marketing tools. The AI guides you through every step.',
  },
  {
    q: 'What are AI credits?',
    a: 'AI credits are the currency you use when Social AI Pro performs AI-powered actions like research, content generation, image creation or video generation. Your monthly plan includes a generous amount of credits, and you only spend them when you actively use AI features.',
  },
  {
    q: 'Which social networks are supported?',
    a: 'Social AI Pro creates content optimized for Instagram, TikTok, YouTube, LinkedIn, Twitter/X and Facebook. Each piece of content is tailored to the specific format, tone and best practices of the platform you choose.',
  },
  {
    q: 'Can Social AI Pro learn my brand?',
    a: 'Yes. When you set up your account, Social AI Pro builds a complete brand intelligence profile by analyzing your website, social profiles and existing content. It learns your tone of voice, target audience, positioning and more — so every piece of content sounds authentically like you.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. There are no long-term contracts. You can cancel your subscription at any time, and you will continue to have access until the end of your current billing period.',
  },
  {
    q: 'Can I connect my existing social accounts?',
    a: 'Yes. You can connect your existing social media accounts to Social AI Pro for direct publishing and analytics tracking. The platform supports all major social networks and makes it easy to manage everything from one dashboard.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-14">
            Frequently asked questions
          </h2>
        </FadeIn>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-[#111827] pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B7280] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-sm text-[#6B7280] leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
