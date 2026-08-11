import Navbar from '@/components/landing/navbar'
import Hero from '@/components/landing/hero'
import Problem from '@/components/landing/problem'
import HowItWorks from '@/components/landing/how-it-works'
import Agents from '@/components/landing/agents'
import BrandIntelligence from '@/components/landing/brand-intelligence'
import Research from '@/components/landing/research'
import ContentSection from '@/components/landing/content-section'
import Credits from '@/components/landing/credits'
import Pricing from '@/components/landing/pricing'
import FAQ from '@/components/landing/faq'
import FinalCTA from '@/components/landing/final-cta'
import Footer from '@/components/landing/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Agents />
      <BrandIntelligence />
      <Research />
      <ContentSection />
      <Credits />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
