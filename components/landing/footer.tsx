import { Sparkles } from 'lucide-react'

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <span className="font-semibold text-[#111827] text-sm">Social AI Pro</span>
              <p className="text-xs text-[#6B7280]">Your AI-powered social media team.</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E5E7EB] text-center">
          <p className="text-xs text-[#6B7280]">© 2026 Social AI Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
