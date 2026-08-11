'use client'

import { Search, Target, PenTool, Sparkles, BarChart, TrendingUp } from 'lucide-react'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'

const agents = [
  { icon: Search, name: 'Research Agent', desc: 'Scans the web, forums, and social platforms to find what your audience is searching for and talking about.' },
  { icon: Target, name: 'Strategy Agent', desc: 'Builds data-driven content strategies with pillars, themes and publishing cadence tailored to your brand.' },
  { icon: PenTool, name: 'Content Agent', desc: 'Writes posts, captions, scripts and long-form content optimized for each social platform.' },
  { icon: Sparkles, name: 'Creative Agent', desc: 'Generates visual concepts, carousel designs and video ideas that match your brand identity.' },
  { icon: BarChart, name: 'Analytics Agent', desc: 'Tracks performance, identifies top-performing content patterns and suggests what to do next.' },
  { icon: TrendingUp, name: 'Optimization Agent', desc: 'Continuously improves your content based on engagement data, trends and audience signals.' },
]

const agentNodes = [
  { x: 50, y: 15 },
  { x: 85, y: 35 },
  { x: 85, y: 65 },
  { x: 50, y: 85 },
  { x: 15, y: 65 },
  { x: 15, y: 35 },
]

export default function Agents() {
  return (
    <section id="agents" className="py-20 md:py-28 px-6 bg-[#F7F8FA]">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] text-center tracking-tight mb-4">
            A complete AI team inside one platform.
          </h2>
          <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-14">
            Six specialized AI agents work together to handle every aspect of your social media marketing.
          </p>
        </FadeIn>

        <Stagger staggerDelay={0.08} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {agents.map((agent, i) => (
            <StaggerItem key={i}>
              <div className="bg-white rounded-xl p-6 border border-[#E5E7EB] hover:shadow-md hover:border-[#6366F1]/20 transition-all h-full group">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <agent.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-[#111827] mb-2">{agent.name}</h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">{agent.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Agent network visualization */}
        <FadeIn>
          <div className="max-w-sm mx-auto">
            <svg viewBox="0 0 100 100" className="w-full" aria-label="AI agents network diagram">
              {/* Lines from center to each node */}
              {agentNodes.map((node, i) => (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2={node.x}
                  y2={node.y}
                  stroke="#E5E7EB"
                  strokeWidth="0.5"
                />
              ))}
              {/* Connecting ring */}
              <circle cx="50" cy="50" r="32" fill="none" stroke="#E5E7EB" strokeWidth="0.3" strokeDasharray="2 2" />
              {/* Center hub */}
              <circle cx="50" cy="50" r="6" fill="url(#agentGrad)" />
              <text x="50" y="52" textAnchor="middle" fill="white" fontSize="3" fontWeight="bold">AI</text>
              {/* Agent nodes */}
              {agentNodes.map((node, i) => (
                <g key={i}>
                  <circle cx={node.x} cy={node.y} r="4" fill="#F7F8FA" stroke="#6366F1" strokeWidth="0.5" />
                  <text x={node.x} y={node.y + 1.2} textAnchor="middle" fill="#6366F1" fontSize="2.5" fontWeight="600">
                    {agents[i]?.name?.split(' ')?.[0]?.charAt(0) ?? ''}
                  </text>
                </g>
              ))}
              <defs>
                <linearGradient id="agentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
